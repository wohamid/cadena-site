import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guides, getGuideBySlug, categories } from '@/lib/guides';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  
  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: `${guide.title} | Cadena`,
    description: guide.description,
    keywords: guide.seoKeywords.join(', '),
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://cadena.co/resources/guides/${guide.slug}`,
      type: 'article',
      publishedTime: guide.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
    },
  };
}

// Simple markdown-like renderer
function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactElement[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-gray-600">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const [header, ...body] = tableRows;
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                {header.map((cell, i) => (
                  <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.filter(row => !row.every(cell => cell.match(/^[-:]+$/))).map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-sm text-gray-600 border-b">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  lines.forEach((line, index) => {
    // Code blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${index}`} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            <code>{codeContent.join('\n')}</code>
          </pre>
        );
        codeContent = [];
        inCodeBlock = false;
      } else {
        flushList();
        flushTable();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      return;
    }

    // Tables
    if (line.trim().startsWith('|')) {
      flushList();
      inTable = true;
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      tableRows.push(cells);
      return;
    } else if (inTable) {
      flushTable();
    }

    // Empty lines
    if (line.trim() === '') {
      flushList();
      return;
    }

    // Headings
    if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={`h2-${index}`} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      );
      return;
    }

    if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${index}`} className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          {line.replace('### ', '')}
        </h3>
      );
      return;
    }

    // List items
    if (line.trim().startsWith('- ') || line.trim().match(/^\d+\. /)) {
      inList = true;
      listItems.push(line.trim().replace(/^[-\d.]+\s*/, ''));
      return;
    }

    // Blockquotes
    if (line.trim().startsWith('> ')) {
      flushList();
      elements.push(
        <blockquote key={`quote-${index}`} className="border-l-4 border-[#004040] pl-4 italic text-gray-600 my-6">
          {line.replace('> ', '')}
        </blockquote>
      );
      return;
    }

    // Horizontal rule
    if (line.trim() === '---') {
      flushList();
      elements.push(<hr key={`hr-${index}`} className="my-8 border-gray-200" />);
      return;
    }

    // Bold text handling
    flushList();
    const processedLine = line
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-[#004040]">$1</code>');

    elements.push(
      <p 
        key={`p-${index}`} 
        className="text-gray-600 mb-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: processedLine }}
      />
    );
  });

  flushList();
  flushTable();

  return elements;
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Get related guides (same category, excluding current)
  const relatedGuides = guides
    .filter((g) => g.category === guide.category && g.slug !== guide.slug)
    .slice(0, 2);

  return (
    <main>
      <Header />

      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#004040]">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/resources/guides" className="text-gray-500 hover:text-[#004040]">
                  Guides
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium truncate">
                {guide.title}
              </li>
            </ol>
          </nav>

          {/* Category & Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${categories[guide.category].color}`}>
              {categories[guide.category].label}
            </span>
            <span className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {guide.readTime} read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {guide.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            {guide.description}
          </p>

          {/* Divider */}
          <hr className="mb-10 border-gray-200" />

          {/* Content */}
          <div className="prose-cadena">
            {renderContent(guide.content)}
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#004040] to-[#006666] rounded-xl text-white">
            <h3 className="text-xl font-bold mb-3">Need hands-on help?</h3>
            <p className="text-white/80 mb-6">
              Cadena specializes in SAM Pro implementations, Flexera migrations, and getting your license compliance right the first time.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-[#004040] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Assessment
            </Link>
          </div>
        </div>
      </article>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/resources/guides/${related.slug}`}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md hover:border-[#004040]/20 transition-all"
                >
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categories[related.category].color}`}>
                    {categories[related.category].label}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-2">{related.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Guides CTA */}
      <section className="py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/resources/guides"
            className="inline-flex items-center text-[#004040] font-medium hover:underline"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            View All Guides
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
