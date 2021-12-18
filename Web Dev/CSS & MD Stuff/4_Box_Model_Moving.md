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


# Center an element
**use the "auto" keyword on left & right**
```CSS
 {
    margin: 0 auto;
}
```

### Get rid of some real annoying defaul space in the browser that surrounds everything
```CSS
body {
    margin: 0;
}
```

# How to change Height 

Just add the parameters in the CSS lol

- Avoid setting a height! as saw, messes thing around too much 

    <img src="img\overflow.png"/>
```CSS
main {
    background: lightgreen;
    color: darkgreen;
    width: 300px;
    height: 100px;
}
```
### Margin VS Padding 
- Margin: Adds Empty space outside
- Padding: Adds empty space within the element

## Margin 
Control the position of the element relative to those around it

```CSS
header {
    color: #333;
    background: white;
    width: 100px;
    margin-top: 100px;
    margin-left: 25px;
}

p {
    background: lightskyblue;
    color: purple;
    margin: 90px;/*All sides lol*/
    text-align: center;
}
```

That would create something like this

<img src="img\margins.png">

- **Shorcut for margins is...Clockwise : top, right, bottom, left**
```CSS
p { 
    margin: 10px 30px 20px 15px; 
    margin: 9px; /*All sides*/
    margin: 10px 20px; /*top-botom & left-right*/
    margin: 10px 20px 15px; /*top & left-right & bottom*/
}
```

## Padding
Change the space between elements/words & the limits of the in-line element

- **Has same shorcut as margin**
```CSS
p {
    padding: 10px;
    /* Can also use the clockwise thingy */
    padding: 10 20 60 20;
}
```
<img src="img\padding.png">

## Borders
Allows to play whit the element's edges
- Need the 3 elements to work properly...
- If color is missing, will use the same color as the text


```CSS
header {
    border-color: yellow;
    border-width: 20px;
    border-style: solid;
}
```

<img src="img\edges.png">

### Shortcut / shorthand

- **Can also adjust to have only 1 margin**

```CSS
p {
    /* Normal shorthand */
    border: solid yellow 13px;
    
    /* Specifict for every side */
    /* size - type - color 
    .... Order does NOT matter*/
    border-top: 7px dotted purple;
    border-right: 0px;
    border-bottom: 20px solid pink;
    border-left: 0px;
}
```
**The more specific a propierty is the bigger priority its has... to Overwriting**

```CSS
p {
    border: 10px solid red;
    
    border-bottom-color: yellow; /*+ priority*/
    border-left-style: dashed;  /*++ priority*/
}
```

### Measure the total size
Total (X or Y) = width + 2(margin) + 2(paddin) + 2(border)

```CSS
header {
    width: 100px;
    background: steelblue;
    margin: 20px;
    padding: 30px;
    border: 10px solid yellow;
}
```