const num = 24;
const numStr = "24.40"; // parseInt will remove numbers/ variables after decimal point

console.log(parseInt(numStr));// parseInt will remove numbers/ variables after decimal point


//blank object;
const obj = {};

obj.name = "Kishore";// to add something to obj use dot. , it will add key & equals to = will assign the key value.

//console.log(obj);//{ name: 'Kishore' }

// other way to add something

obj["age"] = 22;

//console.log(obj);//{ name: 'Kishore', age: 22 }

obj["apple"] = "red";

//console.log(obj); //{ name: 'Kishore', age: 22, apple: 'red' }

// values added to this object may / may not come sequentially, its not an array and it depends upon browser to view.

obj["agent"] = "black";
obj["agent1"] = "green";
obj["agent2"] = "yellow";
obj["agent3"] = "white";

console.log(obj); //{ name: 'Kishore', age: 22, apple: 'red', agent: 'black' }


// below exanple to access this function 

const SampleObject = {
    nm: "rahul",
    ag: 22,
    getName:function(){
        //console.log(this);

        console.log("private this", this);
    }

}

SampleObject.getName(); // call and apply getName()


