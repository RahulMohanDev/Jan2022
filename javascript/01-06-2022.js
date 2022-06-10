// var a = "this is a string";
// a = 34;
// a = "this is a string again";

// ES6 we introduced let and const

// // var a =23; 
// let a = 23; 
// a = 40;

// // decleartion and assignment
// const b = 34;
// b = 40;


// there is no let or const 

// var VERY_IMOPRTANT_DONT_CHANGE = 1;
// // 10,000 of line of code 
// if(true){
//   var VERY_IMOPRTANT_DONT_CHANGE = 2;  
//   // VERY_IMOPRTANT_DONT_CHANGE used inside.
// } 

// if(VERY_IMOPRTANT_DONT_CHANGE!==1){
//     console.log("launch nuclear bomb!!!!")
// }

// // for varaibles.
// var camelCase = 34;
// // for classes.
// var PascelCase =34;
// // this is used in pyhton. 
// var snake_case = 34; 
// // this is used in css somtimes.
// // var kebab-case = 34; 

//in the world of ES6 and above
// let VERY_IMOPRTANT_DONT_CHANGE = 1;
// let someVar = 234;
// // 10,000 of line of code 
// if(true){
//   let VERY_IMOPRTANT_DONT_CHANGE = 2; 
//   console.log(VERY_IMOPRTANT_DONT_CHANGE);
//   // VERY_IMOPRTANT_DONT_CHANGE used inside.
// } 

// if(VERY_IMOPRTANT_DONT_CHANGE!==1){
//     console.log("launch nuclear bomb!!!!")
// }

// let and const are block scoped.

// what is a block ? 
// {}

// {
//  let amc = 23;
//  console.log(amc);
// }

// console.log(amc);

// hoisitng
// TDZ (temporial=time dead zoom)

// let letVar; 
// console.log(letVar,'this is console log');
// letVar=23;



// hoisitng
// console.log(random,"this is random");
// console.log(testHoisting,"this is console.log");
// var testHoisting;
// var test;
// testHoisting = 34;

//TDZ
console.log(letVar,"this is console.log");
let letVar;
letVar = 34;

