# Freelance Client Tracker - Complete Business Management Template

## Overview
A comprehensive freelance business management system to track clients, projects, invoices, time, and income. Everything you need to run a professional freelance operation from one central hub.

---

## Template Structure

```
/Freelance Hub
├── /Dashboard
├── /Clients
├── /Projects
├── /Tasks
├── /Time Tracking
├── /Invoices
├── /Proposals
├── /Contracts
├── /Income & Expenses
├── /Services & Rates
├── /Lead Pipeline
└── /Resources
```

---

## Database #1: Clients Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Client Name | Title | Company or individual name |
| Status | Select | Lead, Active, Paused, Completed, Lost |
| Type | Select | Individual, Startup, Small Business, Enterprise, Agency |
| Industry | Select | Tech, Finance, Healthcare, E-commerce, Education, Creative, Other |
| Contact Name | Text | Primary contact person |
| Email | Email | Primary email |
| Phone | Phone | Primary phone |
| Address | Text | Business address |
| Website | URL | Client website |
| How They Found You | Select | Referral, Social Media, Portfolio, Cold Outreach, Repeat Client |
| Referred By | Relation | Links to another client |
| Projects | Relation | Links to Projects Database |
| Total Revenue | Rollup | Sum of all paid invoices |
| Outstanding Balance | Rollup | Sum of unpaid invoices |
| Lifetime Value | Formula | Total revenue + outstanding |
| First Project Date | Rollup | Min date of projects |
| Last Project Date | Rollup | Max date of projects |
| Relationship Length | Formula | Days since first project |
| Communication Style | Select | Email, Slack, Phone, Video Call |
| Response Speed | Select | Fast, Normal, Slow |
| Payment Reliability | Select | Excellent, Good, Fair, Poor |
| Client Rating | Select | 5-star, 4-star, 3-star, 2-star, 1-star |
| Notes | Text | Important notes about client |
| Red Flags | Text | Any concerns or issues |
| Contract Template | Select | Standard, Custom, Retainer |
| Payment Terms | Select | Net 15, Net 30, Net 45, Due on Receipt, 50/50 |
| Preferred Rate | Number | Their typical project budget |
| Logo | Files & Media | Client logo |

### Views

1. **All Clients (Table)**
   - Sort by: Status, then Client Name

2. **Active Clients (Board)**
   - Filter: Status is "Active"
   - Group by: Type
   - Show: Contact Name, Total Revenue

3. **Client Pipeline (Board)**
   - Group by: Status
   - Show: Projects count, Outstanding Balance

4. **Top Clients (Table)**
   - Sort by: Total Revenue (descending)
   - Show: Total Revenue, Project Count, Rating

5. **Needs Attention (Table)**
   - Filter: Outstanding Balance > 0 OR Status is "Lead"

6. **Client Map (Gallery)**
   - Show: Logo, Status, Industry

---

## Database #2: Projects Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Project Name | Title | Name of the project |
| Client | Relation | Links to Clients Database |
| Status | Select | Lead, Proposal, Negotiating, Active, On Hold, Completed, Cancelled |
| Type | Select | One-time, Retainer, Ongoing, Rush |
| Service | Relation | Links to Services Database |
| Priority | Select | Urgent, High, Normal, Low |
| Start Date | Date | Project start date |
| Due Date | Date | Project deadline |
| Completed Date | Date | Actual completion date |
| Estimated Hours | Number | Estimated time to complete |
| Actual Hours | Rollup | Sum from Time Tracking |
| Hourly Rate | Number | Rate for this project |
| Fixed Price | Number | If fixed-price project |
| Pricing Type | Select | Hourly, Fixed, Retainer, Value-Based |
| Project Value | Formula | Calculate based on pricing type |
| Invoices | Relation | Links to Invoices |
| Amount Invoiced | Rollup | Sum of invoices |
| Amount Paid | Rollup | Sum of paid invoices |
| Profit | Formula | Amount Paid - (Actual Hours * internal rate) |
| Tasks | Relation | Links to Tasks |
| Task Progress | Formula | Completed tasks / Total tasks |
| Deliverables | Text | What you'll deliver |
| Scope | Text | Project scope |
| Requirements | Text | Client requirements |
| Brief/SOW | Files & Media | Project documentation |
| Contract | Relation | Links to Contracts |
| Communication Channel | Select | Email, Slack, Asana, Basecamp, Other |
| Last Activity | Date | Last action on project |
| Next Action | Text | What needs to happen next |
| Notes | Text | Project notes |
| Lessons Learned | Text | For completed projects |
| Testimonial | Text | Client feedback |
| Portfolio Worthy | Checkbox | Include in portfolio? |

