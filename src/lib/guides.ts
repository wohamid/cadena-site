// Guide data - add new guides here
export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: 'getting-started' | 'microsoft' | 'reconciliation' | 'saas' | 'optimization';
  readTime: string;
  publishedAt: string;
  content: string;
  seoKeywords: string[];
}

export const categories = {
  'getting-started': { label: 'Getting Started', color: 'bg-blue-100 text-blue-800' },
  'microsoft': { label: 'Microsoft', color: 'bg-purple-100 text-purple-800' },
  'reconciliation': { label: 'Reconciliation', color: 'bg-green-100 text-green-800' },
  'saas': { label: 'SaaS', color: 'bg-orange-100 text-orange-800' },
  'optimization': { label: 'Optimization', color: 'bg-teal-100 text-teal-800' },
};

export const guides: Guide[] = [
  {
    slug: 'getting-started-with-sam-pro',
    title: 'Getting Started with SAM Pro: A Practical Guide',
    description: 'New to ServiceNow SAM Pro? Learn where to start, what to prioritize, and how to avoid the common mistakes that derail implementations.',
    category: 'getting-started',
    readTime: '5 min',
    publishedAt: '2026-02-07',
    seoKeywords: ['SAM Pro getting started', 'ServiceNow SAM implementation', 'software asset management basics', 'SAM Pro best practices'],
    content: `
## Don't Boil the Ocean

The most common mistake we see? Teams trying to tackle Microsoft, Oracle, and SAP licensing all at once. These are complex publishers with intricate licensing models. Starting here is a recipe for frustration.

### Start Small, Build Confidence

Pick a simpler publisher first—something with straightforward per-device or per-user licensing. This lets you:

- Learn how entitlements flow through the system
- Understand reconciliation without complex metrics
- Build muscle memory before tackling complexity

### Prioritize by Business Need

Once you've got the basics, prioritize based on:

1. **Upcoming audits** — If Oracle is knocking, Oracle comes first
2. **Contract renewals** — 6 months out is your sweet spot
3. **High spend** — Where optimization will move the needle
4. **Risk exposure** — Non-compliant software that could bite you

### Use Publisher Part Numbers

This is non-negotiable. When creating entitlements, always use Publisher Part Numbers (PPNs). They:

- Auto-populate software model details
- Set up downgrade rights correctly
- Configure suite components automatically

If a PPN isn't in the content library, submit a support case. Don't manually configure what should be automated.

### Quick Wins First

Before diving into compliance, set up a few SaaS direct integrations. Microsoft 365 and Adobe are great starting points. You'll see ROI quickly through:

- Identifying unused subscriptions
- Reclaiming licenses from departed employees
- Building credibility with stakeholders

---

**Next Step:** Once you're comfortable with the basics, move to our Microsoft 365 Licensing Guide for the most common (and complex) use case.
    `,
  },
  {
    slug: 'microsoft-365-licensing-in-sam-pro',
    title: 'Microsoft 365 Licensing in SAM Pro: Complete Guide',
    description: 'E3 vs E5, subscriptions vs installs, G5 confusion—get your Microsoft 365 compliance position right the first time.',
    category: 'microsoft',
    readTime: '8 min',
    publishedAt: '2026-02-07',
    seoKeywords: ['Microsoft 365 SAM Pro', 'M365 license compliance', 'E3 E5 licensing ServiceNow', 'Office 365 reconciliation'],
    content: `
## The Microsoft 365 Challenge

Microsoft 365 licensing is where most SAM programs hit their first wall. Between E3, E5, G5 (government), subscription identifiers, and the endless suite components—it's easy to end up with a compliance position that's just... wrong.

### Set Up the Direct Integration First

Before creating any entitlements, configure the Microsoft 365 direct integration. This is critical because:

- The integration creates software models automatically
- Subscription identifiers map correctly to products
- You avoid the "two software models" problem

**The Two Software Models Problem:** If you create an entitlement first, it creates a software model. Then the integration creates another software model. Now your subscriptions and entitlements don't match. Always let the integration lead.

### E3 vs E5 vs G5

| License | Use Case | Key Difference |
|---------|----------|----------------|
| E3 | Standard enterprise | Core productivity + security |
| E5 | Premium enterprise | Advanced security, analytics, voice |
| G5 | Government | Same as E5, government cloud |

**Common Mistake:** Using E5 part numbers when you purchased G5. The tenant reports G5, but your entitlement says E5. Result: over-compliant on one, under on the other.

### Handling Visio and Project

These are tricky because usage data often doesn't come through the standard API. Options:

1. **Manual upload** — Download reports from M365 admin, upload to ServiceNow
2. **Custom integration** — If you have API access at a premium tier
3. **Accept the gap** — Focus on what you can automate, handle these manually

### Suite Inference

Microsoft suites (like M365 E5) contain multiple components. The inference percentage determines how many components need to be present for the suite to "claim" an install.

**Default:** 75%

**Recommendation:** Review this for your environment. If you have partial deployments, you may need to adjust or use the component count instead of percentage (available in Yokohama+).

---

**Pro Tip:** Check your subscription identifiers against your entitlement software models monthly. Drift happens, especially after renewals.
    `,
  },
  {
    slug: 'sso-vs-direct-saas-integration',
    title: 'SSO vs Direct SaaS Integration: When to Use Each',
    description: 'Confused about whether to use Okta/Entra SSO integration or set up direct SaaS connections? Here\'s the decision framework.',
    category: 'saas',
    readTime: '4 min',
    publishedAt: '2026-02-07',
    seoKeywords: ['SAM Pro SaaS integration', 'Okta SSO ServiceNow', 'direct SaaS integration', 'SaaS license management'],
    content: `
## Two Paths to SaaS Visibility

ServiceNow SAM Pro offers two main approaches for SaaS visibility:

1. **SSO Integration** (Okta, Microsoft Entra ID)
2. **Direct SaaS Integrations** (Adobe, Salesforce, Zoom, etc.)

They're not interchangeable. Here's when to use each.

### SSO Integration: Mile Wide, Inch Deep

**Use When:**
- You need visibility across your entire SaaS estate
- You don't know which apps to prioritize yet
- You want quick, broad coverage

**What You Get:**
- Who is logging into which apps
- Last login dates
- App usage patterns across the organization

**What You Don't Get:**
- License-level detail
- Feature usage within apps
- Subscription tier information

### Direct Integration: Inch Wide, Mile Deep

**Use When:**
- You've identified high-priority publishers
- You need license compliance, not just usage
- You want automated reclamation

**What You Get:**
- Exact subscription counts
- License tier details
- Usage metrics (where the vendor provides them)
- Automated reclamation workflows

**What You Don't Get:**
- Visibility into apps without integrations

### The Decision Framework

\`\`\`
Start with SSO
    ↓
Identify top 5-10 SaaS apps by:
  - Spend
  - Risk
  - User complaints ("we need more licenses!")
    ↓
Check: Does SAM Pro have a direct integration?
    ↓
YES → Set up direct integration, disable SSO for that app
NO  → Keep using SSO, consider custom integration
\`\`\`

### Critical Rule: Never Use Both

Don't configure SSO AND direct integration for the same app. You'll get duplicate records and confusing compliance data.

---

**Quick Start:** Set up Microsoft Entra ID SSO first. Within a week, you'll know exactly which SaaS apps need deeper integration.
    `,
  },
  {
    slug: 'why-reconciliation-shows-zero-compliance',
    title: 'Why Your Reconciliation Shows Zero Compliance',
    description: 'Your installs aren\'t being licensed. Here are the 5 most common reasons—and how to fix each one.',
    category: 'reconciliation',
    readTime: '6 min',
    publishedAt: '2026-02-07',
    seoKeywords: ['SAM Pro reconciliation issues', 'software installs not licensed', 'reconciliation troubleshooting', 'SAM compliance problems'],
    content: `
## The "Requires Action" Problem

You've set up your entitlements. Discovery is running. But reconciliation shows everything in "Requires Action" or unlicensed. What's going on?

### Reason 1: Missing VM-to-Host Relationships

**Symptom:** Server software shows "Missing relationship to physical host"

**Why It Matters:** Products like Windows Server and SQL Server are often licensed based on the physical host's CPUs—not the VM. Without the VM-to-host relationship, SAM Pro can't calculate compliance.

**Fix:** 
- Ensure discovery is capturing VMware/Hyper-V relationships
- Check for: \`Instantiates\`, \`Virtualized by\`, \`Contains\` relationships
- Work with your ITOM team to validate vCenter discovery

### Reason 2: Inactive Installs

**Symptom:** Installs exist but aren't being counted

**Why It Matters:** When multiple discovery sources bring in the same install, only one is marked "active" to avoid double-counting. The deduplication job handles this, but if it's not running...

**Fix:**
- Verify \`SAM - Deduplicate Software Installs\` job is enabled and running
- Check install records: \`Active Install = true\` and \`Deduplication Process = true\`

### Reason 3: Software Model Mismatch

**Symptom:** Subscriptions don't match entitlements

**Why It Matters:** If your Microsoft 365 integration creates a software model called "Microsoft 365 E5" but your entitlement creates "Office 365 E5"—they won't reconcile.

**Fix:**
- Always set up integrations before creating entitlements
- Use the subscription identifier from the integration as your source of truth

### Reason 4: License Under Management = False

**Symptom:** Products exist but aren't in reconciliation results

**Why It Matters:** This checkbox on the software model controls whether it's included in compliance calculations.

**Fix:**
- Navigate to the software model
- Ensure \`License Under Management\` is checked
- Re-run reconciliation

### Reason 5: Missing or Wrong Metric Configuration

**Symptom:** User-based products showing device counts (or vice versa)

**Why It Matters:** If your entitlement says "per user" but you don't have user allocations set up, reconciliation can't match installs to licenses.

**Fix:**
- Verify license metric on entitlement matches your contract
- For user-based: ensure allocations are populated
- For device-based: ensure installs are on inventoried CIs

---

**Diagnostic Tool:** Use the "Products with Installs" view (Yokohama+) under License Operations. It shows exactly why installs are or aren't being licensed.
    `,
  },
  {
    slug: 'reclamation-rules-that-drive-roi',
    title: 'Reclamation Rules That Actually Drive ROI',
    description: 'Stop paying for unused software. Set up reclamation rules that identify savings and prove value to leadership.',
    category: 'optimization',
    readTime: '5 min',
    publishedAt: '2026-02-07',
    seoKeywords: ['SAM reclamation rules', 'software license optimization', 'SAM ROI', 'unused software reclamation'],
    content: `
## The Fastest Path to SAM ROI

Want to prove SAM value to leadership? Reclamation is your answer. Nothing gets attention like "we recovered $50,000 in unused licenses last quarter."

### How Reclamation Works

1. **Define a rule** — e.g., "No usage in 60 days"
2. **System identifies candidates** — Software meeting your criteria
3. **Potential savings calculated** — Based on unit cost
4. **Take action** — Reclaim licenses via workflow
5. **Track actual savings** — Prove ROI

### Starting Point: SaaS Subscriptions

The easiest wins are in SaaS. Set up these direct integrations first:

- **Microsoft 365** — Huge spend, lots of unused licenses
- **Adobe Creative Cloud** — Single apps often go unused
- **Zoom/Webex** — Departed employees, duplicate accounts

These integrations bring in "Last Activity" dates automatically. No metering setup required.

### The SCCM Metering Reality

For on-prem software, you need usage data from SCCM. But here's the catch:

> "SCCM admins notoriously don't want to turn on metering for every application because of database size."

**Recommendation:** Start with 5-10 high-value applications. Work with your SCCM team to enable metering for those specific executables. Get wins, then expand.

### Reclamation Rule Best Practices

| Setting | Recommendation | Why |
|---------|----------------|-----|
| Usage threshold | 60-90 days | Balances accuracy with actionability |
| Focus on | Last activity date | More reliable than total usage time |
| Start with | SaaS apps | Easiest data, fastest ROI |
| Batch size | 5-10 apps | Manageable, provable wins |

### Calculating Potential Savings

Before setting up rules, estimate savings:

\`\`\`
Unused License % × Total Licenses × Unit Cost = Potential Savings
\`\`\`

Example:
- 1,000 M365 E5 licenses at $57/month
- 15% showing no activity in 90 days
- Potential: 150 × $57 × 12 = **$102,600/year**

### From Potential to Actual

Potential savings don't impress executives. Actual savings do.

Build the workflow:
1. Reclamation candidate identified
2. Notification sent to user/manager
3. Grace period (7-14 days)
4. License reclaimed
5. Tracked as "Actual Savings"

---

**Quick Win:** Run a report on M365 subscriptions with no activity in 90 days. Share the potential savings number with your leadership. That's your SAM business case.
    `,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(category: Guide['category']): Guide[] {
  return guides.filter((guide) => guide.category === category);
}
