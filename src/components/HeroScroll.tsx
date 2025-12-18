import React, { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScroll() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden w-full">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Hi, I'm <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sanjeev Kadakol
              </span>
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-gray-600 dark:text-gray-300">
              AI/ML Engineer
            </p>
            <p className="text-lg mt-2 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Aspiring AI/ML Engineer with a solid academic background in computer science.
              Passionate about applying machine learning and data science principles to combat financial crime.
            </p>
          </>
        }
      >
        <div className="h-full w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          {!imageError ? (
            <img
              src="/sanjipic.jpeg"
              alt="Sanjeev Kadakol - AI/ML Engineer"
              className="w-full h-full object-cover object-center"
              draggable={false}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-6xl">👨‍💻</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none"></div>
        </div>
      </ContainerScroll>
    </div>
  );
}

