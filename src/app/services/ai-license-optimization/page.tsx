import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI License Optimization | Reduce Enterprise AI Software Spend | Cadena',
  description: 'Right-size AI software spend across Microsoft Copilot, NVIDIA, cloud AI services, and more. Cadena helps enterprises optimize AI license costs, eliminate over-provisioning, and find AI entitlements they already own.',
  keywords: 'software license optimization, ai license optimization, ai spend management, copilot licensing, ai license management, ai cost optimization, cloud ai spend',
  alternates: {
    canonical: 'https://cadena.co/services/ai-license-optimization',
  },
};

const optimizationCapabilities = [
  {
    title: 'AI Software Inventory',
    description: 'Complete picture: every AI tool, subscription, API, and embedded feature. All 4 Shadow AI types cataloged with ownership, cost, and usage data.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Entitlement Reconciliation',
    description: 'Map owned vs. consumed. Many enterprises have unused AI entitlements: Copilot in E5, Einstein in Salesforce tiers, Now Assist in ServiceNow agreements. Stop paying twice.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Usage Analysis & Right-Sizing',
    description: 'Over-provisioned AI licenses, underutilized cloud commitments, consumption outliers. Copilot seats used once. Bedrock capacity exceeding actual inference. We find it all.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Cost Governance',
    description: 'Policies, monitoring, approval workflows. Budget alerts for consumption services. Approval gates for new AI tools. Renewal management for AI SaaS. Control that scales.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AILicenseOptimization() {
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
                AI-Era SAM
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              You&apos;re spending more on AI software than you think. We make it visible.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              $300B+ in AI infrastructure spending is driving acceleration at every level of the stack. But can you answer: What&apos;s your Copilot utilization? Your dev team&apos;s API spend? Which AI entitlements you already own? The vulnerability exposure of deployed AI tools?
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all"
            >
              Book an AI License Audit
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why AI Spend Is Invisible */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              Why AI Software Spend Is Invisible
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                AI licensing is fundamentally different from traditional software. Consumption-based billing. GPU-tied pricing. Features embedded in existing products. Models that evolve monthly.
              </p>
              <p className="mb-6">
                Your SAM team mastered Microsoft EA agreements and Oracle processor metrics. But AI licensing breaks existing workflows. The result?
              </p>
              <ul className="space-y-2 mb-6">
                <li>Over-provisioned seats nobody&apos;s using</li>
                <li>Unused cloud AI capacity burning budget</li>
                <li>Bundled entitlements going unclaimed</li>
                <li>Consumption outliers nobody notices until the invoice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Optimize */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              How We Optimize AI Software Spend
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four capabilities that bring AI licensing under control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {optimizationCapabilities.map((capability) => (
              <div 
                key={capability.title}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-[#004040] rounded-lg flex items-center justify-center text-[#ccff00] mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-[#004040] mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stat */}
      <section className="py-20 bg-[#004040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl sm:text-7xl font-bold text-[#ccff00] mb-6">
            20-40%
          </div>
          <p className="text-2xl mb-8">
            of AI software spend is typically recoverable through right-sizing, reclamation, and entitlement optimization.
          </p>
          <p className="text-gray-300">
            The savings are there. You just can&apos;t see them yet.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
            How much are you overspending on AI software?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book an AI License Audit. We&apos;ll identify your top optimization opportunities across Copilot, cloud AI, and embedded features.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#004040] text-white text-lg font-bold rounded-lg hover:bg-[#003333] transition-all"
          >
            Book an AI License Audit
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
