import React from 'react';

import amazonLogoPng from '../images/platforms/amazon-official-partner-logo.webp';
import amazonLogoWhitePng from '../images/platforms/amazon-official-partner-logo-white.webp';
import flipkartLogoPng from '../images/platforms/flipkart-growth-specialist-logo.webp';
import meeshoLogoPng from '../images/platforms/meesho-high-volume-partner-logo.webp';
import meeshoPinkLogoPng from '../images/platforms/meesho-pink-logo-transparent.webp';
import myntraLogoPng from '../images/platforms/myntra-official-partner-logo.webp';

// Platform Icons from src/images/platforms
import amazonIconPng from '../images/platforms/amazon-seller-central-icon.webp';
import amazonIconWhitePng from '../images/platforms/amazon-seller-central-icon-white.webp';
import flipkartIconPng from '../images/platforms/flipkart-seller-hub-icon.webp';
import meeshoIconPng from '../images/platforms/meesho-supplier-panel-icon.webp';
import myntraIconPng from '../images/platforms/myntra-seller-partner-icon.webp';
import myntraTransparentPng from '../images/platforms/myntra-logo-icon-transparent.webp';

// ── WORDMARK LOGOS (Optimized: Eager + Async Decoding for Instant Render) ──
export function AmazonLogo({ className = 'h-8 w-auto', style, loading = 'eager', decoding = 'async', ...props }) {
  return (
    <>
      {/* Light Mode / Inside White Hero & Marquee Pills */}
      <img
        src={amazonLogoPng}
        alt="Amazon India Authorized Partner Logo - A2Z Aaradhya"
        width="120"
        height="48"
        className={`${className} object-contain amazon-logo-dark dark:hidden`}
        style={style}
        draggable={false}
        loading={loading}
        decoding={decoding}
        {...props}
      />
      {/* Dark Mode: Crisp White Wordmark */}
      <img
        src={amazonLogoWhitePng}
        alt="Amazon India Authorized Partner Logo - A2Z Aaradhya"
        width="120"
        height="48"
        className={`${className} object-contain amazon-logo-white hidden dark:block`}
        style={style}
        draggable={false}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    </>
  );
}

export function FlipkartLogo({ className = 'h-8 w-auto', style, loading = 'eager', decoding = 'async', ...props }) {
  return (
    <img
      src={flipkartLogoPng}
      alt="Flipkart Official Growth Specialist Logo - A2Z Aaradhya"
      width="130"
      height="48"
      className={`${className} object-contain`}
      style={style}
      draggable={false}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}

export function MeeshoLogo({ className = 'h-8 w-auto', style, loading = 'eager', decoding = 'async', ...props }) {
  return (
    <>
      {/* Light Mode: Dark Purple Logo (jo pehle tha) */}
      <img
        src={meeshoLogoPng}
        alt="Meesho High Volume Scaling Partner Logo - A2Z Aaradhya"
        width="100"
        height="48"
        className={`${className} object-contain dark:hidden`}
        style={style}
        draggable={false}
        loading={loading}
        decoding={decoding}
        {...props}
      />
      {/* Dark Mode: Vibrant Pink Transparent Logo */}
      <img
        src={meeshoPinkLogoPng}
        alt="Meesho Official Scaling Partner Logo - A2Z Aaradhya"
        width="120"
        height="32"
        className={`${className} object-contain hidden dark:block`}
        style={style}
        draggable={false}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    </>
  );
}

export function MyntraLogo({
  className = 'h-8 w-auto',
  style,
  textColor,
  loading = 'eager',
  decoding = 'async',
  ...props
}) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`} style={style} {...props}>
      <img
        src={myntraTransparentPng}
        alt="Myntra Logo"
        width="32"
        height="22"
        className="h-[22px] w-auto object-contain shrink-0"
        draggable={false}
        loading={loading}
        decoding={decoding}
      />
      <span
        className={`font-black tracking-tight font-outfit text-base select-none leading-none ${
          textColor || 'text-[#282C3F] dark:text-white'
        }`}
      >
        Myntra
      </span>
    </div>
  );
}

// ── ICON VERSIONS (Optimized: Fast async decoding + explicit dimensions) ──
export function AmazonIcon({ className = 'w-8 h-8', style, loading = 'eager', decoding = 'async', ...props }) {
  return (
    <>
      {/* Light Mode: Original Dark 'a' + Orange Arrow */}
      <img
        src={amazonIconPng}
        alt="Amazon Seller Central Account Management Icon"
        width="32"
        height="32"
        className={`${className} rounded-xl object-contain shadow-sm dark:hidden`}
        style={style}
        draggable={false}
        loading={loading}
        decoding={decoding}
        {...props}
      />
      {/* Dark Mode: Crisp White 'a' + Orange Arrow */}
      <img
        src={amazonIconWhitePng}
        alt="Amazon Seller Central Account Management Icon"
        width="32"
        height="32"
        className={`${className} rounded-xl object-contain shadow-sm hidden dark:block`}
        style={style}
        draggable={false}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    </>
  );
}

export function FlipkartIcon({ className = 'w-8 h-8', style, loading = 'eager', decoding = 'async', ...props }) {
  return (
    <img
      src={flipkartIconPng}
      alt="Flipkart Seller Hub Account Management Icon"
      width="32"
      height="32"
      className={`${className} rounded-xl object-contain shadow-sm`}
      style={style}
      draggable={false}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}

export function MeeshoIcon({ className = 'w-8 h-8', style, loading = 'eager', decoding = 'async', ...props }) {
  return (
    <img
      src={meeshoIconPng}
      alt="Meesho Supplier Panel Account Scaling Icon"
      width="32"
      height="32"
      className={`${className} rounded-xl object-contain shadow-sm`}
      style={style}
      draggable={false}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}

export function MyntraIcon({ className = 'w-8 h-8', style, loading = 'eager', decoding = 'async', ...props }) {
  return (
    <img
      src={myntraTransparentPng}
      alt="Myntra Fashion Partner Account Management Icon"
      width="32"
      height="32"
      className={`${className} object-contain`}
      style={style}
      draggable={false}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}
