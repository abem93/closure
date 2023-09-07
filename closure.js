// Basic Closures
function sayHello(message){
  return ()=> {
    console.log(`${message}`)
  }
}
const hiWorld = sayHello('hello world');
hiWorld()

// Advanced Closures

function multiply(num1){
  return function(num2){
    return num1 * num2;
  }
}

const double = multiply(2);
const triple = multiply(3);
const quadruple = multiply(4);

console.log(double(4)); //8
console.log(triple(3)); //9
console.log(quadruple(4)) // 16


// Exercises
// #1 Counter
function counter(){
  let count = 1;
  return () => {
    return count ++;
  }
}
let count = counter()

console.log(count())
console.log(count())
console.log(count())
console.log(count())


// // #2 Make Adder

// function makeAdder(num1){
//   return (num2) => {
//     return (num1 + num2)
//   }
// }

// console.log(makeAdder(2)(3)); //5
// console.log(makeAdder(3)(6)); //9

// // #3 ID Generator

// function idGenerator(){
//   let idAlpha = "AZ";
//   let idNum = 0;
//   return function (){
//     ++idNum;
//     return (idAlpha + idNum);
//   }
// }
// const generateId = idGenerator();
// console.log(generateId());
// console.log(generateId());
// console.log(generateId());