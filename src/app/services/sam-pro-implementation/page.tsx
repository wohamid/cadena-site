import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ServiceNow SAM Pro Implementation | IT & OT Software Asset Management | Cadena',
  description: 'Expert ServiceNow SAM Pro implementation for enterprises. Clean data foundation, accurate normalization, publisher pack configuration, OT software discovery, vulnerability convergence, and time-to-value in months.',
  keywords: 'servicenow sam pro, servicenow sam implementation, servicenow software asset management, sam pro implementation, servicenow itam, ot software asset management, cmdb csdm, software discovery',
  alternates: {
    canonical: 'https://cadena.co/services/sam-pro-implementation',
  },
};

const methodologySteps = [
  {
    title: 'Discovery & Data Foundation',
    description: 'Full estate visibility: data center, cloud, SaaS, endpoints, AI tools. We extend discovery to OT environments-HMIs, SCADA workstations, engineering stations, and embedded systems running commercial software. Most SAM programs miss this entirely.',
  },
  {
    title: 'Normalization & Software Model Library',
    description: 'We achieve 95%+ normalization rates before moving forward-not the 60-70% that passes for acceptable. Software Model Library configured for your specific vendor landscape.',
  },
  {
    title: 'Publisher Pack Configuration',
    description: 'Entitlement, request, and reclamation lifecycles for priority publishers: Microsoft, Adobe, Oracle, SAP, Salesforce. Customized to your actual licensing agreements, not generic templates.',
  },
  {
    title: 'Integration Architecture',
    description: 'Connect to Okta, cloud providers, procurement systems (Coupa), endpoint management (Intune). Single source of truth. No more reconciling spreadsheets.',
  },
  {
    title: 'CMDB & CSDM Alignment',
    description: 'Map software assets to business services and business applications using CSDM. Business context for leadership-not just license counts, but what software supports which business capabilities.',
  },
  {
    title: 'Security & Vulnerability Convergence',
    description: 'Connect software inventory to ServiceNow Vulnerability Response. Identify assets running software with known CVEs, expired support contracts, or unauthorized versions. Critical for OT environments with unpatched industrial software.',
  },
  {
    title: 'Governance & Enablement',
    description: 'Train your team, establish workflows and policies for maintaining clean data post-engagement. Leadership dashboards. A self-sustaining program that doesn\'t fall apart when we leave.',
  },
];

const aiCapabilities = [
  {
    title: 'Asset Manager Skills',
    description: 'AI-powered sourcing, transfers, license identification and allocation',
  },
  {
    title: 'Audit Preparation',
    description: 'One-click compliance summaries, true-up cost identification, remediation recommendations',
  },
  {
    title: 'Software Request Fulfillment',
    description: 'Automated entitlement validation, availability checking, and license allocation',
  },
  {
    title: 'Software Reclamation Rules',
    description: 'AI identifies missing rules, analyzes usage patterns, recommends new reclamation policies',
  },
];

export default function SamProImplementation() {
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
              SAM Pro implementation that actually delivers.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Most SAM implementations fail-not because ServiceNow is bad, but because the approach is wrong. Data quality gets ignored. Normalization gets rushed. The partner moves on. We do it differently.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all"
            >
              Book a SAM Pro Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              Why Most Implementations Fall Short
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                The big consultancy pattern: A-team sells the engagement, B-team delivers it, and junior resources do the actual work. They check boxes, hit milestones, and hand you a system that technically functions but doesn&apos;t actually solve your problems.
              </p>
              <p className="mb-6">
                The root cause is almost always the same: <strong className="text-[#004040]">the data foundation wasn&apos;t built properly.</strong> Discovery is incomplete. Normalization sits at 60-70%. Entitlements don&apos;t match contracts. The CMDB is stale before go-live.
              </p>
              <p>
                The result? Expensive shelfware. Manual spreadsheet reconciliation. Leadership dashboards nobody trusts. And when the vendor audit letter arrives, you&apos;re scrambling anyway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Implement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              How Cadena Implements SAM Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven methodology steps, each designed to build on the last. No shortcuts. No moving forward until the foundation is solid.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {methodologySteps.map((step, index) => (
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

      {/* Built for Autopilot */}
      <section className="py-20 bg-[#004040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#ccff00] text-[#004040] text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Built for Autopilot
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              AI Agent Capabilities From Day One
            </h2>
            <p className="text-xl text-gray-200">
              Every implementation is designed for ServiceNow&apos;s AI features to work. Here&apos;s what becomes possible with a clean data foundation:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aiCapabilities.map((capability) => (
              <div 
                key={capability.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-[#ccff00] mb-2">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-200 italic max-w-2xl mx-auto">
              &ldquo;AI only works when the underlying data is clean. Every Cadena implementation builds the data foundation that makes these features productive-not just available.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
            Ready for SAM Pro that actually works?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a consultation to walk through our methodology, discuss timeline expectations, and understand what success looks like for your organization.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#004040] text-white text-lg font-bold rounded-lg hover:bg-[#003333] transition-all"
          >
            Book a SAM Pro Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-gray-500 mb-6 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/sam-rescue" className="px-4 py-2 bg-white rounded-lg border hover:border-[#004040] text-[#004040] font-medium transition-colors">
              SAM Rescue & Optimization
            </Link>
            <Link href="/services/audit-defense" className="px-4 py-2 bg-white rounded-lg border hover:border-[#004040] text-[#004040] font-medium transition-colors">
              Audit Defense
            </Link>
            <Link href="/services/ai-software-asset-management" className="px-4 py-2 bg-white rounded-lg border hover:border-[#004040] text-[#004040] font-medium transition-colors">
              AI Software Asset Management
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
