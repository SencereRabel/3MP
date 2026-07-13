# User Story

As a user, I want to add a friend so that I can build and manage my friends list.

![add-friend-main](../../assets/add-friend-main.jpg)

**Acceptance Criteria**

**Scenario 1: Successful adding of friend**
- **Given** that I am logged in 
- **And** have my friends "Friend Code"
- **When** I enter the friend code into the add friends dropdown
- **Then** the friend is added to my friends list 
- **And** I can now see their status and they mine



**Scenario 2: Invalid friend code**
- **Given** that I am logged in 
- **And** have an invalid "Friend Code"
- **When** I enter the friend code into the add friends dropdown
- **Then** my friend is not added 
- **And** I see the message: 

  > **Invalid Friend Code**
  > We couldn't find your friend. Please try again with different code.
  
**Scenario 3: Friend already added**

- **Given** I am logged in 
- **And** the user associated with the Friend Code is already on my friends list
- **When** I enter the friend code into the add friends dropdown
- **Then** the friend is not added again 
- **And** I receive an HTTP 409 Conflict response
- **And** I see the message:
  
  > **Friend Already Added**
  > This user is already on your friends list.

**Scenario 4: Connection error**

- **Given** I am logged in 
- **And** I enter a valid Friend Code
- **When** the client cannot connect to the server (for example, because I am offline or the server is unreachable)
- **Then** the friend is not added 
- **And** I see the message:

  > **Connection Error**
  > We couldn't connect to the server. Check your internet connection and try again.

**Scenario 5: Server error during friend add**
- **Given** that I am logged in 
- **And** I have my friends, "Friend Code"
- **When** I enter the friend code into the add friends dropdown 
- **And** I encounter a server error
- **Then** my friend is not added 
- **And** I receive an HTTP 500 Internal Server Error response 
- **And** I see the message: 

  > **Something Went Wrong**
  > We couldn't add your friend right now. Please try again later.
  

  
**Technical Requirements:**
- Users must be authenticated before adding friends.
- The API endpoint is POST /api/user/friends.
- The client sends a JSON request containing the Friend Code.
- Friend Codes are required and are validated before processing.
- Friend Codes must uniquely identify a registered user.
- A user cannot add themselves as a friend.
- A user cannot add the same friend more than once.
- Upon successful addition, the friendship relationship is stored securely in the database.
- Successful friend creation returns HTTP 201 Created.
- Invalid Friend Codes or invalid requests return HTTP 400 Bad Request.
- Duplicate friendships return HTTP 409 Conflict.
- Unexpected server failures return HTTP 500 Internal Server Error.
- If the client cannot reach the server (offline, timeout, or network failure), the client displays a connection error and does not add the friend.
