# Table of contents
- [Table of contents](#table-of-contents)
  - [For in](#for-in)
  - [For of](#for-of)
  - [Diferences For in VS For of](#diferences-for-in-vs-for-of)
  - [Label loops](#label-loops)

## For in
Loops tru the items in the array
Cast the index

```js
const jupyter = ["truck", "bus", "plane", "walker"]
for (cast in jupyter){
  console.log( cast )//0, 1, 2, 3
}
```

## For of
Loops tru the items of an array
Cast the contents
```js
const jupyter = ["truck", "bus", "plane", "walker"]
for (cast of jupyter){
  console.log( cast )//truck, bus, plane, walker
}
```

## Diferences For in VS For of
- For in returns the name of added propierties
- For of just gets the values inside the array
```js
const my_arr = ["car", "cost"]
my_arr.newProp = "This is something random"

for (cast in jupyter){
  console.log( cast )//car, cost, newProp
}

for (cast of jupyter){
  console.log( cast )//car, cost
}

//While in console log
console.log(my_arr[0])//car
console.log(my_arr[1])//cost
console.log(my_arr.["newProp"])//This is something random
console.log(my_arr.newProp)//This is something random
```

## Label loops
Helps when working whit nested loops (break & continue)

```js
my_cute_loop:
while (true){
  nested_loop:
  for (let i = 0; i < 10; i++){
    break my_cute_loop, nested loop;
  }
}
```

```js

```
```js

```