const objArray1 = ['potato','rohan singh'].map((name,index,arr)=>{
    if(index!=1){
    return {name:name,boss:arr[1]};
    } 
    return {name:name};
});
console.log(objArray1);

// terneary 
const objArray4 = ['potato','rohan singh'].map((name,index,arr)=>{
    return index!=1 ?
     {name:name,boss:arr[1]} : {name:name}
});
console.log(objArray1); 

// shortcut terneary
const objArray5 = ['potato','rohan singh'].map((name,index,arr)=>(index!=1 ?{name:name,boss:arr[1]} : {name:name}));
console.log(objArray1); 


const objArray2 = ['potato','rohan singh'].map((name)=>{
    return {name:name}
});
console.log(objArray2); 
// sortcut
const objArray3 = ['potato','rohan singh'].map((name)=>({name:name}));


// const nameArray = ['rahul mohan','rohan singh']
// // [{name:'rahul mohan'},{name:'rohan singh'}];
// let objArray = []
// for(let name of nameArray){
//     let obj = {};
//     obj.name=name;
//     objArray.push(obj);
// }
// console.log(objArray);

const nameOfPeople = [{name:"rahul mohan",age:26},{name:"rohit singh poona",age:27}].filter((person)=>{
    return person.age>25;
}).map(
    (person)=>person.name
)
console.log(nameOfPeople)

// reduce
[{id:1,q:3},{id:3,q:15}].reduce((prev,current)=>{
    return current.q+prev;
},4)

[{id:23,value:23},{id:2345,value:1}].sort((a,b)=>a.value-b.value).map((item)=>item.id)
