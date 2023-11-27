import React from "react";
import PublicNavBar from "../components/PublicNavbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Offers from "../components/Offers";
import choose from "../components/choose";
import Travel from "../components/Travel";


function About() {
  return (
    <div>
      <PublicNavBar />
      <Hero />
      <Destination />
      <Offers />
      <Travel/>
      <Choose/>
    </div>
  );
}

export default About;
