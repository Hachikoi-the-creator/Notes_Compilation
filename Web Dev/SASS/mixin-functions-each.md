## What is a mixin?
Is a piece of styling that can be used repeatly

```scss
// This is basic styling to center childs
@mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
  @include flexCenter

// every child is 30px and centered
  & > * {
    width: 30px
  }
}
```

## What is a function?

Is a piece of code whit at least one parameter and always returns something, can be used to change font-size, color, etc

```scss
@function invertColor(curr_color) {
  @if (curr_color == $main-color) {
    @return $accent-color;
  }
  @else {
    @return $main-color;
  }
}

@function doubleFont(curr_size) {
  @return curr_size * 2;
}
```

## Each loop
Like a ForEach loop

- **Color example**


```scss
$my_colors: (
  youtube: red,
  twitter: blue,
  github: gray
);

@each $class $color in $my_colors {
  .#{class} {
    color: $color;
  }
}

// result example
.youtube {
  color: red;
}
```

- **Fonts example**


```scss
$my_fonts: (
  h1: 40px,
  h2: 30px,
  h3: 23px,
  h4: 20px
);

@each $h_tag $size in $my_fonts {
  #{h_tag} {
    font-size: $size;
  }
}

// result example
h1 { font-size: 40px }
h2 { font-size: 30px }
```