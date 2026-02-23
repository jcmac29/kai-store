# Habit Tracker - Daily Habits with Streaks and Analytics

## Overview
A powerful habit tracking system designed to help you build and maintain positive habits. Features daily tracking, streak counting, analytics, and insights to keep you motivated and on track.

---

## Template Structure

```
/Habit Tracker
├── /Dashboard
├── /Habits Library
├── /Daily Log
├── /Weekly View
├── /Monthly Analytics
├── /Streak Hall of Fame
├── /Habit Stacks
└── /Archive
```

---

## Database #1: Habits Library Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Habit Name | Title | Name of the habit |
| Icon | Text | Emoji representation |
| Category | Select | Health, Productivity, Learning, Mindfulness, Social, Creative, Financial |
| Type | Select | Build (positive) or Break (negative) |
| Frequency | Select | Daily, Weekdays, Weekends, Mon/Wed/Fri, Tue/Thu, Weekly, Custom |
| Custom Days | Multi-select | Mon, Tue, Wed, Thu, Fri, Sat, Sun |
| Time of Day | Select | Morning, Afternoon, Evening, Anytime |
| Duration/Amount | Text | How long or how much (e.g., "30 minutes", "8 glasses") |
| Cue | Text | What triggers this habit |
| Routine | Text | The actual behavior |
| Reward | Text | Immediate reward after completing |
| Why | Text | Your motivation for this habit |
| Status | Select | Active, Paused, Completed, Archived |
| Start Date | Date | When you started tracking |
| End Date | Date | For temporary habits |
| Current Streak | Number | Current consecutive days |
| Best Streak | Number | All-time best streak |
| Total Completions | Rollup | Sum from daily log |
| Completion Rate | Formula | Percentage of successful days |
| Last Completed | Date | Most recent completion |
| Related Goal | Relation | Links to Goals (if applicable) |
| Habit Stack | Relation | Links to Habit Stacks |
| Difficulty | Select | Easy, Medium, Hard, Very Hard |
| Impact | Select | Low, Medium, High, Life-Changing |
| Notes | Text | Tips and strategies |

### Formulas

**Days Active:**
```
dateBetween(now(), prop("Start Date"), "days")
```

**Completion Rate:**
```
round(prop("Total Completions") / prop("Days Active") * 100)
```

**Streak Status:**
```
if(prop("Current Streak") >= 66, "Habit Formed!",
  if(prop("Current Streak") >= 30, "Strong Progress",
    if(prop("Current Streak") >= 14, "Building Momentum",
      if(prop("Current Streak") >= 7, "Getting Started",
        if(prop("Current Streak") >= 1, "Keep Going",
          "Start Today!")))))
```

**Days Since Last:**
```
if(empty(prop("Last Completed")), "Never",
  dateBetween(now(), prop("Last Completed"), "days"))
```

### Views

1. **Active Habits (Table)**
   - Filter: Status is "Active"
   - Sort by: Category, then Time of Day

2. **Daily Dashboard (Board)**
   - Filter: Status is "Active"
   - Group by: Time of Day
   - Show: Icon, Current Streak

3. **By Category (Board)**
   - Group by: Category
   - Filter: Status is "Active"

4. **Streak Leaderboard (Table)**
   - Filter: Status is "Active"
   - Sort by: Current Streak (descending)
   - Show: Current Streak, Best Streak, Completion Rate

5. **Needs Attention (Table)**
   - Filter: Current Streak is 0 AND Status is "Active"

6. **Paused Habits (Table)**
   - Filter: Status is "Paused"

7. **Hall of Fame (Gallery)**
   - Filter: Best Streak >= 30
   - Sort by: Best Streak (descending)

---

