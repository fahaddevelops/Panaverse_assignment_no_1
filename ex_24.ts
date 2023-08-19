const str1: string = "Car";
const str2: string = "Cap";
// Test 1
console.log(str1 == str2);
console.log(str1 != str2);
console.log(str1.toLowerCase() == 'car');
console.log(str1.toLowerCase() != 'car');
console.log(str2.toLowerCase() == 'cap');
console.log(str1.toLowerCase() != 'cap');
let age = 25;
let temperature = 30;
let numbers = [1, 2, 3, 4, 5];

// Numerical tests
console.log("Is age == 25? I predict True.");
console.log(age == 25);  // True

console.log("Is age != 30? I predict True.");
console.log(age != 30);  // True

console.log("Is temperature > 25? I predict True.");
console.log(temperature > 25);  // True

console.log("Is temperature < 20? I predict False.");
console.log(temperature < 20);  // False

console.log("Is age >= 18? I predict True.");
console.log(age >= 18);  // True

console.log("Is age <= 21? I predict False.");
console.log(age <= 21);  // False

// Tests using "and" and "or" operators
console.log("Is age >= 18 and temperature < 35? I predict True.");
console.log(age >= 18 && temperature < 35);  // True

console.log("Is age >= 18 or temperature < 20? I predict True.");
console.log(age >= 18 || temperature < 20);  // True

// Test whether an item is in an array
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3));  // True

// Test whether an item is not in an array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(!numbers.includes(6));  // True
