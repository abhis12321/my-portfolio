import React from "react";
import Skills from "./_components/Skills";
import About from "./_components/About";
import GithubCintributionGraph from "./_components/GithubContributionGraph";
import CodingProfile from "./_components/CodingProfile";
import Contact from "./_components/Contact";
import PWC_Badges from "./_components/PWC_Badges";
import HomeView from "./_components/HomeView";

export default function page() {
  return (
    <div className="">
      <HomeView />
      <About />
      <Skills />
      <PWC_Badges />
      <CodingProfile />
      <GithubCintributionGraph />
      <Contact />
    </div>
  );
}
