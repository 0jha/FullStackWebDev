// functions and objects are two pillar of JS
// 7 non premitive data types & 3 premitive data type
/*
Agenda :

Functions
Function Declaration
Calling a Function
Parameters and Arguments
Default Parameters
Function Return
Helper Functions
Function Expressions
Types of Functions
Function execution
Call Stack
JavaScript Hoisting
JavaScript Recursion
*/
// set of statements(codes/ instruction) put together in a block(it is also called as function block), for a single or multiple job repeatedly also returns us output.
//called as first class citizen in JS


//add 2 number
function addNumbers(a,b)
{
    let sum = 0;
    sum = a + b;

    return sum;
}
//calling a function
console.log(addNumbers(2,3));
console.log(addNumbers(6,4));
console.log(addNumbers(8,23));
console.log(addNumbers(9,45));

// Parameters & Arguments
//-----------parameters--------------------
/*
function functionname(parameter1 , parameter2)
{
 //function block
}

functionname(argument1 , argument2)// when arguments goes into function block becomes parameters
*/

function getArea(r)
{
    let area= 0;
    area = 2*Math.PI*r;
    return area;
}
console.log(getArea());// if we did not give any argumentss then it will take default parameter // o/p= NAN as no numbers are in parameter.

console.log(getArea(3));

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
 console.log(makeShoppingList());// here no arguments given so default parameter will be output
 console.log(makeShoppingList("chicken")); // it will replace first parameter and give output, as here we need to give 3 arguments but we are giving only one 

//functions are treated as values in JS so we may wrile like  let x= fun(){}.
//we can pass function as an argument inside a function - Higher order function
// we can return function inside a function-we can call a function inside a function- call back function
// function can take n number of arguments
// way of writing function is called function declaration
// whats written inside a function block is known as function defination
// if we write function without a name it will give function statement error. but we can write in another way like let x= function(){}

//another way of writing function.
// anonymous function- doesnot have a name
 let x = function(a){ return a; }
console.log(x(3));

//named function
function named(b){ return b; }
console.log(named(3));

//example
let z=function addNumbe(a,b)
{
    
    let sum1 = a + b;

    return sum1;
}
//calling a function
console.log(z(2,3));

// helper function- secondary function helping primaru function
function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
  console.log(getFahrenheit(15)); // Returns 59

  //Arrow function- most important interview question- for freshers it's very much IMP
  //arrow functions are by default anonymous function as they dont have any name
  //arrow function having parentak scope
  //ES6- ECMAScript2015 set of rules/ instructions
  let k = function (l){return l;}
  console.log(k(2));
  
  let s = (p)=> {return p;} // this is arrow function, without function keyword we may write a function like this user => symbol(flat arrow)
  console.log(s(5));
  
  let T = d => {d};
  console.log(T(6));
  
  const o = () => y;// zero parameter
  
  const f = (g,h)=> {add =g + h; return add; } // two or more parameter
  console.log(f(8,6));
  
  const J =(c)=>{ // oine parameter
    c=c+1;
    return c;
    }
console.log(J(3));

//diffrenec between normal and arrow function
// syntax, this argument(they dont have their own this parameter), parent scope/ lexical scope, cant be used as constructor(check in oops class), 
// arrow function doesnot have own  "this"
// arrow function have parental / lexical scope - arrow function is defind in a obj, so that obj is parent
const obj1 = {
        name : "Kishore",
        getName : function(){
        console.log(`my name is -${this.name}`);

    }
}
//o/p- my name is -Kishore
console.log(obj1.getName())

const obj2 = {
        name : "Kumar",
        getName :()=>{
        console.log(`my class name is -${this.name}`);

    }
}
//o/p- my class name is -undefined 

//example

const person1 = {
    name : "Kishore",
    hobbies:["games","music","cooking"],
    getName : function(){
    console.log(`my name is -${this.name}`);

},
    getHobbies:function(){
        this.hobbies.forEach(function(x){
            console.log(`${this.name} like - ${this.x}`);
        })
    }
}

console.log(person1.getHobbies());

const person2 = {
    name : "Kumar",
    hobbies:["games","music","cooking"],
    getHobbies:function(){
        this.hobbies.forEach((x)=>{
            console.log(`${this.name} like - ${x}`);
        })
    }
}

console.log(person2.getHobbies());
/*
o/p- 
undefined like - undefined
undefined like - undefined
undefined like - undefined
undefined
Kumar like - games
Kumar like - music
Kumar like - cooking
undefined
*/

//Hoisting - going top

// so in hoisting declaration only goes top rest of code remains same. var x;= it is declaration, x=5; initialization

console.log(g);
var g;
g =5;
// o/p undefined

/*
when running above code becomes below
var g;// only declaration goes to top ,and g is not initialized here so output is undefined
console.log(g);
g =5;
*/

g1=6;
console.log(g1);
var g1;
//output -6

/*
when running above code converts like below
var g1;// only declaration goes to top and tehn initialization done so output is 6
g1 =6;
console.log(g1);
*/







