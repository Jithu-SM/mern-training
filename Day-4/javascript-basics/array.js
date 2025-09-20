//array of mixed data types
let mixedArray = [42, "Hello", true, null, undefined]
console.log(mixedArray)

console.log(mixedArray[2])

//nested array
let nestedArray = [[1, 2], [3, 4]]
console.log(nestedArray)

for(let i of nestedArray) {
    for(let j of i) {
        console.log(j)
    }
}
console.log(nestedArray[0])          //[1, 2]
console.log(nestedArray[1][0])      //3

//modify array element
let names = ["alice", "Bob", "Charlie"]
names[0] = "Alice"
console.log(names)

console.log(names.length) //length

//empty array
let emptyArray = []
console.log(emptyArray)

let emptyArray2 = new Array()
console.log(emptyArray2)

// array methods
//forEach
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit =>{
    console.log(fruit)
})

//use forEach to double each number in an array and print
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    console.log(2 * num);
})