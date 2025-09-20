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
    console.log("Favorite fruit number " + index + " is " + fruit);
});

