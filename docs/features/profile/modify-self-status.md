# User Story

As a user, I want to set my status as free or busy so that my friends can see my status in real-time.

![modify-self-status-main](../../assets/modify-self-status-main.jpg)

**Acceptance Criteria**

**Scenario 1:  Successful Status Update**
- **Given** I am logged in 
- **And** I have a blank or Free/Busy status
- **When** I select the option to set a status to Free or Busy in the dropdown
- **Then** the status is updated in real-time 
- **And** I my friends can see my new status update

**Scenario 2: Server error during status update**
- **Given** I am logged in
- **When** I select a status 
- **And** the server encounters an internal error
- **Then** my status is not updated 
- **And** I receive an HTTP 500 Internal Server Error response 
- **And** I see the message: 

  > **Something Went Wrong**
  > We couldn't update your status right now. Please try again later.

**Scenario 3: Connection error**
- **Given** I am logged in
- **When** I select a status 
- **And** the client cannot connect to the server
- **Then** my status is not updated 
- **And** I see the message: 

  > Connection Error
  > We couldn't connect to the server. Check your internet connection and try again.

**Technical Requirements**
- Successful update returns HTTP 200 OK
- Server errors return HTTP 500 Internal Server Error
- API endpoint: PUT /api/user/profile/status