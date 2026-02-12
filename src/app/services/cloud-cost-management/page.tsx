import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cloud Cost Management & FinOps | Cloud License Optimization | Cadena',
  description: 'Bridge the gap between FinOps and SAM. Cadena helps enterprises manage cloud software licensing, right-size cloud commitments, and bring financial accountability to cloud spend through ServiceNow.',
  keywords: 'finops consulting, finops services, cloud cost optimization, cloud spend management, cloud cost reduction, cloud license management, cloud financial management, azure cost management',
  alternates: {
    canonical: 'https://cadena.co/services/cloud-cost-management',
  },
};

const capabilities = [
  {
    title: 'Cloud License Inventory',
    description: 'Map every software license consumed in cloud environments: BYOL, marketplace purchases, SaaS, PaaS licensing components, AI service subscriptions. Unified view in ServiceNow.',
  },
  {
    title: 'BYOL Compliance',
    description: 'Validate bring-your-own-license deployments across AWS, Azure, and GCP. Ensure instance types, tenancy models, and mobility rights align with entitlements. Prevent audit exposure.',
  },
  {
    title: 'Marketplace Governance',
    description: 'Centralize marketplace purchasing. Approval workflows, duplicate detection, spend tracking across all cloud marketplace accounts.',
  },
  {
    title: 'AI Cloud Spend Optimization',
    description: 'Track and optimize consumption across Azure OpenAI, Bedrock, Vertex AI, and other cloud AI services. Usage analysis, commitment right-sizing, budget alerting.',
  },
  {
    title: 'FinOps Integration',
    description: 'Connect ServiceNow SAM Pro data to existing FinOps tooling. Complete picture for CFO: infrastructure costs + software license costs = true cloud spend.',
  },
];

const problems = [
  {
    title: 'Infrastructure vs. Software',
    description: 'FinOps tools (CloudHealth, Apptio, native cloud tools) track compute, storage, and networking. They don\'t track software licensing: BYOL compliance, marketplace entitlements, or SaaS consumed through cloud.',
  },
  {
    title: 'BYOL Compliance Risk',
    description: 'Bring-Your-Own-License to cloud creates audit exposure. SQL Server, Oracle, Windows Server - licensing rules differ by cloud provider, instance type, and tenancy model.',
  },
  {
    title: 'Marketplace Sprawl',
    description: 'Teams buying software through AWS Marketplace, Azure Marketplace, GCP Marketplace with no central governance. Same tool purchased multiple times across accounts.',
  },
  {
    title: 'AI Consumption',
    description: 'Azure OpenAI, AWS Bedrock, GCP Vertex AI - consumption-based AI services growing 200-300% year-over-year with no license-level governance.',
  },
  {
    title: 'CFO Frustration',
    description: 'Cloud bills growing faster than revenue. Infrastructure optimization plateauing. Software licensing is the next lever, but nobody owns it.',
  },
];

export default function CloudCostManagementPage() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004040] via-[#003333] to-[#002020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your FinOps team optimizes infrastructure.{' '}
              <span className="text-[#ccff00]">Nobody&apos;s optimizing cloud software licenses.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              FinOps has matured for infrastructure (right-sizing VMs, reserved instances, spot pricing). But cloud SOFTWARE licensing - marketplace purchases, BYOL compliance, SaaS-on-cloud, AI service consumption - remains a blind spot.
            </p>
            <p className="text-lg text-gray-300">
              Cloud spend is the fastest-growing line item on every enterprise P&L. CFOs demanding accountability. FinOps provides infrastructure visibility. SAM provides license visibility. Together they tell the complete story.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              The FinOps-SAM Gap
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div 
                key={problem.title}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <h3 className="text-xl font-bold text-[#004040] mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              How Cadena Helps
            </h2>
          </div>

          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="flex gap-6 p-6 bg-white rounded-xl"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#004040] rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-[#ccff00]">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004040] mb-2">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-[#004040] rounded-xl">
            <p className="text-2xl text-white font-medium text-center">
              You&apos;re optimizing <span className="text-[#ccff00]">60% of cloud spend</span> (infrastructure). We make the other 40% (software licensing) visible and actionable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Book a Cloud License Assessment
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Identify BYOL compliance gaps, marketplace redundancies, and AI consumption optimization opportunities.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-10 py-5 bg-[#ccff00] text-[#004040] text-lg font-bold rounded-lg hover:bg-white transition-all"
          >
            Get Your Assessment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#004040] mb-8 text-center">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/saas-license-management" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#004040] mb-2">SaaS License Management</h4>
              <p className="text-gray-600 text-sm">Get control of SaaS sprawl and eliminate redundant subscriptions.</p>
            </Link>
            <Link href="/services/ai-license-optimization" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#004040] mb-2">AI License Optimization</h4>
              <p className="text-gray-600 text-sm">Right-size AI software spend across Copilot, cloud AI, and more.</p>
            </Link>
            <Link href="/services/software-rationalization" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#004040] mb-2">Software Rationalization</h4>
              <p className="text-gray-600 text-sm">Reclaim licenses during workforce transitions and reduce IT costs.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