## Database #2: Daily Log Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Entry | Title | Auto: Habit Name + Date |
| Habit | Relation | Links to Habits Library |
| Date | Date | Date of entry |
| Completed | Checkbox | Did you complete it? |
| Partial | Checkbox | Partial completion |
| Amount/Duration | Number | Quantity completed |
| Unit | Text | Unit of measurement |
| Quality | Select | Poor, Fair, Good, Great, Excellent |
| Time Completed | Text | When you did it |
| Notes | Text | Reflections or notes |
| Obstacles | Text | What made it difficult |
| Skip Reason | Select | Sick, Travel, Rest Day, Life Happened, No Excuse |
| Mood Before | Select | 1, 2, 3, 4, 5 |
| Mood After | Select | 1, 2, 3, 4, 5 |
| Mood Change | Formula | After - Before |
| Week | Formula | `formatDate(prop("Date"), "YYYY-[W]WW")` |
| Month | Formula | `formatDate(prop("Date"), "YYYY-MM")` |
| Day of Week | Formula | `formatDate(prop("Date"), "dddd")` |

### Formulas

**Mood Change:**
```
if(and(not(empty(prop("Mood After"))), not(empty(prop("Mood Before")))),
   toNumber(prop("Mood After")) - toNumber(prop("Mood Before")),
   0)
```

**Completion Status:**
```
if(prop("Completed"), "Done",
  if(prop("Partial"), "Partial",
    if(not(empty(prop("Skip Reason"))), "Skipped",
      "Pending")))
```

### Views

1. **Today's Habits (Table)**
   - Filter: Date is Today
   - Show: Habit, Completed, Time Completed, Notes

2. **This Week (Calendar)**
   - Show by: Date
   - Color by: Completed

3. **Weekly Grid (Table)**
   - Group by: Habit
   - Filter: Date is within This Week
   - Show: Completed checkboxes

4. **Monthly Overview (Calendar)**
   - Filter: Date is within This Month

5. **Completion History (Table)**
   - Filter: Completed is checked
   - Sort by: Date (newest)

6. **Missed Days (Table)**
   - Filter: Completed is not checked AND Partial is not checked
   - Sort by: Date (newest)

7. **By Habit (Board)**
   - Group by: Habit
   - Show: Date, Completed

---

## Database #3: Weekly Summary Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Week | Title | Week identifier (e.g., "2024-W01") |
| Week Start | Date | Monday of the week |
| Week End | Date | Sunday of the week |
| Total Habits | Rollup | Count of habit entries |
| Completed | Rollup | Count where Completed is true |
| Completion Rate | Formula | `round(prop("Completed") / prop("Total Habits") * 100)` |
| Best Day | Text | Day with most completions |
| Worst Day | Text | Day with fewest completions |
| Streaks Maintained | Number | Habits that kept streaks |
| Streaks Broken | Number | Habits that lost streaks |
| New Streaks Started | Number | Habits that began new streaks |
| Reflection | Text | Weekly reflection |
| What Worked | Text | Successful strategies |
| What Didn't | Text | Challenges faced |
| Focus for Next Week | Text | Improvement areas |
| Grade | Select | A+, A, B, C, D, F |
| Highlights | Text | Best moments |

### Views

1. **All Weeks (Table)**
   - Sort by: Week Start (newest)

2. **Trend Chart (Table)**
   - Show: Week, Completion Rate
   - Use for creating charts

3. **Best Weeks (Table)**
   - Sort by: Completion Rate (descending)
   - Filter: Completion Rate >= 80

---

## Database #4: Monthly Analytics Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Month | Title | Month name (e.g., "January 2024") |
| Month Date | Date | First day of month |
| Total Possible | Number | Total habit instances possible |
| Total Completed | Number | Total completions |
| Completion Rate | Formula | Percentage completed |
| Most Consistent | Text | Habit with best rate |
| Needs Work | Text | Habit with worst rate |
| Streaks Achieved | Number | 30+ day streaks reached |
| Average Daily Completion | Formula | Average habits per day |
| Best Week | Text | Week with highest rate |
| Worst Week | Text | Week with lowest rate |
| New Habits Added | Number | Habits started this month |
| Habits Dropped | Number | Habits stopped this month |
| Monthly Reflection | Text | Overall reflection |
| Lessons Learned | Text | Key insights |
| Goals for Next Month | Text | Improvement goals |

### Views

1. **Monthly Trend (Table)**
   - Sort by: Month Date (newest)
   - Show: Completion Rate

2. **Year View (Table)**
   - Filter: Month Date is This Year

