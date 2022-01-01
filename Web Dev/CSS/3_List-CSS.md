<style>
  body{
    background-color:rgb(0, 37, 46);
  }
  p, ul, li{
    color:#cd82ff;
  }
  h1,h2,h3,h4,h5,h6{
    color:#cd82ff;
  }
</style>

/*Control + k, v*/
## 2 Types of list
- ul (un-ordered list, bullets, squares, none)
- ol (ordered list, 1-9, a-z)

## CSS concepts

- Declaration: give a propierty to an element (not really used)
- Rule: The whole team of element to change(selector), what to change(propierty) & value


```CSS
body {
  background-color:black;
  color: white;
}
/* Can be over-written with */
b {
  color: pink;
}
```

### Iternal CSS

Remeber to put it in the header

```html
<style>
  <!--Write your CSS here :P -->
</style>
```

### Some highligts

- if the color si in hex like this #123, what the browser sees is #112233
  
```CSS
body {
  background-color:#123;
  /* #123 == #112233 */
}
```

## External CSS

- Before and extra propierty was added (type="sheet.css"), but it's redoundand..

**How to tell the html where to look for CSS?**
```html
<head> 
  <link href="/css/styles.css" rel="stylesheet">
</head>
```
---
## 3 Main ways to select HTML elements

1. By name of the element
2. By ID of the element
3. B Class of the element

```CSS
/* 1 */
a { 
  /*Some attributes*/ 
}
/* 2 */
.my_class {
  /*Some attributes*/ 
}
/* 3 */
#my_id { 
  /*Some attributes*/ 
}
```

### Class VS ID

- Class: Group indetifier: Can be used by a gruop of elements in your HTML text.
- ID: Unique indentifier: Can only be used once, per HTML document (only by 1 <>H1<>, 1 <>H2<>, etc).
- ID >>> Class: The ID will always overwrite the Class.

---
### **PRO TIP! 
**ONLY USE CLASSES, DONT USE ID'S**

Opens the door to the posibility of re-using after a chnage of heart

*At leats for style, they have their use and purpose in JS*
---

  