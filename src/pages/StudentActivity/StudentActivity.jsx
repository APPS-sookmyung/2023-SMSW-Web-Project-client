import React, { useState } from "react";
import * as S from "./StudentActivity.style.jsx";
import Club from "./Club/index.js";
import StudentCouncil from "./StudentCouncil/index.js";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const StudentActivity = () => {
  const [isClub, setIsClub] = useState(true);
  const [isStudnetCouncil, setIsStudnetCouncil] = useState(false);

  return (
    <S.Container>
      <S.MainImg>
        <S.MainInner>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <S.MainTitle>학생 활동</S.MainTitle>
            <S.MainSubTitle>Student Club & Council</S.MainSubTitle>
          </AnimationOnScroll>
        </S.MainInner>
      </S.MainImg>

      <S.SelectBtnContainer>
        <S.SelectBtnContainerInner>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <S.SelectBtn
              onClick={() => {
                setIsClub(true);
                setIsStudnetCouncil(false);
              }}
            >
              <S.Line />
              <S.SelectBtnText>학회</S.SelectBtnText>
              <S.Line />
            </S.SelectBtn>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <S.SelectBtn
              onClick={() => {
                setIsClub(false);
                setIsStudnetCouncil(true);
              }}
            >
              <S.Line />
              <S.SelectBtnText>학생회</S.SelectBtnText>
              <S.Line />
            </S.SelectBtn>
          </AnimationOnScroll>
        </S.SelectBtnContainerInner>
      </S.SelectBtnContainer>

      <S.ContentContainer>
        {isClub ? (
          <div>
            <div>
              <Club />
            </div>
          </div>
        ) : null}
        {isStudnetCouncil ? (
          <div>
            <div>
              <StudentCouncil />
            </div>
          </div>
        ) : null}
      </S.ContentContainer>
    </S.Container>
  );
};

export default StudentActivity;
