"use client";
import React, { use, useState } from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { ButtonBorder } from "./ui/MovingBorders";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function BannerSection6() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && (
        <section id="banner" className=" py-5 container mx-auto z-50 sticky">
          <div
            className="mb-4 shadow-sm px-6 py-2 flex flex-wrap items-center justify-between gap-x-6 rounded-2xl"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <Typography
              variant="h6"
              color="white"
              className="text-md"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Discount - early bird offer , only 5 days left !!
            </Typography>

            <IconButton
              color="white"
              variant="text"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <XMarkIcon
                className="text-white w-4 h-4 stroke-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(false);
                }}
              />
            </IconButton>
          </div>
        </section>
      )}
    </div>
  );
}

export default BannerSection6;
