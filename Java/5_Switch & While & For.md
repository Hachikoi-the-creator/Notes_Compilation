<h2>Switch Example</h2>

```java
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

- Evaluates the condition once, like an if
- break, ensures the programs stops comparing after a condition is meet
- the default is just a convention, could be or not useful

<h2>While Example</h2>

```java
int i = 0;
while (i < 7){
    //do something
    i++; //  or +i;
}
```

- Never forget to make the condition false later on... lol

<h2>Do While Example</h2>

```java
do {
  // code block to be executed
}
while (condition);
```

- Runs once, then check is the condition is true
- Never forget to make the condition false later on here as well

<h2>For Example pff</h2>

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
//Pretty straight forward

//Loop trough array
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}

//Another way 
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (int i = 0; i < cars.length; i++) {
  System.out.println(cars[i]);
}
```

- Pretty much a while, but this can loop trough an array of elements