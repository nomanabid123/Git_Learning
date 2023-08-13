"use strict";
//operators
//arithmatic operators
// + - * / % ++ --
//x and y are operands and + is operator
let x = 10;
let y = 28;
console.log(y - x);
let result = x * y;
// console.log(result);
let divide = y / x;
let reminder = y % x;
console.log(divide);
console.log(reminder);
//increment and decrement operators
//pre and post increment and decrement
let z = ++y;
let a = --x;
console.log(a);
//post increment and decrement
let c = 12;
let b = c++;
let d = c--;
console.log(b);
console.log(c);
console.log(d);
//assignment operators
//= += -= *= /= %=
c = 10;
// c = c + 1;
//c = c-1
// c += 1
// c-=1
// console.log(c);
//*=
// c= c*2
// c *= 2
//c = c/2  ==>2
// c/=2
// c = c%2 
c %= 2;
console.log(c);
//comparison operators
// == === != !== > < >= <=
//== 
a = 5;
b = 9;
console.log(a == b);
// === 
//!=     !=
console.log(a != b);
// !== 
// > < >= <=
console.log(a > b);
console.log(a < b);
b = 9;
console.log(a >= b);
console.log(a <= b);
//logical operators
// && || !
// &&  ==> and
// || ==> or
// ! ==> not
// && ==> and
// &&
// 1 && 1 ==> 1 //true
// 1 && 0 ==> 0 //false
// 0 && 1 ==> 0 //false
// 0 && 0 ==> 0 //false
let ahmedAge = 20;
let mohamedAge = 30;
let aliAge = 40;
console.log((ahmedAge > mohamedAge) && (ahmedAge < aliAge));
// || ==> or
//  1 || 1 ==> 1 //true
//  1 || 0 ==> 1 //true
//  0 || 1 ==> 1 //true
//  0 || 0 ==> 0 //false
console.log((ahmedAge > mohamedAge) || (ahmedAge < aliAge));
