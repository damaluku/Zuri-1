import React from "react";
import "./button.css";

const Button = ({ children, href, alt, idStyle }) => {
  return (
    <a
      href={href}
      alt={alt}
      className="links_container"
      id={idStyle}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
    </a>
  );
};

export default Button;
