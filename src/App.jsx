import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  ApiDevelopment,
  Careers,
  CloudSolutions,
  Coaching,
  CorporateTraining,
  DataAnalysis,
  DataEngineering,
  DevOps,
  DevSecOps,
  DiscoveryWorkshop,
  HandsOnTraining,
  ITManage,
  Javascript,
  MachineLearning,
  MobileDevelopment,
  QualityTesting,
  SecOps,
  Services,
  SystemAnalysis,
  Team,
  TeamExtension,
  WebDevelopment,
} from "./pages";

function App() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // Listen to changes in location.pathname
  return (
    <div className=" overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/mobile-development" element={<MobileDevelopment />} />
        <Route path="/devops" element={<DevOps />} />
        <Route path="/sec-ops" element={<SecOps />} />
        <Route path="/dev-sec-ops" element={<DevSecOps />} />
        <Route path="/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/data-engineering" element={<DataEngineering />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
        <Route path="/IT-manage-services" element={<ITManage />} />
        <Route path="/team-extension" element={<TeamExtension />} />
        <Route path="/api-development" element={<ApiDevelopment />} />
        <Route path="/system-analysis" element={<SystemAnalysis />} />
        <Route path="/discovery-workshops" element={<DiscoveryWorkshop />} />
        <Route
          path="/quality-assurance-and-testing"
          element={<QualityTesting />}
        />
        <Route path="/corporate-trainings" element={<CorporateTraining />} />
        <Route path="/coaching-or-mentoring" element={<Coaching />} />
        <Route path="/hands-on-training" element={<HandsOnTraining />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
