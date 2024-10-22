"use client";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { motion} from "framer-motion";
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


export default function Project1() {
  const router = useRouter();
  return (
    <section className="">
      <motion.div
      initial={{ opacity: 0,y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5 }}
      className="container text-sm sm:text-base md:max-w-3xl lg:max-w-4xl mb-16 sm:leading-relaxed">
        {/* path */}
        <h5>
          <span
            onClick={() => router.push("/projects")}
            className="mr-4 cursor-pointer"
          >
            Projects{" "}
          </span>{" "}
          {">"} <span className="ml-4"> Instagram Clone Application</span>
        </h5>
        {/* main section */}
        <div className=" flex flex-col gap-2 py-8 mb-8">
          <h1 className="text-2xl font-semibold">Intagram Clone App</h1>
          <h3 className="sm:text-lg text-gray-500">
            Updated on 26th September 2024
          </h3>
          <a
            href="https://github.com/Thisara-Senarathna/My-Instagram-App"
            target="_blank"
            className="flex flex-row items-center gap-4 mt-4"
          >
            <FaGithub className="text-3xl" />
            <span>View on Git Hub</span>
          </a>
        </div>

        {/* introduction */}
        <div className="flex flex-col gap-4  mb-8">
          <h1 className="text-3xl font-semibold">Introduction</h1>
          <p>
            {/* This is a Intagram Clone Application that made using MongoDB,
            Express JS, React JS and Node JS (MERN stack). I did this small
            project as a funny project following some courses that related with
            MERN stack. {" "} */}
            This is an Instagram Clone application developed using the MERN stack—MongoDB, Express JS, React JS, and Node JS. I built this project as a fun way to apply the concepts learned from various courses focused on MERN stack development. It was a great opportunity to practice full-stack development while building a simplified version of a popular social platform.
          </p>
        </div>

        {/* video */}

        <div className="flex flex-col gap-4 mb-16">
          {/* <h1 className="text-3xl font-semibold">Project Video</h1> */}
          <iframe
          className="rounded-lg w-full h-96"
            width="560"
            src="https://www.youtube.com/embed/h6OZpcPrLMk?si=5Z6SK8cgY1Gairls"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>


        {/* technology */}
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="text-3xl font-semibold">Technologies Used</h1>
          <p>This website was built using the MERN stack: MongoDB, Express, React, and Node.js. For user authentication, JSON Web Token (JWT) was implemented, ensuring secure access control. Additionally, the Nodemailer library was integrated to handle email notifications.</p>
          {/* <ul className="">
            <li>For Authentication - <span className="text-gray-500 font-semibold">Json Web Token (JWT)</span> </li>
            <li>For Email Notification - <span className="text-gray-500 font-semibold">nodemailer library </span></li>
          </ul> */}
    
            {/* icons */}
            <div className="flex space-x-2 text-2xl sm:text-3xl md:text-4xl text-black ">
                <SiExpress title="Express.js" />
                <SiMongodb title="MongoDB" />
                <FaReact title="React" />
                <FaNodeJs title="Node.js" />
                
              </div>
 
        </div>

        {/* final throughts */}
        <div className="flex flex-col gap-4 mt-16">
            <h1 className="text-3xl font-semibold">Final Thoughts</h1>
            <p>I was able to learn a lot of basic things about MERN stack. I really enjoyed working on this project because it is like a social flatform. I hope to improve this project further with more User friendly UI.</p>
        </div>


      </motion.div>



        <Footer/>

    </section>
  );
}
