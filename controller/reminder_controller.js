let database = require("../database");
let auth = require("./auth_controller");

let remindersController = {
  list: (req, res) => {
    // console.log(req.user);
    // console.log("hah", database[req.user.username]);
    let friendList = database[req.user.username].friendList
    res.render('reminder/index', {
        host: req.user.username,
        reminders: req.user.reminders,
        data: database,
        friendList : friendList})
  },
  
  new: (req, res) => {
    res.render('reminder/create')
  },

  listOne: (req, res) => {
    let userToFind = req.params.username;
    let reminderToFind = req.params.id;
    let searchResult = database[userToFind].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    // Post the checkbox status in database
    if (searchResult != undefined) {
      let checkboxList = searchResult['subCompleted']
      if (checkboxList != undefined) {
        let checkboxChanged = req.body.id    // This is the id of checkbox change from POST method
        for (let i=0; i < checkboxList.length; i++){
          if (i == parseInt(checkboxChanged)) {
            if (checkboxList[i] == "done"){
              checkboxList[i] = "not done"
            } else {
              checkboxList[i] = "done"
      } } } }
      console.log("sessionhost: ", req.user.username);
      res.render('reminder/single-reminder', { 
        sessionHost: req.user.username,
        reminderHost: database[userToFind].username,
        reminderItem: searchResult, 
        addTagLink: `${reminderToFind}/edit`,
        })
    } else {
      res.render('reminder/index', { reminders: req.user.reminders })
    }
  },

  create: (req, res) => {
    // const reminderPhoto = req.body.coverPhoto
    // const clientId = 
    let reminder = {
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
      subtasks: checkArray(req.body.subtask),
      subCompleted: makeDefaultChecklist(req.body.subtask) ,   
      tags: checkArray(req.body.tags),
      photo: ''
    }
    req.user.reminders.push(reminder);
    res.redirect('/reminders');
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    res.render('reminder/edit', { reminderItem: searchResult})
  },

  update: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      if (reminder.id == reminderToFind) {
        reminder.title = req.body.title
        reminder.description = req.body.description
        reminder.completed = req.body.completed == "true"
        reminder.subtasks = checkArray(req.body.subtask)
        reminder.tags = checkArray(req.body.tags)

        // Update the subtask completed list (subCompleted) according the new subtasks list
        if (reminder.subCompleted != undefined) {
          // first make the subCompleted same length with subtask list that is before it's filter the empty string
          if (reminder.subCompleted.length <= req.body.subtask.length) {
            for (let i=0; i< (req.body.subtask.length-reminder.subCompleted.length); i++ ) {
              reminder.subCompleted.push('not done')
            }
          // next, delete conresspoding index with unupdated subtask list
          let updatedChecklist = []
          for (let i=0; i< req.body.subtask.length; i++) {
            if (req.body.subtask[i].trim() != '') {
              updatedChecklist.push(reminder.subCompleted[i])
          }  }
          reminder.subCompleted = updatedChecklist
      } } }
    });
    res.redirect('/reminder/' + `${req.user.username}&${reminderToFind}`)
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id;
    let reminderIndex = req.user.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    })
    req.user.reminders.splice(reminderIndex, 1);
    res.redirect('/reminders');
  },
  friends: (req, res) => {
    let host = req.user.username;
    let userList = Object.keys(database).filter(user => {return user != host})
    let userChanged = req.body.username;  // This is the username key of checkbox change from POST method by fetch
    if (userChanged != undefined) {
      if (database[host].friendList.includes(userChanged)) {
        database[host].friendList.splice(userChanged,1)
      } else {
        database[host].friendList.push(userChanged)
      }
    }
    res.render('reminder/friends', {host: host, userList: userList, data: database})
  }
}


// Create a function that doesn't take an empty subtask or tag that is left blank into our subtasks/tags list
const checkArray = (listToTest => {
  if (typeof(listToTest) == 'object') {
    return listToTest.filter(element => {return element.trim() != ""})
  } else if (listToTest != undefined){    //won't take a tag/subtask have no value
    if (listToTest.trim() != ""){     // won't take value is an empty str 
      return listToTest    // then it is not a list but just a string so no loop
  }}})

// Create a function that map subtask list to create subtask Completed list with default value false
const makeDefaultChecklist = (subtaskList => {
  if (typeof(subtaskList) == 'object') {
    let updatedSubtaskList = subtaskList.filter(element => {return element.trim() != ""})
    return updatedSubtaskList.map(item => "not done") 
  } else if (subtaskList != undefined){    //won't take a subtask have no value
    if (subtaskList.trim() != ""){     // won't take value is an empty str 
      return ['not done']    // then it is not a list but just a string make a list with only one element
  }}})

module.exports = remindersController;
