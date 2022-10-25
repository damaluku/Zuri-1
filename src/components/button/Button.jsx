import React from "react";
import "./button.css";

const Button = ({ children, href, alt }) => {
  return (
    <a href={href} alt={alt} className="links_container">
      <span>{children}</span>
    </a>
  );
};

export default Button;
