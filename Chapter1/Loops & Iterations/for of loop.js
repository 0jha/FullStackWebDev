//for (let key of object)- syntax
// no index value is required.
// only to show values we should use forof loop

const obj=[23,45,78,10];

for (let a of obj) 
{
   console.log(a);
}

console.log("-----------------");
// same example using for loop

for (let i = 0; i< obj.length; i++)
{
    console.log(obj[i]);  
}   

console.log("-----------------");

const obj1= "Microphone" // using for of loop it will break the string in each character and print one after one.

for (let b of obj1) 
{
   console.log(b);
}

console.log("loop inside loop")
// loop inside loop

for (let j = 1; j < 3; j++) 
{
   for (let k = 5; k < 10 ; k++)//when j is 1 , 2nd loop will run with k's value, then again it will go to 1st loop so k values printed twice as per j value 1 & 2
    {
        console.log(k);
    }
    console.log("end of 2nd loop going to 1st loop")
}
/*output
23
45
78
10
-----------------
23
45
78
10
-----------------
M
i
c
r
o
p
h
o
n
e
loop inside loop
5
6
7
8
9
end of 2nd loop going to 1st loop
5
6
7
8
9
end of 2nd loop going to 1st loop

*/