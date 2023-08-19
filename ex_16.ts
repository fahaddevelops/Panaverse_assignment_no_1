console.log("Great news! We just found a bigger dinner table, so now more space is available!");
let guests = ["Jhon","Eman","Micheal"]

let Guestses = ["Albert Einstein", "Maya Angelou", "Steve Jobs"];
let dinners = Guestses.concat(guests)
Guestses.pop();
// console.log(Guests[-1]);
Guestses.push("Alii");
console.log(`Dear ${dinners[0]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinners[1]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinners[2]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinners[3]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinners[4]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);
console.log(`Dear ${dinners[5]}, you are cordially invited to a dinner at my place. It would be an honor to have you join us for an evening of inspiring conversations and delightful cuisine.`);

console.log("Oops! We can invite only two people for dinner.");
/////Remove////////
while (dinners.length > 2){
    const bad = dinners.pop();
    console.log(`Dear ${bad}, I'm sorry to inform you that we can't invite you to dinner.`);
};

console.log(`Dear ${dinners[0]}, you are still invited to dinner. Looking forward to seeing you.`);
console.log(`Dear ${dinners[1]}, you are still invited to dinner. Looking forward to seeing you.`);
dinners = [];
console.log(dinners);