import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ServiceNow Cloud Cost Management Implementation | FinOps & Cloud Optimization | Cadena',
  description: 'Implement ServiceNow Cloud Cost Management to gain visibility into AWS, Azure, and GCP spend. Cadena helps enterprises rightsize resources, eliminate waste, optimize reservations, manage BYOL compliance, and build mature FinOps programs - all from the ServiceNow platform.',
  keywords: 'finops consulting, finops services, cloud cost optimization, cloud spend management, cloud cost reduction, cloud license management, cloud financial management, azure cost management',
  alternates: {
    canonical: 'https://cadena.co/services/cloud-cost-management',
  },
};

const problems = [
  {
    title: 'No Unified Visibility',
    description: 'AWS Cost Explorer shows AWS. Azure Cost Management shows Azure. GCP billing shows GCP. Nobody has the multicloud picture. Add SaaS, IaaS, and PaaS together and the real number is always worse than anyone thought.',
  },
  {
    title: 'Oversized Resources',
    description: 'Workloads migrated from on-prem were sized for physical servers. VMs running at 10-15% utilization. Storage volumes provisioned "just in case." Database instances 3-5x larger than needed.',
  },
  {
    title: 'Always-On Waste',
    description: 'Dev/test environments running 24/7 when they\'re only used during business hours. Resources left running after projects end. No automated shutdown policies.',
  },
  {
    title: 'On-Demand Pricing',
    description: 'Teams defaulting to on-demand pricing when reserved instances or savings plans would cut costs 30-60%. No systematic process to identify and convert.',
  },
  {
    title: 'Tag Chaos',
    description: 'Inconsistent tagging across teams and providers. "Application," "App," "AppService," and "appl" all meaning the same thing. Without normalized tags, cost allocation and chargeback is impossible.',
  },
  {
    title: 'BYOL Compliance Risk',
    description: 'Bring-Your-Own-License to cloud creates audit exposure. SQL Server, Oracle, Windows Server - licensing rules differ by cloud provider, instance type, and tenancy model. Getting it wrong = massive true-up.',
  },
];

const crawlCapabilities = [
  {
    title: 'Cloud Discovery & Integration',
    description: 'Connect AWS, Azure, and GCP to ServiceNow using Cloud Discovery or Service Graph Connectors. Automated billing data ingestion gives you multicloud spend visibility from day one.',
  },
  {
    title: 'CMDB Health Check',
    description: 'CCM depends on a healthy CMDB. We validate asset and configuration data, ensure well-structured asset classes and relationships, and resolve data discrepancies before go-live.',
  },
  {
    title: 'Tag Normalization',
    description: 'Implement cost tag categories to normalize inconsistent tags across providers and teams. Map resources to business units, cost centers, applications, and environments for accurate cost allocation and chargeback.',
  },
  {
    title: 'CCM Workspace & Dashboards',
    description: 'Configure the Cloud Cost Management Workspace and Asset Management Executive Dashboard for real-time spend visibility across SaaS, IaaS, and PaaS.',
  },
  {
    title: 'Stakeholder & Process Setup',
    description: 'Define roles, responsibilities, RACI, success criteria, and training for your CCM program. Establish communication cadence with finance, infrastructure, and application teams.',
  },
];

const walkCapabilities = [
  {
    title: 'Rightsizing',
    description: 'Automated analysis of runtime utilization data. ServiceNow identifies overprovisioned VMs, storage, and databases, recommends right-sized alternatives, and generates change requests for resource owner approval.',
  },
  {
    title: 'Unused Resource Elimination',
    description: 'Discover machines running at near-zero utilization. Schedule power-off or termination jobs. Configure savings thresholds that trigger notifications.',
  },
  {
    title: 'Business Hours Scheduling',
    description: 'Identify resources that don\'t need to run 24/7. Define business hours policies, estimate savings, and automate start/stop schedules - with change request approval workflows built in.',
  },
  {
    title: 'Reservation & Savings Plans',
    description: 'Analyze on-demand spending patterns. Identify workloads that should convert to reserved instances, savings plans, or committed-use discounts. Quantify savings by resource and provider.',
  },
];

const runCapabilities = [
  {
    title: 'Cloud Budgeting & Forecasting',
    description: 'Define custom budget plans by provider, business unit, or cost center. Automated alerts when spend approaches thresholds. Weekly, monthly, and quarterly budget tracking with show-back and chargeback.',
  },
  {
    title: 'BYOL Compliance',
    description: 'Validate bring-your-own-license deployments across cloud providers. Ensure instance types, tenancy models, and mobility rights align with entitlements. Prevent audit exposure from Microsoft, Oracle, IBM.',
  },
  {
    title: 'Cloud Cost Simulator',
    description: 'Build business cases for cloud migration. Compare costs across AWS, Azure, and GCP with and without BYOL. Factor in software EOL, hardware EOL, and low-utilization triggers.',
  },
  {
    title: 'AI Service Spend Management',
    description: 'Track and govern consumption across Azure OpenAI, Bedrock, Vertex AI. Budget alerting, usage analysis, cost allocation for AI workloads.',
  },
  {
    title: 'Change Management Integration',
    description: 'Every optimization recommendation - rightsizing, power-off, reservation conversion - flows through ServiceNow Change Management. Tracked, approved, auditable.',
  },
];

