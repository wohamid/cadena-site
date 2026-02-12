import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SAM Pro for Retail | Omnichannel Software & License Management | Cadena',
  description: 'Software asset management for retailers. Manage POS licensing, e-commerce platform compliance, omnichannel software sprawl, and AI-powered personalization tools across store and digital operations.',
  keywords: 'servicenow retail, retail it asset management, pos software licensing, ecommerce platform compliance',
  alternates: { canonical: 'https://cadena.co/industries/retail' },
};

const challenges = [
  { title: 'POS & Store Technology', description: 'POS systems, self-checkout software, inventory management, workforce scheduling-licensed per device, per store, or per transaction across hundreds or thousands of locations.' },
  { title: 'E-commerce Platform Licensing', description: 'Salesforce Commerce Cloud, Adobe Commerce, Shopify Plus, custom platforms-revenue-based or order-based licensing models that shift with business volume.' },
  { title: 'Seasonal Scaling', description: 'Retail traffic spikes 3-5x during holidays. Cloud and SaaS licenses provisioned for peak often sit unused 10 months of the year.' },
  { title: 'AI for Personalization', description: 'Recommendation engines, dynamic pricing, visual search, chatbots-AI tools adopted across marketing, merchandising, and customer service with no central governance.' },
];

const howWeHelp = [
  'Store technology license management: unified view across all locations, reclaim unused POS/device licenses',
  'E-commerce license optimization: right-size platform agreements based on actual transaction volumes',
  'Seasonal cost optimization: identify over-provisioned capacity outside peak periods',
  'AI software governance: bring personalization and marketing AI tools under SAM',
];

export default function RetailIndustryPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Link href="/industries" className="inline-flex items-center text-gray-300 hover:text-white"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>All Industries</Link>
            </div>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">Retail</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">SAM Pro for Retail</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">POS systems. E-commerce platforms. Seasonal scaling. AI personalization. Retail SAM requires expertise across store operations and digital commerce.</p>
            <Link href="#contact" className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Retail<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to optimize your retail SAM?</h2>
          <p className="text-xl text-gray-200 mb-8">Talk to a SAM expert who understands store technology, e-commerce platforms, and retail seasonality.</p>
          <Link href="/#contact" className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all">Talk to a SAM Expert for Retail<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
