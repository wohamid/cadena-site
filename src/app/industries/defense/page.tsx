import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAM Pro for Defense | ITAR & CMMC-Compliant Software Asset Management | Cadena',
  description: 'Software asset management for defense contractors and military organizations. Manage classified environment software, ITAR-compliant license governance, OT/weapons system software, and CMMC compliance.',
  keywords: 'itar software compliance, defense contractor software compliance, cmmc software compliance, defense software asset management, classified software management',
  alternates: { canonical: 'https://cadena.co/industries/defense' },
};

const challenges = [
  { title: 'Classified Environments', description: 'Air-gapped networks, SCIF facilities, multiple classification levels-each with separate software estates requiring independent license management. Discovery tools are often restricted.' },
  { title: 'ITAR/EAR Compliance', description: 'Export-controlled software cannot be accessed by foreign nationals. SAM must track not just licenses but access controls. Violation consequences are existential for contractors.' },
  { title: 'CMMC Requirements', description: 'Cybersecurity Maturity Model Certification requires software inventory, vulnerability management, and configuration management. SAM data is foundational to CMMC compliance evidence.' },
  { title: 'OT/Weapons System Software', description: 'Embedded software in weapons platforms, test equipment, simulation systems. Long lifecycle (20-30+ years), legacy operating systems, vendor support contracts predating modern licensing models.' },
  { title: 'Engineering Software Costs', description: 'MATLAB, Simulink, ANSYS, Cadence-$10K-$50K+ per seat for defense-grade engineering tools. Small optimization = significant savings with outsized ROI.' },
];

const howWeHelp = [
  'Classified environment SAM: methodology for managing separate software estates across classification levels',
  'ITAR-compliant governance: access-controlled license management meeting export control requirements',
  'CMMC alignment: SAM data feeding CMMC compliance evidence for software inventory and vulnerability management',
  'OT/weapons system software discovery: extend SAM visibility into operational technology and embedded systems',
  'Vulnerability convergence: identify software with CVEs across IT and OT environments for prioritized remediation',
];

export default function DefenseIndustryPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Link href="/industries" className="inline-flex items-center text-gray-300 hover:text-white"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>All Industries</Link>
            </div>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">Defense</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">SAM Pro for Defense</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">Classified environments. ITAR compliance. CMMC requirements. Weapons system software. Defense SAM requires specialized methodology for high-security, highly regulated environments.</p>
            <Link href="#contact" className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all">
              Talk to a SAM Expert for Defense
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to strengthen your defense SAM program?</h2>
          <p className="text-xl text-gray-200 mb-8">Talk to a SAM expert who understands defense software challenges, ITAR requirements, and CMMC compliance.</p>
          <Link href="/#contact" className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Defense<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
