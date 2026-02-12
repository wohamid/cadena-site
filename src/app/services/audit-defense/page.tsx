import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Software Audit Defense & License Compliance | OT & AI Audit Readiness | Cadena',
  description: 'Be audit-ready before vendors come knocking. Publisher-specific audit defense, license compliance management, OT software compliance, and vulnerability-driven remediation for Microsoft, Oracle, Adobe, SAP, and AI software.',
  keywords: 'software license audit, software audit defense, software license compliance, oracle audit defense, ot software compliance, application vulnerability management, microsoft audit, ai audit readiness',
  alternates: {
    canonical: 'https://cadena.co/services/audit-defense',
  },
};

const capabilities = [
  {
    title: 'Entitlement Management',
    description: 'Comprehensive repository: license entitlements mapped to contract terms, use rights, and compliance rules per publisher.',
  },
  {
    title: 'Automated Reconciliation',
    description: 'SAM Pro continuously matches usage against rights. Identifies gaps and optimization opportunities in real time—not during audit scrambles.',
  },
  {
    title: 'Publisher Pack Expertise',
    description: 'Microsoft, Oracle, Adobe, SAP, IBM, Salesforce. Each has unique models and audit approaches. Our rules match your actual agreements.',
  },
  {
    title: 'AI Audit Readiness',
    description: 'Copilot entitlements, cloud AI consumption, embedded AI features, open-source AI compliance. Ready for the audit letters that are coming.',
  },
  {
    title: 'OT Software Compliance',
    description: 'PLC programming tools, DCS configurations, historian licenses, embedded industrial software. Most enterprises have zero OT software licensing visibility.',
  },
  {
    title: 'Vulnerability-Driven Compliance',
    description: 'Connect SAM data to ServiceNow Vulnerability Response. Software with CVEs or expired support feeds remediation workflows. License data becomes a security asset.',
  },
  {
    title: 'Proactive Risk Identification',
    description: 'Find compliance gaps before vendors do. Audit response = pulling a report, not launching a project.',
  },
];

export default function AuditDefense() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link 
              href="/services"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              AI-Era SAM
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Be audit-ready before the letter arrives.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Millions in true-up fees. Months of internal resources consumed. The scramble when a vendor audit letter arrives is painful—and preventable. We build audit readiness into your SAM program from day one.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all"
            >
              Book an Audit Readiness Assessment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* The Expanding Audit Landscape */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              The Audit Landscape Is Expanding
            </h2>
            <p className="text-xl text-gray-600">
              Microsoft, Oracle, SAP, Adobe—you know those audits. But two new fronts are opening:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#ccff00]">
              <h3 className="text-xl font-bold text-[#004040] mb-4">AI Software Audits</h3>
              <p className="text-gray-600 mb-4">
                Vendors are embedding AI features with new license terms. Copilot without E5. Einstein and Joule consumption implications. Enterprises are activating capabilities they&apos;re not entitled to—and vendors are noticing.
              </p>
              <p className="text-sm text-gray-500 italic">
                The audit letters for AI non-compliance are coming. Are you ready?
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#004040]">
              <h3 className="text-xl font-bold text-[#004040] mb-4">OT Software Audits</h3>
              <p className="text-gray-600 mb-4">
                Industrial vendors (Siemens, Rockwell, Honeywell, AVEVA) are getting aggressive. Legacy licensing situations: perpetual licenses from years ago, undocumented OEM bundles, software cloned during plant expansions.
              </p>
              <p className="text-sm text-gray-500 italic">
                OT software also carries vulnerability risk: unpatched software with CVEs = compliance + safety liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              Publisher-Specific Audit Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven capabilities that make audit response a report pull, not a project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((capability) => (
              <div 
                key={capability.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-[#004040] mb-3">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            How&apos;s your audit readiness?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Book an Audit Readiness Assessment. We&apos;ll review your license position for your highest-risk publishers and identify gaps before vendors do.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all"
          >
            Book an Audit Readiness Assessment
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
