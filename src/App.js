import "./App.css";
import { React, Fragment, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Curriculum from "./pages/Curriculum/Curriculum";
import MajorInfo from "./pages/MajorInfo/MajorInfo";
import Member from "./pages/Member/Member";
import StudentActivity from "./pages/StudentActivity/StudentActivity";
import CurriculumDropdown from "./components/Dropdown/CurriculumDropdown";
import MajorInfoDropdown from "./components/Dropdown/MajorInfoDropdown";
import MemberDropdown from "./components/Dropdown/MemberDropdown";
import StudentActivityDropdown from "./components/Dropdown/StudentActivityDropdown";
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
  const [isDropped, setIsDropped] = useState(false);

  return (
    <Fragment>
      <header className="Navi">
        <Link to={"/"} className="titleBtn">
          <span className="title">숙명여자대학교</span>
          <span className="subTitle">소프트웨어학부</span>
        </Link>
        <div className="menuBar">
          <ul
            className="menu"
            onClick={() => {
              setIsDropped(!isDropped);
            }}
          >
            전공소개
            {isDropped && <MajorInfoDropdown />}
          </ul>
          <ul
            className="menu"
            onClick={() => {
              setIsDropped(!isDropped);
            }}
          >
            커리큘럼
            {isDropped && <CurriculumDropdown />}
          </ul>
          <ul
            className="menu"
            onClick={() => {
              setIsDropped(!isDropped);
            }}
          >
            구성원
            {isDropped && <MemberDropdown />}
          </ul>
          <ul
            className="menu"
            onClick={() => {
              setIsDropped(!isDropped);
            }}
          >
            학생활동
            {isDropped && <StudentActivityDropdown />}
          </ul>
        </div>
      </header>
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
