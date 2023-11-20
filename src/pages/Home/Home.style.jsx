import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const HomeInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1100px; */
  margin: 0 40px;
  padding: 0 20px;
`;

export const MainInner = styled(HomeInner)`
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

export const MainImg = styled.div`
  background-image: url("/images/IntroMainImg.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const MainTitle = styled.h1`
  font-size: 80px;
  font-weight: 800;
  line-height: normal;
  color: white;
  margin: 0;
`;

export const MainSubTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
  color: white;
  margin: 0;
`;

export const Intro = styled.div`
  background-color: white;
  height: 354px;
`;

export const IntroInner = styled(HomeInner)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: auto;
`;

export const IntroTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: black;
`;

export const IntroMajorContainer = styled.div`
  display: flex;
`;

export const IntroMajor = styled.div`
  width: 150px;
  height: 150px;
  margin: 5px;
`;

export const IntroMajorInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-color: black;
  border-style: solid;
  border-width: 3px;
`;

export const IntroMajorName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

export const MajorFieldSection = styled.div`
  width: 100%;
  height: 50%;
  background-color: #fafafa;
`;

export const HomeInfoTitleContainer = styled.div`
  width: 100%;
`;

export const HomeInfoTitleInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 42px;
  background-color: black;
`;

export const MajorFieldSectionInner = styled.div`
  align-items: center;
  justify-content: flex-start;
  height: auto;
  margin: 40px;
`;

export const HomeInfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

export const MajorFieldDetail = styled.h3`
  margin: 0px;
  font-size: 15px;
  font-weight: 500;
  color: black;
`;

export const MajorField = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const MajorFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 150px;
  padding: 2vw;
  margin: 1vw;
`;

export const MajorFieldTitle = styled.h2`
  font-weight: 700;
  font-size: 25px;
  color: black;
`;

export const LinksSection = styled.div`
  width: 100%;
  height: 80vh;

  background-image: url("/images/LinksPartImg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const linksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const linksContaineColumn = styled.div`
  display: flex;
`;

export const linksBox = styled.a`
  width: 220px;
  height: 60px;
  margin: 5px;

  text-align: center;
  text-decoration: none;

  background-color: #ffffffb5;
  border-radius: 10px;
`;

export const linksName = styled.h3`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;
