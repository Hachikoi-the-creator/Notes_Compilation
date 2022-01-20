// 🙂 😭 🥳 😱
// ["🍎", "🍊", "🍎", "🍎", "🍊"]
// aka. DOM (Document Object Model)
document.getElementById("counter").innerText = count;
// + dynamic selection, can select even body lol
valueSum = document.querySelector("#value_sum")
// ---------------------- // ---------------------- // ----------------------

// functions can also change global var
// extra stuff, everything get converted to str!
let points = 4
let bonusPoints = "10"
let totalPoints = points + bonusPoints;// = 410

// ---------------------- // ---------------------- // ----------------------

// dont use "name" whit let, in global, weird problems
let my_name = "8koi";
let greeting = "Welcome back ";
my_phar = greeting + my_name + ' !'
document.getElementById("welcome-el").innerText = my_phar

// ---------------------- // ---------------------- // ----------------------

// Had to make this weird + " ", because a problem w/innerText
// innerText is also pretty computer intensive (FAT)
function save() {
    show_count.innerText += " " + count + " - "
}
// better way to solve spaces problem
function save() {
    show_count.textContent += count + " - "
}

// ---------------------- // ---------------------- // ----------------------

// You can use the num-- & num++
let num = 7
num++
console.log(num);//8

// ---------------------- // ---------------------- // ----------------------

// Cool e-commerce example!
<html>
    <img src="images/shoe.jpeg" alt="Nike shoe"/>
    <p>Nike shoe</p>
    <button onclick="error_func()">Purchase - $149</button>
    <p id="error"></p>
</html>
// Once the button is clicked, write in the doc, that there has been an error
let phar = document.getElementById("error")

function error_func() {
    phar.textContent = "There has been an error in your purchase!"
}

// ---------------------- // ---------------------- // ----------------------

// get random numbers
Math.round(Math.random() * 13);//0-13
Math.floor(Math.random() * 13);//0-12

// get random between 2 numbers, change floor -> round to be inclusive(min & max)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// ---------------------- // ---------------------- // ----------------------
// Comparision == VS === Stric Comparision

let y = 7
// ==, value(eve if it's different type)
y == 7, true
y == "7", true
y == 8, false

// === type & value
y === 7, true
y === "7", false
y === 8, false  

// ---------------------- // ---------------------- // ----------------------

// List work pretty weirdly~
const my_list = []
my_list[1] = 9
my_list[3] = 99
// my_list [1, emptyx2, 99]
// ADD ELEMENTS TO THE END my_list.push(77)
// All this stuf onyl to add some numbers and get the sum smh
const cards = []
cards.push(7, 9)
sum = cards.reduce((a, b) => a + b, 0)

console.log(sum)//16

// has dot nation & ["this"]
cards.length
cards["length"]

// ---------------------- // ---------------------- // ----------------------

// Dynamic html selection
// selects the element whit the ID message_show
document.querySelector("#message_show")
// returns a list of all <div> elements within the document with a class of either note or alert:
const matches = document.querySelectorAll("div.note, div.alert");
// This example uses an attribute selector to return a list of the <iframe> elements in the document that contain an attribute named data-src:
const matches = document.querySelectorAll("iframe[data-src]");


// Erase elements, must be inside a div
if (!busted  && !got_black) {
    let removeDummy = document.getElementById("remove_dummy")
    removeDummy.parentNode.removeChild(removeDummy);
    return false;
}
