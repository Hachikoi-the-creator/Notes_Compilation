//------- higer order functions (functions as parameters) -------//
const atashiArray = [4, 4.93, 5, -8, -9, 99]

// grabs every int, >0 num and stores the squared of that num in an []
const squareFunc = (arr=[]) => {
  // the arrow func goes tru every item, tnx to the filter func - maps goes to every result and returns it's squared version
  const sqNumbers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
  return sqNumbers
}

const sqResult = squareFunc(atashiArray)
console.log(sqResult)


//------- func default parameters -------//
function someSum(num, val = 1) { return num + val }

someSum(5, 6)//11
someSum(9)//10

//------- Rest operator (...args) -------//
// return the sum of an array

// ::before
function aSum(a, b, c) {
  const args = [a, b, c]
  return args.reduce( (a, b) => (a + b), 0 )
}
// ::after, also works whit any number of items pased as arguments
function sum(...args)  {
  return args.reduce( (a, b) => (a + b), 0 )
}

//------- Copy of an array (Instead of copy the same memory location, copy the items)) -------//

const arr1 = [1, 2, 3, 4]
let arr2 = []

// copy memory location
arr2 = arr1
arr1[0] = 777
console.log(arr2[0])//confirm that's the same object as arr1

// copy the content
arr2 = [...arr1]
console.log(arr2[0])

//------- Destructuring assigment (ugly variant from tuple assigment) -------//

const vowey = {x:1.3, y:7.7, z:99}
// old way
let a = vowey.x
let b = vowey.y
let c = vowey.z
// new way
// from the object get the value x, and put it in a variable a
let {x:a, y:b, z:c} = vowey

//------- Destructuring assigment x2 -------//
// object inside an object
const LOCAL = {
  today: {max: 34, min:12},
  tomorrow: {max: 40, min:10}
}

function getMaxToday(nest_obj) {
  // get the max temp for tomorrow
  const {tomorrow: {max: max_tomorrow}} = nest_obj
  return max_tomorrow
}

//------- Destructuring assigment x3 -------//
// from arrays, skip elements
const [a, b, , , c] = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(a, b, c)//1 2 5

// change places 
let a = 9; let b = 100
[a, b] = [b, a]
console.log(a, b)//100 9

//------- Destructuring assigment x4 + rest op -------//
// remove first 2 elements (could also assing to other var)
const argggg = [1,2,3,4,5,6,78,9]
let [ , , ...anew] = argggg
console.log(anew)//pog

//------- Destructuring assigment x5 + in-func stuff -------//
const my_obj = {
  name: "jhon",
  age: 99,
  alive: true,
  nation: "mexico"
}
function decon_4({name, age}) {
  // only pass the value of the object we will use
  return name, age
}
console.log(decon_4(my_obj))



