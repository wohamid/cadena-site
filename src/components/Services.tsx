'use client';

import Link from 'next/link';

const coreSamServices = [
  {
    title: 'SAM Pro Implementation',
    description: 'Full ServiceNow SAM Pro deployment with clean data foundation, OT discovery, vulnerability convergence, and time-to-value in months-not years.',
    href: '/services/sam-pro-implementation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'SAM Rescue & Optimization',
    description: 'Your last SAM partner didn\'t deliver. We fix failed implementations, repair data foundations, and turn underperforming programs into strategic assets.',
    href: '/services/sam-rescue',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Flexera-to-ServiceNow Migration',
    description: 'Migrate from Flexera to SAM Pro in 90 days with zero data loss. Proven playbook refined across a dozen enterprise engagements.',
    href: '/services/flexera-migration',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const aiEraSamServices = [
  {
    title: 'AI Software Asset Management',
    description: 'Discover, classify, and govern Shadow AI. We find the AI tools your employees are buying without IT\'s knowledge and bring them under governance.',
    href: '/services/ai-software-asset-management',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Audit Defense & License Compliance',
    description: 'Be audit-ready before the letter arrives. Publisher-specific expertise for Microsoft, Oracle, SAP, Adobe-plus OT vendors and AI software audits.',
    href: '/services/audit-defense',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'AI License Optimization',
    description: 'You\'re spending more on AI software than you think. We make it visible-and recoverable. Typical savings: 20-40% of AI software spend.',
    href: '/services/ai-license-optimization',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004040] mb-4">
            One firm. Six ways we help.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From foundational SAM implementations to AI-era governance, we cover the full spectrum of software asset management.
          </p>
        </div>

        {/* Tier 1: Core SAM */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-[#004040]/20" />
            <h3 className="text-lg font-semibold text-[#004040] uppercase tracking-wider">Core SAM</h3>
            <div className="h-px flex-1 bg-[#004040]/20" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {coreSamServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#004040] hover:shadow-lg transition-all"
              >
                <div className="text-[#004040] mb-6 group-hover:text-[#ccff00] transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#004040] mb-3 group-hover:text-[#004040]">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
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

        {/* Tier 2: AI-Era SAM */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-[#ccff00]" />
            <h3 className="text-lg font-semibold text-[#004040] uppercase tracking-wider">AI-Era SAM</h3>
            <div className="h-px flex-1 bg-[#ccff00]" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {aiEraSamServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-[#004040] rounded-xl p-8 border border-[#004040] hover:border-[#ccff00] hover:shadow-lg transition-all"
              >
                <div className="text-[#ccff00] mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[#ccff00] font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
