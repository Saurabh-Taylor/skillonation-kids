"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import EarthCanvas from "@/components/canvas/Earth";
import { Textarea } from "./ui/textarea";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { z } from "zod";

const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-white-200 uppercase tracking-wider",
};

const signupFormSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  class: z.string().min(1, "Class is required"),
  school: z.string().min(1, "School is required"),
  marks: z.string().regex(/^\d+$/, "Marks should be a number"),
  parentsname: z.string().min(1, "Parents/Guardian name is required"),
  phnumber: z.string().regex(/^\d{10}$/, "Contact Number should be 10 digits"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(1, "City/State is required"),
  achievements: z.string().optional(),
});

export function SignupFormDemo({
  params,
}: {
  params: { firstname: string; lastname: string; email: string };
}) {
  const [formData, setForm] = useState({
    firstname: params.firstname,
    lastname: params.lastname,
    class: "",
    school: "",
    marks: "",
    parentsname: "",
    phnumber: "",
    email: params.email,
    city: "",
    achievements: "",
  });

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data: ", formData);

    // Validate the form data using Zod schema
    const validation = signupFormSchema.safeParse(formData);

    if (!validation.success) {
      // Handle validation errors
      console.error(
        "Validation Errors:",
        validation.error.flatten().fieldErrors
      );
      alert("Please correct the errors in the form");
      return;
    }

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form data saved successfully");
      } else {
        alert("Error saving form data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div
      className={`flex justify-center xl:flex-row overflow-hidden relative rounded-2xl z-30 py-10`}
      style={{ background: "rgb(4,7,29)" }}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 p-8 rounded-2xl justify-center"
      >
        <p className={styles.sectionSubText}>Ready to embark on the journey?</p>
        <h3 className={styles.sectionHeadText}>Book a seat for you!!</h3>

        <form className="my-8" onSubmit={submitForm}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Tyler"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Durden"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="class">Class</Label>
            <Input
              id="class"
              name="class"
              placeholder="12th"
              type="text"
              value={formData.class}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="school">School</Label>
            <Input
              id="school"
              name="school"
              placeholder="Enter Your School"
              type="text"
              value={formData.school}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="marks">Previous Marks/Percentage</Label>
            <Input
              id="marks"
              name="marks"
              placeholder="Enter Your Percentage here"
              type="number"
              value={formData.marks}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="parentsname">Parents/Guardian name</Label>
              <Input
                id="parentsname"
                name="parentsname"
                placeholder="Parents Name"
                type="text"
                value={formData.parentsname}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="phnumber">Contact Number</Label>
              <Input
                id="phnumber"
                name="phnumber"
                placeholder="8574857485"
                type="tel"
                value={formData.phnumber}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="city">City/State</Label>
            <Input
              id="city"
              name="city"
              placeholder="Mumbai-Maharashtra"
              type="text"
              value={formData.city}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="achievements">Special Achievements</Label>
            <Textarea
              id="achievements"
              name="achievements"
              placeholder="Enter Your Achievements here (Olympiads, NTSE, KVPY, Science or Coding Competitions, etc.)"
              value={formData.achievements}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <BottomGradient />
          <div className="flex justify-center">
            <MagicButton
              title="Register Now"
              icon={<FaLocationArrow />}
              position="right"
              type="submit"
            />
          </div>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </motion.div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
