// if else used for branchine where as loops are user for iteration. and we can use both simutaneously
// we use for loop to run the segment of code for more than one time
// to deal with normal value, no key is present we use for loop
// single execution of loop is called iteration

//if else inside for loop
for (let i = 1; i <= 5; i++) // three expressions written here , first exp- value assign, 2nd- condition, 3rd- operation(here increment), also first exp will run for the first time, then 2nd and 3rd will run for each iteration.
{
    console.log(i);

    if (i==4) 
    {
        console.log("true"); 
    }
    else
    {
        console.log("false");
    }
    
    
}

//if we use i-- as 3rd expression it will run in endless loops.
console.log("----------------------------------------------------");

const arr = [200,5,67,49];

for (let i = 0; i < arr.length; i++) 
{
    console.log(arr[i]);
}

console.log("loop inside loop")
// loop inside loop

const arr1 = [26,59,62,79];

for (let j = 0; j < arr.length; j++) 
{
    console.log("value of 1st loop")
    console.log(arr1[j]);
    console.log("running 2nd loop")
    for (let k = 0; k < 3 ; k++)
    {
        console.log(k);
    }
    console.log("end of 2nd loop going to 1st loop")
}

/*
output
1
false
2
false
3
false
4
true
5
false
----------------------------------------------------
200
5
67
49
loop inside loop
value of 1st loop
26
running 2nd loop
0
1
2
end of 2nd loop going to 1st loop
value of 1st loop
59
running 2nd loop
0
1
2
end of 2nd loop going to 1st loop
value of 1st loop
62
running 2nd loop
0
1
2
end of 2nd loop going to 1st loop
value of 1st loop
79
running 2nd loop
0
1
2
end of 2nd loop going to 1st loop

*/