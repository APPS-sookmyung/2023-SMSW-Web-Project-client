import React, { useState } from "react";
import * as S from "./MajorForm.style.jsx";

function MajorForm({ onFormSubmit }) {
  const [year, setYear] = useState("1학년");
  const [semester, setSemester] = useState("1학기");
  const [type, setType] = useState("교양필수");

  const [generalRequire, setGeneralRequire] = useState(0);
  const [generalElective, setGeneralElective] = useState(0);
  const [advMajorRequire, setAdvMajorRequire] = useState(0);
  const [advMajorElective, setAdvMajorElective] = useState(0);

  const [courseData, setCourseData] = useState([]); // State to store submitted course data

  const submit = (e) => {
    e.preventDefault();

    const selectedYear = year;
    const selectedSemester = semester;
    const selectedType = type;

    const nameInput = e.target.querySelector('input[name="name"]');
    const creditInput = e.target.querySelector('input[name="credit"]');

    if (nameInput && creditInput) {
      const courseName = nameInput.value;
      const credit = parseInt(creditInput.value, 10);

      // Create an object representing the submitted course
      const course = {
        year: selectedYear,
        semester: selectedSemester,
        courseName,
        credit,
        type: selectedType,
      };

      // Update the state variables based on the selected radio button
      if (type === "교양필수") {
        setGeneralRequire(generalRequire + credit);
      } else if (type === "교양선택") {
        setGeneralElective(generalElective + credit);
      } else if (type === "전공필수") {
        setAdvMajorRequire(advMajorRequire + credit);
      } else if (type === "전공선택") {
        setAdvMajorElective(advMajorElective + credit);
      } else if (type === "여름계절") {
        setAdvMajorRequire(advMajorRequire + credit);
      } else if (type === "겨울계절") {
        setAdvMajorElective(advMajorElective + credit);
      }

      nameInput.value = "";
      creditInput.value = "";

      // Store the submitted course data in the state
      const updatedCourseData = [...courseData, course];
      setCourseData(updatedCourseData);

      // Call the callback function to pass the updated courseData to the parent component
      onFormSubmit(selectedYear, selectedSemester, updatedCourseData);
    }
  };

  const advMajorTotal = advMajorRequire + advMajorElective;
  const majorTotal = advMajorTotal + generalRequire + generalElective;

  return (
    <S.Container>
      <S.FormContainer>
        <S.Form onSubmit={submit}>
          <S.Select onChange={(e) => setYear(e.target.value)}>
            <S.Option value="1학년">1학년</S.Option>
            <S.Option value="2학년">2학년</S.Option>
            <S.Option value="3학년">3학년</S.Option>
            <S.Option value="4학년">4학년</S.Option>
          </S.Select>
          <S.Select onChange={(e) => setSemester(e.target.value)}>
            <S.Option value="1학기">1학기</S.Option>
            <S.Option value="2학기">2학기</S.Option>
            <S.Option value="여름학기">여름학기</S.Option>
            <S.Option value="겨울학기">겨울학기</S.Option>
          </S.Select>
          <S.Input name="name" placeholder="교과목명" />
          <S.Input
            style={{ width: "5vw" }}
            name="credit"
            placeholder="학점"
            type="number"
          />
          <S.Select
            style={{ width: "7vw" }}
            onChange={(e) => setType(e.target.value)}
          >
            <S.Option value="교양필수">교양필수</S.Option>
            <S.Option value="교양선택">교양선택</S.Option>
            <S.Option value="전공필수">전공필수</S.Option>
            <S.Option value="전공선택">전공선택</S.Option>
          </S.Select>

          <S.Submit type="submit">확인</S.Submit>
        </S.Form>
      </S.FormContainer>
      <S.CountCreditContainer>
        <S.Table>
          <S.Tr>
            <S.Th>총 학점</S.Th>
            <S.Th>교양필수</S.Th>
            <S.Th>교양선택</S.Th>
            <S.Th>전공필수</S.Th>
            <S.Th>전공선택</S.Th>
            <S.Th>전공 계</S.Th>
          </S.Tr>
          <S.Tr>
            <S.Td>{majorTotal}</S.Td>
            <S.Td>{generalRequire}</S.Td>
            <S.Td>{generalElective}</S.Td>
            <S.Td>{advMajorRequire}</S.Td>
            <S.Td>{advMajorElective}</S.Td>
            <S.Td>{advMajorTotal}</S.Td>
          </S.Tr>
        </S.Table>
      </S.CountCreditContainer>
    </S.Container>
  );
}

export default MajorForm;
