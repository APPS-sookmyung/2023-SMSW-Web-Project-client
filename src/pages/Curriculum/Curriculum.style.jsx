import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  height: 100%;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1100px; */
  margin: 20px;
  padding: 0 20px;
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const MainImg = styled.div`
  background-image: url("/images/Curriculum.jpg");
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
  padding-bottom: 40px;
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

export const SelectBtnContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectBtnContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  /* width: 100%; */
  padding: 0px 40px;
  margin: 0px 40px;
`;

export const SelectBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  justify-content: center;
  margin: 0px 20px;
  padding: 10px;
`;

export const SelectBtnText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0px 20px;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 2px solid black;
  margin: 0;
`;

export const MajorNameText = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
`;

export const GraduationRequirementsContainer = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const GraduationRequirementsInner = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SelectedMajor = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0px;
`;

export const TdTextCenter = styled.td`
  text-align: center;
`;

export const TdTextLeftAlign = styled.td``;

export const Table = styled.table`
  width: 80vw;
  border-collapse: collapse;

  * {
    margin: 10px;
    padding: 10px;
  }
`;

export const Tr = styled.tr`
  display: table-row;
  border-top: 1px solid lightgray;
`;
