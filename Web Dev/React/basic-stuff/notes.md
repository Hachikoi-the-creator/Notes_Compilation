
#[Table of contents](table-of-contents)
- [JSX](jsx)
- [Set-up React enviroment](#how-to-set-up-a-react-project)
- [Composability in action](#composability-in-action)
- [Using import & Export](#using-import--export-default)


## JSX
Is a way to work whit html in form of an JS object

**Older way**
```js
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"

console.log(h1) // <h1 class="header">
```

**JSX**
```js
const element = <h1 className="header">This is JSX</h1>
console.log(element)
// {
//     type: "h1", 
//     key: null, 
//     ref: null, 
//     props: {
//         className: "header", 
//         children: "This is JSX"
//     }, 
//     _owner: null, 
//     _store: {}
// }
```

**Extra example**
```js
// array? nani!?
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
```

## How to set-up a react project

1. Must have node.js installed
2. Run the comand: 
   - npx create-react-app {{project_name}}
3. If there's a warning about something being deprecated, run the command: 
   - npm i tar
4. To run the app in a local enviroment run:
   1. cd {{project_name}}
   2. npm start
5. (Optional): To start from scratch you can erase the whole "src" dir

## Composability in action
Calling a component inside another component


```js
import React from "react"
import ReactDOM from "react-dom"

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
```

## Using import & export default

```js
//--- inside Footer.js ---//
import React from "react"//must have this to use JSX

function Footer() {
    return (
        <footer>
            <small>© 2021 8Koi development. All rights reserved.</small>
        </footer>
    )
}

export default Footer

//--- inside index.js ---//
import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
```
