import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAM Pro for Energy & Utilities | OT Software & NERC CIP Compliance | Cadena',
  description: 'Software asset management for energy and utility companies. Manage SCADA software licensing, grid management systems, NERC CIP compliance, and OT/IT convergence.',
  keywords: 'nerc cip software compliance, scada software licensing, energy software asset management, ot software compliance',
  alternates: { canonical: 'https://cadena.co/industries/energy' },
};

const challenges = [
  { title: 'SCADA & Grid Management Software', description: 'GE, Siemens, ABB, Schneider Electric-control system software with licensing tied to endpoints, historian tags, and protocol converters. OT software that operations depends on but IT rarely tracks.' },
  { title: 'NERC CIP Compliance', description: 'Critical Infrastructure Protection standards require software inventory, patch management, and configuration control for bulk electric system assets. SAM data is foundational to compliance evidence.' },
  { title: 'OT/IT Convergence', description: 'Smart grid and digital transformation push OT systems onto corporate networks. Software licensing, patching, and compliance across the OT/IT boundary creates new SAM challenges.' },
  { title: 'Long Asset Lifecycles', description: 'Power generation and transmission assets operate for decades. Software supporting these assets spans generations of licensing models, vendors, and support agreements.' },
];

const howWeHelp = [
  'SCADA software inventory: extend SAM visibility into control centers, substations, and generation facilities',
  'NERC CIP alignment: SAM data feeding compliance evidence for software inventory and vulnerability management',
  'OT/IT license governance: unified approach to software licensing across operational and corporate environments',
  'Legacy software management: track support status, EOL dates, and compliance for long-lifecycle industrial software',
];

export default function EnergyIndustryPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/industries" className="inline-flex items-center text-gray-300 hover:text-white mb-6"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>All Industries</Link>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">Energy & Utilities</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">SAM Pro for Energy & Utilities</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">Critical infrastructure. NERC CIP compliance. OT/IT convergence. Energy sector SAM requires specialized expertise in high-reliability, highly regulated environments.</p>
            <Link href="#contact" className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Energy<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-12 text-center">Industry SAM Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.map((c) => (<div key={c.title} className="bg-gray-50 rounded-xl p-8 border border-gray-100"><h3 className="text-xl font-bold text-[#004040] mb-3">{c.title}</h3><p className="text-gray-600">{c.description}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-8">How Cadena Helps</h2>
          <ul className="space-y-4">{howWeHelp.map((item) => (<li key={item} className="flex items-start gap-4"><svg className="w-6 h-6 text-[#004040] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg><span className="text-gray-700 text-lg">{item}</span></li>))}</ul>
        </div>
      </section>
      <section id="contact" className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to strengthen your energy sector SAM?</h2>
          <p className="text-xl text-gray-200 mb-8">Talk to a SAM expert who understands critical infrastructure, NERC CIP, and OT software challenges.</p>
          <Link href="/#contact" className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Energy<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
