# Why SASS?
Pretty much because of the nesting, makes things pretty easier

# Variables in CSS VS Variables in SCSS
```scss
body {
    background-color: rgb(215, 239, 250);
    div.main {
        background-color: rebeccapurple;
    }
}
```

### Color variables
**CSS**

```css
:root{
    --main-color: red;
    --second-color: blue;
    --background-color: pink;
}
```
**SCSS**

This is better since it shows  the actual color in CSS

```scss
$main-color: red;
$secondayr-colo: pink;
```

### Font-weights etc.
**SCSS** 

It's usefull, trust me

```scss
$font-weights: (
    "normal": 300,
    "medium": 500,
    "bold": 800
)
```

# Partial SCSS files

When in large projects it's pretty useful to modularize parts of the CSS. to make this:

- create a .scss file that starts whit _ , that wey the compiler wil now it's a partial file & wont translate it to CSS
  
  -  example: _reset.scss

# Functions 

Help whit the font-weight variable, since it's pretty large of an statement, it's a way to short it down

```SCSS
$font-weights: (
    "normal": 300,
    "medium": 500,
    "bold": 800
);
@function weights($weight-name){
    @return map-get($font-weights, $weight-name)
}
```

# Mixin
It's like a function(JS) but whit entire Propierties

```scss
@mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## Darken & Lighten

**Darken**

Adjust the darkness of the color given as input 
```scss
// white -> black
darken (white, 100%)
// red -> clearer red
lighten (red, 40%)
```

# Extend propierties

If you want to keep some propierties of an item but only change 2 out of 12. or something

```SCSS

.main {
    color: red;
    font-size: 2rem;
    
    &__concept{
        color: black;
        align-self: center;
        display: grid;
    }

    #{&}__common {
        @extend .main__concept;
        // has same as .main__concept + different color
        color: pink
    }
}
```

# CSS/SASS Operations
**CSS**
```css
body {
    width: calc(40% - 100px);
    /* or */
    width: calc(40% - 10%);
}
```
**SASS**

we can also just use the CSS method w/calc
```scss
body {
    //  can only be within the same units
    width: calc(40% - 10%);
}
```