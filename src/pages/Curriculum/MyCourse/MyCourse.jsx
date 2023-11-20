import React, { useState, useEffect, Fragment } from "react";
import * as S from "./MyCourse.style.jsx";

// import MajorForm from "../../../components/MajorForm/MajorForm.jsx";

import * as FS from "../../../components/MajorForm/MajorForm.style.jsx";

const MajorForm = ({ onFormSubmit }) => {
  const [year, setYear] = useState("1학년");
  const [semester, setSemester] = useState("1학기");
  const [type, setType] = useState("교양필수");

  const [generalRequire, setGeneralRequire] = useState(0);
  const [generalElective, setGeneralElective] = useState(0);
  const [advMajorRequire, setAdvMajorRequire] = useState(0);
  const [advMajorElective, setAdvMajorElective] = useState(0);

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

      onFormSubmit(selectedYear, selectedSemester, course);
    }
  };

  return (
    <FS.Container>
      <FS.FormContainer>
        <FS.Form onSubmit={submit}>
          <FS.Select onChange={(e) => setYear(e.target.value)}>
            <FS.Option value="1학년">1학년</FS.Option>
            <FS.Option value="2학년">2학년</FS.Option>
            <FS.Option value="3학년">3학년</FS.Option>
            <FS.Option value="4학년">4학년</FS.Option>
          </FS.Select>
          <FS.Select onChange={(e) => setSemester(e.target.value)}>
            <FS.Option value="1학기">1학기</FS.Option>
            <FS.Option value="2학기">2학기</FS.Option>
            <FS.Option value="여름학기">여름학기</FS.Option>
            <FS.Option value="겨울학기">겨울학기</FS.Option>
          </FS.Select>
          <FS.Input name="name" placeholder="교과목명" />
          <FS.Input
            style={{ width: "5vw" }}
            name="credit"
            placeholder="학점"
            type="number"
          />
          <FS.Select
            style={{ width: "7vw" }}
            onChange={(e) => setType(e.target.value)}
          >
            <FS.Option value="교양필수">교양필수</FS.Option>
            <FS.Option value="교양선택">교양선택</FS.Option>
            <FS.Option value="전공필수">전공필수</FS.Option>
            <FS.Option value="전공선택">전공선택</FS.Option>
          </FS.Select>

          <FS.Submit type="submit">확인</FS.Submit>
        </FS.Form>
      </FS.FormContainer>
    </FS.Container>
  );
};

const MyCourseTotal = ({
  generalRequire,
  generalElective,
  advMajorRequire,
  advMajorElective,
}) => {
  const [advMajorTotal, setAdvMajorTotal] = useState(0);
  const [majorTotal, setMajorTotal] = useState(0);

  useEffect(() => {
    const calculatedAdvMajorTotal = advMajorRequire + advMajorElective;
    const calculatedMajorTotal =
      advMajorRequire + advMajorElective + generalRequire + generalElective;

    setAdvMajorTotal(calculatedAdvMajorTotal);
    setMajorTotal(calculatedMajorTotal);
  }, [generalRequire, generalElective, advMajorRequire, advMajorElective]);

  return (
    <FS.CountCreditContainer>
      <FS.Table>
        <FS.Tr>
          <FS.Th>총 학점</FS.Th>
          <FS.Th>교양필수</FS.Th>
          <FS.Th>교양선택</FS.Th>
          <FS.Th>전공필수</FS.Th>
          <FS.Th>전공선택</FS.Th>
          <FS.Th>전공 계</FS.Th>
        </FS.Tr>
        <FS.Tr>
          <FS.Td>{majorTotal}</FS.Td>
          <FS.Td>{generalRequire}</FS.Td>
          <FS.Td>{generalElective}</FS.Td>
          <FS.Td>{advMajorRequire}</FS.Td>
          <FS.Td>{advMajorElective}</FS.Td>
          <FS.Td>{advMajorTotal}</FS.Td>
        </FS.Tr>
      </FS.Table>
    </FS.CountCreditContainer>
  );
};

