import "./Dropdown.css";
import React from "react";
import { Link } from "react-router-dom";

const StudentActivityDropdown = () => {
  return (
    <div className="Dropdown">
      <Link className="DropdownMenu" to={"/StudentActivity/Club"}>
        학회
      </Link>
      <Link className="DropdownMenu" to={"/StudentActivity/StudentCouncil"}>
        학생회
      </Link>
    </div>
  );
};

export default StudentActivityDropdown;
