import React, { useState, useEffect, Fragment } from "react";
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
      <S.SemesterContainer>
        <S.Line />
        <MajorForm onFormSubmit={handleFormSubmit} />
      </S.SemesterContainer>
      <div>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 1학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "1학년" && course.semester === "1학기" && (
                    <Fragment>
                      <S.TdTextLeftAlign>{course.courseName}</S.TdTextLeftAlign>
                      <S.TdTextCenter>{course.type}</S.TdTextCenter>
                      <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                      <button>x</button>
                    </Fragment>
                  )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 여름학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "1학년" &&
                    course.semester === "여름학기" && (
                      <Fragment>
                        <S.TdTextLeftAlign>
                          {course.courseName}
                        </S.TdTextLeftAlign>
                        <S.TdTextCenter>{course.type}</S.TdTextCenter>
                        <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                      </Fragment>
                    )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 2학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "1학년" && course.semester === "2학기" && (
                    <Fragment>
                      <S.TdTextLeftAlign>{course.courseName}</S.TdTextLeftAlign>
                      <S.TdTextCenter>{course.type}</S.TdTextCenter>
                      <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                    </Fragment>
                  )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 겨울학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "1학년" &&
                    course.semester === "겨울학기" && (
                      <Fragment>
                        <S.TdTextLeftAlign>
                          {course.courseName}
                        </S.TdTextLeftAlign>
                        <S.TdTextCenter>{course.type}</S.TdTextCenter>
                        <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                      </Fragment>
                    )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>2학년 1학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "2학년" && course.semester === "1학기" && (
                    <Fragment>
                      <S.TdTextLeftAlign>{course.courseName}</S.TdTextLeftAlign>
                      <S.TdTextCenter>{course.type}</S.TdTextCenter>
                      <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                    </Fragment>
                  )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>2학년 여름학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "2학년" &&
                    course.semester === "여름학기" && (
                      <Fragment>
                        <S.TdTextLeftAlign>
                          {course.courseName}
                        </S.TdTextLeftAlign>
                        <S.TdTextCenter>{course.type}</S.TdTextCenter>
                        <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                      </Fragment>
                    )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>2학년 2학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "2학년" && course.semester === "2학기" && (
                    <Fragment>
                      <S.TdTextLeftAlign>{course.courseName}</S.TdTextLeftAlign>
                      <S.TdTextCenter>{course.type}</S.TdTextCenter>
                      <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                    </Fragment>
                  )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>2학년 겨울학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "2학년" &&
                    course.semester === "겨울학기" && (
                      <Fragment>
                        <S.TdTextLeftAlign>
                          {course.courseName}
                        </S.TdTextLeftAlign>
                        <S.TdTextCenter>{course.type}</S.TdTextCenter>
                        <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                      </Fragment>
                    )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>3학년 1학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "3학년" && course.semester === "1학기" && (
                    <Fragment>
                      <S.TdTextLeftAlign>{course.courseName}</S.TdTextLeftAlign>
                      <S.TdTextCenter>{course.type}</S.TdTextCenter>
                      <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                    </Fragment>
                  )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>3학년 여름학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "3학년" &&
                    course.semester === "여름학기" && (
                      <Fragment>
                        <S.TdTextLeftAlign>
                          {course.courseName}
                        </S.TdTextLeftAlign>
                        <S.TdTextCenter>{course.type}</S.TdTextCenter>
                        <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                      </Fragment>
                    )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>3학년 2학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "3학년" && course.semester === "2학기" && (
                    <Fragment>
                      <S.TdTextLeftAlign>{course.courseName}</S.TdTextLeftAlign>
                      <S.TdTextCenter>{course.type}</S.TdTextCenter>
                      <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                    </Fragment>
                  )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>3학년 겨울학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "3학년" &&
                    course.semester === "겨울학기" && (
                      <Fragment>
                        <S.TdTextLeftAlign>
                          {course.courseName}
                        </S.TdTextLeftAlign>
                        <S.TdTextCenter>{course.type}</S.TdTextCenter>
                        <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                      </Fragment>
                    )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>4학년 1학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "4학년" && course.semester === "1학기" && (
                    <Fragment>
                      <S.TdTextLeftAlign>{course.courseName}</S.TdTextLeftAlign>
                      <S.TdTextCenter>{course.type}</S.TdTextCenter>
                      <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                    </Fragment>
                  )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>4학년 여름학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "4학년" &&
                    course.semester === "여름학기" && (
                      <Fragment>
                        <S.TdTextLeftAlign>
                          {course.courseName}
                        </S.TdTextLeftAlign>
                        <S.TdTextCenter>{course.type}</S.TdTextCenter>
                        <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                      </Fragment>
                    )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>4학년 2학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "4학년" && course.semester === "2학기" && (
                    <Fragment>
                      <S.TdTextLeftAlign>{course.courseName}</S.TdTextLeftAlign>
                      <S.TdTextCenter>{course.type}</S.TdTextCenter>
                      <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                    </Fragment>
                  )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>4학년 겨울학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData.map((course, index) => (
                <S.Tr key={index}>
                  {course.year === "4학년" &&
                    course.semester === "겨울학기" && (
                      <Fragment>
                        <S.TdTextLeftAlign>
                          {course.courseName}
                        </S.TdTextLeftAlign>
                        <S.TdTextCenter>{course.type}</S.TdTextCenter>
                        <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                      </Fragment>
                    )}
                </S.Tr>
              ))}
            </S.Table>
          )}
        </S.SemesterContainer>
      </div>
    </S.Container>
  );
};

export default MyCourse;
