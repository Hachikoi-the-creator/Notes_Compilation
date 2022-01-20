# Index - (Took from W3Schools)
- [Index - (Took from W3Schools)](#index---took-from-w3schools)
  - [Callback](#callback)
  - [Asynchronous](#asynchronous)
    - [Time out example](#time-out-example)
    - [Set interval example](#set-interval-example)
  - [Waiting for files/Local Storage](#waiting-for-fileslocal-storage)
  - [Promises](#promises)


## Callback

Pass a function as an agument on another function
- Can be pretty useful to have all the variables, function & callback in one place

1 step back
```js
function CallMe(print_it){
  document.getElementById("my_id").textContent = print_it
}
// call & run the func inside the func
function SumSomething(num1, num2){
  const res = num1 + num2 
  CallMe(res)
}
SumSomething(1, 9)
```

2 Callback
```js
function CallMe(print_it){
  document.getElementById("my_id").textContent = print_it
}
// run the func inside the func
function SumSomething(num1, num2, my_func){
  const res = num1 + num2 
  my_func(res)
}
SumSomething(1, 9, CallMe)
```

## Asynchronous 

Functions running at the same time are called asynchronous (like multithreading in python)


### Time out example
Calls "myFunc" after 3 seconds
```js
setTimeout(myFunc, 3000);

function myFunc() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```
Pass a whole function instead lol
```js
// Old JS
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

// ES6 
setTimeout( () => {
let a = ("I love You !!!");
  document.getElementById("demo").innerHTML = a;
}, 3000);
```

### Set interval example
Call the function after a given amount of ms

```js
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("my_id").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
```

## Waiting for files/Local Storage

**HTTP response status codes**

1. Informational responses (100–199)
2. Successful responses (200–299)
3. Redirection messages (300–399)
4. Client error responses (400–499)
5. Server error responses (500–599)

---

- Gets an html file 
- Changes the content of the current page after the file is fetched, if it was fetched succesfully
```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
  let my_request = new XMLHttpRequest();
  my_request.open('GET', "mycar.html");
  my_request.onload = function() {
    if (my_request.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + my_request.status);
    }
  }
  my_request.send();
}

getFile(myDisplayer); 
```

## Promises

A Promise is a JavaScript object that links producing code & consuming code
- Producing code: Code that can take some time
- Consuming code: Code that must wait for a process to finish