let Database = {
    cindy: {
        username: 'cindy',
        email: 'cindy@yahoo.com',
        password:'',
        friendList: ['john'],
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false, subCompleted: ['not done']}],
    },
    alex: {
        username: 'alex',
        password: "",
        friendList: [],
        reminders: [{id: 1, title: "bd partty", description: "trtabcabc", completed: false, subCompleted: ['not done']}],
        
    }, 
    seb: {
        username: 'seb',
        password: "abc",
        friendList: ['henrik'],
        reminders: 
            [   {id: 1, title: "Familiy dinner", description: "abcabc", completed: false},
                {
                id: 2,
                title: 'Review for finals',
                description: 'Study hard to get a flying color in the finals exams hehe',
                completed: false,
                subtasks: [ 'Study webdev', 'Review for Math', 'Finish all projects', 'Do mock test' ],
                subCompleted: ['not done','not done','done','not done'], 
                tags: [ 'school', 'finals' ],
                }
            ],
    }, 
    henrik: {
        username: 'henrik',
        email: 'henrikt.dang@gmail.com',
        password: 'a',
        avatar: '',
        friendList: ['cindy', 'alex', 'seb'],
        reminders: 
            [
                {
                id: 1,
                title: 'Snowboard',
                description: 'go to whistler and playing with snow',
                completed: false,
                subtasks: [ 'buy goggle', 'buy helmet', 'buy socks' ],
                subCompleted: ['not done', 'not done','not done'],
                tags: [ 'friends', 'winter', 'snowboarding' ],
                },
            ]
    }
}

module.exports = Database;

