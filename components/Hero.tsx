import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import BannerSection6 from "./Banner";
import { MovingBorder } from "./ui/MovingBorders";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-28">
      {/* <BannerSection6 /> */}

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 bg-white/15 py-2 px-3 rounded-xl">
            Decode satellites, master data, and code for the cosmos!
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Launch Your Future: Become a Certified UV Hunter in 15 days!"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-xl">
            Join Skillonation Kids for a 15 day adventure in space exploration,
            coding, and environmental science!
          </p>

          <div className="flex justify-center items-baseline">
            <Link href="#shortform">
              <MagicButton
                title="Take Off Now!"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <p className=" underline underline-offset-2 text-purple-400 mx-3 font-bold">
              Only few seats left !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
