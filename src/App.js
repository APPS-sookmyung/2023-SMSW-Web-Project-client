import "./App.css";
import { React, Fragment, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Curriculum from "./pages/Curriculum/Curriculum";
import MajorInfo from "./pages/MajorInfo/MajorInfo";
import Member from "./pages/Member/Member";
import StudentActivity from "./pages/StudentActivity/StudentActivity";
import Dropdown from "./components/Dropdown/Dropdown";
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
                // onClick={() => {
                //   setIsDropped(!isDropped);
                // }}
                onMouseOver={handleMouseOver}
              >
                <div className="menu">전공소개</div>
                <div className="menu">커리큘럼</div>
                <div className="menu">구성원</div>
                <div className="menu">학생활동</div>
              </div>
            </ul>
          </div>
        </header>
      </Fragment>
      <div className="menuDropdownContainer">
        <div
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
          className="menuDropdown"
        >
          {isHovering && <Dropdown />}
        </div>
        {/* <div className="menuDropdown">{<Dropdown />}</div> */}
      </div>
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
