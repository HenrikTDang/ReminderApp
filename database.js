let Database = {
    cindy: {
        username: 'cindy',
        email: 'cindy@yahoo.com',
        password:'',
        avatar: 'public/images/p3_single.PNG',
        friendList: ['john'],
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}],
    },
    alex: {
        username: 'alex',
        password: "",
        avatar: 'public/images/p3_single.PNG',
        friendList: [],
        reminders: [{id: 1, title: "bd partty", description: "trtabcabc", completed: false}],
    }, 
    john: {
        username: 'john',
        password: "",
        friendList: [],
        reminders: [{id: 1, title: "Familiy dinner", description: "abcabc", completed: false}],
    }, 
}

module.exports = Database;

// {
//     henrik@gmail.com: {
//         username: 'henrik',
//         email: 'henrikt.dang@gmail.com',
//         password: 'a',
//         avatar: [url]
//         friendList: [cindy, alex,...]
//         reminders: 
//             [
//                 {
//                 id: 1,
//                 title: 'Snowboard',
//                 description: 'go to whistler and playing with snow',
//                 completed: false,
//                 subtasks: [ 'buy goggle', 'buy helmet', 'buy socks' ],
//                 tags: [ 'friends', 'winter', 'snowboarding' ],
//                 subCompleted: ['false', 'false','false']

//                 }
//             ]
//     }
// }