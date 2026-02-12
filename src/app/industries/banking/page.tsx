import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAM Pro for Banking & Finance | Software Compliance & License Management | Cadena',
  description: 'Software asset management for banks, asset managers, and financial services firms. Manage trading platform licensing, regulatory compliance, and core banking system optimization.',
  keywords: 'banking software compliance, pci software compliance, sox software compliance, financial services software licensing',
  alternates: {
    canonical: 'https://cadena.co/industries/banking',
  },
};

const challenges = [
  {
    title: 'Trading Platform Licensing',
    description: 'Bloomberg, Refinitiv, FactSet, S&P Capital IQ—expensive specialized software with complex enterprise agreements. Per-user, per-terminal, and data feed licensing creates significant compliance exposure.',
  },
  {
    title: 'Regulatory Compliance',
    description: 'SOX, PCI DSS, OCC requirements—all require demonstrable software governance. Audit trails, access controls, and license documentation aren\'t optional. They\'re regulatory obligations.',
  },
  {
    title: 'Core Banking Modernization',
    description: 'Migrating from legacy core systems (Fiserv, FIS, Temenos) while maintaining parallel operations. Dual licensing, overlapping functionality, and unclear entitlements during transition periods.',
  },
  {
    title: 'Cybersecurity Software Proliferation',
    description: 'Financial services are prime targets. Security teams deploy tools rapidly—often without IT or SAM visibility. The tools protecting you might be creating compliance exposure.',
  },
];

const howWeHelp = [
  'Trading platform license optimization: usage-based analysis, right-sizing expensive specialist licenses',
  'Regulatory-compliant SAM: auditable license positions, automated reporting, continuous compliance monitoring',
  'Core system migration support: manage dual licensing during modernization, prevent compliance gaps',
  'Security tool governance: bring proliferating security software under SAM visibility',
];

export default function BankingIndustryPage() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link 
              href="/industries"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Industries
            </Link>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Banking & Finance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              SAM Pro for Banking & Financial Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Regulatory pressure. Expensive trading platforms. Core system modernization. Banking SAM challenges require specialized expertise in high-stakes environments.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all"
            >
              Talk to a SAM Expert for Banking
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              Industry SAM Challenges
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.map((challenge) => (
              <div 
                key={challenge.title}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#004040] mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-8">
              How Cadena Helps
            </h2>
            <ul className="space-y-4">
              {howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#004040] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to strengthen your SAM program?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Talk to a SAM expert who understands banking software challenges and regulatory requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all"
          >
            Talk to a SAM Expert for Banking
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-gray-500 mb-6 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/sam-pro-implementation" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-[#004040] hover:text-white text-[#004040] font-medium transition-colors">
              SAM Pro Implementation
            </Link>
            <Link href="/services/audit-defense" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-[#004040] hover:text-white text-[#004040] font-medium transition-colors">
              Audit Defense
            </Link>
            <Link href="/services/ai-license-optimization" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-[#004040] hover:text-white text-[#004040] font-medium transition-colors">
              AI License Optimization
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
