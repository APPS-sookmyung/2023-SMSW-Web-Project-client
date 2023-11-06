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
  width: 100%;
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

export const StudentCouncilEmail = styled.h3`
  font-size: 15px;
  font-weight: 500;
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
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
