# Animations

## Change orientation

We target a class that doesn't currently exist and add it later on whit JS

**HTML**
```html
<div class="menu-button">
  <span class="menu-button__burger"></span>
</div>
```

**SASS**
```scss
menu-button__burger.open {
  transform: rotate(720deg);
  background: red;
```

**JS**
```js
const menuButton = document.querySelector(".menu-button")
const hamburger = document.querySelector(".menu-button__burger")
let showMenu = false

menuButton.addEventListener("click", function(){
  if (!showMenu){
    hamburger.classList.add("open")
  }
  else {
    hamburger.classList.add("open")
  }
```

# @import deprecated, now use @use & @forward

**@use**
whit use you can import the variables or styling in your main sass file, but need to use dot-notation to get them workin' 

- **variable file**
  
```scss
// _colors.scsss
$red-color: red;
$main-color: #000300;
```

### Basic import

- **main styling**

```scss
@use 'sass/colors';
body {
  color: colors.$main-color
}
```
### Better import (@use)
- Just use "as" as in python's import maru-maru as a
```scss
// still namespace
@use 'sass/colors' as c;
body {
  color: c.$red-color;
}
```

- Even better, just use * and avoid the namespacing

```scss
// no namespace
@use 'sass/colors' as *;

body {
  color: $main-color
}
```

# @forward

This is a way to avoid having to import every variable into every place you'll need it, just import every _part in a _index.scss file and import the folder where that file is to import every _part into said folder

**(project/abstracts/_colors.scss)**
```scss
$my-color: purple;
$background-color: red;
$font-color: white;
```
**(project/abstracts/_index.scss)**
```scss
@forward 'colors', 'fonts';
```
now the those _part are available to any file where the parent is imported

**(project/styling/styles.scss)**
```scss
// 1 out, then select the folder
@use '../abstracts' as *;
body {
  background-color: $background-color;
  color; $my-color;
}
```
