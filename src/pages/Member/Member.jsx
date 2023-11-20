import React from "react";
import * as S from "./Member.style.jsx";
import InfoTitleBox from "../../components/InfoTitleBox/InfoTitleBox.jsx";
import Professor from "./Professor/Professor.jsx";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Member = () => {
  return (
    <S.Container>
      <S.MainImg>
        <S.MainInner>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <S.MainTitle>교수 소개</S.MainTitle>
            <S.MainSubTitle>Professor</S.MainSubTitle>
          </AnimationOnScroll>
        </S.MainInner>
      </S.MainImg>

      <S.ProfessorContainer>
        <Professor />
      </S.ProfessorContainer>

      <S.OrganizationChartPart>
        <S.InfoTitleBoxContainer>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <InfoTitleBox title="조직도" />
          </AnimationOnScroll>
        </S.InfoTitleBoxContainer>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <S.OrganizationChartContainer>
            <S.OrganizationChart />
          </S.OrganizationChartContainer>
        </AnimationOnScroll>
      </S.OrganizationChartPart>
    </S.Container>
  );
};

export default Member;
