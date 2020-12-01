let PORT = 3000
const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const cookieSession = require('cookie-session');
const authCheck = require('./controller/auth')
const database = require("./database");


app.use(express.static(path.join(__dirname, "public")));     //landing page

app.use(express.urlencoded({ extended: true }));    //? what true/false diff?
app.use(express.json());
app.use(ejsLayouts);

app.set("view engine", "ejs");

// Authorization
app.use(cookieSession({
	name: 'session',
	keys: ['aaa', 'bbb', 'ccc'],
  maxAge: 10*24*3600*1000
}));

app.use((req, res, next) => {   //global middleware
  if(req.session.user) {
    if (database[req.session.user]) {
      req.user = database[req.session.user];
      // console.log("The user is: " + req.user)
      // console.log("The session is: " + req.session.user)
      next();
    }
  } else {
    next();
  }
})

// Routes start here

app.get("/reminders",authCheck, reminderController.list)

app.get("/reminder/new", authCheck, reminderController.new)

app.get("/reminder/:username&:id",authCheck, reminderController.listOne)

app.get("/reminder/:id/edit",authCheck, reminderController.edit)

app.post("/reminder/", reminderController.create)

app.post("/reminder/update/:id", reminderController.update)

app.post("/reminder/delete/:id", reminderController.delete)

app.post("/checkboxChanged/:id", reminderController.listOne)

app.get('/friends', reminderController.friends)   // I already hide navbar at login and signup so no need to check Auth
app.post('/friendsChanged', reminderController.friends)


app.get("/register", authController.register);
app.get("/login", authController.login);
app.post("/register", authController.registerSubmit);
app.post("/login", authController.loginSubmit);

//Logout. Simply destroy the session. 
app.post('/logout', (req,res) => {
  req.session = null
  console.log(database)
  res.redirect('/');
});

// app.use((req, res, next) => {    //TODO
//     let currentUrl = req.url
//     console.log(currentUrl);
//     res.locals.narBar = 'active'
// })

app.listen(PORT, function () {
  console.log(`Server running. Visit: localhost:${PORT}/reminders in your browser 🚀`);
});
