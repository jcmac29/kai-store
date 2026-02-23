# Developer Prompts Pack
## 30 AI Prompts for Code, Debugging & Architecture

---

## Code Writing (10 Prompts)

### 1. Feature Implementation
```
Implement this feature for me.

Language/Framework: [e.g., React, Python, Node.js]
Feature description: [what it should do]
Current codebase context: [relevant existing code]
Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Provide:
1. Complete, working code
2. Brief explanation of approach
3. Any dependencies needed
4. Edge cases handled
5. How to test it
```

### 2. Function Generator
```
Write a function that [does X].

Language: [programming language]
Input: [what it receives]
Output: [what it returns]
Constraints:
- [Performance requirements]
- [Edge cases to handle]
- [Style preferences]

Include:
- Clean, readable code
- Comments explaining logic
- Example usage
- Test cases
```

### 3. API Endpoint Creator
```
Create an API endpoint.

Framework: [Express, FastAPI, Django, etc.]
Method: [GET/POST/PUT/DELETE]
Route: [endpoint path]
Purpose: [what it does]
Request body: [expected input]
Response format: [expected output]

Include:
- Input validation
- Error handling
- Authentication check (if needed)
- Rate limiting consideration
- Documentation comments
```

### 4. Database Query Builder
```
Write database queries for these operations.

Database: [PostgreSQL, MySQL, MongoDB, etc.]
Table/Collection structure:
[Describe your schema]

Operations needed:
1. [Query 1 description]
2. [Query 2 description]
3. [Query 3 description]

For each query:
- Optimized query
- Index recommendations
- Explanation of approach
- Performance considerations
```

### 5. Test Suite Generator
```
Generate tests for this code.

Code to test:
[Paste your code]

Testing framework: [Jest, pytest, etc.]
Coverage goals: [what to test]

Generate:
1. Unit tests for each function
2. Edge case tests
3. Error case tests
4. Integration test examples
5. Mock/stub suggestions
6. Test data fixtures
```

### 6. Component Builder
```
Build a [framework] component.

Framework: [React, Vue, Svelte, etc.]
Component name: [name]
Purpose: [what it does]
Props: [list expected props]
State: [internal state needed]
Events: [callbacks/events to emit]

Include:
- TypeScript types (if applicable)
- Styling approach
- Accessibility considerations
- Responsive behavior
- Example usage
```

### 7. CLI Tool Generator
```
Create a CLI tool that [does X].

Language: [Node.js, Python, Go, etc.]
Commands needed:
- [command1]: [description]
- [command2]: [description]

Features:
- Arguments/flags
- Help documentation
- Error messages
- Configuration file support

Provide complete implementation with examples.
```

### 8. Regex Pattern Builder
```
Create regex patterns for these use cases.

Use cases:
1. [Pattern 1 description]
2. [Pattern 2 description]
3. [Pattern 3 description]

For each pattern:
- The regex
- Explanation of each part
- Test cases (matches and non-matches)
- Common edge cases
- Language-specific syntax (if different)
```

### 9. Data Transformer
```
Write code to transform data.

Input format:
[Show example input]

Output format:
[Show expected output]

Language: [your language]
Volume: [how much data]
Performance requirements: [if any]

Handle:
- Null/undefined values
- Type mismatches
- Missing fields
- Nested structures
```

### 10. Script Automator
```
Write a script to automate [task].

Task: [what needs to be automated]
Trigger: [when it should run]
Environment: [where it runs]
Dependencies: [what it needs access to]

The script should:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Include:
- Error handling
- Logging
- Retry logic
- Notification on failure
```

---

## Debugging (10 Prompts)

### 11. Bug Diagnosis
```
Help me debug this issue.

The problem:
[Describe what's happening]

Expected behavior:
[What should happen]

Relevant code:
[Paste the code]

Error message (if any):
[Paste error]

What I've tried:
[List attempts]

Environment:
[Language version, OS, etc.]

Diagnose the issue and provide the fix.
```

### 12. Error Message Decoder
```
Explain this error and how to fix it.

Error message:
[Paste full error/stack trace]

Context:
[What I was doing when it happened]

Code that triggered it:
[Relevant code]

Provide:
1. What the error means
2. Why it happened
3. How to fix it
4. How to prevent it in the future
```

