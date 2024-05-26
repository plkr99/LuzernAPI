import React from "react";

export default function DateCard({ date, time }) {
  return (
    <div className="absolute inset-x-0 bottom-8 flex w-full items-center justify-between text-3xl md:text-[50px] space-x-5 max-w-5xl mx-auto px-5">
      <p>{date}</p>
      <p>{time} Uhr</p>
    </div>
  );
}
