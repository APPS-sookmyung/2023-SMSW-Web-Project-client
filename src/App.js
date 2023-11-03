import "./App.css";
import { React } from "react";
import { Routes, Route } from "react-router-dom";

import Curriculum from "./pages/Curriculum/Curriculum";
import MajorInfo from "./pages/MajorInfo/MajorInfo";
import Member from "./pages/Member/Member";
import StudentActivity from "./pages/StudentActivity/StudentActivity";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Curriculum">
        <Route path="" element={<Curriculum />} />
      </Route>
      <Route path="/MajorInfo">
        <Route path="" element={<MajorInfo />} />
      </Route>
      <Route path="/Member">
        <Route path="" element={<Member />} />
      </Route>
      <Route path="/StudentActivity">
        <Route path="" element={<StudentActivity />} />
      </Route>
    </Routes>
  );
}

export default App;
