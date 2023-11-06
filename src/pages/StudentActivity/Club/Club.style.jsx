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

export const ClubContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 2px solid black;
  margin: 0;
`;

export const ClubNameText = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
`;

export const ClubDetailText = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`;

export const ClubProfessorText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
`;

export const ClubProfessorName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
`;

export const ClubSiteText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const ClubProfessor = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  margin: 10px;
`;

export const ClubName = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px;
`;
export const ClubDetail = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px;
`;

export const ClubSite = styled.a`
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
