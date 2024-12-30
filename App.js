/*
<div id="parent">
    <div id="child1">
        <h1>I am h1</h1>
        <h2>I am h2</h2>
    </div>
    <div id="child2">
        <h1>I am h1</h1>
        <h2>I am h2</h2>
    </div>
</div>
*/

const heading = React.createElement("h1",
    { id: "heading", xyz: "abc" },
    "Hello World from React");

const parent = React.createElement("div", { id: "parent" },[
    React.createElement("div", { id: "child1" },[
        React.createElement("h1", {}, "I'm an H1 tag of child 1"),
        React.createElement("h2", {}, "I'm an H2 tag of child 1")
    ]),
    React.createElement("div", { id: "child2" },[
        React.createElement("h1", {}, "I'm an H1 tag of child 2"),
        React.createElement("h2", {}, "I'm an H2 tag of child 2")
    ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);