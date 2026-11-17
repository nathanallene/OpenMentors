import Header from "../components/Header";
import Services from "../components/Services";
import Approach from "../components/Approach";
import WhatWeDo from "../components/WhatWeDo";
import EngineeringServices from "../components/EngineeringServices";
import Insights from "../components/Insights";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Services />
      <Approach />
      <WhatWeDo />
      <EngineeringServices />
      <Insights />
      <FAQ />
      <Contact />
    </main>
  );
}
