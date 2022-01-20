// Shortcut 4 when the name of the variable is the same as the value
const createLater = (age, alive) => ({ age, alive })

console.log(createLater(107, true))

// ------------ Old Add functions inside bjects ------------- //
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// ------------ Better Add functions inside objects ------------- //
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// ------------ New way fo making classes, pythonic stuff ------------- //
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

// ------------ Function that makes classes, then use attributes(getter, setter) ------------- //
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature; 

// ------------ Import code from other .js files ------------- //
// in from_here.js
export const capitalizeString = str => str.toUpperCase()
// in current.js
import { capitalizeString } from "./from_here"
const cap = capitalizeString("hello!");

console.log(cap);

// ------------ Export to reuse a block of code ------------- //
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// only the function 
export { capitalizeString };
// only the variables
export const foo = "bar";
export const bar = "foo";

// ------------ Import everything from a file ------------- //
import * as capitalizeStrings from "capitalize_strings";

// ------------ import only one thing / fallback------------- //
// exporting
export default function subtract(x,y) {return x - y;}
// importing
import subtract from "math_functions";

subtract(7,4);
