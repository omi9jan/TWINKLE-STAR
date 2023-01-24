console.log('Hello World')

//number
let num1 : number = 10;
num1 =7
// num1 = 'masai'   error:-string not assignable to number

//string
let first_name : string = "omkareshwari";
let last_name : string = "khupse";
let full_name : string = `${first_name} ${last_name}`

console.log(full_name)

//null
let temp = null;
// temp=2   error:-number not assignable to null
// temp='str'    error:-string not assignable to null

//undefined
let e = undefined;
// e=8     error:-number not assignable to undefined

//boolean
let isDone = false;
// isDone=8   error:-number not assignable to boolean


//array
let arr : number[] = [1,2,3,4,5]  //read as array of numbers
let str : string[] = ['a','b','c']  //read as array of string

//generic way of wrinting array
let ar1 : Array<number> = [1,3,4,7]
let str1 : Array<string> = ['x','y','z']

//Objects

// let obj = {
//     a : 'a',
//     b : 'b'
// }

// obj.c = 'c';    this is valid code in javascript but in typescript showing error
//   error:-Property 'c' does not exist on type '{ a: string; b: string; }'

let obj: {
    a: string;
    b: string;
    c?: string
} = {
    a : 'a',
    b : 'b',
}
obj.c = 'c';  
//now it doesn't give error

interface User {
    first_name: string;
    last_name: string;
    age: number;
    address?: string;
    contact?: number
}

// type User = {
//     first_name: string;
//     last_name: string;
//     age: number;
//     address?: string;
//     contact?: number
// }

//difference in using interface and type is, 
//we use = in type but not in interface
//remaining are same

let masai: User = {
    first_name : 'omi',
    last_name : 'khupse',
    age : 24,
}

masai.address = "Amravati";
masai.contact = 8208979210;
console.log('masai:', masai)

//aray of object

let arrOfUsers : User[] = [
    {
        first_name : 'Moni',
        last_name : 'khupse',
        age : 24,
    },
    {
        first_name : 'khushi',
        last_name : 'mhala',
        age : 26,
    }
]

//same example using generic way
let arrOfUsers1 : Array<User> = [
    {
        first_name : 'Moni',
        last_name : 'khupse',
        age : 24,
    },
    {
        first_name : 'khushi',
        last_name : 'mhala',
        age : 26,
    }
]





//function
function Sum (a : number, b : number) : number {
    return a+b;
}

//void :- if we not returning anything then use 'void'
const printData = ({first_name,last_name,age} : User) : void => {
    console.log(`${first_name} ${last_name}`)
}

//Union Types and Intersection Types

//Union :- we use | symbol -> OR
//Intersection :- we use & symbol ->AND

let arrOfNumStr : (number | string)[] = ['Masai', 5,6,'school'];

interface SoftwareEngineer {
    isWorking : boolean;
    shiftTiming : string;
    workingHrs : number;
    salaried : any;
}

let employee : Array<(User & SoftwareEngineer)> = [
    {
        first_name : 'Moni',
        last_name : 'khupse',
        age : 24,
        isWorking: true,
        shiftTiming: 'day',
        workingHrs: 9,
        salaried : 250000
    },
    {
        first_name : 'khushi',
        last_name : 'mhala',
        age : 26,
        isWorking: false,
        shiftTiming: 'None',
        workingHrs: 0,
        salaried : 'No'
    },
]

console.log('employee:',employee)