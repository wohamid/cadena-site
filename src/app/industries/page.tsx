import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Industries | ServiceNow SAM Pro by Vertical | Cadena',
  description: 'Industry-specific ServiceNow SAM Pro expertise. From banking compliance to defense ITAR requirements, we understand your sector\'s unique software licensing challenges.',
  alternates: {
    canonical: 'https://cadena.co/industries',
  },
};

const industries = [
  { 
    href: '/industries/banking', 
    label: 'Banking & Finance',
    description: 'Trading platforms, SOX/PCI compliance, core banking modernization',
  },
  { 
    href: '/industries/automotive', 
    label: 'Automotive',
    description: 'Manufacturing OT, CAD/PLM licensing, supply chain',
  },
  { 
    href: '/industries/high-tech', 
    label: 'High Tech',
    description: 'Developer tools, SaaS sprawl, AI adoption, cloud consumption',
  },
  { 
    href: '/industries/healthcare', 
    label: 'Healthcare',
    description: 'EHR licensing, HIPAA compliance, medical device software',
  },
  { 
    href: '/industries/telco', 
    label: 'Telecommunications',
    description: 'Network management, OSS/BSS platforms, 5G infrastructure',
  },
  { 
    href: '/industries/insurance', 
    label: 'Insurance',
    description: 'Actuarial platforms, policy systems, SOX compliance',
  },
  { 
    href: '/industries/consumer-goods', 
    label: 'Consumer Goods',
    description: 'ERP licensing, supply chain software, manufacturing OT',
  },
  { 
    href: '/industries/retail', 
    label: 'Retail',
    description: 'POS systems, e-commerce platforms, seasonal scaling',
  },
  { 
    href: '/industries/life-sciences', 
    label: 'Life Sciences',
    description: 'GxP-validated software, FDA compliance, R&D platforms',
  },
  { 
    href: '/industries/defense', 
    label: 'Defense',
    description: 'ITAR/CMMC compliance, classified environments, weapons systems',
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            SAM Expertise for Your Industry
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Every industry has unique software licensing challenges. We bring deep expertise in regulated, complex, and high-stakes environments.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#004040] hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-bold text-[#004040] mb-3 group-hover:text-[#006666]">
                  {industry.label}
                </h2>
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                <span className="inline-flex items-center text-[#004040] font-medium group-hover:text-[#006666]">
                  Learn more
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
            Don&apos;t see your industry?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We work with enterprises across all sectors. Let&apos;s talk about your specific SAM challenges.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#004040] text-white text-lg font-bold rounded-lg hover:bg-[#003333] transition-all"
          >
            Talk to a SAM Expert
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