---

## Database #5: Habit Stacks Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Stack Name | Title | Name of the habit stack |
| Time of Day | Select | Morning, Afternoon, Evening |
| Trigger | Text | What initiates the stack |
| Habits | Relation | Links to Habits in order |
| Total Duration | Formula | Sum of habit durations |
| Order | Text | Sequence description |
| Status | Select | Active, Testing, Archived |
| Success Rate | Formula | Average completion of stack |
| Notes | Text | Tips for the stack |

### Suggested Stacks

**Morning Power Stack**
1. Wake up (trigger)
2. Drink water
3. 5-minute meditation
4. Exercise
5. Cold shower
6. Journaling

**Evening Wind-Down Stack**
1. After dinner (trigger)
2. No screens
3. Reading
4. Gratitude journal
5. Prepare tomorrow
6. Sleep by X time

**Work Start Stack**
1. Sit at desk (trigger)
2. Review daily goals
3. Most important task first
4. 25-min focus session

---

## Dashboard Layout

### Top Section: Today's Focus
```
+------------------------------------------------------------------+
|                        TODAY'S HABITS                              |
|                      [Date: Month Day, Year]                       |
+------------------------------------------------------------------+
| Morning               | Afternoon          | Evening              |
| [ ] Meditation        | [ ] Exercise       | [ ] Reading          |
| [ ] Water             | [ ] Learning       | [ ] Journal          |
| [ ] Vitamins          | [ ] Deep Work      | [ ] No screens       |
+------------------------------------------------------------------+
|  Completed: X/X  |  Current Streaks: X  |  Rate Today: XX%       |
+------------------------------------------------------------------+
```

### Middle Section: Progress Overview
```
+--------------------------------+--------------------------------+
|       STREAK DASHBOARD         |      WEEKLY PROGRESS           |
|                                |                                |
| Exercise: 15 days              |  Mon: 5/6 habits              |
| Meditation: 23 days            |  Tue: 6/6 habits              |
| Reading: 8 days                |  Wed: 4/6 habits              |
| Learning: 45 days              |  Thu: 6/6 habits              |
|                                |  Fri: 5/6 habits              |
| Best Streak: Meditation (67)   |  Sat: -                       |
|                                |  Sun: -                       |
+--------------------------------+--------------------------------+
```

### Bottom Section: Analytics
```
+--------------------------------+--------------------------------+
|     THIS MONTH STATS           |      HABIT HEALTH              |
|                                |                                |
| Completion Rate: 87%           |  Strong: 4 habits             |
| vs Last Month: +5%             |  Needs Work: 2 habits         |
| Best Day: Thursday             |  New: 1 habit                  |
| Most Consistent: Meditation    |                                |
+--------------------------------+--------------------------------+
```

---

## Template Pages

### Daily Check-in Template

```markdown
# Daily Habit Check-in - [Date]

## Morning Habits
- [ ] **[Habit 1]** - Time: ___ | Quality: ___
- [ ] **[Habit 2]** - Time: ___ | Quality: ___
- [ ] **[Habit 3]** - Time: ___ | Quality: ___

## Afternoon Habits
- [ ] **[Habit 4]** - Time: ___ | Quality: ___
- [ ] **[Habit 5]** - Time: ___ | Quality: ___

## Evening Habits
- [ ] **[Habit 6]** - Time: ___ | Quality: ___
- [ ] **[Habit 7]** - Time: ___ | Quality: ___

## Daily Stats
- Total Completed: ___ / ___
- Completion Rate: ___%
- Streaks Maintained: ___

## Reflection
- What went well today?
- What was challenging?
- What will I do differently tomorrow?

## Mood Check
- Morning: ___/5
- Evening: ___/5
```

### Weekly Review Template

