ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))

// ReactDOM.render(
  // <ul>
  // <li>One item</li>
  // <li>Second hea'</li>
  // <li>Third son</li>
  // </ul>, document.getElementById("insert-1"))

// First custom component, CAREFUL WHIT THE CASE, MUST BE CAMEL
function MainContent(){ return ( <h1 className="content-title">IM POGGIN'</h1> ) }

ReactDOM.render(
    <div>
        <MainContent/>
    </div>, document.getElementById("main"))