import React from "react";

let counter = 0;

function ActionLink() {
  const handleClick = (e) => {
    e.preventDefault();
    counter++;
    alert(`The link was clicked ${counter} times`);
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default ActionLink;
