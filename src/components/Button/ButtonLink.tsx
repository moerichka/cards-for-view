/* eslint-disable react/button-has-type */
import React from "react";

import s from "./Button.module.scss";

interface Props extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  variant?: "blue" | "orange";
}

function ButtonLink({
  children,
  className = "",
  variant = "orange",
  ...props
}: Props) {
  return (
    <a {...props} className={`${s.button} ${className} ${s[variant]}`}>
      {children}
    </a>
  );
}

export default ButtonLink;
