import React from "react";
import * as S from "./MajorInfo.style.jsx";
import InfoTitleBox from "../../components/InfoTitleBox/InfoTitleBox.jsx";

import PracticeRoomsImg from "../../components/PracticeRoomsImg/PracticeRoomsImg.jsx";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const MajorInfo = () => {
  return (
    <S.Container>
      <S.MainImg>
        <S.MainInner>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <S.MainTitle>소프트웨어학부</S.MainTitle>
            <S.MainSubTitle>Department of Software</S.MainSubTitle>
          </AnimationOnScroll>
        </S.MainInner>
      </S.MainImg>

      <S.Intro>
        <S.IntroInner>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <InfoTitleBox title="개요" />
          </AnimationOnScroll>
          <S.InfoContentsInner>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <S.IntroKeywordContainer>
                <S.IntroKeywordInner>
                  <S.IntroKeyword>창의성</S.IntroKeyword>
                </S.IntroKeywordInner>
                <S.IntroKeywordColumn>
                  <S.IntroKeywordInner>
                    <S.IntroKeyword>리더십</S.IntroKeyword>
                  </S.IntroKeywordInner>
                  <S.IntroKeywordInner>
                    <S.IntroKeyword>전문성</S.IntroKeyword>
                  </S.IntroKeywordInner>
                </S.IntroKeywordColumn>
              </S.IntroKeywordContainer>
            </AnimationOnScroll>
            <S.InfoDescriptionInner>
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <S.IntoMainText>
                  지식정보화 사회를 선도할 소프트웨어 전문 인력을 양성합니다
                </S.IntoMainText>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
                duration={3}
              >
                <S.Line />
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <S.IntoMainDetail>
                  &nbsp; 소프트웨어학부는 1982년 설립된 전산학과를 전신으로
                  현재까지 컴퓨터과학 분야 및 소프트웨어융합 분야 전반에 걸친
                  교육 및 연구를 수행하고 있습니다.
                </S.IntoMainDetail>
                <S.IntoMainDetail>
                  &nbsp; 본 전공은 지난 30여 년간 다수의 훌륭한 여성 소프트웨어
                  인재를 배출해 왔으며, 앞으로도 지식정보화 사회를 선도할
                  창의력과 리더십을 갖춘 소프트웨어 전문 인력의 양성을 목표로
                  하고 있습니다.
                </S.IntoMainDetail>
              </AnimationOnScroll>
            </S.InfoDescriptionInner>
          </S.InfoContentsInner>
        </S.IntroInner>
      </S.Intro>

      <S.Goals>
        <S.GoalsInner>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <S.InfoTitleBoxContainer>
              <InfoTitleBox title="교육목표" />
            </S.InfoTitleBoxContainer>
          </AnimationOnScroll>

          <S.ContentsContainer>
            <S.ContentsContainerInner>
              <S.MajorNameContainer>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.MajorNameBox>
                    <S.MajorNameBoxInner>
                      <S.MajorName>소프트웨어학부</S.MajorName>
                    </S.MajorNameBoxInner>
                  </S.MajorNameBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.MajorNameBox>
                    <S.MajorNameBoxInner>
                      <S.MajorName>컴퓨터과학전공</S.MajorName>
                    </S.MajorNameBoxInner>
                  </S.MajorNameBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.MajorNameBox>
                    <S.MajorNameBoxInner>
                      <S.MajorName>소프트웨어융합전공</S.MajorName>
                    </S.MajorNameBoxInner>
                  </S.MajorNameBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.MajorNameBox>
                    <S.MajorNameBoxInner>
                      <S.MajorName>데이터사이언스전공</S.MajorName>
                    </S.MajorNameBoxInner>
                  </S.MajorNameBox>
                </AnimationOnScroll>
              </S.MajorNameContainer>
              <S.GoalsDetail>
                <S.GoalsDetailContainer>
                  <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    animateOnce={true}
                  >
                    <S.GoalsDetailDescription>
                      &nbsp; 소프트웨어학부는 사회에서 요구되는 전문성과
                      실용성을 겸비하여 지식정보화 시대를 주도할 IT 전문 인력의
                      양성 뿐만 아니라, 전공자 개인의 성취를 도모하여
                      최종적으로는 기업 및 국가의 발전에 기여하는 것을 지향하고
                      있습니다.
                    </S.GoalsDetailDescription>
                  </AnimationOnScroll>
                </S.GoalsDetailContainer>
                <S.GoalsDetailContainer>
                  <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    animateOnce={true}
                  >
                    <S.GoalsDetailDescription>
                      &nbsp; 우리 전공은 해당 분야에 특화된 교육 과정을 제공하며
                      전통적인 컴퓨터과학 분야 인 컴퓨터 시스템 및 소프트웨어에
                      대한 체계적인 교육 과정을 운영하며, 이를 기반으로 전문적인
                      소프트웨어 개발 능력을 갖춘 인재 양성을 목표로 합니다.
                    </S.GoalsDetailDescription>
                  </AnimationOnScroll>
                </S.GoalsDetailContainer>
              </S.GoalsDetail>
            </S.ContentsContainerInner>
          </S.ContentsContainer>
        </S.GoalsInner>
      </S.Goals>

      <S.PracticeRooms>
        <S.PracticeRoomsInner>
          <S.InfoTitleBoxContainer>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <InfoTitleBox title="교육환경" />
            </AnimationOnScroll>
          </S.InfoTitleBoxContainer>
          <S.PracticeRoomsContentsContainer>
            {/* col 1 */}
            <S.PracticeRoomsNameContainer>
              <S.PracticeRoomsNameContainerInner>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.PracticeRoomsNameBox>
                    <S.PracticeRoomsName>PC 실습실</S.PracticeRoomsName>
                  </S.PracticeRoomsNameBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.PracticeRoomsNameBox>
                    <S.PracticeRoomsName>
                      삼성소프트웨어 실습실
                    </S.PracticeRoomsName>
                  </S.PracticeRoomsNameBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.PracticeRoomsNameBox>
                    <S.PracticeRoomsName>유비쿼터스 실습실</S.PracticeRoomsName>
                  </S.PracticeRoomsNameBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.PracticeRoomsNameBox>
                    <S.PracticeRoomsName>임베디드 실습실</S.PracticeRoomsName>
                  </S.PracticeRoomsNameBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.PracticeRoomsNameBox>
                    <S.PracticeRoomsName>
                      소프트웨어학부 실습실
                    </S.PracticeRoomsName>
                  </S.PracticeRoomsNameBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.PracticeRoomsNameBox>
                    <S.PracticeRoomsName>전용 강의실</S.PracticeRoomsName>
                  </S.PracticeRoomsNameBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.PracticeRoomsNameBox>
                    <S.PracticeRoomsName>세미나실</S.PracticeRoomsName>
                  </S.PracticeRoomsNameBox>
                </AnimationOnScroll>
              </S.PracticeRoomsNameContainerInner>
            </S.PracticeRoomsNameContainer>

            {/* col 2 */}
            <S.PracticeRoomsImgContainer>
              <S.PracticeRoomsImgInner>
                {/* <S.PracticeRoomsImg /> */}
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <PracticeRoomsImg />
                </AnimationOnScroll>
              </S.PracticeRoomsImgInner>
            </S.PracticeRoomsImgContainer>
          </S.PracticeRoomsContentsContainer>
        </S.PracticeRoomsInner>
      </S.PracticeRooms>

      <S.Contact>
        <S.ContactInner>
          {/* <S.InfoTitleBoxContainer> */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <InfoTitleBox title="연락처" />
          </AnimationOnScroll>
          {/* </S.InfoTitleBoxContainer> */}
          <S.ContactContentsContainer>
            {/* col 1 */}

            <S.MapImgContainer>
              <S.MapImgInner>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.MapImg> &nbsp;</S.MapImg>
                </AnimationOnScroll>
              </S.MapImgInner>
            </S.MapImgContainer>

            {/* col 2 */}
            <S.ContactInfoContainer>
              <S.ContactInfoContainerInner>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.Line />
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.ContactInfoBox>
                    <S.ContactInfo>소프트웨어학부 사무실</S.ContactInfo>
                    <S.ContactInfoDetail>
                      <S.ContactInfoWhere>명신관 425호</S.ContactInfoWhere>
                      <S.ContactInfoTel>TEL: 02-710-9296</S.ContactInfoTel>
                    </S.ContactInfoDetail>
                  </S.ContactInfoBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <div style={{ marginTop: "10%" }} />
                  <S.Line />
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.ContactInfoBox>
                    <S.ContactInfo>소프트웨어학부 공동기기실</S.ContactInfo>
                    <S.ContactInfoDetail>
                      <S.ContactInfoWhere>명신관 406호</S.ContactInfoWhere>
                      <S.ContactInfoTel>TEL: 02-710-9295</S.ContactInfoTel>
                    </S.ContactInfoDetail>
                  </S.ContactInfoBox>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <div style={{ marginTop: "10%" }} />
                  <S.Line />
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <S.ContactInfoBox>
                    <S.ContactInfo>소프트웨어학부 학회실</S.ContactInfo>
                    <S.ContactInfoDetail>
                      <S.ContactInfoWhere>명신관 311A호</S.ContactInfoWhere>
                    </S.ContactInfoDetail>
                  </S.ContactInfoBox>
                </AnimationOnScroll>
              </S.ContactInfoContainerInner>
            </S.ContactInfoContainer>
          </S.ContactContentsContainer>
        </S.ContactInner>
      </S.Contact>
    </S.Container>
  );
};

export default MajorInfo;