### Formulas

**Project Value:**
```
if(prop("Pricing Type") == "Hourly",
   prop("Estimated Hours") * prop("Hourly Rate"),
   if(prop("Pricing Type") == "Fixed",
      prop("Fixed Price"),
      prop("Fixed Price")))
```

**Effective Hourly Rate:**
```
if(prop("Actual Hours") > 0,
   round(prop("Amount Paid") / prop("Actual Hours") * 100) / 100,
   0)
```

**On Schedule:**
```
if(prop("Status") == "Completed", "Complete",
   if(prop("Due Date") < now(), "Overdue",
      if(dateBetween(prop("Due Date"), now(), "days") <= 3, "Due Soon",
         "On Track")))
```

**Hours Variance:**
```
prop("Actual Hours") - prop("Estimated Hours")
```

### Views

1. **All Projects (Table)**
   - Sort by: Due Date

2. **Active Projects (Board)**
   - Filter: Status is "Active"
   - Group by: Client
   - Show: Due Date, Task Progress

3. **Project Pipeline (Board)**
   - Group by: Status
   - Show: Project Value, Client

4. **Calendar (Calendar)**
   - Show by: Due Date
   - Filter: Status is not "Completed"

5. **Timeline (Timeline)**
   - Timeline by: Start Date → Due Date
   - Filter: Status is "Active" OR Status is "On Hold"

6. **By Client (Board)**
   - Group by: Client
   - Show: Status, Project Value

7. **Completed (Table)**
   - Filter: Status is "Completed"
   - Sort by: Completed Date (newest)
   - Show: Effective Hourly Rate, Testimonial

8. **Overdue (Table)**
   - Filter: Due Date < Today AND Status is "Active"

---

## Database #3: Tasks Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Task | Title | Task description |
| Project | Relation | Links to Projects |
| Client | Rollup | Client from Project |
| Status | Select | To Do, In Progress, Review, Blocked, Done |
| Priority | Select | Urgent, High, Normal, Low |
| Due Date | Date | Task deadline |
| Estimated Time | Number | Estimated hours |
| Actual Time | Rollup | Sum from Time Tracking |
| Assigned To | Person | For teams |
| Type | Select | Development, Design, Writing, Meeting, Admin, Revision |
| Billable | Checkbox | Is this billable? |
| Subtasks | Text | Checklist |
| Notes | Text | Task details |
| Dependencies | Relation | Blocked by other tasks |
| Time Entries | Relation | Links to Time Tracking |

### Views

1. **All Tasks (Table)**
   - Sort by: Due Date

2. **My Tasks (Board)**
   - Group by: Status
   - Filter: Assigned To contains Me

3. **By Project (Board)**
   - Group by: Project
   - Filter: Status is not "Done"

4. **Today (Table)**
   - Filter: Due Date is Today
   - Sort by: Priority

5. **This Week (Table)**
   - Filter: Due Date is This Week
   - Sort by: Due Date, Priority

6. **Blocked Tasks (Table)**
   - Filter: Status is "Blocked"

---

## Database #4: Time Tracking Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Description | Title | What you worked on |
| Project | Relation | Links to Projects |
| Task | Relation | Links to Tasks |
| Client | Rollup | From Project |
| Date | Date | Work date |
| Start Time | Text | When you started |
| End Time | Text | When you finished |
| Duration (Hours) | Number | Hours worked (decimal) |
| Duration (Minutes) | Formula | Hours * 60 |
| Billable | Checkbox | Is this billable? |
| Billed | Checkbox | Has this been invoiced? |
| Invoice | Relation | Links to Invoices |
| Rate | Rollup | Hourly rate from Project |
| Amount | Formula | Duration * Rate |
| Category | Select | Development, Design, Writing, Meeting, Admin, Research, Revision |
| Notes | Text | Additional notes |
| Week | Formula | `formatDate(prop("Date"), "YYYY-[W]WW")` |
| Month | Formula | `formatDate(prop("Date"), "YYYY-MM")` |

### Formulas

**Amount:**
```
round(prop("Duration (Hours)") * prop("Rate") * 100) / 100
```

**Billable Amount:**
```
if(prop("Billable"), prop("Amount"), 0)
```

### Views

