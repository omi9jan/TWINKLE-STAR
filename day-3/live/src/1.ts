
//enum
enum Days {
    mon = "Monday",
    tue = "Tuesday",
    wed = "Wednesday",
    thu = "Thursady",
    fri = "Friday",
    sat = "Saturday",
    sun = "Sunday"
}

let daysOfWeek = Days['fri'];
console.log(daysOfWeek)

let daysOfWeek1 = Days.tue;
console.log(daysOfWeek1)

//tuple
let day_month : [number,string][] = [[9,'January'],[25,"February"],[14,'March']]
// day_month[1][0] = 'abc' //throwing error
day_month[1][0] = 8

//generic

let getIdentify = <T> (arg : T) : T => {
    return arg
}

let a : string = 'hello moni';
let b : number = 09;
let c :boolean = true;

getIdentify<string>(a);
getIdentify<number>(b);
getIdentify<boolean>(c);




const get3rdEleOfArr = <T> (arr : T[]) : T => {
    return arr[3]
}

let months = ['jan','feb','mar','april'];
let nums = [9,11,12,18,19,20,21,22];

get3rdEleOfArr<string>(months)
get3rdEleOfArr<number>(nums)



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



const useState = <T> (arg : T) : [T, (a : T) => void] => {
    let v : typeof arg = arg;
    const setV = (newvalue : typeof arg) : void => {
        v = newvalue
    }
    return [v, setV]
}

const [count , setCount] = useState<number>(8);
const [company , setCompany] = useState<string>('Masai')
//now not throwing error



//keyOf
interface User {
    id: number,
    name : string
}

let users : User[] = [
    {id:1, name:"moni"}, 
    {id:2, name:"chhoti"},
    {id:3, name:"roshu"}
]

const getValue = (user : User, key : keyof User) => {
    return user[key];
}

let response = getValue(users[2], "name")
console.log(response)


//classes
enum carTypeEnum {
    petrol,
    diesel,
    EV
}

class car {
    door : number;
    fuleType : carTypeEnum;
    company : string;
    constructor (door,fuleType,company){
        this.door = door,
        this.fuleType = fuleType,
        this.company = company
    }
}

const customer = new car (4, carTypeEnum[1], "SUV");
console.log(customer)