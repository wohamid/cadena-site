'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#004040] to-[#002828]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Put Your SAM on Autopilot?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join the enterprises that have saved millions through AI-powered Software Asset Management. Get your free assessment today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#004040] font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Get Free Assessment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="mailto:hello@cadena.co"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
