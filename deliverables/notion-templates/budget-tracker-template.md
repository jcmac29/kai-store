# Budget Tracker - Complete Financial Management Template

## Overview
A comprehensive personal finance system to track income, expenses, savings goals, investments, and net worth. Includes monthly budgets, spending analytics, and financial goal tracking.

---

## Template Structure

```
/Budget Tracker
├── /Dashboard
├── /Transactions
├── /Monthly Budgets
├── /Accounts
├── /Categories
├── /Savings Goals
├── /Recurring Transactions
├── /Debt Tracker
├── /Net Worth
└── /Financial Goals
```

---

## Database #1: Transactions Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Description | Title | What the transaction was for |
| Amount | Number | Transaction amount (positive) |
| Type | Select | Income, Expense, Transfer |
| Date | Date | Transaction date |
| Category | Relation | Links to Categories Database |
| Subcategory | Relation | Links to Subcategories |
| Account | Relation | Links to Accounts Database |
| To Account | Relation | For transfers only |
| Payment Method | Select | Cash, Debit, Credit, Bank Transfer, Digital Wallet |
| Recurring | Relation | Links to Recurring Transactions |
| Month | Formula | `formatDate(prop("Date"), "YYYY-MM")` |
| Year | Formula | `formatDate(prop("Date"), "YYYY")` |
| Week | Formula | `formatDate(prop("Date"), "YYYY-[W]WW")` |
| Day of Week | Formula | `formatDate(prop("Date"), "dddd")` |
| Merchant/Source | Text | Where money came from or went to |
| Notes | Text | Additional details |
| Tags | Multi-select | Discretionary, Essential, Business, Personal, Tax Deductible |
| Receipt | Files & Media | Upload receipts |
| Verified | Checkbox | Confirmed/reconciled |

### Formulas

**Signed Amount (for calculations):**
```
if(prop("Type") == "Expense", prop("Amount") * -1,
  if(prop("Type") == "Income", prop("Amount"), 0))
```

**Is This Month:**
```
formatDate(prop("Date"), "YYYY-MM") == formatDate(now(), "YYYY-MM")
```

### Views

1. **All Transactions (Table)**
   - Sort by: Date (newest first)
   - Show: Description, Amount, Type, Category, Account, Date

2. **This Month (Table)**
   - Filter: Date is within This Month
   - Sort by: Date (newest)
   - Show summary at bottom

3. **Income Only (Table)**
   - Filter: Type is "Income"
   - Group by: Category
   - Sort by: Date

4. **Expenses Only (Table)**
   - Filter: Type is "Expense"
   - Group by: Category
   - Sort by: Date

5. **By Category (Board)**
   - Group by: Category
   - Filter: Type is "Expense", Date is This Month

6. **Calendar View (Calendar)**
   - Show by: Date
   - Show: Amount, Type

7. **Unverified (Table)**
   - Filter: Verified is not checked
   - Sort by: Date

8. **Search (Table)**
   - All filters visible for searching

---

## Database #2: Categories Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Category Name | Title | Name of the category |
| Type | Select | Income, Expense |
| Icon | Text | Emoji icon |
| Color | Select | Red, Orange, Yellow, Green, Blue, Purple, Pink, Gray |
| Budget Amount | Number | Monthly budget for this category |
| Parent Category | Relation | For subcategories |
| Subcategories | Relation | Links to child categories |
| Transactions | Relation | Links to Transactions |
| This Month Spent | Rollup | Sum of transactions this month |
| Budget Remaining | Formula | `prop("Budget Amount") - prop("This Month Spent")` |
| Budget % Used | Formula | `round(prop("This Month Spent") / prop("Budget Amount") * 100)` |
| Is Essential | Checkbox | Essential vs discretionary |
| Notes | Text | Category notes |

### Suggested Expense Categories

| Category | Icon | Subcategories |
|----------|------|---------------|
| Housing | house | Rent/Mortgage, Utilities, Insurance, Maintenance, Property Tax |
| Transportation | car | Gas, Public Transit, Car Payment, Insurance, Maintenance, Parking |
| Food | fork_and_knife | Groceries, Restaurants, Coffee, Delivery |
| Healthcare | heart | Insurance, Doctor, Pharmacy, Dental, Vision, Mental Health |
| Personal | person | Clothing, Haircuts, Personal Care, Gym |
| Entertainment | movie_camera | Streaming, Movies, Games, Events, Hobbies |
| Shopping | shopping_cart | Amazon, Electronics, Home Goods, Gifts |
| Education | book | Courses, Books, Certifications, Tutoring |
| Subscriptions | arrows_counterclockwise | Software, Apps, Memberships |
| Debt Payments | credit_card | Credit Cards, Student Loans, Personal Loans |
| Savings | piggy_bank | Emergency Fund, Investments, Retirement |
| Miscellaneous | sparkles | Other, Uncategorized |