### 13. Performance Profiler
```
Help me optimize this slow code.

The code:
[Paste your code]

Current performance:
[How slow it is]

Target performance:
[How fast it should be]

Constraints:
[Memory limits, etc.]

Analyze:
1. Bottlenecks
2. Inefficient operations
3. Optimization opportunities
4. Refactored code
5. Before/after comparison
```

### 14. Memory Leak Hunter
```
Help me find the memory leak.

Language: [language]
Symptoms: [what's happening]
Code section suspected:
[Paste code]

Check for:
1. Unclosed resources
2. Event listener buildup
3. Circular references
4. Growing caches
5. Reference retention

Provide fixes and best practices.
```

### 15. Race Condition Identifier
```
Identify race conditions in this code.

Code:
[Paste concurrent/async code]

Expected behavior:
[What should happen]

Actual behavior:
[What's happening - inconsistent results]

Analyze:
1. Where race conditions exist
2. Why they're happening
3. How to reproduce
4. Fixes (locks, queues, atomics)
5. Testing strategies
```

### 16. Security Vulnerability Scanner
```
Review this code for security vulnerabilities.

Code:
[Paste your code]

Type: [API/frontend/database query/etc.]

Check for:
- SQL injection
- XSS vulnerabilities
- CSRF issues
- Authentication flaws
- Authorization bypass
- Sensitive data exposure
- Input validation gaps
- Dependency vulnerabilities

For each issue found:
- Severity level
- How to exploit
- How to fix
- Prevention pattern
```

### 17. Dependency Conflict Resolver
```
Help me resolve this dependency conflict.

Package manager: [npm, pip, cargo, etc.]
Error message:
[Paste error]

Dependencies involved:
[List packages and versions]

My requirements:
[What I need to use]

Provide:
1. What's conflicting
2. Why it's happening
3. Resolution options
4. Recommended fix
5. How to prevent future conflicts
```

### 18. Async/Promise Debugger
```
Debug this async code issue.

Code:
[Paste async/Promise code]

Problem:
[What's happening - timing, ordering, etc.]

Expected flow:
[What should happen in order]

Diagnose:
1. Promise chain issues
2. Missing awaits
3. Error handling gaps
4. Race conditions
5. Deadlocks

Provide corrected code with explanation.
```

### 19. Type Error Resolver
```
Fix these TypeScript/type errors.

Code:
[Paste code with type errors]

Errors:
[List the type errors]

I want to:
[What you're trying to accomplish]

Provide:
1. What each error means
2. Why the types don't match
3. Fixed code
4. Better type definitions
5. Type safety improvements
```

### 20. Environment Issue Solver
```
Help me fix this environment/config issue.

Problem: [What's not working]
Environment: [dev/staging/prod]
OS: [Windows/Mac/Linux]
Relevant config:
[Paste config files]

Error (if any):
[Paste error]

I've checked:
[What you've verified]

Diagnose and provide step-by-step fix.
```

---

## Architecture & Design (10 Prompts)

### 21. System Architecture Designer
```
Design a system architecture for [project].

Requirements:
- [Functional req 1]
- [Functional req 2]
- [Functional req 3]

Scale expectations:
- Users: [number]
- Requests/sec: [number]
- Data volume: [amount]

Constraints:
- Budget: [range]
- Team size: [number]
- Timeline: [deadline]

Provide:
1. High-level architecture diagram (text)
2. Component breakdown
3. Technology recommendations
4. Data flow
5. Scaling strategy
6. Trade-offs of this design
```

### 22. Database Schema Designer
```
Design a database schema for [project].

Domain: [what the system does]
Entities: [main objects/concepts]
Relationships: [how they connect]
Query patterns: [common operations]

Requirements:
- [Requirement 1]
- [Requirement 2]

Provide:
1. Table/collection definitions
2. Relationships (FK, references)
3. Indexes
4. Data types
5. Constraints
6. Migration script
7. Query examples
```

