import React, { useState } from "react";
import * as S from "./MajorForm.style.jsx";

function MajorForm({ onFormSubmit }) {
  const [year, setYear] = useState("1학년");
  const [semester, setSemester] = useState("1학기");

  const [generalRequire, setGeneralRequire] = useState(0);
  const [generalElective, setGeneralElective] = useState(0);
  const [advMajorRequire, setAdvMajorRequire] = useState(0);
  const [advMajorElective, setAdvMajorElective] = useState(0);

  const [courseData, setCourseData] = useState([]); // State to store submitted course data

  const submit = (e) => {
    e.preventDefault();

    const selectedYear = year;
    const selectedSemester = semester;

    const nameInput = e.target.querySelector('input[name="name"]');
    const creditInput = e.target.querySelector('input[name="credit"]');
    const typeInput = e.target.querySelector('input[name="type"]:checked');

    if (nameInput && creditInput && typeInput) {
      const courseName = nameInput.value;
      const credit = parseInt(creditInput.value, 10);
      const type = typeInput.value;

      // Create an object representing the submitted course
      const course = {
        year: selectedYear,
        semester: selectedSemester,
        courseName,
        credit,
        type,
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
      }

      nameInput.value = "";
      creditInput.value = "";
      typeInput.checked = false;

      // Store the submitted course data in the state
      const updatedCourseData = [...courseData, course];
      setCourseData(updatedCourseData);

      // Call the callback function to pass the updated courseData to the parent component
      onFormSubmit(selectedYear, selectedSemester, updatedCourseData);
    }
  };

  const advMajorTotal = advMajorRequire + advMajorElective;

  return (
    <div>
      <>
        <form onSubmit={submit}>
          <select onChange={(e) => setYear(e.target.value)}>
            <option value="1학년">1학년</option>
            <option value="2학년">2학년</option>
            <option value="3학년">3학년</option>
            <option value="4학년">4학년</option>
          </select>
          <select onChange={(e) => setSemester(e.target.value)}>
            <option value="1학기">1학기</option>
            <option value="2학기">2학기</option>
          </select>
          <input name="name" placeholder="교과목명" />
          <input name="credit" placeholder="학점수" type="number" />
          <label>
            <input name="type" value="교양필수" type="radio" />
            교양필수
          </label>
          <label>
            <input name="type" value="교양선택" type="radio" />
            교양선택
          </label>
          <label>
            <input name="type" value="전공필수" type="radio" />
            전공필수
          </label>
          <label>
            <input name="type" value="전공선택" type="radio" />
            전공선택
          </label>

          <button type="submit">등록</button>
        </form>
      </>
      <>
        <div>
          <span>교양필수 : </span>
          {generalRequire}
        </div>
        <div>
          <span>교양선택 : </span>
          {generalElective}
        </div>
        <div>
          <span>전공필수 : </span>
          {advMajorRequire}
        </div>
        <div>
          <span>전공선택 : </span>
          {advMajorElective}
        </div>
        <div>
          <span>전공 계 : </span>
          {advMajorTotal}
        </div>
      </>
    </div>
  );
}

export default MajorForm;
