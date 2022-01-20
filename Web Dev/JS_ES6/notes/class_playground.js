
// GETTER & SOMETHIN'
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
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
  
const square = new Rectangle(11, 10);
console.log(square.area,"\n"); // 110

// STATIC METHODS, extra functionality
class PlayerTest{
    // default value of asked values
    chips = 90
    pname = "no_name"
    // isAlive
    constructor(chips, pname){
        this.chips = chips
        this.pname = pname
        // default value of not asked values
        this.isAlive = true
    }
    // changes values of the object given
    static killPlayer(pobject){
        pobject.isAlive = false
    }
    
    static displayStatus(pobject){
        if (pobject.isAlive) {
            console.log(`The player ${pobject.pname} is alive!`);    
        }
        else{
            console.log(`The player ${pobject.pname} はもう死んでいる! T.T`);            
        }
    }
}

let benny = new PlayerTest(800, "benny boy")
// benny.isAlive = false
PlayerTest.displayStatus(benny)
