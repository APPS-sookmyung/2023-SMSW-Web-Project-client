import React, { useState, useEffect } from "react";
import * as S from "./MyCourse.style.jsx";

import MajorForm from "../../../components/MajorForm/MajorForm.jsx";

const MyCourse = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [submittedCourseData, setSubmittedCourseData] = useState(null);

  useEffect(() => {
    if (selectedYear && selectedSemester && submittedCourseData) {
      console.log(submittedCourseData);
    }
  }, [selectedYear, selectedSemester, submittedCourseData]);

  const handleFormSubmit = (year, semester, courseData) => {
    setSelectedYear(year);
    setSelectedSemester(semester);
    setSubmittedCourseData(courseData);
  };

  return (
    <S.Container>
      <MajorForm onFormSubmit={handleFormSubmit} />

      <div>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 1학기</S.SemesterText>
          {submittedCourseData && (
            <div>
              {submittedCourseData.map((course, index) => (
                <div key={index}>
                  {course.year === "1학년" && course.semester === "1학기" && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "100px 100px 100px",
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid gray",
                        }}
                      >
                        {course.courseName}
                      </div>
                      <div
                        style={{
                          border: "1px solid gray",
                          textAlign: "center",
                        }}
                      >
                        {course.credit}학점
                      </div>
                      <div
                        style={{
                          border: "1px solid gray",
                          textAlign: "center",
                        }}
                      >
                        {course.type}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </S.SemesterContainer>

        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 2학기</S.SemesterText>
          {submittedCourseData && (
            <div>
              {submittedCourseData.map((course, index) => (
                <div key={index}>
                  {course.year === "1학년" && course.semester === "2학기" && (
                    <div>
                      {course.courseName} ({course.credit} 학점)
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </S.SemesterContainer>
      </div>
    </S.Container>
  );
};

export default MyCourse;
