# Coding Standards

## Purpose

This document defines the coding standards for this project. These standards exist to ensure the codebase remains:

* Readable
* Consistent
* Maintainable
* Testable
* Secure
* Easy to review

All contributors, including AI coding assistants, should follow these guidelines.

---

# Technology Stack

## Backend

* Python
* Flask
* Pytest

## Frontend

* React
* TypeScript

## Tooling

### Backend

* Ruff (linting & formatting)
* Pytest

### Frontend

* ESLint
* TypeScript
  
Automated tooling takes precedence over manual formatting.

---

# Core Principles

## Prioritize readability

Write code that is easy to understand rather than clever

Use comments to provide context for future developers rather than repeating what the code already says.

---

## Keep functions focused

Each function should perform one responsibility.

If a function needs extensive comments explaining its behavior, consider breaking it into smaller functions.

---

## Prefer explicitness

Explicit code is preferred over implicit behavior.

Examples:

* Explicit return values
* Explicit variable names
* Explicit error handling
* Explicit typing

---

## Avoid duplication

Use shared utilities instead of copying logic.

When duplication appears three or more times, refactor it.

---

# Naming Conventions

## Python

Classes use PascalCase.

```python
UserService
EmailSender
OrderRepository
```

Functions and variables use snake_case.

```python
get_user()
calculate_total()
user_count
```

Constants use UPPER_CASE.

```python
MAX_RETRIES = 3
DEFAULT_TIMEOUT = 30
```

Private helpers begin with an underscore.

```python
_validate_email()
_build_query()
```

---

## React

Components use PascalCase.

```tsx
UserProfile
NavigationBar
OrderSummary
```

Custom hooks use camelCase and begin with `use`.

```ts
useWindowSize
useAuth
useApi
```

Functions and variables use camelCase.

```ts
calculateTotal()
fetchUser()
userCount
```

Constants use UPPER_CASE.

```ts
MAX_RETRIES
DEFAULT_TIMEOUT
```

Props, interfaces, and types use PascalCase.

```ts
interface UserProfileProps {}
type ApiResponse = {}
```

Boolean variables should be named to clearly indicate their intent.

```ts
isLoading
hasPermission
canEdit
```

---

# File Naming

### Backend

File names should look like:
```
user_service.py
email_sender.py
auth_routes.py
```

Avoid filenames like:

```
helpers2.py
misc.ts
utils_new.py
```

### Frontend

File names should look like:

```
UserProfile.tsx
Button.tsx
useWindowSize.ts
UserProfile.module.css
```

Avoid filenames like:

```
userProfile.tsx
button.tsx
windowSizeHook.ts
userProfile.css
```

---

# Backend Standards

## Type Hints

All new Python code should include type hints.

Good

```python
def get_user(user_id: int) -> User | None:
```

Avoid

```python
def get_user(user_id):
```

---

## Class Size

Prefer small focused classes.

Large classes should be split into services or helper modules.

---

## Configuration

Never hardcode:

* passwords
* API keys
* secrets

Use environment variables.

---

## Logging

Use Python logging.

Avoid

```python
print()
```

Use

```python
logger.info()
logger.warning()
logger.error()
logger.exception()
```

---

## Exceptions

Catch only exceptions you can handle.

Never write

```python
except:
```

Instead

```python
except ValueError:
```

Unexpected exceptions should be logged and allowed to propagate when appropriate.

---

# Frontend Standards

## Components

Keep components small and focused.

If a component becomes difficult to understand, extract child components or custom hooks.

Prefer composition over deeply nested conditional rendering.

---

## State Management

Keep state as local as practical.

Avoid duplicating state that can be derived from existing values.

Use custom hooks to encapsulate reusable stateful logic.

---

## Props

Keep props explicit and strongly typed.

Avoid passing large objects when only a few values are needed.

Prefer descriptive prop names over generic names like `data` or `item`.

---

## TypeScript

Avoid using `any`.

Prefer specific types, interfaces, and utility types.

Use discriminated unions where appropriate for complex state.

---

## Styling

Use CSS Modules for component-specific styles.

Avoid inline styles except for simple dynamic values.

Keep styling concerns separate from component logic.

---

## Side Effects

Keep side effects inside `useEffect`.

Always specify dependency arrays correctly.

Avoid disabling React Hooks ESLint rules unless there is a documented reason.

---
# Imports

Group imports consistently.

Python

```
Standard library

Third-party packages

Application imports
```

React

```
React

Third-party

Application imports

Relative imports
```

Remove unused imports.

---

# Comments

Write comments explaining **why**, not **what**.

Good

```python
# Cache expires after five minutes to prevent stale permissions.
```

Avoid

```python
# Increment i
i += 1
```

---

# Error Handling

Never silently ignore errors.

Bad

```python
try:
    ...
except Exception:
    pass
```

Good

```python
try:
    ...
except ValidationError as exc:
    logger.warning(exc)
    raise
```



# Ruff Standards

Ruff is the source of truth for Python linting and formatting.

Requirements:

* No lint violations
* No unused imports
* No unused variables
* Remove dead code
* Prefer modern Python syntax
* Use automatic formatting
* Keep imports sorted

Do not suppress Ruff warnings unless there is a reason.

---

# ESLint Standards

ESLint is the source of truth for frontend linting.

Requirements:

* No lint errors
* No unused variables
* No unreachable code
* No disabled rules without explanation
* Follow React Hooks rules
* Resolve all TypeScript issues before merging

---

# Security

Never commit:

* passwords
* API keys
* tokens
* certificates
* secrets
  