const whyServiceNow = [
  {
    title: 'Single Platform',
    description: 'Cloud costs managed on the same platform as ITSM, ITAM, SAM, CMDB, and Change Management. No data silos. No swivel-chair between tools.',
  },
  {
    title: 'Workflow-Native',
    description: 'Optimization isn\'t just a recommendation - it\'s a tracked change request with approvals, rollback, and audit trail. CloudHealth and Apptio can\'t do that.',
  },
  {
    title: 'SAM + CCM Convergence',
    description: 'BYOL compliance, cloud software licensing, and infrastructure optimization in one place. Cadena\'s SAM expertise means your cloud license compliance is handled alongside your infrastructure optimization - not as an afterthought.',
  },
  {
    title: 'CFO-Ready',
    description: 'Executive dashboards showing total cloud spend (infrastructure + software + AI services), budget compliance, optimization savings delivered, and forecast. One source of truth for finance.',
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
            <div className="mb-6">
              <Link href="/services" className="inline-flex items-center text-gray-300 hover:text-white"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>All Services</Link>
            </div>
            <span className="inline-block px-3 py-1 bg-[#ccff00] text-[#004040] text-xs font-bold uppercase tracking-wider rounded-full mb-4">Cost & Governance</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your cloud bill is growing 30% a year.{' '}
              <span className="text-[#ccff00]">ServiceNow CCM makes it stop.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              Cloud spend is the fastest-growing line item on every enterprise P&L. CFOs demanding accountability. But most organizations lack a unified system to see what they&apos;re spending, who&apos;s spending it, and where the waste is - across AWS, Azure, and GCP simultaneously.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              ServiceNow Cloud Cost Management is a full FinOps platform built into the ServiceNow AI Platform - not just a dashboard. It discovers cloud resources, identifies optimization opportunities, and converts them into tracked change requests. Cadena implements it.
            </p>
            <p className="text-lg text-[#ccff00] font-medium">
              CFOs don&apos;t want another cloud cost dashboard. They want predictable spend, accountable owners, and automated governance. CCM delivers this on the same platform running ITSM, ITAM, and SAM.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              Why Cloud Spend Is Out of Control
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold text-[#004040] mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-red-50 border border-red-100 rounded-xl">
            <p className="text-lg text-red-800">
              <strong>AI consumption blind spot:</strong> Azure OpenAI, AWS Bedrock, GCP Vertex AI - consumption-based AI services growing 200-300% year-over-year with no governance.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              How Cadena Implements ServiceNow CCM
            </h2>
            <p className="text-xl text-gray-600">
              We implement ServiceNow Cloud Cost Management using a Crawl → Walk → Run methodology:
            </p>
          </div>

          {/* Crawl */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#004040] rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#ccff00]">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#004040]">Crawl: Visibility Into Cloud Spend</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-20">
              {crawlCapabilities.map((cap) => (
                <div key={cap.title} className="p-6 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold text-[#004040] mb-2">{cap.title}</h4>
                  <p className="text-gray-600 text-sm">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Walk */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#004040] rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#ccff00]">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#004040]">Walk: Cost Savings & Avoidance</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-20">
              {walkCapabilities.map((cap) => (
                <div key={cap.title} className="p-6 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold text-[#004040] mb-2">{cap.title}</h4>
                  <p className="text-gray-600 text-sm">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Run */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#004040] rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#ccff00]">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#004040]">Run: Operational Efficiency & Governance</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-20">
              {runCapabilities.map((cap) => (
                <div key={cap.title} className="p-6 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold text-[#004040] mb-2">{cap.title}</h4>
                  <p className="text-gray-600 text-sm">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ServiceNow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004040] mb-6">
              Why CCM on ServiceNow (Not Standalone FinOps Tools)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyServiceNow.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-[#ccff00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004040] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#004040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Book a Cloud Cost Assessment
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            We&apos;ll analyze your multicloud environment and identify your top optimization opportunities in 60 minutes.
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
            <Link href="/services/sam-pro-implementation" className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#004040] mb-2">SAM Pro Implementation</h4>
              <p className="text-gray-600 text-sm">Build the foundation for unified IT, OT, and cloud asset management.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
