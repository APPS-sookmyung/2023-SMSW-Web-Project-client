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

export const MainImg = styled.div`
  background-image: url("/images/studentactivity.jpg");
  background-size: cover;
  background-position: center;
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

export const InfoTitleBoxContainer = styled.div`
  width: 100%;
`;

export const SelectBtnContainer = styled.div`
  background-color: white;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectBtnContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 25%;
`;

export const SelectBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 90px;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  padding: 10px;
`;

export const SelectBtnText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 2px solid black;
  margin: 0;
`;

export const ContentContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
