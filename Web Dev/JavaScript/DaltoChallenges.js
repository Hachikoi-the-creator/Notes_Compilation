// Easy challenge 1
function Challenge1(wn, money){
  if (money > 1 && money < 2) {
    console.log(`${wn} you can only buy X, left ${Math.round(money-1)}`)
  }
  else if (money > 1.9 && money < 3) {
    console.log(`${wn} you have good money, buy Y ${Math.round(money-2)}`)
  }
  else if (money > 2.9) {
    console.log(`${wn} You can buy some good Z, left ${Math.round(money-3)}`)
  }
  else {
    console.log("You cannot buy ANYTHING")
  }
}

Challenge1("Jhonny", 1.2)
Challenge1("John", 2)
Challenge1("Joseph", 777)
Challenge1("Jonathan", 1)