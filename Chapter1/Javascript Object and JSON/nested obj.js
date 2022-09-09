
// Object can contain multiple objects
// Semicolon used in programming
// We use comma to separate not semicolons, and at last line we do not use comma we use semi colon

const student=
{
    name: "Rahul",
    age: 22,
    address: {
        street: "one",
        appartment: "Apt None",
        houseNum: "21",
        randomKitty: function() {
            console.log("random")
        }
        }
};

/*{
        street: "one",
        appartment: "Apt None",
        houseNum: "21"
        }
*/

// 
const addressObj = student.address;

const randomStreet = addressObj.street;

const randomApt = addressObj.appartment;

const randomHouseNum = addressObj.houseNum;

console.log(randomStreet);

console.log(addressObj.appartment);

console.log(student.address);// we can directly access without storing in addressObj

console.log(student.address.appartment);//we may access using student dot objects

console.log(student.address.randomKitty());

