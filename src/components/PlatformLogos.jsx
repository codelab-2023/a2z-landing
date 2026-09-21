import React from 'react';

import amazonLogoPng from '../images/platforms/amazon-official-partner-logo.webp';
import flipkartLogoPng from '../images/platforms/flipkart-growth-specialist-logo.webp';
import meeshoLogoPng from '../images/platforms/meesho-high-volume-partner-logo.webp';
import myntraLogoPng from '../images/platforms/myntra-official-partner-logo.png';

// Platform Icons from src/images/platforms
import amazonIconPng from '../images/platforms/amazon-seller-central-icon.webp';
import flipkartIconPng from '../images/platforms/flipkart-seller-hub-icon.webp';
import meeshoIconPng from '../images/platforms/meesho-supplier-panel-icon.webp';
import myntraIconPng from '../images/platforms/myntra-seller-partner-icon.png';

// ── WORDMARK LOGOS ──────────────────────────────────────────
export function AmazonLogo({ className = 'h-8 w-auto', style, ...props }) {
  return (
    <img
      src={amazonLogoPng}
      alt="Amazon India Authorized Partner Logo - A2Z Aaradhya"
      className={`${className} object-contain`}
      style={style}
      draggable={false}
      loading="lazy"
      {...props}
    />
  );
}

export function FlipkartLogo({ className = 'h-8 w-auto', style, ...props }) {
  return (
    <img
      src={flipkartLogoPng}
      alt="Flipkart Official Growth Specialist Logo - A2Z Aaradhya"
      className={`${className} object-contain`}
      style={style}
      draggable={false}
      loading="lazy"
      {...props}
    />
  );
}

export function MeeshoLogo({ className = 'h-8 w-auto', style, ...props }) {
  return (
    <img
      src={meeshoLogoPng}
      alt="Meesho High Volume Scaling Partner Logo - A2Z Aaradhya"
      className={`${className} object-contain`}
      style={style}
      draggable={false}
      loading="lazy"
      {...props}
    />
  );
}

export function MyntraLogo({ className = 'h-8 w-auto', style, ...props }) {
  return (
    <img
      src={myntraLogoPng}
      alt="Myntra Official Fashion Partner Logo - A2Z Aaradhya"
      className={`${className} object-contain`}
      style={style}
      draggable={false}
      loading="lazy"
      {...props}
    />
  );
}

// ── ICON VERSIONS ──────────────────────────────────────
export function AmazonIcon({ className = 'w-8 h-8', style, ...props }) {
  return (
    <img
      src={amazonIconPng}
      alt="Amazon Seller Central Account Management Icon"
      className={`${className} rounded-xl object-contain shadow-sm`}
      style={style}
      draggable={false}
      loading="lazy"
      {...props}
    />
  );
}

export function FlipkartIcon({ className = 'w-8 h-8', style, ...props }) {
  return (
    <img
      src={flipkartIconPng}
      alt="Flipkart Seller Hub Account Management Icon"
      className={`${className} rounded-xl object-contain shadow-sm`}
      style={style}
      draggable={false}
      loading="lazy"
      {...props}
    />
  );
}

export function MeeshoIcon({ className = 'w-8 h-8', style, ...props }) {
  return (
    <img
      src={meeshoIconPng}
      alt="Meesho Supplier Panel Account Scaling Icon"
      className={`${className} rounded-xl object-contain shadow-sm`}
      style={style}
      draggable={false}
      loading="lazy"
      {...props}
    />
  );
}

export function MyntraIcon({ className = 'w-8 h-8', style, ...props }) {
  return (
    <img
      src={myntraIconPng}
      alt="Myntra Fashion Partner Account Management Icon"
      className={`${className} rounded-xl object-contain shadow-sm bg-white p-0.5`}
      style={style}
      draggable={false}
      loading="lazy"
      {...props}
    />
  );
}


