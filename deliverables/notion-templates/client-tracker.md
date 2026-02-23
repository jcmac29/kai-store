# Freelance Client Tracker - Notion Template

## Overview

This comprehensive client management system helps freelancers track clients, manage projects, send invoices, log communications, and analyze revenue. Built specifically for independent professionals, this template brings enterprise-level CRM functionality to your Notion workspace.

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Clients Database](#clients-database)
3. [Projects Database](#projects-database)
4. [Invoices Database](#invoices-database)
5. [Communication Log](#communication-log)
6. [Revenue Analytics](#revenue-analytics)
7. [Dashboard Setup](#dashboard-setup)
8. [Customization Tips](#customization-tips)

---

## System Architecture

### Database Structure

```
Freelance Client Tracker
├── Clients (Master client database)
├── Projects (All client projects)
├── Invoices (Billing and payments)
├── Communications (All client interactions)
├── Time Logs (Optional: time tracking)
├── Proposals (Optional: quotes/proposals)
└── Dashboard (Main overview)
```

### Relationships Map

```
Clients ──┬── Projects ──── Invoices
          │        │
          │        └── Time Logs
          │
          └── Communications
```

### Main Dashboard Overview

Create a main page called **"Freelance HQ"** with:

```markdown
# 🏢 Freelance HQ

## Quick Stats
[Revenue this month] [Active Projects] [Pending Invoices]

## Today's Focus
[Linked: Projects due soon + Communications to follow up]

## Client Pipeline
[Board view of clients by status]

## Recent Activity
[Communications log - last 7 days]
```

---

## Clients Database

### Database Setup

Create a new **Database - Full page** called **"Clients"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Client Name | Title | Company or individual name |
| Status | Select | Lead, Prospect, Active, On Hold, Past Client, Lost |
| Client Type | Select | Individual, Small Business, Agency, Enterprise, Non-Profit |
| Contact Name | Text | Primary contact person |
| Email | Email | Primary contact email |
| Phone | Phone | Contact phone number |
| Website | URL | Client's website |
| Industry | Select | Tech, Marketing, Healthcare, Finance, E-commerce, Creative, Other |
| Source | Select | Referral, Website, LinkedIn, Cold Outreach, Upwork, Social Media, Other |
| Referred By | Text | Who referred them |
| Contract Value | Number | Total contracted amount |
| Hourly Rate | Number | If applicable |
| Projects | Relation | Link to Projects |
| Invoices | Relation | Link to Invoices |
| Communications | Relation | Link to Communications |
| Total Revenue | Rollup | Sum of paid invoices |
| Outstanding Balance | Rollup | Sum of unpaid invoices |
| Project Count | Rollup | Count of projects |
| First Contact | Date | When relationship started |
| Last Contact | Date | Most recent interaction |
| Days Since Contact | Formula | See formula below |
| Health Score | Formula | Client health indicator |
| Notes | Text | Important client notes |
| Contract/NDA | Files | Upload agreements |
| Tags | Multi-select | Custom tags |

### Client Formulas

**Days Since Contact:**
```
dateBetween(now(), prop("Last Contact"), "days")
```

**Health Score:**
```
if(prop("Days Since Contact") <= 7, "🟢 Healthy",
if(prop("Days Since Contact") <= 30, "🟡 Follow Up",
if(prop("Days Since Contact") <= 90, "🟠 At Risk",
"🔴 Inactive")))
```

**Client Lifetime Value:**
```
prop("Total Revenue")
```

### Status Definitions

| Status | Description | Actions Needed |
|--------|-------------|----------------|
| **Lead** | Initial inquiry, not yet qualified | Qualify, initial meeting |
| **Prospect** | Qualified, proposal sent | Follow up, negotiate |
| **Active** | Ongoing work relationship | Deliver great work |
| **On Hold** | Temporarily paused | Keep warm, check in quarterly |
| **Past Client** | Completed work, no current projects | Nurture for future work |
| **Lost** | Did not convert or ended poorly | Learn and move on |

### Client Page Template

```markdown
# 🏢 [Client Name]

---

## 📋 Quick Info

| Field | Value |
|-------|-------|
| Status | [Status] |
| Primary Contact | [Name] |
| Email | [Email] |
| Phone | [Phone] |
| Industry | [Industry] |
| Hourly Rate | $[Rate] |

---

## 💰 Financial Overview

| Metric | Amount |
|--------|--------|
| Total Revenue | $[Rollup] |
| Outstanding | $[Rollup] |
| Average Project | $[Formula] |

---

## 🎯 Active Projects

[Linked database: Projects filtered to this client, Status = Active]

---

## 💵 Invoices

[Linked database: Invoices filtered to this client]

---

## 💬 Communication History

[Linked database: Communications filtered to this client, sorted by date descending]

---

## 📝 Client Notes

### Preferences & Requirements
-

### Communication Style
-

### Important Dates
-

### Red Flags / Cautions
-

---

## 📎 Files & Documents

### Contracts
[Files property]

### Project Assets
[Links to shared folders]

---

## 📊 Relationship Timeline

| Date | Event | Notes |
|------|-------|-------|
| [First Contact] | Initial inquiry | |
| | | |
```

### Client Views

**1. Pipeline Board**
- View: Board
- Group by: Status
- Properties: Contact Name, Last Contact, Health Score
- Columns: Lead → Prospect → Active → Past Client

**2. All Clients Table**
- View: Table
- Sort by: Total Revenue (Descending)
- Show: Name, Status, Revenue, Outstanding, Last Contact

**3. Follow-Up Needed**
- Filter: Health Score is "🟡 Follow Up" or "🟠 At Risk"
- Sort by: Days Since Contact (Descending)

**4. Top Clients by Revenue**
- Filter: Status is "Active" or "Past Client"
- Sort by: Total Revenue (Descending)
- Limit: Top 10

**5. Client Map by Industry**
- Group by: Industry
- Useful for niche analysis

---

## Projects Database

### Database Setup

Create a new **Database - Full page** called **"Projects"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Project Name | Title | Descriptive project name |
| Client | Relation | Link to Clients |
| Status | Select | Inquiry, Proposal, Active, In Review, Completed, Cancelled, On Hold |
| Project Type | Select | Website, Design, Writing, Consulting, Development, Marketing, Other |
| Start Date | Date | Project kickoff |
| Due Date | Date | Deadline |
| Completed Date | Date | Actual completion |
| Priority | Select | Urgent, High, Normal, Low |
| Pricing Model | Select | Fixed Price, Hourly, Retainer, Value-Based |
| Budget | Number | Quoted/agreed amount |
| Actual Cost | Number | Final amount (if different) |
| Hours Estimated | Number | For hourly projects |
| Hours Actual | Rollup | From Time Logs |
| Profit Margin | Formula | See formula |
| Invoices | Relation | Link to Invoices |
| Scope | Text | Project scope description |
| Deliverables | Text | What will be delivered |
| Milestones | Text | Key project milestones |
| Current Phase | Select | Discovery, Design, Development, Review, Launch |
| Progress | Number | Percentage (0-100) |
| Time Logs | Relation | Link to Time Logs |
| Project Folder | URL | Link to files |
| Notes | Text | Project notes |

### Project Formulas

**Days Until Due:**
```
dateBetween(prop("Due Date"), now(), "days")
```

**Days Overdue:**
```
if(prop("Due Date") < now() and prop("Status") != "Completed", dateBetween(now(), prop("Due Date"), "days"), 0)
```

**Profit Margin:**
```
if(prop("Pricing Model") == "Hourly",
  prop("Hours Actual") * [YourHourlyRate] - prop("Budget"),
  prop("Budget") - prop("Actual Cost"))
```

**On Time Status:**
```
if(prop("Status") == "Completed",
  if(prop("Completed Date") <= prop("Due Date"), "✅ On Time", "⚠️ Late"),
  if(prop("Due Date") >= now(), "🟢 On Track", "🔴 Overdue"))
```

### Project Page Template

```markdown
# 📁 [Project Name]

**Client:** [Client Relation]
**Status:** [Status]
**Due Date:** [Date]

---

## 📋 Project Overview

### Scope
[What this project includes]

### Deliverables
- [ ] Deliverable 1
- [ ] Deliverable 2
- [ ] Deliverable 3

### Success Criteria
[How we'll know the project is complete]

---

## 📊 Project Status

| Metric | Value |
|--------|-------|
| Progress | [X]% |
| Current Phase | [Phase] |
| Days Remaining | [Formula] |
| Budget | $[Amount] |

---

## 📅 Milestones

| Milestone | Due Date | Status |
|-----------|----------|--------|
| Discovery Complete | [Date] | ✅ |
| First Draft | [Date] | 🔄 |
| Client Review | [Date] | ⬜ |
| Final Delivery | [Date] | ⬜ |

---

## ✅ Task List

### Phase 1: Discovery
- [ ] Initial meeting
- [ ] Requirements gathering
- [ ] Research

### Phase 2: Execution
- [ ] Task 1
- [ ] Task 2

### Phase 3: Delivery
- [ ] Final review
- [ ] Client approval
- [ ] Handoff

---

## ⏱️ Time Log

[Linked database: Time Logs for this project]

---

## 💬 Project Communications

[Linked: Communications filtered to this project]

---

## 📝 Meeting Notes

### [Date] - [Meeting Topic]
**Attendees:**
**Discussion:**
**Action Items:**

---

## 📎 Files & Links

- Project Folder: [Link]
- Design Files: [Link]
- Client Assets: [Link]

---

## 💵 Billing

[Linked: Invoices for this project]

---

## 🔙 Project Retrospective (Complete when done)

**What went well:**

**What to improve:**

**Client feedback:**

**Template opportunity?** (Could this become a service offering?)
```

### Project Views

**1. Active Projects Board**
- Group by: Status
- Filter: Status is not "Completed" and not "Cancelled"
- Properties: Client, Due Date, Priority, Progress

**2. Timeline View**
- Show by: Due Date
- Group by: Client
- Visualize project schedule

**3. Projects by Client**
- Group by: Client relation
- See workload per client

**4. Deadline Calendar**
- Calendar view by Due Date
- Color by Priority

**5. Completed Projects Archive**
- Filter: Status is "Completed"
- Sort by: Completed Date (Descending)

---

## Invoices Database

### Database Setup

Create a new **Database - Full page** called **"Invoices"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Invoice Number | Title | Format: INV-[YEAR]-[NUMBER] |
| Client | Relation | Link to Clients |
| Project | Relation | Link to Projects |
| Status | Select | Draft, Sent, Viewed, Paid, Overdue, Cancelled |
| Issue Date | Date | When invoice was sent |
| Due Date | Date | Payment deadline |
| Paid Date | Date | When payment received |
| Amount | Number | Invoice total (before tax) |
| Tax Amount | Number | Tax if applicable |
| Total Amount | Formula | Amount + Tax |
| Currency | Select | USD, EUR, GBP, CAD, AUD |
| Payment Method | Select | Bank Transfer, PayPal, Stripe, Check, Crypto, Other |
| Payment Terms | Select | Due on Receipt, Net 15, Net 30, Net 45, Net 60 |
| Days Overdue | Formula | See formula |
| Line Items | Text | Invoice details |
| Notes | Text | Payment notes |
| Invoice PDF | Files | Uploaded invoice |
| Receipt | Files | Payment confirmation |

### Invoice Formulas

**Total Amount:**
```
prop("Amount") + prop("Tax Amount")
```

**Days Overdue:**
```
if(prop("Status") != "Paid" and prop("Due Date") < now(),
  dateBetween(now(), prop("Due Date"), "days"),
  0)
```

**Invoice Age:**
```
dateBetween(now(), prop("Issue Date"), "days")
```

**Payment Status:**
```
if(prop("Status") == "Paid", "✅ Paid",
if(prop("Days Overdue") > 30, "🔴 Seriously Overdue",
if(prop("Days Overdue") > 0, "🟠 Overdue",
if(prop("Status") == "Sent", "🟡 Pending",
"⚪ Draft"))))
```

### Invoice Page Template

```markdown
# 🧾 [Invoice Number]

---

## Invoice Details

| Field | Value |
|-------|-------|
| Client | [Client] |
| Project | [Project] |
| Issue Date | [Date] |
| Due Date | [Date] |
| Status | [Status] |

---

## Line Items

| Description | Quantity | Rate | Amount |
|-------------|----------|------|--------|
| [Service 1] | [X] | $[Rate] | $[Amount] |
| [Service 2] | [X] | $[Rate] | $[Amount] |
| | | | |
| **Subtotal** | | | $[Subtotal] |
| **Tax ([X]%)** | | | $[Tax] |
| **Total** | | | **$[Total]** |

---

## Payment Information

**Payment Terms:** [Terms]

**Payment Methods Accepted:**
- Bank Transfer: [Account details]
- PayPal: [Email]
- [Other]

---

## Payment History

| Date | Amount | Method | Reference |
|------|--------|--------|-----------|
| | | | |

---

## Notes
[Any additional notes or terms]

---

## Files
- Invoice PDF: [Attachment]
- Receipt: [Attachment]
```

### Invoice Number Formula

Create an auto-incrementing invoice number system:
1. Add a "Number" property (auto-increment if available)
2. Or manually assign numbers with format: `INV-2024-001`

### Invoice Views

**1. Unpaid Invoices**
- Filter: Status is "Sent" or "Overdue"
- Sort by: Due Date (Ascending)
- CRITICAL VIEW - check daily

**2. All Invoices Table**
- Sort by: Issue Date (Descending)
- Group by: Year

**3. Overdue Board**
- Filter: Days Overdue > 0
- Group by: Days Overdue ranges (1-15, 16-30, 31-60, 60+)

**4. Paid This Month**
- Filter: Paid Date is This Month
- Calculate: Sum of Total Amount

**5. Invoice Calendar**
- Calendar by Due Date
- See payment schedule

---

## Communication Log

### Database Setup

Create a new **Database - Full page** called **"Communications"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Subject | Title | Communication topic |
| Client | Relation | Link to Clients |
| Project | Relation | Link to Projects (optional) |
| Type | Select | Email, Call, Meeting, Chat, Video Call, In Person, Social Media |
| Direction | Select | Incoming, Outgoing |
| Date | Date | When communication occurred |
| Status | Select | Pending Response, Responded, No Response Needed, Follow Up |
| Follow Up Date | Date | When to follow up |
| Summary | Text | Key points discussed |
| Action Items | Text | Tasks from this communication |
| Attachments | Files | Related files |
| Sentiment | Select | Positive, Neutral, Negative, Urgent |

### Communication Template

```markdown
# 💬 [Subject]

**Date:** [Date]
**Client:** [Client]
**Type:** [Email/Call/Meeting]
**Direction:** [In/Out]

---

## Summary
[Brief overview of the communication]

---

## Key Points Discussed
-
-
-

---

## Action Items
- [ ]
- [ ]

---

## Follow Up
**Next Step:**
**Follow Up Date:** [Date]

---

## Attachments
[Files]

---

## Full Notes
[Detailed notes if needed]
```

### Communication Views

**1. Recent Communications**
- Sort by: Date (Descending)
- Limit: Last 20
- Quick scan of activity

**2. Needs Follow Up**
- Filter: Status is "Follow Up" and Follow Up Date is today or past
- Sort by: Follow Up Date (Ascending)
- ACTION REQUIRED view

**3. By Client**
- Group by: Client
- See all communications with each client

**4. Communication Calendar**
- Calendar by Date
- Visualize interaction frequency

**5. Pending Responses**
- Filter: Status is "Pending Response"
- Track what you're waiting on

---

## Revenue Analytics

### Monthly Revenue Tracking

Create a **"Monthly Revenue"** database:

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Month | Title | Format: "January 2024" |
| Revenue | Rollup | Sum of Paid invoices |
| Invoices Sent | Rollup | Count of invoices issued |
| Invoices Paid | Rollup | Count of paid invoices |
| New Clients | Number | Clients acquired |
| Projects Completed | Number | Projects finished |
| Collection Rate | Formula | Paid / Sent |
| YoY Growth | Formula | Compare to same month last year |
| Notes | Text | Monthly observations |

### Revenue Dashboard Metrics

**Create formula properties in Invoices database:**

**Year to Date Revenue:**
Create a filtered view:
- Filter: Paid Date is This Year
- Calculate: Sum of Total Amount

**Monthly Recurring Revenue (MRR):**
If you have retainers:
- Filter: Project Type is "Retainer" and Status is "Active"
- Calculate: Sum of monthly amounts

**Average Project Value:**
```
[Total Revenue] / [Project Count]
```

**Revenue by Client Type:**
- Group invoices by Client Type
- Calculate sum per group

### Analytics Dashboard Layout

```markdown
# 📊 Revenue Analytics

---

## 💰 Financial Overview

### This Month
| Metric | Amount |
|--------|--------|
| Revenue | $[Sum paid this month] |
| Outstanding | $[Sum unpaid] |
| Invoices Sent | [Count] |
| Collection Rate | [%] |

### Year to Date
| Metric | Amount |
|--------|--------|
| Total Revenue | $[YTD sum] |
| vs Last Year | [+/- %] |
| Projects Completed | [Count] |
| New Clients | [Count] |

---

## 📈 Revenue Trends

### Monthly Revenue Chart
[Table or board showing monthly totals]

| Month | Revenue | Projects | Clients |
|-------|---------|----------|---------|
| Jan | $ | | |
| Feb | $ | | |
| ... | | | |

---

## 🏆 Top Clients by Revenue

[Linked: Clients sorted by Total Revenue, top 10]

| Client | Revenue | Projects | Status |
|--------|---------|----------|--------|
| | | | |

---

## 📁 Revenue by Project Type

| Project Type | Revenue | % of Total |
|--------------|---------|------------|
| Website | $ | % |
| Consulting | $ | % |
| Design | $ | % |

---

## 💵 Invoice Status Overview

| Status | Count | Amount |
|--------|-------|--------|
| Paid | | $ |
| Pending | | $ |
| Overdue | | $ |

---

## 📊 Key Metrics

- **Average Project Value:** $[Formula]
- **Average Payment Time:** [X] days
- **Client Retention Rate:** [X]%
- **Revenue per Client:** $[Formula]
```

### Revenue Formulas Reference

**Collection Rate:**
```
prop("Invoices Paid") / prop("Invoices Sent") * 100
```

**Average Days to Payment:**
```
dateBetween(prop("Paid Date"), prop("Issue Date"), "days")
```

**Client Concentration (Top Client %):**
```
[Top Client Revenue] / [Total Revenue] * 100
```

---

## Dashboard Setup

### Main Dashboard Layout

```markdown
# 🏢 Freelance HQ

---

## ⚡ Quick Actions

[+ New Client]  [+ New Project]  [+ New Invoice]  [+ Log Communication]

---

## 📊 At a Glance

| Metric | Value |
|--------|-------|
| Monthly Revenue | $[Rollup] |
| Active Projects | [Count] |
| Pending Invoices | $[Rollup] |
| Follow-ups Due | [Count] |

---

## 🔥 Today's Priorities

### Overdue Invoices
[Linked: Invoices where Days Overdue > 0]

### Follow-ups Due
[Linked: Communications where Follow Up Date is Today]

### Projects Due This Week
[Linked: Projects where Due Date is within 7 days]

---

## 🎯 Active Projects

[Linked database: Projects Board, Status = Active, grouped by Priority]

---

## 👥 Client Pipeline

[Linked database: Clients Board, grouped by Status]

---

## 💬 Recent Activity

[Linked database: Communications, last 7 days, list view]

---

## 💰 Financial Snapshot

### Outstanding Invoices
[Linked: Unpaid invoices, sorted by Due Date]

### Recent Payments
[Linked: Paid invoices, last 30 days]

---

## 📅 Upcoming Deadlines

[Calendar view of Projects by Due Date, next 30 days]
```

### Dashboard Linked Database Configurations

**Active Projects Board:**
- Database: Projects
- Filter: Status is "Active" or "In Review"
- Group by: Priority
- Properties shown: Client, Due Date, Progress

**Client Pipeline:**
- Database: Clients
- Filter: Status is not "Lost"
- Group by: Status
- Properties shown: Contact Name, Last Contact, Health Score

**Overdue Invoices Alert:**
- Database: Invoices
- Filter: Status is not "Paid" and Due Date < Today
- Sort by: Days Overdue (Descending)
- MAKE THIS PROMINENT

---

## Customization Tips

### Adapting for Your Business

**For Agencies:**
- Add Team Member property to Projects
- Add Internal Cost tracking
- Include capacity planning

**For Retainer-Based Work:**
- Add Monthly Hours property
- Track hours used vs. allocated
- Auto-renewal reminders

**For Product + Service Hybrid:**
- Separate product sales database
- Link to client records

### Automation Ideas

**With Notion API / Zapier:**
1. Auto-create invoice when project completes
2. Send follow-up reminders for overdue invoices
3. Weekly summary email of financials
4. Auto-log emails from clients

**With Notion's Built-in Features:**
1. Templates for common project types
2. Recurring database templates for monthly reviews
3. Linked databases for quick data entry

### Integration Suggestions

| Tool | Integration Purpose |
|------|---------------------|
| Stripe/PayPal | Payment tracking |
| Calendly | Meeting scheduling |
| Gmail/Outlook | Email logging |
| Harvest/Toggl | Time tracking |
| Dropbox/Drive | File storage |
| QuickBooks | Accounting sync |

### Best Practices

1. **Update daily:**
   - Log communications same day
   - Update project progress
   - Check invoice status

2. **Weekly review:**
   - Pipeline health check
   - Follow-up on overdue items
   - Update forecasts

3. **Monthly:**
   - Revenue analysis
   - Client health assessment
   - Clean up closed items

---

## Expected Layout Screenshots

### Main Dashboard
*[Visual: Full-width dashboard with quick stats cards at top showing revenue, projects, and alerts. Below, a two-column layout with active projects board on left and client pipeline on right. Bottom section shows recent communications list and calendar mini-view.]*

### Client Pipeline Board
*[Visual: Kanban-style board with columns for Lead, Prospect, Active, Past Client. Each card shows client name, contact person, last contact date, and health indicator dot (green/yellow/red). Drag-and-drop enabled.]*

### Project Timeline
*[Visual: Gantt-style timeline showing projects as horizontal bars. Color-coded by client. Milestones marked with diamonds. Today line visible. Hovering shows project details.]*

### Invoice Tracker
*[Visual: Table view with clear status indicators. Overdue invoices highlighted in red. Quick action buttons for "Send Reminder" and "Mark Paid." Running totals at bottom.]*

---

## Quick Start Checklist

### Initial Setup
- [ ] Create Clients database
- [ ] Create Projects database
- [ ] Create Invoices database
- [ ] Create Communications database
- [ ] Link all databases with relations
- [ ] Set up formula properties

### Templates
- [ ] Create Client page template
- [ ] Create Project page template
- [ ] Create Invoice template
- [ ] Create Communication template

### Views
- [ ] Build main dashboard
- [ ] Set up pipeline board
- [ ] Configure overdue alerts view
- [ ] Create revenue analytics page

### Data Entry
- [ ] Import existing clients
- [ ] Add current projects
- [ ] Log outstanding invoices
- [ ] Record recent communications

### Workflow
- [ ] Document your sales process
- [ ] Set up daily/weekly review routine
- [ ] Test invoice workflow
- [ ] Share with team (if applicable)

---

## Sample Data for Testing

**Sample Client:**
```
Name: TechStart Inc
Status: Active
Contact: Jane Smith
Email: jane@techstart.io
Industry: Tech
Hourly Rate: $150
```

**Sample Project:**
```
Name: Website Redesign
Client: TechStart Inc
Status: Active
Budget: $8,000
Due Date: [3 weeks from now]
Type: Website
```

**Sample Invoice:**
```
Number: INV-2024-001
Client: TechStart Inc
Amount: $4,000
Status: Sent
Due Date: [2 weeks from now]
Terms: Net 30
```

---

*Template Version 1.0 | Last Updated: 2024*
