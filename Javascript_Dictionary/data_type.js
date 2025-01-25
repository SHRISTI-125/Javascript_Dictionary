// Primitive data type : Memory stored in Stack
// Reference data type : Memory stored at heap

let name = "Mocha";
console.log("Data tyep is " + (typeof(name)));


let nullvar = null; // null -> returns "object" is a known quirk in JavaScript due to a bug in its initial implementation that was never corrected for backward compatibility
console.log("Data type is " + (typeof(nullvar))); // absence of object value
// null is primitive data type

let date = new Date();
console.log("Today's Date is "+date+" "+typeof(date)); // object

const bigInt = 919263177029979245831415977777777778888888888999999994444444445555555666666111111222222333333n;
console.log(bigInt);

var chess;
console.log(chess); // undefined becz -> uninitialised

var chess = null;
console.log(chess); // null -> absence of value

let n = "10";
let m = 10;
if (n == m) {
    console.log("Same");
}
if (n === m) {
    console.log("Not a number");
}