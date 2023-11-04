"use strict";
// destructuring
var user = {
    id: 345,
    name: {
        firstName: 'Mahmud',
        middleName: "hossain",
        lastName: 'Bappy'
    },
    contactNo: '019354342222',
    adress: ';uganda',
};
var contactNo = user.contactNo, midName = user.name.middleName;
// array destructuring
var myFriends = ['chandler', 'joy', 'khalid', 'omor', 'saad', 'talha'];
var bestFriend = myFriends[2], rest = myFriends.slice(3);
