<style>
  body{
    background-color:rgb(0, 37, 46);
    color: black; 
  }
  p, ul, li{
    color:#cd82ff;
  }
  h1,h2,h3,h4,h5,h6{
    color:#5afff7;
  }
</style>

# JavaScrip!

```JS
//Let the variable love be = 9
let love = 9
//Some stuff it works
love++  //10
love += 11  //21
//Lmao that's OP
let ma_age = 21, my_love = 13, result = ma_age + my_love
console.log(result) //34
```

### Alrigth this is kinda weird

```JS
let result = 99
console.log("The ratio is ", `ayo wtf ${result}`)
//The ratio is ,"ayo wtf 34"
```

# Important stuff
- Always add the <>script<> at the bottom of the <>body<> to avoid render problems
- Dynamic language, as Python! 

  a = "brown" -> a = 99
- Check type with -> typeof some_var

**About code execution**
- Some parts can be called before declared (func, etc)
- Variables need to be declared before... **Hoisting**
## Run JS in cmd
- open cmd in the folder where the .js is
- write node <my_file_name.js>.js

### How to use JS 
```html
<!-- Inline JS -->
<h1 onclick="alert('Holiwis')">Some thing</h1>

<!-- JS inside script -->
<script>
    alert("Loser")
</script>

<!-- JS in an external file, always at bottom! -->
<script src="app.js"></script>

```

## Variables & constants

### Variables (Let & Var)
- Good convention to have a variable per line
```JS
// ; not nesesary but avoid future problems
let my_var = 9, your_var = 0;
// or whit var, to make it available in global scope!
// not just inside some if statement
var global_var = 999;
```
### Constants
- ehh some note
```JS
//Must give a value at the same time 
const MY_CONST = 666;
```

##  - Value types - 
| Primitive | Example | Reference | Example |
|-----------|---------|-----------|---------|
|String     |"Macc",'-'| Object    | null, dict, NaN,  **List**|
|Number     |  99.97  | Array      | **List**|
|Boolean    |   true  | Function  ||
|undefined  |**undefined**|-|-|
|null       | **null**|-|-|

### undefined 
When you declare a variable but forget to initialize it!

### null
When you define that a given variable has no value, by hand.
**Helps to clear the value!**

### NaN
Error advice, when you try to multiply something whit a number and something that's not a number
```JS
let num = 9, string = "my_pet";
console.log(num * string1);//NaN
console.log(string * string)//NaN
```

## User input!
Same as in Python's input( )
```JS
prompt("Hello there my boy")
```

### Create Object
```JS
let person = {
  name:"Jhon",
  last_name:"Doe",
  age:999
}
```
<h5>Change it's values</h5> 

**Dot notation VS Bracket notation**
```JS
// Shorter, cooler
person.name = "Benny"

// Avoids breaking the code because of a propierty w/same name
person["name"] = "Eula"
//Also allows to use a variable as Key
person[my_selection] = new_name
```
## Array / List 
```JS
let my_list = [1, 1.2, 'eat']
```

# Functions
```JS
function hello(name, age){
  console.log(`Hellow there ${name}`)
  console.log(`${age}? Yo old lol`)
  return age**2
}
```
<!-- 

## Create a button

**made in html**
```html
<button>INCREMENT</button>
```

## Make a button work 

```JS
//some event code
``` -->
