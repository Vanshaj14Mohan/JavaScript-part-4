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