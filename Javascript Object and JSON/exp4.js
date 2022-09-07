

const sampleObj = {
	name: "Rahul",
  age: 22,
  getName: function() {
  	console.log(this);
  }
}

const separateFn = sampleObj.getName;

sampleObj.getName(); // sampleObj

separateFn(); // window

// call and apply