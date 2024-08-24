import React from "react";
import "./Button.css";

const Button = ({ children, onClick }) => {
  return (
    <div className="btn-comp">
      <button onClick={onClick} className="btn-app">
        {children}
      </button>
    </div>
  );
};

export default Button;
