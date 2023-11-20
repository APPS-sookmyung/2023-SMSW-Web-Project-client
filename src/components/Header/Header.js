import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderInner">
        <div className="titleContainer">
          <Link to={"/"} className="titleBtn">
            <h4 className="title">숙명여자대학교</h4>
            <h4 className="title">소프트웨어학부</h4>
          </Link>
        </div>

        <div className="menuBar">
          <Link className="menu" to={"/MajorInfo"}>
            전공소개
          </Link>
          <Link className="menu" to={"/Curriculum"}>
            커리큘럼
          </Link>
          <Link className="menu" to={"/Member"}>
            구성원
          </Link>
          <Link className="menu" to={"/StudentActivity"}>
            학생활동
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