### Suggested Income Categories

| Category | Icon | Subcategories |
|----------|------|---------------|
| Salary | briefcase | Base Pay, Bonus, Commission |
| Freelance | computer | Consulting, Projects, Gigs |
| Investments | chart_increasing | Dividends, Interest, Capital Gains |
| Side Business | store | Sales, Services |
| Other Income | money_bag | Gifts, Refunds, Cash Back |

### Views

1. **All Categories (Table)**
   - Sort by: Type, then Name

2. **Expense Categories (Board)**
   - Filter: Type is "Expense"
   - Group by: Is Essential
   - Show: Budget Amount, This Month Spent

3. **Budget Overview (Table)**
   - Filter: Budget Amount > 0
   - Show: Budget Amount, This Month Spent, Budget Remaining, Budget % Used

---

## Database #3: Monthly Budgets Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Month | Title | Format: "January 2024" |
| Month Date | Date | First day of month |
| Total Income Goal | Number | Expected income |
| Total Expense Budget | Number | Total expense budget |
| Actual Income | Rollup | Sum of income transactions |
| Actual Expenses | Rollup | Sum of expense transactions |
| Net Income | Formula | `prop("Actual Income") - prop("Actual Expenses")` |
| Savings Rate | Formula | `round(prop("Net Income") / prop("Actual Income") * 100)` |
| Budget vs Actual | Formula | `prop("Total Expense Budget") - prop("Actual Expenses")` |
| Income vs Goal | Formula | `prop("Actual Income") - prop("Total Income Goal")` |
| Status | Select | Planning, Active, Closed |
| Notes | Text | Monthly notes |
| Highlights | Text | Key events this month |
| Lessons Learned | Text | What to improve |

### Category Budget Tracker (Embedded Database)

For each month, include an embedded database or repeating property group:

| Category | Budgeted | Actual | Remaining | % Used |
|----------|----------|--------|-----------|--------|
| Housing  | $1,500   | $1,500 | $0        | 100%   |
| Food     | $600     | $450   | $150      | 75%    |
| ...      | ...      | ...    | ...       | ...    |

### Views

1. **All Months (Table)**
   - Sort by: Month Date (newest)

2. **This Year (Table)**
   - Filter: Month Date is This Year

3. **Budget Analysis (Table)**
   - Show: Net Income, Savings Rate, Budget vs Actual

---

## Database #4: Accounts Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Account Name | Title | Name of the account |
| Type | Select | Checking, Savings, Credit Card, Investment, Cash, Crypto, Other |
| Institution | Text | Bank or institution name |
| Account Number | Text | Last 4 digits (for reference) |
| Starting Balance | Number | Balance when tracking began |
| Current Balance | Number | Current balance (manual or calculated) |
| Calculated Balance | Formula | Starting Balance + Sum of transactions |
| Credit Limit | Number | For credit cards |
| Available Credit | Formula | `prop("Credit Limit") - prop("Current Balance")` |
| Interest Rate | Number | APR/APY percentage |
| Minimum Payment | Number | For credit cards/loans |
| Due Date | Number | Day of month payment is due |
| Is Active | Checkbox | Currently using this account |
| Notes | Text | Account notes |
| Color | Select | For visual distinction |

### Views

1. **All Accounts (Table)**
   - Sort by: Type, then Name
   - Show: Current Balance, Type

2. **Active Accounts (Board)**
   - Filter: Is Active is checked
   - Group by: Type
   - Show: Current Balance

3. **Net Worth View (Table)**
   - Calculate: Total Assets - Total Liabilities

4. **Credit Cards (Table)**
   - Filter: Type is "Credit Card"
   - Show: Current Balance, Credit Limit, Available Credit, Due Date

---

