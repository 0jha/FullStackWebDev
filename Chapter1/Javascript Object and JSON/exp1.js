const sampleObj = 
{
	key1: "value1",
  key2: 22,
  key3: function() { 
  				console.log("function")
        }
}

// objectVariableName DOT [.] Key
let oneWayValue = sampleObj.key1;
let secondWayValue = sampleObj["key1"];

console.log(oneWayValue);
console.log(secondWayValue);