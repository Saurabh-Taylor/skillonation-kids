"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients, { Companies } from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import StarsCanvas from "@/components/canvas";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import { Importance } from "@/components/Importance";
import { Gallery } from "@/components/Gallery";
import { ShortForm } from "@/components/ShortForm";
import Details from "@/components/Details";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col flex-wrap overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <StarsCanvas />
        <Details />
        <Companies />
        <Grid />
        <RecentProjects />
        <Importance />
        <Experience />
        <ShortForm />
        <Clients />
        <Gallery />
        {/* <Approach /> */}
        {/* <BackgroundBoxesDemo /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
