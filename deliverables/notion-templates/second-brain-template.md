# Second Brain - PARA Method Knowledge Management Template

## Overview
A comprehensive personal knowledge management system based on Tiago Forte's PARA method. Organize everything you learn, capture ideas, manage resources, and build a connected knowledge network that grows with you.

---

## The PARA Framework

**P - Projects**: Short-term efforts with specific outcomes and deadlines
**A - Areas**: Long-term responsibilities to maintain over time
**R - Resources**: Topics of ongoing interest for future reference
**A - Archive**: Inactive items from the other categories

---

## Template Structure

```
/Second Brain
├── /Inbox (Quick Capture)
├── /Projects
├── /Areas
├── /Resources
├── /Archive
├── /Notes
├── /Reading List
├── /Web Clips
├── /Highlights & Quotes
└── /Templates
```

---

## Database #1: Master Notes Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Title | Title | Note title |
| Type | Select | Note, Meeting, Idea, Reference, How-To, Summary, Reflection |
| PARA Category | Select | Project, Area, Resource, Archive, Inbox |
| Project | Relation | Links to Projects Database |
| Area | Relation | Links to Areas Database |
| Resource Topic | Relation | Links to Resources Database |
| Tags | Multi-select | Custom tags for filtering |
| Status | Select | Inbox, Processing, Evergreen, Archive |
| Source | Select | Original, Book, Article, Video, Podcast, Course, Conversation |
| Source URL | URL | Link to source material |
| Source Title | Text | Title of source material |
| Created | Created time | Auto-generated |
| Last Edited | Last edited time | Auto-generated |
| Created By | Created by | Auto-generated |
| Related Notes | Relation | Links to other notes (bidirectional) |
| Summary | Text | Brief summary of the note |
| Actionable | Checkbox | Does this require action? |
| Review Date | Date | When to review this note |
| Quality | Select | Rough, Draft, Refined, Evergreen |
| Word Count | Formula | Approximate content length |

### Views

1. **Inbox (Table)**
   - Filter: Status is "Inbox" OR PARA Category is "Inbox"
   - Sort by: Created (newest)

2. **All Notes (Table)**
   - Sort by: Last Edited (newest)
   - Filter: Status is not "Archive"

3. **By Project (Board)**
   - Group by: Project
   - Filter: PARA Category is "Project"

4. **By Area (Board)**
   - Group by: Area
   - Filter: PARA Category is "Area"

5. **By Topic (Board)**
   - Group by: Resource Topic
   - Filter: PARA Category is "Resource"

6. **Evergreen Notes (Gallery)**
   - Filter: Quality is "Evergreen"
   - Sort by: Last Edited

7. **Recently Edited (Table)**
   - Sort by: Last Edited (newest)
   - Limit: 20 items

8. **Needs Review (Table)**
   - Filter: Review Date is on or before Today
   - Sort by: Review Date

9. **Graph View (via linked notes)**
   - Use Related Notes to build connections

---

## Database #2: Projects Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Project Name | Title | Name of the project |
| Status | Select | Active, On Hold, Completed, Someday/Maybe |
| Area | Relation | Which life area this supports |
| Outcome | Text | What does "done" look like? |
| Due Date | Date | Project deadline |
| Start Date | Date | When the project began |
| Priority | Select | P1 (Urgent), P2 (High), P3 (Medium), P4 (Low) |
| Notes | Relation | Links to Notes Database |
| Resources | Relation | Links to Resources Database |
| Tasks | Relation | Links to Tasks (if using) |
| Progress | Select | Not Started, 25%, 50%, 75%, Complete |
| Next Action | Text | The very next physical action |
| Stakeholders | Text | Who's involved |
| Review Frequency | Select | Daily, Weekly, Bi-weekly, Monthly |
| Last Reviewed | Date | When last reviewed |
| Project Brief | Text | Full description |
| Success Metrics | Text | How to measure success |
| Files | Files & Media | Project files |
| Links | URL | External resources |

### Views

1. **Active Projects (Board)**
   - Filter: Status is "Active"
   - Group by: Priority
   - Show: Outcome, Due Date, Progress

2. **Projects by Area (Board)**
   - Group by: Area
   - Filter: Status is "Active"

