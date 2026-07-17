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
- `POST /auth/reset-password`
- `GET /auth/me`

User

- `GET /users/me`
- `PATCH /users/me`
- `DELETE /users/me`

Friends

- `GET /friends`
- `POST /friends`
- `Delete /friends/:friend-id`

Sessions

- `GET /sessions/current`
- `DELETE /sessions/current`

<!-- EMAIL NOTIFICATIONS SUBDOMAIN -->

**Automated Email:** notify.app_name.com

- Password Resets
- Account Notification