1. **Today (Table)**
   - Filter: Date is Today
   - Sort by: Start Time

2. **This Week (Table)**
   - Filter: Date is This Week
   - Sort by: Date, then Start Time
   - Sum: Duration, Amount

3. **By Project (Board)**
   - Group by: Project
   - Show: Duration, Amount

4. **By Client (Board)**
   - Group by: Client
   - Show: Total Hours, Total Amount

5. **Unbilled Time (Table)**
   - Filter: Billable is checked AND Billed is not checked
   - Sum: Amount

6. **Weekly Summary (Table)**
   - Group by: Week
   - Sum: Duration, Amount

7. **Monthly Summary (Table)**
   - Group by: Month
   - Sum: Duration, Amount

---

## Database #5: Invoices Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Invoice Number | Title | e.g., INV-2024-001 |
| Client | Relation | Links to Clients |
| Project | Relation | Links to Projects |
| Status | Select | Draft, Sent, Viewed, Paid, Overdue, Cancelled |
| Issue Date | Date | Date invoice sent |
| Due Date | Date | Payment due date |
| Paid Date | Date | Date payment received |
| Subtotal | Number | Total before tax |
| Tax Rate | Number | Tax percentage |
| Tax Amount | Formula | Subtotal * Tax Rate |
| Discount | Number | Discount amount |
| Total | Formula | Subtotal + Tax - Discount |
| Amount Paid | Number | Amount received |
| Balance Due | Formula | Total - Amount Paid |
| Currency | Select | USD, EUR, GBP, CAD, AUD |
| Payment Method | Select | Bank Transfer, PayPal, Stripe, Check, Other |
| Time Entries | Relation | Links to Time Tracking |
| Line Items | Text | Detailed breakdown |
| Notes | Text | Invoice notes |
| Terms | Text | Payment terms |
| Invoice PDF | Files & Media | Generated invoice |
| Payment Link | URL | Online payment link |
| Reminder Sent | Checkbox | Has reminder been sent |
| Days Outstanding | Formula | Days since due date |

### Formulas

**Tax Amount:**
```
round(prop("Subtotal") * prop("Tax Rate") / 100 * 100) / 100
```

**Total:**
```
prop("Subtotal") + prop("Tax Amount") - prop("Discount")
```

**Days Outstanding:**
```
if(prop("Status") == "Paid", 0,
   if(prop("Due Date") < now(),
      dateBetween(now(), prop("Due Date"), "days"),
      0))
```

**Payment Status:**
```
if(prop("Status") == "Paid", "Paid",
   if(prop("Due Date") < now(), "Overdue",
      if(dateBetween(prop("Due Date"), now(), "days") <= 3, "Due Soon",
         "Pending")))
```

### Views

1. **All Invoices (Table)**
   - Sort by: Issue Date (newest)

2. **Unpaid Invoices (Board)**
   - Filter: Status is not "Paid" AND Status is not "Cancelled"
   - Group by: Status
   - Show: Total, Due Date, Days Outstanding

3. **Overdue (Table)**
   - Filter: Status is "Overdue" OR (Due Date < Today AND Status is not "Paid")
   - Sort by: Days Outstanding (descending)

4. **By Client (Board)**
   - Group by: Client
   - Sum: Total, Balance Due

5. **Monthly Revenue (Table)**
   - Group by: Month (from Paid Date)
   - Filter: Status is "Paid"
   - Sum: Total

6. **Awaiting Payment (Table)**
   - Filter: Status is "Sent" OR Status is "Viewed"
   - Sort by: Due Date

---

## Database #6: Services & Rates Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Service Name | Title | Name of service |
| Category | Select | Development, Design, Writing, Consulting, Training, Other |
| Description | Text | What's included |
| Pricing Type | Select | Hourly, Fixed, Package, Retainer |
| Hourly Rate | Number | If hourly pricing |
| Fixed Price | Number | If fixed pricing |
| Package Details | Text | What's in the package |
| Estimated Hours | Number | Typical hours for service |
| Minimum Project | Number | Minimum project value |
| Maximum Project | Number | Maximum project value |
| Status | Select | Active, Retired, Coming Soon |
| Ideal Client | Text | Who this is for |
| Deliverables | Text | What client receives |
| Timeline | Text | Typical delivery time |
| Projects | Relation | Links to Projects using this service |
| Revenue | Rollup | Total revenue from this service |
| Popular | Checkbox | Is this a bestseller? |

### Views

