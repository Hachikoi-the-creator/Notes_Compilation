// global cast
let motto
//------- annonymus func -------//
const magic = function(){
  return {'one':33}
}

// let motto = magic()


//------- same but whit arrow func -------//
const mirai = () => {
  return {'one':99}
};
// motto = mirai()


//------- even shorter, cannot retur objects tho -------//
const full = () => "Some data"
motto = full()

// global log-out
console.log(motto)


//------- arrow funct whit parameters -------//
const myCat = (a,b) => `my ${a} is pretty ${b}`

console.log(myCat('cat-girl', 'sexy'))

