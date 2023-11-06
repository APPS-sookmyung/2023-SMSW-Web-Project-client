import React, { useState } from "react";
import * as S from "./StudentActivity.style.jsx";
import Club from "./Club/index.js";
import StudentCouncil from "./StudentCouncil/index.js";

const StudentActivity = () => {
  const [isClub, setIsClub] = useState(true);
  const [isStudnetCouncil, setIsStudnetCouncil] = useState(false);

  return (
    <S.Container>
      <S.MainImg>
        <S.MainInner>
          <S.MainTitle>학생 활동</S.MainTitle>
          <S.MainSubTitle>Student Club & Council</S.MainSubTitle>
        </S.MainInner>
      </S.MainImg>

      <S.SelectBtnContainer>
        <S.SelectBtnContainerInner>
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
