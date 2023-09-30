import React from "react";
import "./OrganizationChart.css";
import OrganizationChartImg from "../../../assets/OrganizationChart.jpeg";

const OrganizationChart = () => {
  return (
    <div className="OrganizationChartPart">
      <p className="OrganizationChartTitle">소프트웨어학부 조직도</p>
      <div className="OrganizationChartImg">
        <img
          style={{ width: "800px", margin: "35px" }}
          src={OrganizationChartImg}
          alt="조직도"
        ></img>
      </div>
    </div>
  );
};

export default OrganizationChart;
