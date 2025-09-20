//array methods
//push - add one or more elements to the end of an array

const fruits = []
fruits.push("Mango", "Grapes", "Apple")
console.log(fruits)

//pop - remove the last element from an array
let fruit = fruits.pop()
console.log(fruits)
// alert(fruit)

fruits.forEach((fruit, index) => {
    // console.log("Favorite fruit number " + (index + 1) + " is " + fruit);
    console.log(`Favorite fruit number ${index + 1} is ${fruit}`); 
});


//map - transform each items in an array and return a new array
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(num => num * 2)
console.log(doubled)

const originalNumbers = doubled.map(num => num / 2)
console.log(originalNumbers)

//filter - keeps only the items that pass a certain condition and returns a new array
const ages =[10, 20, 30, 9, 18]
const adultAges = ages.filter(age => age >= 18)
console.log(adultAges)

const names = ["Alice", "John", "James", "Jane", "Bob", "jithu"]
const jNames = names.filter(name => name.toUpperCase().startsWith("J"))
const jNames1 = names.filter(name => name[0].toUpperCase() === "J")
const jNames2 = names.filter(name => name.startsWith("J") || name.startsWith("j"))
console.log(jNames)
console.log(jNames1)
console.log(jNames2)

//task 1
const users =[
    {id: 1, name: "John"},
    {id: 2, name: "Mary"},
]

for (let i in users) {
    console.log(users[i].name)
}

console.log(users.map(user => user.name))

//find - first matching item
const user = users.find(user => user.id === 2)
console.log(user)

//includes - check if value exists in an array
const items = ["pen", "pencil", "marker"]
console.log(items.includes("pencil"))

//every - checks if all items in an array pass a certain condition
const scores = [23, 50, 56, 80, 90]
if (scores.every(score => score >= 40)) {
    console.log("All students passed")
} else {
    console.log("Some students failed")
}

//some - checks if at least one item in an array passes a certain condition
if (scores.some(score => score < 40)) {
    console.log("Some students failed")
} else {
    console.log("All students passed")
}

//sum

const prices = [100, 200, 300, 589, 7654, 3765]
let total = 0
prices.forEach(price => total += price)
console.log(total)

const total1 = prices.reduce((sum, price) => sum + price, 0)
console.log(total1)