1. **All Services (Table)**
   - Sort by: Category

2. **Active Services (Gallery)**
   - Filter: Status is "Active"
   - Show: Category, Pricing Type, Rate/Price

3. **Service Menu (Table)**
   - Filter: Status is "Active"
   - Show: Description, Hourly Rate, Fixed Price

4. **Revenue by Service (Table)**
   - Show: Revenue (rollup sum)
   - Sort by: Revenue (descending)

---

## Database #7: Lead Pipeline Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Lead Name | Title | Company or person name |
| Status | Select | New Lead, Contacted, Qualified, Proposal Sent, Negotiating, Won, Lost |
| Source | Select | Referral, Social Media, Website, Cold Outreach, Networking, Job Board |
| Contact Person | Text | Primary contact |
| Email | Email | Contact email |
| Phone | Phone | Contact phone |
| Company | Text | Company name |
| Service Interested | Relation | Links to Services |
| Estimated Value | Number | Potential project value |
| Probability | Select | 10%, 25%, 50%, 75%, 90% |
| Weighted Value | Formula | Value * Probability |
| First Contact Date | Date | When you first connected |
| Last Contact Date | Date | Most recent contact |
| Next Follow-up | Date | When to follow up |
| Follow-up Count | Number | Number of follow-ups |
| Notes | Text | Lead notes |
| Pain Points | Text | Their challenges |
| Decision Maker | Checkbox | Are they the decision maker? |
| Budget Confirmed | Checkbox | Have they confirmed budget? |
| Timeline | Text | Their project timeline |
| Competitors | Text | Who else are they considering? |
| Why Lost | Select | Price, Timing, Went Different Direction, No Response, Other |
| Lost Reason Details | Text | Detailed reason if lost |

### Formulas

**Weighted Value:**
```
prop("Estimated Value") *
  (toNumber(replace(prop("Probability"), "%", "")) / 100)
```

**Days Since Contact:**
```
dateBetween(now(), prop("Last Contact Date"), "days")
```

**Follow-up Status:**
```
if(empty(prop("Next Follow-up")), "Schedule Follow-up",
   if(prop("Next Follow-up") < now(), "Overdue",
      if(dateBetween(prop("Next Follow-up"), now(), "days") <= 1, "Today/Tomorrow",
         "Scheduled")))
```

### Views

1. **Pipeline (Board)**
   - Group by: Status
   - Show: Estimated Value, Next Follow-up
   - Sum: Estimated Value per stage

2. **Follow-up Needed (Table)**
   - Filter: Next Follow-up <= Today AND Status is not "Won" AND Status is not "Lost"
   - Sort by: Next Follow-up

3. **Hot Leads (Table)**
   - Filter: Probability is "75%" OR "90%"
   - Sort by: Estimated Value (descending)

4. **Pipeline Value (Table)**
   - Show: Weighted Value
   - Group by: Status
   - Sum: Weighted Value

5. **Lost Leads (Table)**
   - Filter: Status is "Lost"
   - Sort by: Last Contact Date

---

## Database #8: Contracts Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Contract Name | Title | Contract identifier |
| Client | Relation | Links to Clients |
| Project | Relation | Links to Projects |
| Type | Select | Master Service Agreement, Statement of Work, NDA, Retainer, Custom |
| Status | Select | Draft, Sent, Signed, Active, Completed, Terminated |
| Start Date | Date | Contract start |
| End Date | Date | Contract end |
| Value | Number | Contract value |
| Payment Terms | Text | Payment details |
| Key Terms | Text | Important terms summary |
| Renewal | Select | Auto-renew, Manual Renew, One-time |
| Renewal Date | Date | When to renew |
| Signed Date | Date | When client signed |
| Contract File | Files & Media | Signed contract PDF |
| Notes | Text | Additional notes |

### Views

1. **All Contracts (Table)**
   - Sort by: Start Date (newest)

2. **Active Contracts (Table)**
   - Filter: Status is "Active"

3. **Expiring Soon (Table)**
   - Filter: End Date is within next 30 days
   - Sort by: End Date

4. **By Client (Board)**
   - Group by: Client

---

