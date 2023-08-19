"use strict";
console.log("Great news! We just found a bigger dinner table, so now more space is available!");
let guestes = ["Jhon", "Eman", "Micheal"];
let Guestsess = ["Albert Einstein", "Maya Angelou", "Steve Jobs"];
let dinnerss = Guestsess.concat(guestes);
Guestsess.pop();
// console.log(Guests[-1]);
Guestsess.push("Alii");
console.log(`Dear ${dinnerss[0]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinnerss[1]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinnerss[2]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinnerss[3]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinnerss[4]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinnerss[5]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log("Oops! We can invite only two people for dinner.");
/////Remove////////
while (dinnerss.length > 2) {
    const bad = dinnerss.pop();
    console.log(`Dear ${bad}, I'm sorry to inform you that we can't invite you to dinner.`);
}
;
console.log(`Dear ${dinnerss[0]}, you are still invited to dinner. Looking forward to seeing you.`);
console.log(`Dear ${dinnerss[1]}, you are still invited to dinner. Looking forward to seeing you.`);
console.log(`total number of guest invite: ${dinnerss.length}`);
