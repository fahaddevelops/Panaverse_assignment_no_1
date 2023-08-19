"use strict";
// numss = [1,2,3,4];
// console.log(numss[5]);
// // Correct
// if len(nums) > 5:
//     console.log("Out of index");
// else:
//     console.log(num[3]);
const numss = [1, 2, 3, 4];
console.log(numss[5]); // This will result in "undefined" value since index 5 is out of range
// Corrected
if (numss.length > 5) {
    console.log("Out of index");
}
else {
    console.log(numss[3]); // Accessing index 3 (4th element) of the array
}
