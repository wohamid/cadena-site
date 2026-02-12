import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Cadena | Boutique ServiceNow SAM Consultancy',
  description: 'Cadena is a boutique ServiceNow consulting firm specializing exclusively in Software Asset Management. Founded by a career practitioner with 17+ years in enterprise software and 13 years in ServiceNow.',
  keywords: 'servicenow consulting partner, it asset management consulting, servicenow partner, software asset management consulting, servicenow sam expert',
  alternates: {
    canonical: 'https://cadena.co/about',
  },
};

const differentiators = [
  {
    title: 'Exclusive SAM Focus',
    description: 'Our entire team, methodology, and IP is built around SAM. No ITSM, no CSM, no HR modules. Just SAM Pro, implemented by career practitioners.',
  },
  {
    title: 'Fortune 500 Track Record',
    description: 'Named clients, massive software estates, complex licensing scenarios, real stakes. We\'ve delivered SAM programs where failure wasn\'t an option.',
  },
  {
    title: 'Senior People Do the Work',
    description: 'No bait-and-switch staffing. 10+ year practitioners design AND implement. At Cadena, the people you meet are the people who do the work.',
  },
  {
    title: 'Forward-Looking',
    description: 'Shadow AI, consumption-based licensing, OT software compliance, application vulnerability management, autonomous IT. We\'re building for where SAM is going, not just where it is.',
  },
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
              SAM is all we do.{' '}
              <span className="text-[#ccff00]">That&apos;s why we&apos;re better at it.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              No ITSM, no CSM, no HR modules. Just SAM Pro, implemented by career practitioners who&apos;ve spent their careers in software asset management.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
                Built by a practitioner, not a sales team.
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  <strong className="text-[#004040]">17 years in enterprise software. 13 years in ServiceNow.</strong> Implementations across Fortune 500 enterprises spanning telecom, financial services, technology, and manufacturing. Deep expertise in CMDB, CSDM, and domain separation.
                </p>
                <p className="mb-6">
                  Why does Cadena exist? Because big consultancies send the A-team to sell and the B-team to deliver. At Cadena, senior people design AND implement. Small by design means excellent by design.
                </p>
                <p className="mb-6">
                  <strong className="text-[#004040]">Community leadership:</strong> Charlotte ServiceNow Developer meetup organizer, Mecklenburg County IT Advisory Committee member, IAITAM ACE speaker, regular presenter at ServiceNow events.
                </p>
                <p>
                  <strong className="text-[#004040]">Current focus:</strong> The SAM + AI intersection. Putting SAM on autopilot using ServiceNow&apos;s AI capabilities while building the reliable data foundations that make automation possible.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center mb-8">
                <div className="p-4">
                  <div className="text-4xl font-bold text-[#004040]">17</div>
                  <div className="text-sm text-gray-600">Years Enterprise Software</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-[#004040]">13</div>
                  <div className="text-sm text-gray-600">Years ServiceNow</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-[#004040]">F500</div>
                  <div className="text-sm text-gray-600">Client Base</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-[#004040]">100%</div>
                  <div className="text-sm text-gray-600">SAM Focus</div>
                </div>
              </div>
              
              {/* Partner badges */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-500 mb-4 text-center">ServiceNow Partner</p>
                <div className="flex justify-center gap-4">
                  <Image
                    src="/images/servicenow-partner-consulting.jpg"
                    alt="ServiceNow Consulting Partner"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/servicenow-partner-platform.jpg"
                    alt="ServiceNow Platform Partner"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              What Makes Cadena Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <div 
                key={item.title}
                className="flex gap-6 p-6 bg-white rounded-xl"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#004040] rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-[#ccff00]">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004040] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
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
      <section className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let&apos;s have a conversation.
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            No pressure. No sales pitch. Just a conversation about your SAM challenges and whether we might be able to help.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all"
          >
            Book a Conversation
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
