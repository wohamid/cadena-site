'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002828]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to put your SAM on autopilot?
        </h2>

        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Whether you&apos;re starting fresh, rescuing a failed implementation, migrating from Flexera, or tackling AI sprawl-let&apos;s talk.
        </p>

        {/* Entry points */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-gray-300">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#ccff00]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            New Implementation
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#ccff00]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            SAM Rescue
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#ccff00]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Flexera Migration
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#ccff00]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            AI Governance
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#ccff00]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Autopilot Readiness
          </span>
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105"
        >
          Book a Free Consultation
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        <p className="mt-6 text-sm text-gray-400">
          30-minute call. No sales pitch. Just a conversation about your SAM challenges.
        </p>
      </div>
    </section>
  );
}
