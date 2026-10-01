const fs = require('fs');
const path = require('path');

function checkCase(fullPath) {
  const parts = path.resolve(fullPath).split(path.sep);
  let current = parts[0] + path.sep;
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    try {
      const items = fs.readdirSync(current);
      const match = items.find(item => item.toLowerCase() === part.toLowerCase());
      if (!match) return { error: `Not found: ${part} in ${current}` };
      if (match !== part) {
        return { error: `Case mismatch: expected "${part}", found "${match}" in ${current}` };
      }
      current = path.join(current, match);
    } catch (e) {
      return { error: e.message };
    }
  }
  return null;
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(full, 'utf-8');
      const importRegex = /(?:import\s+.*?from\s+['"]|import\s*\(?['"])([^'"]+)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (!importPath.startsWith('.')) continue;
        const target = path.resolve(path.dirname(full), importPath);
        let foundPath = null;
        for (const ext of ['', '.js', '.jsx', '.json', '.webp', '.png', '.svg', '.jpg', '.css']) {
          if (fs.existsSync(target + ext)) {
            foundPath = target + ext;
            break;
          }
        }
        if (!foundPath) {
          console.error(`MISSING: ${importPath} in ${full}`);
        } else {
          const res = checkCase(foundPath);
          if (res && res.error) {
            console.error(`CASE ERROR in ${path.relative('.', full)}: ${res.error}`);
          }
        }
      }
    }
  }
}

scanDir(path.resolve('./src'));
console.log('All imports scanned.');
