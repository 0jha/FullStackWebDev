const a = 3, b = 2;
console.log(a > b); // true

// equal operator  
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator -  here we consider as per data type
console.log(2 === 2); // true
console.log(2 === '2'); // false - coz different data type 

// strict not equal operator - -  here we consider as per data type
console.log(2 !== '2'); // true
console.log(2 !== 2); // false