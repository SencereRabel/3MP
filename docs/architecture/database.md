# Database Schema

The V1 ERD: 

```
+---------------------------+                 +---------------------------+                 +---------------------------+
|           User            |                 |        Friendship        |                 |           User            |
+---------------------------+                 +---------------------------+                 +---------------------------+
| PK User_ID                |----------------<| PK Friendship_ID         |>----------------| PK User_ID                |
| First_Name                |                 | FK User_ID1              |                 | First_Name                |
| Last_Name                 |                 | FK User_ID2              |                 | Last_Name                 |
| Email                     |                 | Date_Created             |                 | Email                     |
| Phone_Number              |                 +---------------------------+                 | Phone_Number              |
| Password                  |                                                               | Password                  |
| Status                    |                                                               | Status                    |
+---------------------------+                                                               +---------------------------+
             |
             | 1
             |
             | N
+---------------------------+
|          Session          |
+---------------------------+
| PK Session_ID             |
| FK User_ID                |
| Session_Token_Hash        |
| Created_At                |
| Last_Activity_At          |
| Expires_At                |
+---------------------------+

Relationships:
---------------
User (1) --------< Session (Many)

User (1) --------< Friendship (Many) via User_ID1
User (1) --------< Friendship (Many) via User_ID2

Friendship represents a many-to-many relationship
between users (a user can have many friends, and
each friendship connects exactly two users).
```

## User

### Purpose

Stores information for registered users.

| Column | Data Type | Constraints | Description |
|---------|-----------|------------|-------------|
| User_ID | INT | Primary Key, Auto Increment | Unique identifier for each user |
| First_Name | VARCHAR(50) | NOT NULL | User's first name |
| Last_Name | VARCHAR(50) | NOT NULL | User's last name |
| Email | VARCHAR(255) | UNIQUE, NOT NULL | User's email address |
| Phone_Number | VARCHAR(20) | UNIQUE | User's phone number |
| Password | VARCHAR(255) | NOT NULL | Hashed user password |
| Status | BOOLEAN | NOT NULL | Status (Busy/Free) |

### Primary Key

- `User_ID`

### Unique Keys

- `Email`
- `Phone_Number`

---

## Friendship

### Purpose

Stores friendship relationships between two users.

| Column | Data Type | Constraints | Description |
|---------|-----------|------------|-------------|
| Friendship_ID | INT | Primary Key, Auto Increment | Unique friendship identifier |
| User_ID1 | INT | Foreign Key | First user |
| User_ID2 | INT | Foreign Key | Second user |
| Date_Created | TIMESTAMP | NOT NULL | Date the friendship was created |

### Primary Key

- `Friendship_ID`

### Foreign Keys

| Column | References |
|---------|------------|
| User_ID1 | User(User_ID) |
| User_ID2 | User(User_ID) |

---

## Session

### Purpose

Stores authenticated user sessions for session management.

| Column | Data Type | Constraints | Description |
|---------|-----------|------------|-------------|
| Session_ID | VARCHAR(50) | Primary Key | Unique session identifier |
| User_ID | INT | Foreign Key, NOT NULL | User associated with the session |
| Session_Token_Hash | VARCHAR(255) | NOT NULL | Secure hash of the session token |
| Created_At | TIMESTAMP | NOT NULL | Time the session was created |
| Last_Activity_At | TIMESTAMP | NOT NULL | Last recorded activity for the session |
| Expires_At | TIMESTAMP | NOT NULL | Session expiration time |

### Primary Key

- `Session_ID`

### Foreign Keys

| Column | References |
|---------|------------|
| User_ID | User(User_ID) |

---

# Data Dictionary

## User

| Attribute | Description |
|-----------|-------------|
| User_ID | Unique user identifier |
| First_Name | User's first name |
| Last_Name | User's last name |
| Email | User login email |
| Phone_Number | User contact number |
| Password | Securely hashed password |
| Status | Indicates user availability status |

---

## Friendship

| Attribute | Description |
|-----------|-------------|
| Friendship_ID | Unique friendship identifier |
| User_ID1 | First user in the friendship |
| User_ID2 | Second user in the friendship |
| Date_Created | Timestamp when the friendship was created |

---

## Session

| Attribute | Description |
|-----------|-------------|
| Session_ID | Unique session identifier |
| User_ID | User who owns the session |
| Session_Token_Hash | Secure hash of the session token used for authentication |
| Created_At | Timestamp when the session was created |
| Last_Activity_At | Timestamp of the user's last activity |
| Expires_At | Timestamp when the session expires |

---

# Business Rules

- Users must register with a unique email address.
- Phone numbers are optional but must be unique if provided.
- Users cannot be friends with themselves.
- Each friendship must involve exactly two users.
- Duplicate friendships are not allowed.
- Friendships are mutual (bidirectional).
- A user may have zero or more friends.
- A user may have zero or more active sessions.
- Every session must belong to exactly one user.
- Session tokens are never stored in plain text; only their secure hash is stored.
- Expired sessions are considered invalid and must not be used for authentication.
- The `Last_Activity_At` timestamp is updated whenever an authenticated request is made.

---

# Assumptions

- Email addresses are used for user authentication.
- Passwords are stored using a secure hashing algorithm.
- Session tokens are stored only as secure hashes and are never returned to clients after creation.
- Authentication uses an HTTP cookie containing the session token.
- Sessions automatically expire based on the `Expires_At` timestamp.
