import "./App.css";
import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Curriculum from "./pages/Curriculum/Curriculum";
import MajorInfo from "./pages/MajorInfo/MajorInfo";
import Member from "./pages/Member/Member";
import StudentActivity from "./pages/StudentActivity/StudentActivity";
import Home from "./pages/Home/Home";

import PageLayout from "./pages/PageLayout/PageLayout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <PageLayout header={<Header />} footer={<Footer />}>
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
    </PageLayout>
  );
}

export default App;
