import React from "react";

const Button = ({ styles, text }) => {
  return (
    <div>
      <button type="button" className={`${styles}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