3. **Project Timeline (Timeline)**
   - Timeline by: Start Date → Due Date

4. **Someday/Maybe (Table)**
   - Filter: Status is "Someday/Maybe"

5. **Completed (Table)**
   - Filter: Status is "Completed"
   - Sort by: Due Date (newest)

---

## Database #3: Areas Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Area Name | Title | Name of the life area |
| Icon | Text | Emoji icon |
| Description | Text | What this area encompasses |
| Standards | Text | What does "maintained" look like? |
| Current Projects | Relation | Active projects in this area |
| Notes | Relation | Notes related to this area |
| Resources | Relation | Resources for this area |
| Status | Select | Thriving, Stable, Needs Attention, Crisis |
| Review Frequency | Select | Weekly, Monthly, Quarterly |
| Last Reviewed | Date | When last reviewed |
| Goals | Text | Long-term goals for this area |
| Metrics | Text | How you measure this area |
| Rituals | Text | Regular practices for this area |

### Suggested Areas

1. **Health**
   - Physical fitness, nutrition, sleep, mental health

2. **Work/Career**
   - Job responsibilities, professional development

3. **Finances**
   - Budgeting, investing, financial planning

4. **Relationships**
   - Family, friends, romantic partner

5. **Home**
   - Living space, maintenance, organization

6. **Personal Development**
   - Learning, skills, self-improvement

7. **Creativity**
   - Hobbies, creative projects, side hustles

8. **Spirituality**
   - Beliefs, practices, purpose

### Views

1. **All Areas (Gallery)**
   - Show: Icon, Status, Description

2. **Area Health (Board)**
   - Group by: Status

3. **Review Schedule (Table)**
   - Sort by: Last Reviewed
   - Show: Review Frequency

---

## Database #4: Resources Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Topic Name | Title | Name of the topic/resource |
| Icon | Text | Emoji icon |
| Category | Select | Skill, Interest, Reference, Industry, Technology |
| Description | Text | What this topic covers |
| Related Areas | Relation | Links to Areas |
| Notes | Relation | Links to Notes |
| Books | Relation | Links to Reading List |
| Status | Select | Active Interest, Passive, Archive |
| Expertise Level | Select | Beginner, Intermediate, Advanced, Expert |
| Last Updated | Last edited time | Auto-generated |
| Key Concepts | Text | Main ideas/concepts |
| Best Resources | Text | Top recommended resources |
| People to Follow | Text | Experts in this field |
| Communities | Text | Groups, forums, communities |
| Tools | Text | Software, apps, tools |

### Suggested Resource Topics

**Skills**
- Writing, Public Speaking, Programming, Design, Marketing

**Interests**
- Philosophy, Psychology, History, Science, Art

**Professional**
- Industry trends, Best practices, Case studies

**Tools & Systems**
- Productivity, Note-taking, Project management

### Views

1. **All Topics (Table)**
   - Sort by: Last Updated

2. **By Category (Board)**
   - Group by: Category

3. **Active Interests (Gallery)**
   - Filter: Status is "Active Interest"

4. **Expertise Map (Board)**
   - Group by: Expertise Level

---

## Database #5: Reading List Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Title | Title | Book/article title |
| Author | Text | Author name(s) |
| Type | Select | Book, Article, Paper, Report, Blog Post |
| Status | Select | Want to Read, Reading, Completed, Abandoned |
| Format | Select | Physical, Kindle, Audiobook, PDF, Web |
| Resource Topic | Relation | Links to Resources |
| Rating | Select | 1-5 stars |
| Date Started | Date | When you started reading |
| Date Finished | Date | When you finished |
| Highlights | Relation | Links to Highlights |
| Summary Note | Relation | Link to summary note |
| Key Takeaways | Text | Main lessons learned |
| Favorite Quotes | Text | Best quotes |
| Would Recommend | Checkbox | Would you recommend this? |
| Recommend To | Text | Who would benefit from this |
| Genre | Multi-select | Self-help, Business, Fiction, Science, etc. |
| Source | Text | Where you found this |
| Link | URL | Link to book/article |
| Cover | Files & Media | Book cover image |
| Pages/Length | Number | Total pages or listening hours |
| Notes | Text | General notes |

