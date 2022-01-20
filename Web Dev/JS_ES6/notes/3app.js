//------- FALSY VS TRUTHY -------//
// False & falsy //
false
0
""
null// -> how you as a developer signalize emptiness

/*search for a key or index that doesn't exist */
undefined// -> how JavaScript signalizes emptiness

NaN

// true & truthy //
a = []
true

//------- Parameter VS Argument -------//
function aaa(parameter){
    // do something
}

aaa("some argument")

//------- Save current tab (chrome) -------//
// only works in the context of a working extension in chrome...

saveBtn.addEventListener("click", function(){
    /*LONG EXPLANATION
    - from the objects chrome.tabs we call the query func
    - w/that we pass some arguments on form of an object
    - arg-1 = active (the tab we are currently using)
    - arg-2 = currentWindow (the extension knows if we have multiple windows open) */
    // this func returns a [{url:"THREE.some_link.com"}]
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        // this gets "THREE.some_link.com"
        myLeads.push(tabs[0].url)
        // add it to local storage
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        // display it in!
        renderLeads(myLeads)
    })
})
// Also need to add an extra argument to manifest.json
"permisions",[
    "tabs"
]



