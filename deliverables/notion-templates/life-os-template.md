# Life OS - Complete Life Dashboard Template

## Overview
A comprehensive life management system that brings together your goals, habits, tasks, projects, and areas of life into one unified dashboard. Built for intentional living and continuous improvement.

---

## Template Structure

### Master Dashboard Page

```
/Life OS Dashboard
├── /Quick Capture (Inbox)
├── /Goals Hub
├── /Projects Hub
├── /Tasks Hub
├── /Habits Hub
├── /Areas of Life
├── /Weekly Review
├── /Monthly Review
└── /Annual Planning
```

---

## Database #1: Goals Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Goal Name | Title | Name of the goal |
| Status | Select | Not Started, In Progress, On Hold, Completed, Abandoned |
| Priority | Select | P1 (Critical), P2 (High), P3 (Medium), P4 (Low) |
| Goal Type | Select | Health, Career, Financial, Personal, Relationship, Learning |
| Timeframe | Select | Daily, Weekly, Monthly, Quarterly, Annual, Multi-Year |
| Start Date | Date | When you began working on this goal |
| Target Date | Date | Deadline or target completion date |
| Area of Life | Relation | Links to Areas Database |
| Related Projects | Relation | Links to Projects Database |
| Key Results | Relation | Links to Key Results Database |
| Progress | Formula | `round(prop("Completed KRs") / prop("Total KRs") * 100)` |
| Completed KRs | Rollup | Count of completed Key Results |
| Total KRs | Rollup | Count of all Key Results |
| Why This Matters | Text | Your motivation for this goal |
| Success Criteria | Text | How you'll know when it's achieved |
| Obstacles | Text | Potential challenges to anticipate |
| Resources Needed | Text | What you need to achieve this |
| Last Reviewed | Date | Date of last review |

### Views

1. **All Goals (Table)**
   - Show all properties
   - Sort by Priority, then Status
   - Filter: Status is not "Abandoned"

2. **Active Goals (Board)**
   - Group by: Status
   - Show: Goal Name, Progress, Target Date
   - Filter: Status is "In Progress"

3. **Goals by Area (Board)**
   - Group by: Goal Type
   - Show: Goal Name, Status, Progress

4. **Goals Timeline (Timeline)**
   - Timeline by: Start Date → Target Date
   - Show: Goal Name, Status

5. **Quarterly Goals (Table)**
   - Filter: Timeframe is "Quarterly"
   - Sort by: Target Date

---

## Database #2: Key Results Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Key Result | Title | Specific measurable outcome |
| Parent Goal | Relation | Links to Goals Database |
| Status | Select | Not Started, In Progress, Completed |
| Metric Type | Select | Number, Percentage, Yes/No, Currency |
| Starting Value | Number | Where you started |
| Current Value | Number | Where you are now |
| Target Value | Number | Where you want to be |
| Progress % | Formula | `round((prop("Current Value") - prop("Starting Value")) / (prop("Target Value") - prop("Starting Value")) * 100)` |
| Due Date | Date | When this should be completed |
| Evidence | Files & Media | Proof of completion |
| Notes | Text | Additional context |

### Views

1. **All Key Results (Table)**
   - Sort by: Due Date
   - Group by: Parent Goal

2. **KR Progress (Board)**
   - Group by: Status
   - Show: Progress %

---

## Database #3: Projects Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Project Name | Title | Name of the project |
| Status | Select | Backlog, Planning, Active, On Hold, Completed, Archived |
| Priority | Select | P1, P2, P3, P4 |
| Area | Relation | Links to Areas Database |
| Related Goal | Relation | Links to Goals Database |
| Tasks | Relation | Links to Tasks Database |
| Start Date | Date | Project start date |
| Due Date | Date | Project deadline |
| Completed Date | Date | Actual completion date |
| Task Progress | Formula | `round(prop("Completed Tasks") / prop("Total Tasks") * 100)` |
| Completed Tasks | Rollup | Count where Status is "Done" |
| Total Tasks | Rollup | Count all tasks |
| Owner | Person | Who's responsible |
| Collaborators | Person (Multi) | Team members |
| Project Brief | Text | Description and scope |
| Success Criteria | Text | Definition of done |
| Resources | URL | Links to resources |
| Files | Files & Media | Project files |
| Notes | Text | Project notes |

