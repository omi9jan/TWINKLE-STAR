console.log('Hello World');
//number
var num1 = 10;
num1 = 7;
// num1 = 'masai'   error:-string not assignable to number
//string
var first_name = "omkareshwari";
var last_name = "khupse";
var full_name = "".concat(first_name, " ").concat(last_name);
console.log(full_name);
//null
var temp = null;
// temp=2   error:-number not assignable to null
// temp='str'    error:-string not assignable to null
//undefined
var e = undefined;
// e=8     error:-number not assignable to undefined
//boolean
var isDone = false;
// isDone=8   error:-number not assignable to boolean
//array
var arr = [1, 2, 3, 4, 5]; //read as array of numbers
var str = ['a', 'b', 'c']; //read as array of string
//generic way of wrinting array
var ar1 = [1, 3, 4, 7];
var str1 = ['x', 'y', 'z'];
//Objects
// let obj = {
//     a : 'a',
//     b : 'b'
// }
// obj.c = 'c';    this is valid code in javascript but in typescript showing error
//   error:-Property 'c' does not exist on type '{ a: string; b: string; }'
var obj = {
    a: 'a',
    b: 'b'
};
obj.c = 'c';
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
var masai = {
    first_name: 'omi',
    last_name: 'khupse',
    age: 24
};
masai.address = "Amravati";
masai.contact = 8208979210;
console.log('masai:', masai);
//aray of object
var arrOfUsers = [
    {
        first_name: 'Moni',
        last_name: 'khupse',
        age: 24
    },
    {
        first_name: 'khushi',
        last_name: 'mhala',
        age: 26
    }
];
//same example using generic way
var arrOfUsers1 = [
    {
        first_name: 'Moni',
        last_name: 'khupse',
        age: 24
    },
    {
        first_name: 'khushi',
        last_name: 'mhala',
        age: 26
    }
];
//function
function sum(a, b) {
    return a + b;
}
//void :- if we not returning anything then use 'void'
var printData = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age;
    console.log("".concat(first_name, " ").concat(last_name));
};
//Union Types and Intersection Types
//Union :- we use | symbol -> OR
//Intersection :- we use & symbol ->AND
var arrOfNumStr = ['Masai', 5, 6, 'school'];
var employee = [
    {
        first_name: 'Moni',
        last_name: 'khupse',
        age: 24,
        isWorking: true,
        shiftTiming: 'day',
        workingHrs: 9,
        salaried: 250000
    },
    {
        first_name: 'khushi',
        last_name: 'mhala',
        age: 26,
        isWorking: false,
        shiftTiming: 'None',
        workingHrs: 0,
        salaried: 'No'
    },
];
console.log('employee:', employee);
