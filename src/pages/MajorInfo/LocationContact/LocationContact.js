import React from "react";
import "./LocationContact.css";
import CampusMap from "../../../assets/campusMap.jpeg";
import Floor4th from "../../../assets/Floor4.jpeg";

const LocationContact = () => {
  return (
    <div>
      <h1>위치 및 연락처</h1>
      <div>
        <h2>캠퍼스 안내도</h2>
        <img className="CampusMap" src={CampusMap} alt="캠퍼스 지도"></img>
        <p>
          [04310] 서울특별시 용산구 청파로47길 100 (청파동 2가 53-12)
          숙명여자대학교 명신관 425호 소프트웨어학부
        </p>
        <p>TEL: 02-710-9431</p>
        <p>FAX: 02-710-9296</p>
      </div>
      <div>
        <h2>명신관/새힘관 4층 조감도</h2>
        <img
          className="CampusMap"
          src={Floor4th}
          alt="명신관/새힘관 4층 조감도"
        ></img>
      </div>
    </div>
  );
};

export default LocationContact;
