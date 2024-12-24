/* aithematic operators */
let a = 3, b = 2;
console.log(a + b); //5
console.log(a - b); //1
console.log(a * b); //6
console.log(a / b); //1.5
console.log(a % b); //1
console.log(a ** b); //9

/* relational operators */
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
a=5,b='5'
console.log(a == b)
console.log(a === b)
console.log(a != b)
console.log(a !== b)

/* logical operators */
console.log((5 > 2) && (5 > 4))
console.log((5 > 2) || (5 > 14))
console.log(!(5>6))

/* assignment operators */
a = 2;
a += 2 // a=a+2
console.log(a);//4
a -= 2; //a=a-2
console.log(a)//2
a *= 2;
console.log(a) //4
a /= 2;
console.log(a) //2
a %= 2;
console.log(a) //0
a ** 2;
console.log(a) //0

/* increment and decrement */
a = 5;
console.log(++a)
console.log(a++)
let x = 5;
// let z = x++;
// console.log(z) //5

let y = x++ + ++x;
console.log(y)

x = 10, y = 20;
let z = x++ + --y + y-- + ++x;
console.log(z)

/* ternary operator */
let age = 14;
let res = (age >= 18) ? "eligible" : "not eligible";
console.log(res)

console.log(5 + '5') // '55'
console.log(5 + +'5') //10

a = "Ice cream", b = "dairy milk";
let choice = a ?? b;
console.log(choice)
a = undefined;
choice = a ?? b;
console.log(choice)

a = 20;
console.log(typeof a)



