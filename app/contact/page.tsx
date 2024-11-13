"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { log } from "console";

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

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
  e.preventDefault();
  setLoading(true);

  console.log(process.env.NEXT_PUBLIC_VITE_APP_EMAILJS_SERVICE_ID);
  console.log(process.env.NEXT_PUBLIC_VITE_APP_EMAILJS_TEMPLATE_ID);
  console.log(process.env.NEXT_PUBLIC_VITE_APP_EMAILJS_PUBLIC_KEY);

  // Send the email using EmailJS
  var templateParams = {
  name: 'James',
  notes: 'Check this out!',
};
  emailjs
    .send(
      process.env.NEXT_PUBLIC_VITE_APP_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_VITE_APP_EMAILJS_TEMPLATE_ID || "",
      templateParams,
      process.env.NEXT_PUBLIC_VITE_APP_EMAILJS_PUBLIC_KEY || ""
    )
    .then(
      (response) => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
        console.log('SUCCESS!', response.status, response.text);
      },
      (error: any) => {
        setLoading(false);
        console.error(error);
        alert("Ahh, something went wrong. Please try again.");
      }
    );
};


  return (
    <div
      className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center items-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className=" bg-black-300 py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-black-300 py-4 px-6  placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-black-300 py-4 px-6 placeholder:text-white-200 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-black-300 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-800"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
