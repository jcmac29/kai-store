# Project Manager Dashboard - Notion Template

## Overview

This premium Project Manager Dashboard is a comprehensive project management system designed for professional project managers, team leads, and organizations. It includes everything you need to plan, execute, track, and deliver projects successfully: project portfolios, task management with dependencies, team resources, risk registers, stakeholder communications, budget tracking, and executive reporting.

**Price: $25** | **Premium Template**

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Projects Database](#projects-database)
3. [Tasks Database](#tasks-database)
4. [Team & Resources Database](#team--resources-database)
5. [Meeting Notes Database](#meeting-notes-database)
6. [Risk Register Database](#risk-register-database)
7. [Stakeholder Communication Log](#stakeholder-communication-log)
8. [Budget Tracking System](#budget-tracking-system)
9. [Status Report Templates](#status-report-templates)
10. [View Configurations](#view-configurations)
11. [Dashboard Setup](#dashboard-setup)
12. [Formulas Reference](#formulas-reference)
13. [Template Pages](#template-pages)
14. [Quick Start Guide](#quick-start-guide)

---

## System Architecture

### Database Structure

```
Project Manager Dashboard
├── Projects Database (Master project records)
├── Tasks Database (All tasks with dependencies)
├── Team Members (Resource pool)
├── Resource Allocations (Who's assigned where)
├── Meeting Notes (All project meetings)
├── Risk Register (Risk tracking & mitigation)
├── Stakeholder Log (Communications tracker)
├── Budget Items (Line-item budget tracking)
├── Status Reports (Weekly/monthly reports)
├── Documents (Project documentation)
└── Milestones (Key deliverables & gates)
```

### Database Relationships

```
Projects (1) ─────┬───── (Many) Tasks
                  ├───── (Many) Milestones
                  ├───── (Many) Budget Items
                  ├───── (Many) Risks
                  ├───── (Many) Meeting Notes
                  ├───── (Many) Status Reports
                  └───── (Many) Stakeholder Communications

Team Members (1) ─┬───── (Many) Tasks (Assignee)
                  ├───── (Many) Resource Allocations
                  └───── (Many) Meeting Notes (Attendees)

Tasks (1) ────────┬───── (Many) Tasks (Dependencies - Blocked By)
                  └───── (Many) Tasks (Dependencies - Blocks)
```

### Project Lifecycle Workflow

```
Initiation -> Planning -> Execution -> Monitoring -> Closing
     |            |           |            |            |
  Charter     Scope &     Task Mgmt    Status &     Lessons
  Approval    Schedule    & Delivery   Reporting    Learned
```

---

## Projects Database

### Database Setup

Create a new **Database - Full page** called **"Projects"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Project Name | Title | The project title |
| Project ID | Text | Unique identifier (e.g., PRJ-001) |
| Status | Select | Not Started, Planning, In Progress, On Hold, Completed, Cancelled |
| Phase | Select | Initiation, Planning, Execution, Monitoring & Control, Closing |
| Priority | Select | Critical, High, Medium, Low |
| Health | Select | On Track (Green), At Risk (Yellow), Off Track (Red), Blocked |
| Project Type | Select | Internal, Client, Strategic, Maintenance, Research |
| Department | Select | Engineering, Marketing, Operations, Sales, HR, Finance |
| Project Manager | Person | PM responsible |
| Sponsor | Person | Executive sponsor |
| Start Date | Date | Planned start |
| Target End Date | Date | Planned completion |
| Actual End Date | Date | Actual completion |
| Budget | Number | Total approved budget (formatted as currency) |
| Budget Spent | Rollup | Sum of Budget Items (Actual Cost) |
| Budget Remaining | Formula | See formulas section |
| Budget Variance | Formula | See formulas section |
| % Complete | Number | Overall completion percentage |
| Tasks | Relation | Link to Tasks database |
| Task Count | Rollup | Count of related tasks |
| Completed Tasks | Rollup | Count where Status = Complete |
| Task Completion % | Formula | See formulas section |
| Milestones | Relation | Link to Milestones database |
| Risks | Relation | Link to Risk Register |
| Open Risks | Rollup | Count where Status != Closed |
| Budget Items | Relation | Link to Budget Items database |
| Meeting Notes | Relation | Link to Meeting Notes |
| Status Reports | Relation | Link to Status Reports |
| Description | Text | Project overview |
| Objectives | Text | Key project objectives |
| Scope | Text | In scope / out of scope |
| Success Criteria | Text | How success is measured |
| Key Stakeholders | Text | Primary stakeholders |
| Dependencies | Text | External dependencies |
| Assumptions | Text | Key assumptions |
| Constraints | Text | Known constraints |
| Created | Created time | Auto-populated |
| Last Updated | Last edited time | Auto-populated |
| Tags | Multi-select | Custom tags for filtering |

### Status Definitions

| Status | Description | Actions Required |
|--------|-------------|------------------|
| **Not Started** | Project approved but not yet begun | Complete planning, assign resources |
| **Planning** | Active planning phase | Define scope, create schedule, estimate budget |
| **In Progress** | Active execution | Monitor tasks, track progress, manage risks |
| **On Hold** | Temporarily paused | Document reason, communicate to stakeholders |
| **Completed** | All deliverables complete | Close out, lessons learned, archive |
| **Cancelled** | Project terminated | Document reason, release resources |

### Health Indicator Definitions

| Health | Criteria | Action |
|--------|----------|--------|
| **On Track (Green)** | On schedule, within budget, no critical risks | Continue monitoring |
| **At Risk (Yellow)** | Minor schedule/budget variance OR medium risks | Mitigation required |
| **Off Track (Red)** | Significant variance OR critical risks materialized | Escalation required |
| **Blocked** | Cannot proceed due to external dependency | Escalation & dependency resolution |

### Project Page Template

```markdown
# [Project Icon] [Project Name]

## Project Overview

**Project ID:** [PRJ-XXX]
**Status:** [Status Badge]
**Health:** [Health Indicator]
**Phase:** [Current Phase]

---

## Quick Stats

| Metric | Value |
|--------|-------|
| Progress | [X]% Complete |
| Schedule | [X] days remaining |
| Budget | $[X] of $[Y] spent |
| Open Tasks | [X] of [Y] |
| Open Risks | [X] |

---

## Project Information

### Description
[What is this project about? What problem does it solve?]

### Objectives
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

### Success Criteria
- [ ] [Measurable criterion 1]
- [ ] [Measurable criterion 2]
- [ ] [Measurable criterion 3]

### Scope

**In Scope:**
- [Item 1]
- [Item 2]

**Out of Scope:**
- [Item 1]
- [Item 2]

---

## Key Dates

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Project Kickoff | [Date] | [Status] |
| Planning Complete | [Date] | [Status] |
| [Key Milestone 1] | [Date] | [Status] |
| [Key Milestone 2] | [Date] | [Status] |
| Project Completion | [Date] | [Status] |

---

## Team

| Role | Name | Responsibility |
|------|------|----------------|
| Project Manager | [Name] | Overall delivery |
| Sponsor | [Name] | Executive oversight |
| [Role] | [Name] | [Responsibility] |

---

## Project Tasks

[Linked Database: Tasks filtered to this project]

---

## Milestones

[Linked Database: Milestones filtered to this project]

---

## Budget Overview

[Linked Database: Budget Items filtered to this project]

**Summary:**
- Approved Budget: $[X]
- Spent to Date: $[X]
- Remaining: $[X]
- Variance: [X]%

---

## Risks & Issues

[Linked Database: Risks filtered to this project, sorted by Risk Score]

---

## Meeting Notes

[Linked Database: Meeting Notes filtered to this project, sorted by Date DESC]

---

## Status Reports

[Linked Database: Status Reports filtered to this project]

---

## Documents & Links

| Document | Link | Last Updated |
|----------|------|--------------|
| Project Charter | [Link] | [Date] |
| Requirements | [Link] | [Date] |
| Design Docs | [Link] | [Date] |
| Test Plan | [Link] | [Date] |

---

## Dependencies & Constraints

### External Dependencies
- [Dependency 1 - Owner - Expected Date]
- [Dependency 2 - Owner - Expected Date]

### Assumptions
- [Assumption 1]
- [Assumption 2]

### Constraints
- [Constraint 1]
- [Constraint 2]

---

## Change Log

| Date | Change | Requested By | Approved By |
|------|--------|--------------|-------------|
| | | | |

---

## Lessons Learned

*To be completed at project close*

### What Went Well
-

### What Could Be Improved
-

### Recommendations for Future Projects
-
```

---

## Tasks Database

### Database Setup

Create a new **Database - Full page** called **"Tasks"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Task Name | Title | The task description |
| Task ID | Text | Unique identifier (e.g., TSK-001) |
| Project | Relation | Link to Projects database |
| Status | Select | Not Started, In Progress, In Review, Blocked, Complete, Cancelled |
| Priority | Select | Critical, High, Medium, Low |
| Assignee | Person | Who's responsible |
| Secondary Assignee | Person | Backup/collaborator |
| Start Date | Date | When work should begin |
| Due Date | Date | Deadline |
| Completed Date | Date | Actual completion date |
| Estimated Hours | Number | Effort estimate |
| Actual Hours | Number | Time actually spent |
| Effort Variance | Formula | See formulas section |
| Blocked By | Relation | Self-relation (predecessor tasks) |
| Blocks | Relation | Self-relation (successor tasks) |
| Milestone | Relation | Link to Milestones database |
| Parent Task | Relation | Self-relation for subtasks |
| Subtasks | Relation | Self-relation (child tasks) |
| Task Type | Select | Development, Design, Review, Meeting, Documentation, Testing, Deployment, Research, Administrative |
| % Complete | Number | Progress percentage (0-100) |
| Description | Text | Detailed task description |
| Acceptance Criteria | Text | Definition of done |
| Notes | Text | Additional notes |
| Attachments | Files | Related files |
| Created | Created time | Auto-populated |
| Last Updated | Last edited time | Auto-populated |
| Days Until Due | Formula | See formulas section |
| Overdue | Formula | See formulas section |
| Tags | Multi-select | Custom tags |

### Task Status Definitions

| Status | Description | Visual |
|--------|-------------|--------|
| **Not Started** | Task created but work hasn't begun | Gray |
| **In Progress** | Actively being worked on | Blue |
| **In Review** | Work complete, awaiting approval | Yellow |
| **Blocked** | Cannot proceed (dependency/issue) | Red |
| **Complete** | Task finished and accepted | Green |
| **Cancelled** | Task no longer needed | Strikethrough |

### Task Dependencies Setup

**Creating Dependencies:**
1. Use the "Blocked By" relation to link predecessor tasks
2. The "Blocks" relation auto-populates as reverse
3. A task is blocked when any "Blocked By" task is not Complete

**Dependency Views:**
- Filter: Status = "Blocked" to see all blocked tasks
- Filter: "Blocked By" is not empty AND Status != Complete for dependency chain

### Task Page Template

```markdown
# [Task Name]

## Task Information

**Task ID:** [TSK-XXX]
**Project:** [Project Link]
**Status:** [Status]
**Priority:** [Priority]
**Assignee:** [Person]

---

## Schedule

| Field | Date |
|-------|------|
| Start Date | [Date] |
| Due Date | [Date] |
| Completed | [Date or TBD] |

**Days Remaining:** [X] days

---

## Effort

| Metric | Value |
|--------|-------|
| Estimated | [X] hours |
| Actual | [X] hours |
| Variance | [X]% |

---

## Description

[Detailed description of what needs to be done]

---

## Acceptance Criteria

- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

---

## Dependencies

### Blocked By (Must complete first)
[Linked database: Tasks linked in "Blocked By"]

### Blocks (Waiting on this task)
[Linked database: Tasks linked in "Blocks"]

---

## Subtasks

[Linked database: Tasks where Parent Task = this task]

- [ ] Subtask 1
- [ ] Subtask 2
- [ ] Subtask 3

---

## Progress Updates

| Date | Update | By |
|------|--------|-----|
| [Date] | [Progress note] | [Person] |

---

## Attachments & Links

[Files & URLs related to this task]

---

## Notes

[Additional notes, context, decisions made]
```

### Task Views

**1. Kanban Board**
- Group by: Status
- Properties shown: Assignee, Due Date, Priority, Project
- Drag to change status
- Filter by Project for project-specific board

**2. My Tasks**
- Filter: Assignee contains [Me]
- Group by: Status
- Sort by: Due Date (Ascending)

**3. Timeline / Gantt View**
- Timeline by: Start Date to Due Date
- Group by: Project
- Color by: Status or Priority

**4. Table View (All Tasks)**
- All properties visible
- Sort by: Due Date
- Group by: Project

**5. Overdue Tasks**
- Filter: Due Date is before Today AND Status is not Complete
- Sort by: Due Date (Ascending)
- Color code by how overdue

**6. Blocked Tasks**
- Filter: Status = Blocked
- Show: Blocked By relation

**7. Calendar View**
- By Due Date
- Color by: Priority or Project

---

## Team & Resources Database

### Team Members Database Setup

Create a new **Database - Full page** called **"Team Members"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Name | Title | Team member name |
| Email | Email | Contact email |
| Role | Select | Project Manager, Developer, Designer, QA, Analyst, Admin, Executive |
| Department | Select | Engineering, Marketing, Operations, etc. |
| Status | Select | Active, On Leave, Offboarded |
| Skills | Multi-select | Technical skills, certifications |
| Capacity | Number | Hours per week available |
| Hourly Rate | Number | Internal cost rate (optional) |
| Tasks | Relation | Link from Tasks (Assignee) |
| Active Tasks | Rollup | Count where Status != Complete |
| Total Hours Assigned | Rollup | Sum of Estimated Hours |
| Projects | Rollup | Unique projects from Tasks |
| Phone | Phone | Contact number |
| Avatar | Files | Profile photo |
| Manager | Relation | Self-relation |
| Direct Reports | Relation | Self-relation |
| Notes | Text | Additional info |

### Resource Allocation Database Setup

Create a new **Database - Full page** called **"Resource Allocations"**

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Allocation | Title | Auto: "[Person] - [Project] - [Period]" |
| Team Member | Relation | Link to Team Members |
| Project | Relation | Link to Projects |
| Start Date | Date | Allocation start |
| End Date | Date | Allocation end |
| Hours Per Week | Number | Committed hours |
| Allocation % | Number | Percentage of capacity |
| Role on Project | Select | Lead, Core, Support, Reviewer |
| Status | Select | Planned, Active, Complete |
| Notes | Text | Allocation notes |

### Resource Utilization Formula

```
Utilization % = (Total Hours Assigned / Capacity) * 100
```

Add this as a formula in Team Members:
```
round(prop("Total Hours Assigned") / prop("Capacity") * 100)
```

### Team Views

**1. Team Directory**
- Gallery view with avatars
- Properties: Role, Department, Email
- Filter: Status = Active

**2. Resource Capacity**
- Table view
- Show: Name, Capacity, Active Tasks, Total Hours, Utilization %
- Highlight overallocated (>100%)

**3. By Department**
- Group by: Department
- Useful for department heads

**4. Skills Matrix**
- Group by: Skills
- Find team members with specific skills

**5. Allocation Calendar**
- Timeline view of Resource Allocations
- See who's assigned where and when

### Team Member Page Template

```markdown
# [Avatar] [Name]

## Contact Information

**Email:** [email]
**Phone:** [phone]
**Department:** [department]
**Role:** [role]
**Reports To:** [manager]

---

## Availability

**Weekly Capacity:** [X] hours
**Current Utilization:** [X]%
**Status:** [Active/On Leave]

---

## Skills & Expertise

[Multi-select tags or list]

---

## Current Assignments

### Active Tasks
[Linked database: Tasks where Assignee = this person, Status != Complete]

### Project Allocations
[Linked database: Allocations where Team Member = this person, Status = Active]

---

## Workload Summary

| Project | Allocated Hours | % of Capacity |
|---------|-----------------|---------------|
| [Project 1] | [X] hrs/week | [X]% |
| [Project 2] | [X] hrs/week | [X]% |
| **Total** | **[X] hrs/week** | **[X]%** |

---

## Performance Notes

*For manager use*

---

## Direct Reports

[If applicable - linked to team members who report to this person]
```

---

## Meeting Notes Database

### Database Setup

Create a new **Database - Full page** called **"Meeting Notes"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Meeting Title | Title | Meeting name/topic |
| Date | Date | Meeting date |
| Time | Text | Start time |
| Duration | Number | Minutes |
| Meeting Type | Select | Kickoff, Status, Planning, Review, Retrospective, Stakeholder, Ad-hoc, Daily Standup |
| Project | Relation | Link to Projects database |
| Organizer | Person | Who scheduled |
| Attendees | Person | Who attended (multi) |
| Absentees | Person | Who was invited but absent |
| Location | Text | Room or video link |
| Status | Select | Scheduled, In Progress, Complete, Cancelled |
| Agenda | Text | Meeting agenda |
| Notes | Text | Meeting notes |
| Decisions | Text | Key decisions made |
| Action Items | Relation | Link to Tasks (create from meeting) |
| Follow-up Date | Date | Next meeting/check-in |
| Attachments | Files | Presentation, docs |
| Created | Created time | Auto-populated |
| Tags | Multi-select | Custom tags |

### Meeting Types & Cadence

| Meeting Type | Typical Cadence | Duration | Purpose |
|--------------|-----------------|----------|---------|
| Daily Standup | Daily | 15 min | Quick sync, blockers |
| Status Meeting | Weekly | 30-60 min | Progress review |
| Planning | Sprint/Phase start | 1-2 hrs | Plan upcoming work |
| Review/Demo | Sprint/Phase end | 1 hr | Show completed work |
| Retrospective | Sprint/Phase end | 1 hr | Process improvement |
| Stakeholder | Bi-weekly/Monthly | 30-60 min | Executive updates |
| Kickoff | Project start | 1-2 hrs | Launch project |

### Meeting Notes Page Template

```markdown
# [Meeting Title]

**Date:** [Date]
**Time:** [Time] - [End Time]
**Location:** [Room/Link]
**Type:** [Meeting Type]
**Project:** [Project Link]

---

## Attendees

**Present:**
- [Name] - [Role]
- [Name] - [Role]

**Absent:**
- [Name] - [Reason if known]

---

## Agenda

1. [Agenda item 1]
2. [Agenda item 2]
3. [Agenda item 3]

---

## Discussion Notes

### [Agenda Item 1]
[Notes from discussion]

### [Agenda Item 2]
[Notes from discussion]

### [Agenda Item 3]
[Notes from discussion]

---

## Decisions Made

| Decision | Made By | Date |
|----------|---------|------|
| [Decision 1] | [Person] | [Date] |
| [Decision 2] | [Person] | [Date] |

---

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| [Action 1] | [Person] | [Date] | [ ] |
| [Action 2] | [Person] | [Date] | [ ] |
| [Action 3] | [Person] | [Date] | [ ] |

---

## Parking Lot

*Items to discuss later*
- [Item 1]
- [Item 2]

---

## Next Meeting

**Date:** [Date]
**Focus:** [Topic]

---

## Attachments

[Meeting slides, documents, recordings]
```

### Specialized Meeting Templates

**Daily Standup Template:**
```markdown
# Daily Standup - [Date]

**Project:** [Project]
**Time:** [Time] ([X] minutes)

---

## Team Updates

### [Team Member 1]
**Yesterday:**
**Today:**
**Blockers:**

### [Team Member 2]
**Yesterday:**
**Today:**
**Blockers:**

### [Team Member 3]
**Yesterday:**
**Today:**
**Blockers:**

---

## Blockers to Address

| Blocker | Owner | Resolution |
|---------|-------|------------|
| | | |

---

## Announcements

-
```

**Sprint Planning Template:**
```markdown
# Sprint Planning - Sprint [X]

**Date:** [Date]
**Sprint Dates:** [Start] to [End]
**Sprint Goal:** [One sentence goal]

---

## Capacity

| Team Member | Available Days | Hours |
|-------------|----------------|-------|
| | | |
| **Total** | | |

---

## Sprint Backlog

| Task | Story Points | Assignee | Priority |
|------|--------------|----------|----------|
| | | | |

**Total Committed:** [X] points

---

## Risks & Dependencies

- [Risk/Dependency 1]
- [Risk/Dependency 2]

---

## Definition of Done Reminder

- [ ] Code complete
- [ ] Tests passing
- [ ] Code reviewed
- [ ] Documentation updated
- [ ] Deployed to staging
```

**Retrospective Template:**
```markdown
# Retrospective - Sprint [X]

**Date:** [Date]
**Facilitator:** [Name]
**Attendees:** [Names]

---

## Sprint Summary

- **Sprint Goal:** [Goal]
- **Achieved:** [Yes/No/Partial]
- **Velocity:** [X] points

---

## What Went Well

- [Item 1]
- [Item 2]
- [Item 3]

---

## What Could Be Improved

- [Item 1]
- [Item 2]
- [Item 3]

---

## Action Items for Next Sprint

| Action | Owner | Priority |
|--------|-------|----------|
| | | |

---

## Shoutouts

- [Recognition for team members]

---

## Notes

[Additional discussion points]
```

---

## Risk Register Database

### Database Setup

Create a new **Database - Full page** called **"Risk Register"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Risk Title | Title | Brief description of risk |
| Risk ID | Text | Unique identifier (RSK-001) |
| Project | Relation | Link to Projects database |
| Category | Select | Technical, Schedule, Resource, Budget, Scope, External, Quality, Security |
| Status | Select | Identified, Analyzing, Mitigating, Monitoring, Closed, Materialized |
| Probability | Select | Very Low (1), Low (2), Medium (3), High (4), Very High (5) |
| Impact | Select | Very Low (1), Low (2), Medium (3), High (4), Very High (5) |
| Risk Score | Formula | Probability x Impact (see formula) |
| Risk Level | Formula | Based on score (see formula) |
| Risk Description | Text | Detailed description |
| Triggers | Text | Warning signs |
| Consequence | Text | What happens if risk occurs |
| Mitigation Strategy | Select | Avoid, Transfer, Mitigate, Accept |
| Mitigation Plan | Text | Specific actions to reduce risk |
| Contingency Plan | Text | What to do if risk materializes |
| Owner | Person | Who's responsible for monitoring |
| Identified Date | Date | When risk was identified |
| Review Date | Date | Next scheduled review |
| Closed Date | Date | When risk was closed |
| Related Risks | Relation | Self-relation for linked risks |
| Notes | Text | Additional notes |
| Created | Created time | Auto-populated |
| Last Updated | Last edited time | Auto-populated |

### Risk Score Formula

**Probability/Impact Values:**
- Very Low = 1
- Low = 2
- Medium = 3
- High = 4
- Very High = 5

**Risk Score Formula:**
```
toNumber(slice(prop("Probability"), 0, 1)) * toNumber(slice(prop("Impact"), 0, 1))
```

*Note: Assumes format "X - Label" where X is the number*

**Alternative simpler approach:**
Use separate Number properties for Probability Value (1-5) and Impact Value (1-5), then:
```
prop("Probability Value") * prop("Impact Value")
```

**Risk Level Formula:**
```
if(prop("Risk Score") >= 15, "Critical",
  if(prop("Risk Score") >= 10, "High",
    if(prop("Risk Score") >= 5, "Medium", "Low")))
```

### Risk Matrix Reference

|                | Very Low Impact (1) | Low Impact (2) | Medium Impact (3) | High Impact (4) | Very High Impact (5) |
|----------------|---------------------|----------------|-------------------|-----------------|----------------------|
| **Very High Prob (5)** | 5 - Medium | 10 - High | 15 - Critical | 20 - Critical | 25 - Critical |
| **High Prob (4)** | 4 - Low | 8 - Medium | 12 - High | 16 - Critical | 20 - Critical |
| **Medium Prob (3)** | 3 - Low | 6 - Medium | 9 - Medium | 12 - High | 15 - Critical |
| **Low Prob (2)** | 2 - Low | 4 - Low | 6 - Medium | 8 - Medium | 10 - High |
| **Very Low Prob (1)** | 1 - Low | 2 - Low | 3 - Low | 4 - Low | 5 - Medium |

### Risk Page Template

```markdown
# [Risk Icon] [Risk Title]

**Risk ID:** [RSK-XXX]
**Project:** [Project Link]
**Status:** [Status Badge]
**Risk Level:** [Level Badge]

---

## Risk Assessment

| Factor | Rating |
|--------|--------|
| Probability | [Rating] |
| Impact | [Rating] |
| **Risk Score** | **[Score]** |
| **Risk Level** | **[Level]** |

---

## Risk Details

### Description
[Detailed description of the risk]

### Category
[Category]

### Trigger Conditions
What would indicate this risk is about to occur:
- [Trigger 1]
- [Trigger 2]

### Potential Consequences
If this risk materializes:
- [Consequence 1]
- [Consequence 2]

---

## Response Strategy

### Strategy Type
[Avoid / Transfer / Mitigate / Accept]

### Mitigation Plan
Actions to reduce probability or impact:
1. [Action 1] - Owner: [Name] - Due: [Date]
2. [Action 2] - Owner: [Name] - Due: [Date]

### Contingency Plan
If the risk occurs:
1. [Response action 1]
2. [Response action 2]

---

## Tracking

| Field | Value |
|-------|-------|
| Owner | [Person] |
| Identified | [Date] |
| Last Review | [Date] |
| Next Review | [Date] |

---

## Review Log

| Date | Reviewed By | Assessment | Notes |
|------|-------------|------------|-------|
| [Date] | [Person] | [Still valid/Changed/Closed] | [Notes] |

---

## Related Risks

[Links to related risks]

---

## Notes

[Additional context, decisions, updates]
```

### Risk Views

**1. Risk Matrix View**
- Group by: Risk Level (Critical > High > Medium > Low)
- Color by: Risk Level
- Properties: Project, Category, Owner, Risk Score

**2. By Project**
- Filter: Project = [Selected]
- Group by: Status
- Sort by: Risk Score (Descending)

**3. My Risks**
- Filter: Owner = [Me]
- Group by: Status

**4. Risks Requiring Review**
- Filter: Review Date is on or before Today
- Sort by: Review Date

**5. Open Risks**
- Filter: Status is not Closed AND Status is not Materialized
- Sort by: Risk Score (Descending)

**6. By Category**
- Group by: Category
- Identify patterns across projects

---

## Stakeholder Communication Log

### Database Setup

Create a new **Database - Full page** called **"Stakeholder Communications"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Subject | Title | Communication subject |
| Project | Relation | Link to Projects database |
| Type | Select | Email, Meeting, Call, Presentation, Report, Chat, Document Share |
| Direction | Select | Outbound, Inbound |
| Status | Select | Draft, Sent, Received, Acknowledged |
| Date | Date | Communication date |
| Time | Text | Time of communication |
| From | Person | Sender |
| To | Text | Recipients (names/roles) |
| Cc | Text | Copied parties |
| Stakeholder | Select | Sponsor, Client, Executive, Vendor, Team, External Partner |
| Priority | Select | High, Medium, Low |
| Summary | Text | Brief summary |
| Full Content | Text | Complete message/notes |
| Response Required | Checkbox | Does this need a response? |
| Response Due | Date | When response is needed |
| Response Received | Checkbox | Was response received? |
| Follow-up Action | Text | Next steps |
| Attachments | Files | Related documents |
| Related Communications | Relation | Self-relation for threads |
| Created | Created time | Auto-populated |
| Tags | Multi-select | Custom tags |

### Communication Page Template

```markdown
# [Subject]

**Type:** [Type]
**Direction:** [Inbound/Outbound]
**Date:** [Date] at [Time]
**Project:** [Project Link]

---

## Parties

**From:** [Sender]
**To:** [Recipients]
**Cc:** [Copied]

---

## Summary

[2-3 sentence summary of key points]

---

## Full Content

[Complete email text, meeting notes, or call summary]

---

## Key Points

- [Key point 1]
- [Key point 2]
- [Key point 3]

---

## Decisions & Commitments

| Item | Who | What | When |
|------|-----|------|------|
| | | | |

---

## Follow-up Required

**Action:** [What needs to happen]
**Owner:** [Who]
**Due:** [Date]

---

## Attachments

[Any attached documents]

---

## Related Communications

[Previous/follow-up messages in this thread]
```

### Stakeholder Communication Views

**1. By Project**
- Filter: Project = [Selected]
- Sort by: Date (Descending)

**2. Pending Responses**
- Filter: Response Required = checked AND Response Received = unchecked
- Sort by: Response Due

**3. By Stakeholder**
- Group by: Stakeholder type
- Track communication patterns

**4. Recent Communications**
- Sort by: Date (Descending)
- Limit to last 30 days

**5. Communication Log (Table)**
- All fields visible
- Exportable for compliance

---

## Budget Tracking System

### Budget Items Database Setup

Create a new **Database - Full page** called **"Budget Items"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Item | Title | Budget line item name |
| Project | Relation | Link to Projects database |
| Category | Select | Labor, Software, Hardware, Services, Travel, Training, Contingency, Other |
| Type | Select | Capital, Operating |
| Status | Select | Planned, Approved, Committed, Spent, Cancelled |
| Planned Amount | Number | Original budget (currency) |
| Approved Amount | Number | Approved budget (currency) |
| Committed Amount | Number | POs, contracts signed (currency) |
| Actual Cost | Number | Actual spend (currency) |
| Variance | Formula | See formulas section |
| Variance % | Formula | See formulas section |
| Vendor | Text | Vendor/supplier name |
| Invoice Number | Text | For tracking |
| PO Number | Text | Purchase order reference |
| Date Planned | Date | When originally planned |
| Date Approved | Date | Approval date |
| Date Spent | Date | When cost incurred |
| Approval Required | Checkbox | Needs approval? |
| Approved By | Person | Who approved |
| Notes | Text | Additional notes |
| Attachments | Files | Invoices, receipts, contracts |
| Created | Created time | Auto-populated |
| Tags | Multi-select | Custom tags |

### Budget Formulas

**Variance (Amount):**
```
prop("Approved Amount") - prop("Actual Cost")
```

**Variance Percentage:**
```
if(prop("Approved Amount") > 0,
  round((prop("Approved Amount") - prop("Actual Cost")) / prop("Approved Amount") * 100 * 10) / 10,
  0)
```

**Budget Status Indicator:**
```
if(prop("Variance %") >= 10, "Under Budget",
  if(prop("Variance %") >= 0, "On Budget",
    if(prop("Variance %") >= -10, "Slight Overrun", "Over Budget")))
```

### Project-Level Budget Formulas

In the **Projects** database:

**Budget Spent (Rollup):**
- Property: Budget Items relation
- Calculate: Sum
- Field: Actual Cost

**Budget Remaining:**
```
prop("Budget") - prop("Budget Spent")
```

**Budget Variance %:**
```
if(prop("Budget") > 0,
  round((prop("Budget") - prop("Budget Spent")) / prop("Budget") * 100 * 10) / 10,
  0)
```

**Budget Health:**
```
if(prop("Budget Variance %") >= 10, "Under Budget",
  if(prop("Budget Variance %") >= 0, "On Budget",
    if(prop("Budget Variance %") >= -10, "Slight Overrun", "Over Budget")))
```

### Budget Tracking Template

```markdown
# [Project Name] - Budget Tracker

## Budget Summary

| Metric | Amount |
|--------|--------|
| **Total Budget** | $[X] |
| **Approved** | $[X] |
| **Committed** | $[X] |
| **Spent** | $[X] |
| **Remaining** | $[X] |
| **Variance** | [X]% |

---

## Budget by Category

| Category | Budgeted | Actual | Variance |
|----------|----------|--------|----------|
| Labor | $[X] | $[X] | [X]% |
| Software | $[X] | $[X] | [X]% |
| Hardware | $[X] | $[X] | [X]% |
| Services | $[X] | $[X] | [X]% |
| Travel | $[X] | $[X] | [X]% |
| Training | $[X] | $[X] | [X]% |
| Contingency | $[X] | $[X] | [X]% |
| Other | $[X] | $[X] | [X]% |
| **Total** | **$[X]** | **$[X]** | **[X]%** |

---

## Spend Forecast

| Month | Planned | Actual | Cumulative |
|-------|---------|--------|------------|
| [Month 1] | $[X] | $[X] | $[X] |
| [Month 2] | $[X] | $[X] | $[X] |
| [Month 3] | $[X] | $[X] | $[X] |

---

## Budget Items

[Linked database: Budget Items for this project]

---

## Pending Approvals

[Filtered view: Status = Planned, Approval Required = true]

---

## Recent Expenditures

[Filtered view: Last 30 days, sorted by Date Spent]

---

## Budget Notes

### Variances Explanation
[Explain any significant variances]

### Forecasting Notes
[Expected changes, upcoming large expenses]

### Risks
[Budget-related risks]
```

### Budget Views

**1. Budget Overview (Table)**
- Group by: Category
- Show: Planned, Approved, Actual, Variance
- Sum totals

**2. Pending Approvals**
- Filter: Status = Planned, Approval Required = checked
- Sort by: Planned Amount (Descending)

**3. By Project**
- Filter: Project = [Selected]
- Group by: Category

**4. Monthly Spend**
- Filter: Date Spent = This Month
- Group by: Project

**5. Over Budget Items**
- Filter: Variance < 0
- Sort by: Variance (Ascending)

---

## Status Report Templates

### Status Reports Database Setup

Create a new **Database - Full page** called **"Status Reports"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Report Title | Title | Auto: "[Project] - [Period]" |
| Project | Relation | Link to Projects database |
| Report Period | Select | Weekly, Monthly, Quarterly |
| Period Start | Date | Reporting period start |
| Period End | Date | Reporting period end |
| Report Date | Date | Date report created |
| Author | Person | Who wrote report |
| Overall Status | Select | On Track, At Risk, Off Track |
| Schedule Status | Select | On Track, At Risk, Off Track |
| Budget Status | Select | On Track, At Risk, Off Track |
| Scope Status | Select | On Track, At Risk, Off Track |
| Executive Summary | Text | Brief overview |
| Accomplishments | Text | What was completed |
| Planned Activities | Text | What's coming next |
| Issues | Text | Current problems |
| Risks | Text | Key risks |
| Decisions Needed | Text | Items requiring decision |
| Metrics | Text | Key metrics/KPIs |
| Notes | Text | Additional info |
| Attachments | Files | Supporting documents |
| Created | Created time | Auto-populated |

### Weekly Status Report Template

```markdown
# Weekly Status Report

**Project:** [Project Name]
**Period:** [Start Date] - [End Date]
**Report Date:** [Date]
**Author:** [Name]

---

## Executive Summary

[2-3 sentences on overall project status]

---

## Overall Status: [On Track / At Risk / Off Track]

| Dimension | Status | Trend |
|-----------|--------|-------|
| Schedule | [Status] | [Improving/Stable/Declining] |
| Budget | [Status] | [Improving/Stable/Declining] |
| Scope | [Status] | [Improving/Stable/Declining] |
| Quality | [Status] | [Improving/Stable/Declining] |

---

## Key Metrics

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| % Complete | [X]% | [X]% | [On/Behind/Ahead] |
| Tasks Completed | [X] | [X] | |
| Open Issues | [X] | [X] | |
| Budget Spent | $[X] | $[X] | |

---

## Accomplishments This Week

- [x] [Accomplishment 1]
- [x] [Accomplishment 2]
- [x] [Accomplishment 3]

---

## Planned for Next Week

- [ ] [Planned item 1]
- [ ] [Planned item 2]
- [ ] [Planned item 3]

---

## Issues & Blockers

| Issue | Impact | Owner | Resolution Plan | Target Date |
|-------|--------|-------|-----------------|-------------|
| [Issue 1] | [H/M/L] | [Name] | [Plan] | [Date] |
| [Issue 2] | [H/M/L] | [Name] | [Plan] | [Date] |

---

## Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | [H/M/L] | [H/M/L] | [Action] |
| [Risk 2] | [H/M/L] | [H/M/L] | [Action] |

---

## Decisions Needed

| Decision | Context | Needed By | Decision Maker |
|----------|---------|-----------|----------------|
| [Decision 1] | [Why needed] | [Date] | [Person] |

---

## Upcoming Milestones

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| [Milestone 1] | [Date] | [On Track/At Risk] |
| [Milestone 2] | [Date] | [On Track/At Risk] |

---

## Notes

[Any additional context, announcements, or information]

---

**Next Report Due:** [Date]
```

### Monthly Status Report Template

```markdown
# Monthly Status Report

**Project:** [Project Name]
**Month:** [Month Year]
**Report Date:** [Date]
**Author:** [Name]

---

## Executive Summary

[Paragraph summarizing month's progress, key achievements, and outlook]

---

## Project Health

| Dimension | Status | Trend | Notes |
|-----------|--------|-------|-------|
| **Overall** | [Green/Yellow/Red] | [Arrow] | |
| Schedule | [Status] | [Trend] | [Brief note] |
| Budget | [Status] | [Trend] | [Brief note] |
| Scope | [Status] | [Trend] | [Brief note] |
| Quality | [Status] | [Trend] | [Brief note] |
| Resources | [Status] | [Trend] | [Brief note] |

---

## Progress Summary

### Overall Progress
- **Planned Completion:** [X]%
- **Actual Completion:** [X]%
- **Variance:** [X]%

### Milestone Progress

| Milestone | Baseline Date | Current Date | Status |
|-----------|---------------|--------------|--------|
| [Milestone 1] | [Date] | [Date] | [Complete/On Track/Delayed] |
| [Milestone 2] | [Date] | [Date] | [Complete/On Track/Delayed] |
| [Milestone 3] | [Date] | [Date] | [Complete/On Track/Delayed] |

---

## Budget Summary

| Category | Budget | Spent MTD | Spent YTD | Remaining | Forecast |
|----------|--------|-----------|-----------|-----------|----------|
| Labor | $[X] | $[X] | $[X] | $[X] | $[X] |
| Non-Labor | $[X] | $[X] | $[X] | $[X] | $[X] |
| **Total** | **$[X]** | **$[X]** | **$[X]** | **$[X]** | **$[X]** |

**Budget Variance:** [X]% [Over/Under]
**Explanation:** [If variance > 5%]

---

## Key Accomplishments

### Major Deliverables Completed
1. [Deliverable 1]
2. [Deliverable 2]
3. [Deliverable 3]

### Other Accomplishments
- [Achievement 1]
- [Achievement 2]

---

## Next Month's Plan

### Key Objectives
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

### Planned Deliverables
| Deliverable | Target Date | Owner |
|-------------|-------------|-------|
| [Deliverable 1] | [Date] | [Name] |
| [Deliverable 2] | [Date] | [Name] |

---

## Issues & Risks

### Open Issues

| ID | Issue | Impact | Owner | Status | Target Resolution |
|----|-------|--------|-------|--------|-------------------|
| [1] | [Issue] | [H/M/L] | [Name] | [Status] | [Date] |

### Top Risks

| ID | Risk | Prob | Impact | Score | Mitigation | Owner |
|----|------|------|--------|-------|------------|-------|
| [1] | [Risk] | [H/M/L] | [H/M/L] | [Score] | [Action] | [Name] |

---

## Resource Status

| Resource | Allocation | Utilization | Notes |
|----------|------------|-------------|-------|
| [Name 1] | [X]% | [X]% | |
| [Name 2] | [X]% | [X]% | |

### Resource Concerns
[Any staffing issues, gaps, or changes needed]

---

## Decisions & Escalations

### Decisions Made This Month
| Decision | Made By | Date | Impact |
|----------|---------|------|--------|
| [Decision] | [Person] | [Date] | [Impact] |

### Decisions Needed
| Decision | Context | Needed By | Decision Maker |
|----------|---------|-----------|----------------|
| [Decision] | [Why] | [Date] | [Person] |

### Escalations
| Item | Escalated To | Date | Status |
|------|--------------|------|--------|
| [Item] | [Person] | [Date] | [Status] |

---

## Stakeholder Communication

| Stakeholder | Communication | Date | Key Message |
|-------------|---------------|------|-------------|
| [Sponsor] | [Type] | [Date] | [Summary] |
| [Client] | [Type] | [Date] | [Summary] |

---

## Lessons Learned

### What Worked Well
- [Item 1]

### What Could Be Improved
- [Item 1]

---

## Appendix

### Detailed Metrics
[Additional data, charts, or detailed breakdowns]

### Change Log
| Date | Change | Requestor | Status |
|------|--------|-----------|--------|
| | | | |
```

### Executive Dashboard Report Template

```markdown
# Executive Dashboard

**Date:** [Date]
**Portfolio:** [All Projects / Department]

---

## Portfolio Overview

### Project Health Summary

| Health | Count | % of Portfolio |
|--------|-------|----------------|
| On Track (Green) | [X] | [X]% |
| At Risk (Yellow) | [X] | [X]% |
| Off Track (Red) | [X] | [X]% |
| **Total Active** | **[X]** | **100%** |

---

## Project Status Matrix

| Project | PM | Phase | Health | Schedule | Budget | Key Issue |
|---------|-----|-------|--------|----------|--------|-----------|
| [Proj 1] | [PM] | [Phase] | [G/Y/R] | [G/Y/R] | [G/Y/R] | [Issue] |
| [Proj 2] | [PM] | [Phase] | [G/Y/R] | [G/Y/R] | [G/Y/R] | [Issue] |

---

## Budget Summary

| Metric | Amount |
|--------|--------|
| Total Portfolio Budget | $[X] |
| Spent to Date | $[X] |
| Remaining | $[X] |
| Variance | [X]% |

### By Project
| Project | Budget | Spent | Variance |
|---------|--------|-------|----------|
| [Proj 1] | $[X] | $[X] | [X]% |
| [Proj 2] | $[X] | $[X] | [X]% |

---

## Key Milestones (Next 30 Days)

| Project | Milestone | Date | Status |
|---------|-----------|------|--------|
| [Proj] | [Milestone] | [Date] | [Status] |

---

## Top Risks Across Portfolio

| Project | Risk | Score | Owner | Status |
|---------|------|-------|-------|--------|
| [Proj] | [Risk] | [Score] | [Name] | [Status] |

---

## Decisions Required

| Project | Decision | Impact | Needed By |
|---------|----------|--------|-----------|
| [Proj] | [Decision] | [Impact] | [Date] |

---

## Resource Utilization

| Department | Capacity | Allocated | Utilization |
|------------|----------|-----------|-------------|
| [Dept 1] | [X] hrs | [X] hrs | [X]% |

---

## Highlights

### Achievements
- [Achievement 1]
- [Achievement 2]

### Concerns
- [Concern 1]
- [Concern 2]

---

**Next Update:** [Date]
```

---

## View Configurations

### Kanban Board Setup

**Purpose:** Visualize task flow through stages

**Configuration:**
1. Create new view: Board
2. Group by: Status
3. Show properties: Assignee, Due Date, Priority, Project
4. Enable: Sub-groups by Priority (optional)

**Column Order:**
1. Not Started
2. In Progress
3. In Review
4. Blocked (highlight red)
5. Complete

**Tips:**
- Use colored labels for priority
- Set WIP limits mentally (e.g., max 3 "In Progress" per person)
- Drag cards to update status

---

### Timeline / Gantt View Setup

**Purpose:** Visualize project schedule and dependencies

**Configuration:**
1. Create new view: Timeline
2. Timeline by: Start Date and Due Date
3. Group by: Project or Milestone
4. Show table properties: Task Name, Assignee, Status

**Dependency Visualization:**
- While Notion doesn't have native dependency arrows, use:
  - Color coding by dependency chain
  - Parent/child task grouping
  - Manual timeline arrangement

**Tips:**
- Use "Show time" for precise scheduling
- Group by Milestone for phase view
- Filter to specific projects

---

### Calendar View Setup

**Purpose:** See deadlines and events on calendar

**Configuration:**
1. Create new view: Calendar
2. Date property: Due Date
3. Show: Task Name, Status (as color), Assignee

**Best Uses:**
- Deadline tracking
- Meeting scheduling
- Milestone visibility

**Tips:**
- Filter by project for focused view
- Use with Meeting Notes database
- Click date to quick-add tasks

---

### Table View Setup

**Purpose:** Detailed data view with all properties

**Configuration:**
1. Create new view: Table
2. Show all relevant columns
3. Enable sorting and filtering
4. Group as needed

**Common Table Configurations:**

**All Tasks Table:**
- Columns: Task Name, Project, Status, Assignee, Priority, Due Date, % Complete
- Sort: Due Date (Ascending)
- Filter: Status is not Complete

**Resource Workload Table:**
- Columns: Name, Active Tasks, Total Hours, Utilization %
- Sort: Utilization % (Descending)
- Highlight: Utilization > 100%

**Budget Table:**
- Columns: Item, Category, Planned, Actual, Variance
- Group: By Category
- Sum: Totals row

---

### Gallery View Setup

**Purpose:** Visual card layout

**Best Uses:**
- Team directory with photos
- Project portfolio overview
- Meeting notes browsing

**Configuration:**
1. Create new view: Gallery
2. Card preview: Files property (for images) or None
3. Card size: Small/Medium/Large
4. Show properties: 2-3 key fields

---

### Filter & Sort Recipes

**My Tasks Due This Week:**
```
Filter:
- Assignee contains [Me]
- AND Due Date is within "This Week"
- AND Status is not "Complete"
Sort:
- Due Date (Ascending)
```

**Overdue Tasks:**
```
Filter:
- Due Date is before Today
- AND Status is not "Complete"
- AND Status is not "Cancelled"
Sort:
- Due Date (Ascending) [Most overdue first]
```

**High Priority Unassigned:**
```
Filter:
- Priority is "Critical" or "High"
- AND Assignee is empty
Sort:
- Priority (Descending), then Due Date (Ascending)
```

**Project Tasks by Status:**
```
Filter:
- Project is [Selected Project]
Group:
- Status
Sort within groups:
- Priority (Descending)
```

**Upcoming Milestones:**
```
Filter:
- Due Date is within "Next 30 Days"
Sort:
- Due Date (Ascending)
```

**Resource Over-Allocation:**
```
Filter:
- Utilization % is greater than 100
Sort:
- Utilization % (Descending)
```

---

## Dashboard Setup

### Main Project Manager Dashboard

```markdown
# Project Manager Dashboard

---

## Quick Actions

[+ New Project]  [+ New Task]  [+ Log Communication]  [+ Meeting Notes]

---

## My Focus Today

### My Tasks Due Today/Overdue
[Linked database: Tasks where Assignee = Me, Due Date <= Today, Status != Complete]

### My Meetings Today
[Linked database: Meetings where Date = Today, Attendees contains Me]

---

## Project Portfolio

### Active Projects Overview
[Linked database: Projects where Status = In Progress, Gallery or Table view]

| Project | Health | Progress | Budget | Next Milestone |
|---------|--------|----------|--------|----------------|

### Projects At Risk
[Linked database: Projects where Health = At Risk or Off Track]

---

## Task Pipeline

[Linked database: Tasks, Kanban view by Status, filtered to active]

| Not Started | In Progress | In Review | Blocked | Complete |
|-------------|-------------|-----------|---------|----------|

---

## This Week's Schedule

[Linked database: Tasks, Calendar view, filtered to This Week]

---

## Key Metrics

| Metric | Value | Trend |
|--------|-------|-------|
| Active Projects | [X] | |
| Tasks Due This Week | [X] | |
| Overdue Tasks | [X] | [Alert if > 0] |
| Team Utilization | [X]% | |
| Open Risks (High+) | [X] | |

---

## Recent Activity

### Recently Updated Tasks
[Linked database: Tasks sorted by Last Updated, limit 5]

### Recent Communications
[Linked database: Stakeholder Communications, last 7 days]

---

## Upcoming Milestones

[Linked database: Milestones due in next 30 days]

| Milestone | Project | Date | Status |
|-----------|---------|------|--------|

---

## Top Risks

[Linked database: Risks where Level = Critical or High, Status = Open]

---

## Resource Overview

[Linked database: Team Members showing utilization]

---

## Quick Links

- [Project Templates]
- [Meeting Templates]
- [Report Templates]
- [Process Documentation]
```

### Project-Specific Dashboard

```markdown
# [Project Name] Dashboard

---

## Project Status

**Overall Health:** [Status Badge]
**Phase:** [Current Phase]
**Progress:** [X]% Complete

| Dimension | Status |
|-----------|--------|
| Schedule | [G/Y/R] |
| Budget | [G/Y/R] |
| Scope | [G/Y/R] |
| Quality | [G/Y/R] |

---

## Quick Stats

| Metric | Value |
|--------|-------|
| Days Remaining | [X] |
| Tasks Complete | [X] of [Y] |
| Budget Remaining | $[X] |
| Open Risks | [X] |
| Open Issues | [X] |

---

## Task Board

[Linked database: This project's tasks, Kanban view]

---

## Timeline

[Linked database: This project's tasks, Timeline view]

---

## Team

[Linked database: Resource Allocations for this project]

---

## Budget

[Linked database: Budget Items for this project]

---

## Risks

[Linked database: Risks for this project, sorted by Risk Score]

---

## Recent Updates

### Latest Status Report
[Most recent status report]

### Recent Meetings
[Linked database: Meeting Notes, last 5]

### Recent Communications
[Linked database: Stakeholder Communications, last 5]
```

### Team Lead Dashboard

```markdown
# Team Lead Dashboard

---

## My Team

[Linked database: Team Members in my department/reports]

### Workload Summary
| Team Member | Active Tasks | Hours Allocated | Utilization |
|-------------|--------------|-----------------|-------------|

### Availability
[Calendar view of team allocations]

---

## Team's Tasks

### By Status
[Kanban board of all team tasks]

### Overdue
[List of overdue tasks by team member]

### Blocked
[Tasks that need intervention]

---

## This Week's Priorities

[Team tasks due this week, sorted by priority]

---

## Upcoming PTO / Availability

| Team Member | Dates | Coverage Plan |
|-------------|-------|---------------|

---

## Performance Snapshot

### Tasks Completed This Week
[Count by team member]

### On-Time Completion Rate
[Metric]
```

---

## Formulas Reference

### Task Formulas

**Days Until Due:**
```
if(empty(prop("Due Date")), "",
  dateBetween(prop("Due Date"), now(), "days"))
```

**Is Overdue:**
```
if(and(not(empty(prop("Due Date"))),
       prop("Status") != "Complete",
       prop("Due Date") < now()),
   true, false)
```

**Effort Variance:**
```
if(and(prop("Estimated Hours") > 0, prop("Actual Hours") > 0),
  round((prop("Actual Hours") - prop("Estimated Hours")) / prop("Estimated Hours") * 100),
  0)
```

**Task Status Emoji:**
```
if(prop("Status") == "Complete", "Done",
  if(prop("Status") == "Blocked", "Blocked",
    if(prop("Is Overdue"), "Overdue",
      if(prop("Days Until Due") <= 2, "Due Soon", ""))))
```

---

### Project Formulas

**Task Completion %:**
```
if(prop("Task Count") > 0,
  round(prop("Completed Tasks") / prop("Task Count") * 100),
  0)
```

**Budget Remaining:**
```
prop("Budget") - prop("Budget Spent")
```

**Budget Variance %:**
```
if(prop("Budget") > 0,
  round((prop("Budget Spent") - prop("Budget")) / prop("Budget") * 100 * 10) / 10,
  0)
```

**Days Remaining:**
```
if(empty(prop("Target End Date")), "",
  max(0, dateBetween(prop("Target End Date"), now(), "days")))
```

**Project Duration (Days):**
```
if(or(empty(prop("Start Date")), empty(prop("Target End Date"))), "",
  dateBetween(prop("Target End Date"), prop("Start Date"), "days"))
```

**Is On Schedule:**
```
if(empty(prop("Target End Date")), "",
  if(prop("Target End Date") >= now(), "On Schedule", "Behind Schedule"))
```

---

### Risk Formulas

**Risk Score (with number values):**
```
prop("Probability Value") * prop("Impact Value")
```

**Risk Level:**
```
if(prop("Risk Score") >= 15, "Critical",
  if(prop("Risk Score") >= 10, "High",
    if(prop("Risk Score") >= 5, "Medium", "Low")))
```

**Risk Level Emoji:**
```
if(prop("Risk Score") >= 15, "[!] Critical",
  if(prop("Risk Score") >= 10, "[!] High",
    if(prop("Risk Score") >= 5, "[*] Medium", "Low")))
```

**Days Until Review:**
```
if(empty(prop("Review Date")), "No review scheduled",
  dateBetween(prop("Review Date"), now(), "days"))
```

---

### Budget Formulas

**Variance (Amount):**
```
prop("Approved Amount") - prop("Actual Cost")
```

**Variance %:**
```
if(prop("Approved Amount") > 0,
  round((prop("Approved Amount") - prop("Actual Cost")) / prop("Approved Amount") * 100 * 10) / 10,
  0)
```

**Budget Status:**
```
if(prop("Variance %") >= 10, "Under Budget",
  if(prop("Variance %") >= 0, "On Budget",
    if(prop("Variance %") >= -10, "Slight Overrun", "Over Budget")))
```

---

### Team/Resource Formulas

**Utilization %:**
```
if(prop("Capacity") > 0,
  round(prop("Total Hours Assigned") / prop("Capacity") * 100),
  0)
```

**Utilization Status:**
```
if(prop("Utilization %") > 100, "Over-allocated",
  if(prop("Utilization %") > 80, "High Utilization",
    if(prop("Utilization %") > 50, "Normal", "Under-utilized")))
```

---

### Date Formulas

**Current Week Number:**
```
formatDate(now(), "W")
```

**Current Quarter:**
```
"Q" + format(ceil(toNumber(formatDate(now(), "M")) / 3))
```

**Working Days Between Dates:**
```
// Notion doesn't have native workday calculation
// Use manual calculation or integrate with external tools
dateBetween(prop("End Date"), prop("Start Date"), "days")
```

---

## Template Pages

### Project Charter Template

```markdown
# Project Charter: [Project Name]

**Version:** 1.0
**Date:** [Date]
**Author:** [Name]
**Status:** [Draft / Approved]

---

## 1. Project Overview

### 1.1 Project Name
[Full project name]

### 1.2 Project Description
[2-3 paragraph description of what the project will accomplish]

### 1.3 Business Case
[Why is this project needed? What problem does it solve?]

### 1.4 Project Objectives
| Objective | Success Measure |
|-----------|-----------------|
| [Objective 1] | [How measured] |
| [Objective 2] | [How measured] |
| [Objective 3] | [How measured] |

---

## 2. Scope

### 2.1 In Scope
- [Deliverable 1]
- [Deliverable 2]
- [Feature/capability 1]
- [Feature/capability 2]

### 2.2 Out of Scope
- [Explicitly excluded item 1]
- [Explicitly excluded item 2]

### 2.3 Assumptions
- [Assumption 1]
- [Assumption 2]

### 2.4 Constraints
- [Constraint 1]
- [Constraint 2]

---

## 3. Stakeholders

| Stakeholder | Role | Interest | Influence |
|-------------|------|----------|-----------|
| [Name] | Sponsor | High | High |
| [Name] | Project Manager | High | High |
| [Name] | End User | High | Medium |
| [Name] | Vendor | Medium | Low |

---

## 4. Project Team

| Role | Name | Responsibilities | Allocation |
|------|------|------------------|------------|
| Project Sponsor | [Name] | Executive oversight, funding | As needed |
| Project Manager | [Name] | Day-to-day management, delivery | 100% |
| [Role] | [Name] | [Responsibilities] | [X]% |

---

## 5. Timeline

### 5.1 Key Milestones

| Milestone | Target Date | Description |
|-----------|-------------|-------------|
| Project Kickoff | [Date] | Official project start |
| Requirements Complete | [Date] | All requirements documented and approved |
| Design Complete | [Date] | Solution design approved |
| Development Complete | [Date] | All features built |
| Testing Complete | [Date] | All testing passed |
| Go-Live | [Date] | Production deployment |
| Project Close | [Date] | Formal project closure |

### 5.2 Project Phases

| Phase | Start | End | Key Deliverables |
|-------|-------|-----|------------------|
| Initiation | [Date] | [Date] | Charter, Stakeholder Register |
| Planning | [Date] | [Date] | Project Plan, Schedule, Budget |
| Execution | [Date] | [Date] | [Deliverables] |
| Closing | [Date] | [Date] | Lessons Learned, Final Report |

---

## 6. Budget

### 6.1 Budget Summary

| Category | Amount |
|----------|--------|
| Labor | $[X] |
| Software/Tools | $[X] |
| Hardware | $[X] |
| External Services | $[X] |
| Training | $[X] |
| Contingency (10-15%) | $[X] |
| **Total** | **$[X]** |

### 6.2 Funding Source
[Where is the budget coming from?]

### 6.3 Budget Approval
[Approval process and authority]

---

## 7. Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | [H/M/L] | [H/M/L] | [Strategy] |
| [Risk 2] | [H/M/L] | [H/M/L] | [Strategy] |

---

## 8. Success Criteria

The project will be considered successful when:
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
- [ ] Project completed within [X]% of budget
- [ ] Project completed within [X] days of target date

---

## 9. Communication Plan

| Audience | Communication | Frequency | Owner |
|----------|---------------|-----------|-------|
| Sponsor | Status Report | Weekly | PM |
| Stakeholders | Status Update | Bi-weekly | PM |
| Team | Stand-up | Daily | PM |
| All | Newsletter | Monthly | PM |

---

## 10. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Sponsor | | | |
| Project Manager | | | |
| Key Stakeholder | | | |

---

**Document Control:**
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial version |
```

### Lessons Learned Template

```markdown
# Lessons Learned: [Project Name]

**Date:** [Date]
**Facilitator:** [Name]
**Participants:** [Names]

---

## Project Summary

| Attribute | Value |
|-----------|-------|
| Project Duration | [X] months |
| Final Budget | $[X] of $[X] planned |
| Final Schedule | [X] days [early/late] |
| Overall Success | [Rating: 1-5] |

---

## What Went Well

### Planning Phase
- [Success 1]
- [Success 2]

### Execution Phase
- [Success 1]
- [Success 2]

### Team & Communication
- [Success 1]
- [Success 2]

### Tools & Processes
- [Success 1]
- [Success 2]

**Key Factors Contributing to Success:**
1. [Factor 1]
2. [Factor 2]

---

## What Could Be Improved

### Planning Phase
| Issue | Impact | Root Cause |
|-------|--------|------------|
| [Issue 1] | [Impact] | [Cause] |
| [Issue 2] | [Impact] | [Cause] |

### Execution Phase
| Issue | Impact | Root Cause |
|-------|--------|------------|
| [Issue 1] | [Impact] | [Cause] |
| [Issue 2] | [Impact] | [Cause] |

### Team & Communication
| Issue | Impact | Root Cause |
|-------|--------|------------|
| [Issue 1] | [Impact] | [Cause] |

### Tools & Processes
| Issue | Impact | Root Cause |
|-------|--------|------------|
| [Issue 1] | [Impact] | [Cause] |

---

## Recommendations for Future Projects

### Process Improvements
| Recommendation | Priority | Owner | Target Implementation |
|----------------|----------|-------|----------------------|
| [Recommendation 1] | [H/M/L] | [Name] | [Date] |
| [Recommendation 2] | [H/M/L] | [Name] | [Date] |

### Templates/Tools to Create
- [ ] [Template/Tool 1]
- [ ] [Template/Tool 2]

### Training Needs Identified
- [ ] [Training 1]
- [ ] [Training 2]

---

## Best Practices to Adopt

1. **[Practice 1]**
   - What: [Description]
   - Why: [Benefit]
   - How: [Implementation]

2. **[Practice 2]**
   - What: [Description]
   - Why: [Benefit]
   - How: [Implementation]

---

## Metrics Comparison

| Metric | Planned | Actual | Variance | Notes |
|--------|---------|--------|----------|-------|
| Duration | [X] months | [X] months | [X]% | |
| Budget | $[X] | $[X] | [X]% | |
| Scope | [X] features | [X] features | [X]% | |
| Quality | [X] defects | [X] defects | | |

---

## Team Feedback

### Anonymous Survey Results
[Summary of team feedback]

### Individual Recognition
- [Team member] - [Recognition]
- [Team member] - [Recognition]

---

## Action Items

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Document [process] | [Name] | [Date] | [ ] |
| Update [template] | [Name] | [Date] | [ ] |
| Train team on [topic] | [Name] | [Date] | [ ] |

---

## Appendix

### Key Documents
- [Link to project plan]
- [Link to status reports]
- [Link to risk register]

### Meeting Notes
[Links to relevant discussions]
```

### Change Request Template

```markdown
# Change Request

**CR Number:** CR-[XXX]
**Date Submitted:** [Date]
**Project:** [Project Name]
**Requested By:** [Name]

---

## Change Description

### Summary
[One sentence summary of the change]

### Detailed Description
[Full description of what is being requested]

### Reason for Change
[Why is this change needed? Business justification]

---

## Impact Assessment

### Scope Impact
- [ ] No change to scope
- [ ] Minor scope increase
- [ ] Major scope increase
- [ ] Scope decrease

**Description:** [Details]

### Schedule Impact
- [ ] No impact
- [ ] Minor delay (< 1 week)
- [ ] Moderate delay (1-4 weeks)
- [ ] Major delay (> 4 weeks)

**New Target Date:** [Date]
**Description:** [Details]

### Budget Impact
- [ ] No impact
- [ ] Minor increase (< 5%)
- [ ] Moderate increase (5-15%)
- [ ] Major increase (> 15%)

**Additional Cost:** $[X]
**Description:** [Details]

### Resource Impact
- [ ] No additional resources needed
- [ ] Can be absorbed by current team
- [ ] Additional resources required

**Description:** [Details]

### Risk Impact
- [ ] No new risks
- [ ] Minor risks introduced
- [ ] Significant risks introduced

**Description:** [Details]

---

## Options Analysis

### Option 1: [Implement as Requested]
- Pros: [Benefits]
- Cons: [Drawbacks]
- Cost: $[X]
- Schedule: [Impact]

### Option 2: [Alternative Approach]
- Pros: [Benefits]
- Cons: [Drawbacks]
- Cost: $[X]
- Schedule: [Impact]

### Option 3: [Reject/Defer]
- Pros: [Benefits]
- Cons: [Drawbacks]
- Cost: $0
- Schedule: No impact

### Recommendation
[Recommended option with rationale]

---

## Approval

### Review Board
| Name | Role | Recommendation | Date |
|------|------|----------------|------|
| [Name] | Project Manager | [Approve/Reject/Defer] | [Date] |
| [Name] | Sponsor | [Approve/Reject/Defer] | [Date] |
| [Name] | Technical Lead | [Approve/Reject/Defer] | [Date] |

### Decision
- [ ] Approved
- [ ] Approved with modifications
- [ ] Rejected
- [ ] Deferred to [Date/Phase]

**Decision Date:** [Date]
**Decision By:** [Name]
**Notes:** [Any conditions or modifications]

---

## Implementation

**Implementation Start:** [Date]
**Implementation End:** [Date]
**Owner:** [Name]

### Tasks Required
- [ ] [Task 1]
- [ ] [Task 2]
- [ ] [Task 3]

---

## Change Log

| Date | Action | By |
|------|--------|-----|
| [Date] | Request submitted | [Name] |
| [Date] | Impact assessment complete | [Name] |
| [Date] | [Decision] | [Name] |
```

---

## Quick Start Guide

### Initial Setup (Day 1)

**Step 1: Create Core Databases**
1. Create "Projects" database with all properties
2. Create "Tasks" database with all properties
3. Set up relation between Projects and Tasks
4. Test by creating one sample project and task

**Step 2: Create Supporting Databases**
1. Create "Team Members" database
2. Create "Meeting Notes" database
3. Create "Risk Register" database
4. Link all to Projects

**Step 3: Create Views**
1. Set up Kanban view for Tasks
2. Set up Timeline view for Tasks
3. Set up Table view for Projects
4. Create "My Tasks" filtered view

---

### Week 1: Foundation

**Day 1-2: Database Setup**
- [ ] All databases created
- [ ] All properties configured
- [ ] Relations established
- [ ] Basic views created

**Day 3-4: Templates**
- [ ] Project page template built
- [ ] Task page template built
- [ ] Meeting notes template built
- [ ] Status report template built

**Day 5: Dashboard**
- [ ] Main dashboard created
- [ ] Quick actions added
- [ ] Key metrics visible
- [ ] Navigation established

---

### Week 2: Population & Testing

**Day 1-2: Data Entry**
- [ ] Enter active projects
- [ ] Import or create tasks
- [ ] Add team members
- [ ] Document current risks

**Day 3-4: Workflow Testing**
- [ ] Test task creation flow
- [ ] Test status updates
- [ ] Test meeting notes capture
- [ ] Test status report generation

**Day 5: Refinement**
- [ ] Adjust views based on usage
- [ ] Add missing properties
- [ ] Create additional filters
- [ ] Document team processes

---

### Ongoing Maintenance

**Daily:**
- Update task statuses
- Log new tasks as they arise
- Check "My Tasks" view

**Weekly:**
- Create status report
- Review and update risks
- Check resource utilization
- Review overdue tasks

**Monthly:**
- Portfolio health review
- Budget tracking update
- Lessons learned capture
- Template refinement

**Quarterly:**
- Archive completed projects
- Review and update processes
- Team feedback on system
- Major template updates

---

### Tips for Success

**1. Start Simple**
- Don't use every property immediately
- Add complexity as you need it
- Focus on core workflow first

**2. Establish Rituals**
- Daily: Update tasks
- Weekly: Status meetings with dashboard
- Monthly: Portfolio review

**3. Train Your Team**
- Create a "How to Use" guide
- Hold brief training sessions
- Document common workflows

**4. Iterate & Improve**
- Gather feedback regularly
- Add views that are requested
- Remove unused features

**5. Backup & Archive**
- Export important data periodically
- Archive completed projects
- Keep templates updated

---

## Customization Ideas

### For Agile/Scrum Teams
- Add "Sprint" property to Tasks
- Create Sprint Planning and Retrospective templates
- Add Story Points instead of/with Hours
- Create Sprint burndown tracking

### For Consulting Firms
- Add Client relation
- Create billable hours tracking
- Add contract/SOW references
- Create client-facing report templates

### For Product Teams
- Add Feature/Epic hierarchy
- Connect to Product Roadmap database
- Add User Story format
- Create Release tracking

### For Marketing Projects
- Add Campaign relation
- Create launch checklist templates
- Add asset tracking
- Connect to content calendar

---

## Support & Resources

### Notion Help Resources
- [Notion Help Center](https://notion.so/help)
- [Notion Templates Gallery](https://notion.so/templates)
- [Notion Community](https://notion.so/community)

### Project Management Resources
- PMI (Project Management Institute)
- Agile Alliance
- Scrum.org

---

*Template Version 1.0 | Premium Template | $25*
*Last Updated: 2024*

---

## Quick Reference Card

### Database Quick Reference

| Database | Primary Purpose | Key Relations |
|----------|-----------------|---------------|
| Projects | Master project records | Tasks, Risks, Budget |
| Tasks | All work items | Projects, Team, Dependencies |
| Team Members | Resource pool | Tasks, Allocations |
| Risks | Risk tracking | Projects |
| Meeting Notes | Meeting records | Projects |
| Budget Items | Cost tracking | Projects |
| Status Reports | Reporting | Projects |
| Stakeholder Log | Communications | Projects |

### Status Color Guide

| Color | Meaning |
|-------|---------|
| Green | On Track / Complete / Low Risk |
| Yellow | At Risk / In Progress / Medium Risk |
| Red | Off Track / Blocked / High Risk |
| Gray | Not Started / Cancelled |
| Blue | In Review / Informational |

### Formula Cheat Sheet

| Need | Formula |
|------|---------|
| Days until date | `dateBetween(prop("Date"), now(), "days")` |
| Is overdue | `prop("Due Date") < now()` |
| Percentage | `round(prop("A") / prop("B") * 100)` |
| Conditional text | `if(condition, "Yes", "No")` |
| Empty check | `empty(prop("Field"))` |

---

*Thank you for purchasing the Project Manager Dashboard template. For questions or support, contact [support email].*
