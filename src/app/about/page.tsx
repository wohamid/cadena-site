import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Cadena | Boutique ServiceNow SAM Consultancy',
  description: 'Cadena is a boutique ServiceNow consulting firm specializing in SAM Pro implementations for Fortune 500 enterprises. 17 years of enterprise software expertise. SAM Pro is all we do.',
  keywords: 'servicenow partner, servicenow implementation partner, it asset management consulting, software asset management consulting',
  alternates: {
    canonical: 'https://cadena.co/about',
  },
};

const values = [
  {
    title: 'SAM Pro Is All We Do',
    description: 'We\'re not a generalist shop trying to be everything to everyone. ServiceNow SAM Pro is our entire practice. That focus means deeper expertise and better outcomes.',
  },
  {
    title: 'Data Foundation First',
    description: 'Every engagement starts with data quality. We don\'t move forward until discovery is complete, normalization is high, and entitlements are accurate. That\'s how SAM actually works.',
  },
  {
    title: 'Build for Autopilot',
    description: 'Every implementation is designed for ServiceNow\'s AI features to work-not just today, but as AI capabilities expand. We build the foundation for autonomous operations.',
  },
  {
    title: 'Relationship Over Transaction',
    description: 'We\'re a boutique firm because we care about long-term partnerships, not project churn. Our clients come back because we deliver, not because we have sales quotas.',
  },
];

const certifications = [
  'ServiceNow Certified Implementation Specialist - ITAM',
  'ServiceNow Certified Application Developer',
  'ServiceNow Certified System Administrator',
  'ITIL Foundation Certified',
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Boutique expertise.{' '}
              <span className="text-[#ccff00]">Enterprise results.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Cadena is a boutique ServiceNow consulting firm specializing in Software Asset Management. We do one thing-SAM Pro-and we do it exceptionally well.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
                Why We Exist
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  We started Cadena because we saw a pattern: enterprises investing millions in SAM tools that never delivered. Not because the platforms were bad, but because the implementations were wrong.
                </p>
                <p className="mb-6">
                  Big consultancies send junior resources. They rush through data foundations. They deliver systems that technically work but don&apos;t actually solve the problem. Then they move on to the next engagement.
                </p>
                <p>
                  We built Cadena to be different. <strong className="text-[#004040]">Boutique expertise with enterprise capability.</strong> Senior practitioners who understand that SAM is a data problem first and a platform problem second. Partners who stick around until it actually works.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-[#004040]">17</div>
                <div className="text-gray-600">Years in Enterprise Software</div>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#004040]">Fortune 500</div>
                  <div className="text-sm text-gray-600">Client Base</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#004040]">100%</div>
                  <div className="text-sm text-gray-600">SAM Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Status */}
      <section className="py-16 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-500 mb-2">ServiceNow Partner</h3>
              <p className="text-gray-600">Certified consulting and implementation partner</p>
            </div>
            <div className="flex gap-6">
              <Image
                src="/images/servicenow-partner-consulting.jpg"
                alt="ServiceNow Consulting Partner"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <Image
                src="/images/servicenow-partner-platform.jpg"
                alt="ServiceNow Platform Partner"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four principles that guide every engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="flex gap-6 p-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#004040] rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-[#ccff00]">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004040] mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#004040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Certifications & Expertise
            </h2>
            <p className="text-xl text-gray-200">
              Our team holds the certifications that matter for SAM.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div 
                key={cert}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise in regulated and complex industries where SAM isn&apos;t optional.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Banking & Finance', 'Healthcare', 'Defense', 'Energy', 'Technology', 'Automotive', 'Insurance', 'Consumer Goods', 'Retail', 'Life Sciences', 'Telecommunications'].map((industry) => (
              <Link
                key={industry}
                href={`/industries/${industry.toLowerCase().replace(/\s+&?\s*/g, '-').replace('telecommunications', 'telco')}`}
                className="px-6 py-3 bg-gray-100 rounded-lg text-[#004040] font-medium hover:bg-[#004040] hover:text-white transition-colors"
              >
                {industry}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
            Let&apos;s talk about your SAM challenges.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            30-minute call. No sales pitch. Just a conversation about what you&apos;re trying to solve.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#004040] text-white text-lg font-bold rounded-lg hover:bg-[#003333] transition-all"
          >
            Book a Free Consultation
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
