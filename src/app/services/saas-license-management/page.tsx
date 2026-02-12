import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SaaS License Management | SaaS Sprawl & Spend Governance | Cadena',
  description: 'Get control of SaaS sprawl. Cadena helps enterprises discover, manage, and optimize SaaS licenses through ServiceNow SAM Pro - eliminating redundant subscriptions, reclaiming unused seats, and governing renewals.',
  keywords: 'saas license management, saas spend management, saas sprawl, saas governance, saas optimization, saas cost optimization, enterprise saas management, saas vendor management',
  alternates: {
    canonical: 'https://cadena.co/services/saas-license-management',
  },
};

const capabilities = [
  {
    title: 'SaaS Discovery & Inventory',
    description: 'Aggregate data from Okta/SSO, cloud access security brokers (CASB), expense systems, procurement, and direct vendor integrations. Build complete SaaS inventory in ServiceNow SAM Pro.',
  },
  {
    title: 'Usage Analytics',
    description: 'Who\'s actually using what, how often, and at what tier. Identify inactive users, underutilized licenses, and over-provisioned tiers.',
  },
  {
    title: 'Redundancy Elimination',
    description: 'Map overlapping functionality across SaaS applications. Recommend consolidation. Quantify savings from eliminating duplicate tools.',
  },
  {
    title: 'Renewal Management',
    description: 'Proactive renewal calendar. Usage-based right-sizing recommendations 90+ days before renewal triggers. Negotiation leverage from actual data.',
  },
  {
    title: 'SaaS Governance Framework',
    description: 'Approval workflows for new SaaS requests, catalog of approved alternatives, spend policies, departmental chargeback. Prevent sprawl from recurring.',
  },
];

const problems = [
  {
    title: 'Decentralized Buying',
    description: 'Every department, every team lead, every individual contributor can buy SaaS on a credit card. Procurement only sees a fraction.',
  },
  {
    title: 'Invisible Renewals',
    description: 'Annual SaaS contracts auto-renew 30-90 days before expiration. By the time anyone reviews usage, the commitment is locked.',
  },
  {
    title: 'Redundant Tools',
    description: 'Three project management tools, four design platforms, two CRM systems. Different teams bought different tools for the same function.',
  },
  {
    title: 'License Waste',
    description: 'SaaS vendors sell in tiers and bundles. Enterprises buy Pro when Basic would suffice. Pay for 500 seats when 200 are active.',
  },
  {
    title: 'No Single Source of Truth',
    description: 'SaaS data lives in expense reports, procurement systems, SSO logs, cloud marketplaces, and departmental budgets. Nobody has the full picture.',
  },
];

export default function SaaSLicenseManagementPage() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Link 
                href="/services"
                className="inline-flex items-center text-gray-300 hover:text-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Services
              </Link>
              <span className="px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full">
                Cost & Governance
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              You have 300 SaaS apps.{' '}
              <span className="text-[#ccff00]">You need 200.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Average enterprise runs 300-400+ SaaS applications. 30-40% have overlapping functionality. Renewal dates pass unreviewed. Teams buy tools on corporate cards that duplicate enterprise agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              SaaS Is the New Shadow IT
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div 
                key={problem.title}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <h3 className="text-xl font-bold text-[#004040] mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              How Cadena Helps
            </h2>
          </div>

          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="flex gap-6 p-6 bg-white rounded-xl"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#004040] rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-[#ccff00]">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004040] mb-2">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-[#004040] rounded-xl">
            <p className="text-2xl text-white font-medium text-center">
              Enterprises typically save <span className="text-[#ccff00]">25-35% on SaaS spend</span> through rationalization, right-sizing, and renewal optimization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Book a SaaS Spend Assessment
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Identify your top SaaS optimization opportunities in 60 minutes.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all"
          >
            Get Your Assessment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#004040] mb-8 text-center">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/software-rationalization" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#004040] mb-2">Software Rationalization</h4>
              <p className="text-gray-600 text-sm">Reclaim licenses during workforce transitions and reduce IT costs.</p>
            </Link>
            <Link href="/services/cloud-cost-management" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#004040] mb-2">Cloud Cost Management</h4>
              <p className="text-gray-600 text-sm">Bridge the gap between FinOps and SAM for complete cloud visibility.</p>
            </Link>
            <Link href="/services/ai-license-optimization" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#004040] mb-2">AI License Optimization</h4>
              <p className="text-gray-600 text-sm">Right-size AI software spend across Copilot, cloud AI, and more.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