### Views

1. **Active Projects (Board)**
   - Group by: Status
   - Filter: Status is not "Archived"
   - Show: Project Name, Priority, Task Progress, Due Date

2. **Projects by Area (Board)**
   - Group by: Area
   - Show: Status, Priority

3. **Project Timeline (Timeline)**
   - Timeline by: Start Date → Due Date
   - Show: Status, Priority

4. **My Projects (Table)**
   - Filter: Owner contains Me
   - Sort by: Priority, then Due Date

5. **Completed Projects (Gallery)**
   - Filter: Status is "Completed"
   - Show: Completed Date

---

## Database #4: Tasks Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Task | Title | Task name |
| Status | Select | Inbox, To Do, In Progress, Waiting, Done |
| Priority | Select | Urgent & Important, Important, Urgent, Neither |
| Energy Level | Select | High Energy, Medium Energy, Low Energy |
| Time Required | Select | 5 min, 15 min, 30 min, 1 hour, 2+ hours |
| Project | Relation | Links to Projects Database |
| Area | Relation | Links to Areas Database |
| Goal | Relation | Links to Goals Database |
| Due Date | Date | When task is due |
| Scheduled Date | Date | When you plan to do it |
| Completed Date | Date | When it was completed |
| Recurring | Checkbox | Is this a recurring task? |
| Recurrence | Select | Daily, Weekly, Bi-weekly, Monthly |
| Context | Multi-select | @Home, @Work, @Computer, @Phone, @Errands, @Anywhere |
| Delegated To | Person | Who's this assigned to |
| Waiting On | Text | What/who are you waiting on |
| Notes | Text | Additional details |
| Subtasks | Text | Checklist of subtasks |

### Formulas

**Days Until Due:**
```
if(empty(prop("Due Date")), "",
  dateBetween(prop("Due Date"), now(), "days"))
```

**Overdue:**
```
if(and(not(empty(prop("Due Date"))),
       prop("Due Date") < now(),
       prop("Status") != "Done"),
   true, false)
```

### Views

1. **Inbox (Table)**
   - Filter: Status is "Inbox"
   - Sort by: Created time (newest)

2. **Today (Table)**
   - Filter: Scheduled Date is Today OR (Due Date is Today AND Status is not Done)
   - Sort by: Priority

3. **This Week (Table)**
   - Filter: Scheduled Date is within This Week
   - Sort by: Scheduled Date, then Priority

4. **Eisenhower Matrix (Board)**
   - Group by: Priority
   - Filter: Status is not "Done"

5. **By Project (Table)**
   - Group by: Project
   - Sort by: Status

6. **By Context (Board)**
   - Group by: Context
   - Filter: Status is "To Do"

7. **Waiting On (Table)**
   - Filter: Status is "Waiting"

8. **Done (Table)**
   - Filter: Status is "Done"
   - Sort by: Completed Date (newest)

---

## Database #5: Habits Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Habit Name | Title | Name of the habit |
| Category | Select | Health, Productivity, Learning, Mindfulness, Social, Creative |
| Frequency | Select | Daily, Weekdays, Weekends, Weekly, Monthly |
| Time of Day | Select | Morning, Afternoon, Evening, Anytime |
| Duration | Select | 5 min, 15 min, 30 min, 1 hour |
| Cue | Text | What triggers this habit |
| Routine | Text | The actual habit |
| Reward | Text | How you reward yourself |
| Related Goal | Relation | Links to Goals Database |
| Status | Select | Active, Paused, Retired |
| Start Date | Date | When you started tracking |
| Current Streak | Number | Days in current streak |
| Best Streak | Number | Longest streak achieved |
| Total Completions | Rollup | Sum from Habit Log |
| Completion Rate | Formula | Calculated from log |
| Notes | Text | Tips for success |

