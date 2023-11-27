import React from "react";
import PublicNavbar from "../components/PublicNavbar";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Travel from "../components/Travel";
import Destination from "../components/Destination";
function Home() {
  return (
    <div>
      <PublicNavbar />
      <Hero />
      <Offers />
      <Travel />
      <Destination/>
    </div>
  );
}

export default Home;
