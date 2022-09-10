//while loop
//

console.log("while loop")
let i = 1;
while (i<10)
{
   console.log(i);
   i++;
}
/*output
1
2
3
4
5
6
7
8
9
*/
// do while loop
// in do while execution happens atleast one time
// first do segment will come then while with condition
// if condition is true do while loop with work as per condition
// if false do while loop will execute only once as per condition
// below example condition is false so output is 100 only and coming once only

console.log("do while loop")
let j = 100;

do 
{
  console.log(j);  
} 
while (j<11);

// output - 100 

//use of break in loops
console.log("use break in loops")
for(k=1;k<10;k++)
{
    if(k==5)
    break; //whenever the value reaches condition means 5 the loop will stop so output 1 2 3 4
    console.log(k);
}
//output - 1 2 3 4 
//use continue in loops
console.log("use continue in loops")
for(l=1;l<10;l++)
{
    if(l==5)
    continue; //whenever the value reaches condition means 5 the loop will continue by bypassing that condition. so output 1 2 3 4
    console.log(l);
}

//foreach loop
// its more convinient
// takes function as input

console.log("Foreach loop")
const arr =[12,34,56,78,90]
arr.forEach(function(value, index)
{
    console.log(index);

    if(m=56)
    {
        console.log(m)
    }
})

/*output- 
Foreach loop
0
56
1
56
2
56
3
56
4
56
*/

// filter in java script
// wherever we want to use new values of array with some conditions we need to use filter

console.log("filter in arrays")
const arr1 = [122,98,34,67];

const result = arr1.filter(function(value)
{
    return value >67;
})

console.log(result);
//output - filter in arrays [ 122, 98 ]

//Map
// 
console.log("Map")
const arry = [1,4,7,9];
const result1=arry.map((value)=>{
    return value * 2;
})
console.log(result);





