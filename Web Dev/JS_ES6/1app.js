// use this to allow the proram catch silly mistakes
function a(){
    "use strict";
    agumaru = 333
    console.log(agumaru);
}
// a()
/*Without strict the code above actualy runs.... smh */

//------- var's & let's scope differences -------//
if (true){
    /*Whit var is pretty much the same as [global bar = "number"] in python, 
    that could couldn't run whit let or const! */
    var bar = "number"
    console.log(bar);
}
console.log(bar);

//------ Truly constants in objects ------//

const MATH_PI = {"pi":3.141516}
Object.freeze(MATH_PI)
// now this wont work, even tho doesn't trows any error without "strict"
MATH_PI.pi = 999
console.log(MATH_PI.pi);