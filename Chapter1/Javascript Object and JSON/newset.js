const arr = [1,2,3,3,3,3,]

const setObj = new Set(arr);

console.log(setObj.arr);

const setObj2 = new Set();// set will nevert show duplicate values , irrespective of number of times it is present so below it will show only 3 values

setObj2.add("a");
setObj2.add("a");
setObj2.add("b");
setObj2.add("b");
setObj2.add("c");
setObj2.add("c");
setObj2.add("a");
setObj2.add([1,2,3]);

console.log(setObj2.size);// size means substracting duplicate values- here it's 3

setObj2.forEach(function(val){
    console.log(val);
})