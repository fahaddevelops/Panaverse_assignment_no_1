let places = ["Paris", "Tokyo", "New York", "Venice", "Sydney"];

// Print the array in its original order
console.log("Original Order:", places);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", places.slice().sort());

// Print the array to show that it's still in its original order
console.log("Original Order:", places);

// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:", places.slice().sort().reverse());

// Print the array to show that it's still in its original order
console.log("Original Order:", places);

// Reverse the order of the list and print it to show the change
places.reverse();
console.log("Reversed Order:", places);

// Reverse the order of the list again to get back to its original order
places.reverse();
console.log("Original Order:", places);

// Sort the array in alphabetical order and print to show the change
places.sort();
console.log("Alphabetical Order:", places);

// Sort the array in reverse alphabetical order and print to show the change
places.sort().reverse()
console.log("Reverse Alphabetical Order:", places);