```markdown
# Weekly Habit Review - Week of [Date]

## Summary
| Metric | This Week | Last Week | Change |
|--------|-----------|-----------|--------|
| Completion Rate | __% | __% | +/-_% |
| Habits Completed | __ | __ | |
| Streaks Active | __ | __ | |
| Perfect Days | __ | __ | |

## Habit Performance
| Habit | Mon | Tue | Wed | Thu | Fri | Sat | Sun | Total |
|-------|-----|-----|-----|-----|-----|-----|-----|-------|
| [Habit 1] | | | | | | | | /7 |
| [Habit 2] | | | | | | | | /7 |
| [Habit 3] | | | | | | | | /7 |

## Wins This Week
1.
2.
3.

## Challenges This Week
1.
2.
3.

## Streak Updates
- **New milestones reached:**
- **Streaks broken:**
- **Close to milestones:**

## Pattern Analysis
- Best performing day:
- Worst performing day:
- Best time of day:
- Common obstacles:

## Adjustments for Next Week
1.
2.
3.

## Habit Stack Check
- [ ] Morning stack working well?
- [ ] Evening stack working well?
- [ ] Any adjustments needed?
```

### Monthly Analytics Template

```markdown
# Monthly Habit Analytics - [Month Year]

## Overview
| Metric | Value | Trend |
|--------|-------|-------|
| Overall Completion Rate | __% | |
| Total Habit Completions | __ | |
| Perfect Days | __ | |
| Longest Streak This Month | __ days | |

## Habit Breakdown

### Top Performers (>85% completion)
1. **[Habit]**: __% completion, __ day streak
2. **[Habit]**: __% completion, __ day streak
3. **[Habit]**: __% completion, __ day streak

### Needs Improvement (<70% completion)
1. **[Habit]**: __% completion
   - Why:
   - Plan to improve:

2. **[Habit]**: __% completion
   - Why:
   - Plan to improve:

## Weekly Trend
| Week | Completion Rate | Notes |
|------|-----------------|-------|
| Week 1 | __% | |
| Week 2 | __% | |
| Week 3 | __% | |
| Week 4 | __% | |

## Day of Week Analysis
| Day | Avg Completion | Best Habit | Worst Habit |
|-----|----------------|------------|-------------|
| Monday | __% | | |
| Tuesday | __% | | |
| Wednesday | __% | | |
| Thursday | __% | | |
| Friday | __% | | |
| Saturday | __% | | |
| Sunday | __% | | |

## Milestone Celebrations
- [ ] 7-day streak achieved:
- [ ] 14-day streak achieved:
- [ ] 21-day streak achieved:
- [ ] 30-day streak achieved:
- [ ] 66-day streak achieved:

## Category Performance
| Category | Completion Rate | Habits |
|----------|-----------------|--------|
| Health | __% | __ |
| Productivity | __% | __ |
| Learning | __% | __ |
| Mindfulness | __% | __ |

## Monthly Insights
### What Worked
-

### What Didn't Work
-

### Key Learning
-

## Next Month Plan
### Habits to Keep
-

### Habits to Add
-

### Habits to Modify
-

### Habits to Remove
-
```

### New Habit Setup Template

```markdown
# New Habit: [Name]

## Habit Design

### The Habit
**Behavior:** [Specific action]
**Duration/Amount:** [How much]
**Frequency:** [When/how often]
**Location:** [Where]

### Habit Loop
1. **Cue:** [What triggers this habit]
2. **Routine:** [The actual behavior]
3. **Reward:** [Immediate reward]

### Why This Matters
[Your motivation - make it emotional and compelling]

### Success Criteria
[How you'll know you did it]

## Implementation Plan

### Habit Stack
**After I [existing habit], I will [new habit].**

### Environment Design
- What to add to environment:
- What to remove from environment:
- Visual cues to set up:

### Start Small
- Week 1: [Tiny version]
- Week 2: [Slightly bigger]
- Week 3: [Build up]
- Week 4: [Target behavior]

### Potential Obstacles
| Obstacle | Solution |
|----------|----------|
| | |
| | |
| | |

### Accountability
- [ ] Track daily in habit tracker
- [ ] Share with accountability partner
- [ ] Set reminder at: [time]

### Milestones
- [ ] Day 1: Just start
- [ ] Day 7: First week complete
- [ ] Day 14: Two weeks strong
- [ ] Day 21: Building momentum
- [ ] Day 30: One month
- [ ] Day 66: Habit formed!

## Notes
[Additional thoughts, research, or inspiration]
```

