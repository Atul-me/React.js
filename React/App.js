import React from "react";
import ReactDOM from "react-dom";


// This is the part where everything was defaut react code where we render every element through the create element object.
// This was very hectic(for every element we have to render an object) that's why the introduction of JSX was made.
// const parent = React.createElement(
//   "div",
//   { "id": "parent" },
//   //Array of obejcts to render the nested more than one element.
//   [React.createElement("div", { id: "Child2" }, [
//     React.createElement("h1",
//     { id: "heading" },
//     "HELLO"),
//     React.createElement("h1",
//     { id: "heading" },
//     "hello")
//   ]),
//   React.createElement("div", { id: "Child1" }, [
//     React.createElement("h1",
//     { id: "heading" },
//     "HELLO"),
//     React.createElement("h1",
//     { id: "heading" },
//     "hello")
//   ]),]
// );

// const heading = React.createElement("h1", {'id': 'heading'}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); -- for heading element
// root.render(parent);


//Now welcome to world of JSX...
//JSX=> transpiled by babel => React.createElement => react-element - (jsobject) => html element(render)
const jsxheading = <h1>Hello React 😁😂❤️</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
