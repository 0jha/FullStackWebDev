const SampleObject = {
    nm: "rahul",
    ag: 22,
    getName:function(){
        console.log(this);
    }

}


//SampleObject.getName(); // call and apply getName()

const separateFN = SampleObj.getName;

SampleObj.getName();// SampleObj

separateFN();

// anything in Java script out of local scope comes under windows, it's not visible , it's calld as implied object.
// this is referring to context
// if there is no context its the window.