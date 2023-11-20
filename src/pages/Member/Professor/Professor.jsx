import React from "react";
import { ProfessorList } from "./ProfessorList.js";

import * as S from "./Professor.style.jsx";

const Professor = () => {
  const ViewProfessorList = ({ professorList }) => {
    return (
      <S.Container>
        <S.ProfessorImgContainer>
          <S.ProfessorImg
            style={{
              backgroundImage: `url(${professorList.Image})`,
            }}
          >
            <S.ProfessorName>
              <S.ProfessorNameFont>{professorList.name}</S.ProfessorNameFont>
            </S.ProfessorName>
          </S.ProfessorImg>
        </S.ProfessorImgContainer>

        <S.ProfessorDetailOneColumn>
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
          {professorList.Website !== "-" ? (
            <S.ProfessorSiteBtn href={professorList.Website}>
              <span
                style={{
                  alignSelf: "center",
                  width: "auto",
                  height: "auto",
                }}
              >
                +
              </span>
            </S.ProfessorSiteBtn>
          ) : null}
        </S.ProfessorDetailOneColumn>
      </S.Container>
    );
  };

  return (
    <S.ProfessorPart>
      <div style={{ display: "flex" }}>
        <div>
          {ProfessorList.slice(0, 9).map((professorList) => (
            <ViewProfessorList
              professorList={professorList}
              key={professorList.name}
            />
          ))}
        </div>
        <div>
          {ProfessorList.slice(9, 17).map((professorList) => (
            <ViewProfessorList
              professorList={professorList}
              key={professorList.name}
            />
          ))}
        </div>
      </div>
    </S.ProfessorPart>
  );
};

export default Professor;
