## Subdomains

**1. SEO Website** `app_name.com`: Used for Marketing

**2. Web Application:** `app.app_name.com`: Used for actual application

**3. REST API:** `api.app_name.com/v1`: Backend Public URL

**4. Automated Email:** `notify.app_name.com`: Used for Automated Mail Notifications

### 1. Public SEO Website

`/` → (Home Page)

`/about` → (About)

`/features` → (Features)

`/pricing` → (Pricing)

`/blog` → (Blog)

`/contact` → (Contact)

`/frequently-asked-questions` → (FAQ)

`/privacy-policy` → (Privacy Policy) `no-index`

`/terms-of-service` → (Terms of Service) `no-index`

### 2. WEB APPLICATION SUBDOMAIN

`/`

- unauthenticated → (Sign-In Page)
- authenticated → (Friends List Page)

`/create-account` (Create Account Page)

`/forgot-password` → (Forgot Password Page)

`/reset-password` → (Reset Password Page)

`/sign-out`

- unauthenticated → (Sign-In Page)
- authenticated → (Sign-Out Page)

`/modify-profile`

- unauthenticated → (Sign-In Page)
- authenticated → (Modify Profile Page)

`/add-friend`

- unauthenticated → (Sign-In Page)
- authenticated → (Add Friend Page)

`/remove-friend`

- unauthenticated → (Sign-In Page)
- authenticated → (Remove Friend Page)

### 3. API SUBDOMAIN

#### Authentication Endpoints

- `/auth/register`
- `/auth/login`
- `/auth/logout`
- `/auth/forgot-password`
- `/auth/reset-password`
- `/auth/me`

`POST /auth/register` → (Create Account)

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

> Refer to `/features/authentication/create-account.md`

---

`POST /auth/login` → (Log In)

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
    "sessionToken": "abc123xyz",
    "message": "User Signed In Successfully."
  }
}
```

> Refer to `/features/authentication/sign-in.md`

---

`POST /auth/logout`

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

> Refer to `/features/authentication/sign-out.md`

---

`POST /auth/forgot-password`
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

> Refer to `/features/authentication/forgot-password.md`

---

`POST /auth/reset-password`

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

> Refer to `/features/authentication/forgot-password.md`

---

`GET /auth/me`

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

#### User Endpoints

- `/users/me`

`GET /users/me`

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

`PATCH /users/me`

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

> Refer to `/features/profile/modify-profile.md`

> Refer to `/features/profile/modify-self-status.md`

---

`DELETE /users/me`

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

#### Friends Endpoints

- `/friends`
- `/friends/:friend-id`

`GET /friends`

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
  }
```

> Refer to `/features/friends-list/view-friends-list.md`

---

`POST /friends/:friend-id`

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
    "message": "Added Friend",
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
}
```

> Refer to `/features/friends-list/add-friend.md`

---

`DELETE /friends/:friend-id`

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

> Refer to `/features/friends-list/remove-friend.md`

---


#### Sessions Endpoints

- `/sessions/current`

`GET /sessions/current`

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

`DELETE /sessions/current`

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

### 3. EMAIL NOTIFICATIONS SUBDOMAIN

**Automated Email:** notify.app_name.com

- Password Resets
- Account Notification
