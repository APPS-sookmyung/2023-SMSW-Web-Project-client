import React from "react";
import * as S from "./Member.style.jsx";
import InfoTitleBox from "../../components/InfoTitleBox/InfoTitleBox.jsx";
import Professor from "./Professor/Professor.jsx";

const Member = () => {
  return (
    <S.Container>
      <S.MainImg>
        <S.MainInner>
          <S.MainTitle>교수 소개</S.MainTitle>
          <S.MainSubTitle>Professor</S.MainSubTitle>
        </S.MainInner>
      </S.MainImg>

      <S.ProfessorContainer>
        <Professor />
      </S.ProfessorContainer>

      <S.OrganizationChartPart>
        <S.InfoTitleBoxContainer>
          <InfoTitleBox title="조직도" />
        </S.InfoTitleBoxContainer>
        <S.OrganizationChartContainer>
          <S.OrganizationChart />
        </S.OrganizationChartContainer>
      </S.OrganizationChartPart>
    </S.Container>
  );
};

export default Member;
