import React from "react";
import "./PracticeRooms.css";
import m103 from "../../../assets/PracticeRooms/m103.jpeg";
import m305 from "../../../assets/PracticeRooms/m305.jpeg";
import m406 from "../../../assets/PracticeRooms/m406.jpeg";
import m408 from "../../../assets/PracticeRooms/m408.jpeg";
import m409 from "../../../assets/PracticeRooms/m409.jpeg";
import m410A from "../../../assets/PracticeRooms/m410A.jpeg";
import m413 from "../../../assets/PracticeRooms/m413.jpeg";

const PracticeRooms = () => {
  return (
    <div className="PracticeRoomPart">
      <p className="PracticeRoomsTitle">소프트웨어학부 실습실</p>
      <div className="PracticeRoomTwoBox">
        <div className="PracticeRoomContainer">
          <p className="PracticeRoomName">PC 실습실</p>
          <p className="PracticeRoomNo">명신관 305호</p>
          <img className="PracticeRoomsImg" src={m305} alt="명신관 305호"></img>
        </div>
        <div className="PracticeRoomContainer">
          <p className="PracticeRoomName">삼성 소프트웨어 실습실</p>
          <p className="PracticeRoomNo">명신관 406호</p>
          <img className="PracticeRoomsImg" src={m406} alt="명신관 406호"></img>
        </div>
      </div>
      <div className="PracticeRoomTwoBox">
        <div className="PracticeRoomContainer">
          <p className="PracticeRoomName">유비쿼터스 실습실</p>
          <p className="PracticeRoomNo">명신관 408호</p>
          <img className="PracticeRoomsImg" src={m408} alt="명신관 408호"></img>
        </div>
        <div className="PracticeRoomContainer">
          <p className="PracticeRoomName">임베디드 실습실</p>
          <p className="PracticeRoomNo">명신관 409호</p>
          <img className="PracticeRoomsImg" src={m409} alt="명신관 409호"></img>
        </div>
      </div>
      <div className="PracticeRoomTwoBox">
        <div className="PracticeRoomContainer">
          <p className="PracticeRoomName">소프트웨어학부 실습실</p>
          <p className="PracticeRoomNo">명신관 103호</p>
          <img className="PracticeRoomsImg" src={m103} alt="명신관 103호"></img>
        </div>
        <div className="PracticeRoomContainer">
          <p className="PracticeRoomName">전용 강의실</p>
          <p className="PracticeRoomNo">명신관 413호</p>
          <img className="PracticeRoomsImg" src={m413} alt="명신관 413호"></img>
        </div>
      </div>
      <div className="PracticeRoomContainer">
        <p className="PracticeRoomName">세미나실</p>
        <p className="PracticeRoomNo">명신관 410A호</p>
        <img className="PracticeRoomsImg" src={m410A} alt="명신관 410A호"></img>
      </div>
    </div>
  );
};

export default PracticeRooms;
