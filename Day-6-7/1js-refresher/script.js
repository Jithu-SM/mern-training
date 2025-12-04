// document.writeln("JS Refresher session")


// problem 1

const marks = [45, 78, 90, 32, 56, 88, 60];

passed = marks.filter(mark=> mark >= 50)

result = passed.map(mark => mark + 5)

console.log(result)



// problem 2

const salaries = [20000, 35000, 50000, 120000, 450000];

let newsal = [];

salaries.forEach(salary => {
    if (salary < 25000)
        newsal.push(salary*1.2)
    else if (salary >=25000 && salary < 40000)
        newsal.push(salary*1.1)
    else
        newsal.push(salary*1.05)
})

console.log(newsal);