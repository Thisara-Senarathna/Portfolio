"use client";
import { Photo } from "@/components/Photo";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Footer from "@/components/Footer";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaJs,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiC,
  SiArduino,
} from "react-icons/si";

import { delay, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.2, transition: { duration: 0.5, delay: 0 } },
  };

  const mainRef = useRef(null);
  const projectRef = useRef(null);

  const isMainInView = useInView(mainRef, { triggerOnce: true });
  const isProjectInView = useInView(projectRef, { triggerOnce: true });

  return (
    <section className="w-full mt-32">
      <section className="container mx-auto md:max-w-3xl lg:max-w-5xl ">
        {/* hero section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row w-full pt-16 justify-center items-center gap-4"
        >
          <motion.div
            className="w-full lg:w-7/12 p-10 mx-auto flex flex-col mb-16 bg-white rounded-lg shadow-2xl shadow-gray-300 text-center lg:text-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="animated-text text-4xl pb-4 flex flex-col justify-center items-center lg:items-start">
              <motion.span
                className="text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Hi
              </motion.span>
              <motion.span
                className="mb-4 text-3xl lg:text-4xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {" "}
                I'm{" "}
                <span className="font-bold bg-gradient-to-r from-purple-400 via-violet-500 to-gray-500 bg-clip-text text-transparent ">
                  Thisara <span className="hidden sm:inline">Senarathna</span>
                </span>
              </motion.span>
              <motion.span
                className="text-lg font-semibold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                3'rd Year Undergraduate
                <span className="text-gray-500"> @ University of Moratuwa</span>
              </motion.span>
            </div>
            <h3 className=" md:text-lg text-center lg:text-start">
              I'm a full stack developer that passionate about developing
              innovative programs that enhance organizational efficiency and
              success.
            </h3>
            <div className="pt-8 flex flex-row gap-6 justify-center	lg:justify-start">
              <motion.a
                href="/cv/Thisara-Senarathna.pdf"
                download="Thisara_Senarathna_CV.pdf"
                className="flex items-center gap-4 hover:text-dark p-4 px-8  rounded-lg bg-gray-200 hover:bg-accent-secondary  transform transition-all duration-300 ease-in-out "
                variants={buttonVariants}
              >
                <span>Download CV </span>
                <FiDownload />
              </motion.a>

              <motion.button
                className="flex items-center hover:text-dark p-4 px-8  rounded-lg bg-gray-200 hover:bg-accent-secondary   transform transition-all duration-300 ease-in-out will-change-transform"
                variants={buttonVariants}
              >
                <span>My Projects</span>
              </motion.button>
            </div>
          </motion.div>

          {/* image */}
          <motion.div
            className="mx-auto shadow-2xl shadow-gray-300"
            variants={imageVariants}
          >
            <Image
              src="/assets/my/Me.jpg"
              width={400}
              height={400}
              quality={100}
              alt="My Photo"
              className="object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}

        <div className="w-full h-full mt-24 bg-white rounded-lg shadow-lg shadow-gray-300">
          <div
            id="tech-stack"
            className="container mx-auto h-full mt-8 xl:mt-0 md:px-16 py-10"
          >
            <h2 className="text-lg xs:text-2xl md:text-3xl font-bold text-center lg:text-left py-2">
              My Tech Stack
            </h2>
            <h2 className="sm:text-lg font-bold text-center lg:text-left py-2">
              What I use to build awesome web apps
            </h2>

            <div
              className="w-full sm:w-8/12 mx-auto lg:w-full text-sm md:text-base flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 py-4 text-center"
              ref={mainRef}
            >
              {/* Front-end Stack */}
              <motion.div
                className="flex-1 p-6 rounded-lg bg-accent-secondary shadow-2xl shadow-gray-300"
                initial={{ opacity: 0, y: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                animate={isMainInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 5,
                  duration: 0.8,
                  delay: 0.3,
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Front-end
                </h3>
                <ul className="space-y-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                </ul>
              </motion.div>

              {/* Back-end Stack */}
              <motion.div
                className="flex-1 p-6 rounded-br-lg bg-accent-secondary rounded-lg shadow-2xl shadow-gray-300"
                initial={{ opacity: 0, y: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                animate={isMainInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 5,
                  duration: 0.8,
                  delay: 0.4,
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Back-end
                </h3>
                <ul className="space-y-1">
                  <li>Node JS</li>
                  <li>Express JS</li>
                  <li>Next JS</li>
                  <li>Spring Boot</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </motion.div>

              {/* Tools Stack */}
              <motion.div
                className="flex-1 p-6 rounded-br-lg bg-accent-secondary rounded-lg shadow-2xl shadow-gray-300"
                initial={{ opacity: 0, y: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                animate={isMainInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 5,
                  duration: 0.8,
                  delay: 0.5,
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Tools
                </h3>
                <ul className="space-y-1">
                  <li>Git</li>
                  <li>Postman</li>
                  <li>Insomnia</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full py-8 flex flex-col justify-center items-center mt-8 gap-4 mb-16 ">
          <h2 className="text-xl">What I Know ?</h2>
          <div className="relative w-full max-w-screen-lg overflow-hidden">
            <div className="marquee-container">
              <div className="marquee space-x-4">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <FaHtml5 size={100} className="text-red-500" />
                      <span className="text-center mt-2">HTML</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <FaCss3Alt size={100} className="text-blue-500" />
                      <span className="text-center mt-2">CSS</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <FaJs size={100} className="text-yellow-500" />
                      <span className="text-center mt-2">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <FaReact size={100} className="text-blue-400" />
                      <span className="text-center mt-2">React JS</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <FaNodeJs size={100} className="text-green-500" />
                      <span className="text-center mt-2">Node JS</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">🚀</span>
                      <span className="text-center mt-2">Express JS</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">⚛️</span>
                      <span className="text-center mt-2">Next.js</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">🌱</span>
                      <span className="text-center mt-2">Spring Boot</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">☕</span>
                      <span className="text-center mt-2">Java</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">C</span>
                      <span className="text-center mt-2">C</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">🐍</span>
                      <span className="text-center mt-2">Python</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">💾</span>
                      <span className="text-center mt-2">MySQL</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">🗃️</span>
                      <span className="text-center mt-2">MSSQL</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">🍃</span>
                      <span className="text-center mt-2">MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center border-2 rounded-lg bg-transparent p-2">
                      <span className="text-8xl">📫</span>
                      <span className="text-center mt-2">Postman</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* allprojects */}
      <div
        id="projects"
        className="container px-16 flex-grow mb-16  text-xs sm:text-sm md:text-base"
      >
        <h1 className="text-2xl text-center font-semibold my-8">Projects</h1>
        <div
          className=" grid grid-cols-1 lg:grid-cols-5 gap-4 justify-center "
          ref={projectRef}
        >
          {/* project item 1*/}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isProjectInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between bg-accent-secondary col-span-3  p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/40  "
          >
            {/* image */}
            <div className="">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={isProjectInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                src="/assets/projects/software.png"
                alt="Education 1"
                className="w-full  object-cover cursor-pointer rounded-xl"
                // onClick={() => handleImageClick("/assets/uni.jpg")}
              />
            </div>

            {/* description */}
            <div className="flex flex-col gap-4 py-4">
              <h1 className="text-sm xs:text-base sm:text-lg ">
                2nd Year Group Project
              </h1>
              <h1 className="text-sm xs:text-base sm:text-xl font-semibold">
                Sport Facility Mangement System
              </h1>
              <p>
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
                  <a
                    href="https://sportzi.live/"
                    target="_blank"
                    className="flex items-center"
                  >
                    {" "}
                    {/* <FaGithub
                      size={32}
                      className="text-gray-700 hover:text-black"
                    /> */}{" "}
                    <span className="">Sportzi.Live</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* project item 2*/}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isProjectInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between bg-accent-secondary col-span-3 lg:col-span-2  p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/40  "
          >
            {/* image */}
            <div className="">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={isProjectInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                src="/assets/projects/insta3.png"
                alt="Education 1"
                className="w-full object-cover cursor-pointer rounded-xl"
                // onClick={() => handleImageClick("/assets/uni.jpg")}
              />
            </div>

            {/* description */}
            <div className="flex flex-col gap-4 py-4">
              <h1 className="text-sm xs:text-base sm:text-lg ">
                Full Stack MERN project
              </h1>
              <h1 className="text-sm xs:text-base sm:text-xl font-semibold">
                Intagram Clone App
              </h1>
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
                  <a
                    href="https://github.com"
                    target="_blank"
                    className="flex items-center"
                  >
                    {" "}
                    <FaGithub className="text-gray-700 hover:text-black text-2xl sm:text-3xl md:text-4xl" />{" "}
                    <span className="ml-2">Git link</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* project item 3*/}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isProjectInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className=" flex flex-col justify-between bg-accent-secondary col-span-3 lg:col-span-2  p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/40  "
          >
            {/* image */}
            <div className="relative flex justify-center items-center">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={isProjectInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                src="/assets/projects/portfolio3.png"
                alt="Education 1"
                className="w-full  object-cover cursor-pointer "
                // onClick={() => handleImageClick("/assets/uni.jpg")}
              />
            </div>

            {/* description */}
            <div className="flex flex-col gap-4 py-4">
              <h1 className=" text-sm xs:text-base sm:text-lg ">
                Frontend Development
              </h1>
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
                <SiTailwindcss title="Tailwind CSS" className="xs:text-4xl" />
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
            initial={{ opacity: 0, x: 30 }}
            animate={isProjectInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between bg-accent-secondary col-span-3  p-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/40  "
          >
            {/* image */}
            <div className="">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={isProjectInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                src="/assets/projects/rover.png"
                alt="Education 1"
                className="w-full h-96 object-cover cursor-pointer rounded-xl"
                // onClick={() => handleImageClick("/assets/uni.jpg")}
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
                <FaHtml5 title="HTML5" />
                <FaCss3Alt title="CSS3" />
                <SiC title="C Language" />
                <SiArduino title="Arduino" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* view projects button */}
        <div className="w-full flex justify-center mt-4">
          <button className="p-4 rounded-lg bg-gray-200 flex flex-row gap-4 items-center border-2 border-gray-300 hover:bg-accent-secondary"
          onClick={()=>router.push('/projects')}>
            <span>View all projects </span>
            <FaArrowRight className="" />
          </button>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </section>
  );
}
