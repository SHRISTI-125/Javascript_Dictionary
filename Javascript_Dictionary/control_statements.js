/*
infinite loop
for(;;){}
*/

// switch
let num = 1;
switch(num){
    case 0 : console.log("Sunday"); break;
    case 1 : console.log("Monday"); break;
    default : console.log("0 - 1");
}

// vote validation or not
let age = 18;
let firstname = "Winnie";
let lastname = "Sai"
let res = (age >= 18) ? `${firstname} ${lastname} you can vote` : "no"; // template literals
console.log(res);

let marks = {
    qun : 75,
    jun : 89,
    kia : 73,
    nia : 84,
    ell : 67
}
for(let i in marks) {
    console.log(marks[i] + " "+ i);
}

