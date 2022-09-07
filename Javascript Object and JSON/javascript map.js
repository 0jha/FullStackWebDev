//Map holds key value pairs
//remebers original insertion order of values
//it represents size of map
// can be create using new map() & new Set()

const fruits =  new Map();
// create a map

// set map values
fruits.set("apple", 400);
fruits.set("banana", 500);
fruits.set("orange", 600);

// fruis.apple

console.log(fruits.get("apple")); //o/p- 400

//-------------------------------------
const sampleMap =  new Map();
const testFn = function() {};// blank function
const testObj = {a:1};


// set map values
//          keys .  values
sampleMap.set("apple", 400);
sampleMap.set(testFn, 500);
//sampleMap.set(testObj, "some object");
sampleMap.set(testObj, {a:1});

sampleMap.delete("apple")

// fruis.apple

console.log(sampleMap.get(testObj));
console.log(sampleMap.get("apple")); // if no value found result will be uindefined in javascript

