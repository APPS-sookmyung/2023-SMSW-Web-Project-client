import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const StudentCouncilContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

export const StudentCouncilText = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 2px solid black;
  margin: 0;
`;

export const StudentCouncilSite = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  padding: 2px;
  position: relative;
  z-index: 10;
  text-decoration: none;
  margin: 10px;
`;

export const StudentCouncilSiteText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const PresidentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PresidentPosition = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin: 5px;
  margin-right: 20px;
`;
export const PresidentName = styled.h3`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
`;

export const PresidentContainerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const StudentCouncilContentsContainer = styled.div`
  width: 60vw auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;

export const CopyToClipboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  padding: 2px;
  position: relative;
  z-index: 10;
  text-decoration: none;
  margin: 10px;
`;

export const EventContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const EventInfoConatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EventName = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
`;

export const EventDate = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

export const EventImgContainer = styled.div`
  width: 100%;
  max-width: 420px;
  height: 100%;
  max-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EventImg = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;
  display: flex;
`;

export const EventContentsContainer = styled.div`
  width: 60vw auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;

export const EventListContainer = styled.div`
  width: 60vw;
`;
