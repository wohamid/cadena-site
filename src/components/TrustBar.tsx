'use client';

export default function TrustBar() {
  const trustedBy = [
    'Enterprise Healthcare',
    'Global Financial Services',
    'Federal Government',
    'Fortune 500 Manufacturing',
    'Technology Leaders',
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">
          Trusted by enterprises across industries
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustedBy.map((industry, index) => (
            <div
              key={index}
              className="text-gray-400 font-medium text-sm md:text-base"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
