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
  background-position: top;
  background-repeat: no-repeat;
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
  margin-top: 40px;
  padding: 0 20px;
  background-color: #fafafa;
`;

export const InfoTitleBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const OrganizationChart = styled.div`
  background-image: url("/images/OrganizationChart.jpeg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vh;
  height: 100vh;
  display: flex;
`;

export const OrganizationChartContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin-bottom: 40px;
`;

export const OrganizationChartPart = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 40px;
`;
