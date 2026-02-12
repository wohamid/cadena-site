import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Software Asset Management | Shadow AI Discovery & Governance | Cadena',
  description: 'Discover, classify, and govern AI tools your employees are adopting without IT\'s knowledge. Cadena helps enterprises manage Shadow AI, AI licensing complexity, and consumption-based models with ServiceNow SAM Pro.',
  keywords: 'shadow ai, ai software asset management, shadow ai governance, enterprise ai governance, ai software discovery, ai spend management, ai tool management',
  alternates: {
    canonical: 'https://cadena.co/services/ai-software-asset-management',
  },
};

const shadowAITypes = [
  {
    title: 'Standalone AI SaaS',
    description: 'ChatGPT Plus, Midjourney, Jasper, Perplexity—on corporate cards or personal accounts with company data. Discoverable through expense data and SaaS management integration.',
    examples: ['ChatGPT Plus/Team', 'Midjourney', 'Jasper', 'Perplexity Pro', 'Anthropic Claude'],
  },
  {
    title: 'Embedded AI Features',
    description: 'AI capabilities inside existing software: Copilot in M365, Salesforce Einstein, ServiceNow Now Assist, SAP Joule. Creates licensing uplift SAM teams don\'t track because the base product was already approved.',
    examples: ['Microsoft Copilot', 'Salesforce Einstein', 'ServiceNow Now Assist', 'SAP Joule', 'Zoom AI Companion'],
  },
  {
    title: 'API-Based AI Services',
    description: 'Dev teams consuming OpenAI API, Anthropic API, AWS Bedrock, Google Vertex AI through cloud accounts. Consumption billing makes spend invisible until the invoice arrives.',
    examples: ['OpenAI API', 'Anthropic API', 'AWS Bedrock', 'Google Vertex AI', 'Azure OpenAI'],
  },
  {
    title: 'Open-Source AI with Commercial Traps',
    description: 'Llama, Mistral, and other open-source models deployed without reviewing commercial restrictions. Usage thresholds (Llama 700M MAU), redistribution limits, enterprise tier requirements.',
    examples: ['Meta Llama', 'Mistral', 'Stable Diffusion', 'Hugging Face models'],
  },
];

export default function AISoftwareAssetManagement() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link 
              href="/services"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              AI-Era SAM
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your employees are buying AI tools you don&apos;t know about. We find them.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              $300B+ in AI infrastructure spending is cascading into every enterprise. The average large company has adopted 30-50 AI tools in the last two years—most without SAM visibility. Add AI-powered OT tools on factory floors, and the blind spots multiply.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#ccff00] text-[#004040] font-semibold rounded-lg hover:bg-white transition-all"
            >
              Book a Shadow AI Risk Assessment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* The 4 Types of Shadow AI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-4">
              The 4 Types of Shadow AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our framework for understanding AI tool adoption across the enterprise. Each type requires different discovery approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {shadowAITypes.map((type, index) => (
              <div 
                key={type.title}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#004040] rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-[#ccff00]">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#004040]">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example) => (
                    <span 
                      key={example}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-[#004040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              How We Bring Shadow AI Under SAM Governance
            </h2>
            <p className="text-xl text-gray-200">
              We extend ServiceNow SAM Pro with discovery patterns for AI tools, cloud cost management integration, and governance workflows purpose-built for AI software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#ccff00] mb-3">Full AI Software Visibility</h3>
              <p className="text-gray-300">Complete inventory of every AI tool: standalone SaaS, embedded features, API services, and open-source deployments. No more blind spots.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#ccff00] mb-3">Accurate License Positions</h3>
              <p className="text-gray-300">Entitlement tracking for AI licensing models: per-seat, consumption, embedded features, enterprise agreements. Know what you own vs. what you&apos;re using.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#ccff00] mb-3">Controlled Spend</h3>
              <p className="text-gray-300">Visibility and governance for consumption-based AI services. Budget alerts, approval workflows, renewal management.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#ccff00] mb-3">Audit Readiness</h3>
              <p className="text-gray-300">Be prepared for AI software audits. Copilot entitlements, cloud AI consumption, embedded AI features—all documented and defensible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
            How exposed is your organization to Shadow AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a 60-minute Shadow AI Risk Assessment. We&apos;ll identify AI tools in your environment, estimate your exposure, and map a governance plan.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#004040] text-white text-lg font-bold rounded-lg hover:bg-[#003333] transition-all"
          >
            Book a Shadow AI Risk Assessment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
