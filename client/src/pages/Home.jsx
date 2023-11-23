import React from "react";
import PublicNavBar from "../components/PublicNavBar";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Travel from "../components/Travel";
import Destination from "../components/Destination";
function Home() {
  return (
    <div>
      <PublicNavBar />
      <Hero />
      <Offers />
      <Travel />
      <Destination/>
    </div>
  );
}

export default Home;
