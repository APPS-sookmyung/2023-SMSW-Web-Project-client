import React from "react";
import * as S from "./Club.style.jsx";
import ClubList from "./ClubList.js";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const StudentActivity = () => {
  const ViewClubList = ({ club }) => {
    return (
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <S.ClubContainer>
          <S.Line />
          <S.ClubName>
            <S.ClubNameText>{club.name}</S.ClubNameText>
          </S.ClubName>
          <S.ClubDetail>
            <S.ClubDetailText> &nbsp; {club.detail}</S.ClubDetailText>
          </S.ClubDetail>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <S.ClubSite href={club.site}>
              <S.ClubSiteText>🔗</S.ClubSiteText>
            </S.ClubSite>
            <S.ClubProfessor>
              <S.ClubProfessorText>지도교수</S.ClubProfessorText>
              <S.ClubProfessorName>{club.leadingProfessor}</S.ClubProfessorName>
            </S.ClubProfessor>
          </div>
        </S.ClubContainer>
      </AnimationOnScroll>
    );
  };

  return (
    <S.Container>
      {ClubList.map((club) => (
        <ViewClubList club={club} key={club.name} />
      ))}
    </S.Container>
  );
};

export default StudentActivity;
