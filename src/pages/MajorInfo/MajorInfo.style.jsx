import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1100px; */
  margin: 20px;
  padding: 0 20px;
`;

export const InfoContentsInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

export const InfoDescriptionInner = styled.div`
  width: 65%;
  margin: 20px;
`;

export const MainImg = styled.div`
  background-image: url("/images/MajorInfo.jpg");
  background-size: cover;
  background-position: bottom 20;
  width: 100%;
  height: 80vh;
  display: flex;
`;

export const MainInner = styled(Inner)`
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 20px;
`;

export const MainTitle = styled.h1`
  font-size: 50px;
  font-weight: 800;
  line-height: normal;
  color: white;
  margin: 0;
`;

export const MainSubTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  color: white;
  margin: 0;
`;

export const Intro = styled.div`
  background-color: white;
  height: 536px;
`;

export const IntroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: auto;
  /* padding: 40px; */
  margin: 40px 40px;
`;

export const IntroKeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const IntroKeywordColumn = styled.div`
  display: flex;
`;

export const IntroKeywordInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-color: black;
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;

  width: 150px;
  height: 150px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const IntroKeyword = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const IntoMainText = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 2px solid black;
  margin: 0;
`;

export const IntoMainDetail = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

export const Goals = styled.div`
  background-color: #fafafa;
  height: 536px;
`;

export const GoalsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: auto;
`;

export const InfoTitleBoxContainer = styled.div`
  width: 100%;
  margin: 40px;
`;

export const MajorNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: flex-end;
  justify-content: center;
  padding-right: 70px;
`;

export const MajorNameBox = styled.div`
  width: 228px;
  height: 62px;
  border-style: solid;
  border-width: 3px;
  margin: 5px;
`;

export const MajorNameBoxInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MajorName = styled.h3`
  font-size: 25px;
  font-weight: 700;
`;

export const GoalsDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GoalsDetailDescription = styled.h3`
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  &::after {
    content: "";
    display: block;
    width: 100%;
    border-top: 2px solid black;
    /* position: absolute; */
    margin: 10px;
  }
`;

export const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GoalsDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ContentsContainerInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PracticeRooms = styled.div`
  background-color: white;
  height: 700px;
`;

export const PracticeRoomsInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
`;

export const PracticeRoomsNameContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PracticeRoomsNameBox = styled.div`
  display: inline-flex;
  width: fit-content;
  border-style: solid;
  border-width: 3px;
  margin: 5px;
`;

export const PracticeRoomsName = styled.h3`
  margin: 5px;
  font-size: 25px;
  font-weight: 700;
`;

export const PracticeRoomsImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const PracticeRoomsImgInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 80%;
`;

export const PracticeRoomsImg = styled.div`
  background-image: url("/images/PracticeRooms/m305.jpeg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const PracticeRoomsContentsContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PracticeRoomsNameContainerInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 80%;
`;

export const Contact = styled.div`
  background-color: #fafafa;
  height: 600px;
  padding: 40px;
`;

export const ContactInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
`;

export const ContactContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0px;
`;

export const MapImgContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
  height: 100%;
  margin: 0px 3%;
`;

export const MapImgInner = styled.div`
  display: flex;

  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const MapImg = styled.div`
  background-image: url("/images/CampusMap.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 32rem;
  height: 25rem;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ContactInfoContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContactInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

export const ContactInfo = styled.h3`
  margin: 5px;
  font-size: 25px;
  font-weight: 700;
`;

export const ContactInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;
  margin-left: 40px;
`;

export const ContactInfoWhere = styled.h3`
  margin: 5px;
  font-size: 23px;
  font-weight: 700;
`;

export const ContactInfoTel = styled.h3`
  margin: 5px;
  font-size: 23px;
  font-weight: 500;
`;