### Views

1. **Reading Now (Table)**
   - Filter: Status is "Reading"

2. **Want to Read (Table)**
   - Filter: Status is "Want to Read"
   - Sort by: Created (newest)

3. **Completed (Gallery)**
   - Filter: Status is "Completed"
   - Sort by: Date Finished (newest)
   - Show: Cover, Rating, Author

4. **By Topic (Board)**
   - Group by: Resource Topic

5. **Favorites (Table)**
   - Filter: Rating is 5 stars OR Would Recommend is checked

6. **All Books (Table)**
   - Filter: Type is "Book"

---

## Database #6: Highlights & Quotes Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Highlight | Title | The actual quote/highlight |
| Source | Relation | Links to Reading List |
| Type | Select | Quote, Highlight, Idea, Concept |
| Page/Location | Text | Where in the source |
| My Thoughts | Text | Your commentary |
| Tags | Multi-select | Themes and topics |
| Resource Topic | Relation | Links to Resources |
| Actionable | Checkbox | Can this be applied? |
| Action | Text | How to apply this |
| Favorite | Checkbox | Star this highlight |
| Date Captured | Date | When you saved this |

### Views

1. **All Highlights (Table)**
   - Sort by: Date Captured (newest)

2. **By Source (Board)**
   - Group by: Source

3. **Favorites (Gallery)**
   - Filter: Favorite is checked

4. **Actionable (Table)**
   - Filter: Actionable is checked

5. **Random Review (Table)**
   - Sort by: Random (use formula with dates)

---

## Database #7: Web Clips Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Title | Title | Article/page title |
| URL | URL | Source URL |
| Clipped Date | Date | When you saved it |
| Status | Select | To Process, Read, Processed, Archive |
| Type | Select | Article, Tutorial, Video, Tool, Reference |
| Resource Topic | Relation | Links to Resources |
| Tags | Multi-select | Custom tags |
| Summary | Text | Brief summary |
| Key Points | Text | Main takeaways |
| Related Notes | Relation | Notes created from this |
| Rating | Select | 1-5 stars |
| Read Time | Select | 5 min, 15 min, 30 min, 1 hour+ |
| Author/Site | Text | Source author or website |
| Thumbnail | Files & Media | Preview image |

### Views

1. **Inbox (Table)**
   - Filter: Status is "To Process"
   - Sort by: Clipped Date (newest)

2. **To Read (Table)**
   - Filter: Status is "Read"

3. **By Topic (Board)**
   - Group by: Resource Topic

4. **Processed (Table)**
   - Filter: Status is "Processed"

---

## Database #8: Inbox/Quick Capture Database

### Properties

| Property Name | Type | Description |
|--------------|------|-------------|
| Capture | Title | Quick note or idea |
| Type | Select | Thought, Task, Idea, Reference, Question |
| Captured | Created time | Auto-generated |
| Source | Text | Where did this come from |
| Context | Text | Additional context |
| Processed | Checkbox | Has this been processed? |
| Move To | Select | Project, Area, Resource, Archive, Delete |
| Related | Relation | Related items |

### Views

1. **Unprocessed (Table)**
   - Filter: Processed is not checked
   - Sort by: Captured (newest)

2. **All Captures (Table)**
   - Sort by: Captured (newest)

---

## Template Pages

### Progressive Summarization Note Template

```markdown
# [Note Title]

**Source:** [Where this came from]
**Date:** [When captured]
**Tags:** [Relevant tags]

---

## Layer 1: Original Content / Capture
[Paste or write the original content here]

---

## Layer 2: Bold Passages
[Re-read and bold the most important passages]

---

## Layer 3: Highlighted Passages
[From the bolded text, highlight the most crucial points]

---

## Layer 4: Executive Summary
[In your own words, summarize the key insights in 2-3 sentences]

---

## Layer 5: Remix
[How does this connect to other ideas? What can you create from this?]

### Connections
- [[Related Note 1]]
- [[Related Note 2]]

### Applications
- How can I use this?
- What project does this support?

### Questions
- What am I still unclear about?
- What should I explore next?
```

### Book Summary Template

