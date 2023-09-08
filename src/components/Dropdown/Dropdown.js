import "./Dropdown.css";
import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="DropdownBar">
      <div className="Dropdown">
        <div className="DropdownContainer">
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
            위치와 연락처
          </Link>
        </div>
        <div className="DropdownContainer">
          <Link
            className="DropdownMenu"
            to={"/Curriculum/GraduationRequirements"}
          >
            졸업요건
          </Link>
          <Link className="DropdownMenu" to={"/Curriculum/Course"}>
            이수과목
          </Link>
        </div>
        <div className="DropdownContainer">
          <Link className="DropdownMenu" to={"/Member/Professor"}>
            교수소개
          </Link>
          <Link className="DropdownMenu" to={"/Member/OrganizationChart"}>
            조직도
          </Link>
        </div>
        <div className="DropdownContainer">
          <Link className="DropdownMenu" to={"/StudentActivity/Club"}>
            학회
          </Link>
          <Link className="DropdownMenu" to={"/StudentActivity/StudentCouncil"}>
            학생회
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
