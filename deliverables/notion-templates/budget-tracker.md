# Budget Tracker - Notion Template

## Overview

This comprehensive Budget Tracker template helps you take control of your finances with detailed income tracking, expense categorization, savings goals, and bill payment management. Built with powerful formulas and multiple views, this system provides clear insights into your financial health.

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Income Database](#income-database)
3. [Expenses Database](#expenses-database)
4. [Categories Database](#categories-database)
5. [Savings Goals Database](#savings-goals-database)
6. [Bill Reminders System](#bill-reminders-system)
7. [Monthly Overview Dashboard](#monthly-overview-dashboard)
8. [Formulas Reference](#formulas-reference)
9. [Customization Tips](#customization-tips)

---

## System Architecture

### Database Structure

```
Budget Tracker
├── Income Database
├── Expenses Database
├── Categories (Expense Categories)
├── Savings Goals
├── Recurring Bills
├── Monthly Summaries
└── Dashboard (Main Page)
```

### Main Dashboard Setup

Create a new page called **"Budget Tracker"** with this structure:

```markdown
# 💰 Budget Tracker

## Quick Stats (Current Month)
[Linked databases showing totals]

## Cash Flow Overview
[Income vs Expenses visualization]

## Category Breakdown
[Pie chart representation via database views]

## Savings Progress
[Goal trackers]

## Upcoming Bills
[Next 7 days reminders]
```

---

## Income Database

### Database Setup

Create a new **Database - Full page** called **"Income"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Description | Title | Income source description |
| Amount | Number | Format: Dollar, Decimal: 2 |
| Date Received | Date | Include time optional |
| Source Type | Select | Salary, Freelance, Investment, Gift, Refund, Side Hustle, Passive Income, Other |
| Source | Text | Specific source name |
| Tax Status | Select | Pre-tax, Post-tax, Tax-free |
| Recurring | Checkbox | Is this recurring income? |
| Frequency | Select | Weekly, Bi-weekly, Monthly, Quarterly, Annually, One-time |
| Account | Select | Checking, Savings, Cash, PayPal, Venmo, Other |
| Month | Formula | See formula below |
| Year | Formula | See formula below |
| Notes | Text | Additional details |

### Income Formulas

**Month Formula:**
```
formatDate(prop("Date Received"), "YYYY-MM")
```

**Year Formula:**
```
formatDate(prop("Date Received"), "YYYY")
```

### Recommended Views

**1. All Income (Table)**
- Sort by: Date Received (Descending)
- Show all properties

**2. Income by Month (Board)**
- Group by: Month formula
- Properties shown: Amount, Source Type
- Calculate: Sum of Amount

**3. Income by Source (Board)**
- Group by: Source Type
- Sort by: Amount (Descending)

**4. Recurring Income List**
- Filter: Recurring is checked
- Sort by: Amount (Descending)

---

## Expenses Database

### Database Setup

Create a new **Database - Full page** called **"Expenses"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Description | Title | What was purchased |
| Amount | Number | Format: Dollar, Decimal: 2 |
| Date | Date | Date of expense |
| Category | Relation | Link to Categories database |
| Subcategory | Select | Dynamic based on category |
| Payment Method | Select | Credit Card, Debit Card, Cash, Bank Transfer, PayPal, Venmo, Check |
| Card Used | Select | [Your card names] |
| Merchant | Text | Where purchased |
| Receipt | Files & Media | Upload receipt image |
| Is Recurring | Checkbox | Regular expense? |
| Is Essential | Checkbox | Need vs want |
| Tax Deductible | Checkbox | For tax purposes |
| Month | Formula | See formula below |
| Year | Formula | See formula below |
| Notes | Text | Additional context |

### Expense Formulas

**Month Formula:**
```
formatDate(prop("Date"), "YYYY-MM")
```

**Year Formula:**
```
formatDate(prop("Date"), "YYYY")
```

**Day of Week Formula:**
```
formatDate(prop("Date"), "dddd")
```

### Recommended Views

**1. All Expenses (Table)**
- Sort by: Date (Descending)
- Show: Description, Amount, Date, Category, Payment Method

**2. Monthly Expenses (Board)**
- Group by: Month
- Calculate: Sum of Amount per group
- Sort groups: Descending

**3. By Category (Board)**
- Group by: Category
- Calculate: Sum of Amount
- See spending patterns at a glance

**4. Essential vs Non-Essential (Board)**
- Group by: Is Essential
- Compare needs vs wants

**5. Calendar View**
- Show by: Date
- Visualize spending patterns over time

**6. Receipt Gallery**
- Filter: Receipt is not empty
- View: Gallery
- Good for expense documentation

---

## Categories Database

### Database Setup

Create a new **Database - Full page** called **"Categories"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Category Name | Title | Main category name |
| Type | Select | Fixed, Variable, Discretionary |
| Icon | Text | Emoji for visual |
| Budget Amount | Number | Monthly budget limit |
| Color | Select | For visual coding |
| Description | Text | What belongs in this category |
| Expenses | Relation | Linked from Expenses database |
| Total Spent | Rollup | Sum of related expenses |
| Budget Remaining | Formula | See formula below |
| Percentage Used | Formula | See formula below |
| Status | Formula | See formula below |

### Category Formulas

**Budget Remaining:**
```
prop("Budget Amount") - prop("Total Spent")
```

**Percentage Used:**
```
if(prop("Budget Amount") > 0, round(prop("Total Spent") / prop("Budget Amount") * 100), 0)
```

**Status Formula:**
```
if(prop("Percentage Used") >= 100, "🔴 Over Budget", if(prop("Percentage Used") >= 80, "🟡 Warning", "🟢 On Track"))
```

### Pre-configured Categories

Set up these categories with suggested monthly budgets:

**Fixed Expenses:**
| Category | Suggested Budget | Icon |
|----------|------------------|------|
| Rent/Mortgage | $1,500 | 🏠 |
| Utilities | $200 | 💡 |
| Insurance | $300 | 🛡️ |
| Phone/Internet | $150 | 📱 |
| Subscriptions | $100 | 📺 |
| Loan Payments | $400 | 🏦 |

**Variable Expenses:**
| Category | Suggested Budget | Icon |
|----------|------------------|------|
| Groceries | $500 | 🛒 |
| Transportation | $300 | 🚗 |
| Healthcare | $100 | 🏥 |
| Personal Care | $75 | 💅 |

**Discretionary Expenses:**
| Category | Suggested Budget | Icon |
|----------|------------------|------|
| Dining Out | $200 | 🍽️ |
| Entertainment | $150 | 🎬 |
| Shopping | $200 | 🛍️ |
| Hobbies | $100 | 🎨 |
| Travel | $200 | ✈️ |
| Gifts | $75 | 🎁 |

### Recommended Views

**1. Budget Overview (Table)**
- Show: Category Name, Budget Amount, Total Spent, Budget Remaining, Percentage Used, Status
- Sort by: Percentage Used (Descending)

**2. By Type (Board)**
- Group by: Type (Fixed, Variable, Discretionary)
- Calculate: Sum of Budget Amount

---

## Savings Goals Database

### Database Setup

Create a new **Database - Full page** called **"Savings Goals"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Goal Name | Title | What you're saving for |
| Target Amount | Number | Dollar format |
| Current Amount | Number | Dollar format |
| Start Date | Date | When you started |
| Target Date | Date | When you want to reach goal |
| Priority | Select | High, Medium, Low |
| Status | Select | Active, Paused, Completed |
| Category | Select | Emergency Fund, Retirement, Vacation, Purchase, Education, Other |
| Progress | Formula | See formula below |
| Amount Remaining | Formula | See formula below |
| Days Remaining | Formula | See formula below |
| Monthly Needed | Formula | See formula below |
| On Track | Formula | See formula below |
| Notes | Text | Strategy or notes |
| Contributions | Relation | Link to separate contributions log |

### Savings Goal Formulas

**Progress Percentage:**
```
if(prop("Target Amount") > 0, round(prop("Current Amount") / prop("Target Amount") * 100), 0)
```

**Amount Remaining:**
```
max(prop("Target Amount") - prop("Current Amount"), 0)
```

**Days Remaining:**
```
if(empty(prop("Target Date")), 0, dateBetween(prop("Target Date"), now(), "days"))
```

**Monthly Needed (to reach goal on time):**
```
if(prop("Days Remaining") > 0, round(prop("Amount Remaining") / (prop("Days Remaining") / 30) * 100) / 100, 0)
```

**On Track Status:**
```
if(prop("Progress") >= 100, "✅ Complete", if(prop("Monthly Needed") <= 500, "🟢 On Track", if(prop("Monthly Needed") <= 1000, "🟡 Stretch", "🔴 Behind")))
```

*Note: Adjust the 500/1000 thresholds based on your income*

### Savings Contributions Sub-Database

Create **"Savings Contributions"** database:

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Date | Date | Contribution date |
| Amount | Number | Dollar format |
| Goal | Relation | Link to Savings Goals |
| Source | Select | Paycheck, Bonus, Sale, Gift, Transfer |
| Notes | Text | Optional |

Then create a rollup in Savings Goals:
- Property: Current Amount (alternative to manual entry)
- Rollup: Sum of Amount from Contributions

### Recommended Views

**1. Active Goals (Gallery)**
- Filter: Status is "Active"
- Card size: Medium
- Show: Progress bar visualization

**2. Priority Board**
- Group by: Priority
- Sort by: Target Date (Ascending)

**3. Goal Timeline**
- Show by: Target Date
- Visualize deadlines

**4. Completed Goals Archive**
- Filter: Status is "Completed"
- Celebrate your wins!

### Sample Goals Setup

| Goal | Target | Category | Priority |
|------|--------|----------|----------|
| Emergency Fund | $10,000 | Emergency Fund | High |
| Vacation Fund | $3,000 | Vacation | Medium |
| New Laptop | $1,500 | Purchase | Low |
| Investment Account | $5,000 | Retirement | High |

---

## Bill Reminders System

### Database Setup

Create a new **Database - Full page** called **"Recurring Bills"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Bill Name | Title | Name of the bill |
| Amount | Number | Dollar format |
| Due Date | Number | Day of month (1-31) |
| Frequency | Select | Monthly, Quarterly, Semi-Annually, Annually |
| Category | Relation | Link to Categories |
| Auto-Pay | Checkbox | Is auto-pay enabled? |
| Payment Method | Select | Credit Card, Bank Account, Manual |
| Account/Card | Text | Which account |
| Website | URL | Login portal |
| Status | Select | Active, Paused, Cancelled |
| Next Due | Formula | See formula below |
| Days Until Due | Formula | See formula below |
| Urgency | Formula | See formula below |
| Notes | Text | Account numbers, etc. |

### Bill Reminder Formulas

**Next Due Date (simplified monthly):**
```
dateAdd(dateSubtract(now(), date(now()), "days"), prop("Due Date") - 1, "days")
```

**Days Until Due:**
```
if(prop("Due Date") >= date(now()), prop("Due Date") - date(now()), prop("Due Date") + 30 - date(now()))
```

**Urgency Status:**
```
if(prop("Days Until Due") <= 3, "🔴 Due Soon!", if(prop("Days Until Due") <= 7, "🟡 This Week", "🟢 Upcoming"))
```

### Bill Payment Log

Create **"Bill Payments"** database to track actual payments:

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Bill | Relation | Link to Recurring Bills |
| Date Paid | Date | When paid |
| Amount Paid | Number | Dollar format |
| Confirmation | Text | Confirmation number |
| On Time | Checkbox | Was it paid on time? |

### Recommended Views

**1. Upcoming Bills (Table)**
- Filter: Status is "Active"
- Sort by: Days Until Due (Ascending)
- Show urgency status prominently

**2. Bills Calendar**
- Show by: Calculated Next Due date
- Monthly overview of due dates

**3. Auto-Pay vs Manual**
- Group by: Auto-Pay checkbox
- Ensure nothing falls through cracks

**4. Monthly Bills Summary**
- Filter: Frequency is "Monthly"
- Calculate: Sum of Amount
- Know your fixed monthly obligations

---

## Monthly Overview Dashboard

### Dashboard Setup

Create a **Monthly Summary** database or page template:

### Properties for Monthly Summary Database

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Month | Title | Format: "January 2024" |
| Total Income | Rollup | Sum from Income (filtered by month) |
| Total Expenses | Rollup | Sum from Expenses (filtered by month) |
| Net Cash Flow | Formula | Income - Expenses |
| Savings Rate | Formula | See formula below |
| Budget Status | Formula | See formula below |
| Top Expense Category | Text | Manual or via formula |
| Notes | Text | Monthly reflection |

### Monthly Summary Formulas

**Net Cash Flow:**
```
prop("Total Income") - prop("Total Expenses")
```

**Savings Rate:**
```
if(prop("Total Income") > 0, round((prop("Total Income") - prop("Total Expenses")) / prop("Total Income") * 100), 0)
```

**Budget Status:**
```
if(prop("Net Cash Flow") >= prop("Target Savings"), "🎉 Exceeded Goal", if(prop("Net Cash Flow") > 0, "✅ Positive", "⚠️ Deficit"))
```

### Dashboard Page Layout

```markdown
# 📊 Budget Dashboard - [Current Month]

---

## 💵 Cash Flow Summary

| Metric | Amount |
|--------|--------|
| Total Income | [Rollup] |
| Total Expenses | [Rollup] |
| **Net Cash Flow** | [Formula] |
| Savings Rate | [Formula]% |

---

## 📈 Income Breakdown
[Linked database: Income filtered to current month, board view by Source Type]

---

## 📉 Expense Breakdown
[Linked database: Expenses filtered to current month, board view by Category]

---

## 🎯 Budget vs Actual by Category
[Linked database: Categories table showing Budget, Spent, Remaining, Status]

---

## 🏦 Savings Progress
[Linked database: Savings Goals gallery view]

---

## 📅 Upcoming Bills (Next 7 Days)
[Linked database: Bills filtered to next 7 days, sorted by urgency]

---

## 📝 Monthly Notes
[Toggle block for observations and plans]
```

---

## Formulas Reference

### Quick Formula Snippets

**Current Month Filter (for views):**
```
formatDate(prop("Date"), "YYYY-MM") == formatDate(now(), "YYYY-MM")
```

**Year-to-Date Total:**
```
formatDate(prop("Date"), "YYYY") == formatDate(now(), "YYYY")
```

**Percentage Calculation:**
```
round(prop("Part") / prop("Total") * 100)
```

**Currency Formatting Note:**
Notion automatically formats numbers with the Dollar setting, so formulas return numbers that display as currency.

**Conditional Formatting with Emojis:**
```
if(prop("Value") > 0, "🟢 " + format(prop("Value")), "🔴 " + format(prop("Value")))
```

**Days Between Dates:**
```
dateBetween(prop("End Date"), prop("Start Date"), "days")
```

**Add Months to Date:**
```
dateAdd(prop("Date"), 1, "months")
```

---

## Customization Tips

### Adapting to Your Needs

1. **Custom Categories**
   - Add/remove categories based on your lifestyle
   - Adjust budget amounts quarterly
   - Track category-specific trends

2. **Multiple Currencies**
   - Add Currency property if needed
   - Create views filtered by currency
   - Add exchange rate tracking

3. **Shared Finances**
   - Add "Paid By" property for shared expenses
   - Create split calculation formulas
   - Track who owes whom

4. **Investment Tracking**
   - Create separate Investment database
   - Track portfolio value over time
   - Monitor asset allocation

### Visual Enhancements

1. **Progress Bars**
   - Use gallery view with progress property
   - Enable "Show as bar" for number properties

2. **Color Coding**
   - Consistent colors for categories
   - Red/Yellow/Green for status indicators

3. **Charts (Workaround)**
   - Use board view calculations as pseudo-charts
   - Consider embedding external chart tools
   - Export to spreadsheet for complex visualizations

### Maintenance Schedule

**Daily (2 minutes):**
- Log any expenses
- Quick receipt photo upload

**Weekly (10 minutes):**
- Review week's expenses
- Categorize any uncategorized items
- Check upcoming bills

**Monthly (30 minutes):**
- Complete monthly summary
- Update savings goal progress
- Review budget vs actual
- Adjust next month's budget

**Quarterly (1 hour):**
- Deep analysis of spending trends
- Adjust category budgets
- Review and update savings goals
- Tax preparation review

---

## Expected Layout Screenshots

### Main Dashboard
*[Visual: Clean dashboard with four quadrants - top left shows income/expense summary with large numbers, top right shows a progress bar for monthly budget remaining, bottom left displays category breakdown as colored cards, bottom right shows savings goals with progress indicators.]*

### Expense Tracker Table
*[Visual: Spreadsheet-style table with columns for date, description, amount, category (with colored tags), and payment method. Rows alternate in subtle colors for readability.]*

### Category Budget Cards
*[Visual: Gallery view with each category as a card showing icon, name, budget amount, spent amount, and a progress bar. Red/yellow/green indicators show status.]*

### Savings Goals Progress
*[Visual: Large cards showing goal name, target amount, current amount, visual progress bar at 65%, and "Monthly Needed: $250" below.]*

---

## Quick Start Checklist

- [ ] Create main Budget Tracker page
- [ ] Set up Categories database with your budget amounts
- [ ] Create Income database
- [ ] Create Expenses database with category relation
- [ ] Set up Savings Goals
- [ ] Configure Recurring Bills
- [ ] Create Monthly Summary template
- [ ] Build main dashboard with linked views
- [ ] Add your actual categories and budgets
- [ ] Log first week of expenses
- [ ] Complete first monthly review

---

*Template Version 1.0 | Last Updated: 2024*
