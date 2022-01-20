
/*-------
 OBJECTS!! cheap Python's dicc lol
 -------*/
let player = { 
    name: "Jarvis",
    chips: 201
}
// Another example
let course = {
    title: "Learn CSS Grid for free",
    isFree: true,
    tags: ["html", "css"]
}
console.log(course.tags[0])// "html"

// Methods
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}
player.sayHello()//Heisann

/*-------
add objects as parameters
-------*/
function objParameter(my_object){
    return my_object.name
}

/*-------
ARRAYS
-------*/
// sum using the => operator  for annonymus func
const sum = [1, 2, 3].reduce((partial_sum, a) => partial_sum + a, 0);
// ----

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
// removes last
largeCountries.pop()
// removes first
largeCountries.shift()
// add at the end
largeCountries.push("Pakistan")
// add at the beginning
largeCountries.unshift("China")
console.log(largeCountries)
//["China", "India", "USA", "Indonesia", "Pakistan"]

let fruits = ["Apple", "Banana"]

// remove Apple from the front
let first = fruits.shift() 

// add to the front
let newLength = fruits.unshift('Strawberry') 
// ["Strawberry", "Banana"]

fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1

// this is how to remove an item
let removedItem = fruits.splice(fruits, 1) 
// ["Strawberry", "Mango"]

/*-------
CLASSES
-------*/
// Classes must be referenced before used, unlike anything else in JS wth
class Player{
    // default values, for asked values
    gotBlackjack = false
    gotBusted = false
    constructor(gotBlackjack, gotBusted, ){
        this.gotBlackjack = gotBlackjack
        this.gotBusted = gotBusted
        // default value of not asked values
        this.isAlive = true
        this.chips = 100
    }
    // normal methods
    giveMoney(){
        self.chips += 200
    }
    // changes values of the object given (Player.killPlayer)
    static killPlayer(pobject){
        pobject.isAlive = false
    }

    // WEIRD STUFF
    // Getter
    // goes tru the code to GET the desired output, calls a method
    get area() {
        return this.calcArea();
    }
    // Method
    // uses the in-class variables to perform a task
    calcArea() {
        return this.height * this.width;
    }
}

// class instance (object)
const roboticPlayer = new Player(false, true)



