import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      &copy; {currentYear}{" "}
      <a href={`mailto:${"jbailey679@yahoo.com"}`}>John Bailey Design</a>
    </footer>
  );
};

export default Footer;
