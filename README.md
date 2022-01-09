# Customizable Wedding Website (customizable-wedding)
I am going to create a website that is a customizable resource for newly engaged couples who are planning a wedding.  It will handle RSVPs, have registry links, and allow the couple to add their own photos and addresses for venues.  All the user will need to do is create an account and fill in some fields and photos and they will be able to reference the RSVP list. 

# Domain Driven Design
##Events
- User Logged in 
- User logged out
- User account created
- User account deleted
- Photo uploaded
- Couple_name updated
- Address_1 updated
- Address_2 updated
- Registry link added
- Guest added to list
- Guest deleted from list

##Commands
- Create user account
- Delete user account
- Login user
- Logout user
- Upload photo
- Update Couple_name
- Update Address_1
- Update Address_2
- Create registry link
- Add guest to list
- Delete guest from list

##Entities
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


##Value Object
**File**
- Data (The data of the files for photo uploads)
