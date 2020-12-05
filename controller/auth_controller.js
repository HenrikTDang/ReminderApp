let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render('auth/login', alert_msg ="")
  },

  register: (req, res) => {
    let email = req.query.email
    // if (typeof(req.query.email) == 'undefined'){
    //   return email = ""}
    res.render('auth/register', {email: email, alert_msg: ""})
  },

  loginSubmit: (req, res) => {
    let user = req.body.username
    let userData = database[user];
    // implement
    if (userData == undefined){     // mean user left blank or doesn't exist in database
      for (u of Object.keys(database)) {
        if (req.body.email != 'undefined' && u.email== req.body.email && u.password === req.body.password){   // login with email
          req.session['user']= req.body.username;
          res.redirect('/reminders')
        } }
      let alert_login = "Cannot find matched email or password!!! Please try again" 
      res.render('auth/login', {alert_msg: alert_login})
    } else {                              // user data exists in database (login with username)
      if (database[user].password === req.body.password){
        req.session['user']= req.body.username;
        res.redirect('/reminders')
      } else {
        let alert_login = "Something wrong!!! Please try again" 
        res.render('auth/login', {alert_msg: alert_login})
      }
    }
  },

  registerSubmit: (req, res) => {
    // implement
    console.log('register submit: ', req.body)
    if (req.body.password != req.body.password_cf) {
      let alert = "Passwords don't match!!! Please enter again"            // TODO https://stackoverflow.com/questions/23160743/how-to-send-flash-messages-in-express-4-0
      res.render('auth/register', {email: req.body.email, alert_msg: alert})
    }
    if (req.body.username && req.body.password) {
      if (database[req.body.username] !== undefined) {
        let redirect_page = `<a href="/register"> ⬅Back to Sign-up</a><div>Sorry!!! The user already exists 🤔</div><a href="/login">   Go to Sign-in➡</a>`
        res.contentType("text/html");
        res.send(redirect_page)
      } else {
        database[req.body.username] = {
          username: req.body.username, 
          email: req.body.email,
          password: req.body.password,
          avatar: '',
          friendList: [],
          reminders: []
        }; 
        req.session['user'] = req.body.username;
        res.redirect('/reminders');
      }
    } else {
      res.status(400);
      res.send('invalid new user');
    }
  }
}


module.exports = authController;
