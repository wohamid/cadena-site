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

Pick a simpler publisher first-something with straightforward per-device or per-user licensing. This lets you:

- Learn how entitlements flow through the system
- Understand reconciliation without complex metrics
- Build muscle memory before tackling complexity

### Prioritize by Business Need

Once you've got the basics, prioritize based on:

1. **Upcoming audits** - If Oracle is knocking, Oracle comes first
2. **Contract renewals** - 6 months out is your sweet spot
3. **High spend** - Where optimization will move the needle
4. **Risk exposure** - Non-compliant software that could bite you

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
    description: 'E3 vs E5, subscriptions vs installs, G5 confusion-get your Microsoft 365 compliance position right the first time.',
    category: 'microsoft',
    readTime: '8 min',
    publishedAt: '2026-02-07',
    seoKeywords: ['Microsoft 365 SAM Pro', 'M365 license compliance', 'E3 E5 licensing ServiceNow', 'Office 365 reconciliation'],
    content: `
## The Microsoft 365 Challenge

Microsoft 365 licensing is where most SAM programs hit their first wall. Between E3, E5, G5 (government), subscription identifiers, and the endless suite components-it's easy to end up with a compliance position that's just... wrong.

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

1. **Manual upload** - Download reports from M365 admin, upload to ServiceNow
2. **Custom integration** - If you have API access at a premium tier
3. **Accept the gap** - Focus on what you can automate, handle these manually

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
    description: 'Your installs aren\'t being licensed. Here are the 5 most common reasons-and how to fix each one.',
    category: 'reconciliation',
    readTime: '6 min',
    publishedAt: '2026-02-07',
    seoKeywords: ['SAM Pro reconciliation issues', 'software installs not licensed', 'reconciliation troubleshooting', 'SAM compliance problems'],
    content: `
## The "Requires Action" Problem

You've set up your entitlements. Discovery is running. But reconciliation shows everything in "Requires Action" or unlicensed. What's going on?

### Reason 1: Missing VM-to-Host Relationships

**Symptom:** Server software shows "Missing relationship to physical host"

**Why It Matters:** Products like Windows Server and SQL Server are often licensed based on the physical host's CPUs-not the VM. Without the VM-to-host relationship, SAM Pro can't calculate compliance.

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

**Why It Matters:** If your Microsoft 365 integration creates a software model called "Microsoft 365 E5" but your entitlement creates "Office 365 E5"-they won't reconcile.

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

1. **Define a rule** - e.g., "No usage in 60 days"
2. **System identifies candidates** - Software meeting your criteria
3. **Potential savings calculated** - Based on unit cost
4. **Take action** - Reclaim licenses via workflow
5. **Track actual savings** - Prove ROI

### Starting Point: SaaS Subscriptions

The easiest wins are in SaaS. Set up these direct integrations first:

