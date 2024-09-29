"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiC,
  SiArduino,
} from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { VscJson } from "react-icons/vsc";


export default function Projects() {

  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section className="mt-32 min-h-screen flex flex-col">
      {/* allprojects */}
      <div id="projects" className="container md:max-w-3xl lg:max-w-5xl flex-grow mb-16  text-xs sm:text-sm md:text-base md:leading-relaxed">
        <h1 className="text-3xl text-center font-semibold my-8">Projects</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-4 justify-center ">
          {/* project item 1*/}
          <motion.div
          onClick={() => router.push('/projects/sportzi')}
            initial={{ opacity: 0, x: -30 }}
            // animate={isVisible ? { opacity: 1, x: 0 } : {}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between bg-accent-secondary col-span-3  p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/40  "
          >
            {/* image */}
            <div className="">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                // animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                src="/assets/projects/software.png"
                alt="Education 1"
                className="w-full  object-cover cursor-pointer rounded-xl"
              />
            </div>

            {/* description */}
            <div className="flex flex-col gap-4 py-4">
              <h1 className="text-sm xs:text-base sm:text-lg ">2nd Year Group Project</h1>
              <h1 className="text-sm xs:text-base sm:text-xl font-semibold">
                Sport Facility Mangement System
              </h1>
              <p >
                This system facilitate facilities for Players, Coaches, Arcades
                and Admins with a managing system. I was responsible for both
                front-end and back-end development of user authentication and
                authorization, the login system, and handling feedbacks and
                ratings.
              </p>
              {/* icons and link */}
              <div className="flex flex-col xs:flex-row  space-y-4 xs:space-y-0 justify-between xs:items-center">
                <div className="flex  space-x-2 text-2xl sm:text-3xl md:text-4xl text-black">
                  <FaReact title="React" />
                  <FaNodeJs title="Node.js" />
                  <SiExpress title="Express.js" />
                  <SiMysql title="MySQL" />
                </div>
                <div>
                  <a href="https://sportzi.live/" target="_blank" className="flex items-center">
                    {" "}
                    {/* <FaGithub
                      size={32}
                      className="text-gray-700 hover:text-black"
                    /> */}
                    {" "}
                   <span className="">Sportzi.Live</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* project item 2*/}
          
          <motion.div
            onClick={() => router.push('/projects/instaclone')}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            // animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between bg-accent-secondary col-span-3 lg:col-span-2  p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/40  "
          >
     

            {/* image */}
            <div className="">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                // animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 ,delay:0.5}}
                src="/assets/projects/insta3.png"
                alt="Education 1"
                className="w-full object-cover cursor-pointer rounded-xl"
              />
            </div> 


            {/* description */}
            <div className="flex flex-col gap-4 py-4">
              <h1 className="text-sm xs:text-base sm:text-lg ">Full Stack MERN project</h1>
              <h1 className="text-sm xs:text-base sm:text-xl font-semibold">Intagram Clone App</h1>
              <p>
                An Intagram Clone Application that allows users to create
                accounts, upload photos, like and comment on photos, and follow
                other users. Build using MERN stack.
              </p>          

                {/* icons and link */}
              <div className="flex flex-col xs:flex-row  space-y-4 xs:space-y-0 justify-between xs:items-center">
                <div className="flex space-x-2 text-2xl sm:text-3xl md:text-4xl text-black">
                <SiMongodb title="MongoDB" />
                <SiExpress title="Express.js" />
                <FaReact title="React" />
                <FaNodeJs title="Node.js" />
              </div>

                <div>
                  <a href="https://github.com" target="_blank" className="flex items-center">
                    {" "}
                    <FaGithub
                      className="text-gray-700 hover:text-black text-2xl sm:text-3xl md:text-4xl"
                    />
                    {" "}
                   <span className="ml-2">Git link</span>
                  </a>
                </div>
              </div>


            </div>


                      
            
          </motion.div>
        

          {/* project item 3*/}
          <motion.div
          onClick={() => router.push('/projects/portfolio')}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            // animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8,delay:0.6 }}
            className=" flex flex-col justify-between bg-accent-secondary col-span-3 lg:col-span-2  p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/40  "
          >
            {/* image */}
            <div className="relative flex justify-center items-center">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                // animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                src="/assets/projects/portfolio3.png"
                alt="Education 1"
                className="w-full  object-cover cursor-pointer "
              />
            </div>

            {/* description */}
            <div className="flex flex-col gap-4 py-4">
              <h1 className=" text-sm xs:text-base sm:text-lg ">Frontend Development</h1>
              <h1 className="text-sm xs:text-base sm:text-xl font-semibold">
                My PortFolio (This Website)
              </h1>
              <p>
                I created this web site using Next.js Tailwind CSS and Framer
                Motion library.
              </p>
              <div className="flex items-center space-x-2 text-4xl text-black">
                <img
                  className="w-6 h-6 xs:w-8 xs:h-8 "
                  src="/icons/nextjs-icon.svg"
                  alt=""
    
                />
                <SiTailwindcss  title="Tailwind CSS" className="xs:text-4xl"/>
                {/* <FiFramer size={40} title="Framer Motion" /> */}
                <img
                  src="/icons/framer-motion.svg"
                  alt="Framer Motion Logo"
                  className="w-6 h-6 xs:w-8 xs:h-8"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </motion.div>

          {/* project item 4*/}
          <motion.div
          onClick={() => router.push('/projects/rover')}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            // animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8,delay:0.8}}
            className="flex flex-col justify-between bg-accent-secondary col-span-3  p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/40  "
          >
            {/* image */}
            <div className="">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                // animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                src="/assets/projects/rover.png"
                alt="Education 1"
                className="w-full h-96 object-cover cursor-pointer rounded-xl"
              />
            </div>

            {/* description */}
            <div className="flex flex-col gap-4 py-4">
              <h1 className=" text-lg ">1st Year Group Project</h1>
              <h1 className="text-xl font-semibold">Rover 4.2</h1>
              <p>
                This is a hardware Project. This rover capable of navigating
                within mines, capturing real time video stream, measuring gas
                values and real time monitoring using wireless connectivity.
              </p>
              {/* icons */}
              <div className="flex space-x-2 text-2xl sm:text-3xl md:text-4xl text-black">
                <FaHtml5  title="HTML5" />
                <FaCss3Alt  title="CSS3" />
                <SiC  title="C Language" />
                <SiArduino  title="Arduino" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </section>
  );
}
