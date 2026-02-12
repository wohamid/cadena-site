'use client';

export default function Autopilot() {
  return (
    <section className="py-20 bg-[#004040] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#ccff00] text-[#004040] text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              The Future of SAM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              The future of SAM is autonomous.{' '}
              <span className="text-[#ccff00]">We help you get there.</span>
            </h2>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              ServiceNow&apos;s AI capabilities for SAM aren&apos;t coming—they&apos;re here. Now Assist delivers natural language queries across your software estate. AI Agents handle request fulfillment, automated reclamation rule generation, and one-click audit preparation. The tools exist. The question is whether your data foundation can support them.
            </p>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              And more is coming. AI-powered contract analysis. Asset Assist for intelligent decision support. AI Agent Studio for custom automation. AI Control Tower for enterprise-wide governance. ServiceNow&apos;s vision is <strong className="text-[#ccff00]">Autonomous IT</strong>—zero asset issues, zero audit surprises.
            </p>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              But here&apos;s what vendors don&apos;t tell you: <strong className="text-white">AI amplifies the mess.</strong> If your normalization rates are low, your entitlements are wrong, and your CMDB is stale, AI will automate bad decisions faster. The prerequisite for autopilot is a clean data foundation.
            </p>
          </div>

          {/* Maturity Curve */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">The Path to Autopilot</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center p-4">
                <div className="w-16 h-16 mx-auto bg-[#ccff00]/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-[#ccff00]">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Staff Augmentation</h4>
                <p className="text-sm text-gray-300">Manual processes, consultant-dependent</p>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-8 h-8 text-[#ccff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="flex-1 text-center p-4">
                <div className="w-16 h-16 mx-auto bg-[#ccff00]/40 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-[#ccff00]">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Controlled Autonomy</h4>
                <p className="text-sm text-gray-300">AI-assisted, human-validated decisions</p>
              </div>

              <div className="hidden md:block">
                <svg className="w-8 h-8 text-[#ccff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="flex-1 text-center p-4 bg-[#ccff00]/10 rounded-lg">
                <div className="w-16 h-16 mx-auto bg-[#ccff00] rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-[#004040]">3</span>
                </div>
                <h4 className="font-semibold text-[#ccff00] mb-2">Autopilot</h4>
                <p className="text-sm text-gray-300">Zero asset issues, zero audit surprises</p>
              </div>
            </div>
          </div>

          {/* Key message */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-200 italic">
              Every Cadena implementation is designed for autopilot—building the data foundation that makes ServiceNow&apos;s AI features actually work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
