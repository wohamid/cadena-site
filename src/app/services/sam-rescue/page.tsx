import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAM Rescue & Optimization | Fix Your Failed SAM Implementation | Cadena',
  description: 'Your SAM implementation didn\'t deliver. We fix it. Cadena rescues failed ServiceNow SAM programs, cleans up data foundations, and turns underperforming implementations into strategic assets.',
  keywords: 'failed servicenow implementation, sam optimization, servicenow sam consultant, software asset management services, sam health assessment, license reclamation',
  alternates: {
    canonical: 'https://cadena.co/services/sam-rescue',
  },
};

const rescueSteps = [
  {
    title: 'SAM Health Assessment',
    description: 'Comprehensive audit of your current implementation: discovery coverage, normalization rates, entitlement accuracy, integration health, data quality. We find what\'s broken.',
  },
  {
    title: 'Data Foundation Repair',
    description: 'Clean the CMDB, fix discovery gaps, rebuild normalization rules, correct entitlement mappings. The foundation work that should have been done the first time.',
  },
  {
    title: 'Process Optimization',
    description: 'Reconfigure workflows for software request, reclamation, and compliance reporting. Align processes with how your organization actually works.',
  },
  {
    title: 'Quick Wins',
    description: 'Immediate cost savings through reclamation, right-sizing, and redundancy elimination. Most rescues generate ROI within 90 days.',
  },
  {
    title: 'Path to Autopilot',
    description: 'Rebuild data foundation and workflows so AI Agents and Now Assist features can work: automated reclamation, intelligent request fulfillment, one-click audit preparation.',
  },
];

const failurePatterns = [
  'Discovery configured once, never tuned',
  'Normalization stuck at 60-70%',
  'Publisher packs installed but not customized',
  'Broken or ignored integrations',
  'CMDB CIs drifting from reality',
  'Dashboards nobody trusts',
];

export default function SamRescue() {
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
                Core SAM
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your last SAM partner didn&apos;t deliver. We will.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Unreliable data. Dashboards nobody trusts. Manual spreadsheet reconciliation that defeats the purpose of having a SAM tool. We&apos;ve seen it all-and we fix it.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all"
            >
              Book a Free SAM Health Assessment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Failure Patterns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
                How SAM Implementations Go Wrong
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                The result is always the same: a system that costs money but doesn&apos;t save any, accumulating audit exposure while everyone pretends the problem doesn&apos;t exist.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-[#004040] mb-4">Common Patterns We See:</h3>
              <ul className="space-y-3">
                {failurePatterns.map((pattern) => (
                  <li key={pattern} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{pattern}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Fix It */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              How We Fix It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five steps from broken to working. Most organizations see ROI within 90 days.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {rescueSteps.map((step, index) => (
              <div 
                key={step.title}
                className="bg-white rounded-xl p-8 border border-gray-200 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#004040] rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-[#ccff00]">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004040] mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to rescue your SAM program?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Start with a free 60-minute SAM Health Assessment. We&apos;ll identify what&apos;s broken and map the fastest path to a working system.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all"
          >
            Book a Free SAM Health Assessment
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
