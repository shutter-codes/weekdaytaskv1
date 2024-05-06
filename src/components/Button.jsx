import React from "react";
import "../styles/button.css";




const Button = (props) => {
  const {
    text = "",
    variant = "default",
    leftIcon,
    type = "button",
    rightIcon,
    onClickHandler,
  } = props;

  let selectedVariantClass = "Default";

  switch (variant) {
    case "default":
      selectedVariantClass = "Default";
      break;
    case "secondary":
      selectedVariantClass = "Secondary";
      break;
    default:
      break;
  }

  return (
    <button
      type={type}
      className={`ButtonContainer ${selectedVariantClass}`}
      onClick={onClickHandler}
    >
      {leftIcon && <span className="LeftIcon">{leftIcon}</span>}
      <span className="ButtonText">{text}</span>
      {rightIcon && <span className="RightIcon">{rightIcon}</span>}
    </button>
  );
};

export default Button;