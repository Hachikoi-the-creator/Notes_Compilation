# Live example 

[Click me](https://codepen.io/hachikoi-the-creator/pen/rNGbYPL)



# html code

```html
<div class="container">
  <div class="box"></div>
</div>
```

# sass code
```scss

$breakpoints : (
  small : 220px,
  medium : 320px,
  large : 540px,
  x_large : 600px
);

@mixin mobile-first ($breakpoint){
  @if map-has-key($breakpoints, $breakpoint ){
    @media screen and ( min-width: map-get( $breakpoints, $breakpoint ) ){
      @content;
    }
  } 
  @else {
    @warn "The a¿value #{breakpoint} is not declared as breakpoint";
  }

}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  width: 100vw;
  height: 100vh;
}

.box {
  background-color: aquamarine;
  width: 30vh;
  height: 30vh;
  @include mobile-first(small) {
    transform: scale(0.5);
  }
  @include mobile-first(medium) {
    transform: scale(1.2);
    background-color: aliceblue;
  }
  @include mobile-first(large) {
    transform: scale(1.5);
  }
  @include mobile-first(x_large) {
    transform: scale(2.5);
  }
}
```
