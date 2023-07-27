import "./Dropdown.css";
import React from "react";
import { Link } from "react-router-dom";

const CurriculumDropdown = () => {
  return (
    <div className="Dropdown">
      <Link className="DropdownMenu" to={"/Curriculum/GraduationRequirements"}>
        졸업요건
      </Link>
      <Link className="DropdownMenu" to={"/Curriculum/Course"}>
        이수과목
      </Link>
    </div>
  );
};

export default CurriculumDropdown;
