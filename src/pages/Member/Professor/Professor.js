import React from "react";
import "./Professor.css";
import { ProfessorList } from "../Professor/ProfessorList";

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
          <div>
            <div className="ProfessorDetailOneColumn">
              <span>
                <span>직위: </span>
                <span> {professorList.Position}</span>
              </span>
              {professorList.Phone !== "-" ? (
                <span>
                  <span>전화번호: </span>
                  <span> {professorList.Phone}</span>
                </span>
              ) : null}

              <span>
                <span>이메일: </span>
                <span> {professorList.Email}</span>
              </span>
              {professorList.Website !== "-" ? (
                <span>
                  <a
                    style={{
                      color: "blue",
                      wordBreak: "break-all",
                    }}
                    href={professorList.Website}
                  >
                    {professorList.Website}
                  </a>
                </span>
              ) : null}
              <span>
                <span>분야: </span>
                <span> {professorList.Field}</span>
              </span>
              {professorList.Location !== "-" ? (
                <span>
                  <span>위치: </span>
                  <span> {professorList.Location}</span>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ProfessorPart">
      <div className="ProfessorPartHeaderImg">
        <p className="ProfessorTitle">소프트웨어학부 교수 소개</p>
      </div>
      <div style={{ display: "flex" }}>
        <div className="professorOneRow">
          {ProfessorList.slice(0, 9).map((professorList) => (
            <ViewProfessorList
              professorList={professorList}
              key={professorList.name}
            />
          ))}
        </div>
        <div className="professorOneRow">
          {ProfessorList.slice(9, 17).map((professorList) => (
            <ViewProfessorList
              professorList={professorList}
              key={professorList.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professor;
