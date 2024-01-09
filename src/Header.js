import React from "react";
// import './Header.css';
import Title from "./Title";
import Button from "./component/Button";

const Header = () => {
  return (
    <div className="container bg-light d-flex justify-content-between align-items-center mb-5  ">
      <Title>NoteHack</Title>
      <Button />
    </div>
  );
};

export default Header;
