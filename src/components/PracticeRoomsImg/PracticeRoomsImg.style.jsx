import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const PracticeRoomsImg = styled.div`
  background-image: url(${(props) => props.imgsrc});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
`;

export const PracticeRoomsImgInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 50vh;
`;

export const PracticeRoomsText = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: white;
`;
