import React from "react";
import ReactDOM from "react-dom/client";

const name = React.createElement("div", { id: "heading" }, "hey");
const root = ReactDOM.createRoot(document.getElementById("root"));
const jsxheading = <h1>Namaste React</h1>;

root.render(jsxheading);

const Headingcomponent = () => {
  return <h1>hey there</h1>;
};
console.log(<Headingcomponent />);
