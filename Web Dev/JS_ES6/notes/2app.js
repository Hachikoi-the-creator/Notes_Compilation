/*-------
ANNONIMUS FUNCTION
-------*/
// Fom using this & and "onclik:save_button()"
function saveLead() {
    console.log("Button clicked!")
}

// To only using this, whit no html adition!
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
})

/*-------
let VS const
-------*/
// If possible, use const. If not, use let.
// helps the code to be more understandable
const playerName = "Per"
let credits = 45

credits = credits - 10

/*-------
add html w/JS !
-------*/
// Use .innerHTML to render ainside the div container
let add = document.getElementById("container")
add.innerHTML = `<button>BUY</button`
// add p when clicked
container.addEventListener("click", function(){
    container.innerHTML += "<p>Thank you for buying!</p>"
})

// appending li  to a ul - Jr Way
for (let i = 0; i < myLeads.length; i++) {
    // remember this .innerHTML is pretty heavy!
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}

// appending li  to a ul - Sr.way
for (let i = 0; i < myLeads.length; i++) {
    // create element
    const li = document.createElement("li")
    // set text content
    li.textContent = myLeads[i]
    // append to ul
    ulEl.append(li)
}

/*-------
Store info in the browser, to counter erase by refresh 
-------*/
localStorage.setItem("key", "value")
localStorage.getItem("key")
localStorage.clear()

/*-------
Store list in localStorage
-------*/
// must be a string
let myLeads = `["THREE.awesomelead.com"]`

// String -> Array
myLeads = JSON.parse(myLeads)

myLeads.push("THREE.epiclead.com")

console.log(myLeads)//["THREE.awesomelead.com", "THREE.epiclead.com"]
// Array -> String
myLeads = JSON.stringify(myLeads)

localStorage.setItem(myLeads)

////// More example of the same //////
// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("Some_item.com")
console.log(typeof myLeads, myLeads)
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads, myLeads)