"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { LampDemo } from "./LampEffect";

export function ShortForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push(
          "https://razorpay.com/payment-button/pl_OOEtFEKVjU02OS/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
        );
      } else {
        alert("Error saving form data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div
      id="shortform"
      className="flex flex-wrap w-full justify-around items-center"
    >
      <LampDemo />
      <div className="relative max-w-md mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black-200">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200"></h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"></p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Tyler"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="bg-black-100"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="username@email.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="number">Phone Number</Label>
            <Input
              id="number"
              placeholder="9876543210"
              type="tel"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          {/* <button
          className="bg- w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
        </button> */}
          <div className="flex items-center justify-center">
            <MagicButton
              title="
          Register Now ! &rarr;"
              type="submit"
              otherClasses="bg- w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            />
          </div>
          <BottomGradient />
        </form>
      </div>
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
