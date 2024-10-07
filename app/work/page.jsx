"use client";
import { delay, motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGit, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend E-commerce",
    title: "project 1",
    description: "Frontend E-commerce Website Using React+Tailwimd.css",
    stack: [{ name: "React.js"},{ name: "Tailwimd.css"}, { name: "Node.js"}],
    Image: '/assets/work/thumb2.png',
    live: "https://frontend-sandy-six.vercel.app/",
    github: "https://github.com/MADGER99/frontend",
  },
  {
    num: "02",
    category: "landing page Coffee",
    title: "project 2",
    description: "landing page Website Coffee",
    stack: [{ name: "Next.js"}, { name: "Tailwimd.css"}, { name: "Node.js"}],
    Image: '/assets/work/thumb1.png',
    live: "https://madger-coffee.vercel.app/",
    github: "https://github.com/MADGER99/madger_coffee",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "gsdfgjhjkgkgjkgjdfgjhfgjhgfjhjhh",
    stack: [{ name: "Next.js"}, { name: "Tailwimd.css"}, { name: "Node.js"}],
    Image: '/assets/work/thumb3.png',
    live: "",
    github: "",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  
  const handleSlideChange = (swiper) => {
    const currentIndex =swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 1.5, duration: 0.4,ease: "easeIn"} }}
      className="min-h-[80vh] flex-col justify-center py-12 xl:px-0"
      >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num*/}
              <div className="text-8xl leading-none font-extrabold  text-outline">
                {project.num}
              </div>
              {/*project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              {/* projext description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* comma */}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live projext</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github */}
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
                {projects.map((project, index)=>{
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                      </div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <img className='object-cover' src={project.Image} alt="" />
                      </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* slider buttoms */}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"  />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
