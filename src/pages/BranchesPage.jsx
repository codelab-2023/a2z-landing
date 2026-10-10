import React from 'react';
import { MapPin, Phone, Building2, Globe } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';

export default function BranchesPage() {
  const branches = [
    {
      city: 'Head Office (Surat)',
      type: 'Corporate Headquarters',
      role: 'a2z aaradhya',
      address: '144, 1st floor, a2z aaradhya, pramukh Park Soc, opp. Royal Plaza, Bapa Sitaram Chowk, Simada, Surat, 395010',
      phone: '+91 96010 55508',
      badge: 'Head Office',
      badgeBg: 'bg-blue-600 text-white border-blue-700',
      isHeadOffice: true,
    },
    {
      city: 'Surat Katargam',
      type: 'Regional Branch Office',
      role: 'Sales & Operations',
      address: '307, Elephanta Business Hub, Opp. Hari Darshan No Khado, Dabholi, Katargam, Surat - 395004',
      phone: '+91 98986 66517',
      badge: 'Surat Branch',
      badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    {
      city: 'Surat Adajan',
      type: 'Regional Branch Office',
      role: 'Operations Center',
      address: '303-3rd floor, Millionaire Business Park, TGB Circle, TGB, Adajan Gam, Adajan, Surat, Gujarat 395009',
      phone: '+91 97378 91687',
      badge: 'Surat Branch',
      badgeBg: 'bg-pink-100 text-pink-800 border-pink-200',
    },
    {
      city: 'Surat Bhatar',
      type: 'Regional Branch Office',
      role: 'Operations Center',
      address: '302-303, 3rd Floor, Meghana Complex, Olive Circle, Nr. Bharat Patrol Pump, U-M Road, Bhatar, Surat - 395007',
      phone: '+91 96010 55508',
      badge: 'Surat Branch',
      badgeBg: 'bg-orange-100 text-orange-800 border-orange-200',
    },
    {
      city: 'Rajkot',
      type: 'Regional Branch Office',
      role: 'Operations Center',
      address: 'N-1307 Twin star, near Nana mava circle, 150 feet ring road, Rajkot - 360004',
      phone: '+91 98981 11669',
      badge: 'Rajkot Branch',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      city: 'Ahmedabad',
      type: 'Regional Branch Office',
      role: 'Operations Center',
      address: '607, Blueberry, Nr. Bhojaldham Residency, Gurukul Circle, Nikol, Ahmedabad - 382350',
      phone: '+91 98986 66085',
      badge: 'Ahmedabad Branch',
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      city: 'Delhi',
      type: 'Regional Branch Office',
      role: 'Operations Center',
      address: 'Gali Paranthe Wali Inside the Street Kinari Bazaar Chandni Chowk, near Ram Chandra , Old Delhi, Delhi, 110006',
      phone: '+91 96628 88600',
      badge: 'Delhi Branch',
      badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
    },
  ];

  return (
    <div className="pt-16 sm:pt-28 pb-10 sm:pb-20 bg-white">
      <SEO
        title="7 Regional Branches & Offices Across India | A2Z Aaradhya"
        description="Find our regional branch offices in Surat (Simada, Katargam, Adajan, Bhatar), Ahmedabad, Rajkot, and Delhi for localized seller account management."
        keywords="A2Z Aaradhya branches, Surat office, Ahmedabad branch, Rajkot branch, Delhi branch, e-commerce support centers"
        canonicalPath="/branches"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Regional Branches', path: '/branches' },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center space-y-6">
        <AnimateOnScroll animation="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82]">
            <MapPin className="h-4 w-4" />
            <span className="text-xs font-extrabold uppercase tracking-wider">Our Presence</span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3B48]">
            Regional Offices Across India
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 font-medium">
            Providing localized support, account management, and on-ground operations across India's leading seller hubs. Our dedicated teams ensure seamless marketplace integration and seller success.
          </p>
        </AnimateOnScroll>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          {branches[0]?.isHeadOffice && (
            <AnimateOnScroll
              animation="fade-up"
              className="w-full max-w-[420px] rounded-[22px] border-[2px] border-[#4da7c8] bg-white p-5 shadow-[0_10px_30px_rgba(22,107,130,0.08)]"
            >
              <div className="flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#27A5D2] text-white shadow-md">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="text-[18px] font-extrabold text-[#0B3B48]">{branches[0].city}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#166B82]">
                  {branches[0].type}
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${branches[0].badgeBg}`}>
                  {branches[0].badge}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="mb-1 flex items-center justify-center gap-2 text-[11px] font-bold text-[#0B3B48]">
                    <Building2 className="h-3.5 w-3.5 text-[#166B82]" />
                    Office Details:
                  </div>
                  <div className="text-center text-[12px] font-medium text-[#166B82]">{branches[0].role}</div>
                </div>

                <div>
                  <div className="mb-1 flex items-center justify-center gap-2 text-[11px] font-bold text-[#0B3B48]">
                    <Globe className="h-3.5 w-3.5 text-[#166B82]" />
                    Office Address:
                  </div>
                  <p className="text-center text-[11px] leading-5 text-slate-600">{branches[0].address}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4 text-center">
                <div className="flex items-center justify-center gap-2.5">
                  <Phone className="h-4.5 w-4.5 text-[#166B82]" />
                  <span className="font-bold text-sm text-[#0B3B48]">Helpline:</span>
                  <a href={`tel:${branches[0].phone.replace(/\s+/g, '')}`} className="text-base font-extrabold text-[#166B82] hover:text-[#0B3B48] hover:underline tracking-wide">
                    {branches[0].phone}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {branches.slice(1).map((branch, idx) => (
            <AnimateOnScroll
              key={idx}
              animation="fade-up"
              delay={idx * 80}
              className="rounded-[22px] border border-[#d6e7ee] bg-white p-5 shadow-[0_10px_22px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#cfe3ea] bg-[#edf9fd] text-[#166B82]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[18px] font-extrabold text-[#0B3B48]">{branch.city}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">{branch.type}</div>
                </div>
              </div>

              <div className="mt-4 flex justify-start">
                <span className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] ${branch.badgeBg}`}>
                  {branch.badge}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-[11px] font-bold text-[#0B3B48]">
                    <Building2 className="h-3.5 w-3.5 text-[#166B82]" />
                    Focus Area:
                  </div>
                  <div className="pl-5 text-[11px] font-medium text-slate-600">{branch.role}</div>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-2 text-[11px] font-bold text-[#0B3B48]">
                    <Globe className="h-3.5 w-3.5 text-[#166B82]" />
                    Office Address:
                  </div>
                  <p className="pl-5 text-[11px] leading-5 text-slate-600">{branch.address}</p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-3.5">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#166B82] shrink-0" />
                  <span className="font-bold text-xs text-[#0B3B48]">Helpline:</span>
                  <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="text-[14px] font-extrabold text-[#166B82] hover:text-[#0B3B48] hover:underline tracking-wide">
                    {branch.phone}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
