// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

const buttonText = { text: "Click Me"};
const style = { backgroundColor: "blue", color: "white" };

// Create a react component
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
