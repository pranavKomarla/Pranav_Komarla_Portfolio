"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "LazyTrader",
    description:
      "TradingBot/Platform that allows me to backtest certain forex trading strateges. Backtested strategies such as mean reversion, rgression, and classification techniques to optimize trading strategies. Built REST APIs for front-end back-end communication. Automated all trading processes and deployed on AWS EC2 Instance. Utilized Flask server for backend",
    stack: [{ name: "Python(Pandas, Numpy, etc)" }, { name: "Flask" }, { name: "AWS" }],
    image: "/assets/TradingBotPics/tradingPics.png",
    live: "",
    github: "https://github.com/pranavKomarla/lazyTrader",
  },
  
  {
    num: "02",
    category: "System Design",
    title: "Linux Shell",
    description:
      "Designed and implemented a custom Linux shell, providing interactive and batch modes for executing and managing a sequence of shell commands. Gained expertise in POSIX stream IO, directory management, and advanced process control. Utilized system calls for implementing redirection and piping between processes, enhancing command functionality. Developed features including wildcard pattern matching, input/output redirection, and conditional command execution, ensuring robust and efficient shell operations",
    stack: [{ name: "C" }],
    image: "/assets/Linux_shell_pics/Linux_Shell.png",
    live: "",
    github: "https://github.com/pranavKomarla/Linux-Shell",
  },
  {
    num: "03",
    category: "frontend",
    title: "THIS :)",
    description:
      "Simple Portfolio Website utilizing javascript frameworks in order to showcase some ability. Utilized FramerMotion and TailwindCSS. Deployed on Vercel ",
    stack: [{ name: "NextJS" }, { name: "ReactJS" }, { name: "Vercel" }, { name: "TailWindCSS"}],
    image: "/assets/PortfolioPics/homescreen.png",
    live: "",
    github: "https://github.com/pranavKomarla/Pranav_Komarla_Portfolio",
  },
  {
    num: "04",
    category: "frontend",
    title: "RU Study",
    description:
      "Using React.js and HTML/CSS on the frontend, I created a website that would allow college students to create study groups with other on the basis of time availability and location. Utilized Firebase User Authentication for the purpose of storing this information",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/RUStudy/rutgers.png",
    live: "",
    github: "https://github.com/psudheer27/RUHealthy",
  },
  
  
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  
  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.7, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-white">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} 
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  {/* <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider> */}
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;






