//javascript object notation- JSON
// it's an object

// keys in string format is nature of JSON- it's JSON syntax, it cannot contain function
//"name": "kishore" - here name is in double quote- means string type

/* 
JSON Syntax
{}
    "key": "value"
     "name": "John",
    "age": 22,
    "gender": "male",
}
*/

// JSON data
//"name": "John"

// JSON array
//[ "apple", "mango", "banana"]

// JSON array containing objects
const data = 
{
    "name": "John", "age": 22,
    "name": "Peter", "age": 20,
    "name": "Mark", "age": 23
};

// parse function can convert string JSON converts to normal JSON
//stringify

// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log(obj.name); // John

//Converting JavaScript Object to JSON

// JavaScript object
const jsonData1 = { "name": "John", "age": 22 };

// converting to JSON
const obj1 = JSON.stringify(jsonData1);

// accessing the data
console.log(obj1); // "{"name":"John","age":22}"


/*JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.
JSON is language independent. You can create and use JSON in other programming languages too. */