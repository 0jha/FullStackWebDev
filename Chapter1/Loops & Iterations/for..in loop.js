// in loop when we have both key value pair we have to use forin loop.
// for (key in object)- syntax
// pass key value as an index to object and get the value
// to print value on HTML page we use document.write()
// to print on console we use console.log()

const obj = {a:'1',b:'2',c:'3'};

for(let x in obj) 
{
    //document.write(obj[x]);// to display output on html page
    console.log(obj[x]);// to display output on console
}

/*
output
1
2
3
*/