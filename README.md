README
Project: Remindly - Group 6 Course ACIT 2520 - Developing Web Applications - CIT - BCIT

INSTRUCTOR
--------------------------
Armaan Dhanji

TEAM MEMBERS
--------------------------
1. Henrik T Dang (A01210249)
2. Braedon MacDonald
3. Sebastian Ptelski



CONTROLLER PAGE LIST
--------------------------
1. index.js - interact with express server and connect other controllers
2. auth_controller.js - control logics regarding autorization such as sign in and register
3. reminder_controller - control logics for the app fuctions such as creating, viewing, editing or deleting reminders

USER-VIEW PAGE LIST
--------------------------
1. index.html - landing page
2. create.ejs - create reminders
2. edit.ejs - edit reminders
3. friends.ejs - choose to add friends or remove friends
4. index.ejs - shows reminder list
5. single-reminder.ejs 
6. login.ejs - login page 
7. register.ejs - registeration page 


This README file is for our reminder app - Remindly . Agile sprint methdology was integrated in this group project. 
The majority of the code is written in javascript in nodejs and ejs integrated into ejs files using Visual studio code. 
Our team collaborated over Visual studio code live share to collaborate in real time and continous integration was done through Github Workflow.
Some other platforms we used in this project were, 
Discord for communication
Trello for Collaboration 
Notion for Documentation
To run our app in our VsCode, in Terminal, simply run following 2 commands:
	npm install
	npm start


APP DESCRIPTION
--------------------------
The target audience for the app is students or anyone that is looking for a really simple to use reminder app. It has features like:

1. Creating user accounts
2. Creating Reminders
3. It allows adding subtasks to reminders.
4. Subtasks could be ticked off, once completed. 
5. You can also edit the previously created reminders and subtasks.
6. You can add other users as friends and see their created reminders to help users collaborate with each other.
7. Shows your reminders and your friend's reminders under seprate sections and shows who the reminder is from, such as "from John"
7. Integrated autorization controllers to assure correct sign up and login information.
8. Users can login using E-mail and/or username  
9. All reminders have a "completed" variable which says false on default when it is created. When the task is completed, this can be changed to true by editing the reminder.
10. Tags could be added to reminders.
11. Associate a date should be reminded


--------------------------


--------------------------

This project took us 5 weeks of work, consisting 5 total sprints. Honestly, we did face some problems during the collaboration but it was minimal and we handeled it.
The aim of this project was to create a really simple to use reminder app with some really functional integrated features that do the job while learning Agile project management, continous integration and delivery.
Due to time limitation and peak season, we could not finish making users profile pictures API. However, we will try to implement these as well as many other cool function.
Future deliverables might be:
1. Allow users to upload their own picture from the computer or wherever they like
2. Interact with Google Map API
3. Using API to send the notification or text message when reminder are closed to the due date
4. Using Real Database
5. Popup an alert message if there is issues when users sign in or register 
6. User API to allow user add cover photo for the reminder
7. Change color of each tag and allow user to click that tag to list all related reminders (including from friends)

Written by:- 
The Team
