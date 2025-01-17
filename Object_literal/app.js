const student = {
    name: "Vanshaj",
    age: 22,
    marks: 95.5
};

//using array
let student2 = ["Vanshaj", 22, 95.5];

const item = {
    price: 100,
    discount: 20,
    colors: ["Red", "Blue", "Green", "Yellow"] //can give multiple values in single key in an object 
};

//How to access values from our object 
// for example-> 2 ways are there to access values from an object
//using square bracket
// 1: student["name"]
// student["age"]
// student["marks"]

// 2: Using DocumentTimeline(.) operator
// item.price
// item.discount
// item.colors[0]
// item.color[1]

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};   
//JS automatically converts object keys to strings
//Even if the number is a key, it will be converted into a string, Not possible with a dot (.) operator
//does'nt convert numbers directly into string, can use it for strings but not for numbers.

//--------------------------------------------------------------------------------------------
//Next how to add/update values in Object literals in JS.
const detail = {
    name: "Vanshaj",
    age: 22,
    marks: 95.5,
    city: "Lucknow"
}; 
//now to change city name to mumbai 
//detail.city = "Mumbai"
//change marks to A
// detail.marks = "A"
// or we can make an array of marks
// detail.marks = [90, 95, 92, 96]
//to add any key, suppose, state
// detail.state = "Uttar Pradesh"
//now deleting it -> delete detail.state
//--------------------------------------------------------------------------------------------

//Creating object of objects
//to access values, studInfo.Aman, studInfo.Aman.city... 
const studInfo = {
    Aman:{
        garde: "A",
        city: "Delhi"
    },
    Naina:{
        grade: "A+",
        city: "Lucknow"
    },
    Rohit:{
        grade: "B+",
        city: "Bangalore"
    },
    Vijay:{
        grade: "B",
        city: "Pune"
    }
};

//using aray of objects
//to access it -> classDetail[0],  classDetail[1], classDetail[2], classDetail[3]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
//classDetail[0].name or classDetail[1].city....
const classDetail = [
    {
        name: "Aman",
        grade: "A",
        city: "Delhi"
    },
    {
        name: "Naina",
        grade: "A+",
        city: "Lucknow"
    },
    {
        name: "Rohit",
        grade: "B+",
        city: "Bangalore"
    },
    {
        name: "Vijay",
        grade: "B",
        city: "Pune"
    }
];

//__________________________________________________________________________
//Math Object -> collection of all mathematical properties and methods.
// Math.abs(n) gives absolute value for a Number
// Math.pow(a, b) power method
// Math.floor(n) gives round off of the number(nearest smallest integer value)
// Math.ceil(n) gives round off of the largest integer number(opposite of floor)
// Math.random() gives any random number between 0 -1 in the given range by the user, most used in JS.
//__________________________________________________________________________________________

//creating random integers, create random integer from 1 to 10
//code 
//Math.floor(Math.random() * 10) + 1; -> + 1 so that it can print till 10 as last digit is excluded, ie 0 -10

//Questions
//Generate random number between 1-100
let random = Math.floor(Math.random()* 100) + 1;
console.log(random);

//Generate random number between 1-5
let ranNum = Math.floor(Math.random()* 5) + 1;
console.log(ranNum);

//And to print any number from agiven range
let randNum = Math.floor(Math.random() * 5) + 21;
console.log(randNum)