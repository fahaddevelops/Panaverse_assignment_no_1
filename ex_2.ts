
// # Fahad Shafique

let personName: string = "Ashfaq urf chemma";

console.log("Uppercase: "+ personName.toUpperCase());
console.log("Uppercase: "+ personName.toLowerCase());
const titleCaseName = personName.replace(/\w\S*/g, (text) => {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
console.log("Uppercase: "+ titleCaseName);
