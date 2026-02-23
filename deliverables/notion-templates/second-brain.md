# Second Brain - Notion Template

## Overview

Build your personal knowledge management system using the PARA method. This Second Brain template helps you capture, organize, and retrieve information efficiently, turning scattered notes into actionable knowledge. Based on Tiago Forte's Building a Second Brain methodology, adapted for Notion.

---

## Table of Contents

1. [PARA Framework Overview](#para-framework-overview)
2. [Quick Capture System](#quick-capture-system)
3. [Projects Database](#projects-database)
4. [Areas Database](#areas-database)
5. [Resources Database](#resources-database)
6. [Archive System](#archive-system)
7. [Notes Database (Core)](#notes-database)
8. [Tagging System](#tagging-system)
9. [Weekly and Monthly Reviews](#weekly-and-monthly-reviews)
10. [Customization Tips](#customization-tips)

---

## PARA Framework Overview

### What is PARA?

PARA is an organizational system that categorizes all information into four categories:

| Category | Definition | Time Horizon | Example |
|----------|------------|--------------|---------|
| **Projects** | Series of tasks with a deadline and goal | Short-term (weeks/months) | "Launch website," "Plan vacation" |
| **Areas** | Ongoing responsibilities to maintain | Indefinite | "Health," "Finances," "Career" |
| **Resources** | Topics of interest for future reference | As needed | "Marketing tactics," "Recipe ideas" |
| **Archive** | Inactive items from the other categories | Past | Completed projects, outdated resources |

### System Architecture

```
Second Brain
├── 📥 Inbox (Quick Capture)
├── 🎯 Projects
├── 🏠 Areas
├── 📚 Resources
├── 🗄️ Archive
├── 📝 Notes (Central Database)
└── 🏷️ Tags (For cross-referencing)
```

### Main Dashboard Setup

Create a page called **"Second Brain"** with this layout:

```markdown
# 🧠 Second Brain

## 📥 Inbox
[Linked view: Notes where Status is "Inbox"]

## 🎯 Active Projects
[Linked view: Projects where Status is "Active"]

## 🔍 Quick Search
[Search block or database with search enabled]

## 📊 Recently Added
[Linked view: Notes sorted by Created time, limit 10]

## 🔗 Quick Links
- Weekly Review Template
- Note Templates
- Tag Directory
```

---

## Quick Capture System

### Inbox Database View

The Inbox is a filtered view of your Notes database, not a separate database.

### Quick Capture Template

Create a template in your Notes database called **"Quick Capture"**:

```markdown
# [Untitled]

**Captured:** [Auto-date]
**Source:**

---

## Quick Notes


---

## Action Items
- [ ]

## Related To
[Add links later]
```

### Capture Workflow

1. **Capture immediately** - Don't try to organize while capturing
2. **Add minimal metadata** - Just source and date
3. **Process in batches** - During weekly review
4. **Move to appropriate PARA category** - Project, Area, Resource, or Archive

### Mobile Quick Capture

Set up a simplified template for mobile:

```markdown
📝

Source:
Date: @today
```

### Browser Clipper Integration

For web content:
1. Use Notion Web Clipper
2. Set default save location to Inbox
3. Add source URL automatically
4. Process during review sessions

---

## Projects Database

### Database Setup

Create a new **Database - Full page** called **"Projects"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Project Name | Title | Clear, action-oriented name |
| Status | Select | Active, On Hold, Completed, Cancelled |
| Area | Relation | Link to Areas database |
| Start Date | Date | When project began |
| Due Date | Date | Target completion |
| Priority | Select | High, Medium, Low |
| Progress | Number | Percentage (0-100) |
| Outcome | Text | What success looks like |
| Related Notes | Relation | Link to Notes database |
| Next Action | Text | Very next step |
| Energy Level | Select | High, Medium, Low |
| Collaborators | Text | Who's involved |
| Tags | Multi-select | Cross-reference tags |

### Project Template

Create a template within the Projects database:

```markdown
# [Project Name]

## 🎯 Project Overview

**Desired Outcome:**


**Success Criteria:**
- [ ]
- [ ]
- [ ]

**Deadline:** [Date]

---

## 📋 Task Breakdown

### Phase 1: Planning
- [ ] Define scope
- [ ] Gather resources
- [ ] Set milestones

### Phase 2: Execution
- [ ]
- [ ]

### Phase 3: Review
- [ ] Review deliverables
- [ ] Get feedback
- [ ] Finalize

---

## 📝 Project Notes

### Meeting Notes


### Decisions Made


### Open Questions


---

## 📎 Resources & Links

### Internal Links
[Link to related notes]

### External Resources
-

---

## 📊 Project Log

| Date | Update | Next Steps |
|------|--------|------------|
| | | |

---

## 🔙 Retrospective (Complete when done)

**What went well:**


**What could improve:**


**Key learnings:**

```

### Project Views

**1. Active Projects Board**
- Group by: Status
- Filter: Status is not "Completed" and not "Cancelled"
- Sort by: Priority, then Due Date

**2. Projects by Area**
- Group by: Area relation
- See how projects align with life areas

**3. Project Timeline**
- Timeline view by Due Date
- Visualize project schedule

**4. This Week's Focus**
- Filter: Due Date is within next 7 days
- Sort by: Priority

---

## Areas Database

### Database Setup

Create a new **Database - Full page** called **"Areas"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Area Name | Title | Life/work area |
| Description | Text | What this area encompasses |
| Icon | Text | Emoji for visual |
| Status | Select | Active, Maintenance, Paused |
| Standard | Text | What "good" looks like |
| Current State | Select | Excellent, Good, Needs Work, Critical |
| Related Projects | Relation | Link from Projects |
| Related Notes | Relation | Link to Notes |
| Key Resources | Relation | Link to Resources |
| Last Reviewed | Date | Review tracking |
| Review Frequency | Select | Weekly, Monthly, Quarterly |

### Standard Areas to Consider

**Personal:**
- Health & Fitness
- Finances
- Relationships
- Personal Development
- Home & Environment
- Hobbies & Recreation

**Professional:**
- Career/Job
- Skills & Learning
- Network & Relationships
- Side Projects
- Professional Development

### Area Page Template

```markdown
# [Area Name]

## 📖 Overview
[What this area encompasses and why it matters]

---

## 🎯 Standards & Goals

**My Standard:** [What "maintaining this well" looks like]

**Current Assessment:** [Excellent/Good/Needs Work/Critical]

---

## 🔄 Active Projects
[Linked database filtered to this area]

---

## 📋 Recurring Tasks & Routines

### Daily
-

### Weekly
-

### Monthly
-

---

## 📝 Area Notes
[Linked view of related notes]

---

## 📚 Key Resources
[Links to important resources for this area]

---

## 📊 Review Log

| Date | Assessment | Notes | Actions |
|------|------------|-------|---------|
| | | | |
```

### Area Views

**1. Area Dashboard (Gallery)**
- Show all areas with icons
- Display Current State
- Card preview: Page content

**2. Areas Needing Attention**
- Filter: Current State is "Needs Work" or "Critical"
- Prioritize reviews

---

## Resources Database

### Database Setup

Create a new **Database - Full page** called **"Resources"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Resource Name | Title | Topic or resource name |
| Type | Select | Article, Book, Course, Tool, Reference, Tutorial, Template |
| Topic | Multi-select | Subject categories |
| Status | Select | To Process, Active, Reference, Archived |
| Source | URL | Original source |
| Rating | Select | ⭐⭐⭐⭐⭐ (1-5 stars) |
| Related Areas | Relation | Link to Areas |
| Related Notes | Relation | Link to Notes |
| Date Added | Date | Auto-created date |
| Last Accessed | Date | Track usage |
| Summary | Text | Key takeaways |
| Tags | Multi-select | Cross-reference |

### Resource Types Templates

**Book Notes Template:**
```markdown
# 📚 [Book Title]

**Author:**
**Genre/Category:**
**Date Read:**
**Rating:** ⭐⭐⭐⭐⭐

---

## 📖 Summary
[2-3 sentence overview]

---

## 🔑 Key Takeaways

1.
2.
3.

---

## 💡 Favorite Quotes

> "Quote here" (p. XX)

> "Quote here" (p. XX)

---

## 📝 Detailed Notes

### Chapter 1: [Title]


### Chapter 2: [Title]


---

## 🎯 Action Items
- [ ] How I'll apply this

---

## 🔗 Related
- [Link to related resources]
- [Link to relevant projects]
```

**Article/Web Clip Template:**
```markdown
# 📄 [Article Title]

**Source:** [URL]
**Author:**
**Date Saved:** @today
**Read Status:** ⬜ To Read / ✅ Read

---

## 📝 Summary


---

## 🔑 Key Points

-
-
-

---

## 💭 My Thoughts


---

## 🎯 Action Items
- [ ]

---

## 🔗 Related Notes
```

**Course Notes Template:**
```markdown
# 🎓 [Course Name]

**Platform:**
**Instructor:**
**Duration:**
**Start Date:**
**Status:** In Progress / Completed

---

## 📚 Course Overview
[What this course covers]

---

## 📝 Module Notes

### Module 1: [Title]
**Key Concepts:**


**Exercises:**


---

### Module 2: [Title]


---

## 🎯 Course Projects
[Link to any projects created]

---

## 🔑 Key Takeaways

1.
2.
3.

---

## 📋 Next Steps
- [ ] How I'll apply this learning
```

### Resource Views

**1. Resource Library (Gallery)**
- Show all resources
- Card size: Medium
- Show: Type, Rating, Topic

**2. By Topic (Board)**
- Group by: Topic multi-select
- Browse by subject

**3. To Process**
- Filter: Status is "To Process"
- Sort by: Date Added (Oldest first)

**4. Top Rated**
- Filter: Rating is 4+ stars
- Quick access to best resources

---

## Archive System

### Archive Purpose

The Archive holds:
- Completed projects
- Outdated resources
- Inactive area documentation
- Historical references

### Archive Database

You can either:
1. **Use Status property** - Set items to "Archived" in each database
2. **Create dedicated Archive** - Move items to separate database

### Recommended: Status-Based Archiving

Add "Archived" option to Status property in:
- Projects → Status: "Completed" or "Cancelled"
- Resources → Status: "Archived"
- Notes → Status: "Archived"

### Archive Views

Create an Archive page with linked views:

```markdown
# 🗄️ Archive

## Completed Projects
[Projects where Status is "Completed"]

## Archived Resources
[Resources where Status is "Archived"]

## Archived Notes
[Notes where Status is "Archived"]

---

**Archive Guidelines:**
- Archive quarterly
- Keep for reference, not active use
- Search still works on archived items
- Review annually for deletion
```

---

## Notes Database (Core)

### Database Setup

This is the **central database** that connects everything.

Create a new **Database - Full page** called **"Notes"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Title | Title | Note title |
| Status | Select | Inbox, Processing, Active, Reference, Archived |
| Type | Select | Fleeting, Literature, Permanent, Meeting, Daily |
| PARA Category | Select | Project, Area, Resource, Archive |
| Project | Relation | Link to Projects |
| Area | Relation | Link to Areas |
| Resource | Relation | Link to Resources |
| Created | Created time | Auto |
| Last Edited | Last edited time | Auto |
| Tags | Multi-select | Cross-reference tags |
| Source | Text | Where this came from |
| Linked Notes | Relation | Self-relation for linking |

### Note Types Explained

| Type | Purpose | Example |
|------|---------|---------|
| **Fleeting** | Quick captures, temporary | "Look into X" |
| **Literature** | Notes from external sources | Book notes, article summaries |
| **Permanent** | Your original, processed thoughts | Insights, connections |
| **Meeting** | Notes from meetings | Meeting with John 1/15 |
| **Daily** | Daily journal/log entries | Today's log |

### Progressive Summarization

Apply progressive summarization to notes:

1. **Layer 1:** Original captured content
2. **Layer 2:** Bold the most important passages
3. **Layer 3:** Highlight the bolded passages that stand out
4. **Layer 4:** Create executive summary at top
5. **Layer 5:** Remix into your own words/new note

### Note Template (Permanent Note)

```markdown
# [Note Title]

## 💡 Core Idea
[One-sentence summary of the insight]

---

## 📝 Full Note
[Expanded explanation]

---

## 🔗 Connections
- [[Related Note 1]]
- [[Related Note 2]]

---

## 📚 Sources
- [Source 1]
- [Source 2]

---

## 🏷️ Tags
#tag1 #tag2

---

## ❓ Questions
[Questions this raises]

---

## 🎯 Applications
[How to use this insight]
```

### Note Views

**1. Inbox**
- Filter: Status is "Inbox"
- Sort by: Created (Descending)
- Process these regularly

**2. All Notes (Table)**
- Search-enabled
- Sort by: Last Edited (Descending)

**3. Notes by Project**
- Group by: Project relation
- See project-related notes

**4. Notes by Tag**
- Group by: Tags
- Explore by topic

**5. Daily Notes Calendar**
- Filter: Type is "Daily"
- Calendar view by Created date

---

## Tagging System

### Tag Philosophy

Use tags sparingly and intentionally:
- **Not for organization** (PARA handles that)
- **For cross-cutting themes** that span multiple categories
- **For retrieval** when you'll search for something specific

### Recommended Tag Categories

**Status Tags:**
- `#actionable` - Has next action
- `#review` - Needs revisiting
- `#evergreen` - Always relevant

**Content Tags:**
- `#idea` - Original ideas
- `#quote` - Memorable quotes
- `#framework` - Mental models
- `#tool` - Tools and software

**Custom Tags:**
- Based on your interests
- Keep list under 20-30 tags
- Review and merge similar tags quarterly

### Tag Database (Optional)

For complex tag management, create a Tags database:

| Property | Type | Purpose |
|----------|------|---------|
| Tag Name | Title | The tag |
| Category | Select | Tag type |
| Description | Text | When to use |
| Related Notes | Relation | Notes with this tag |
| Count | Rollup | Number of uses |

---

## Weekly and Monthly Reviews

### Weekly Review Process

Create a **Weekly Review** template:

```markdown
# 📅 Weekly Review - [Date]

## 🗑️ Clear

### Inbox Zero
- [ ] Process all inbox items
- [ ] Empty email/message inboxes
- [ ] Clear physical inbox

### Capture Stragglers
- [ ] Review loose notes
- [ ] Check screenshots/photos
- [ ] Review voice memos

---

## 🔄 Update

### Projects Check
For each active project:
- [ ] Is it still active?
- [ ] Update progress
- [ ] Define next action

### Review Calendar
- [ ] Past week: Capture any notes needed
- [ ] Coming week: Prepare materials

---

## 🤔 Review

### This Week's Wins


### Challenges Faced


### Insights Gained


---

## 🎯 Plan

### Next Week's Priorities
1.
2.
3.

### Someday/Maybe Ideas
[Park ideas here for later]

---

## 📊 Metrics

| Metric | Count |
|--------|-------|
| Notes created | |
| Notes processed | |
| Projects completed | |
| Resources added | |
```

### Monthly Review Process

Create a **Monthly Review** template:

```markdown
# 📆 Monthly Review - [Month Year]

## 🎯 Projects Overview

### Completed This Month


### Active Projects Status


### New Projects Started


---

## 🏠 Areas Check

For each area, assess current state:

| Area | Last Month | This Month | Trend |
|------|------------|------------|-------|
| Health | | | |
| Finances | | | |
| Career | | | |
| Relationships | | | |
| Learning | | | |

---

## 📚 Resources Audit

### Added This Month
-

### To Process Queue


### Archive Candidates


---

## 🧹 System Maintenance

- [ ] Review and merge duplicate tags
- [ ] Archive completed projects
- [ ] Update area standards if needed
- [ ] Clean up unused resources

---

## 💡 Insights & Ideas


---

## 🎯 Next Month Focus

### Priority Projects
1.
2.

### Area to Improve


### Learning Goal

```

---

## Customization Tips

### Adapting PARA to Your Needs

1. **Start Simple**
   - Begin with just Projects and Notes
   - Add Areas and Resources as needed
   - Don't over-engineer from the start

2. **Project Threshold**
   - If under 3 tasks, it's probably a task, not a project
   - If no deadline, it might be an Area

3. **Area Boundaries**
   - Keep areas broad (5-10 total)
   - Merge similar areas
   - Split only when necessary

### Integration Ideas

1. **Task Manager Integration**
   - Link to Todoist/Things for task management
   - Use Notion for project overview, external app for daily tasks

2. **Calendar Sync**
   - Embed Google Calendar
   - Link calendar events to meeting notes

3. **Read Later Integration**
   - Use Readwise to sync highlights
   - Connect Pocket/Instapaper saves

### Advanced Features

1. **Bidirectional Linking**
   - Use Notion's @ mentions liberally
   - Create "backlinks" section in templates
   - Build your knowledge graph

2. **Templates Gallery**
   - Create template buttons for common note types
   - Use database templates for consistency

3. **Search Optimization**
   - Use consistent naming conventions
   - Add keywords in notes for searchability

---

## Expected Layout Screenshots

### Second Brain Dashboard
*[Visual: Clean landing page with prominent Inbox section at top showing 5 unprocessed items. Below, a two-column layout shows Active Projects on left (as cards) and Quick Access links on right. Bottom section displays recently modified notes in a compact list.]*

### PARA Overview
*[Visual: Four-quadrant layout with Projects (Kanban board), Areas (Gallery cards with icons), Resources (categorized list), and Archive (collapsed section). Each quadrant has a clear header and "Add New" button.]*

### Note Page with Linking
*[Visual: Individual note page showing title, metadata bar with tags and relations, main content area with headers and bullet points, and a "Linked Notes" section at bottom showing related notes as small cards.]*

### Weekly Review Checklist
*[Visual: Template page with toggle sections. Checkboxes are visible, some checked off. Tables show project status. Clean, scannable layout with clear section dividers.]*

---

## Quick Start Checklist

### Day 1: Setup Structure
- [ ] Create Second Brain main page
- [ ] Create Notes database with all properties
- [ ] Create Projects database
- [ ] Create Areas database
- [ ] Create Resources database
- [ ] Link all databases together

### Day 2: Templates
- [ ] Create Quick Capture template
- [ ] Create Project template
- [ ] Create Note templates (by type)
- [ ] Create Weekly Review template

### Day 3: Populate
- [ ] Add your current projects
- [ ] Define your life areas
- [ ] Import existing notes to Inbox
- [ ] Process first batch of inbox items

### Week 1: Habits
- [ ] Capture notes throughout the week
- [ ] Complete first Weekly Review
- [ ] Refine templates as needed

### Month 1: Iterate
- [ ] Complete first Monthly Review
- [ ] Adjust system based on usage
- [ ] Add/remove properties as needed
- [ ] Build consistent capture habit

---

## Troubleshooting

**"I have too many notes in my inbox"**
- Schedule dedicated processing time
- Use the 2-minute rule: if it takes less than 2 minutes, process now
- Be ruthless about archiving/deleting

**"I don't know where to put something"**
- Ask: "Is there a deadline?" → Project
- Ask: "Is this an ongoing responsibility?" → Area
- Ask: "Might this be useful someday?" → Resource
- When in doubt, start in Inbox

**"My system feels cluttered"**
- Do a thorough Archive sweep
- Merge similar tags
- Consolidate related notes
- Review if all databases are needed

**"I can't find things"**
- Improve note titles
- Add more tags strategically
- Use search more aggressively
- Create topic index pages

---

*Template Version 1.0 | Last Updated: 2024*
