import React from "react";
import "./button.css";

const Button = ({ children, href, alt }) => {
  return (
    <div className="links_container">
      <a href={href} alt={alt} className="">
        {children}
      </a>
    </div>
  );
};

export default Button;
