"use strict";
// Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
// so the whitespace around the name is displayed.Then print the name after striping the white spaces.
//   ---------------------STRIPPING NAME------------------------------
const personNameWithWhitespace = "\tJohn Doe\n   ";
// Print the name with whitespace
console.log("Name with Whitespace:", personNameWithWhitespace);
// Strip whitespaces from the name
const personNameStripped = personNameWithWhitespace.trim();
// Print the name after stripping whitespaces
console.log("Name Stripped:", personNameStripped);
