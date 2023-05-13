import React from "react";
import ReactDOM from "react-dom/client";

const name = React.createElement("div", { id: "heading" }, "hey");
const root = ReactDOM.createRoot(document.getElementById("root"));
const jsxheading = <h1>Namaste React</h1>;



const Secondcompontnt = () => <h1>hey i m second component</h1>;
const Headingcomponent = () => (
  <div>
    <Secondcompontnt />
    <h2>i am heading component</h2>
  </div>
);
root.render(<Headingcomponent />);