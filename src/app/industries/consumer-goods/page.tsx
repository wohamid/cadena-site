import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAM Pro for Consumer Goods | Manufacturing & Supply Chain License Management | Cadena',
  description: 'Software asset management for consumer goods companies. Manage ERP licensing, supply chain platform compliance, manufacturing OT software, and AI-powered demand planning tool governance.',
  keywords: 'consumer goods software asset management, manufacturing software licensing, erp license management, supply chain software compliance',
  alternates: { canonical: 'https://cadena.co/industries/consumer-goods' },
};

const challenges = [
  { title: 'ERP Licensing at Scale', description: 'SAP S/4HANA migrations, Oracle EBS to Cloud transitions-major re-licensing events with multi-million dollar implications. Getting the entitlement mapping wrong costs millions in true-ups.' },
  { title: 'Supply Chain Software Proliferation', description: 'Blue Yonder, Kinaxis, o9 Solutions, Manhattan Associates-planning, logistics, and warehouse platforms with capacity-based and transaction-based licensing.' },
  { title: 'Manufacturing OT', description: 'Same OT challenge as automotive-factory floor software (Rockwell, Siemens, Schneider Electric) running licensed software nobody tracks.' },
  { title: 'AI for Demand Planning', description: 'CPG companies adopting AI for forecasting, pricing optimization, and consumer insights. New software layer with consumption licensing.' },
];

const howWeHelp = [
  'ERP audit defense: Oracle and SAP audit readiness with manufacturer-specific licensing expertise',
  'Supply chain license optimization: right-size platform agreements, identify unused capacity',
  'OT software discovery: extend SAM into manufacturing environments, build vendor audit readiness',
  'AI governance: bring demand planning and consumer AI tools under SAM governance',
];

export default function ConsumerGoodsIndustryPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Link href="/industries" className="inline-flex items-center text-gray-300 hover:text-white"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>All Industries</Link>
            </div>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">Consumer Goods</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">SAM Pro for Consumer Goods</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">ERP migrations. Supply chain platforms. Manufacturing OT. AI demand planning. CPG SAM requires expertise across enterprise and operational software.</p>
            <Link href="#contact" className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Consumer Goods<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to optimize your CPG SAM?</h2>
          <p className="text-xl text-gray-200 mb-8">Talk to a SAM expert who understands ERP migrations, supply chain software, and manufacturing OT.</p>
          <Link href="/#contact" className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Consumer Goods<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
