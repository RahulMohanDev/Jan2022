function Dog(potato,tomato) {
 this.name = potato;
 this.age= tomato;
}

const dog1 = new Dog("tom",5);


// how constructor function works.
function createDog(name,age){
    const obj = {};
    obj.name=name;
    obj.age=age;
    return obj;
}

// not the way to creat methords
function Dog(name,age){
    // properties
    this.name = name;
    this.age = age;
    // methords    
    this.bark=function(){
        console.log(this.name+"is barking");
    }
}


class Car {
    // constructor
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    // methords
    getName() {
        return this.name;
    }

    driveFast() {
        return "Died in acident, don't drive fast";
    }
    
}


// will convert to this
// function Car(name,age){
//     this.name=name;
//     this.age=age;
// }
// Car.prototype.getName=function (){
//     return this.name;
// }
// Car.prototype.driveFast=function (){
//     return "Died in acident, don't drive fast";
// }
// Car.companyName = "this is rahul mohan's company";


//exta don't worry.
// how id function created
// function createFunction() {
//   const obj = {}
//   obj.prototype = {}
//   // this.[[prototype]] = Function;
//   return obj;
// }

