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
// const heading = <h1>Hello React 😁😂❤️</h1>;

//react functional component:
// const HeadingComponent = () => {
//   return <h1 className="heading">Hello React!! </h1>;
// };
//or
//Agar single line nhi hai toh hume likhna padega return();
// const HeadingComponent2 = () => {
//   return (<div id="container">
//     <h1 className="heading">Hello React</h1>
//   </div>
//   )
// };

//Composition of components-- *component k ander components*
const Title = () => <h1 className="heading">Hello</h1>;

const HeadingComponent2 = () => {
  return (
    <div id="container">
      {Title()}
      <Title></Title>
      <Title />
      <h1 className="heading">Hello React</h1>
    </div>
  );
};

//if we want to use {} then we have to write  return() always or else easily write **function = () => ();**
// const HeadingComponent = () => (
//       <div id="container">
//         <h2>{1010 + 1110}</h2>
//         <h1 className="heading">Hello React</h1>
//       </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />); //for react component
// root.render(<HeadingComponent />);
// root.render(heading);//for react element
