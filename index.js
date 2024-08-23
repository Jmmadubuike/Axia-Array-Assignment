// Question Number 1

//What is an Array!

//In programming, an array is like a special container or list that holds multiple items in a specific order.
//Think of it as a row of labelled boxes, where each box can hold something, like a number or word.
//For example, if you want to store a list of names like "Joseph", "David", "Augustine" and "Micheal",
// you can put them all in one array. Each name will have its own spot, and you can easily access any name by knowing its position in the array.
//Arrays  helps us organise and manage data efficiently, especially when dealing with multiple pieces of related information.


// Question Number 2

//Methods Of Array

// push method
// pop method
// map method
// filter method
// slice method

// Question 3
// Create dummy data and apply the methods
let numbers = [5, 10, 15, 20, 25];

numbers.push(30);
console.log(numbers);
// push()


let lastElement = numbers.pop()
console.log(numbers);
console.log(lastElement);
// pop()

let doubledNumbers = numbers.map(x => x*2);
console.log(doubledNumbers);
// map()

let filteredNumbers = numbers.filter(x => x > 15);
console.log(filteredNumbers);
// filter()

let slicedNumbers = numbers.slice(1,3);
console.log(slicedNumbers);
// slice()