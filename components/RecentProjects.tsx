"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import SparklesText from "./magicui/sparkles-text";
import { TracingBeam } from "./ui/tracing-beam";

const RecentProjects = () => {
  return (
    <div
      id="about"
      className="py-20 rounded-2xl z-30 relative overflow-hidden"
      style={{
        //   background:
        //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <h1 className="heading text-xl px-5">
        Embark on a &nbsp;
        <SparklesText text="  15 Day Mission" /> of Discovery!
        <p className="my-12 text-[30px]">Workshop Details</p>
      </h1>
      <TracingBeam className="px-6 ">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black-200 text-white rounded-full text-2xl w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default RecentProjects;

const dummyContent = [
  {
    title: "Eyes on the Skies: Become a Satellite Savant",
    description: (
      <>
        <p>
          Dive into the fascinating world of satellites, the silent guardians
          orbiting our planet. Discover how these incredible machines work, the
          different types, and their vital role in monitoring our environment.
          Explore the mysteries of UV radiation and its impact on Earth, and
          learn how the ozone layer protects us. With eye-opening videos and fun
          discussions, you’ll be captivated by the wonders of space. Become a
          data detective and see how satellites gather crucial environmental
          information, especially about UV radiation, through exciting software
          simulations and hands-on activities. Get ready for an adventure that
          will spark your curiosity and uncover the secrets of our planet!
        </p>
      </>
    ),
    badge: "Phase 1",
    image: "/phase1.jpg",
  },
  {
    title: "From Data to Action: Code Your Way to Solutions",
    description: (
      <>
        <p>
          Dive into the exciting world of Node-MCU microcontrollers and sensors,
          the building blocks of countless cool inventions. Learn the basics of
          programming and unlock the power to control these tiny but mighty
          devices. Connect UV sensors to your Node-MCU, write code to collect
          real-time data, and imagine building your own UV monitoring station.
          Unleash your inner detective by analyzing the data you collect,
          spotting trends, and troubleshooting like a pro. Turn your coding
          skills into real-world solutions and make a big impact. Get ready for
          a fun and hands-on adventure in tech wizardry!
        </p>
      </>
    ),
    badge: "Phase 2",
    image: "/phase2.png",
  },
  {
    title: "Share Your Story: Become a Science Communicator",
    description: (
      <>
        <p>
          Turn your data into exciting scientific reports that showcase your
          amazing discoveries. Learn the secrets of clear communication and how
          to create eye-catching visuals. Step into the spotlight and share your
          findings with confidence, mastering the art of engaging presentations.
          Team up with fellow space explorers on a final project to predict UV
          intensity and present your results to a panel. This is your chance to
          shine and show off everything you’ve learned, becoming a true science
          superstar!
        </p>
      </>
    ),
    badge: "Phase 3",
    image: "/phase3.webp",
  },
];
