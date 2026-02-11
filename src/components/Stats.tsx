'use client';

const stats = [
  {
    value: '50+',
    label: 'Enterprise Implementations',
    description: 'Successfully delivered across industries',
  },
  {
    value: '40%',
    label: 'Average Cost Reduction',
    description: 'In software licensing spend',
  },
  {
    value: '$100M+',
    label: 'Client Savings',
    description: 'Recovered through optimization',
  },
  {
    value: '12 Weeks',
    label: 'Time to ROI',
    description: 'Average implementation timeline',
  },
];

export default function Stats() {
  return (
    <section id="results" className="py-24 bg-[#004040]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ccff00] font-semibold text-sm uppercase tracking-wider">Proven Results</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-300">
            Our track record of success across global enterprise implementations demonstrates the value we deliver.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#ccff00] mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-400">License Visibility Achieved</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">98%</div>
            <div className="text-gray-400">Compliance Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">75%</div>
            <div className="text-gray-400">Manual Process Reduction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