- **Microsoft 365** - Huge spend, lots of unused licenses
- **Adobe Creative Cloud** - Single apps often go unused
- **Zoom/Webex** - Departed employees, duplicate accounts

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
  {
    slug: 'sql-server-licensing-vm-host-relationships',
    title: 'SQL Server Licensing in SAM Pro: VM-to-Host Relationships Explained',
    description: 'SQL Server licensing depends on physical host CPUs, not VMs. Learn how to set up VM-to-host relationships for accurate compliance.',
    category: 'microsoft',
    readTime: '7 min',
    publishedAt: '2026-02-11',
    seoKeywords: ['SQL Server SAM Pro', 'VM host relationship ServiceNow', 'SQL Server licensing compliance', 'physical core licensing'],
    content: `
## The SQL Server Licensing Challenge

SQL Server is one of the most complex products to license correctly. Why? Because in most environments, it's licensed based on the **physical host's CPU cores**-not the virtual machine.

If SAM Pro doesn't know which physical host your VM runs on, it can't calculate compliance. You'll see the dreaded "Missing relationship to physical host" error.

### Why Physical Host Matters

Microsoft's SQL Server licensing (Enterprise and Standard) typically works like this:

| Edition | Licensing Model | What Gets Counted |
|---------|-----------------|-------------------|
| Enterprise | Per Core | All cores on physical host |
| Standard | Per Core or Server+CAL | Physical cores or server |
| Developer/Express | Free (restrictions apply) | N/A |

**The Catch:** If you're running SQL on VMware and using per-core licensing, you need to license ALL physical cores on the host-not just the vCPUs allocated to the VM.

### Setting Up VM-to-Host Relationships

For SAM Pro to calculate this correctly, it needs three things:

1. **Discovered VMs** - Your SQL servers as Configuration Items
2. **Discovered Hosts** - The physical ESXi/Hyper-V hosts
3. **Relationship records** - Connecting VMs to their hosts

#### Check Your Relationships

Navigate to the CI record for your SQL Server VM. Look for these relationship types:
- Virtualized by
- Instantiates
- Runs on::Runs

If these are missing, Discovery isn't capturing the virtualization layer.

### Working with Your ITOM Team

This is typically a Discovery configuration issue. Work with your ServiceNow Discovery/ITOM team to:

1. **Verify vCenter credentials** - Discovery needs read access to VMware
2. **Check discovery schedules** - Hosts and VMs should be in the same schedule
3. **Validate MID Server access** - Network access to vCenter API

### The Soft Licensing Option

If you can't get VM-to-host relationships working immediately, SQL Server offers a "soft licensing" alternative:

> License only the vCPUs allocated to the VM (minimum 4 cores), provided you have **License Mobility with Software Assurance** and meet Microsoft's virtualization requirements.

This is more complex to prove in an audit, but it's an option.

### Manual Relationship Entry

As a last resort, you can manually create relationships:

1. Navigate to the VM's CI record
2. Go to Related Items > CI Relationships
3. Add a "Virtualized by" relationship to the physical host

**Warning:** Manual relationships don't update automatically. If VMs move (vMotion), you'll have stale data.

### Reconciliation Considerations

Once relationships are in place:

1. **Re-run reconciliation** - SAM Pro needs to recalculate
2. **Check the metric** - Ensure your entitlement uses "Per Core" metric
3. **Verify core counts** - Physical host core count should appear in compliance

---

**Pro Tip:** Use the "Products with Installs" diagnostic view. It will tell you exactly why a SQL Server install isn't being licensed-including missing host relationships.
    `,
  },
  {
    slug: 'acc-software-metering-setup-guide',
    title: 'ACC Software Metering: Complete Setup Guide for Reclamation',
    description: 'Agent Client Collector (ACC) provides software usage data for reclamation. Here is how to set it up and start identifying unused licenses.',
    category: 'getting-started',
    readTime: '6 min',
    publishedAt: '2026-02-12',
    seoKeywords: ['ACC software metering', 'ServiceNow Agent Client Collector', 'software usage tracking', 'license reclamation setup'],
    content: `
## What is ACC Software Metering?

Agent Client Collector (ACC) is ServiceNow's endpoint agent that collects software usage data. Unlike simple discovery (which tells you what's installed), metering tells you **what's actually being used**.

This is the foundation for reclamation-you can't reclaim unused licenses if you don't know which ones are unused.

### ACC vs SCCM Metering

You have two main options for usage data:

| Source | Pros | Cons |
|--------|------|------|
| ACC | Native ServiceNow, real-time | Requires agent deployment |
| SCCM | Already deployed, mature | Integration complexity, data delays |

**Recommendation:** If you're starting fresh, use ACC. If you have SCCM with metering already enabled, use the integration.

### Setting Up ACC for Metering

#### Step 1: Verify ACC Deployment

ACC must be installed on endpoints. Check your deployment status:
- Navigate to **Agent Client Collector > Devices**
- Verify agents are checking in (last contact within 24 hours)

#### Step 2: Enable Software Metering Policy

1. Go to **Agent Client Collector > Policies**
2. Find or create a policy for your Windows devices
3. Enable the **Software Usage** capability
4. Deploy the policy to relevant device groups

#### Step 3: Configure Metering Rules

Not all software needs metering. Focus on high-value applications:

1. Navigate to **License Operations > Metering**
2. Create rules for specific software models
3. Define the executables to track

**Example:** For Adobe Acrobat Pro:
- Software Model: Adobe Acrobat Pro DC
- Executable: Acrobat.exe

### Understanding Usage Data Flow

Once metering is active, usage data flows through:

ACC Agent → MID Server → Software Usage Table → Reclamation Engine

**Timeline:**
- Usage data collection: Continuous
- Data aggregation: Daily
- Reclamation candidate generation: Based on your rule threshold

### Creating Your First Reclamation Rule

1. Navigate to **License Operations > Reclamation Rules**
2. Click "New"
3. Configure:
   - **Software Model:** Select the product
   - **Usage Threshold:** Days without activity (60-90 recommended)
   - **Metric:** Last activity date
4. Save and activate

### What Happens Next

Once the rule is active and usage data flows in:

1. **Reclamation candidates appear** in the workspace
2. **Potential savings** calculated automatically
3. **Workflow options** available (notify user, auto-reclaim, etc.)

### Common Setup Issues

**No usage data appearing:**
- Verify ACC agent is running on endpoints
- Check policy deployment status
- Confirm MID Server connectivity

**Wrong usage dates:**
- Ensure clocks are synchronized (NTP)
- Check agent version compatibility

**Missing software models:**
- Metering requires the software model to exist
- Verify discovery is creating install records

### Best Practices

1. **Start small** - Pick 5-10 high-value applications
2. **Pilot first** - Test on a subset of devices
3. **Set reasonable thresholds** - 60 days is aggressive; start at 90
4. **Communicate** - Tell users before reclaiming licenses

---

**Quick Win:** Adobe Creative Cloud single apps (Photoshop, Illustrator) are perfect first targets. High cost, often underused, easy to reclaim.
    `,
  },
  {
    slug: 'published-products-phased-implementation',
    title: 'Published Products: How to Do Phased SAM Implementation',
    description: 'Do not boil the ocean. Use SAM Pro Published Products feature to focus on what matters and gradually expand your program.',
    category: 'getting-started',
    readTime: '5 min',
    publishedAt: '2026-02-13',
    seoKeywords: ['SAM Pro published products', 'phased SAM implementation', 'software asset management rollout', 'SAM program maturity'],
    content: `
## The "Everything at Once" Mistake

We see it constantly: a company buys SAM Pro, imports all their entitlement data, sets up every integration, and... gets overwhelmed. 

The workspace shows hundreds of products in various compliance states. Leadership asks "are we compliant?" and you can't give a clear answer because you haven't actually validated any of the data.

### Enter Published Products

Published Products is SAM Pro's answer to phased implementation. It lets you:

1. **Focus the workspace** on only the products you're actively managing
2. **Hide the noise** from products you haven't validated yet
3. **Gradually expand** as your program matures

### How It Works

When you "publish" a product:
- It appears in the SAM Workspace
- It's included in compliance calculations
- It shows up in executive dashboards
- Cost data appears in IT Cost Management views

Unpublished products still exist-they're just filtered out of the main views.

### Enabling Published Products

1. Navigate to **SAM Administration > Settings**
2. Find the "Published Products" system property
3. Enable it

Once enabled, the workspace will initially show nothing (because nothing is published yet).

### Publishing Your First Products

1. Go to **License Operations > SAM Implementation**
2. You'll see a list of all products with compliance data
3. Select products you want to actively manage
4. Click "Publish"

### Recommended Publishing Order

Start with high-confidence, high-value products:

**Phase 1 (Week 1-2):**
- Microsoft 365 (direct integration = clean data)
- Adobe Creative Cloud
- Your top 5 SaaS apps by spend

**Phase 2 (Month 1):**
- Windows Server/Client
- SQL Server
- Other Microsoft on-prem

**Phase 3 (Month 2-3):**
- Oracle (if you have it)
- IBM
- Other complex publishers

**Phase 4 (Ongoing):**
- Remaining publishers
- Low-risk, low-spend software

### The Validation Step

Before publishing, validate each product:

- Entitlements match your contracts
- Discovery is capturing all installs
- Software model is correct
- License metric is accurate
- Compliance position makes sense

If something looks wrong, fix it before publishing. Don't publish garbage data.

### Communicating Progress

Published Products gives you a clear story for leadership:

> "We're actively managing compliance for 15 publishers representing 80% of our software spend. Our compliance position for those publishers is X. We're adding 5 more publishers next month."

That's much better than "we have 500 products in the system and most of them show issues."

### When to Unpublish

Sometimes you need to unpublish:
- Major contract change requiring re-validation
- Data quality issue discovered
- Product being retired

Unpublishing doesn't delete data-it just hides it from the workspace until you're ready.

---

**Pro Tip:** Create a "SAM Implementation Roadmap" document listing which products you'll publish each month. Share it with stakeholders so they know what to expect.
    `,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(category: Guide['category']): Guide[] {
  return guides.filter((guide) => guide.category === category);
}