---

## Formulas Reference

### Streak Calculator
To calculate streaks, you'll need to track in the Daily Log and update the Habits Library:

```
// This is conceptual - actual implementation requires automation
// Track consecutive days where Completed = true
// Reset to 0 when Completed = false (without valid skip reason)
```

### Completion Rate (Last 30 Days)
```
// Count completions in last 30 days / Possible completions
// Adjust for habit frequency (daily vs weekdays, etc.)
```

### Days Until Habit Formed
```
66 - prop("Current Streak")
```

### Streak Milestone
```
if(prop("Current Streak") >= 66, "Habit Formed!",
  if(prop("Current Streak") >= 30, "30 days - Keep going!",
    if(prop("Current Streak") >= 21, "21 days - Milestone!",
      if(prop("Current Streak") >= 14, "14 days - Building!",
        if(prop("Current Streak") >= 7, "7 days - First week!",
          "Building streak...")))))
```

### Weekly Consistency Score
```
// Based on completing habit on all expected days
round(prop("Days Completed This Week") / prop("Days Expected This Week") * 100)
```

---

## Gamification System

### Points System
| Achievement | Points |
|-------------|--------|
| Complete a habit | 10 |
| Complete all daily habits | 50 bonus |
| 7-day streak | 100 |
| 14-day streak | 200 |
| 21-day streak | 500 |
| 30-day streak | 1000 |
| 66-day streak | 2000 |
| 100-day streak | 5000 |
| Perfect week | 500 |
| Perfect month | 3000 |

### Badges/Achievements

**Streak Badges**
- Spark: 3-day streak
- Flame: 7-day streak
- Fire: 14-day streak
- Inferno: 30-day streak
- Phoenix: 66-day streak
- Legend: 100-day streak

**Consistency Badges**
- Reliable: 80% weekly rate
- Consistent: 90% weekly rate
- Machine: 100% weekly rate

**Category Badges**
- Health Hero: 30-day streak in health category
- Productivity Pro: 30-day streak in productivity
- Learning Legend: 30-day streak in learning

---

## Setup Instructions

### Step 1: Initial Setup
1. Create "Habit Tracker" as main page
2. Create all databases as specified
3. Set up properties and formulas
4. Create relations between databases

### Step 2: Add Your Habits
1. Start with 3-5 habits maximum
2. For each habit, fill out:
   - Name and icon
   - Category and frequency
   - Time of day
   - Cue, routine, reward
   - Why it matters

### Step 3: Design Your Day
1. Create habit stacks (morning, afternoon, evening)
2. Set up cues and triggers
3. Prepare your environment
4. Set reminders on phone

### Step 4: Create Daily Log System
1. Create today's entries for each active habit
2. Set up daily review time
3. Create templates for quick entry

### Step 5: Configure Dashboard
1. Build main dashboard with today's habits
2. Add streak counters
3. Include weekly/monthly views
4. Set up analytics tracking

### Step 6: Establish Review Rhythm
1. Daily: Check off habits (2 min)
2. Weekly: Review progress (15 min)
3. Monthly: Analyze and adjust (30 min)

---

## Tips for Success

### Building Habits
1. **Start Tiny**: Make it so easy you can't say no
2. **Stack Habits**: Attach new habits to existing ones
3. **Never Miss Twice**: One miss is accident, two is a pattern
4. **Design Environment**: Make good habits easy, bad habits hard
5. **Track Everything**: What gets measured gets managed

### Maintaining Streaks
1. **Don't Break the Chain**: Visual streak counting is powerful
2. **Plan for Obstacles**: Have backup plans for travel, sickness
3. **Use Skip Days Wisely**: Rest days are part of the plan
4. **Celebrate Milestones**: Acknowledge your progress

### Using This Tracker
1. **Morning**: Review today's habits
2. **Throughout Day**: Check off as you complete
3. **Evening**: Final review and reflection
4. **Weekly**: Analyze patterns and adjust
5. **Monthly**: Comprehensive review

---

## Support

For questions or customization help, contact: [Your Email]

Version 1.0 | Last Updated: [Date]
