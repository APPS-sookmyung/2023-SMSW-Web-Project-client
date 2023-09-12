import React from "react";
import "./Professor.css";
import { ProfessorList } from "../Professor/ProfessorList";

const Professor = () => {
  const ViewProfessorList = ({ professorList }) => {
    return (
      <div>
        <table className="ProfessorTable">
          <tbody>
            <tr className="ProfessorTableRow">
              <td>
                <div className="ProfessorImg"></div>
              </td>
              <td>
                <div className="ProfessorName">{professorList.name}</div>
                <div className="ProfessorPosition">
                  직위: {professorList.Position}
                </div>
                <div className="ProfessorPhone">
                  전화번호: {professorList.Phone}
                </div>
                <div className="ProfessorEmail">
                  이메일: {professorList.Email}
                </div>
                <div className="ProfessorWebsite">
                  사이트: {professorList.Website}
                </div>
                <div className="ProfessorField">
                  분야: {professorList.Field}
                </div>
                <div className="ProfessorLocation">
                  위치: {professorList.Location}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="ProfessorPart">
      <p className="ProfessorTitle">소프트웨어학부 교수</p>
      <div>
        {ProfessorList.map((professorList) => (
          <ViewProfessorList
            professorList={professorList}
            key={professorList.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Professor;
