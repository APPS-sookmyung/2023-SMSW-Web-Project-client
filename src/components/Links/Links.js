import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="linksContainer">
      <div className="linksContaineColumn">
        <a className="SMLinks" href="https://smsso.sookmyung.ac.kr/">
          Portal
        </a>
        <a className="SMLinks" href="https://snowboard.sookmyung.ac.kr/">
          Snowboard
        </a>
        <a className="SMLinks" href="https://snowe.sookmyung.ac.kr/">
          Snowe
        </a>
        <a className="SMLinks" href="https://snoway.sookmyung.ac.kr/">
          Snoway
        </a>
      </div>
      <div className="linksContaineColumn">
        <a
          className="MajorLinks"
          href="hhttps://csweb.sookmyung.ac.kr/csweb/index.do"
        >
          컴퓨터과학전공
        </a>
        <a
          className="MajorLinks"
          href="https://ds.sookmyung.ac.kr/software/index.do"
        >
          데이터사이언스전공
        </a>
      </div>
      <div className="linksContaineColumn">
        <a className="OtherLinks" href="https://www.swuniv.kr/">
          소프트웨어중심대학
        </a>
        <a className="OtherLinks" href="https://www.coss.ac.kr/">
          COSS 첨단분야 혁신융합대학
        </a>
      </div>
    </div>
  );
};

export default Links;
