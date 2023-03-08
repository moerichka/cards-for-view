/* eslint-disable react/button-has-type */
import React from "react";

import s from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "orange";
}

function Button({
  children,
  className = "",
  type = "button",
  variant = "orange",
  ...props
}: Props) {
  
  return (
    <button
      {...props}
      className={`${s.button} ${className} ${s[variant]}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
