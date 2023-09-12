import React from "react";
import DSGraduationRequirements from "../GraduationRequirements/DSGraduationRequirements";
import CSGraduationRequirements from "../GraduationRequirements/CSGraduationRequirements";
import SCGraduationRequirements from "../GraduationRequirements/SCGraduationRequirements";
import "./GraduationRequirements.css";

const GraduationRequirements = () => {
  return (
    <div className="GraduationRequirementsPart">
      <div className="GraduationRequirementsTable">
        <p>컴퓨터과학전공</p>
        <CSGraduationRequirements />
      </div>
      <div className="GraduationRequirementsTable">
        <p>소프트웨어융합전공</p>
        <SCGraduationRequirements />
      </div>
      <div className="GraduationRequirementsTable">
        <p>데이터사이언스전공</p>

        <DSGraduationRequirements />
      </div>
    </div>
  );
};

export default GraduationRequirements;
