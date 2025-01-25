// string to number

let str = "5";
console.log(typeof +str);
console.log(Number(str));

// Number to String

let num = 5;
console.log(typeof(num+ " "));
console.log(String(num));
console.log(num.toString());

// parseInt -> truncate leading zeroes

let a = parseInt("0000000457");
let b = parseInt("42.545454");
console.log(a+" "+b);


// parseFloat -> parse a string & convert it into a floating number

let c = parseFloat("0000000457");
let d = parseFloat("42.54545");
console.log(c+" "+d);


// concat + add
let n = "98";
let nz = Number(n);
let m = 89;
console.log(n + m); // string + num = concat
console.log(nz + m);// addition