import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "/contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Space awaits! Workshop  on Technology Behind Satellites ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Decode the lingo of rockets, satellites, and space travel!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "Learnings",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  // {
  //   id: 3,
  //   title: "Space enthusiast with a passion for technology.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  {
    id: 5,
    title: "Compete to get a chance to work with Space Enthusiast!",
    description: "Train, compete, win!",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-28",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to work on real satellite Mission?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "It was a nice interacting and knowing about the robotics and the new technology and also about the minature robots. Thanking you for giving me such an amazing insights and knwoledge about the robots.",
    name: "Capt. Ayush Tyagi",
    title: "",
  },
  {
    quote:
      "Nice Startup ! learn new things and know about new technology. Great Work.",
    name: "Astha & Esha",
    title: "",
  },
  {
    quote:
      "It was a fun experience, and also got me interested to check more of it",
    name: "Vighnesh",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: "Working in a good field. Keep On!",
    name: "Saransh Sahu",
    title: "",
  },
  {
    quote: "Nice Innovation to build the digital India ",
    name: "Kunal",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "Arduino",
    img: "/arduino.png",
  },
  {
    id: 2,
    name: "TinkerCAD",
    img: "/tinkercad.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 3,
    name: "Code.org",
    img: "/code-org.png",
  },

  {
    id: 4,
    name: "micro:bit",
    img: "/micro-bit.png",
  },
  {
    id: 5,
    name: "Raspberry Pi",
    img: "/raspberry.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Earn a Certificate in Satellite and Space Technology",
    desc: "Learn awesome skills and earn a special certificate in satellite and space technology, opening doors to fun and exciting adventures in space exploration!",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
  },
  {
    id: 2,
    title: "Gain valuable skills:",
    desc: " From coding to data analysis to presentation techniques, you'll acquire in-demand skills for the future.",
    className: "md:col-span-2",
    thumbnail: "/exp2.png",
  },
  {
    id: 3,
    title: "Hands on with satellite payloads",
    desc: "Explore the exciting world of satellite payloads with hands-on activities that ignite your curiosity and fuel your passion for space technology!",
    className: "md:col-span-2",
    thumbnail: "/exp3.png",
  },
  {
    id: 4,
    title: "Opportunity to Join a Real Satellite Mission",
    desc: "Selected students will collaborate on an actual space mission, becoming integral to groundbreaking advancements in space exploration",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/insta.svg",
    link: "https://instagram.com/skillonation_kids?igshid=ZDdkNTZiNTM=",
  },
  {
    id: 2,
    img: "/youtube.svg",
    link: "https://www.skillonationkids.com/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/company/skillonationedtech/",
  },
  {
    id: 4,
    img: "/facebook.svg",
    link: "https://www.facebook.com/Skillonation/",
  },
];
