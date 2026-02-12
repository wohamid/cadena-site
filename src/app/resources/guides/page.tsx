import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guides, categories } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'SAM Pro Guides | Cadena',
  description: 'Practical, bite-sized guides for ServiceNow Software Asset Management. Learn SAM Pro best practices from implementation experts.',
  keywords: 'SAM Pro guides, ServiceNow SAM tutorials, software asset management best practices, SAM implementation guide',
  openGraph: {
    title: 'SAM Pro Guides | Cadena',
    description: 'Practical, bite-sized guides for ServiceNow Software Asset Management.',
    url: 'https://cadena.co/resources/guides',
  },
};

export default function GuidesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#004040] to-[#006666]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SAM Pro Guides
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Practical, bite-sized answers to the questions SAM professionals actually ask. 
            No fluff-just what you need to know.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-[#004040] text-white rounded-full text-sm font-medium">
              All Guides
            </span>
            {Object.entries(categories).map(([key, { label }]) => (
              <span
                key={key}
                className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/guides/${guide.slug}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#004040]/20 transition-all"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categories[guide.category].color}`}>
                    {categories[guide.category].label}
                  </span>
                  
                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#004040] transition-colors">
                    {guide.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {guide.description}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {guide.readTime} read
                  </div>
                </div>
                
                {/* Read More Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-[#004040]/5 transition-colors">
                  <span className="text-[#004040] font-medium flex items-center">
                    Read Guide
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help With Your SAM Implementation?
          </h2>
          <p className="text-white/80 mb-8">
            These guides cover the basics. For complex implementations, Flexera migrations, 
            or hands-on support-let's talk.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-[#004040] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Your Free Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
