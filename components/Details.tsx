import React from "react";

const Details = () => {
  return (
    <div className="relative flex flex-col sm:flex-row justify-around mb-32 items-center p-5 bg-black-100 rounded-xl">
      <div className="flex flex-col justify-center items-center gap-2 sm:flex-1 sm:pr-4 border-b-2 sm:border-b-0 sm:border-r-2 sm:pb-0 pb-4">
        <h1 className="text-purple text-xl font-semibold">
          Learning Investment
        </h1>
        <div className="flex gap-2 items-center">
          <span className=" text-gray-500  font-medium relative">
            <span className="before:content-[''] before:absolute before:left-0 before:right-0 before:top-1/2 before:border-t-2 before:border-[#cbacf9] before:-rotate-12">
              &#8377; 5000/-
            </span>
          </span>
          <span className=" font-semibold">&#8377; 3900/-</span>
        </div>

      </div>
      <div className="flex flex-col justify-center items-center gap-2 sm:flex-1 sm:px-4 border-b-2 sm:border-b-0 sm:border-r-2 sm:pb-0 pb-4 sm:pt-0 pt-4">
        <h1 className="text-purple text-xl font-semibold">Start Date</h1>
        <p>20 Nov. 2024</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 sm:flex-1 sm:pl-4 border-b-2 sm:border-b-0 sm:pb-0 pb-4 sm:pt-0 pt-4">
        <h1 className="text-purple text-xl font-semibold">Who can Join?</h1>
        <p>Class 6-12 Students</p>
      </div>
    </div>
  );
};

export default Details;