### Views

1. **Active Habits (Table)**
   - Filter: Status is "Active"
   - Sort by: Category

2. **Daily Dashboard (Board)**
   - Group by: Time of Day
   - Filter: Frequency is "Daily" AND Status is "Active"

3. **Habit Streaks (Table)**
   - Show: Habit Name, Current Streak, Best Streak
   - Sort by: Current Streak (descending)

---

## Database #6: Habit Log Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Entry | Title | Auto-generated date + habit |
| Habit | Relation | Links to Habits Database |
| Date | Date | Date of entry |
| Completed | Checkbox | Did you complete it? |
| Notes | Text | Reflection or notes |
| Mood | Select | Great, Good, Okay, Struggling |
| Difficulty | Select | Easy, Normal, Hard |

### Views

1. **Daily Log (Table)**
   - Filter: Date is Today
   - Sort by: Habit

2. **Weekly Overview (Calendar)**
   - Show by: Date
   - Color by: Completed

3. **Monthly Analysis (Table)**
   - Group by: Habit
   - Show rollup stats

---

## Database #7: Areas of Life Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Area Name | Title | Name of life area |
| Icon | Text | Emoji for the area |
| Description | Text | What this area encompasses |
| Status | Select | Thriving, Maintaining, Needs Work, Crisis |
| Goals | Relation | Links to Goals Database |
| Projects | Relation | Links to Projects Database |
| Current Focus | Text | What you're focusing on |
| Last Reviewed | Date | When you last evaluated this |
| Satisfaction | Select | 1-10 rating |
| Notes | Text | Reflections |

### Suggested Areas

1. Health & Fitness
2. Career & Work
3. Finances
4. Relationships
5. Personal Growth
6. Fun & Recreation
7. Physical Environment
8. Family
9. Spirituality
10. Contribution/Legacy

### Views

1. **Life Wheel (Board)**
   - Group by: Status
   - Show: Satisfaction

2. **Area Overview (Gallery)**
   - Show: Icon, Status, Satisfaction

---

## Template Pages

### Weekly Review Template

```markdown
# Weekly Review - [Week of Date]

## Part 1: Review (15 minutes)

### What went well this week?
-

### What didn't go as planned?
-

### What did I learn?
-

### Wins to celebrate:
-

## Part 2: Metrics Check

### Habits
- Completion rate: ___%
- Best habit this week:
- Habit needing attention:

### Goals Progress
- Goal 1: ___%
- Goal 2: ___%
- Goal 3: ___%

### Projects
- Completed:
- In Progress:
- Blocked:

## Part 3: Plan Next Week (15 minutes)

### Top 3 priorities:
1.
2.
3.

### Key tasks to complete:
- [ ]
- [ ]
- [ ]

### Appointments & commitments:
-

### Self-care planned:
-

## Part 4: Alignment Check

### Am I moving toward my goals?
-

### What needs to change?
-

### One thing to improve next week:
-
```

### Monthly Review Template

```markdown
# Monthly Review - [Month Year]

## Reflection

### Theme of this month:

### Biggest accomplishment:

### Biggest challenge:

### What I'm grateful for:
1.
2.
3.

## Goal Progress

| Goal | Start of Month | End of Month | Notes |
|------|---------------|--------------|-------|
|      |               |              |       |

## Life Area Check-in

| Area | Satisfaction (1-10) | Notes |
|------|---------------------|-------|
| Health | | |
| Career | | |
| Finances | | |
| Relationships | | |
| Personal Growth | | |
| Fun & Recreation | | |

## Financial Summary
- Income: $
- Expenses: $
- Saved: $
- Net Worth Change: $

## Habit Analysis
- Best performing habit:
- Habit to improve:
- New habit to add:
- Habit to remove:

## Next Month Planning

### Focus areas:
1.
2.

### Goals for next month:
1.
2.
3.

### Projects to complete:
1.
2.

### Events & commitments:
-
```

