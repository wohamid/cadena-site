'use client';

export default function ProblemStatement() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004040] mb-6">
            Enterprise software got complicated.{' '}
            <span className="text-[#004040]/70">Then AI made it worse.</span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* AI Infrastructure Spending */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="w-12 h-12 bg-[#004040]/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#004040] mb-3">$300B+ in AI Infrastructure Spending</h3>
            <p className="text-gray-600 leading-relaxed">
              Enterprises are pouring billions into AI tools—and every dollar cascades into licensing complexity. Shadow AI, consumption billing, and embedded AI features are creating blind spots your SAM program wasn&apos;t designed to handle.
            </p>
          </div>

          {/* Application Vulnerabilities */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="w-12 h-12 bg-[#004040]/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#004040] mb-3">Unpatched Software With Known CVEs</h3>
            <p className="text-gray-600 leading-relaxed">
              Software with security vulnerabilities sits across your enterprise and OT environments—HMIs, SCADA systems, engineering stations. Security teams lack the license data to prioritize remediation. SAM and security are converging, whether you&apos;re ready or not.
            </p>
          </div>

          {/* Shadow IT */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="w-12 h-12 bg-[#004040]/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#004040] mb-3">Shadow IT & Flexera Limitations</h3>
            <p className="text-gray-600 leading-relaxed">
              Employees adopt tools faster than IT can track. Legacy SAM platforms like Flexera weren&apos;t built for cloud, SaaS, or AI. You&apos;re managing a modern software estate with yesterday&apos;s toolset.
            </p>
          </div>

          {/* Vendor Audits */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="w-12 h-12 bg-[#004040]/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#004040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#004040] mb-3">Vendor Audits & CMDB Data Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Microsoft, Oracle, SAP, and now AI vendors are getting aggressive. When the audit letter arrives, you discover your license positions don&apos;t match your CMDB. Scrambling becomes the strategy. It doesn&apos;t have to be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
