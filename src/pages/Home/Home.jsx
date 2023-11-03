import React from "react";
import * as S from "./Home.style.jsx";
import PageLayout from "../PageLayout/PageLayout.js";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

const Home = () => {
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <S.Container>
        <S.MainImg>
          <S.MainInner>
            <S.MainTitle>Sookmyung</S.MainTitle>
            <S.MainTitle>Software</S.MainTitle>
            <S.MainSubTitle>
              지식정보화 사회를 선도할 소프트웨어 전문 인력을 양성합니다.
            </S.MainSubTitle>
          </S.MainInner>
        </S.MainImg>

        <S.Intro>
          <S.IntroInner>
            <S.IntroTitle>생각하는 힘을 가진 창조적 인재 양성</S.IntroTitle>
            <S.IntroMajorContainer>
              <S.IntroMajor>
                <S.IntroMajorInner>
                  <S.IntroMajorName>컴퓨터과학</S.IntroMajorName>
                </S.IntroMajorInner>
              </S.IntroMajor>
              <S.IntroMajor>
                <S.IntroMajorInner>
                  <S.IntroMajorName>데이터사이언스</S.IntroMajorName>
                </S.IntroMajorInner>
              </S.IntroMajor>
              <S.IntroMajor>
                <S.IntroMajorInner>
                  <S.IntroMajorName>소프트웨어융합</S.IntroMajorName>
                </S.IntroMajorInner>
              </S.IntroMajor>
            </S.IntroMajorContainer>
          </S.IntroInner>
        </S.Intro>

        <S.MajorFieldSection>
          <S.MajorFieldSectionInner>
            <S.HomeInfoTitleContainer>
              <S.HomeInfoTitleInner>
                <S.HomeInfoTitle>전공분야</S.HomeInfoTitle>
              </S.HomeInfoTitleInner>
            </S.HomeInfoTitleContainer>

            <S.MajorField>
              <S.MajorFieldContainer>
                <S.MajorFieldTitle>Software Core</S.MajorFieldTitle>
                <S.MajorFieldDetail>
                  컴퓨터 구조, 운영체제, 프로그래밍 언어
                </S.MajorFieldDetail>
                <S.MajorFieldDetail>
                  데이터베이스, 소프트웨어 공학, 인터넷
                </S.MajorFieldDetail>
              </S.MajorFieldContainer>
              <S.MajorFieldContainer>
                <S.MajorFieldTitle>Application Software</S.MajorFieldTitle>
                <S.MajorFieldDetail>
                  이차전지 및 전기화학공학
                </S.MajorFieldDetail>
                <S.MajorFieldDetail>
                  컴퓨터 그래픽스, 인간-컴퓨터 상호작용
                </S.MajorFieldDetail>
              </S.MajorFieldContainer>
              <S.MajorFieldContainer>
                <S.MajorFieldTitle>Software Convergence</S.MajorFieldTitle>
                <S.MajorFieldDetail>
                  빅데이터, 사물인터넷, 디지털컨텐츠, 핀테크
                </S.MajorFieldDetail>
                <S.MajorFieldDetail>
                  바이오 융합, 소프트웨어 창업 및 교육
                </S.MajorFieldDetail>
              </S.MajorFieldContainer>
            </S.MajorField>
          </S.MajorFieldSectionInner>
        </S.MajorFieldSection>

        <S.LinksSection>
          <S.linksContainer>
            <S.linksContaineColumn>
              <S.linksBox href="https://smsso.sookmyung.ac.kr/">
                <S.linksName>Portal</S.linksName>
              </S.linksBox>
              <S.linksBox href="https://snowboard.sookmyung.ac.kr/">
                <S.linksName>Snowboard</S.linksName>
              </S.linksBox>
              <S.linksBox href="https://snowe.sookmyung.ac.kr/">
                <S.linksName>Snowe</S.linksName>
              </S.linksBox>
              <S.linksBox href="https://snoway.sookmyung.ac.kr/">
                <S.linksName>Snoway</S.linksName>
              </S.linksBox>
            </S.linksContaineColumn>
            <S.linksContaineColumn>
              <S.linksBox href="https://csweb.sookmyung.ac.kr/csweb/index.do">
                <S.linksName>컴퓨터과학전공</S.linksName>
              </S.linksBox>
              <S.linksBox href="https://ds.sookmyung.ac.kr/software/index.do">
                <S.linksName>데이터사이언스전공</S.linksName>
              </S.linksBox>
              <S.linksBox href="https://www.swuniv.kr/">
                <S.linksName>소프트웨어중심대학</S.linksName>
              </S.linksBox>
              <S.linksBox href="https://www.coss.ac.kr/">
                {" "}
                <S.linksName>COSS</S.linksName>
              </S.linksBox>
            </S.linksContaineColumn>
          </S.linksContainer>
        </S.LinksSection>
      </S.Container>
    </PageLayout>
  );
};

export default Home;
