/*
AND -  &&  (Both LHS & RHS  Should be True)
    T && T - T
    T && F - F
    F && T - F
    F && F - F

OR - ||  (One should be True then True, Both False means False)
    T || T - T
    T || F - T
    F || T - T
    F || F - F

NOT - !
    Not True - False
    Not False - True

- Returns boolean value(true & false)
*/

//coerium- convert one data type to another
// implicitly - true == 1 o/p- true (=== doesnot follow this)
// explicitly - 
/*
console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false

console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false
*/

//earlier we used var to declar now let and const is being used.

//let a = 55;// defined-  value assigned already
//b; // null
//let c; //undefined- no value assigned
// NAN- not a number

const a = true, b = false;
const c = 4;

// logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c > 2) && (c < 2)); // false

// logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true

// logical NOT
console.log(!a); // false
console.log(!b); // true