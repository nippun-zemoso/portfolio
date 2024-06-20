// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

// function that will be passed as a parameter
function greet(name) {
    return `Hello, ${name}!`;
}

// another function that accepts a function as a parameter
function processGreeting(func, name) {
    return func(name);
}

const result = processGreeting(greet, 'Nippun');
console.log(result);


// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments  Roger and Waters, the function returns ‘RW’. Write this function.

const getInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`;
}

const initials = getInitials('Nippun', 'Tyagi')
console.log(initials);