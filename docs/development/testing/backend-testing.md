# Testing Documentation

## Overview

This project uses **pytest** as the testing framework and **pytest-cov** for measuring code coverage. Automated testing helps ensure that application functionality remains reliable and reduces the risk of introducing regressions.

---

# Testing Tools

| Tool       | Purpose                         |
| ---------- | ------------------------------- |
| pytest     | Python testing framework        |
| pytest-cov | Generates code coverage reports |

---

# Installation

Install the required testing dependencies:

```bash
pip install pytest pytest-cov
```

---

# Test Structure

Tests should be placed inside a dedicated `tests/` directory.

Example project structure:

```text
project/
├── app/
├── tests/
│   ├── test_auth.py
│   ├── test_users.py
│   └── test_example.py
├── pytest.ini
└── requirements-dev.txt
```

---

# Test Naming Conventions

## Test Files

Test files should begin with `test_`.

Examples:

```text
test_auth.py
test_users.py
test_api.py
```

## Test Functions

Test functions should also begin with `test_`.

Example:

```python
def test_addition():
    assert 2 + 2 == 4
```

Use descriptive names that clearly indicate the behavior being tested.

---

# Running Tests

## Run All Tests

```bash
pytest
```

## Verbose Output

```bash
pytest -v
```
Verbose output makes it so that you can see:
- The name of each test being run.
- Whether it PASSED, FAILED, SKIPPED, or XFAILED.
- Exactly which test failed if an issue occurs.

## Run a Single Test File

```bash
pytest tests/test_auth.py
```

## Run a Specific Test

```bash
pytest tests/test_auth.py::test_user_login
```

## Run Tests Matching a Keyword

```bash
pytest -k login
```

## Stop After the First Failure

```bash
pytest -x
```

---

# Code Coverage

Generate a coverage report:

```bash
pytest --cov=app
```

Generate an HTML coverage report:

```bash
pytest --cov=app --cov-report=html
```

The HTML report will be created in:

```text
htmlcov/index.html
```

Open this file in a web browser to view detailed coverage information.

---

# Recommended Coverage Goals

| Component           | Recommended Coverage |
| ------------------- | -------------------- |
| Overall Project     | 80% or higher        |
| Core Logic | 90–100%              |
| Utility Functions   | 100% when practical  |

Coverage percentage should be used as a guideline rather than the sole measure of test quality.

---

# Best Practices

* Write tests for all new features.
* Update tests when existing functionality changes.
* Keep tests independent of one another.
* Use clear and descriptive test names.
* Test expected behavior rather than implementation details.
* Keep tests simple, readable, and maintainable.

---

# Example Test

```python
def add(a, b):
    return a + b


def test_add():
    assert add(2, 3) == 5
```

Run the test with:

```bash
pytest
```

---

# Before Creating a Pull Request

* [ ] All tests pass.
* [ ] New functionality includes tests.
* [ ] Existing tests have not been broken.
* [ ] Coverage has been maintained or improved.

