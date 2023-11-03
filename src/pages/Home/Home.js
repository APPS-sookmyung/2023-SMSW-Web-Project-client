import React, { Fragment } from "react";
import "./Home.css";
import Links from "../../components/Links/Links";
import PageLayout from "./pages/PageLayout/PageLayout.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <Fragment>
        <div className="HomeMainImg">
          <div className="HomeMainText">
            <div>
              <div style={{ fontSize: 70 }}>Sookmyung</div>
              <div style={{ fontSize: 70 }}>Software</div>
              <div style={{ fontSize: 20 }}>
                지식정보화 사회를 선도할 소프트웨어 전문 인력을 양성합니다.
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div className="MainIntroPart">
          <div className="MainIntro">
            " 생각하는 힘을 가진 창조적 인재 양성 "
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div className="MajorFieldPart">
          <div
            className="HomeInfoTitle"
            style={{ color: "white", marginTop: "25vh" }}
          >
            전공분야
          </div>
          <div className="MajorField">
            <div className="MajorFieldContainer">
              <div className="MajorFieldTitle">Software Core</div>
              <div>컴퓨터 구조, 운영체제, 프로그래밍 언어</div>
              <div>데이터베이스, 소프트웨어 공학, 인터넷</div>
            </div>
            <div className="MajorFieldContainer">
              <div className="MajorFieldTitle">Application Software</div>
              <div>이차전지 및 전기화학공학</div>
              <div>컴퓨터 그래픽스, 인간-컴퓨터 상호작용</div>
            </div>
            <div className="MajorFieldContainer">
              <div className="MajorFieldTitle">Software Convergence</div>
              <div>빅데이터, 사물인터넷, 디지털컨텐츠, 핀테크 및 경영정보</div>
              <div>바이오 융합, 소셜미디어, 소프트웨어 창업 및 교육</div>
            </div>
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div className="CurriculumPart">
          <div className="HomeInfoTitle">학년별 커리큘럼</div>
          <div className="Curriculum">
            <Fragment>
              <div className="CurriculumContainer">
                <div className="CurriculumGrade">
                  <div>1학년</div>
                </div>
                <div className="CurriculumSummary">기초 교양 및 전공 이해</div>
                <div className="CurriculumDetails">
                  <div>수학/프로그래밍 기초</div>
                  <div>소프트웨어 융합의 이해</div>

                  <div>컴퓨터 과학/소프트웨어의 이해</div>
                </div>
              </div>
            </Fragment>
            <Fragment>
              <div className="CurriculumContainer">
                <div className="CurriculumGrade">
                  <div>2-3학년</div>
                </div>
                <div className="CurriculumSummary">전공 기초 및 일반</div>
                <div className="CurriculumDetails">
                  <div>응용 소프트웨어 기초</div>
                  <div>소프트웨어 융합 기초/일반</div>
                  <div>컴퓨터 및 소프트웨어의 기본 구성과 체계</div>
                </div>
              </div>
            </Fragment>
            <Fragment>
              <div className="CurriculumContainer">
                <div className="CurriculumGrade">
                  <div>3-4학년</div>
                </div>
                <div className="CurriculumSummary">전공 심화 및 역량 강화</div>
                <div className="CurriculumDetails">
                  <div>소프트웨어 융합 심화</div>
                  <div>시스템종합설계/소프트웨어 융합 프로젝트</div>
                  <div>컴퓨터 및 소프트웨어의 고급 이론 및 심화 응용</div>
                </div>
              </div>
            </Fragment>
          </div>
        </div>
      </Fragment>
      <div className="LinksPart">
        <Links />
      </div>
    </PageLayout>
  );
};

export default Home;
