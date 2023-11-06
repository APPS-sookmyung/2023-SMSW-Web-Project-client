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
  background-image: url("/images/Member.jpg");
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

export const ProfessorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  padding: 0 20px;
`;
