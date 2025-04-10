//Variable declaration are case sensitive
var a = 0
var A = 10
console.log({a,A}) //{ a: 0, A: 10 }

//using var, we can access var variables outside the scope
if(true){
    var greet = "Say Hello instead"
}

console.log(greet) //Say Hello instead

//using let, the scope of the variables are restricted
if(true){
    let hello = "Hello Nidhi "
}
//console.log(hello) hello is undefined

//In var re-declaring variables are allowed
var number = 1
var number = 2
console.log("var re-declarartion " + number) //var re-declarartion 2

//In let re-declaring variables are not allowedBUT VAUE CAN BE UPDATED
let num = 1
//let num = 2
num =  2
console.log("let updatation " + num) //let updatation 2

//In let, if the same variable is defined in different scopes there will be no error, bcz two instance are created for diff scope
let greeting = 'Hi Hello'
if(true){
    let greeting = 'Hello Have a good day'
    console.log(greeting) //Hello Have a good day
}
console.log(greeting) //Hi Hello

var num1;
let num2;

console.log({num1,num2}) //{ num1: undefined, num2: undefined }

num1 = 10
num2 = 20
console.log({num1,num2}) //{ num1: 10, num2: 20 }

//const, it is also block scope, can't be updated or re-declared
//const num3; Missing initializer in const declaration
const pi = 3.14
console.log(pi)

//const with objects
const greetingMsg = {
    message : "Say hi",
    times : 4
}

//error  :: Assignment to constant variable.
// greetingMsg = {
//     words : 'Hello',
//     number : 5
// }

//In const object , obj is not updated like above commeted example but we can update its property
greetingMsg.message = 'Hi Good Morning'
console.log(greetingMsg) //{ message: 'Hi Good Morning', times: 4 }