### 23. API Design Review
```
Review and improve this API design.

Current API:
[Describe endpoints, methods, formats]

Use cases:
[Who uses it and how]

Concerns:
[What feels wrong]

Review for:
1. RESTful principles
2. Naming conventions
3. Versioning strategy
4. Error handling
5. Pagination approach
6. Authentication method
7. Rate limiting
8. Documentation needs

Provide improved design with rationale.
```

### 24. Microservices Planner
```
Help me plan microservices for [monolith/project].

Current state:
[Describe current architecture]

Problems to solve:
[Why considering microservices]

Team structure:
[How team is organized]

Plan:
1. Service boundaries
2. Data ownership
3. Communication patterns (sync/async)
4. Shared resources handling
5. Deployment strategy
6. Migration path from monolith
7. What to NOT split
8. Success criteria
```

### 25. Code Architecture Review
```
Review this codebase architecture.

Project type: [web app, API, CLI, etc.]
Language/Framework: [stack]
Current structure:
[Describe folder structure and patterns]

Code samples:
[Paste representative code]

Concerns:
[What feels messy]

Evaluate:
1. Separation of concerns
2. Dependency management
3. Testability
4. Scalability
5. Maintainability
6. Pattern consistency

Recommend improvements with examples.
```

### 26. State Management Design
```
Design state management for [application].

Application type: [web/mobile/desktop]
Framework: [React, Vue, etc.]
Current approach: [how state is managed now]
Pain points: [what's not working]

Features to support:
- [Feature 1 - state needs]
- [Feature 2 - state needs]
- [Feature 3 - state needs]

Recommend:
1. State management approach
2. State shape/structure
3. Action/mutation patterns
4. Side effect handling
5. Performance optimization
6. DevTools/debugging
7. Example implementation
```

### 27. Caching Strategy Designer
```
Design a caching strategy.

Application: [what it does]
Current pain points: [slow operations]
Data characteristics:
- Read/write ratio: [estimate]
- Data freshness needs: [how stale is OK]
- Data size: [typical sizes]

Design:
1. What to cache
2. Cache layers (browser, CDN, app, DB)
3. Cache invalidation strategy
4. TTL recommendations
5. Cache key design
6. Eviction policy
7. Implementation approach
8. Monitoring/metrics
```

### 28. Authentication System Design
```
Design authentication for [application].

Application type: [web/mobile/API]
User types: [regular users, admins, etc.]
Requirements:
- [Auth requirement 1]
- [Auth requirement 2]

Security concerns:
[Specific threats to address]

Design:
1. Auth flow (OAuth, JWT, sessions)
2. Token management
3. Password requirements
4. MFA approach
5. Session handling
6. Permission/role system
7. Security headers
8. Implementation with your stack
```

### 29. CI/CD Pipeline Design
```
Design a CI/CD pipeline for [project].

Stack: [languages, frameworks]
Team size: [number]
Deployment target: [cloud provider/platform]
Current process: [how deploys happen now]

Requirements:
- [Requirement 1]
- [Requirement 2]

Design pipeline with:
1. Build stage
2. Test stage (unit, integration, e2e)
3. Security scanning
4. Code quality checks
5. Deployment stages (dev, staging, prod)
6. Rollback strategy
7. Monitoring integration
8. Tool recommendations (GitHub Actions, Jenkins, etc.)
```

### 30. Tech Stack Advisor
```
Recommend a tech stack for [project].

Project description: [what you're building]
Team skills: [what you know]
Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Constraints:
- Budget: [range]
- Timeline: [deadline]
- Scale: [expected load]
- Team: [who's building]

Recommend:
1. Frontend (if applicable)
2. Backend
3. Database
4. Hosting/Infrastructure
5. Third-party services
6. DevOps tools
7. Reasoning for each choice
8. Alternatives considered
```

---

## How to Use This Pack

1. **Pick your prompt** - Find what matches your current need
2. **Be specific** - Fill in all the [brackets] with real details
3. **Provide context** - More code/info = better answers
4. **Iterate** - Ask follow-up questions
5. **Verify** - Test the generated code

**Pro tip:** For debugging, include the FULL error message and stack trace. Partial info = partial answers.

---

## License

Personal and business use permitted. Do not redistribute or resell.

---

*Created by Kai | Sharp Signal*
