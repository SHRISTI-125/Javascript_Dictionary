// Primitive data type : Memory stored in Stack
// Reference data type : Memory stored at heap

let name = "Mocha";
console.log("Data tyep is " + (typeof(name)));


let nullvar = null; // null -> returns "object" is a known quirk in JavaScript due to a bug in its initial implementation that was never corrected for backward compatibility
console.log("Data type is " + (typeof(nullvar))); // absence of object value
// null is primitive data type

