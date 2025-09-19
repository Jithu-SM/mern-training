console.log("Hello World")
// document.write("Hello World")

//var
var x = "jithu"  //function scoped
console.log(x)
var x = 100
console.log(x)

//let
let y = 20  //block scoped
console.log(y)
// let y = 200  //re-declaration not allowed
y = 30 
console.log(y)
console.log(typeof(y))  //data type

//const
const PI = 3.14  //block scoped
console.log(PI)
// PI = 3.1416  //re-assignment not allowed
console.log(typeof(PI))  //data type

//object
const person = {
    name: "Jithu",
    age: 21,
    city: "Kottayam"
}
console.log(person)
console.log(typeof(person))  //data type
console.log(person.name)  //dot notation

person.name = "Anshul"
console.log(person.name)

//hoisting
//var - allows hoisting and initializes with undefined
console.log(a)  //undefined
var a = 10
console.log(a)

//let and const - does not allow hoisting
// console.log(b)  //ReferenceError: Cannot access 'b' before initialization
let b = 20
console.log(b)

//boolean
let isRaining = true
console.log(isRaining)
console.log(typeof(isRaining))  //data type

//opertors
let m = 10
let n = 3
console.log(m+n)  //addition
console.log(m-n)  //subtraction
console.log(m*n)  //multiplication
console.log(m/n)  //division
console.log(m%n)  //modulus
console.log(m**n)  //exponentiation
m++  //increment
console.log(m)
n--  //decrement
console.log(n)

//assignment operators
let p = 10
p += 5  //p = p + 5
console.log(p)
p -= 3  //p = p - 3 
console.log(p)
p *= 2  //p = p * 2
console.log(p)
p /= 4  //p = p / 4
console.log(p)

//comparison operators
let q = 10
let r = '10'
console.log(q == r)  //true
console.log(q === r)  //false
console.log(q != r)  //false
console.log(q !== r)  //true
console.log(q > r)  //false
console.log(q <= r)  //true

//logical operators
let isAdult = true
let hasTicket = false

// AND - && 
// OR - ||
// NOT - !

console.log(isAdult && hasTicket)  //false  
console.log(isAdult || hasTicket)  //true
console.log(!hasTicket)  //true


//string operator
let greeting = "Hello, " + "World!"
console.log(greeting)
greeting += " Welcome to JavaScript."
console.log(greeting)


//ternary or conditional operator
let age = 18
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote"
console.log(canVote)


//array
let arr1 = [10, 20, 30, 40, 50]  //array of numbers
console.log(arr1)


//conditional statements
// if student age is greater than or equal to 18, print "You are an adult"

if(age >= 18) {
    console.log("You are an adult")
} else {
    console.log("You are a minor")
}


// Grade calculator (>=90 A, 75-89 B, 50-74 C, <50 Failed)
let score = 85

if(score >= 90) {
    console.log("Grade A")
} else if(score >= 75) {
    console.log("Grade B")
} else if(score >= 50) {
    console.log("Grade C")
} else {
    console.log("Failed")
}

//switch case
//print day of the week based on number (1-7)

let day = 3
switch(day) {
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log("Invalid day")
}


//for loop
for(let i=0; i<5; i++) {
    console.log(i)
}

//while loop
let j = 0;
while(j < 5) {
    console.log(j);
    j++;
}

//do while loop
let k = 0;
do {
    console.log(k);
    k++;
} while(k < 5);

// for..in loop
const person1 = {
    name: "Alice",
    age: 30,
    city: "New York"
}

for (let key in person1) {
    console.log(key + ": " + person1[key]);
}

// for..of loop
const colors = ["Red", "Green", "Blue"];

for(let i=0; i<colors.length; i++) {
    console.log(colors[i]);
}

for (let color of colors) {
    console.log(color);
}