## Domain

<!-- PUBLIC WEBSITE -->

**SEO Website:** app_name.com

- `/` → (Home Page)
- `/about` → (About)
- `/features` → (Features)
- `/pricing` → (Pricing)
- `/blog` → (Blog)
- `/contact` → (Contact)
- `/frequently-asked-questions` → (FAQ)
- `/privacy-policy` → (Privacy Policy) `no-index`
- `/terms-of-service` → (Terms of Service) `no-index`

## Subdomains

<!-- WEB APPLICATION SUBDOMAIN -->

**Web Application:** `app.app_name.com`

- `/`
  - unauthenticated → (Sign-In Page)
  - authenticated → (Friends List Page)
- `/create-account` (Create Account Page)

- `/forgot-password` → (Forgot Password Page)
- `/reset-password` → (Reset Password Page)
- `/sign-out`
  - unauthenticated → (Sign-In Page)
  - authenticated → (Sign-Out Page)
- `/modify-profile`
  - unauthenticated → (Sign-In Page)
  - authenticated → (Modify Profile Page)
- `/add-friend`
  - unauthenticated → (Sign-In Page)
  - authenticated → (Add Friend Page)
- `/remove-friend`
  - unauthenticated → (Sign-In Page)
  - authenticated → (Remove Friend Page)

<!-- API SUBDOMAIN -->

**REST API:** `api.app_name.com/v1`

Authentication

- `POST /auth/register` → (Create Account)

  Body:

  ```json
  {
    "firstName": "Ian",
    "lastName": "Valeta",
    "email": "valeta.iac@gmail.com",
    "password": "UserEnteredPassword123!"
  }
  ```

  Response:

  ```json
  {
    "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "data": {
      "message": "Account created successfully."
    }
  }
  ```

- `POST /auth/login` → (Log In)

  Body:

  ```json
  {
    "email": "valeta.iac@gmail.com",
    "password": "UserEnteredPassword123!"
  }
  ```

  Response:

  ```json
  {
    "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "data": {
      "message": "User Signed In Successfully."
    }
  }
  ```

- `POST /auth/logout`

  Header:

  ```http
  Cookie: session_token=abc123xyz
  ```

  Response:

  ```json
  {
    "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "data": {
      "message": "User Logged Out Successfully."
    }
  }
  ```

- `POST /auth/forgot-password`
  Body:

  ```json
  {
    "email": "valeta.iac@gmail.com"
  }
  ```

  Response:

  ```json
  {
    "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "data": {
      "message": "Temporary password sent to email."
    }
  }

  ```

- `POST /auth/reset-password`

  Body:

  ```json
  {
    "email": "valeta.iac@gmail.com"
    "temporaryPassword": "hyt-73u-sak"
    "newPassword": "CatsLuv3Me!!!"
  }
  ```

  Response:

  ```json
  {
    "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "data": {
      "message": "Password Reset Successfully."
    }
  }
  ```

- `GET /auth/me`

  Header:

  ```http
  Cookie: session_token=abc123xyz
  ```

  Response:

  ```json
  "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "data": {
      "user": {
        "authenticated": true,
        "userId": "16289H",
        "sessionId": "sess_456",
        "expiresAt": "2026-07-20T14:00:00Z"

      }
    }
  ```

User

- `GET /users/me`

  Header:

  ```http
  Cookie: session_token=abc123xyz
  ```

  Response:

  ```json
  "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "data": {
      "message": "Profile retrieved successfully.",
      "user": {
        "userId": "16289H",
        "firstName": "Ian",
        "lastName": "Valeta",
        "email": "valeta.iac@gmail.com",
        "isBusy": false
      }
    }
  ```

- `PATCH /users/me`

  Header:

  ```http
  Cookie: session_token=abc123xyz
  ```

  Body:

  ```json
  {
    "firstName": "Ian",
    "lastName": "Valeta",
    "email": "valeta.iac@gmail.com",
    "currentPassword": "******",
    "newPassword": "CatsLuv3Me!!!",
    "isBusy": false
  }
  ```

  Response:

  ```json
  "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "data": {
      "message": "Profile updated successfully.",
      "user": {
        "userId": "16289H",
        "firstName": "Ian",
        "lastName": "Valeta",
        "email": "valeta.iac@gmail.com",
        "isBusy": false
      }
    }
  ```

- `DELETE /users/me`

  Header:

  ```http
  Cookie: session_token=abc123xyz
  ```

  Response:

  ```json
  "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "data": {
      "message": "Profile deleted successfully.",
    }
  ```

Friends

- `GET /friends`

  Header:

  ```http
  Cookie: session_token=abc123xyz
  ```

  Response:

  ```json
  "error": null || {
      "code": "Error Title",
      "message": "Error Description"
    },
    "friends": [
      {
        "userId": "16289H",
        "firstName": "Ian",
        "lastName": "Valeta",
        "email": "valeta.iac@gmail.com",
        "isBusy": false
      },
      ...
    ]
  ```

- `POST /friends/:friend-id`

  Header:

  ```http
  Cookie: session_token=abc123xyz
  ```

  Response:

  ```json
  {
    "error": null || {
        "code": "Error Title",
        "message": "Error Description"
      },
    "message": "Added Friend"
  }
  ```

- `Delete /friends/:friend-id`

  Header:

  ```http
  Cookie: session_token=abc123xyz
  ```

  Response:

  ```json
  {
    "error": null || {
        "code": "Error Title",
        "message": "Error Description"
      },
    "message": "Deleted Friend"
  }
  ```

Sessions

- `GET /sessions/current`

  Header:

  ```HTTP
  Cookie: session_token=abc123xyz
  ```

  Response:

  ```json
  {
    "error": null,
    "data": {
      "message": "Session retrieved successfully.",
      "session": {
        "sessionId": "sess_456",
        "userId": "16289H",
        "createdAt": "2026-07-19T14:00:00Z",
        "lastActivityAt": "2026-07-20T13:52:14Z",
        "expiresAt": "2026-07-20T14:00:00Z"
      }
    }
  }
  ```

- `DELETE /sessions/current`

  Header:

  ```HTTP
  Cookie: session_token=abc123xyz
  ```

  Response:

  ```json
  {
    "error": null,
    "data": {
      "message": "Session terminated successfully."
    }
  }
  ```

<!-- EMAIL NOTIFICATIONS SUBDOMAIN -->

**Automated Email:** notify.app_name.com

- Password Resets
- Account Notification
