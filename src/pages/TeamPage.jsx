import React from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';

// Team member photos imported directly from src/images/team
import purvegGajeraImg from '../images/team/purveg-gajera-managing-director.webp';
import pinalKakadiyaImg from '../images/team/pinal-kakadiya-operations-head.webp';
import drashtiPatelImg from '../images/team/drashti-patel-head-hr.webp';
import sonalKaklotarImg from '../images/team/sonal-kaklotar-branch-manager-katargam.webp';
import eshaRavalImg from '../images/team/esha-raval-branch-manager-bhatar.webp';
import anjaliChauhanImg from '../images/team/anjali-chauhan-branch-manager-rajkot.webp';
import abhishekPatelImg from '../images/team/abhishek-patel-branch-manager-ahmedabad.webp';
import jhalakJainImg from '../images/team/jhalak-jain-branch-manager-delhi.webp';
import naitriBarotImg from '../images/team/naitri-barot-brand-ambassador.webp';

const teamMembers = [
  {
    id: 1,
    name: 'Purveg Gajera',
    role: 'Managing Director (MD)',
    initials: 'PG',
    image: purvegGajeraImg,
    alt: 'Purveg Gajera - Managing Director (MD) at A2Z Aaradhya Pvt. Ltd.',
    tone: 'from-slate-700 via-slate-600 to-slate-500',
    accent: 'bg-slate-200 text-slate-800',
  },
  {
    id: 2,
    name: 'Pinal Kakadiya',
    role: 'Operations Head',
    initials: 'PK',
    image: pinalKakadiyaImg,
    alt: 'Pinal Kakadiya - Operations Head at A2Z Aaradhya Pvt. Ltd.',
    tone: 'from-emerald-700 via-emerald-600 to-emerald-500',
    accent: 'bg-emerald-100 text-emerald-800',
  },
  {
    id: 3,
    name: 'Drashti Patel',
    role: 'HR Head ',
    initials: 'DP',
    image: drashtiPatelImg,
    alt: 'Drashti Patel - Head HR at A2Z Aaradhya Pvt. Ltd.',
    tone: 'from-zinc-700 via-zinc-600 to-zinc-500',
    accent: 'bg-zinc-100 text-zinc-800',
  },
  {
    id: 4,
    name: 'Sonal Kaklotar',
    role: 'Branch Manager (Katargam)',
    initials: 'SK',
    image: sonalKaklotarImg,
    alt: 'Sonal Kaklotar - Branch Manager Katargam Office at A2Z Aaradhya',
    tone: 'from-amber-700 via-orange-600 to-rose-500',
    accent: 'bg-amber-100 text-amber-800',
  },
  {
    id: 5,
    name: 'Esha Raval',
    role: 'Branch Manager (Bhatar)',
    initials: 'ER',
    image: eshaRavalImg,
    alt: 'Esha Raval - Branch Manager Bhatar Office at A2Z Aaradhya',
    tone: 'from-sky-500 via-cyan-400 to-cyan-300',
    accent: 'bg-sky-100 text-sky-800',
  },
  {
    id: 6,
    name: 'Anjali Chauhan',
    role: 'Branch Manager (Rajkot)',
    initials: 'AC',
    image: anjaliChauhanImg,
    alt: 'Anjali Chauhan - Branch Manager Rajkot Office at A2Z Aaradhya',
    tone: 'from-stone-300 via-slate-200 to-slate-100',
    accent: 'bg-stone-100 text-stone-700',
  },
  {
    id: 7,
    name: 'Abhishek Patel',
    role: 'Branch Manager (Ahmedabad)',
    initials: 'AP',
    image: abhishekPatelImg,
    alt: 'Abhishek Patel - Branch Manager Ahmedabad Office at A2Z Aaradhya',
    tone: 'from-slate-700 via-slate-600 to-slate-500',
    accent: 'bg-slate-200 text-slate-800',
  },
  {
    id: 8,
    name: 'Jhalak Jain',
    role: 'Branch Manager (Delhi)',
    initials: 'JJ',
    image: jhalakJainImg,
    alt: 'Jhalak Jain - Branch Manager Delhi Office at A2Z Aaradhya',
    tone: 'from-pink-300 via-rose-200 to-rose-100',
    accent: 'bg-pink-100 text-pink-700',
  },
  {
    id: 9,
    name: 'Naitri Barot',
    role: 'Brand Ambassador',
    initials: 'NB',
    image: naitriBarotImg,
    alt: 'Naitri Barot - Brand Ambassador at A2Z Aaradhya',
    tone: 'from-sky-200 via-cyan-100 to-sky-50',
    accent: 'bg-sky-100 text-sky-700',
  },
];

export default function TeamPage() {
  return (
    <div className="pt-28 pb-20">
      <SEO
        title="Executive Leadership & Branch Managers Team | A2Z Aaradhya"
        description="Meet the leadership team and branch managers of A2Z Aaradhya Pvt. Ltd., guiding 70+ certified e-commerce specialists across 7 regional branches in India."
        keywords="A2Z Aaradhya team, Purveg Gajera, Pinal Kakadiya, e-commerce account managers, marketplace specialists"
        canonicalPath="/about/team"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'Leadership Team', path: '/about/team' },
        ]}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#166B82]/20 bg-[#166B82]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#166B82]">
            # TEAM
          </p>
          <h1 className="mt-4 text-4xl font-black text-[#0B3B48] sm:text-5xl lg:text-6xl font-outfit">
            The People Behind Our Success
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <AnimateOnScroll
                key={member.id}
                animation="fade-up"
                delay={idx * 35}
                className="overflow-hidden rounded-[18px] border border-[#cfe3ea] bg-[#d8edf3] shadow-[0_8px_18px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(15,23,42,0.12)]"
              >
                <div className={`relative aspect-square w-full overflow-hidden bg-gradient-to-br ${member.tone}`}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.alt || member.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallbackEl = e.currentTarget.nextElementSibling;
                        if (fallbackEl) fallbackEl.classList.remove('hidden');
                      }}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : null}

                  <div className={`${member.image ? 'hidden' : ''} absolute inset-0 flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-slate-900/15" />
                    <div className={`relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/80 text-3xl font-bold shadow-lg ${member.accent}`}>
                      {member.initials}
                    </div>
                  </div>
                </div>

                <div className="flex min-h-[102px] items-center justify-center px-4 py-4 text-center">
                  <div>
                    <h3 className="text-[1.08rem] font-bold text-[#0B3B48] font-outfit leading-relaxed">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#1f6f86] leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
