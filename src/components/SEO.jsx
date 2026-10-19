import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteConfig = {
  name: 'A2Z Aaradhya',
  shortName: 'A2Z Aaradhya',
  legalName: 'A2Z Aaradhya',
  siteUrl: 'https://a2z-aaradhya.com',
  logoUrl: 'https://a2z-aaradhya.com/logo/a2z-aaradhya-logo.svg',
  defaultOgImage: 'https://a2z-aaradhya.com/og-image.png?v=2',
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
      latitude: '21.2185',
      longitude: '72.8797',
    },
    {
      name: 'A2Z Aaradhya Katargam Branch',
      address: '307, Elephanta Business Hub, Opp. Hari Darshan No Khado, Dabholi, Katargam',
      city: 'Surat',
      state: 'Gujarat',
      postalCode: '395004',
      phone: '+91-9898666517',
      latitude: '21.2291',
      longitude: '72.8306',
    },
    {
      name: 'A2Z Aaradhya Adajan Branch',
      address: '303-3rd floor, Millionaire Business Park, TGB Circle, Adajan Gam, Adajan',
      city: 'Surat',
      state: 'Gujarat',
      postalCode: '395009',
      phone: '+91-9737891687',
      latitude: '21.1959',
      longitude: '72.7933',
    },
    {
      name: 'A2Z Aaradhya Bhatar Branch',
      address: '302-303, 3rd Floor, Meghana Complex, Olive Circle, Gandhi Kutir, Bhatar',
      city: 'Surat',
      state: 'Gujarat',
      postalCode: '395007',
      phone: '+91-9601055508',
      latitude: '21.1633',
      longitude: '72.8055',
    },
    {
      name: 'A2Z Aaradhya Rajkot Branch',
      address: 'N-1307 Twin star, near Nana mava circle, 150 feet ring road',
      city: 'Rajkot',
      state: 'Gujarat',
      postalCode: '360004',
      phone: '+91-9898111669',
      latitude: '22.2858',
      longitude: '70.7712',
    },
    {
      name: 'A2Z Aaradhya Ahmedabad Branch',
      address: '607, Blueberry, Nr. Bhojaldham Residency, Gurukul Circle, Nikol',
      city: 'Ahmedabad',
      state: 'Gujarat',
      postalCode: '382350',
      phone: '+91-9898666085',
      latitude: '23.0475',
      longitude: '72.6710',
    },
    {
      name: 'A2Z Aaradhya Delhi Branch',
      address: 'Kinari Bazar, Chandni Chowk',
      city: 'Delhi',
      state: 'Delhi',
      postalCode: '110006',
      phone: '+91-9662888600',
      latitude: '28.6506',
      longitude: '77.2303',
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
  faqs = [],
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

    // Geo Meta Tags for Pan-India & Surat HQ Local SEO
    setMetaTag('name', 'geo.region', 'IN-GJ');
    setMetaTag('name', 'geo.placename', 'Surat, Gujarat, India');
    setMetaTag('name', 'geo.position', '21.2185;72.8797');
    setMetaTag('name', 'ICBM', '21.2185, 72.8797');

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
        image: siteConfig.defaultOgImage,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: '₹₹',
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        knowsAbout: [
          'Amazon Seller Central Account Management',
          'Amazon Unnati Gold Partner',
          'Flipkart Seller Hub Account Growth',
          'Myntra Fashion Marketplace Onboarding',
          'Meesho Supplier Panel Scaling',
          'Social Media Management & Performance Marketing',
          'Instagram Reels Production & Meta Ads Funnels',
          'Website Development & E-Commerce Engineering',
          'Shopify & WooCommerce Custom Store Development',
          'Amazon Brand Store Design & A+ Content (EBC)',
          'GST Registration for Online Sellers',
          'E-Commerce Cataloging and Product Listing',
          'Amazon PPC Sponsored Ads Optimization',
          'Seller Account Suspension Reinstatement',
          'Marketplace Logistics and Return Management',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'A2Z Aaradhya E-Commerce & Digital Growth Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Amazon Account Management & PPC Advertising',
                description: 'End-to-end seller central management, keyword research, sponsored ads optimization, and Brand Store design.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Myntra Partner Onboarding & Fashion Brand Growth',
                description: 'Fashion portal onboarding, category approvals, curated cataloging, and M-Direct / JIT fulfillment.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Flipkart Account Management & F-Assured Growth',
                description: 'Complete Flipkart seller tier growth, PLA ads, promotional spike sales, and inventory management.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Meesho High-Volume Catalog & Price Optimization',
                description: 'Bulk catalog upload, Tier-2/3 market penetration, Price Recommendation Engine optimization, and zero penalty operations.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Social Media Management & Performance Marketing',
                description: 'Viral Instagram reels, Meta and Facebook advertising funnels, brand aesthetic curation, content calendars, and community engagement.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Website Development & E-Commerce Engineering',
                description: 'Fast, secure business websites, high-converting Shopify and WooCommerce stores, booking portals, custom web apps, and AI-powered solutions.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Amazon Brand Store & A+ Content (EBC) Design',
                description: 'Custom multi-page Brand Storefront design, premium A+ Enhanced Brand Content modules, lifestyle infographics, and brand story carousels.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'New Seller Onboarding & 3 Months Free Management',
                description: 'GST compliance, brand trademark registration, barcode exemptions, and marketplace launch with 3 months free management.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Account Health & Suspension Reinstatement',
                description: 'Professional POA (Plan of Action) appeals, ODR cleanup, policy compliance, and locked funds resolution.',
              },
            },
          ],
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
        description: "India's premier marketplace management agency for GST registered businesses and new sellers across Amazon, Flipkart, Myntra & Meesho.",
        publisher: {
          '@id': `${siteConfig.siteUrl}/#organization`,
        },
        inLanguage: 'en-IN',
      },
      // ProfessionalService / LocalBusiness Schema with 7 Branches & GeoCoordinates
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
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Rajesh Patel' },
            datePublished: '2026-08-15',
            reviewBody: 'A2Z Aaradhya scaled our Amazon and Flipkart sales from 50 orders/day to over 600 orders/day. Best e-commerce account management agency in India.',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Vikas Sharma' },
            datePublished: '2026-09-10',
            reviewBody: 'Their website development and social media marketing team built our Shopify store and scaled our Meta ads profitably. Highly recommended!',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Pooja Agarwal' },
            datePublished: '2026-09-28',
            reviewBody: 'Great Myntra onboarding and Amazon A+ content design. Transparent reporting and dedicated branch managers.',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.branches[0].address,
          addressLocality: siteConfig.branches[0].city,
          addressRegion: siteConfig.branches[0].state,
          postalCode: siteConfig.branches[0].postalCode,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.branches[0].latitude,
          longitude: siteConfig.branches[0].longitude,
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
          priceRange: '₹₹',
          address: {
            '@type': 'PostalAddress',
            streetAddress: b.address,
            addressLocality: b.city,
            addressRegion: b.state,
            postalCode: b.postalCode,
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: b.latitude,
            longitude: b.longitude,
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
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'p'],
        },
      },
    ];

    // Compute automatic breadcrumbs if not provided
    let effectiveBreadcrumbs = breadcrumbs;
    if (!effectiveBreadcrumbs || effectiveBreadcrumbs.length === 0) {
      if (currentPath === '/services') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Marketplace Services', path: '/services' }];
      } else if (currentPath === '/branches') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Regional Branches', path: '/branches' }];
      } else if (currentPath === '/contact') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }];
      } else if (currentPath === '/about') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }];
      } else if (currentPath === '/about/team') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }, { name: 'Executive Team', path: '/about/team' }];
      } else if (currentPath === '/about/awards') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }, { name: 'Awards & Recognition', path: '/about/awards' }];
      } else if (currentPath === '/about/gallery') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }, { name: 'Office Gallery', path: '/about/gallery' }];
      } else if (currentPath === '/faq') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Frequently Asked Questions', path: '/faq' }];
      } else if (currentPath === '/careers') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Careers', path: '/careers' }];
      } else if (currentPath === '/privacy') {
        effectiveBreadcrumbs = [{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }];
      }
    }

    if (effectiveBreadcrumbs && effectiveBreadcrumbs.length > 0) {
      schemaGraph.push({
        '@type': 'BreadcrumbList',
        itemListElement: effectiveBreadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${siteConfig.siteUrl}${crumb.path === '/' ? '' : crumb.path}`,
        })),
      });
    }

    // Additional Service Schema on /services page
    if (currentPath === '/services') {
      schemaGraph.push({
        '@type': 'ItemList',
        name: 'A2Z Aaradhya E-Commerce & Digital Growth Services',
        itemListElement: [
          {
            '@type': 'Service',
            position: 1,
            name: 'Amazon Account Management & PPC Advertising',
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            serviceType: 'Amazon Seller Central Management',
            areaServed: 'IN',
          },
          {
            '@type': 'Service',
            position: 2,
            name: 'Myntra Fashion Marketplace Onboarding & PPMP',
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            serviceType: 'Myntra Partner Portal Management',
            areaServed: 'IN',
          },
          {
            '@type': 'Service',
            position: 3,
            name: 'Flipkart Account Management & F-Assured Tier Growth',
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            serviceType: 'Flipkart Seller Hub Management',
            areaServed: 'IN',
          },
          {
            '@type': 'Service',
            position: 4,
            name: 'Meesho High Volume Catalog & Tier-2/3 Growth',
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            serviceType: 'Meesho Supplier Panel Management',
            areaServed: 'IN',
          },
          {
            '@type': 'Service',
            position: 5,
            name: 'Social Media Management & Performance Marketing',
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            serviceType: 'Social Media Marketing & Meta Ads Management',
            areaServed: 'IN',
          },
          {
            '@type': 'Service',
            position: 6,
            name: 'Website Development & Custom E-Commerce Engineering',
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            serviceType: 'Web Development & Shopify / WooCommerce Solutions',
            areaServed: 'IN',
          },
          {
            '@type': 'Service',
            position: 7,
            name: 'Amazon Brand Store & A+ Content (EBC) Design',
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            serviceType: 'Amazon Brand Registry & Storefront Architecture',
            areaServed: 'IN',
          },
          {
            '@type': 'Service',
            position: 8,
            name: 'New Seller Onboarding & 3 Months Free Management',
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            serviceType: 'E-commerce Seller Setup & Free Management',
            areaServed: 'IN',
          },
          {
            '@type': 'Service',
            position: 9,
            name: 'Account Health, Suspension & PoA Reinstatement',
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            serviceType: 'Marketplace Account Appeals & POA Recovery',
            areaServed: 'IN',
          },
        ],
      });
    }

    // Additional ItemList Schema for Branches on /branches page
    if (currentPath === '/branches') {
      schemaGraph.push({
        '@type': 'ItemList',
        name: 'A2Z Aaradhya Regional Offices Across India',
        itemListElement: siteConfig.branches.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
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
            geo: {
              '@type': 'GeoCoordinates',
              latitude: b.latitude,
              longitude: b.longitude,
            },
          },
        })),
      });
    }

    if (faqs && faqs.length > 0) {
      schemaGraph.push({
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
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

  }, [fullTitle, description, keywords, canonicalUrl, ogType, image, currentPath, breadcrumbs, faqs, noindex]);

  return null;
}
