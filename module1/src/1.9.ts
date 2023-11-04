{

// Type alias

type Student = {
    name : string ;
    age: number ;
    gender : string;
    contactNo ?:  string ;
    adress: string;
}

const student1 : Student = {
    name: 'bappy',
    age:25,
    gender: 'male',
    contactNo: '139823232323',
    adress: 'ctg' ,
} ;

const student2 : Student = {
    name: 'bappy',
    age:45,
    gender: 'male',
    adress: 'dhaka',
}
const student3 : Student = {
    name: 'bappy',
    age:45,
    gender: 'male',
    adress: 'dhaka',
}


type Username = string
type IsAdmin = boolean
const userName : Username = 'bappy'
const isAdmin : IsAdmin = true

type Add = (num1: number, num2: number) => number


const add : Add = (num1 : number, num2: number) : number => num1 + num2
















}