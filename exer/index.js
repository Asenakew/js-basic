alert("Hej JavaScript från script.js");

// detta skriver ett meddelande i webbläsarens konsol
// console.log("Hello console!");

/*
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
*/

/*
let msg;
msg = "Woff";

console.log(msg);

msg = 42;

console.log(msg);
*/
let count =10;

const number = parseInt(prompt("Enter number:  "));
do {
    product = number * count;
    count = count - 1;
    console.log(`${count} * ${number} = ${product}`);
} while (count <= 1);