console.log("Hello World")
document.write("Hello World")

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