import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAM Pro for Automotive | Manufacturing OT & PLM Licensing | Cadena',
  description: 'Software asset management for automotive manufacturers and suppliers. Manage CAD/PLM licensing, manufacturing OT software, supply chain platforms, and EV software complexity.',
  keywords: 'servicenow manufacturing, automotive software licensing, plm license management, manufacturing ot software',
  alternates: { canonical: 'https://cadena.co/industries/automotive' },
};

const challenges = [
  { title: 'CAD/PLM Licensing', description: 'Siemens NX, Dassault CATIA, PTC Creo, Autodesk-expensive engineering software with complex token/seat licensing. Small optimization = millions in savings across global engineering teams.' },
  { title: 'Manufacturing OT Software', description: 'Factory floor systems: Rockwell, Siemens, Fanuc, ABB. PLCs, robotics, quality systems-all running commercial software with licensing implications nobody tracks.' },
  { title: 'Supply Chain Software', description: 'Tier 1 suppliers, logistics providers, dealer networks-automotive supply chains run on software. SAP, Oracle, specialized platforms with complex enterprise agreements.' },
  { title: 'EV & Software-Defined Vehicle', description: 'Electric and autonomous vehicles are software platforms. Development tools, simulation software, embedded systems licensing-new categories requiring new SAM approaches.' },
];

const howWeHelp = [
  'CAD/PLM optimization: usage-based analysis across global engineering, token pool right-sizing, vendor negotiation support',
  'Manufacturing OT discovery: extend SAM visibility to factory floor, build inventory of industrial software assets',
  'Supply chain license governance: manage licensing across complex supplier relationships and joint ventures',
  'EV software management: establish governance for emerging vehicle software development and embedded systems',
];

export default function AutomotiveIndustryPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Link href="/industries" className="inline-flex items-center text-gray-300 hover:text-white"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>All Industries</Link>
            </div>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">Automotive</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">SAM Pro for Automotive</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">Engineering software. Manufacturing OT. Supply chain complexity. EV transformation. Automotive SAM requires expertise spanning IT and operational technology.</p>
            <Link href="#contact" className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Automotive<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to optimize your automotive SAM?</h2>
          <p className="text-xl text-gray-200 mb-8">Talk to a SAM expert who understands engineering software, manufacturing OT, and automotive supply chains.</p>
          <Link href="/#contact" className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Automotive<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
