//String can be defined by 3 ways

// using single quote

let name1 = 'Kumar';

console.log(name1);

// using double qoute

let name2 = "Kishore"

console.log(name2);

// using bactick - it's with Tild key

let name3 = `Ojha`;

console.log(name3);


let name4 = '`Ojha kk`';

console.log(name4);

let name5 = "`Ojha kk`";

console.log(name5);

let name6 = '"Ojha" "kk" ';

console.log(name6);

let name7 = " 'Ojha' kk ";

console.log(name7);

const names = 'KK';

console.log(names);


// example

const namee = 'Peter';
const nameee = "Jack";
const result = `The names are ${namee} and ${nameee}`;
console.log(result);

const a = "kishore";

//indexing , array starts from zero

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

console.log(a.charAt(4));

a[0]= 'L';

console.log(a);

//length starts from 1 not from 0

console.log(a.length);

b= "kishore";
b[0]="L";
console.log(b);



const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2); // ' ' - inside concat for  space
console.log(result1); // "hello world"



// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);// from index 1 to index 3 will be printed.1-e,2-l,3-l -- so only last index will not be printed.
console.log(result5); // "el" - index 1 & index 2 is printed, not index 3
 
test= "kumar";

const result7= test.slice(-3, -1);// from index 1 to index 3 will be printed.1-e,2-l,3-l -- so only last index will not be printed.
console.log(result7)


g = "    Kishore   " 
console.log(g);
console.log(g.trim()); // removes blank space

f = "kishore kumar ojha hi how are you";
console.log(f.split());
console.log(f.split(``));
console.log(f.split(""));
console.log(f.split(''));

const x = 56;
const y = true;

const k = String(x);
const l = String(y);

console.log(k);
console.log(l);

const namer = 'My name is \'Peter\'.';
console.log(namer);

const namet = 'My name is \n Peter';
console.log(namet);

const namep = 'My name is  Peter \r kk';
console.log(namep);


// concatenation operator
console.log('hello' + 'world');
console.log('hello' - 'world');

let abc = 'JavaScript';

abc += ' tutorial';  // a = a + ' tutorial';
console.log(abc);

