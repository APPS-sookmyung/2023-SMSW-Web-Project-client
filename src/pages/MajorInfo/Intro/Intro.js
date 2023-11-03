import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div>
      <div className="IntroMainImg">
        <p className="IntoMainText">
          지식정보화 사회를 선도할 소프트웨어 전문 인력을 양성합니다
        </p>
      </div>
      <div
        style={{
          marginRight: "200px",
          marginLeft: "200px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="IntroKeywordContainer">
            <span className="IntroKeyword">
              <p>창의성</p>
            </span>
            <div style={{ display: "flex" }}>
              <span className="IntroKeyword">
                <p>리더십</p>
              </span>
              <span className="IntroKeyword">
                <p>전문성</p>
              </span>
            </div>
          </div>
          <div className="IntroDetailContainer">
            <div className="IntroDetail">
              <span>
                &nbsp; 소프트웨어학부는 1982년 설립된 전산학과를 전신으로
                현재까지 컴퓨터과학 분야 및 소프트웨어융합 분야 전반에 걸친 교육
                및 연구를 수행하고 있습니다.
              </span>
              <span>
                &nbsp; 본 전공은 지난 30여 년간 다수의 훌륭한 여성 소프트웨어
                인재를 배출해 왔으며, 앞으로도 지식정보화 사회를 선도할 창의력과
                리더십을 갖춘 소프트웨어 전문 인력의 양성을 목표로 하고
                있습니다.
              </span>
              <span>
                &nbsp; 졸업생의 주된 진로는 삼성전자, 삼성 SDS, LG CNS, LG전자,
                SK Telecom 등과 같은 대기업 네이버, 카카오, NC소프트 등과 같은
                소프트웨어 전문 기업, 은행 및 공공기관의 전산부서, 소프트웨어
                컨설팅, 전산 교육등 다양합니다.
              </span>
              <span>
                &nbsp; 소프트웨어학부는 사회에서 요구되는 전문성과 실용성을
                겸비하여 지식정보화 시대를 주도할 IT 전문 인력의 양성 뿐만
                아니라, 전공자 개인의 성취를 도모하여 최종적으로는 기업 및
                국가의 발전에 기여하는 것을 지향하고 있습니다.
              </span>
              <span>
                &nbsp; 또한 해당 분야에 특화된 교육 과정을 제공하며 전통적인
                컴퓨터과학 분야 인 컴퓨터 시스템 및 소프트웨어에 대한 체계적인
                교육 과정을 운영하며, 이를 기반으로 전문적인 소프트웨어 개발
                능력을 갖춘 인재 양성을 목표로 합니다.
              </span>
            </div>
          </div>
        </div>

        <div className="IntroTable">
          <div className="IntoTableColumn">
            <span>1982. 10</span>
            <span>1997. 10</span>
            <span>1998. 10</span>
            <span>2010. 04</span>
            <span>2016. 05</span>
          </div>
          <div className="IntoTableColumn">
            <span>이과대학 전산학과 신설</span>
            <span>이과대학 정보과학부 (전산학전공, 문헌정보학전공)</span>
            <span>
              이과대학 정보과학부 (컴퓨터과학전공, 멀티미디어학전공,
              문헌정보학전공)
            </span>
            <span>이과대학 컴퓨터과학부</span>
            <span>
              공과대학 소프트웨어학부 (컴퓨터과학전공, 소프트웨어융합전공)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