### Annual Planning Template

```markdown
# Annual Planning - [Year]

## Year in Review (Previous Year)

### Major accomplishments:
1.
2.
3.
4.
5.

### Challenges overcome:
1.
2.
3.

### Lessons learned:
1.
2.
3.

### What I'm letting go of:
-

## Vision for [New Year]

### One word/theme for the year:

### What does my ideal year look like?

### Who do I want to become?

## Annual Goals

### Health & Fitness
-

### Career & Work
-

### Finances
-

### Relationships
-

### Personal Growth
-

### Fun & Adventure
-

## Quarterly Breakdown

### Q1 (Jan-Mar) Focus:
-

### Q2 (Apr-Jun) Focus:
-

### Q3 (Jul-Sep) Focus:
-

### Q4 (Oct-Dec) Focus:
-

## Keystone Habits for the Year
1.
2.
3.

## Skills to Develop
1.
2.
3.

## Books to Read
1.
2.
3.
4.
5.

## Places to Visit
1.
2.
3.

## Financial Targets
- Income goal: $
- Savings goal: $
- Investment goal: $
- Debt payoff: $

## Review Schedule
- Weekly review: Every Sunday
- Monthly review: First weekend of each month
- Quarterly review: End of each quarter
- Annual review: Last week of December
```

---

## Setup Instructions

### Step 1: Create the Databases
1. Create a new page called "Life OS Dashboard"
2. Add each database as a sub-page or inline database
3. Configure all properties exactly as specified above

### Step 2: Set Up Relations
1. Link Goals ↔ Areas (bi-directional)
2. Link Goals ↔ Projects (bi-directional)
3. Link Goals ↔ Key Results (bi-directional)
4. Link Projects ↔ Tasks (bi-directional)
5. Link Projects ↔ Areas (bi-directional)
6. Link Habits ↔ Goals (bi-directional)
7. Link Habit Log ↔ Habits (bi-directional)

### Step 3: Create Views
1. Create all specified views for each database
2. Set up filters and sorts as described
3. Arrange views in logical order

### Step 4: Build the Dashboard
Create a master dashboard page with:
- Quick links to each hub
- Embedded views showing:
  - Today's tasks
  - Active habits
  - Active goals with progress
  - Current projects
- Calendar showing upcoming deadlines

### Step 5: Create Template Buttons
1. In Tasks database, create templates for different task types
2. In Goals database, create templates for different goal types
3. Set up recurring task templates

### Step 6: Import Your Data
1. Start with Areas of Life
2. Add your current goals
3. Import or create projects
4. Add tasks to projects
5. Set up your habits

---

## Advanced Features

### Automations (if using Notion API)

1. **Daily Task Creation**
   - Auto-create recurring tasks each day

2. **Streak Tracking**
   - Auto-update habit streaks based on log

3. **Weekly Review Reminder**
   - Create new weekly review page each Sunday

### Dashboard Widgets

Use linked databases with filtered views to create:
- Focus Panel (today's priorities)
- Progress Rings (goal completion)
- Streak Counter (habit streaks)
- Quick Capture button
- Upcoming deadlines list

---

## Tips for Success

1. **Start Small**: Don't try to use everything at once. Begin with tasks and one goal.

2. **Weekly Review is Key**: Schedule 30 minutes every week to review and plan.

3. **Inbox Zero**: Process your inbox daily. Every item should be deleted, delegated, scheduled, or done.

4. **One Active Goal Per Area**: Don't overwhelm yourself. Focus on one goal per life area.

5. **Track Habits Daily**: The habit tracker only works if you use it consistently.

6. **Archive, Don't Delete**: Keep completed items for reflection and data.

7. **Customize**: Modify this system to fit YOUR life. Add/remove what doesn't serve you.

---

## Support

For questions, customization help, or to share your setup, contact: [Your Email]

Version 1.0 | Last Updated: [Date]
