# Content Calendar - Notion Template

## Overview

This comprehensive Content Calendar system helps you plan, create, and manage content across multiple platforms. From ideation to publication and analytics, this template provides a complete content marketing workflow with content pillars, scheduling, and repurposing pipelines.

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Content Database](#content-database)
3. [Content Pillars System](#content-pillars-system)
4. [Platform Configuration](#platform-configuration)
5. [Scheduling Workflow](#scheduling-workflow)
6. [Analytics Tracking](#analytics-tracking)
7. [Repurposing Pipeline](#repurposing-pipeline)
8. [Dashboard Setup](#dashboard-setup)
9. [Customization Tips](#customization-tips)

---

## System Architecture

### Database Structure

```
Content Calendar System
├── Content Database (Master content pieces)
├── Content Pillars (Topic categories)
├── Platforms (Publishing channels)
├── Content Ideas (Brainstorm bank)
├── Analytics (Performance tracking)
├── Repurposed Content (Derivative pieces)
└── Editorial Calendar (Main calendar view)
```

### Workflow Overview

```
Ideation -> Planning -> Creation -> Review -> Scheduling -> Publishing -> Analytics -> Repurposing
    |          |           |          |           |             |            |            |
  Ideas    Calendar     Draft      Approve    Schedule       Publish      Track       Remix
```

---

## Content Database

### Database Setup

Create a new **Database - Full page** called **"Content"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Title | Title | Content title/headline |
| Status | Select | Idea, Planned, In Progress, In Review, Scheduled, Published, Archived |
| Content Pillar | Relation | Link to Pillars database |
| Platform | Multi-select | Where it will be published |
| Primary Platform | Select | Main publishing platform |
| Content Type | Select | Blog Post, Video, Podcast, Social Post, Newsletter, Infographic, Carousel, Reel, Thread, Story, Live |
| Format | Select | Long-form, Short-form, Visual, Audio, Interactive |
| Author | Person | Content creator |
| Due Date | Date | Creation deadline |
| Publish Date | Date | Scheduled publish date |
| Published Date | Date | Actual publish date |
| Time Slot | Select | Morning, Afternoon, Evening, Best Time |
| Campaign | Text | Related campaign/launch |
| Brief | Text | Content brief/outline |
| Draft Link | URL | Google Doc, Notion page, etc. |
| Final Content | Files | Uploaded final files |
| Thumbnail | Files | Visual preview |
| Caption/Copy | Text | Social copy or description |
| Hashtags | Text | Relevant hashtags |
| CTA | Text | Call to action |
| Links | URL | Related links |
| Keywords/SEO | Multi-select | Target keywords |
| Word Count | Number | For written content |
| Duration | Text | For video/audio content |
| Repurposed From | Relation | Self-relation (parent content) |
| Repurposed To | Relation | Self-relation (child content) |
| Analytics | Relation | Link to Analytics database |
| Performance | Rollup | Key metric from Analytics |
| Priority | Select | High, Medium, Low |
| Effort | Select | Quick (< 1hr), Medium (1-4hrs), Heavy (4+ hrs) |
| Evergreen | Checkbox | Is this timeless content? |
| Notes | Text | Additional notes |

### Status Workflow

| Status | Description | Next Action |
|--------|-------------|-------------|
| **Idea** | Raw concept, not yet committed | Review and approve for planning |
| **Planned** | Approved, added to calendar | Begin creation |
| **In Progress** | Currently being created | Complete draft |
| **In Review** | Draft complete, needs approval | Review and provide feedback |
| **Scheduled** | Approved, scheduled for publish | Auto-publish or manual publish |
| **Published** | Live on platform | Track performance |
| **Archived** | No longer active/relevant | Reference only |

### Content Type Templates

**Blog Post Template:**
```markdown
# [Blog Post Title]

## Content Brief

**Target Keyword:**
**Search Intent:**
**Target Word Count:**
**Content Pillar:**

---

## Outline

### Introduction (Hook)
[Opening hook and thesis]

### Section 1: [Heading]
- Key point
- Key point

### Section 2: [Heading]
- Key point
- Key point

### Section 3: [Heading]
- Key point
- Key point

### Conclusion + CTA
[Wrap up and call to action]

---

## SEO Checklist
- [ ] Primary keyword in title
- [ ] Primary keyword in first 100 words
- [ ] H2s include keywords
- [ ] Meta description written
- [ ] Internal links added
- [ ] External links added
- [ ] Images with alt text

---

## Draft
[Link to Google Doc or write here]

---

## Publishing Checklist
- [ ] Content proofread
- [ ] Images optimized
- [ ] Links tested
- [ ] Categories/tags added
- [ ] Featured image set
- [ ] Social shares prepared
```

**Social Media Post Template:**
```markdown
# [Post Topic]

**Platform:**
**Content Type:**
**Publish Date:**
**Time:**

---

## Visual
[Attach image/video or describe needed creative]

Specs needed:
- Dimensions:
- Format:
- Text overlay:

---

## Copy

**Hook (First Line):**


**Body:**


**CTA:**


**Hashtags:**
#tag1 #tag2 #tag3

---

## Engagement Plan
- [ ] Respond to comments within 1 hour
- [ ] Share to Stories
- [ ] Cross-post to [platform]
```

**Video Content Template:**
```markdown
# [Video Title]

**Platform:**
**Duration Target:**
**Publish Date:**

---

## Video Brief

**Hook (0-3 seconds):**
[What grabs attention immediately]

**Main Content:**
[Key points to cover]

**CTA:**
[What should viewers do?]

---

## Script/Outline

**INTRO**
[Script the intro word-for-word]

**SECTION 1:**
[Bullet points or script]

**SECTION 2:**
[Bullet points or script]

**OUTRO + CTA:**
[Script the ending]

---

## Production Notes

**B-Roll Needed:**
-
-

**Graphics/Text Overlays:**
-
-

**Music/Audio:**
-

---

## Publishing Checklist
- [ ] Thumbnail created
- [ ] Title optimized
- [ ] Description written
- [ ] Tags added
- [ ] Cards/End screens added
- [ ] Captions/subtitles
- [ ] Community post scheduled
```

### Content Views

**1. Editorial Calendar**
- View: Calendar by Publish Date
- Color by: Content Pillar or Platform
- PRIMARY VIEW for planning

**2. Content Board (Kanban)**
- Group by: Status
- Properties: Platform, Due Date, Author
- Drag to move through workflow

**3. By Platform**
- Group by: Primary Platform
- See content per channel

**4. By Pillar**
- Group by: Content Pillar
- Ensure balanced coverage

**5. This Week's Content**
- Filter: Publish Date is This Week
- Sort by: Publish Date (Ascending)

**6. Content Backlog**
- Filter: Status is "Idea"
- Sort by: Priority, then Created Date

**7. Evergreen Library**
- Filter: Evergreen is checked and Status is "Published"
- Great for resharing

---

## Content Pillars System

### What are Content Pillars?

Content pillars are 3-5 core topics that represent your brand's expertise and align with your audience's interests. All content should fall under one of these pillars.

### Pillars Database Setup

Create a new **Database - Full page** called **"Content Pillars"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Pillar Name | Title | The pillar topic |
| Description | Text | What this pillar covers |
| Color | Select | For visual identification |
| Icon | Text | Emoji |
| Target Audience | Text | Who cares about this topic |
| Content Ratio | Number | % of content (total = 100%) |
| Keywords | Multi-select | Related keywords |
| Example Topics | Text | Specific content ideas |
| Content | Relation | Linked from Content database |
| Content Count | Rollup | Count of related content |
| Performance Score | Rollup | Average engagement |
| Status | Select | Active, Testing, Retired |

### Example Content Pillars

**For a Marketing Agency:**

| Pillar | Ratio | Description |
|--------|-------|-------------|
| Strategy & Planning | 30% | Marketing strategy, planning, frameworks |
| How-To & Tutorials | 25% | Step-by-step guides, tutorials |
| Industry Trends | 20% | News, predictions, trends |
| Case Studies & Results | 15% | Client wins, success stories |
| Behind the Scenes | 10% | Team culture, processes |

**For a Fitness Creator:**

| Pillar | Ratio | Description |
|--------|-------|-------------|
| Workout Guides | 30% | Exercise tutorials, routines |
| Nutrition Tips | 25% | Meal planning, recipes, supplements |
| Motivation & Mindset | 20% | Inspiration, mental health |
| Transformation Stories | 15% | Before/after, success stories |
| Day in the Life | 10% | Personal content, relatability |

### Pillar Page Template

```markdown
# [Pillar Icon] [Pillar Name]

## Overview
[What this pillar encompasses]

## Target Audience
[Who is most interested in this content]

## Content Ratio Goal
[X]% of total content

---

## Subtopics

### Topic Cluster 1
- Subtopic A
- Subtopic B
- Subtopic C

### Topic Cluster 2
- Subtopic A
- Subtopic B

---

## Content Ideas Bank
[Linked database: Content where Pillar = this, Status = Idea]

---

## Published Content
[Linked database: Content where Pillar = this, Status = Published]

---

## Performance Insights

**Top Performing Content:**
[List or linked view]

**Average Engagement:**
[Rollup metric]

**Notes:**
[What works well for this pillar]

---

## Keywords & Hashtags

**Primary Keywords:**
-

**Hashtag Sets:**
Set 1: #tag1 #tag2 #tag3
Set 2: #tag4 #tag5 #tag6
```

### Pillar Distribution View

Create a view to track your content balance:

```markdown
## Monthly Content Distribution

| Pillar | Goal | Actual | Status |
|--------|------|--------|--------|
| [Pillar 1] | 30% | [X]% | On Track/Adjust |
| [Pillar 2] | 25% | [X]% | On Track/Adjust |
| [Pillar 3] | 20% | [X]% | On Track/Adjust |
| [Pillar 4] | 15% | [X]% | On Track/Adjust |
| [Pillar 5] | 10% | [X]% | On Track/Adjust |
```

---

## Platform Configuration

### Platforms Database Setup

Create a new **Database - Full page** called **"Platforms"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Platform Name | Title | Platform name |
| Icon | Text | Platform emoji/icon |
| Account Handle | Text | Your username |
| Profile URL | URL | Link to profile |
| Status | Select | Active, Testing, Paused, Retired |
| Content Types | Multi-select | Types that work here |
| Optimal Post Times | Text | Best times to post |
| Posting Frequency | Text | How often to post |
| Character Limit | Number | If applicable |
| Image Specs | Text | Dimensions, formats |
| Video Specs | Text | Length, format limits |
| Hashtag Strategy | Text | How many, which ones |
| Primary Goal | Select | Awareness, Engagement, Traffic, Conversions, Community |
| Audience | Text | Who follows you here |
| Content | Relation | Linked from Content |
| Analytics Tool | Text | Where to find metrics |
| Login Info | Text | Password manager reference |
| Notes | Text | Platform-specific tips |

### Platform Profiles

**Instagram:**
```markdown
# Instagram

**Handle:** @yourhandle
**Goal:** Engagement + Brand Awareness

## Content Strategy
- Feed: 4-5 posts/week
- Stories: Daily
- Reels: 3-4/week
- Lives: 1/month

## Optimal Times
- Weekdays: 11am, 2pm, 7pm
- Weekends: 10am, 8pm

## Specs
- Square: 1080x1080
- Portrait: 1080x1350
- Stories/Reels: 1080x1920
- Carousel: Up to 10 slides

## Hashtag Strategy
- 20-25 hashtags per post
- Mix of sizes (large/medium/niche)
- Rotate hashtag sets
```

**LinkedIn:**
```markdown
# LinkedIn

**Profile:** [URL]
**Goal:** Thought Leadership + Lead Generation

## Content Strategy
- Posts: 4-5/week
- Articles: 2/month
- Videos: 1-2/week
- Engagement: 30 min/day

## Optimal Times
- Tuesday-Thursday: 8-10am, 12pm
- Avoid weekends

## Specs
- Images: 1200x627
- Videos: Up to 10 min
- Character limit: 3000

## Best Practices
- No hashtags or 3-5 max
- First line is crucial (hook)
- End with question for engagement
```

**YouTube:**
```markdown
# YouTube

**Channel:** [URL]
**Goal:** Long-form Education + SEO

## Content Strategy
- Long-form: 1-2/week
- Shorts: 3-5/week
- Community posts: Daily

## Publishing Schedule
- Long-form: Tuesday & Thursday, 2pm
- Shorts: Daily, 9am

## Specs
- Video: 1080p or 4K
- Thumbnail: 1280x720
- Shorts: Vertical, < 60 seconds

## SEO Strategy
- Keyword in title (front-loaded)
- Detailed description with timestamps
- Tags relevant to video
- Custom thumbnail always
```

**TikTok:**
```markdown
# TikTok

**Handle:** @yourhandle
**Goal:** Reach + Trend Participation

## Content Strategy
- Posts: 1-3/day
- Mix of trends and original
- Duets/Stitches: Weekly

## Optimal Times
- 7am, 12pm, 3pm, 7pm
- Test and adjust based on analytics

## Specs
- Vertical: 1080x1920
- 15s to 3 min (60s sweet spot)
- Sound is essential

## Trends to Monitor
- Trending sounds
- Trending hashtags
- Trending effects
```

---

## Scheduling Workflow

### Weekly Planning Process

**Step 1: Content Audit (Monday)**
1. Review previous week's performance
2. Check content pillar balance
3. Identify gaps in coverage

**Step 2: Batch Planning (Monday)**
1. Review content ideas bank
2. Assign content to days
3. Set publish times per platform

**Step 3: Batch Creation (Tuesday-Wednesday)**
1. Write all copy in batches
2. Create/edit all visuals
3. Record all video content

**Step 4: Review & Schedule (Thursday)**
1. Quality check all content
2. Get approvals if needed
3. Schedule in publishing tool

**Step 5: Engagement (Daily)**
1. Monitor published content
2. Respond to comments
3. Engage with community

### Weekly Content Calendar Template

```markdown
# Week of [Date]

## Content Overview

| Day | Platform 1 | Platform 2 | Platform 3 |
|-----|------------|------------|------------|
| Mon | [Type/Topic] | [Type/Topic] | - |
| Tue | [Type/Topic] | - | [Type/Topic] |
| Wed | [Type/Topic] | [Type/Topic] | - |
| Thu | [Type/Topic] | - | [Type/Topic] |
| Fri | [Type/Topic] | [Type/Topic] | - |
| Sat | - | [Type/Topic] | - |
| Sun | [Type/Topic] | - | - |

## Pillar Distribution
- Pillar 1: X posts
- Pillar 2: X posts
- Pillar 3: X posts

## Key Dates/Events
- [Any relevant dates this week]

## Notes
[Special considerations]
```

### Monthly Content Plan Template

```markdown
# [Month Year] Content Plan

## Monthly Theme
[Overarching theme or focus]

## Content Goals
- Total posts: [X]
- Blog posts: [X]
- Videos: [X]
- Newsletters: [X]

## Key Dates
| Date | Event | Content Idea |
|------|-------|--------------|
| | | |

## Campaigns
### Campaign 1: [Name]
- Goal:
- Dates:
- Content pieces:

## Pillar Focus
[Any pillar getting extra attention]

## Content Calendar
[Embedded calendar view]

## Notes & Ideas
[Space for brainstorming]
```

### Scheduling Tools Integration

**Recommended Tools:**
- Later (Instagram, TikTok, Pinterest)
- Buffer/Hootsuite (Multi-platform)
- Schedulicity (YouTube)
- Native schedulers (FB, LinkedIn)

**Notion Integration Workflow:**
1. Plan in Notion
2. Create content
3. Export/copy to scheduling tool
4. Update status in Notion
5. Track back to Notion for analytics

---

## Analytics Tracking

### Analytics Database Setup

Create a new **Database - Full page** called **"Analytics"**

### Properties Configuration

| Property Name | Property Type | Configuration |
|---------------|---------------|---------------|
| Entry | Title | Auto: "[Date] - [Content Title]" |
| Content | Relation | Link to Content database |
| Platform | Select | Where published |
| Publish Date | Date | When published |
| Check Date | Date | When metrics recorded |
| Impressions | Number | Views/Reach |
| Engagement | Number | Likes + Comments + Shares |
| Engagement Rate | Formula | See formula |
| Likes | Number | Platform-specific |
| Comments | Number | Platform-specific |
| Shares/Saves | Number | Platform-specific |
| Clicks | Number | Link clicks if applicable |
| CTR | Formula | Clicks / Impressions |
| Followers Gained | Number | Net new followers |
| Video Views | Number | For video content |
| Watch Time | Number | Minutes watched |
| Avg Watch % | Number | Percentage watched |
| Revenue | Number | If monetized |
| Notes | Text | Observations |

### Analytics Formulas

**Engagement Rate:**
```
if(prop("Impressions") > 0, round(prop("Engagement") / prop("Impressions") * 100 * 100) / 100, 0)
```

**Click-Through Rate:**
```
if(prop("Impressions") > 0, round(prop("Clicks") / prop("Impressions") * 100 * 100) / 100, 0)
```

### Performance Benchmarks

Set up benchmarks to evaluate content:

| Metric | Poor | Average | Good | Excellent |
|--------|------|---------|------|-----------|
| Instagram Engagement Rate | < 1% | 1-3% | 3-6% | > 6% |
| LinkedIn Engagement Rate | < 1% | 1-2% | 2-4% | > 4% |
| Twitter/X Engagement Rate | < 0.5% | 0.5-1% | 1-2% | > 2% |
| YouTube CTR | < 2% | 2-5% | 5-10% | > 10% |
| Email Open Rate | < 15% | 15-25% | 25-35% | > 35% |

### Weekly Analytics Review Template

```markdown
# Analytics Review: Week of [Date]

## Top Performers

### #1: [Content Title]
- Platform:
- Impressions:
- Engagement Rate:
- Why it worked:

### #2: [Content Title]
- Platform:
- Impressions:
- Engagement Rate:
- Why it worked:

### #3: [Content Title]
- Platform:
- Impressions:
- Engagement Rate:
- Why it worked:

---

## Platform Summary

| Platform | Posts | Impressions | Engagement | Followers +/- |
|----------|-------|-------------|------------|---------------|
| Instagram | | | | |
| LinkedIn | | | | |
| Twitter | | | | |
| YouTube | | | | |

---

## Pillar Performance

| Pillar | Posts | Avg Engagement |
|--------|-------|----------------|
| | | |

---

## Insights & Action Items

### What Worked
-

### What Didn't
-

### Adjustments for Next Week
-

---

## Content to Repurpose
[High performers to remix]
```

### Monthly Analytics Dashboard

```markdown
# [Month] Analytics Report

## Overview

| Metric | This Month | Last Month | Change |
|--------|------------|------------|--------|
| Total Impressions | | | +/-% |
| Total Engagement | | | +/-% |
| Avg Engagement Rate | | | +/-% |
| Total Followers | | | +/-% |
| Website Traffic (from social) | | | +/-% |

---

## Platform Breakdown

### Instagram
| Metric | Value |
|--------|-------|
| Posts | |
| Reach | |
| Engagement | |
| Followers | |

### LinkedIn
[Same format]

### YouTube
[Same format]

---

## Top 10 Content Pieces

| Rank | Title | Platform | Engagement |
|------|-------|----------|------------|
| 1 | | | |
| 2 | | | |
| ... | | | |

---

## Pillar Analysis

| Pillar | Content % | Engagement % | Index |
|--------|-----------|--------------|-------|
| | | | |

*Index > 1.0 = overperforming, < 1.0 = underperforming*

---

## Key Learnings
1.
2.
3.

## Next Month Priorities
1.
2.
3.
```

---

## Repurposing Pipeline

### Repurposing Philosophy

One piece of content should become 8-10+ pieces:

```
Blog Post (1)
    |
    ├── Social Thread (Twitter/LinkedIn)
    ├── Carousel (Instagram)
    ├── Short Video (TikTok/Reels)
    ├── Infographic
    ├── Newsletter excerpt
    ├── Podcast discussion
    ├── Quote graphics (multiple)
    └── YouTube Short
```

### Repurposing Database View

Use the self-relation in Content database:
- **Repurposed From**: Points to parent/original content
- **Repurposed To**: Points to derivative content

### Repurposing Templates by Format

**Blog Post to Social Thread:**
```markdown
# Thread: [Topic]

**Based on:** [Link to original blog]

---

**Tweet 1 (Hook):**
[Most compelling insight from the blog - make it standalone]

**Tweet 2:**
[Key point 1]

**Tweet 3:**
[Key point 2]

**Tweet 4:**
[Key point 3]

**Tweet 5:**
[Surprising stat or quote]

**Tweet 6:**
[Practical tip]

**Tweet 7 (CTA):**
[Link to full post + call to action]
```

**Video to Multiple Formats:**
```markdown
# Repurpose: [Video Title]

**Original:** [Link to video]
**Published:** [Date]
**Performance:** [Key metrics]

---

## Repurposing Plan

### Short Clips (3-5 clips)
| Timestamp | Topic | Platform | Status |
|-----------|-------|----------|--------|
| 0:45-1:30 | [Hook moment] | TikTok | |
| 3:00-3:45 | [Key insight] | Reels | |
| 5:20-6:00 | [How-to tip] | Shorts | |

### Quote Graphics (3-5 quotes)
| Quote | Visual Style | Platform |
|-------|-------------|----------|
| "[Quote]" | Dark bg, bold text | Instagram |
| "[Quote]" | Branded template | LinkedIn |

### Written Content
- [ ] Thread from key points
- [ ] Blog post summary
- [ ] Newsletter feature

### Audio
- [ ] Podcast segment
- [ ] Audiogram clip
```

**Podcast to Multiple Formats:**
```markdown
# Repurpose: [Episode Title]

**Original:** [Link]
**Duration:** [Time]
**Key Topics:** [Topics]

---

## Content Extraction

### Audiograms (2-3)
| Timestamp | Quote/Topic | Length |
|-----------|-------------|--------|
| | | 60s |
| | | 30s |

### Blog Post
- [ ] Full transcript
- [ ] Edited summary post
- [ ] Key takeaways listicle

### Social Content
- [ ] Episode announcement
- [ ] Quote graphics
- [ ] Behind-the-scenes
- [ ] Listener questions for next episode

### Video
- [ ] Full video version (if filmed)
- [ ] Highlight clips
```

### Repurposing Workflow

**Step 1: Identify High Performers**
- Weekly: Flag top-performing content
- Look for engagement > average
- Evergreen topic potential

**Step 2: Content Extraction**
- Pull key quotes
- Identify clip-worthy moments
- List main takeaways

**Step 3: Create Derivatives**
- Use templates above
- Batch similar formats
- Maintain consistent messaging

**Step 4: Schedule Distribution**
- Space out repurposed content
- Different days/times than original
- Cross-platform distribution

**Step 5: Track Performance**
- Link to original in database
- Compare performance
- Learn what resonates

---

## Dashboard Setup

### Main Content Dashboard

```markdown
# Content Command Center

---

## Quick Actions

[+ New Content Idea]  [+ Schedule Post]  [View Calendar]

---

## This Week's Publishing Schedule

[Linked database: Content filtered to this week, calendar view]

---

## Content Pipeline

[Linked database: Content board view, grouped by Status]

| Ideas | Planned | In Progress | In Review | Scheduled | Published |
|-------|---------|-------------|-----------|-----------|-----------|

---

## Quick Stats

| Metric | This Week | This Month |
|--------|-----------|------------|
| Posts Published | | |
| Total Reach | | |
| Engagement | | |
| Top Platform | | |

---

## Content by Pillar (This Month)

[Board or gallery showing pillar distribution]

---

## High Performers to Repurpose

[Linked database: Published content, sorted by engagement, top 5]

---

## Upcoming Deadlines

[Linked database: Content where Status = "In Progress", sorted by Due Date]

---

## Recent Activity

[Linked database: Content sorted by Last Edited, last 7 days]
```

### Platform-Specific Dashboards

Create sub-pages for each platform:

```markdown
# [Platform] Content Hub

## Upcoming Content
[Filtered to this platform]

## Publishing Schedule
[Calendar view, this platform only]

## Performance
[Analytics filtered to platform]

## Best Practices
[Platform-specific tips]

## Hashtag Sets
[Saved hashtag groups]

## Content Bank
[Platform-specific ideas]
```

---

## Customization Tips

### Adapting for Your Needs

**For Solo Creators:**
- Simplify by removing approval stages
- Focus on 2-3 platforms max
- Use "Effort" to plan realistic output

**For Teams:**
- Add "Assignee" and "Reviewer" properties
- Create approval workflows
- Set up notifications for handoffs

**For Agencies:**
- Add "Client" relation
- Create client-specific views
- Track by campaign

### Time-Saving Templates

1. **Caption Templates**
   - Hook formulas
   - CTA variations
   - Hashtag sets

2. **Content Frameworks**
   - Before/After
   - Listicle
   - How-To
   - Story
   - Myth-busting

3. **Visual Templates**
   - Brand-consistent Canva templates
   - Thumbnail presets
   - Story templates

### Automation Ideas

**With Zapier/Make:**
1. New content published triggers social shares
2. Weekly analytics auto-imported
3. Content idea form to Notion database
4. RSS feed to content ideas

**Native Notion:**
1. Template buttons for quick creation
2. Recurring templates for weekly planning
3. Linked databases for filtered views

---

## Expected Layout Screenshots

### Editorial Calendar View
*[Visual: Month calendar with colored blocks representing content pieces. Different colors for different pillars or platforms. Hovering shows content title and status. Dense view showing full month at a glance.]*

### Content Pipeline Board
*[Visual: Kanban board with columns for each status. Cards show content thumbnail, title, platform icons, and due date. Drag handles visible for moving between columns.]*

### Platform Hub
*[Visual: Dashboard for single platform showing this week's content, performance metrics, hashtag library, and quick-add button. Clean, focused interface.]*

### Repurposing Tracker
*[Visual: Tree-like view showing original content piece at top, with branching arrows pointing to derivative content below. Each node shows thumbnail and status.]*

---

## Quick Start Checklist

### Initial Setup
- [ ] Create Content database with all properties
- [ ] Create Content Pillars database
- [ ] Define 3-5 content pillars
- [ ] Create Platforms database
- [ ] Document each active platform
- [ ] Create Analytics database

### Templates
- [ ] Build content templates by type
- [ ] Create weekly planning template
- [ ] Create monthly planning template
- [ ] Build analytics review template

### Views & Dashboard
- [ ] Set up editorial calendar view
- [ ] Create content pipeline board
- [ ] Build main dashboard
- [ ] Create platform-specific views

### Workflow
- [ ] Document your content workflow
- [ ] Set up weekly planning routine
- [ ] Create analytics review schedule
- [ ] Plan first month of content

### Optimization
- [ ] Establish posting schedule per platform
- [ ] Create hashtag/keyword banks
- [ ] Build repurposing templates
- [ ] Set performance benchmarks

---

## Content Ideas Bank Template

Keep a running list of content ideas:

```markdown
# Content Ideas Bank

## Quick Capture
[Inline database or simple list for rapid idea capture]

---

## Ideas by Pillar

### [Pillar 1]
- Idea
- Idea
- Idea

### [Pillar 2]
- Idea
- Idea

---

## Trending Topics to Cover
- [ ] Topic 1
- [ ] Topic 2

## Audience Questions
[Questions from comments, DMs, emails]

## Competitor Inspiration
[What others are doing well]

## Seasonal/Timely Content
| Date | Event | Content Angle |
|------|-------|---------------|
| | | |

---

## Content Series Ideas
[Recurring content formats]

## Collaboration Opportunities
[Potential partners, guests]
```

---

*Template Version 1.0 | Last Updated: 2024*