## Database #5: Savings Goals Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Goal Name | Title | Name of the savings goal |
| Target Amount | Number | How much you want to save |
| Current Amount | Number | How much saved so far |
| Remaining | Formula | `prop("Target Amount") - prop("Current Amount")` |
| Progress % | Formula | `round(prop("Current Amount") / prop("Target Amount") * 100)` |
| Target Date | Date | When you want to reach the goal |
| Monthly Contribution | Number | How much to save per month |
| Required Monthly | Formula | `prop("Remaining") / dateBetween(prop("Target Date"), now(), "months")` |
| Account | Relation | Where the money is saved |
| Priority | Select | High, Medium, Low |
| Status | Select | Not Started, In Progress, Completed, Paused |
| Category | Select | Emergency Fund, Travel, Purchase, Education, Other |
| Icon | Text | Emoji for the goal |
| Notes | Text | Why this goal matters |
| Contributions | Relation | Links to contribution tracking |

### Formulas

**Months to Goal:**
```
ceil(prop("Remaining") / prop("Monthly Contribution"))
```

**Projected Completion:**
```
dateAdd(now(), prop("Months to Goal"), "months")
```

**On Track:**
```
if(prop("Required Monthly") <= prop("Monthly Contribution"), "Yes", "No")
```

### Views

1. **All Goals (Table)**
   - Sort by: Priority

2. **Active Goals (Board)**
   - Filter: Status is "In Progress"
   - Show: Progress %, Current Amount, Target Amount

3. **Goal Progress (Gallery)**
   - Show: Progress bar visualization
   - Sort by: Progress % descending

4. **Completed Goals (Table)**
   - Filter: Status is "Completed"

---

## Database #6: Recurring Transactions Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Name | Title | Name of recurring transaction |
| Amount | Number | Transaction amount |
| Type | Select | Income, Expense |
| Frequency | Select | Weekly, Bi-weekly, Monthly, Quarterly, Annually |
| Category | Relation | Links to Categories |
| Account | Relation | Links to Accounts |
| Start Date | Date | When it started |
| End Date | Date | When it ends (if applicable) |
| Next Due | Date | Next occurrence |
| Day of Month | Number | For monthly transactions |
| Auto-Pay | Checkbox | Is this auto-paid? |
| Status | Select | Active, Paused, Cancelled |
| Merchant | Text | Who you pay/receive from |
| Notes | Text | Additional details |
| Annual Total | Formula | Calculate based on frequency |

### Formulas

**Annual Total:**
```
if(prop("Frequency") == "Weekly", prop("Amount") * 52,
  if(prop("Frequency") == "Bi-weekly", prop("Amount") * 26,
    if(prop("Frequency") == "Monthly", prop("Amount") * 12,
      if(prop("Frequency") == "Quarterly", prop("Amount") * 4,
        prop("Amount")))))
```

### Views

1. **All Recurring (Table)**
   - Sort by: Next Due

2. **Bills Calendar (Calendar)**
   - Show by: Next Due
   - Filter: Type is "Expense"

3. **Monthly Bills (Table)**
   - Filter: Frequency is "Monthly"
   - Sort by: Day of Month

4. **Income Streams (Table)**
   - Filter: Type is "Income"
   - Show: Annual Total

---

## Database #7: Debt Tracker Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Debt Name | Title | Name of the debt |
| Type | Select | Credit Card, Student Loan, Car Loan, Mortgage, Personal Loan, Medical, Other |
| Original Amount | Number | Starting balance |
| Current Balance | Number | Current balance |
| Interest Rate | Number | APR percentage |
| Minimum Payment | Number | Minimum monthly payment |
| Actual Payment | Number | What you actually pay |
| Due Date | Number | Day of month |
| Account/Lender | Text | Who you owe |
| Start Date | Date | When debt was acquired |
| Paid Off Date | Date | When it was paid off |
| Status | Select | Active, Paid Off |
| Priority | Select | High, Medium, Low |
| Snowball Order | Number | Order in debt snowball |
| Notes | Text | Additional details |

### Formulas

**Paid Off %:**
```
round((prop("Original Amount") - prop("Current Balance")) / prop("Original Amount") * 100)
```

**Monthly Interest:**
```
round(prop("Current Balance") * prop("Interest Rate") / 100 / 12 * 100) / 100
```

**Principal This Month:**
```
prop("Actual Payment") - prop("Monthly Interest")
```

**Months to Payoff:**
```
// Simplified - actual calculation more complex
ceil(prop("Current Balance") / (prop("Actual Payment") - prop("Monthly Interest")))
```

### Views

