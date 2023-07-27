import "./Dropdown.css";
import React from "react";
import { Link } from "react-router-dom";

const MemberDropdown = () => {
  return (
    <div className="Dropdown">
      <Link className="DropdownMenu" to={"/Member/Professor"}>
        교수소개
      </Link>
      <Link className="DropdownMenu" to={"/Member/OrganizationChart"}>
        조직도
      </Link>
    </div>
  );
};

export default MemberDropdown;
