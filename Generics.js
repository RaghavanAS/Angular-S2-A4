var GenericClass = /** @class */ (function () {
    function GenericClass(nameD, ageD) {
        this.arr1 = [];
        //initilaising the two properties
        this.nameDetails = nameD;
        this.ageDetails = ageD;
        //pushing elements to the array
        this.arr1.push(this.nameDetails.pName);
        this.arr1.push(this.ageDetails.pAge);
        //checking the type of the parameters passed
        console.log("Type of first Parameter is  " + nameD);
        console.log("Type of second Parameter is " + ageD);
    }
    GenericClass.prototype.displayArray = function () {
        //displaying the array contents
        console.log("the fist array element is " + this.arr1[0] + " and the second array element is " + this.arr1[1]);
        //displaying interface details
        console.log(this.nameDetails);
        console.log(this.ageDetails);
    };
    return GenericClass;
}());
var I1 = { pName: "Raghavan" };
var I2 = { pAge: 28 };
var Gperson = new GenericClass(I1, I2);
Gperson.displayArray();
//# sourceMappingURL=Generics.js.map