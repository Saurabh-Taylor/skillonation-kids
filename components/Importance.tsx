"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Hands on Experience",
    description: "with satellite technology and space science",
    time: "",

    icon: "👨‍🎓",
    color: "#00C9A7",
  },
  {
    name: "Understanding UV radiations",
    description: "MEffect on Ozone layer",
    time: "",
    icon: "🌎",
    color: "#FFB800",
  },
  {
    name: "Develop Future Talent",
    description: "Develop future talent in space science",
    time: "",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Boost Career Growth",
    description: "Boost your future career prospects",
    time: "",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function Importance() {
  return (
    <section
      className="py-20 rounded-2xl relative my-12"
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
      <h1 className="heading">
        Why Join Our
        <span className="text-purple"> Mission</span>
      </h1>
      <div className="flex w-full justify-center  my-6 py-6">
        <div className="relative flex items-center max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden">
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
