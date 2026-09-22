import React from 'react';
import AwardsSection from '../components/AwardsSection';
import SEO from '../components/SEO';

export default function AwardsPage() {
  return (
    <div className="pt-16 sm:pt-28 pb-10 sm:pb-20">
      <SEO
        title="Awards & Certifications - Amazon Unnati Gold Partner | A2Z Aaradhya"
        description="Explore national achievements and certifications awarded to A2Z Aaradhya, including Amazon SOA Champion South & West Winner, Unnati Gold Partner, and Pragati League Winners."
        keywords="A2Z Aaradhya awards, Amazon gold partner award, SOA champion, e-commerce achievements, certified seller affiliate"
        canonicalPath="/about/awards"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'Awards & Recognition', path: '/about/awards' },
        ]}
      />
      <AwardsSection />
    </div>
  );
}

