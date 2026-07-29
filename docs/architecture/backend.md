# Backend Design Document

## Overview

The backend is responsible for processing client requests, enforcing business logic, managing authentication, and interacting with the database. It exposes a REST API that is consumed by the React frontend and provides secure access to application data.

The backend follows a layered architecture to separate responsibilities, making the application easier to maintain, test, and extend.

---

# Architecture

```
                React Frontend
                       │
                 HTTP Requests
                       │
                 Flask API Routes
                       │
             Authentication Layer
                       │
                Business Services
                       │
                 Database Access
                       │
                   Database
```

The backend is divided into several logical layers:

- **Routes** receive HTTP requests from the frontend.
- **Authentication** verifies the identity of the user.
- **Services** contain the application's business logic.
- **Database Layer** retrieves and stores persistent data.

---

# Main Components

## Authentication

The authentication component is responsible for securing the application and ensuring that only authorised users can access protected resources.

Responsibilities include:

- User registration
- User login
- User logout
- Password reset
- JWT token generation and validation 
- Protecting authenticated API endpoints 

Authentication middleware validates the user's token before allowing access to protected resources.

---

## Database

The database stores all persistent application data.

Examples include:

- User accounts
- User profiles
- Friend relationships
- Status updates

The backend communicates with the database through service functions rather than allowing direct access from the API routes.

---

## Services

The service layer contains the application's business logic. It processes validated requests, performs any required calculations or validation, communicates with the database, and returns responses to the API.

Separating business logic from routes improves maintainability and simplifies testing.

---

# Business Logic

## User Service

The User Service manages operations related to user accounts.

Responsibilities include:

- User registration
- User authentication
- Password reset
- Account deletion
- User logout
- Friend request creation
- Friend removal

Before updating the database, the service validates user input and verifies permissions where required.

---

## Profile Service

The Profile Service manages profile-related functionality.

Responsibilities include:

- Viewing profile information
- Updating profile details
- Updating user status
- Retrieving profile information

The service validates profile updates before saving changes to the database.

---

# Request Lifecycle

Every request follows the same general process:

1. The React frontend sends an HTTP request.
2. Flask routes receive the request.
3. Authentication middleware validates the user's JWT (where required).
4. Input validation checks the request data.
5. The appropriate service processes the request.
6. The service communicates with the database.
7. A JSON response is returned to the frontend.

---

# Error Handling

The backend uses consistent HTTP status codes and JSON responses for errors.

| Status Code | Description |
|------------|-------------|
| 200 | Request completed successfully |
| 201 | Resource created successfully |
| 400 | Invalid request or validation error |
| 401 | Authentication required or invalid credentials |
| 403 | User is not authorised |
| 404 | Requested resource not found |
| 500 | Internal server error |

Unexpected exceptions are handled centrally to prevent application crashes and provide consistent responses.

---

# Security

Several security measures are implemented within the backend.

- Passwords are securely hashed before storage.
- JWT authentication protects private endpoints.
- Input validation prevents invalid or malicious data.
- Sensitive configuration is stored using environment variables.
- Protected endpoints verify user permissions before processing requests.

---

# Technology Stack

| Technology | Purpose |
|------------|---------|
| Python | Backend programming language |
| Flask | REST API framework |
| React | Frontend framework |
| Pytest | Backend testing framework |

---

# Related Documentation

This document should be read alongside the following documentation:

- API Documentation
- Database Design Document
- Testing Documentation

These documents provide detailed information about the application's endpoints, database schema, and testing strategy respectively.