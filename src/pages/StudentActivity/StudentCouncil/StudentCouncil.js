import React from "react";
import "./StudentCouncil.css";
import StudentCouncilEventList from "./StudentCouncilEventList";
import IMG from "../../../assets/Semester2ClassStartParty.jpeg";

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
    <div className="StudentCouncilPart">
      <div className="StudentCouncilTitle">2023학년도 학생회 Index</div>
      <div>smsw.student.council23@gmail.com</div>
      <div className="StudentCouncilSemester">
        <div className="StudentCouncilSemesterName">2023년 2학기</div>
        <div>
          {StudentCouncilEventList.map((event) => (
            <ViewStudentCouncilEventList event={event} key={event.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCouncil;
