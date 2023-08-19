"use strict";
const ages = 25;
if (ages < 2) {
    console.log("The person is a baby.");
}
else if (ages >= 2 && ages < 4) {
    console.log("The person is a toddler.");
}
else if (ages >= 4 && ages < 13) {
    console.log("The person is a kid.");
}
else if (ages >= 13 && ages < 20) {
    console.log("The person is a teenager.");
}
else if (ages >= 20 && ages < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
