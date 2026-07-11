# User Story

As a user, I want to modify my profile so that my account information stays accurate and secure.

![modfiy-profile-main](../../assets/modfiy-profile-main.jpg)

**Acceptance Criteria**

**Scenario 1: Change Name**

Given I am signed in
When I update my name with a valid value and save my changes
Then my name is updated successfully
And I receive an HTTP 200 OK response

**Scenario 2: Invalid Name**

Given I am signed in
When I enter a name that is empty or exceeds 100 characters
Then my name is not updated
And I receive an HTTP 400 Bad Request response
And I see the message:

> **Invalid Name**
> Please enter a valid name.

**Scenario 3: Change Email**
Given I am signed in
When I enter a valid, unused email address and save my changes
Then my email is updated successfully
And it is trimmed and converted to lowercase
And I receive an HTTP 200 OK response

**Scenario 4: Duplicate Email**
Given another account already uses the email address I entered
When I save my changes
Then my email is not updated
And I receive an HTTP 409 Conflict response
And I see the message:

> **Duplicate Email**
> Someone has already created an account with that email.

**Scenario 5: Invalid Email**
Given I enter an improperly formatted email address
When I save my changes
Then my email is not updated
And I receive an HTTP 400 Bad Request response
And I see the message:

> **Invalid Email**
> Please enter a valid email address.

**Scenario 6: Change Phone Number**
Given I am signed in
When I enter a valid, unused phone number and save my changes
Then my phone number is updated successfully
And it is normalized before storage
And I receive an HTTP 200 OK response

**Scenario 7: Duplicate Phone Number**
Given another account already uses the phone number I entered
When I save my changes
Then my phone number is not updated
And I receive an HTTP 409 Conflict response
And I see the message:

> **Duplicate Phone Number**
> Someone has already created an account with that phone number.

**Scenario 8: Invalid Phone Number**
Given I enter an invalid phone number
When I save my changes
Then my phone number is not updated
And I receive an HTTP 400 Bad Request response
And I see the message:

> **Invalid Phone Number**
> Please enter a valid phone number.

**Scenario 9: Change Password**
Given I am signed in
And I enter my current password
And I enter a new password that meets the password requirements
When I save my changes
Then my password is updated successfully
And the new password is securely hashed
And I receive an HTTP 200 OK response

**Scenario 10: Incorrect Current Password**
Given I enter an incorrect current password
When I attempt to change my password
Then my password is not updated
And I receive an HTTP 401 Unauthorized response
And I see the message:

> **Incorrect Password**
> Your current password is incorrect.

**Scenario 11: New Password Does Not Meet Requirements**
Given I enter a new password that does not meet the password requirements
When I save my changes
Then my password is not updated
And I receive an HTTP 400 Bad Request response
And I see the message:

> **Password Requirements Not Met**
> Please choose a stronger password that meets the password requirements.

**Scenario 12: Successful Sign Out**

* Given I am signed in
* When I click the **Sign Out** button
* Then my session is terminated
* And I am redirected to the sign-in page
* And I can no longer access authenticated pages without signing in again.

**Scenario 13: Connection Error**

* Given I am signed in
* When I click the **Sign Out** button
* And the client cannot connect to the server
* Then I remain signed in
* And I see the message:

> **Connection Error**
> Your device appears to be offline. Reconnect to the internet and try again.

**Scenario 14: Server Error**

* Given I am signed in
* When I click the **Sign Out** button
* And the server encounters an internal error
* Then I remain signed in
* And I receive an HTTP 500 Internal Server Error response
* And I see the message:

> **Server Error**
> Something went wrong on our side. Please try again in a few minutes.

**Technical Requirements**

- The Profile page is accessible only to authenticated users.
- The Profile page displays the user's current:

  - First Name
  - Last Name
  - Email Address
  - Phone Number
- The page includes a Change Password section containing:

  - Current Password (required)
  - New Password (required)
  - Confirm Password (required)
- The page includes a Sign Out button.
- Leading and trailing whitespace is trimmed from text fields before validation.
- Email addresses are converted to lowercase before validation and storage.
- Email addresses must be unique.
- Phone numbers are validated according to the application's supported format.
- Passwords must meet the application's password complexity requirements.
- New Password and Confirm Password must match.
- The current password must be validated before allowing a password change.
- Passwords are transmitted only over HTTPS.
- Passwords are never stored or logged in plain text.
- Passwords are hashed using a secure hashing algorithm before storage.
- Successful password changes return **HTTP 200 OK**.
- Successful operations return **HTTP 200 OK**.
- Unexpected server failures return **HTTP 500 Internal Server Error**.
- If the client cannot reach the server, the application displays a connection error and no changes are saved.
