'use client';

import Link from 'next/link';

const reasons = [
  {
    title: 'SAM Pro Is All We Do',
    description: 'We\'re not a generalist shop bolting on SAM as an afterthought. ServiceNow SAM Pro is our entire practice—IT, OT, and AI software. Deep specialization means better outcomes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: '17 Years Enterprise Software',
    description: 'Implementations across Fortune 500 enterprises. We understand that SAM connects to security, vulnerability management, and business risk—not just license counts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Fortune 500 Trust',
    description: 'We\'ve delivered SAM programs for global enterprises across banking, healthcare, defense, energy, and technology. Our clients include names you\'d recognize.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Building for Autopilot',
    description: 'Every implementation is designed for ServiceNow\'s AI features to work. We don\'t just deploy SAM Pro—we build the data foundation that enables autonomous operations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function WhyCadena() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004040] mb-4">
            Why Cadena
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Boutique expertise. Enterprise results. We do one thing exceptionally well.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#004040] rounded-xl flex items-center justify-center text-[#ccff00]">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#004040] mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* About link */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center text-[#004040] font-medium hover:text-[#006666]"
          >
            Learn more about our team and approach
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
