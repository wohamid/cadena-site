'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-[#00FF66] font-semibold text-sm uppercase tracking-wider">About Cadena</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Your SAM Experts. Your AI Advantage.
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Cadena is a specialized ServiceNow partner focused exclusively on Software Asset Management. We&apos;re not a generalist systems integrator trying to be everything to everyone—we&apos;re SAM experts who live and breathe license optimization.
              </p>
              <p>
                What sets us apart? We&apos;re AI-first. While others are still doing SAM the old way—spreadsheets, manual reconciliation, quarterly audits—we implement ServiceNow&apos;s AI agents to put your SAM program on autopilot.
              </p>
              <p>
                The result: You get enterprise-grade expertise with boutique attention, and a SAM program that gets smarter every day without constant manual intervention.
              </p>
            </div>

            {/* Why Cadena */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#004040]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">SAM Specialists</h4>
                  <p className="text-sm text-gray-600">100% focused on SAM, not a side service</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#004040]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI-First Approach</h4>
                  <p className="text-sm text-gray-600">Automation built in from day one</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#004040]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Time-to-Value</h4>
                  <p className="text-sm text-gray-600">ROI in 12 weeks, not 12 months</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#004040]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Boutique Attention</h4>
                  <p className="text-sm text-gray-600">Big firm expertise, personal service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Partner badges and certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Certified ServiceNow Partner</h3>
            
            {/* Partner badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <Image
                src="/images/servicenow-partner-consulting.jpg"
                alt="ServiceNow Consulting Partner"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <Image
                src="/images/servicenow-partner-platform.jpg"
                alt="ServiceNow Platform Partner"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>

            {/* Certifications */}
            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Our Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'SAM Pro Implementation',
                  'ITAM',
                  'CMDB',
                  'Discovery',
                  'AI/ML',
                  'License Compliance',
                  'Cloud Cost Management',
                  'SaaS Management',
                ].map((cert, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#004040]/10 text-[#004040] text-sm rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
