// destructuring

const user = {
    id: 345,
    name: {
        firstName: 'Mahmud',
        middleName: "hossain",
        lastName: 'Bappy'
    },
    contactNo: '019354342222',
    adress: ';uganda',


}
const {
    contactNo,
    name: { middleName: midName },
} = user;

// array destructuring

const myFriends = ['chandler', 'joy', 'khalid', 'omor','saad','talha']

const [,, bestFriend, ...rest] = myFriends