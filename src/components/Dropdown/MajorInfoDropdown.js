import "./Dropdown.css";
import React from "react";
import { Link } from "react-router-dom";

const MajorInfoDropdown = () => {
  return (
    <div className="Dropdown">
      <Link className="DropdownMenu" to={"/MajorInfo/Intro"}>
        개요
      </Link>
      <Link className="DropdownMenu" to={"/MajorInfo/AdvanceField"}>
        진출분야
      </Link>
      <Link className="DropdownMenu" to={"/MajorInfo/PracticeRooms"}>
        실습실
      </Link>
      <Link className="DropdownMenu" to={"/MajorInfo/LocationContact"}>
        위치 및 연락처
      </Link>
    </div>
  );
};

export default MajorInfoDropdown;
