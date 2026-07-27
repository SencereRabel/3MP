# Git & GitHub Workflow

## Purpose

This workflow defines how development tasks are created, completed, reviewed, and merged. The goal is to keep work organized, reduce merge conflicts, improve code quality, and make it easy for everyone on the team to understand the current state of the project.

---

# 1. Creating a GitHub Ticket

Every code change should begin with a GitHub issue (ticket). Tickets should represent a single, well-defined piece of work.

## Ticket Guidelines

A good ticket should:

- Be small enough to complete in approximately **1–2 days**.
- Focus on a single feature, bug fix, or improvement.
- Have a clear objective and expected outcome.
- Include enough technical detail so another developer understands how the work should be implemented.
- List any required tools, libraries, APIs, or design decisions that should be used.
- Define acceptance criteria so reviewers know when the task is complete.

### If Requirements Are Unclear

If the implementation approach has not been decided, **do not create an implementation ticket yet.**

Instead, create a separate **Research** or **Design** ticket whose goal is to:

- Investigate possible solutions.
- Compare implementation options.
- Document the recommended approach.
- Identify any technical risks or dependencies.

Implementation tickets should only be created once the work is clearly defined. This is the difference between a ticket that is merely in the backlog and one that is actually ready to begin.

---

# 2. Ticket Workflow

Each ticket progresses through the following project statuses.

## Backlog

- Newly created tickets begin in the **Backlog**.
- Tickets may be assigned to a specific developer or remain unassigned.
- Work should not begin until the ticket contains enough information to complete the task.

## In Progress

Move a ticket to **In Progress** when development begins.

- Only one developer should actively work on a ticket unless collaboration is planned.
- If the scope of the work grows significantly, create additional tickets instead of continually expanding the original one.

## In Review

Once development is complete:

1. Push your changes.
2. Open a Pull Request.
3. Move the ticket to **In Review**.

A ticket **cannot** move out of this stage until:

- At least one other team member reviews and approves the Pull Request, **or**
- The implementation is discussed and approved during a team meeting.

Developers **may not approve or merge their own Pull Requests** unless there is an agreed-upon exception.

Any requested changes should be addressed before approval.

## Done

A ticket is moved to **Done** only after:

- The Pull Request has been approved.
- The Pull Request has been merged into the `main` branch.
- All review comments have been resolved.

---

# 3. Branch Workflow

Each ticket should have its own Git branch.

Never work directly on the `main` branch.

## Branch Naming

Use descriptive branch names that reference the ticket number whenever possible.

Examples:

```text
feature/123-user-login
feature/145-dashboard-layout
bugfix/210-fix-navbar
hotfix/315-login-crash
docs/update-git-workflow
```

---

# 4. Starting Work

Before creating a branch:

1. Pull the latest version of `main`.
2. Ensure your local repository is up to date.
3. Create a new branch from the latest `main`.

---

# 5. Commits

Make small, focused commits instead of one large commit at the end.

Good commits should describe **what changed** rather than how long you worked.

Examples:

- Add login validation
- Fix mobile navigation layout
- Update user profile API
- Refactor authentication middleware

Avoid commit messages like:

- Changes
- Fixes
- Update

---

# 6. Pull Requests

When your work is complete:

1. Push your branch to GitHub.
2. Open a Pull Request.
3. Link the corresponding GitHub issue.
4. Request at least one reviewer.
5. Move the ticket to **In Review**.

The Pull Request description should include:

- What was changed.
- Why it was changed.
- Testing performed.
- Any known limitations.

---

# 7. Code Review

Code reviews are intended to improve quality and share knowledge across the team.

Reviewers should verify:

- The implementation satisfies the ticket requirements.
- Code follows project conventions.
- The solution is maintainable and readable.
- No obvious bugs or regressions were introduced.
- Appropriate testing has been completed.

Feedback should be constructive and specific.

---

# 8. Merging

A Pull Request may be merged only after:

- Required approvals have been received.
- CI/build checks pass (if applicable).
- Review comments have been addressed.
- The branch is up to date with `main`.

After merging:

- Delete the feature branch.
- Close the linked issue (if not closed automatically).
- Move the ticket to **Done**.

---

# General Principles

- Every code change begins with a GitHub issue.
- Keep tickets small and focused.
- Keep branches small and short-lived.
- Open Pull Requests early if feedback is needed.
- Never merge unreviewed code.
- Prefer several small Pull Requests over one large one.
- If a ticket grows beyond its original scope, split it into additional tickets.
- Leave the repository in a deployable state whenever possible.