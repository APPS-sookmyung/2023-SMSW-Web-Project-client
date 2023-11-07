import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select`
  width: 5vw;
  height: 30px;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  margin: 5px;
`;

export const Option = styled.option``;

export const Input = styled.input`
  width: 20vw;
  height: 30px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 5px;

  ::placeholder {
    padding: 0;
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    padding-left: 5px;
  }
`;

export const Submit = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-color: black;
  border: none;
  color: white;
  margin: 0px 5px;
`;

export const CountCreditContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  margin-bottom: 20px;
  border-style: solid;
  border: 1;
  width: 80%;
  border-collapse: collapse;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-style: solid;
  border: 1;
  border-collapse: collapse;
  padding: 5px;
`;

export const Th = styled.th`
  border-style: solid;
  border: 1;
  border-collapse: collapse;
  padding: 5px;
  width: 7vw;
`;

export const Td = styled.td`
  border-style: solid;
  border: 1;
  border-collapse: collapse;
  padding: 5px;
  text-align: center;
`;
