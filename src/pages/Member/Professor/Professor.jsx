import React from "react";
import { ProfessorList } from "./ProfessorList.js";

import * as S from "./Professor.style.jsx";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Professor = () => {
  const ViewProfessorList = ({ professorList }) => {
    return (
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
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
            <S.Table>
              <colgroup>
                <col style={{ width: "30%" }} />
                <col style={{ width: "70%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <S.Th>직위</S.Th>
                  <S.Td>{professorList.Position}</S.Td>
                </tr>
                {professorList.Phone !== "-" && (
                  <tr>
                    <S.Th>번호</S.Th>
                    <S.Td>{professorList.Phone}</S.Td>
                  </tr>
                )}
                <tr>
                  <S.Th>이메일</S.Th>
                  <S.Td>{professorList.Email}</S.Td>
                </tr>
                <tr>
                  <S.Th>분야</S.Th>
                  <S.Td>{professorList.Field}</S.Td>
                </tr>
                {professorList.Location !== "-" && (
                  <tr>
                    <S.Th>위치</S.Th>
                    <S.Td>{professorList.Location}</S.Td>
                  </tr>
                )}
              </tbody>
            </S.Table>
            {professorList.Website !== "-" ? (
              <S.ProfessorSiteBtn href={professorList.Website}>
                <span
                  style={{
                    alignSelf: "center",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  🔗
                </span>
              </S.ProfessorSiteBtn>
            ) : null}
          </S.ProfessorDetailOneColumn>
        </S.Container>
      </AnimationOnScroll>
    );
  };

  return (
    <S.ProfessorPart>
      <div style={{ display: "flex" }}>
        <div>
          {ProfessorList.slice(0, 10).map((professorList) => (
            <ViewProfessorList
              professorList={professorList}
              key={professorList.name}
            />
          ))}
        </div>
        <div>
          {ProfessorList.slice(10, 19).map((professorList) => (
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
