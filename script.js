/*
 let userInput = parseInt(prompt('Enter a Number: '));
 //let number = parseInt(userInput);
 if(userInput%2 === 0){
     console.log(`${userInput} is a Even Number`);
}else{
    console.log(`${userInput} is a Odd Number`);
}

var result = (result >=30 ) ? 'Pass' : 'Fail';

 */
 

/*
function isClick(){
    console.log('Click is Done');
}
document.getElementById('btn').addEventListener('click',isClick);

(function(msg){
    console.log('Self invokeing Function',msg);
})('New here');

let maths = function(x,y){
    return x*y;
}
console.log(maths(3,4));

let num = [3,4,5,6];
let sqNum = num.map(function (num){
    return num * num;
});
console.log(sqNum);

let add = (x,y) => x + y;
console.log(add(5,6));

function greet(fName){
    function sayHello(){
        alert('Hello ' + fName);
    }
    return sayHello();
}
greet('Rupon');

function outer(){
    let outSide = 'I am Outside';
    function inner(){
        console.log(outSide);
    }
    return inner;
}
const innerFunction = outer();
innerFunction();

function counter() {
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
const myCounter = counter();
myCounter();

*/
 


/*

-------object literals------
const newSyamble = Symbol('Key1');
const mobileModel = {
    brand: 'HP',
    price: '52.8k',
    model: 'latest',
    camera: ['12mp','20mp','24mp'],
    hasZoom: true,
    [newSyamble]: 'my key one',
    brandModel: function(){
        return `Mobile brand is ${this.brand} and model is ${this.model}`;
    },
    battery: {
        mah: 5000,
    }
}
//console.log(mobileModel.brandModel());
//Object.freeze(mobileModel);
//console.log(mobileModel.hasOwnProperty('camera'));
// console.log(Object.keys(mobileModel));
// console.log(Object.values(mobileModel));
console.log(mobileModel.battery.mah);


const obj1 = {
    a: 1,
    b: 2,
    c: 3,
}
const obj2 = {
    x: 1,
    y: 2,
    z: 3,
}
const obj3 = {
    p: 1,
    q: 2,
    r: 3,
}
//const objFinal = {obj1,obj2};
const objFinal = {...obj1,...obj2,...obj3};
//const objFinal = Object.assign({},obj1,obj2,obj3);
console.log(objFinal);


---------Constructor function for a Person object-------
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  }
  
  // Creating a new Person object
  const person1 = new Person('John', 30, 'Male');
  
  // Accessing properties and methods
  console.log(person1.name); // Output: John
  console.log(person1.age); // Output: 30
  console.log(person1.gender); // Output: Male
  person1.sayHello(); // Output: Hello, my name is John

*/
 
 
/*
// const x = [1,2,3,4];
// const y = [5,6,7];
// const p = [8,9];
// const z = x.concat(y,p);
// console.log(z);

// const a = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// //console.log(a);
// console.log(a.flat());

// const lang = ['html','css','js','php',4,true];
// lang.splice(2,0);
// lang[5] = 'TailwindCss';
// lang[15] = 'hola';
// console.log(lang);
// console.log(lang.toString());
// lang.pop();
// lang.push('Notun');
// lang.unshift('prothom');
// lang.shift();
// console.log(lang);
 
// const num = new Array.of(20);
// console.log(num);

*/
 

/*
----------Event--------
function onLoad(){
    alert('javascript is testing');
    document.getElementById('text').innerHTML =  'Website Loaded';
}

function WindowResize(){
    document.getElementById('text-area').style.height = ' 100px';
}

function onScroll(){
    document.getElementById('text').innerHTML = 'Scrolling';
}
*/

 
/*
let num = 5.9;
console.log(Math.round(num));

let num1 = -4.3;
console.log(Math.sign(num1));

console.log(Math.pow(2,5));
console.log(Math.sqrt(81));
console.log(Math.cbrt(27));
console.log(Math.min(2,3,4,5));
console.log(Math.max(2,3,4,5));
console.log(Math.PI);
console.log(Math.E);
console.log(Math.random().toFixed(1)*10);

let precisesum = (0.1+0.2).toFixed(2);
console.log(precisesum);

let upperValue = 6;
let lowerValue = 1;
let resultValue = Math.ceil(Math.random() * upperValue);
console.log(resultValue);

let upperValue = 6;
let ludu = document.getElementById('ludu');
ludu.addEventListener('click', function(){
    let resultValue = Math.ceil(Math.random() * upperValue);
    ludu.innerHTML = resultValue;
});
 
*/
 
 
/*
-------date-------
let myDate = new Date();
console.log(myDate);
console.log(typeof(myDate));
console.log(myDate.toDateString());
console.log(myDate.toLocaleString('default',{
    weekday: 'long',
}));

let upDate = new Date('01-08-2011');
console.log(upDate);

let myTime = Date.now();
 function simpleTask(){
     for(let step = 0;step < 5;step++){
         console.log(step);
     }
 }
 let startTime = Date.now();
 simpleTask();
 let endTime = Date.now();
 console.log(`the task took ${endTime-startTime} milisecond to complete`);

*/
 

/*
-------loop---------
const person = {
    fName: 'Rupon',
    lName: 'Mia',
    age: 19
};
for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

const numbers = [1,2,3,4,5,6];
for(let i in numbers){
    console.log(numbers[i]);
}

const numbers = [2,3,4,5];
for(let number of numbers){
    console.log(number);
}

const string = 'hello';
for(let char of string){
    console.log(char);
}

for(let i = 1; i <= 5;i++){
    if(i === 3){
        break;
    }
    console.log(i);
}

for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}

*/
 
 
 


/* 
 21) DOM
 22) project
 23) project
 24) project
 25) project
 26) project
 27-29) Ana College API
*/
 

  






 

 
