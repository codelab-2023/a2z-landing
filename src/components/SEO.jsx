import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteConfig = {
  name: 'A2Z Aaradhya',
  shortName: 'A2Z Aaradhya',
  legalName: 'A2Z Aaradhya',
  siteUrl: 'https://a2z-aaradhya.com',
  logoUrl: 'https://a2z-aaradhya.com/logo/a2z-aaradhya-logo.svg',
  defaultOgImage: 'https://a2z-aaradhya.com/og-image.png',
  phone: '+91-9601055508',
  email: 'support@a2z-aaradhya.com',
  branches: [
    {
      name: 'A2Z Aaradhya Head Office Surat',
      address: '144, 1st floor, Pramukh Park Soc, opp. Royal Plaza, Bapa Sitaram Chowk, Simada',
      city: 'Surat',
      state: 'Gujarat',
      postalCode: '395010',
      phone: '+91-9601055508',
    },
    {
      name: 'A2Z Aaradhya Katargam Branch',
      address: '307, Elephanta Business Hub, Opp. Hari Darshan No Khado, Dabholi, Katargam',
      city: 'Surat',
      state: 'Gujarat',
      postalCode: '395004',
      phone: '+91-9898666517',
    },
    {
      name: 'A2Z Aaradhya Adajan Branch',
      address: '303-3rd floor, Millionaire Business Park, TGB Circle, Adajan Gam, Adajan',
      city: 'Surat',
      state: 'Gujarat',
      postalCode: '395009',
      phone: '+91-9737891687',
    },
    {
      name: 'A2Z Aaradhya Bhatar Branch',
      address: '302-303, 3rd Floor, Meghana Complex, Olive Circle, Gandhi Kutir, Bhatar',
      city: 'Surat',
      state: 'Gujarat',
      postalCode: '395007',
      phone: '+91-9601055508',
    },
    {
      name: 'A2Z Aaradhya Rajkot Branch',
      address: 'N-1307 Twin star, near Nana mava circle, 150 feet ring road',
      city: 'Rajkot',
      state: 'Gujarat',
      postalCode: '360004',
      phone: '+91-9898111669',
    },
    {
      name: 'A2Z Aaradhya Ahmedabad Branch',
      address: '607, Blueberry, Nr. Bhojaldham Residency, Gurukul Circle, Nikol',
      city: 'Ahmedabad',
      state: 'Gujarat',
      postalCode: '382350',
      phone: '+91-9898666085',
    },
    {
      name: 'A2Z Aaradhya Delhi Branch',
      address: 'Kinari Bazar, Chandni Chowk',
      city: 'Delhi',
      state: 'Delhi',
      postalCode: '110006',
      phone: '+91-9662888600',
    },
  ],
};

export default function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage,
  breadcrumbs = [],
  noindex = false,
}) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${siteConfig.siteUrl}${currentPath === '/' ? '/' : currentPath}`;

  // Prevent duplicate branding (e.g. "Title | A2Z Aaradhya")
  const fullTitle = title.includes('A2Z Aaradhya')
    ? title
    : `${title} | ${siteConfig.name}`;

  const image = ogImage || siteConfig.defaultOgImage;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // 2. Helper to set/update meta tags safely
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content && content !== '') return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Robots Directive
    if (noindex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Description & Keywords
    if (description) setMetaTag('name', 'description', description);
    if (keywords) setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', siteConfig.name);

    // OpenGraph
    setMetaTag('property', 'og:title', fullTitle);
    if (description) setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:image:alt', `${fullTitle} - A2Z Aaradhya`);
    setMetaTag('property', 'og:site_name', siteConfig.name);
    setMetaTag('property', 'og:locale', 'en_IN');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    if (description) setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 3. Schema.org JSON-LD Structured Data for Google Search Rich Results
    const schemaGraph = [
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.shortName,
        url: siteConfig.siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: siteConfig.logoUrl,
          caption: 'A2Z Aaradhya',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone,
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi', 'gu'],
        },
        sameAs: [
          'https://www.instagram.com/a2z_aaradhya_pvt.ltd',
          'https://www.facebook.com/a2zaaradhya',
          'https://www.linkedin.com/company/a2z-aaradhya-pvt-ltd',
          'https://www.youtube.com/@a2zaaradhya',
        ],
      },
      // WebSite Schema with SearchAction
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.legalName,
        description: "India's premier marketplace management agency for Amazon, Flipkart, Myntra & Meesho.",
        publisher: {
          '@id': `${siteConfig.siteUrl}/#organization`,
        },
        inLanguage: 'en-IN',
      },
      // ProfessionalService / LocalBusiness Schema with 7 Branches & 4.9 Star Rating
      {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.siteUrl}/#localbusiness`,
        name: siteConfig.legalName,
        image: siteConfig.defaultOgImage,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        url: siteConfig.siteUrl,
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '3500',
          bestRating: '5',
          worstRating: '1',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.branches[0].address,
          addressLocality: siteConfig.branches[0].city,
          addressRegion: siteConfig.branches[0].state,
          postalCode: siteConfig.branches[0].postalCode,
          addressCountry: 'IN',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        department: siteConfig.branches.map((b) => ({
          '@type': 'LocalBusiness',
          name: b.name,
          telephone: b.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: b.address,
            addressLocality: b.city,
            addressRegion: b.state,
            postalCode: b.postalCode,
            addressCountry: 'IN',
          },
        })),
      },
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: fullTitle,
        description: description,
        isPartOf: {
          '@id': `${siteConfig.siteUrl}/#website`,
        },
        about: {
          '@id': `${siteConfig.siteUrl}/#organization`,
        },
        inLanguage: 'en-IN',
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${siteConfig.siteUrl}${crumb.path === '/' ? '' : crumb.path}`,
        })),
      });
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    };

    let scriptTag = document.getElementById('seo-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

  }, [fullTitle, description, keywords, canonicalUrl, ogType, image, currentPath, breadcrumbs, noindex]);

  return null;
}