```markdown
# Book Summary: [Title]

**Author:** [Name]
**Date Read:** [Date]
**Rating:** [X/5 stars]

---

## The Book in 3 Sentences
1.
2.
3.

## Who Should Read It
[Who would benefit most from this book?]

## Top 5 Takeaways
1. **[Key Point 1]**: [Explanation]
2. **[Key Point 2]**: [Explanation]
3. **[Key Point 3]**: [Explanation]
4. **[Key Point 4]**: [Explanation]
5. **[Key Point 5]**: [Explanation]

## Summary

### Part 1: [Title]
[Summary of this section]

### Part 2: [Title]
[Summary of this section]

### Part 3: [Title]
[Summary of this section]

## Favorite Quotes
> "[Quote 1]" - p. XX

> "[Quote 2]" - p. XX

> "[Quote 3]" - p. XX

## How This Changed My Thinking
[What new perspectives or ideas did you gain?]

## Action Items
- [ ] [Specific action to take based on this book]
- [ ] [Another action]
- [ ] [Another action]

## Related Books/Resources
- [Book 1]
- [Book 2]

## Notes & Highlights
[Link to detailed highlights database]
```

### Weekly Review Template

```markdown
# Weekly Review - Week of [Date]

## Inbox Processing
- [ ] Process all items in Inbox
- [ ] Clear email to zero
- [ ] Review voice memos/notes
- [ ] Process web clips and saves

## Project Review
For each active project, ask:
- What's the current status?
- What's the next action?
- Is it still relevant?

### Active Projects Status
| Project | Status | Next Action | Notes |
|---------|--------|-------------|-------|
| | | | |

## Area Review
- [ ] Health: All good? Any concerns?
- [ ] Work: On track? Any fires?
- [ ] Finances: Bills paid? Budget on track?
- [ ] Relationships: Anyone to reach out to?
- [ ] Home: Anything need attention?

## Capture Review
- [ ] Review random past notes
- [ ] Connect new notes to existing ones
- [ ] Update outdated information

## Archive Check
- [ ] Any projects to complete/archive?
- [ ] Any resources no longer relevant?

## Planning Ahead
### This week's top priorities:
1.
2.
3.

### Upcoming deadlines:
-

### Calendar commitments:
-

## Reflection
### What went well?
-

### What could improve?
-

### Key insight this week:
-
```

### Meeting Notes Template

```markdown
# Meeting: [Meeting Title]

**Date:** [Date]
**Time:** [Start] - [End]
**Attendees:** [Names]
**Location/Link:** [Where]

---

## Agenda
1.
2.
3.

## Notes

### [Topic 1]
-

### [Topic 2]
-

### [Topic 3]
-

## Decisions Made
- [ ]

## Action Items
| Action | Owner | Due Date |
|--------|-------|----------|
| | | |

## Next Meeting
- Date:
- Topics to discuss:

## Key Takeaways
-

## Related
- [[Related Project]]
- [[Related Note]]
```

### Idea Note Template

```markdown
# Idea: [Title]

**Captured:** [Date]
**Status:** Raw / Developing / Ready to Execute

---

## The Idea
[Describe the idea in detail]

## Why This Matters
[Why is this idea valuable? What problem does it solve?]

## How It Works
[Explain the mechanics or implementation]

## Evidence / Examples
[Any supporting data, examples, or precedents]

## Potential Challenges
-

## Next Steps
1.
2.
3.

## Related Ideas
- [[Related Idea 1]]
- [[Related Idea 2]]

## Resources Needed
-

## Notes
[Additional thoughts]
```

---

## Dashboard Layout

### Top Section: Quick Access
```
+------------------+------------------+------------------+
|     Inbox        |  Current Focus   |  Recent Notes    |
|   (Count: X)     |   [Project]      |  (Last 5)        |
+------------------+------------------+------------------+
```

### Middle Section: PARA Overview
```
+--------------------------------+--------------------------------+
|          Projects              |           Areas                |
|    (Active count: X)           |    (Health indicators)         |
|    - Project 1                 |    - Health: Good             |
|    - Project 2                 |    - Work: Needs Attention     |
|    - Project 3                 |    - Finances: Good            |
+--------------------------------+--------------------------------+
|          Resources             |           Archive              |
|    (Topic cloud/list)          |    (Recently archived)         |
+--------------------------------+--------------------------------+
```

