// ARRAYS ARE MUTABLE

let num = [7, 9, 11, 13];
let z = num.join("~");
console.log(z);
console.log(num.at(-1));

console.log(num.pop());
num.push(15)
console.log(num);

num.shift(15);
console.log(num);

num.unshift(15);
console.log(num);

num.sort();
console.log(num);

let fruits = new Array("strawberry", "custard apple", "mango");
fruits[0] = "oranges";
console.log(fruits);
for(let i of fruits) {
    console.log(i+" ");
}

let vegetables = ["potato", "bringal", "beans"];
fruits.concat(vegetables);
console.log(fruits);


let number = [1, 2, 3, 4, 5];
number.splice(2, 1, 4, 4);
console.log(number);
console.log(number.slice(2));
console.log(number.reverse());

let n = number.map((no) => {
    return no*no;
});
console.log(n);

let arr = [50, 60, 70, 77, 64, 67, 80, 90];
let res = arr.filter((x) => {
    return x % 10;
});
console.log(res);