const MyCourseList = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [submittedCourseData, setSubmittedCourseData] = useState([]);

  const [totalCredits, setTotalCredits] = useState(0);
  const [totalMojorCredits, setTotalMojorCredits] = useState(0);

  const calculateTotalCredits = (courses) => {
    let totalCredits = 0;
    let totalMojorCredits = 0;

    const majorCourseData = courses.filter(
      (course) => course.type === "전공선택" || course.type === "전공필수"
    );

    courses.forEach((course) => {
      totalCredits += course.credit;
    });
    majorCourseData.forEach((course) => {
      totalMojorCredits += course.credit;
    });

    setTotalCredits(totalCredits);
    setTotalMojorCredits(totalMojorCredits);
  };

  useEffect(() => {
    setTotalCredits(totalCredits);
    setTotalMojorCredits(totalMojorCredits);
  }, [totalCredits, totalMojorCredits]);

  useEffect(() => {
    if (selectedYear && selectedSemester && submittedCourseData) {
      console.log(submittedCourseData);
    }
  }, [selectedYear, selectedSemester, submittedCourseData]);

  const handleFormSubmit = (year, semester, courseData) => {
    setSelectedYear(year);
    setSelectedSemester(semester);
    const newCourseData = [...submittedCourseData, courseData];
    setSubmittedCourseData(newCourseData);
    calculateTotalCredits(newCourseData);
  };

  const deleteCourse = (courseName) => {
    const newCourseData = submittedCourseData.filter(
      (course) => course.courseName !== courseName
    );
    setSubmittedCourseData(newCourseData);
    calculateTotalCredits(newCourseData);
  };

  return (
    <S.Container>
      <S.SemesterContainer>
        <S.Line />
        <MajorForm onFormSubmit={handleFormSubmit} />
        <FS.CountCreditContainer>
          <FS.Table>
            <FS.Tr>
              <FS.Th>총 학점</FS.Th>
              <FS.Th>교양필수</FS.Th>
              <FS.Th>교양선택</FS.Th>
              <FS.Th>전공필수</FS.Th>
              <FS.Th>전공선택</FS.Th>
              <FS.Th>전공 계</FS.Th>
            </FS.Tr>
            <FS.Tr>
              <FS.Td>{totalCredits}</FS.Td>
              <FS.Td>{}</FS.Td>
              <FS.Td>{}</FS.Td>
              <FS.Td>{}</FS.Td>
              <FS.Td>{}</FS.Td>
              <FS.Td>{totalMojorCredits}</FS.Td>
            </FS.Tr>
          </FS.Table>
        </FS.CountCreditContainer>
      </S.SemesterContainer>
      <div>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 1학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "1학년" &&
                        course.semester === "1학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                            <button
                              onClick={() => deleteCourse(course.courseName)}
                            >
                              삭제
                            </button>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 여름학기</S.SemesterText>
          <S.Table>
            {submittedCourseData && (
              <Fragment>
                {submittedCourseData.map((course, index) => (
                  <Fragment key={index}>
                    {course.year === "1학년" &&
                      course.semester === "여름학기" && (
                        <S.Tr>
                          <S.TdTextLeftAlign>
                            {course.courseName}
                          </S.TdTextLeftAlign>
                          <S.TdTextCenter>{course.type}</S.TdTextCenter>
                          <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                        </S.Tr>
                      )}
                  </Fragment>
                ))}
              </Fragment>
            )}
          </S.Table>
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 2학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "1학년" &&
                        course.semester === "2학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>1학년 겨울학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "1학년" &&
                        course.semester === "겨울학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>2학년 1학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "2학년" &&
                        course.semester === "1학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>2학년 여름학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "2학년" &&
                        course.semester === "여름학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>2학년 2학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "2학년" &&
                        course.semester === "2학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>2학년 겨울학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "2학년" &&
                        course.semester === "겨울학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>3학년 1학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "3학년" &&
                        course.semester === "1학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>3학년 여름학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "3학년" &&
                        course.semester === "여름학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>3학년 2학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "3학년" &&
                        course.semester === "2학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>3학년 겨울학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "3학년" &&
                        course.semester === "겨울학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>4학년 1학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "4학년" &&
                        course.semester === "1학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>4학년 여름학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "4학년" &&
                        course.semester === "여름학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>4학년 2학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "4학년" &&
                        course.semester === "2학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
        <S.SemesterContainer>
          <S.Line />
          <S.SemesterText>4학년 겨울학기</S.SemesterText>
          {submittedCourseData && (
            <S.Table>
              {submittedCourseData && (
                <Fragment>
                  {submittedCourseData.map((course, index) => (
                    <Fragment key={index}>
                      {course.year === "4학년" &&
                        course.semester === "겨울학기" && (
                          <S.Tr>
                            <S.TdTextLeftAlign>
                              {course.courseName}
                            </S.TdTextLeftAlign>
                            <S.TdTextCenter>{course.type}</S.TdTextCenter>
                            <S.TdTextCenter>{course.credit}학점</S.TdTextCenter>
                          </S.Tr>
                        )}
                    </Fragment>
                  ))}
                </Fragment>
              )}
            </S.Table>
          )}
        </S.SemesterContainer>
      </div>
    </S.Container>
  );
};

export default MyCourseList;
