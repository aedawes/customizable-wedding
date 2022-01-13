# Customizable Wedding Website (customizable-wedding)
I am going to create a website that is a customizable resource for newly engaged couples who are planning a wedding.  It will handle RSVPs, have registry links, and allow the couple to add their own photos and addresses for venues.  All the user will need to do is create an account and fill in some fields and photos and they will be able to reference the RSVP list. 

# Domain Driven Design
## Events
- User Logged in 
- User logged out
- User account created
- User account deleted
- Photo uploaded
- Couple_name updated
- Address updated
- Registry link added
- Registry link deleted
- Guest added to list
- Guest deleted from list

# #Commands
- Create user account
- Delete user account
- Login user
- Logout user
- Upload photo
- Update Couple_name
- Update Address
- Create registry link
- Delete registry link
- Add guest to list
- Delete guest from list

## Entities
**Account**
- User id (unique and defined by user)
- Name (What the user would like to be called)
- Password (encrypted passwords)
- Session info (info about whether they are logged in)

**Form**
- Couple's names (The names to be displayed on the main page; not unique)
- Couple photo 1 (Photo to be displayed behind couple's name)
- Address 1 (The name and location of the ceremony)
- Venue photo 1 (Photo of the ceremony venue)
- Address 2 (The name and location of the reception)
- Venue photo 2 (Photo of the reception venue)
- Registry link (Name and link to registry)

## Value Object
**File**
- Data (The data of the files for photo uploads)

# REST Design
| Description | URL Fragment | HTTP Method | Path Parameters | Representations |
| ----------- | ------------ | ----------- | --------------- | --------------- |
| create account | `/accounts` | POST | | Create Account |
| delete account | `/accounts/{accountId}` | DELETE | `accountId` | |
| log in | `/accounts/{accountId}/login` | PUT | `accountId` | Account Log In |
| log out | `/accounts/{accountId}/logout` | PUT | `accountId` | |
| upload photo | `/form/{photoID}` | PUT | `photoID` | placeholder|
| update couple's name | `/form` | PUT | | placeholder |
| update address | `/form` | PUT | | placeholder |
| create registry link | `/form` | POST |  | placeholder |
| delete registry link | `/form` | DELETE |  | placeholder
| Add guest to list | `/form/{guestID}` | POST | `guestId` | placeholder |
| delete guest from list | `/form/{guestId}` | DELETE | `guestId` | placeholder |

# Representation

### Account Log in

```json
{
  "username" : "username"
  "password": "a-password"
}
```

### Create Account
```json
{
  "username" : "username",
  "name" : "First Name",
  "password" : "a-password"
}
```

### Form
```json
{
  "coupleName" : "The Couple's Names",
  "couplePhoto1" : "photoOfCouple",
  "Address1" : "ceremonyAddress",
  "venuePhoto1" : "photoOfCeremony",
  "Address2" : "receptionAddress",
  "venuePhoto2" : "photoOfReception",
  "registryLink" : "Registry Link"
}
```
### File
<img src="CouplePhoto1.png"/>
