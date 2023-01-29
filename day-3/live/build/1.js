//enum
var Days;
(function (Days) {
    Days["mon"] = "Monday";
    Days["tue"] = "Tuesday";
    Days["wed"] = "Wednesday";
    Days["thu"] = "Thursady";
    Days["fri"] = "Friday";
    Days["sat"] = "Saturday";
    Days["sun"] = "Sunday";
})(Days || (Days = {}));
let daysOfWeek = Days['fri'];
console.log(daysOfWeek);
let daysOfWeek1 = Days.tue;
console.log(daysOfWeek1);
//tuple
let day_month = [[9, 'January'], [25, "February"], [14, 'March']];
// day_month[1][0] = 'abc' //throwing error
day_month[1][0] = 8;
//generic
let getIdentify = (arg) => {
    return arg;
};
let a = 'hello moni';
let b = 09;
let c = true;
getIdentify(a);
getIdentify(b);
getIdentify(c);
const get3rdEleOfArr = (arr) => {
    return arr[3];
};
let months = ['jan', 'feb', 'mar', 'april'];
let nums = [9, 11, 12, 18, 19, 20, 21, 22];
get3rdEleOfArr(months);
get3rdEleOfArr(nums);
// const useState = (arg : number) : [number, (a : number) => void] => {
//     let v : number = arg;
//     const setV = (newvalue : number) : void => {
//         v = newvalue
//     }
//     return [v, setV]
// }
// const [count , setCount] = useState(8);
// const [company , setCompany] = useState('Masai')  //this willthrow error
//so to make it reusable update line 53 to 59 with below code
const useState = (arg) => {
    let v = arg;
    const setV = (newvalue) => {
        v = newvalue;
    };
    return [v, setV];
};
const [count, setCount] = useState(8);
const [company, setCompany] = useState('Masai');
let users = [
    { id: 1, name: "moni" },
    { id: 2, name: "chhoti" },
    { id: 3, name: "roshu" }
];
const getValue = (user, key) => {
    return user[key];
};
let response = getValue(users[2], "name");
console.log(response);
//classes
var carTypeEnum;
(function (carTypeEnum) {
    carTypeEnum[carTypeEnum["petrol"] = 0] = "petrol";
    carTypeEnum[carTypeEnum["diesel"] = 1] = "diesel";
    carTypeEnum[carTypeEnum["EV"] = 2] = "EV";
})(carTypeEnum || (carTypeEnum = {}));
class car {
    door;
    fuleType;
    company;
    constructor(door, fuleType, company) {
        this.door = door,
            this.fuleType = fuleType,
            this.company = company;
    }
}
const customer = new car(4, carTypeEnum[1], "SUV");
console.log(customer);
