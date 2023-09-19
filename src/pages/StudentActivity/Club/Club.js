import React from "react";
import ClubList from "./ClubList.js";
import "./Club.css";

const Club = () => {
  const ViewClubList = ({ club }) => {
    return (
      <div>
        <table className="clubTable">
          <tbody>
            <tr className="clubTableRow">
              <td>
                <div className="clubName">{club.name}</div>
                <div className="clubDetail">{club.detail}</div>
                <div className="clubLeadingProfessor">
                  지도교수: {club.leadingProfessor}
                </div>
                <div className="clubSite">사이트: {club.site}</div>
                <div className="clubLocation">위치: {club.location}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="ClubPart">
      <p className="ClubTitle">소프트웨어학부 학회</p>
      <div>
        {ClubList.map((club) => (
          <ViewClubList club={club} key={club.name} />
        ))}
      </div>
    </div>
  );
};

export default Club;
