import React from "react";
import "./StudentCouncil.css";
import * as S from "./StudentCouncil.style.jsx";
import StudentCouncilEventList from "./StudentCouncilEventList";

import { CopyToClipboard } from "react-copy-to-clipboard/src";

const StudentCouncil = () => {
  const ViewStudentCouncilEventList = ({ event }) => {
    return (
      <S.EventContainer>
        <S.Line />
        <S.EventContentsContainer>
          <S.EventInfoConatiner>
            <S.EventName>{event.name}</S.EventName>
            <S.EventDate>{event.date}</S.EventDate>
          </S.EventInfoConatiner>
          <S.EventImgContainer>
            <S.EventImg img={event.imgsrc} alt="사진" />
          </S.EventImgContainer>
        </S.EventContentsContainer>
      </S.EventContainer>
    );
  };

  return (
    <S.Container>
      <S.StudentCouncilContainer>
        <S.Line />
        <S.StudentCouncilContentsContainer>
          <S.StudentCouncilText>
            2023 소프트웨어학부 학생회 Index
          </S.StudentCouncilText>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "40px",
            }}
          >
            <S.StudentCouncilSite href="https://instagram.com/smwu_software?igshid=OGQ5ZDc2ODk2ZA==">
              <S.StudentCouncilSiteText>🔗</S.StudentCouncilSiteText>
            </S.StudentCouncilSite>
            <S.StudentCouncilSite>
              <S.CopyToClipboard>
                <CopyToClipboard
                  text="smsw.student.council23@gmail.com"
                  onCopy={() =>
                    alert("이메일 주소가 클립보드에 복사되었습니다.")
                  }
                >
                  <S.StudentCouncilSiteText>📧</S.StudentCouncilSiteText>
                </CopyToClipboard>
              </S.CopyToClipboard>
            </S.StudentCouncilSite>

            <S.PresidentContainer>
              <S.PresidentContainerRow>
                <S.PresidentPosition>학생회장</S.PresidentPosition>
                <S.PresidentName>이지은</S.PresidentName>
              </S.PresidentContainerRow>
              <S.PresidentContainerRow>
                <S.PresidentPosition>부학생회장</S.PresidentPosition>
                <S.PresidentName>경민서</S.PresidentName>
              </S.PresidentContainerRow>
            </S.PresidentContainer>
          </div>
        </S.StudentCouncilContentsContainer>
      </S.StudentCouncilContainer>

      {StudentCouncilEventList.map((event) => (
        <ViewStudentCouncilEventList event={event} key={event.name} />
      ))}
    </S.Container>
  );
};

export default StudentCouncil;
