'use client';

const steps = [
  {
    number: '01',
    title: 'Assess',
    description: 'We analyze your current software estate, identify risks, and uncover optimization opportunities using our proven assessment framework.',
    details: ['Current state analysis', 'Risk identification', 'Savings opportunities', 'Roadmap development'],
  },
  {
    number: '02',
    title: 'Execute',
    description: 'We configure and deploy ServiceNow SAM with AI automation built in—from discovery to normalization to compliance.',
    details: ['SAM Pro implementation', 'AI agent configuration', 'Integration setup', 'Data migration'],
  },
  {
    number: '03',
    title: 'Monitor',
    description: 'Our AI agents continuously track license consumption, flag compliance risks, and surface optimization opportunities in real-time.',
    details: ['Real-time dashboards', 'Automated alerts', 'Compliance tracking', 'Usage analytics'],
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Turn insights into action with automated reclamation, rightsize recommendations, and continuous cost optimization.',
    details: ['License reclamation', 'Cost optimization', 'Vendor management', 'Continuous improvement'],
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00FF66] font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6">
            From Assessment to Autopilot in 12 Weeks
          </h2>
          <p className="text-xl text-gray-600">
            Our battle-tested methodology gets you to value fast—with AI automation that keeps delivering long after we leave.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#004040] via-[#00FF66] to-[#004040]" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="w-12 h-12 bg-[#004040] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 relative z-10">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