1. **All Debts (Table)**
   - Sort by: Interest Rate (descending) for Avalanche
   - Or: Current Balance (ascending) for Snowball

2. **Debt Snowball (Table)**
   - Sort by: Current Balance (ascending)
   - Show: Minimum Payment, Actual Payment

3. **Debt Avalanche (Table)**
   - Sort by: Interest Rate (descending)

4. **Payoff Progress (Gallery)**
   - Show: Progress bars

---

## Database #8: Net Worth Tracker Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Date | Title | Month/Year |
| Record Date | Date | Date of record |
| Total Assets | Number | Sum of all assets |
| Total Liabilities | Number | Sum of all debts |
| Net Worth | Formula | `prop("Total Assets") - prop("Total Liabilities")` |
| Change from Last | Formula | Compare to previous record |
| Change % | Formula | Percentage change |
| Cash & Checking | Number | Liquid cash |
| Savings | Number | Savings accounts |
| Investments | Number | Brokerage accounts |
| Retirement | Number | 401k, IRA, etc. |
| Real Estate | Number | Property value |
| Other Assets | Number | Vehicles, valuables |
| Credit Card Debt | Number | Total CC balance |
| Student Loans | Number | Student loan balance |
| Mortgage | Number | Mortgage balance |
| Other Debt | Number | Other liabilities |
| Notes | Text | Notable changes |

### Views

1. **Net Worth History (Table)**
   - Sort by: Record Date (newest)

2. **Monthly Timeline (Timeline)**
   - Track net worth over time

3. **Asset Breakdown (Table)**
   - Show: All asset columns

---

## Dashboard Layout

### Top Section: Summary Cards
```
+------------------+------------------+------------------+------------------+
|   This Month     |   This Month     |    Net Income    |   Savings Rate   |
|     Income       |    Expenses      |                  |                  |
|    $X,XXX        |     $X,XXX       |     $X,XXX       |      XX%         |
+------------------+------------------+------------------+------------------+
```

### Middle Section: Charts & Progress
```
+--------------------------------+--------------------------------+
|    Spending by Category        |    Monthly Trend               |
|    (Pie Chart View)            |    (Income vs Expenses)        |
+--------------------------------+--------------------------------+
|    Budget Progress             |    Savings Goals               |
|    (Progress Bars)             |    (Progress Cards)            |
+--------------------------------+--------------------------------+
```

### Bottom Section: Quick Actions & Lists
```
+--------------------------------+--------------------------------+
|    Recent Transactions         |    Upcoming Bills              |
|    (Last 10)                   |    (Next 7 days)               |
+--------------------------------+--------------------------------+
|    Quick Add Transaction       |    Account Balances            |
+--------------------------------+--------------------------------+
```

---

## Template Pages

### Monthly Budget Planning Template

```markdown
# Monthly Budget - [Month Year]

## Income Plan
| Source | Expected | Notes |
|--------|----------|-------|
| Salary | $X,XXX | After tax |
| Side Income | $XXX | |
| Other | $XXX | |
| **Total** | **$X,XXX** | |

## Fixed Expenses
| Category | Amount | Due Date | Auto-Pay |
|----------|--------|----------|----------|
| Rent/Mortgage | $X,XXX | 1st | Yes |
| Utilities | $XXX | 15th | No |
| Insurance | $XXX | 1st | Yes |
| Subscriptions | $XXX | Various | Yes |
| **Total** | **$X,XXX** | | |

## Variable Expenses Budget
| Category | Budget | Priority |
|----------|--------|----------|
| Groceries | $XXX | Essential |
| Dining Out | $XXX | Discretionary |
| Transportation | $XXX | Essential |
| Entertainment | $XXX | Discretionary |
| Shopping | $XXX | Discretionary |
| Personal Care | $XXX | Essential |
| **Total** | **$X,XXX** | |

## Savings Allocation
| Goal | Amount | Remaining to Goal |
|------|--------|-------------------|
| Emergency Fund | $XXX | $X,XXX |
| Vacation | $XXX | $XXX |
| Other | $XXX | $XXX |
| **Total** | **$XXX** | |

## Summary
- Expected Income: $X,XXX
- Total Expenses: $X,XXX
- Planned Savings: $XXX
- Remaining: $XXX

## Notes & Reminders
-
```

### Year-End Financial Review Template

