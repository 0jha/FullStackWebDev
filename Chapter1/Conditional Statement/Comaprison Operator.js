/*
== - normal equality- checks only value / data e.g: 5=="5" : o/p - True
!=
=== - strict equality- checks value & datatype e.g: 5==="5" : o/p- False
< - less than
<= - less than equals to
> - greater than
>= - greater than equals to

- takes two inputs with one operator
- always output will be boolean value (true & false)

*/

console.log(5 == "5"); // true- value same
console.log(5 === "5"); // data type different value same- false
console.log(Number("5")); // number 5
console.log(String(5)); // string value '5'
console.log("1"== "kk");// value different type same- false
console.log("1" === "2"); // type same but value different- false
console.log("a" == "A"); // value different- false

console.log("a" != "A"); // value different so not equals to- true
console.log("a" <= "A"); // value different- false
console.log(1 <= "1"); // value same - true

console.log("b" > 1);// value different- false
console.log(1 >= 0);// value different - true

console.log("1" < "a");//type same- true