## Database #9: Income & Expenses Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Description | Title | Transaction description |
| Type | Select | Income, Expense |
| Category | Select | Project Income, Retainer, Subscription, Software, Equipment, Marketing, Travel, Office, Professional Services, Taxes, Other |
| Amount | Number | Transaction amount |
| Date | Date | Transaction date |
| Client | Relation | Links to Clients (for income) |
| Project | Relation | Links to Projects (for income) |
| Invoice | Relation | Links to Invoices |
| Payment Method | Select | Bank Transfer, PayPal, Stripe, Credit Card, Cash |
| Tax Deductible | Checkbox | For expenses |
| Receipt | Files & Media | Receipt image |
| Notes | Text | Additional notes |
| Month | Formula | `formatDate(prop("Date"), "YYYY-MM")` |
| Quarter | Formula | `formatDate(prop("Date"), "YYYY-[Q]Q")` |
| Year | Formula | `formatDate(prop("Date"), "YYYY")` |
| Is Recurring | Checkbox | Recurring transaction? |

### Views

1. **All Transactions (Table)**
   - Sort by: Date (newest)

2. **Income (Table)**
   - Filter: Type is "Income"
   - Sort by: Date
   - Sum: Amount

3. **Expenses (Table)**
   - Filter: Type is "Expense"
   - Sort by: Date
   - Sum: Amount

4. **Monthly P&L (Table)**
   - Group by: Month
   - Show: Income sum, Expense sum, Net

5. **By Category (Board)**
   - Group by: Category
   - Sum: Amount

6. **Tax Deductions (Table)**
   - Filter: Tax Deductible is checked
   - Sort by: Date

---

## Dashboard Layout

### Top Section: Key Metrics
```
+----------------+----------------+----------------+----------------+
|    Revenue     |   Outstanding  |  Active        |  Active        |
|   This Month   |   Invoices     |  Projects      |  Clients       |
|    $X,XXX      |    $X,XXX      |      X         |      X         |
+----------------+----------------+----------------+----------------+
```

### Middle Section: Work Overview
```
+--------------------------------+--------------------------------+
|      ACTIVE PROJECTS           |      UPCOMING DEADLINES        |
|                                |                                |
| • Project A - Client 1 (75%)   | • Project B - Due in 3 days    |
| • Project B - Client 2 (30%)   | • Task X - Due tomorrow        |
| • Project C - Client 3 (50%)   | • Invoice #123 - Due in 5 days |
+--------------------------------+--------------------------------+
```

### Bottom Section: Pipeline & Time
```
+--------------------------------+--------------------------------+
|      LEAD PIPELINE             |      THIS WEEK'S TIME          |
|                                |                                |
| New: $5,000                    | Mon: 6.5 hrs - $650            |
| Contacted: $12,000             | Tue: 8.0 hrs - $800            |
| Proposal: $8,000               | Wed: 7.5 hrs - $750            |
| Negotiating: $15,000           | Thu: 5.0 hrs - $500            |
|                                | Fri: 4.0 hrs - $400            |
| Total Pipeline: $40,000        | Total: 31 hrs - $3,100         |
+--------------------------------+--------------------------------+
```

---

## Template Pages

### Project Brief Template

```markdown
# Project Brief: [Project Name]

## Client Information
- **Client:** [Name]
- **Contact:** [Name, Email, Phone]
- **Communication:** [Preferred channel]

## Project Overview
### Background
[Why does the client need this project?]

### Objectives
[What are we trying to achieve?]

### Success Criteria
[How will we measure success?]

## Scope

### In Scope
- [ ] Deliverable 1
- [ ] Deliverable 2
- [ ] Deliverable 3

### Out of Scope
- Item 1
- Item 2

### Assumptions
- Assumption 1
- Assumption 2

## Timeline
| Milestone | Date | Deliverable |
|-----------|------|-------------|
| Kickoff | | |
| Draft 1 | | |
| Review | | |
| Final | | |

## Budget
- **Type:** [Hourly / Fixed]
- **Rate/Price:** $X
- **Estimated Total:** $X
- **Payment Terms:** [Net 30, etc.]

## Requirements
[Detailed requirements from client]

## Technical Details
[Any technical specifications]

## Resources Needed
- From client:
- Tools required:
- Access needed:

## Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| | | | |

## Approval
- Client Signature: _______________
- Date: _______________
```

### Invoice Template

