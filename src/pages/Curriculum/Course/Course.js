import React, { useState } from "react";
import { CScourseList, SCcourseList, DScourseList } from "../Course/CourseList";
import "./Course.css";
import DSGraduationRequirements from "../GraduationRequirements/DSGraduationRequirements";
import CSGraduationRequirements from "../GraduationRequirements/CSGraduationRequirements";
import SCGraduationRequirements from "../GraduationRequirements/SCGraduationRequirements";

const ViewcourseList = ({ course }) => {
  return (
    <div>
      <table className="classTable">
        <tbody>
          <tr className="classRow">
            <td className="classId">{course.id}</td>
            <td className="className">{course.name}</td>
            <td className="classType">{course.type}</td>
            <td className="classGrade">{course.grade}학년</td>
            <td className="classTerm">{course.term}학기</td>
            <td className="classCredit">{course.credit}</td>
            <td className="classDetail">{course.detail}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Course = () => {
  const [isCSList, setIsCSList] = useState(true);
  const [isSCList, setIsSCList] = useState(false);
  const [isDSList, setIsDSList] = useState(false);

  return (
    <div className="CourseContainer">
      <div className="selectMajorContainer">
        <div
          className="selectMajorBtn"
          onClick={() => {
            setIsCSList((isCSList) => true);
            setIsSCList((isSCList) => false);
            setIsDSList((isDSList) => false);
          }}
        >
          <p>컴퓨터과학전공</p>
        </div>
        <div
          className="selectMajorBtn"
          onClick={() => {
            setIsCSList((isCSList) => false);
            setIsSCList((isSCList) => true);
            setIsDSList((isDSList) => false);
          }}
        >
          <p>소프트웨어융합전공</p>
        </div>
        <div
          className="selectMajorBtn"
          onClick={() => {
            setIsCSList((isCSList) => false);
            setIsSCList((isSCList) => false);
            setIsDSList((isDSList) => true);
          }}
        >
          <p>데이터사이언스전공</p>
        </div>
      </div>

      {isCSList ? (
        <div>
          <div className="selectedMajor">
            <p>컴퓨터과학전공 교과목</p>
          </div>
          <div>
            <CSGraduationRequirements />
          </div>
        </div>
      ) : null}
      {isSCList ? (
        <div>
          <div className="selectedMajor">
            <p>소프트웨어융합전공 교과목</p>
          </div>
          <div>
            <SCGraduationRequirements />
          </div>
        </div>
      ) : null}
      {isDSList ? (
        <div>
          <div className="selectedMajor">
            <p>데이터사이언스전공 교과목</p>
          </div>
          <div>
            <DSGraduationRequirements />
          </div>
        </div>
      ) : null}

      <table className="classTheadTable">
        <tbody>
          <tr className="classThead">
            <td className="classId" style={{ fontSize: "15px" }}>
              과목코드
            </td>
            <td className="className" style={{ fontSize: "15px" }}>
              교과목명
            </td>
            <td className="classType" style={{ fontSize: "15px" }}>
              교과구분
            </td>
            <td className="classGrade" style={{ fontSize: "15px" }}>
              수강학년
            </td>
            <td className="classTerm" style={{ fontSize: "15px" }}>
              수강학기
            </td>
            <td className="classCredit" style={{ fontSize: "15px" }}>
              학점
            </td>
            <td className="classDetail" style={{ fontSize: "15px" }}>
              과목개요
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        {isCSList ? (
          <div>
            {CScourseList.map((course) => (
              <ViewcourseList course={course} key={course.id} />
            ))}
          </div>
        ) : null}
        {isSCList ? (
          <div>
            {SCcourseList.map((course) => (
              <ViewcourseList course={course} key={course.id} />
            ))}
          </div>
        ) : null}
        {isDSList ? (
          <div>
            {DScourseList.map((course) => (
              <ViewcourseList course={course} key={course.id} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Course;
