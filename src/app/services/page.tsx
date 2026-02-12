import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services | ServiceNow SAM Pro Consulting | Cadena',
  description: 'ServiceNow SAM Pro implementation, optimization, migration, and AI governance services. From foundational SAM to AI-era software asset management.',
  alternates: {
    canonical: 'https://cadena.co/services',
  },
};

const coreSamServices = [
  {
    title: 'SAM Pro Implementation',
    description: 'Full ServiceNow SAM Pro deployment with clean data foundation, OT discovery, vulnerability convergence, and time-to-value in months.',
    href: '/services/sam-pro-implementation',
    cta: 'Learn More',
  },
  {
    title: 'SAM Rescue & Optimization',
    description: 'Fix failed implementations, repair data foundations, and turn underperforming SAM programs into strategic assets.',
    href: '/services/sam-rescue',
    cta: 'Learn More',
  },
  {
    title: 'Flexera-to-ServiceNow Migration',
    description: 'Migrate from Flexera to SAM Pro in 90 days with zero data loss. Proven playbook refined across a dozen enterprise engagements.',
    href: '/services/flexera-migration',
    cta: 'Learn More',
  },
];

const aiEraSamServices = [
  {
    title: 'AI Software Asset Management',
    description: 'Discover, classify, and govern Shadow AI. Find the AI tools your employees are buying without IT\'s knowledge.',
    href: '/services/ai-software-asset-management',
    cta: 'Learn More',
  },
  {
    title: 'Audit Defense & License Compliance',
    description: 'Be audit-ready before the letter arrives. Publisher-specific expertise for Microsoft, Oracle, SAP, Adobe - plus OT and AI.',
    href: '/services/audit-defense',
    cta: 'Learn More',
  },
  {
    title: 'AI License Optimization',
    description: 'Right-size AI software spend. Typical savings: 20-40% through right-sizing, reclamation, and entitlement optimization.',
    href: '/services/ai-license-optimization',
    cta: 'Learn More',
  },
];

const costGovernanceServices = [
  {
    title: 'Software Rationalization & Workforce Transitions',
    description: 'Reclaim licenses during layoffs, reorgs, and M&A. Recover 20-35% of software spend within 90 days when SAM data is clean.',
    href: '/services/software-rationalization',
    cta: 'Learn More',
  },
  {
    title: 'SaaS License Management',
    description: 'Get control of SaaS sprawl. You have 300 SaaS apps - you need 200. We find the other 100.',
    href: '/services/saas-license-management',
    cta: 'Learn More',
  },
  {
    title: 'Cloud Cost Management & FinOps',
    description: 'Bridge the gap between FinOps and SAM. Your FinOps team optimizes infrastructure - nobody\'s optimizing cloud software licenses.',
    href: '/services/cloud-cost-management',
    cta: 'Learn More',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            One firm. Nine ways we help.
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From foundational SAM implementations to AI-era governance, we cover the full spectrum of software asset management for enterprise organizations.
          </p>
        </div>
      </section>

      {/* Core SAM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#004040]/20" />
            <h2 className="text-2xl font-bold text-[#004040] uppercase tracking-wider">Core SAM</h2>
            <div className="h-px flex-1 bg-[#004040]/20" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreSamServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#004040] hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-[#004040] mb-4 group-hover:text-[#006666]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[#004040] font-semibold group-hover:text-[#006666]">
                  {service.cta}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Era SAM */}
      <section className="py-20 bg-[#004040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#ccff00]/50" />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">AI-Era SAM</h2>
            <div className="h-px flex-1 bg-[#ccff00]/50" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiEraSamServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-[#ccff00] hover:bg-white/20 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ccff00]">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[#ccff00] font-semibold">
                  {service.cta}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost & Governance */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#004040]/20" />
            <h2 className="text-2xl font-bold text-[#004040] uppercase tracking-wider">Cost & Governance</h2>
            <div className="h-px flex-1 bg-[#004040]/20" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {costGovernanceServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#004040] hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-[#004040] mb-4 group-hover:text-[#006666]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[#004040] font-semibold group-hover:text-[#006666]">
                  {service.cta}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
            Not sure where to start?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free consultation. We&apos;ll assess your current state and recommend the right engagement for your situation.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#004040] text-white text-lg font-bold rounded-lg hover:bg-[#003333] transition-all"
          >
            Book a Free Consultation
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
