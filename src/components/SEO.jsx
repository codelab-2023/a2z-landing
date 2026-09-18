import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteConfig = {
  name: 'A2Z Aaradhya Pvt. Ltd.',
  legalName: 'A2Z Aaradhya Pvt. Ltd.',
  siteUrl: 'https://a2z-aaradhya.com',
  logoUrl: 'https://a2z-aaradhya.com/logo/a2z-aaradhya-logo.svg',
  defaultOgImage: 'https://a2z-aaradhya.com/logo/a2z-aaradhya-logo.svg',
  phone: '+91-7802077444',
  email: 'info@a2zaaradhya.com',
  branches: [
    {
      name: 'A2Z Aaradhya Head Office Surat',
      address: '144, 1st floor, Pramukh Park Soc, opp. Royal Plaza, Bapa Sitaram Chowk, Simada',
      city: 'Surat',
      state: 'Gujarat',
      postalCode: '395010',
      phone: '+91-7802077444',
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
}) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${siteConfig.siteUrl}${currentPath}`;
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  const image = ogImage || siteConfig.defaultOgImage;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set/update meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Description & Keywords
    if (description) setMetaTag('name', 'description', description);
    if (keywords) setMetaTag('name', 'keywords', keywords);

    // OpenGraph
    setMetaTag('property', 'og:title', fullTitle);
    if (description) setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:site_name', siteConfig.name);

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

    // 3. Schema.org JSON-LD Structured Data for Google Search
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        // Organization Schema
        {
          '@type': 'Organization',
          '@id': `${siteConfig.siteUrl}/#organization`,
          name: siteConfig.legalName,
          url: siteConfig.siteUrl,
          logo: siteConfig.logoUrl,
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
        // ProfessionalService / LocalBusiness Schema with 7 Branches
        {
          '@type': 'ProfessionalService',
          '@id': `${siteConfig.siteUrl}/#localbusiness`,
          name: siteConfig.legalName,
          image: siteConfig.logoUrl,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          url: siteConfig.siteUrl,
          priceRange: '₹₹',
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
        },
        // WebPage Schema
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: fullTitle,
          description: description,
          isPartOf: {
            '@id': `${siteConfig.siteUrl}/#organization`,
          },
        },
      ],
    };

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaData['@graph'].push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${siteConfig.siteUrl}${crumb.path}`,
        })),
      });
    }

    let scriptTag = document.getElementById('seo-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

  }, [fullTitle, description, keywords, canonicalUrl, ogType, image, currentPath, breadcrumbs]);

  return null;
}
