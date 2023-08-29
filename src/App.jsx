import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Javascript, MobileDevelopment, WebDevelopment } from "./pages";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/mobile-development" element={<MobileDevelopment />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
