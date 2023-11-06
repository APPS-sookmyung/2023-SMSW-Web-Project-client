import React from "react";
import * as S from "./GraduationRequirements.style.jsx";

const SCGraduationRequirements = () => {
  return (
    <S.Table>
      <S.Tbody>
        <S.Tr>
          <S.Th rowSpan={2}>총 졸업학점</S.Th>
          <S.Th colSpan={2}>교양학점</S.Th>
          <S.Th colSpan={3}>제1전공 (심화과정)</S.Th>
          <S.Th colSpan={3}>제1전공 (다전공과정)</S.Th>
          <S.Th colSpan={3}>복수전공</S.Th>
          <S.Th rowSpan={2}>부전공 이수학점</S.Th>
        </S.Tr>
        <S.Tr>
          <S.Td>교양필수</S.Td>
          <S.Td>교양선택</S.Td>
          <S.Td>전공필수</S.Td>
          <S.Td>전공선택</S.Td>
          <S.Td>전공합계</S.Td>
          <S.Td>전공필수</S.Td>
          <S.Td>전공선택</S.Td>
          <S.Td>전공합계</S.Td>
          <S.Td>전공필수</S.Td>
          <S.Td>전공선택</S.Td>
          <S.Td>전공합계</S.Td>
        </S.Tr>
        <S.Tr>
          <S.Td>130</S.Td>
          <S.Td>10</S.Td>
          <S.Td>15</S.Td>
          <S.Td>12</S.Td>
          <S.Td>48</S.Td>
          <S.Td>60</S.Td>
          <S.Td>12</S.Td>
          <S.Td>42</S.Td>
          <S.Td>54</S.Td>
          <S.Td>12</S.Td>
          <S.Td>30</S.Td>
          <S.Td>42</S.Td>
          <S.Td>21</S.Td>
        </S.Tr>
      </S.Tbody>
    </S.Table>
  );
};

export default SCGraduationRequirements;
