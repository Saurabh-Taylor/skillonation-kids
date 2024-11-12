"use client";
import { ParallaxScroll } from "./ui/parallax-scroll";

export function Gallery() {
  return <ParallaxScroll images={images} />;
}

const images = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img6.jpg",
  "/img5.jpeg",
  "/img4.jpeg",
];
