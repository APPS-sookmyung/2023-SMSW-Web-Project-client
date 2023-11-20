import React, { useState } from "react";
import * as S from "./Curriculum.style.jsx";

import { CScourseList, SCcourseList, DScourseList } from "./Course/CourseList";

import DSGraduationRequirements from "../Curriculum/GraduationRequirements/DSGraduationRequirements";
import CSGraduationRequirements from "../Curriculum/GraduationRequirements/CSGraduationRequirements";
import SCGraduationRequirements from "../Curriculum/GraduationRequirements/SCGraduationRequirements";

import MyCourse from "./MyCourse/MyCourse.jsx";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Curriculum = () => {
  const [isCSList, setIsCSList] = useState(true);
  const [isSCList, setIsSCList] = useState(false);
  const [isDSList, setIsDSList] = useState(false);

  const [isMyList, setIsMyList] = useState(false);

  const [MajorList, setMajorList] = useState(CScourseList);

  return (
    <S.Container>
      <S.MainImg>
        <S.MainInner>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <S.MainTitle>커리큘럼</S.MainTitle>
            <S.MainSubTitle>Curriculum</S.MainSubTitle>
          </AnimationOnScroll>
        </S.MainInner>
      </S.MainImg>
      <S.CourseContainer>
        {/* 전공 선택 버튼 */}
        <S.SelectBtnContainer>
          <S.SelectBtnContainerInner>
            <S.SelectBtn
              onClick={() => {
                setIsCSList(true);
                setIsSCList(false);
                setIsDSList(false);
                setIsMyList(false);
                setMajorList(CScourseList);
              }}
            >
              <S.Line />
              <S.SelectBtnText>컴퓨터과학전공</S.SelectBtnText>
              <S.Line />
            </S.SelectBtn>
            <S.SelectBtn
              onClick={() => {
                setIsCSList(false);
                setIsSCList(true);
                setIsDSList(false);
                setIsMyList(false);
                setMajorList(SCcourseList);
              }}
            >
              <S.Line />
              <S.SelectBtnText>소프트웨어융합전공</S.SelectBtnText>
              <S.Line />
            </S.SelectBtn>
            <S.SelectBtn
              onClick={() => {
                setIsCSList(false);
                setIsSCList(false);
                setIsDSList(true);
                setIsMyList(false);
                setMajorList(DScourseList);
              }}
            >
              <S.Line />
              <S.SelectBtnText>데이터사이언스전공</S.SelectBtnText>
              <S.Line />
            </S.SelectBtn>
            <S.SelectBtn
              onClick={() => {
                setIsCSList(false);
                setIsSCList(false);
                setIsDSList(false);
                setIsMyList(true);
                setMajorList(DScourseList);
              }}
            >
              <S.Line />
              <S.SelectBtnText>나의 수강과목</S.SelectBtnText>
              <S.Line />
            </S.SelectBtn>
          </S.SelectBtnContainerInner>
        </S.SelectBtnContainer>
        {/* 졸업요건 */}
        {isMyList === false && (
          <S.GraduationRequirementsContainer>
            <S.Line />
            {isCSList ? (
              <S.SelectedMajor>
                <S.MajorNameText>컴퓨터과학전공 교과목</S.MajorNameText>
                <S.GraduationRequirementsInner>
                  <CSGraduationRequirements />
                </S.GraduationRequirementsInner>
              </S.SelectedMajor>
            ) : null}
            {isSCList ? (
              <S.SelectedMajor>
                <S.MajorNameText>소프트웨어융합전공 교과목</S.MajorNameText>
                <S.GraduationRequirementsInner>
                  <SCGraduationRequirements />
                </S.GraduationRequirementsInner>
              </S.SelectedMajor>
            ) : null}
            {isDSList ? (
              <S.SelectedMajor>
                <S.MajorNameText>데이터사이언스전공 교과목</S.MajorNameText>
                <S.GraduationRequirementsInner>
                  <DSGraduationRequirements />
                </S.GraduationRequirementsInner>
              </S.SelectedMajor>
            ) : null}
            <S.Line />
          </S.GraduationRequirementsContainer>
        )}
        {/* 커리큘럼 */}
        {isMyList === false && (
          <S.Table>
            <colgroup>
              <col style={{ width: "15%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "6%" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <thead>
              <tr>
                <th style={{ fontSize: "15px" }}>교과목명</th>
                <th style={{ fontSize: "15px" }}>교과구분</th>
                <th style={{ fontSize: "15px" }}>수강학년</th>
                <th style={{ fontSize: "15px" }}>수강학기</th>
                <th style={{ fontSize: "15px" }}>학점</th>
                <th style={{ fontSize: "15px" }}>과목개요</th>
              </tr>
            </thead>
            <tbody>
              {MajorList.map((course, index) => (
                <S.Tr key={index}>
                  <S.TdTextLeftAlign style={{ fontWeight: "800" }}>
                    {course.name}
                  </S.TdTextLeftAlign>
                  <S.TdTextCenter>{course.type}</S.TdTextCenter>
                  <S.TdTextCenter>{course.grade}학년</S.TdTextCenter>
                  <S.TdTextCenter>{course.term}학기</S.TdTextCenter>
                  <S.TdTextCenter>{course.credit}</S.TdTextCenter>
                  <S.TdTextLeftAlign>{course.detail}</S.TdTextLeftAlign>
                </S.Tr>
              ))}
            </tbody>
          </S.Table>
        )}
        {/* 나의 수강과목 */}
        {isMyList === true && <MyCourse />}
      </S.CourseContainer>
    </S.Container>
  );
};

export default Curriculum;
