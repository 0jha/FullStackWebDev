/*
Switch- 
switch(variable/expression) {
    case value1:
        // body of case 1
        break;

    case value2:
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}
// if condition meets any one block it will show output, else go to default block
// make sure to mention same input in both swutch and case block to get proper output
// switch cvases are case sensitive.
// we may use Default anywhere inside switch block no orer needs to maintained , or it's not compulsory to mention at last

Example-1:
switch ('A')
{
    case 'A':
    {
        console.log(" A grade")
    }
    case 'B':
    {
        console.log(" B grade")
    }
    case 'C':
    {
        console.log(" C grade")
    }
    case 'D':
    {
        console.log(" D grade")
    }    
    default:
    {
        console.log(" F grade")
    }
        
}
o/p:  
A grade
 B grade
 C grade
 D grade
 F grade
*/
// so we need to use break statement to come out of that block if condition meets - means break out of the current scope
switch ('A')
{
    case 'A':
    {
        console.log(" A grade")
        break;
    }
    case 'B':
    {
        console.log(" B grade")
        break;
    }
    case 'C':
    {
        console.log(" C grade")
        break;
    }
    case 'D':
    {
        console.log(" D grade")
        break;
    }    
    default:
    {
        console.log(" F grade")
        break;
    }
        
}

//O/P:  A grade- after using break we got the only correct output as per condition

let num =65;
switch (num > 75) 
{
    case num > 75://more than one case condition menmtioned
    case num > 65://more than one case condition menmtioned
        {
           console.log("got A grade") 
           break;
        }
    default:
        {
        console.log("got B grade") 
        break;
        }
}

// in the above example we can see that we may use multiple case for one block.

// program for a simple calculator
function calculator(operator, number1,number2){
let result;

// take the operator input
const operator = operator;

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
}

calculator("+", 5 , 10);
calculator("*", 2, 9);
calculator("%" , 5 , 10);
