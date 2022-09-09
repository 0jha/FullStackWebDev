// scope in JS are 3 types.let & const are block scope and var is global scope, and there are another scope- function scope.


/* 
1. IF
2. IF...Else
3. Else If

syntax
    if (condition) 
    {
        // the body of if
    }
*/
// If statement
if (true) 
    {
    console.log(" Inside IF block");  
    }

//if--- else statement

let num= 65; // let num= " "; - its an empty string then answer will be false so got to else statement

if (num > 75) 
    {
        console.log("A grade");    
    }
else
    {
        console.log("B grade");
    }

//if-- else if statement

let num1= 105;

if (num1 > 75) 
    {
        console.log("A grade") ;   
    } 
else if (num1 >50) 
    {
        console.log("B grade");    
    }
else if (num1 >35) 
    {
        console.log("B grade");    
    }
else
    {
        console.log("D grade");   
    }