### Bottom Section: Reading & Capture
```
+--------------------------------+--------------------------------+
|      Currently Reading         |     Random Note Review         |
|      [Book Title]              |     (Rediscover old notes)     |
|      Progress: XX%             |                                |
+--------------------------------+--------------------------------+
```

---

## Workflows

### Capture Workflow
1. Capture everything to Inbox (notes, ideas, links, tasks)
2. Don't organize during capture - just get it down
3. Process Inbox during daily/weekly review
4. For each item: Delete, Do, Delegate, Defer, or File

### Processing Workflow
For each inbox item:
1. **What is it?** (Note, task, reference, idea)
2. **Is it actionable?**
   - Yes → Goes to Projects or Tasks
   - No → Reference material
3. **What project/area does it support?**
4. **Apply progressive summarization**
5. **Connect to existing notes**

### Weekly Review Workflow
1. **Get Clear** (30 min)
   - Empty inbox to zero
   - Process all captures
   - Review calendar

2. **Get Current** (20 min)
   - Review all projects
   - Update next actions
   - Archive completed items

3. **Get Creative** (10 min)
   - Review someday/maybe
   - Connect new ideas
   - Plan the week ahead

### Monthly Review Workflow
1. Review all Areas of life
2. Review project portfolio
3. Update Resource topics
4. Archive inactive items
5. Review and refine tags
6. Back up your system

---

## Tagging Strategy

### Suggested Tags

**Status Tags**
- #to-process
- #needs-review
- #evergreen
- #outdated

**Content Type Tags**
- #concept
- #how-to
- #example
- #question
- #framework
- #tool

**Source Tags**
- #book
- #article
- #podcast
- #video
- #conversation

**Project Stage Tags**
- #research
- #planning
- #execution
- #review

---

## Formulas Reference

### Days Since Last Edited
```
dateBetween(now(), prop("Last Edited"), "days")
```

### Note Quality Score
```
if(prop("Quality") == "Evergreen", 4,
  if(prop("Quality") == "Refined", 3,
    if(prop("Quality") == "Draft", 2, 1)))
```

### Connection Count
```
length(prop("Related Notes"))
```

### Review Status
```
if(empty(prop("Review Date")), "No review scheduled",
  if(prop("Review Date") < now(), "Overdue",
    if(dateBetween(prop("Review Date"), now(), "days") <= 7,
       "Review soon", "Scheduled")))
```

---

## Setup Instructions

### Step 1: Create the Structure
1. Create "Second Brain" as your main page
2. Create all databases as listed
3. Set up all properties for each database
4. Create relations between databases

### Step 2: Configure PARA
1. Create your Areas of Life
2. Add 5-10 current Projects
3. Define your Resource topics of interest
4. Leave Archive empty for now

### Step 3: Set Up Capture Systems
1. Create Inbox database
2. Set up Notion Web Clipper
3. Configure quick capture on mobile
4. Create email-to-Notion workflow (if desired)

### Step 4: Import Existing Notes
1. Import from other apps (Evernote, OneNote, etc.)
2. File into appropriate PARA categories
3. Add relations and tags
4. Don't try to perfect everything at once

### Step 5: Create Your Workflow
1. Schedule daily quick reviews (5 min)
2. Block time for weekly review (1 hour)
3. Set up monthly review calendar reminder
4. Create template buttons for common note types

### Step 6: Customize
1. Add/remove properties as needed
2. Create custom views for your workflow
3. Adjust templates to your style
4. Add automations (Notion API or Zapier)

---

## Tips for Success

1. **Capture First, Organize Later**: Don't let organizing slow down capturing
2. **Progressive Summarization**: Build up notes over multiple passes
3. **Links Over Folders**: Use relations to connect ideas across categories
4. **Regular Reviews**: The system only works if you use it consistently
5. **Start Small**: Don't try to capture everything at once
6. **Trust the System**: If it's in your Second Brain, you can forget it safely
7. **Keep It Simple**: Remove complexity that doesn't serve you

---

## Support

For questions or customization help, contact: [Your Email]

Version 1.0 | Last Updated: [Date]
