class GenericClass<T>{
    arr1: any[] = [];
    nameDetails: PersonName;
    ageDetails: PersonAge;
    constructor(nameD: PersonName,ageD:PersonAge)
    {
        //initilaising the two properties
        this.nameDetails=nameD;
        this.ageDetails=ageD;
        //pushing elements to the array
        this.arr1.push(this.nameDetails.pName);
        this.arr1.push(this.ageDetails.pAge);
        //checking the type of the parameters passed
        console.log(`Type of first Parameter is  ${nameD}`);
        console.log(`Type of second Parameter is ${ageD}`);
    }
    displayArray():void {
    //displaying the array contents
        console.log(`the fist array element is ${this.arr1[0]} and the second array element is ${this.arr1[1]}`);    
        //displaying interface details
    console.log(this.nameDetails);
    console.log(this.ageDetails);
    }
    
    
}
interface PersonName{
    pName: string;
    }
interface PersonAge{
    pAge: number;
}
let I1: PersonName = { pName: "Raghavan" };
let I2: PersonAge = { pAge: 28 };

var Gperson = new GenericClass<object>(I1, I2);
Gperson.displayArray();
