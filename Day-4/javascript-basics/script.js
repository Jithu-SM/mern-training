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
console.log(q < r)  //false
console.log(q >= r)  //true
console.log(q <= r)  //true