```markdown
# Annual Financial Review - [Year]

## Summary
| Metric | This Year | Last Year | Change |
|--------|-----------|-----------|--------|
| Total Income | $XX,XXX | $XX,XXX | +X% |
| Total Expenses | $XX,XXX | $XX,XXX | +X% |
| Net Savings | $XX,XXX | $XX,XXX | +X% |
| Savings Rate | XX% | XX% | +X% |
| Net Worth | $XXX,XXX | $XX,XXX | +X% |

## Income Breakdown
| Source | Amount | % of Total |
|--------|--------|------------|
| Salary | $XX,XXX | XX% |
| Freelance | $X,XXX | XX% |
| Investments | $X,XXX | XX% |
| Other | $XXX | XX% |

## Top Expense Categories
| Category | Amount | % of Total | vs Budget |
|----------|--------|------------|-----------|
| Housing | $XX,XXX | XX% | On budget |
| Food | $X,XXX | XX% | Over |
| Transportation | $X,XXX | XX% | Under |
| ... | | | |

## Savings Goals Progress
| Goal | Target | Achieved | Status |
|------|--------|----------|--------|
| Emergency Fund | $X,XXX | $X,XXX | Complete |
| Vacation | $X,XXX | $XXX | In Progress |
| ... | | | |

## Debt Progress
| Debt | Starting | Ending | Paid Off |
|------|----------|--------|----------|
| Credit Card | $X,XXX | $XXX | $X,XXX |
| Student Loans | $XX,XXX | $XX,XXX | $X,XXX |
| ... | | | |

## Net Worth Progression
- January: $XX,XXX
- June: $XX,XXX
- December: $XXX,XXX
- Total Growth: $XX,XXX (+XX%)

## Wins
1.
2.
3.

## Areas to Improve
1.
2.
3.

## Next Year Goals
1.
2.
3.
```

---

## Formulas Reference

### Calculate Monthly Total for Category
```
// In Transactions, rollup to category where month matches
round(sum(prop("Monthly Transactions")))
```

### Budget Remaining with Color
```
if(prop("Budget Remaining") > 0,
   "Under Budget: $" + format(prop("Budget Remaining")),
   "Over Budget: $" + format(abs(prop("Budget Remaining"))))
```

### Days Until Bill Due
```
if(empty(prop("Due Date")), "",
  if(prop("Due Date") > today(),
     dateBetween(prop("Due Date"), today(), "days") + " days",
     "OVERDUE"))
```

### Spending Pace (Are you on track mid-month?)
```
// Budget per day vs actual per day
let(budgetPerDay, prop("Budget") / 30,
let(spentPerDay, prop("Spent") / toNumber(formatDate(now(), "D")),
if(spentPerDay > budgetPerDay, "Overspending", "On Track")))
```

---

## Setup Instructions

### Step 1: Initial Setup
1. Duplicate this template to your Notion workspace
2. Go to Accounts database and add all your accounts
3. Set starting balances for each account
4. Add your income and expense categories

### Step 2: Configure Categories
1. Review suggested categories and customize
2. Set monthly budgets for each expense category
3. Mark which categories are essential vs discretionary

### Step 3: Set Up Recurring Transactions
1. Add all monthly bills to Recurring Transactions
2. Add income sources (salary, etc.)
3. Set up due dates and auto-pay flags

### Step 4: Import Historical Data (Optional)
1. Export transactions from your bank
2. Format as CSV with matching columns
3. Import into Transactions database
4. Review and categorize

### Step 5: Create Monthly Budgets
1. Create a new entry in Monthly Budgets for current month
2. Set income goals and expense budgets
3. Copy template for future months

### Step 6: Set Up Savings Goals
1. Define your savings priorities
2. Create goals with target amounts and dates
3. Determine monthly contribution amounts

### Step 7: Track Net Worth
1. Add current month to Net Worth Tracker
2. Record all asset and liability values
3. Schedule monthly updates

---

## Tips for Success

1. **Daily Habit**: Log transactions daily, or at minimum every 2-3 days
2. **Use Mobile**: Add transactions immediately via Notion mobile app
3. **Weekly Check-in**: Review spending vs budget weekly
4. **Reconcile Monthly**: Match transactions with bank statements
5. **Automate Where Possible**: Set up auto-pay for bills
6. **Review Categories Quarterly**: Adjust budgets based on actual spending
7. **Keep Receipts**: Upload photos for large purchases

---

## Support

For questions or customization help, contact: [Your Email]

Version 1.0 | Last Updated: [Date]
