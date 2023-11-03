import React from "react";
import * as S from "./InfoTitleBox.style.jsx";

const InfoTitleBox = (props) => {
  return (
    <S.HomeInfoTitleContainer>
      <S.HomeInfoTitleInner>
        <S.HomeInfoTitle>{props.title}</S.HomeInfoTitle>
      </S.HomeInfoTitleInner>
    </S.HomeInfoTitleContainer>
  );
};

export default InfoTitleBox;
