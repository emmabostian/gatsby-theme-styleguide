import React from "react";

const Button = ({ myCoolText }) => {
  return <button onClick={() => console.log("WOOOOO")}>{myCoolText}</button>;
};

export default Button;
