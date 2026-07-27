# Frontend Testing Documentation

## Overview

The frontend of this proejct uses **jest** for the testing framework and measuring code coverage and **react-testing-library** is used to test react rendering.

---

# Testing Tools

| Tool                  | Purpose                                            |
| --------------------- | -------------------------------------------------- |
| jest                  | JavaScript testing framework and code coverage     |
| jest-dom              | Adds custom DOM matchers for Jest                  |
| react-testing-library | Tests React components from the user's perspective |

---

# Installation

Install the required testing dependencies

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

# Test Structure

Tests should be placed inside a dedicated `tests/` directory.

Example project structure

```text
client/
├── src/
├── tests/
│   ├── App.test.jsx
│   ├── FriendList.test.jsx
│   └── ModifyProfileForm.test.jsx
├── jest.config.js
└── package.json
```

---

# Test Naming Convention

## Test Files

Test files for each component should have the same name and the `.test.jsx` extension

## Test Functions

Use descriptive test names that clearly describe the expected behavior.

Example:

```JavaScript
test("renders the login button", () => {
  expect(/* test code */).toBe(/* expected value */);
});
```

# Running Tests

## Run All Tests

```bash
npm test
```

## Verbose Output

```bash
npm test -- --verbose
```

## Coverage Output

```bash
npm test -- --coverage
```

Verbose output displays:

- Each test being executed
- Whether each test passed or failed
- Detailed information about failures

## Run a Single Test File

```bash
npx jest src/components/Button.test.jsx
```

## Run a Specific Test

```bash
npx jest -t "renders the login button"
```

## Run Tests Matching a Pattern

```bash
npx jest Button
```

## Writing Component Tests

React Testing Library encourages testing components the way users interact with them.

Component Rendering Example:

```JavaScript

import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button text", () => {
  render(<Button>Click Me</Button>);

  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
```

User Interactions Example:

```JavaScript

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
test("increments the counter", async () => {
  const user = userEvent.setup();

  render(<Counter />); await user.click(screen.getByRole("button"));

  expect(screen.getByText("1")).toBeInTheDocument();
});
```

# Best Practices

- Test components from the user's perspective.
- Prefer querying elements by role, label, or visible text.
- Avoid testing implementation details such as component state.
- Keep tests isolated and independent.
- Use descriptive test names.
- Write tests for new features before merging.
- Update tests when component behavior changes.
- Mock external APIs and network requests when appropriate.

# Before Creating a Pull Request

- [ ] All tests pass.
- [ ] New functionality includes tests.
- [ ] Existing tests have not been broken.
- [ ] Coverage has been maintained or improved.
