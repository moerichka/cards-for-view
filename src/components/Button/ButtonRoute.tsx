/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
import React from "react";
import Link, { LinkProps } from "next/link";

import s from "./Button.module.scss";

interface Props extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  variant?: "blue" | "orange";
}

const ButtonRoute: React.FC<Props & LinkProps> = ({
  children = "",
  className = "",
  variant = "orange",
  ...props
}) => {
  return (
    <Link {...props} className={`${s.button} ${className} ${s[variant]}`}>
      {children}
    </Link>
  );
};

export default ButtonRoute;
