function organizedNumbers(arr){
    let even = arr.filter(num => num % 2 === 0);
    let odd = arr.filter(num => num % 2 !== 0);
    return({"even": even, "odd": odd});
}

org = organizedNumbers([1,2,3,4,5,6]);

console.log(org)