import React from "react";
import "./StudentCouncil.css";
import * as S from "./StudentCouncil.style.jsx";
import StudentCouncilEventList from "./StudentCouncilEventList";

const StudentCouncil = () => {
  const ViewStudentCouncilEventList = ({ event }) => {
    return (
      <div>
        <table className="EventTable">
          <tbody>
            <tr className="EventTableRow">
              <td className="EventTableContainer">
                <img className="EventImg" src={event.imgsrc} alt="사진"></img>

                <div className="EventRepresentation">
                  <div className="EventName">{event.name}</div>
                  <div className="EventDate">{event.date}</div>
                  <div className="EventDetail">{event.detail}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
          <S.StudentCouncilEmail>
            smsw.student.council23@gmail.com
          </S.StudentCouncilEmail>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <S.StudentCouncilSite href="https://instagram.com/smwu_software?igshid=OGQ5ZDc2ODk2ZA==">
              <S.StudentCouncilSiteText>🔗</S.StudentCouncilSiteText>
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
