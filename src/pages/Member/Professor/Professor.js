import React from "react";
import "./Professor.css";
import {
  ProfessorList1,
  ProfessorList2,
  ProfessorList3,
  ProfessorList4,
  ProfessorList5,
  ProfessorList6,
} from "../Professor/ProfessorList";

const Professor = () => {
  const ViewProfessorList = ({ professorList }) => {
    return (
      <div>
        <div className="ProfessorTableRow">
          <div className="ProfessorImgContainer">
            <div
              className="ProfessorImg"
              style={{
                backgroundImage: `url(${professorList.Image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="ProfessorName">
                <div className="ProfessorNameFont">{professorList.name}</div>
              </div>
            </div>
          </div>
          {/* <div>
                <div>
                  <div className="ProfessorDetailOneColumn">
                    <div className="ProfessorPosition">
                      직위: {professorList.Position}
                    </div>
                    <div className="ProfessorPhone">
                      전화번호: {professorList.Phone}
                    </div>
                    <div className="ProfessorEmail">
                      이메일: {professorList.Email}
                    </div>
                  </div>
                  <div className="ProfessorDetailOneColumn">
                    <div className="ProfessorWebsite">
                      사이트: {professorList.Website}
                    </div>
                    <div className="ProfessorField">
                      분야: {professorList.Field}
                    </div>
                    <div className="ProfessorLocation">
                      위치: {professorList.Location}
                    </div>
                  </div>
                </div>
              </div> */}
        </div>
      </div>
    );
  };

  return (
    <div className="ProfessorPart">
      <div className="ProfessorPartHeaderImg">
        <p className="ProfessorTitle">소프트웨어학부 교수 소개</p>
      </div>
      <div className="professorOneRow">
        {ProfessorList1.map((professorList) => (
          <ViewProfessorList
            professorList={professorList}
            key={professorList.name}
          />
        ))}
      </div>
      <div className="professorOneRow">
        {ProfessorList2.map((professorList) => (
          <ViewProfessorList
            professorList={professorList}
            key={professorList.name}
          />
        ))}
      </div>
      <div className="professorOneRow">
        {ProfessorList3.map((professorList) => (
          <ViewProfessorList
            professorList={professorList}
            key={professorList.name}
          />
        ))}
      </div>
      <div className="professorOneRow">
        {ProfessorList4.map((professorList) => (
          <ViewProfessorList
            professorList={professorList}
            key={professorList.name}
          />
        ))}
      </div>
      <div className="professorOneRow">
        {ProfessorList5.map((professorList) => (
          <ViewProfessorList
            professorList={professorList}
            key={professorList.name}
          />
        ))}
      </div>
      <div className="professorOneRow">
        {ProfessorList6.map((professorList) => (
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
