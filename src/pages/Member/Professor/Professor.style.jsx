import styled from "@emotion/styled";

export const ProfessorPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* background-color: aqua; */
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 0px rgba(138, 138, 138, 0.633);
  padding: 10px;
  width: auto;
`;

export const ProfessorTitle = styled.div`
  font-size: 35px;
  font-weight: 800;
  color: black;
`;

export const ProfessorImg = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ProfessorImgContainer = styled.div`
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  width: auto;
  border-radius: 10px;
  border-width: 1px;
  display: flex;
  box-shadow: 0px 1px 10px 0px rgb(182, 182, 182);
`;

export const TwoColumn = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const ProfessorDetailOneColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  font-size: 15px;
  width: 15rem;
`;

export const ProfessorDetail = styled.div`
  font-weight: 500;
  margin: 3px;
  width: auto;
  word-break: keep-all;
  width: 200px;
`;

export const ProfessorName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(0, 0, 0, 0.45);
`;

export const ProfessorNameFont = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: white;
  padding: 5px;
  padding-left: 10px;
`;

export const ProfessorSiteBtn = styled.a`
  display: flex;
  color: black;
  word-break: break-all;
  text-decoration: none;
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 40px;
  width: 30px;
  height: 30px;
  align-content: center;
  justify-content: center;
  padding: 3px;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
