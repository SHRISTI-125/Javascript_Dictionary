console.log("This is '\a' string with \"double quotes\".");

// string methods and properties
// syntax

let name = "Queen Jaiko";
console.log(name.replace("Jaiko", "Shizuka")); 

let a = "Ladoo ";
let b = "Peda ";
let mithai = "Gulab-Jamun ";
console.log(mithai.concat(a, b)); // we can even use + operate to concatination

let vegetable = "     Tomato   ";
console.log(vegetable.trim()); // trim -> remove whitespace

let place = "Mississippi";
console.log(place.indexOf("i")); // first time appears
console.log(place.lastIndexOf("i"));// last time it appears

let statement = "Hello Javascript!";
let ans = statement.search(/javascript/i); // ignores case senstivity
console.log(ans); // start index of letter


let res = statement.matchAll("...Javascript"); 
console.log(res);

let inc = statement.includes("Hello Javascript"); // contains string or not
console.log(inc);

let st = statement.startsWith("H");
console.log(st);

let ed = statement.endsWith("t");
console.log(ed);

console.log(statement.slice(1,5));
console.log(statement.slice(4,6));

console.log(statement.substring(0,6));

console.log(statement.charAt(0));
console.log(statement.charCodeAt(0)); // ascii code

console.log(statement.toUpperCase());
console.log(statement.toLowerCase());

console.log(statement.split(",").reverse());