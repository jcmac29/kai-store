# Habit Tracker - Notion Template

## Overview

This comprehensive Habit Tracker helps you build and maintain positive habits through daily tracking, streak calculations, progress visualization, and habit stacking methodology. Designed for consistency and motivation, this system makes habit-building systematic and rewarding.

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Master Habits Database](#master-habits-database)
3. [Daily Habit Log](#daily-habit-log)
4. [Streak Tracking System](#streak-tracking-system)
5. [Progress Visualization](#progress-visualization)
6. [Habit Stacking Setup](#habit-stacking-setup)
7. [Dashboard Configuration](#dashboard-configuration)
8. [Customization Tips](#customization-tips)

---

## System Overview

### Database Architecture

```
Habit Tracker System
├── Master Habits (Define your habits)
├── Daily Log (Track completions)
├── Streaks (Calculate streaks)
├── Weekly Summaries (Review progress)
└── Dashboard (Main view)
```

### Core Philosophy

This system is built on habit science principles:
- **Cue-Routine-Reward** loops
- **Habit stacking** (linking new habits to existing ones)
- **Progress visualization** (don't break the chain)
- **Minimum viable habits** (start small)

---

## Master Habits Database

### Database Setup

Create a new **Database - Full page** called **"Habits"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Habit Name | Title | Clear, action-oriented name |
| Category | Select | Health, Productivity, Learning, Relationships, Finance, Mindfulness, Other |
| Status | Select | Active, Building, Paused, Retired, Completed |
| Frequency | Select | Daily, Weekdays, Weekends, Weekly, Custom |
| Time of Day | Select | Morning (5-9am), Mid-Morning (9-12pm), Afternoon (12-5pm), Evening (5-9pm), Night (9pm+), Anytime |
| Cue | Text | What triggers this habit |
| Routine | Text | The actual habit (be specific) |
| Reward | Text | Immediate reward after completion |
| Duration (minutes) | Number | How long it takes |
| Difficulty | Select | Tiny (2 min), Small (5 min), Medium (15 min), Large (30+ min) |
| Current Streak | Rollup | Auto-calculated from Daily Log |
| Longest Streak | Number | Manual or formula tracking |
| Total Completions | Rollup | Count from Daily Log |
| Completion Rate | Formula | See formula section |
| Start Date | Date | When you started building this habit |
| Stack After | Relation | Self-relation for habit stacking |
| Stack Before | Relation | Self-relation (opposite direction) |
| Why | Text | Deep motivation for this habit |
| Icon | Text | Emoji for visual identification |
| Notes | Text | Tips and observations |

### Habit Categories with Examples

**Health:**
- 💧 Drink 8 glasses of water
- 🏃 Exercise for 30 minutes
- 😴 Sleep by 10pm
- 🥗 Eat vegetables with lunch
- 💊 Take vitamins

**Productivity:**
- 📝 Plan tomorrow tonight
- 🎯 Complete MIT (Most Important Task) first
- 📵 No phone first hour
- 📊 Weekly review
- 🧹 5-minute desk cleanup

**Learning:**
- 📖 Read for 20 minutes
- 🎧 Listen to educational podcast
- 📝 Journal insights
- 🌐 Learn new word/concept
- 💻 Practice coding

**Mindfulness:**
- 🧘 Meditate 10 minutes
- 📓 Gratitude journaling
- 🌅 Watch sunrise
- 🚶 Mindful walk
- 📴 Digital sunset

**Relationships:**
- 💬 Connect with friend/family
- 💝 Compliment someone
- 🤝 Networking outreach
- ❤️ Quality time with partner
- 📞 Call a friend

### Habit Template Page

```markdown
# [Habit Icon] [Habit Name]

## 🎯 Habit Definition

**The Habit:** [Specific action]

**When:** [Time of day + trigger/cue]

**Duration:** [X] minutes

**Difficulty:** [Tiny/Small/Medium/Large]

---

## 🧠 Habit Loop

### Cue (Trigger)
[What reminds you to do this habit]
- Location:
- Time:
- Emotional state:
- Other people:
- Immediately preceding action:

### Routine (The Habit)
[Specific steps - be detailed]
1.
2.
3.

### Reward
[Immediate satisfaction]
- Intrinsic:
- Extrinsic:

---

## 💪 Motivation

### Why This Matters
[Deep reason for building this habit]

### Identity Statement
"I am the type of person who..."

### Long-term Benefit
[What this leads to in 1 year, 5 years]

---

## 📈 Progress

**Current Streak:** [Rollup]

**Longest Streak:** [Number]

**Completion Rate:** [Formula %]

**Total Completions:** [Rollup]

---

## 🔗 Habit Stack

**Comes After:** [Stack After relation]

**Comes Before:** [Stack Before relation]

**Full Morning/Evening Stack:**
1.
2. [This habit]
3.

---

## 📝 Implementation Notes

### Obstacles & Solutions
| Obstacle | Solution |
|----------|----------|
| | |

### Tips That Work
-

### Adjustments Made
| Date | Change | Reason |
|------|--------|--------|
| | | |

---

## 📊 Tracking
[Linked database: Daily Log filtered to this habit]
```

---

## Daily Habit Log

### Database Setup

Create a new **Database - Full page** called **"Daily Habit Log"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Entry | Title | Auto-format: "[Date] - [Habit]" |
| Date | Date | Date of tracking |
| Habit | Relation | Link to Habits database |
| Completed | Checkbox | Did you do it? |
| Partial | Checkbox | Did some but not all? |
| Skipped Reason | Select | Rest Day, Sick, Travel, Forgot, Chose Not To, Other |
| Time Completed | Date | Include time |
| Duration (actual) | Number | Minutes spent |
| Difficulty Rating | Select | Easy, Normal, Hard, Very Hard |
| Energy Before | Select | 1-Low, 2, 3-Medium, 4, 5-High |
| Energy After | Select | 1-Low, 2, 3-Medium, 4, 5-High |
| Mood Before | Select | 😫😕😐🙂😊 |
| Mood After | Select | 😫😕😐🙂😊 |
| Notes | Text | Observations, feelings |
| Week | Formula | For weekly grouping |

### Date Formulas

**Week Formula:**
```
formatDate(prop("Date"), "YYYY-[W]WW")
```

**Day of Week:**
```
formatDate(prop("Date"), "dddd")
```

**Month:**
```
formatDate(prop("Date"), "MMMM YYYY")
```

### Daily Entry Template

Create a quick template:

```markdown
## [Date] Check-in

### Completed Habits
- [ ] Habit 1
- [ ] Habit 2
- [ ] Habit 3

### Notes


### Energy Level: /5

### Overall Day Rating: /10
```

### Recommended Views

**1. Today's Habits (List)**
- Filter: Date is Today
- Show: Habit name, Completed checkbox, Time of Day
- Sort by: Time of Day

**2. This Week Calendar**
- Calendar view by Date
- Color by: Completed status
- See your week at a glance

**3. Habit Calendar (Per Habit)**
- Filter: Habit is [specific habit]
- Calendar view
- Visual streak representation

**4. Completion Table**
- All entries table
- Group by: Date (Descending)
- See daily patterns

**5. Missed Habits Analysis**
- Filter: Completed is unchecked
- Group by: Skipped Reason
- Identify patterns

---

## Streak Tracking System

### Streak Calculation Methods

#### Method 1: Manual Tracking

In the Habits database, manually update "Current Streak" property:
- Increment daily when completed
- Reset to 0 when missed

#### Method 2: Rollup-Based Tracking

Create a rollup in Habits database:
- **Rollup Property:** Recent Completions
- **Relation:** Daily Habit Log
- **Calculate:** Count checked
- **Date range:** Last 7 days / Last 30 days

#### Method 3: Advanced Formula (Concept)

For true streak calculation, you'd need:
1. A way to check consecutive dates
2. This is complex in Notion; consider using:
   - External automation (Zapier, Make)
   - Manual weekly calculation
   - Simplified "This Week" streaks

### Practical Streak Implementation

**Weekly Streak Counter:**

Create a "Weekly Streaks" database:

| Property | Type | Description |
|----------|------|-------------|
| Week | Title | "Week of [Date]" |
| Habit | Relation | Link to Habits |
| Days Completed | Number | 0-7 |
| Perfect Week | Formula | `prop("Days Completed") == 7` |
| Streak Status | Formula | See below |

**Streak Status Formula:**
```
if(prop("Days Completed") == 7, "🔥 Perfect Week!", if(prop("Days Completed") >= 5, "✅ Great Week", if(prop("Days Completed") >= 3, "👍 Good Effort", "📈 Keep Trying")))
```

### Longest Streak Tracking

In Habits database, create these properties:

| Property | Type | Purpose |
|----------|------|---------|
| Current Streak | Number | Active streak count |
| Longest Streak | Number | All-time best |
| Streak Start Date | Date | When current streak began |

**Update Process (Weekly Review):**
1. Check if Current Streak > Longest Streak
2. If yes, update Longest Streak
3. If habit missed, reset Current Streak to 0

### Streak Milestones

Create milestone celebrations:

| Streak Length | Badge | Celebration |
|---------------|-------|-------------|
| 7 days | 🌟 | One Week Warrior |
| 14 days | 🏆 | Two Week Champion |
| 21 days | 🎯 | Habit Formed (21 Days) |
| 30 days | 💪 | Monthly Master |
| 66 days | 🔥 | Habit Locked In |
| 100 days | 👑 | Century Club |
| 365 days | 🎉 | Year-Long Legend |

---

## Progress Visualization

### Visual Streak Display

**Option 1: Progress Bar in Gallery View**
- Create a "Streak Progress" number property (0-100)
- Formula: `min(prop("Current Streak") / 30 * 100, 100)`
- Display as progress bar in gallery cards

**Option 2: Color-Coded Status**
Add a formula property "Streak Status":
```
if(prop("Current Streak") >= 30, "🟣 Purple (30+)",
if(prop("Current Streak") >= 21, "🔵 Blue (21-29)",
if(prop("Current Streak") >= 14, "🟢 Green (14-20)",
if(prop("Current Streak") >= 7, "🟡 Yellow (7-13)",
if(prop("Current Streak") >= 1, "🟠 Orange (1-6)",
"⚪ White (0)")))))
```

### Weekly Summary Cards

Create a template for weekly visualization:

```markdown
# Week [X] Summary

## Habit Scorecard

| Habit | Mon | Tue | Wed | Thu | Fri | Sat | Sun | Total |
|-------|-----|-----|-----|-----|-----|-----|-----|-------|
| [H1]  | ✅  | ✅  | ✅  | ✅  | ❌  | ✅  | ✅  | 6/7   |
| [H2]  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | 7/7   |
| [H3]  | ❌  | ✅  | ✅  | ❌  | ✅  | ✅  | ✅  | 5/7   |

## Weekly Metrics

- **Overall Completion Rate:** [X]%
- **Perfect Days:** [X]/7
- **Best Performing Habit:** [Habit]
- **Needs Attention:** [Habit]

## Energy Patterns
[Note which days had highest/lowest energy]

## Insights
[What worked, what didn't]
```

### Monthly Overview Dashboard

Create a monthly page with:

```markdown
# [Month] Habit Review

## 📊 Monthly Metrics

| Metric | Value |
|--------|-------|
| Total Habit Completions | [X] |
| Overall Completion Rate | [X]% |
| Best Week | Week [X] |
| Perfect Days | [X] |

## 🏆 Achievements This Month

### New Milestones Reached
-

### Longest Streaks
| Habit | Streak |
|-------|--------|
| | |

## 📈 Habit Performance

### Best Performers (>80%)
-

### Improving (60-80%)
-

### Needs Work (<60%)
-

## 💡 Insights & Adjustments

### What Worked
-

### What Didn't
-

### Changes for Next Month
-

## 🎯 Next Month Goals
-
```

---

## Habit Stacking Setup

### What is Habit Stacking?

Habit stacking links new habits to existing ones using the formula:
> "After I [CURRENT HABIT], I will [NEW HABIT]."

### Setting Up Stacks in Notion

**1. Create Stack Relations**

In Habits database:
- Add relation "Stack After" (to Habits - self relation)
- Add relation "Stack Before" (opposite direction)

**2. Define Your Stacks**

Example Morning Stack:
```
Wake Up (anchor)
   ↓
Stack After: Drink water
   ↓
Stack After: 5-minute stretch
   ↓
Stack After: Meditate 10 min
   ↓
Stack After: Journal 5 min
   ↓
Stack After: Review day's goals
```

**3. Create a Stack View**

Board view grouped by "Stack After":
- See chains of habits
- Identify missing links
- Optimize sequence

### Habit Stack Templates

**Morning Stack Example:**
```markdown
# ☀️ Morning Stack

**Anchor:** Waking up

1. **After I turn off my alarm**, I will drink a glass of water
2. **After I drink water**, I will do 5 minutes of stretching
3. **After I stretch**, I will meditate for 10 minutes
4. **After I meditate**, I will journal for 5 minutes
5. **After I journal**, I will review my day's priorities

**Total Time:** ~25 minutes
**Difficulty:** Medium
```

**Evening Stack Example:**
```markdown
# 🌙 Evening Stack

**Anchor:** Finishing dinner

1. **After I finish dinner**, I will take a 10-minute walk
2. **After I walk**, I will review tomorrow's calendar
3. **After I review calendar**, I will read for 20 minutes
4. **After I read**, I will prepare clothes for tomorrow
5. **After I prepare clothes**, I will do my skincare routine

**Total Time:** ~45 minutes
**Difficulty:** Easy
```

**Work Stack Example:**
```markdown
# 💼 Work Stack

**Anchor:** Sitting at desk

1. **After I sit at my desk**, I will review my MIT for the day
2. **After I review MIT**, I will close all unnecessary tabs
3. **After I close tabs**, I will set a 90-minute focus timer
4. **After the timer ends**, I will take a 10-minute break

**Repeats:** 3-4 times per day
```

### Stack Visualization Page

```markdown
# 🔗 My Habit Stacks

## Morning Routine (6:00-7:00 AM)

```
Alarm → Water → Stretch → Meditate → Journal → Plan
  5m     2m      5m        10m        5m       5m
```

## Workday Routine

```
Arrive → MIT Review → Deep Work → Break → Repeat
  5m        5m          90m       15m
```

## Evening Routine (9:00-10:00 PM)

```
Dinner → Walk → Review → Read → Prepare → Skincare → Bed
  done    10m    5m      20m     5m        10m
```

## Stack Health Check

| Stack | Total Time | Completion Rate | Status |
|-------|------------|-----------------|--------|
| Morning | 32 min | 85% | ✅ Strong |
| Work | 2 hrs | 70% | 🔄 Building |
| Evening | 50 min | 60% | 🔧 Needs Work |
```

---

## Dashboard Configuration

### Main Dashboard Layout

```markdown
# 🎯 Habit Tracker Dashboard

---

## ⚡ Quick Actions

[+ Log Today's Habits]  [+ Add New Habit]  [📊 Weekly Review]

---

## 📅 Today's Habits

[Linked database: Daily Log where Date is Today, sorted by Time of Day]

### Morning Stack
- [ ] Habit 1
- [ ] Habit 2
- [ ] Habit 3

### Afternoon Stack
- [ ] Habit 4
- [ ] Habit 5

### Evening Stack
- [ ] Habit 6
- [ ] Habit 7

---

## 🔥 Current Streaks

[Linked database: Habits gallery view showing Current Streak]

| Habit | Streak | Status |
|-------|--------|--------|
| Meditation | 🔥 23 days | Building |
| Exercise | 🔥 45 days | Strong |
| Reading | 🔥 12 days | Building |

---

## 📊 This Week's Progress

[Embedded weekly summary or linked view]

| Habit | M | T | W | T | F | S | S | Rate |
|-------|---|---|---|---|---|---|---|------|
| [Icons/Checks for each day] |

---

## 🏆 Achievements

### Recent Milestones
- 🎉 [Habit] reached 30 days!
- ⭐ Perfect week for [Habit]

### All-Time Records
| Habit | Longest Streak | Date Achieved |
|-------|----------------|---------------|
| | | |

---

## 📈 Trends & Insights

### Best Performing Category
[Based on completion rates]

### Time of Day Analysis
- Morning habits: X% completion
- Afternoon habits: X% completion
- Evening habits: X% completion

---

## 🔧 Maintenance

- Last Review: [Date]
- Habits Active: [X]
- Habits Building: [X]
- Habits Paused: [X]
```

### Dashboard Views Configuration

**Today's Checklist View:**
- Database: Daily Habit Log
- Filter: Date is Today
- View: List
- Properties: Completed (checkbox), Habit, Time of Day
- Sort: Time of Day (Ascending)

**Streak Leaderboard View:**
- Database: Habits
- Filter: Status is Active
- View: Gallery
- Properties: Current Streak, Streak Status
- Sort: Current Streak (Descending)

**Weekly Calendar View:**
- Database: Daily Habit Log
- Filter: Date is within This Week
- View: Calendar by Date
- Color: By Completed status

---

## Customization Tips

### Starting Small

1. **Begin with 3 habits maximum**
   - Master these before adding more
   - Quality over quantity

2. **Use "2-Minute Rule"**
   - Make habits tiny to start
   - Meditate → "Sit on cushion for 2 minutes"
   - Exercise → "Put on workout clothes"

3. **Identity-Based Tracking**
   - Add "Identity" text property
   - Write: "I am someone who..."

### Gamification Ideas

1. **Point System**
   - Add Points property to habits
   - Tiny = 1 point, Small = 2, Medium = 3, Large = 5
   - Track weekly/monthly totals

2. **Levels/Ranks**
   - Create progression system
   - Beginner → Novice → Intermediate → Advanced → Master

3. **Rewards Calendar**
   - Set milestone rewards
   - 7 days = small treat
   - 30 days = bigger reward
   - 100 days = significant reward

### Advanced Tracking

1. **Mood Correlation**
   - Track mood before/after habits
   - Analyze which habits improve mood most

2. **Time Optimization**
   - Track actual duration vs. planned
   - Find your optimal times

3. **Obstacle Database**
   - Track when/why you miss habits
   - Develop specific solutions

### Troubleshooting Common Issues

**"I keep forgetting to track"**
- Set phone reminder
- Keep Notion on your home screen
- Track immediately after completing

**"I lose motivation"**
- Review your "Why" weekly
- Make habits smaller
- Focus on identity, not outcomes

**"Too many habits to track"**
- Pare down to essentials
- Pause non-critical habits
- Focus on one category at a time

**"Streaks stress me out"**
- Focus on completion rate instead
- Allow "planned rest days"
- Celebrate consistency, not perfection

---

## Expected Layout Screenshots

### Daily Habits Checklist
*[Visual: Clean list view with habit names on left, checkboxes in middle, and time-of-day tags on right. Completed items show strikethrough. Top banner shows date and "5/8 habits completed" progress.]*

### Streak Visualization Gallery
*[Visual: Card-based gallery with each habit as a card. Cards show habit icon, name, current streak as large number, and a colored progress bar. Fire emoji indicates hot streaks.]*

### Weekly Calendar View
*[Visual: Calendar grid showing the week. Each day cell contains colored dots for each habit - green for completed, red for missed, gray for not yet. Weekends have different background shade.]*

### Habit Stack Diagram
*[Visual: Vertical flowchart showing habit sequence. Each habit is a rounded rectangle with icon and name. Arrows connect them. Time estimates shown to the side. Color-coded by completion status.]*

---

## Quick Start Checklist

### Day 1: Setup
- [ ] Create Habits database
- [ ] Create Daily Habit Log database
- [ ] Link databases together
- [ ] Choose 3-5 starter habits

### Day 2: Configure
- [ ] Complete habit templates for each habit
- [ ] Set up views (Today, Calendar, Streaks)
- [ ] Create dashboard page
- [ ] Set up habit stacks

### Day 3-7: Test Run
- [ ] Track daily for one week
- [ ] Adjust times and durations as needed
- [ ] Refine your cue-routine-reward loops

### Week 2: Optimize
- [ ] Complete first weekly review
- [ ] Identify problem areas
- [ ] Adjust difficulty if needed
- [ ] Consider adding/removing habits

### Month 1: Establish
- [ ] Complete first monthly review
- [ ] Celebrate streaks and wins
- [ ] Set next month's goals
- [ ] Share progress with accountability partner

---

## Printable Templates

### Daily Habit Card

```
┌─────────────────────────────────────────┐
│ Date: _______________                   │
│                                         │
│ MORNING                                 │
│ □ _________________________ ○○○○○      │
│ □ _________________________ ○○○○○      │
│ □ _________________________ ○○○○○      │
│                                         │
│ AFTERNOON                               │
│ □ _________________________ ○○○○○      │
│ □ _________________________ ○○○○○      │
│                                         │
│ EVENING                                 │
│ □ _________________________ ○○○○○      │
│ □ _________________________ ○○○○○      │
│                                         │
│ Energy: 1 2 3 4 5  |  Mood: 😫😕😐🙂😊   │
│ Notes: ________________________________ │
└─────────────────────────────────────────┘
```

### Weekly Tracker Grid

```
┌─────────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬───────┐
│ Habit       │ Mon │ Tue │ Wed │ Thu │ Fri │ Sat │ Sun │ Total │
├─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼───────┤
│             │     │     │     │     │     │     │     │  /7   │
├─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼───────┤
│             │     │     │     │     │     │     │     │  /7   │
├─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼───────┤
│             │     │     │     │     │     │     │     │  /7   │
├─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼───────┤
│             │     │     │     │     │     │     │     │  /7   │
└─────────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴───────┘
```

---

*Template Version 1.0 | Last Updated: 2024*
