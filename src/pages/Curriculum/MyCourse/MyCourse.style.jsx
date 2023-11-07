import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const SemesterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 0 auto;
`;

export const SemesterText = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
  margin-bottom: 0;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 2px solid black;
  margin: 0;
`;

export const Tr = styled.tr`
  display: flex;
  align-items: center;
  border-top: 1px solid lightgray;
`;

export const TdTextLeftAlign = styled.td`
  width: 15vw;
  font-size: 20px;
  font-weight: 800;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  * {
    margin: 5px;
    padding: 0px 10px;
  }
`;

export const TdTextCenter = styled.td`
  text-align: center;
  width: 10vw;
  font-size: 17px;
  font-weight: 600;
`;
