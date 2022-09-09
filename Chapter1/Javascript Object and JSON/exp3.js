const student = 
{
	name: "Rahul",
	age: 22,
  address: {
  	street: "one",
    apartment: "Apt Name",
    houseNum: "21",
    randomKitty: function() {
    							console.log("random")
    					}
  }
};

console.log(
student.address.randomKitty()
);