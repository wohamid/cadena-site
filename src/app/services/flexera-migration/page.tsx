import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Flexera to ServiceNow SAM Pro Migration | 90-Day Playbook | Cadena',
  description: 'Migrate from Flexera to ServiceNow SAM Pro in 90 days with zero data loss. Proven migration playbook refined across a dozen enterprise engagements. Stop paying for two platforms.',
  keywords: 'flexera to servicenow migration, flexera migration, servicenow sam pro, software asset management tools, flexera alternative',
  alternates: {
    canonical: 'https://cadena.co/services/flexera-migration',
  },
};

const phases = [
  {
    days: 'Days 1-30',
    title: 'Assessment & Mapping',
    items: [
      'Audit Flexera environment and data quality',
      'Map data structures to ServiceNow model',
      'Identify data quality issues requiring cleanup',
      'Build detailed migration plan with milestones',
    ],
  },
  {
    days: 'Days 31-60',
    title: 'Migration & Configuration',
    items: [
      'Migrate normalized data to SAM Pro',
      'Configure publisher packs for your vendors',
      'Set up integrations with existing systems',
      'Build workflows matching your processes',
      'Run parallel with Flexera for validation',
    ],
  },
  {
    days: 'Days 61-90',
    title: 'Validation & Cutover',
    items: [
      'Validate license positions match across systems',
      'Train your team on SAM Pro operations',
      'Execute controlled cutover',
      'Decommission Flexera',
      'One platform, one source of truth',
    ],
  },
];

export default function FlexeraMigration() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Link 
                href="/services"
                className="inline-flex items-center text-gray-300 hover:text-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Services
              </Link>
              <span className="px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full">
                Core SAM
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Flexera to ServiceNow SAM Pro in 90 days. Zero data loss.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              You&apos;ve made the decision to move to ServiceNow. Now you need a partner who&apos;s done this before-a dozen times. Our playbook is proven. Your timeline is 90 days.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all"
            >
              Plan My Flexera Migration
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Migrations Stall */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              Why Flexera Migrations Stall
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Lift-and-shift doesn&apos;t work. Flexera and ServiceNow have different data models. Normalization rules don&apos;t translate directly. Entitlement structures are fundamentally different.
              </p>
              <p className="mb-6">
                The common mistake? Migrating garbage into the new platform. Partners quote 6-9 months, then stretch to a year or longer. Meanwhile, you&apos;re paying for both platforms.
              </p>
              <p>
                Our approach: <strong className="text-[#004040]">clean the data during migration, not after.</strong> 90 days to a working SAM Pro. Then Flexera goes away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 90-Day Playbook */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              The 90-Day Playbook
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three phases. Clear milestones. Predictable timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div 
                key={phase.title}
                className="bg-white rounded-xl p-8 border border-gray-200 relative"
              >
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
                <div className="text-sm font-bold text-[#ccff00] bg-[#004040] inline-block px-3 py-1 rounded-full mb-4">
                  {phase.days}
                </div>
                <h3 className="text-xl font-bold text-[#004040] mb-4">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#004040] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to leave Flexera behind?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Book a consultation to walk through the 90-day playbook. We&apos;ll assess your Flexera environment and give you a realistic timeline.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all"
          >
            Plan My Flexera Migration
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
