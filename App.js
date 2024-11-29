import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "suvidhnya" }, "hello React");
console.log(heading); //returns obj

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //converts obj to H1 tag and put it up

const parent = React.createElement("div",{ id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "hi iam Suvidon"),
    React.createElement("h1", { id: "h2" }, "hi iam suviiii"),
  ])
); //returns obj

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);

console.log(parent);