```markdown
# INVOICE

**Invoice Number:** INV-[YEAR]-[NUMBER]
**Invoice Date:** [Date]
**Due Date:** [Date]

---

**From:**
[Your Name/Business]
[Address]
[Email]
[Phone]

**Bill To:**
[Client Name]
[Client Address]
[Client Email]

---

## Services Rendered

| Description | Qty/Hours | Rate | Amount |
|-------------|-----------|------|--------|
| [Service 1] | X | $X | $X |
| [Service 2] | X | $X | $X |
| [Service 3] | X | $X | $X |

---

|  | Amount |
|--|--------|
| **Subtotal** | $X |
| Tax (X%) | $X |
| **Total Due** | **$X** |

---

## Payment Information

**Payment Methods:**
- Bank Transfer: [Account details]
- PayPal: [email]
- [Other method]: [details]

**Payment Terms:** [Net 30, etc.]

---

Thank you for your business!

Questions? Contact [email]
```

### Weekly Client Update Template

```markdown
# Weekly Update - [Project Name]
**Week of:** [Date]
**Prepared for:** [Client Name]

---

## Summary
[Brief overview of the week's progress]

## Completed This Week
- [x] Task 1
- [x] Task 2
- [x] Task 3

## In Progress
- [ ] Task 4 (75% complete)
- [ ] Task 5 (50% complete)

## Upcoming This Week
- [ ] Task 6
- [ ] Task 7

## Hours & Budget
| This Week | Total |
|-----------|-------|
| X hours | X hours |
| $X | $X of $X budget |

## Questions / Decisions Needed
1. [Question 1]
2. [Question 2]

## Risks / Blockers
- [Any issues that need attention]

## Next Steps
1. [Next step 1]
2. [Next step 2]

---

[Your Name]
[Contact Info]
```

---

## Formulas Reference

### Revenue This Month
```
// Rollup from Income database
// Filter: Date is this month AND Type is "Income"
// Sum: Amount
```

### Outstanding Invoices
```
// Sum of Invoice Balance Due where Status is not "Paid"
```

### Effective Hourly Rate (All Projects)
```
// Total Amount Paid / Total Hours Worked
round(prop("Total Paid") / prop("Total Hours") * 100) / 100
```

### Project Profitability
```
// Amount Paid - (Hours * Cost Rate)
// Where Cost Rate is your target hourly rate
prop("Amount Paid") - (prop("Actual Hours") * 50)
```

### Pipeline Weighted Value
```
// Sum of (Estimated Value * Probability) for active leads
```

### Utilization Rate
```
// Billable Hours / Available Hours * 100
// e.g., 120 billable / 160 available = 75%
round(prop("Billable Hours") / prop("Available Hours") * 100)
```

---

## Setup Instructions

### Step 1: Initial Setup
1. Create "Freelance Hub" as main page
2. Create all databases
3. Set up properties and relations
4. Configure rollups and formulas

### Step 2: Add Your Services
1. List all services you offer
2. Set pricing for each
3. Define deliverables and timelines

### Step 3: Import Existing Clients
1. Add current and past clients
2. Set their status and details
3. Link to any existing contracts

### Step 4: Add Active Projects
1. Create entries for current projects
2. Link to clients and services
3. Add tasks and milestones

### Step 5: Set Up Time Tracking
1. Create time entry system
2. Link to projects
3. Set up daily tracking habit

### Step 6: Configure Invoicing
1. Set up invoice numbering system
2. Create invoice template
3. Link to time entries

### Step 7: Build Dashboard
1. Create main dashboard view
2. Add key metric callouts
3. Embed filtered database views

### Step 8: Import Leads
1. Add current prospects
2. Set pipeline stages
3. Schedule follow-ups

---

## Automation Ideas

### Zapier/Make Integrations
1. **New Lead Notification**: Email when new lead is added
2. **Invoice Reminders**: Auto-email when invoice is overdue
3. **Time Tracking**: Connect to Toggl or Harvest
4. **Calendar Sync**: Sync project deadlines to Google Calendar
5. **Contract Signing**: Connect to DocuSign or HelloSign

### Notion Automations
1. Auto-create project tasks when new project is added
2. Auto-update client status based on project status
3. Send Slack notification when payment received

---

## Tips for Success

1. **Track Time Daily**: Don't wait - log time as you work
2. **Invoice Promptly**: Send invoices immediately upon milestone completion
3. **Follow Up**: Don't be shy about payment reminders
4. **Document Everything**: Keep notes on all client communications
5. **Review Weekly**: Check pipeline, outstanding invoices, and deadlines
6. **Nurture Relationships**: Reach out to past clients periodically
7. **Know Your Numbers**: Track effective rate, utilization, profitability

---

## Support

For questions or customization help, contact: [Your Email]

Version 1.0 | Last Updated: [Date]
