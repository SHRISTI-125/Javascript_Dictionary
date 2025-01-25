/* Let & Var & Const*/

let a = "Green";
let b = "null";
{
    let a = "not null"; // let only works within block scope
    console.log(a);
}
console.log(a); // var can be updated and not reassigned

var a1 = "Green";
var b1 = "null";
{
    var a1 = "not null";
    console.log(a1);
}
console.log(a1); // var can be updated and reassigned

const a2 = "Green";
{
    const a1 = "not null";
    console.log(a2);
}
console.log(a2); // const can't be updated and not reassigned