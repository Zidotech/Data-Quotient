import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
