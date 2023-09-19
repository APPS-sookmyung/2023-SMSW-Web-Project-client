import "./App.css";
import { React, Fragment, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Curriculum from "./pages/Curriculum/Curriculum";
import MajorInfo from "./pages/MajorInfo/MajorInfo";
import Member from "./pages/Member/Member";
import StudentActivity from "./pages/StudentActivity/StudentActivity";
import Course from "./pages/Curriculum/Course/Course.js";
import Home from "./pages/Home/Home";
import GraduationRequirements from "./pages/Curriculum/GraduationRequirements/GraduationRequirements.js";
import Intro from "./pages/MajorInfo/Intro/Intro.js";
import AdvanceField from "./pages/MajorInfo/AdvanceField/AdvanceField.js";
import PracticeRooms from "./pages/MajorInfo/PracticeRooms/PracticeRooms.js";
import LocationContact from "./pages/MajorInfo/LocationContact/LocationContact.js";
import Professor from "./pages/Member/Professor/Professor.js";
import OrganizationChart from "./pages/Member/OrganizationChart/OrganizationChart.js";
import Club from "./pages/StudentActivity/Club/Club.js";
import StudentCouncil from "./pages/StudentActivity/StudentCouncil/StudentCouncil.js";

function App() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Fragment>
      <Fragment>
        <header className="Navi">
          <Link to={"/"} className="titleBtn">
            <span className="title">숙명여자대학교</span>
            <span className="subTitle">소프트웨어학부</span>
          </Link>
          <div>
            <ul>
              <div
                className="menuBar"
                onMouseOut={handleMouseOut}
                onMouseOver={handleMouseOver}
              >
                <div className="Dropdown">
                  <div className="menu">전공소개</div>
                  <div>
                    {isHovering && (
                      <div className="DropdownContainer">
                        <Link className="DropdownMenu" to={"/MajorInfo/Intro"}>
                          개요
                        </Link>
                        <Link
                          className="DropdownMenu"
                          to={"/MajorInfo/AdvanceField"}
                        >
                          진출분야
                        </Link>
                        <Link
                          className="DropdownMenu"
                          to={"/MajorInfo/PracticeRooms"}
                        >
                          실습실
                        </Link>
                        <Link
                          className="DropdownMenu"
                          to={"/MajorInfo/LocationContact"}
                        >
                          위치와 연락처
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="Dropdown">
                  <div className="menu">커리큘럼</div>
                  <div>
                    {isHovering && (
                      <div className="DropdownContainer">
                        <Link
                          className="DropdownMenu"
                          to={"/Curriculum/GraduationRequirements"}
                        >
                          졸업요건
                        </Link>
                        <Link
                          className="DropdownMenu"
                          to={"/Curriculum/Course"}
                        >
                          이수과목
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="Dropdown">
                  <div className="menu">구성원</div>
                  <div>
                    {isHovering && (
                      <div className="DropdownContainer">
                        <Link className="DropdownMenu" to={"/Member/Professor"}>
                          교수소개
                        </Link>
                        <Link
                          className="DropdownMenu"
                          to={"/Member/OrganizationChart"}
                        >
                          조직도
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="Dropdown">
                  <div className="menu">학생활동</div>
                  <div>
                    {isHovering && (
                      <div className="DropdownContainer">
                        <Link
                          className="DropdownMenu"
                          to={"/StudentActivity/Club"}
                        >
                          학회
                        </Link>
                        <Link
                          className="DropdownMenu"
                          to={"/StudentActivity/StudentCouncil"}
                        >
                          학생회
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </header>
      </Fragment>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Curriculum">
          <Route path="" element={<Curriculum />} />
          <Route path="Course" element={<Course />} />
          <Route
            path="GraduationRequirements"
            element={<GraduationRequirements />}
          />
        </Route>
        <Route path="/MajorInfo">
          <Route path="" element={<MajorInfo />} />
          <Route path="Intro" element={<Intro />} />
          <Route path="AdvanceField" element={<AdvanceField />} />
          <Route path="PracticeRooms" element={<PracticeRooms />} />
          <Route path="LocationContact" element={<LocationContact />} />
        </Route>
        <Route path="/Member">
          <Route path="" element={<Member />} />
          <Route path="Professor" element={<Professor />} />
          <Route path="OrganizationChart" element={<OrganizationChart />} />
        </Route>
        <Route path="/StudentActivity">
          <Route path="" element={<StudentActivity />} />
          <Route path="Club" element={<Club />} />
          <Route path="StudentCouncil" element={<StudentCouncil />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
