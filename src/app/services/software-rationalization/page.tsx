import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Software Rationalization & License Reclamation | Workforce Transition SAM | Cadena',
  description: 'Reclaim software licenses during layoffs, reorgs, and M&A. Cadena helps enterprises rationalize software portfolios, harvest unused licenses, and reduce IT costs through ServiceNow SAM Pro.',
  keywords: 'application rationalization, software rationalization, it cost reduction, software cost reduction, license harvesting, unused software licenses, reduce it costs',
  alternates: {
    canonical: 'https://cadena.co/services/software-rationalization',
  },
};

const capabilities = [
  {
    title: 'Rapid License Inventory',
    description: 'Complete picture in days, not months: every license, every user, every status across all publishers. Covers SaaS, on-prem, cloud, embedded AI features.',
  },
  {
    title: 'Usage Analysis & Reclamation',
    description: 'Identify unused, underused, and reclaimable licenses. Automated reclamation workflows in ServiceNow SAM Pro. Quick wins within 30 days.',
  },
  {
    title: 'Renewal Intervention',
    description: 'Flag upcoming renewals for right-sizing before auto-renewal triggers. Negotiate from a position of data, not guesswork.',
  },
  {
    title: 'Portfolio Rationalization',
    description: 'Identify redundant tools across teams and departing employees. Consolidate overlapping SaaS, eliminate duplicate functionality.',
  },
  {
    title: 'M&A Software Integration',
    description: 'Acquired company brings a new software estate. We inventory, rationalize, and integrate into unified SAM program.',
  },
];

const problems = [
  {
    title: 'Auto-renewals',
    description: 'SaaS renewals trigger on contract dates, not headcount changes. By the time procurement notices, the next term has already started.',
  },
  {
    title: 'No Visibility',
    description: 'Who had what licenses? Which were actively used? What\'s reclaimable vs. contractually committed? Most companies can\'t answer these questions.',
  },
  {
    title: 'Embedded Licenses',
    description: 'Copilot seats, Einstein features, Slack upgrades, Zoom add-ons - bundled with primary licenses, invisible to standard offboarding.',
  },
  {
    title: 'Contractual Traps',
    description: 'Minimum commit clauses, ramp-down restrictions, early termination penalties. You need to know your entitlements before you can optimize.',
  },
  {
    title: 'Fear of Disruption',
    description: 'IT won\'t reclaim licenses without certainty that nobody\'s using them. Without clean usage data, reclamation stalls.',
  },
];

export default function SoftwareRationalizationPage() {
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
              Headcount dropped 20%.{' '}
              <span className="text-[#ccff00]">Your software spend didn&apos;t.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              Layoffs, reorgs, M&A divestitures, hiring freezes, RTO shifts - all create the same SAM problem. Licenses keep billing for people who are no longer using them.
            </p>
            <p className="text-lg text-[#ccff00] font-medium">
              Every month of delay = another month of full-price renewals for unused software. Most enterprises take 6-12 months to adjust. Cadena does it in weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              Why Software Spend Doesn&apos;t Follow Headcount
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
              Typical enterprise recovers <span className="text-[#ccff00]">20-35% of software spend</span> within 90 days of a workforce transition when SAM data is clean.
            </p>
          </div>
        </div>
      </section>

      {/* Autopilot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              Built for Autopilot
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              AI Agents can automate reclamation rule generation, identify orphaned licenses, and flag renewal risks. But only when the data foundation is clean. Every rationalization engagement builds toward autonomous cost governance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Book a Software Rationalization Assessment
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            We&apos;ll identify your top reclamation opportunities in 60 minutes.
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
            <Link href="/services/saas-license-management" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#004040] mb-2">SaaS License Management</h4>
              <p className="text-gray-600 text-sm">Get control of SaaS sprawl and eliminate redundant subscriptions.</p>
            </Link>
            <Link href="/services/sam-rescue" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#004040] mb-2">SAM Rescue</h4>
              <p className="text-gray-600 text-sm">Fix your failed SAM implementation and start seeing ROI.</p>
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
