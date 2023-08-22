import React from "react";
import ServicesCard from "../pages/ServicesCard";
import Header from "../components/Header";
import Clients from "../pages/Clients";
import Hiring from "../pages/Hiring";
import Why from "../pages/Why";

const Home = () => {
  return (
    <div>
      <Header />
      <ServicesCard />
      <Clients />
      <Hiring />
      <Why />
    </div>
  );
};

export default Home;
