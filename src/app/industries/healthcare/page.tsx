import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAM Pro for Healthcare | HIPAA-Compliant Software Asset Management | Cadena',
  description: 'Software asset management for hospitals, health systems, and healthcare providers. Manage EHR licensing, medical device software, clinical application compliance, and HIPAA-aligned SAM governance.',
  keywords: 'hipaa software compliance, healthcare software licensing, servicenow healthcare, ehr license management',
  alternates: { canonical: 'https://cadena.co/industries/healthcare' },
};

const challenges = [
  { title: 'EHR Licensing Complexity', description: 'Epic, Cerner, Meditech—EHR licensing tied to beds, providers, modules, and transaction volumes. True costs are difficult to project, and optimization opportunities are buried in contract complexity.' },
  { title: 'Medical Device Software', description: 'Imaging systems, diagnostic equipment, patient monitors—all running commercial software that needs license management. FDA-regulated devices add validation and change control requirements.' },
  { title: 'HIPAA & Security Requirements', description: 'Software handling PHI needs documented compliance. SAM must track not just licenses but access controls, encryption status, and BAA coverage. Security and compliance are inseparable from licensing.' },
  { title: 'Clinical Application Sprawl', description: 'Departments adopt specialized clinical applications independently. Radiology, cardiology, lab systems—each with different vendors, licensing models, and compliance requirements.' },
];

const howWeHelp = [
  'EHR license optimization: module-level analysis, usage-based right-sizing, renewal negotiation support',
  'Medical device software governance: track embedded software, coordinate with biomedical engineering, maintain FDA compliance',
  'HIPAA-aligned SAM: map software to data sensitivity, document BAA coverage, integrate with security workflows',
  'Clinical application rationalization: identify redundant systems, consolidate vendors, reduce compliance surface',
];

export default function HealthcareIndustryPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/industries" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              All Industries
            </Link>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">Healthcare</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">SAM Pro for Healthcare</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">EHR complexity. Medical device software. HIPAA requirements. Healthcare SAM demands specialized expertise in regulated, patient-critical environments.</p>
            <Link href="#contact" className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all">
              Talk to a SAM Expert for Healthcare
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to strengthen your healthcare SAM?</h2>
          <p className="text-xl text-gray-200 mb-8">Talk to a SAM expert who understands healthcare software challenges and compliance requirements.</p>
          <Link href="/#contact" className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Healthcare<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
