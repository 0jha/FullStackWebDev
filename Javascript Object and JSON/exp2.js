const sampleObj = 
{
	key1: "value1",
  key2: 22,
  key3: function() { 
  				console.log("function")
        }
}

const rahul = sampleObj.key3;

console.log(sampleObj.key1);
console.log(sampleObj.key2);
rahul();