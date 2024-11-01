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

export default function Rover() {
  const router = useRouter();
  return (
    <section className="mt-28">
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
          {">"} <span className="ml-4"> Rover 4.8</span>
        </h5>
        {/* main section */}
        <div className=" flex flex-col gap-2 py-8 mb-8">
          <h1 className="text-2xl font-semibold">Rover 4.8</h1>
          <h3 className="sm:text-lg text-gray-500">
            Updated on 26th September 2024
          </h3>
          <h3 className="sm:text-lg ">A hardware group project</h3>
        </div>

        {/* introduction */}
        <div className="flex flex-col gap-4 mb-8" >
          <h1 className="text-3xl font-semibold">Introduction</h1>
          <p>
            This is a hardware project. Our group created a rover designed to
            navigate inside mines, capable of measuring temperature and gas
            levels using MQ2, MQ135, and DHT11 sensors. The rover is equipped
            with an ESP32 camera board, providing real-time video, which can be
            accessed on a mobile-friendly webpage. This system enhances safety
            and monitoring in hazardous environments.
          </p>
        </div>

        {/* video */}

        <div className="flex flex-col gap-4 mb-16">
          {/* <h1 className="text-3xl font-semibold">Project Video</h1> */}
          <iframe
            className="rounded-lg w-full h-96"
            width="560"
            src="https://www.youtube.com/embed/B74COwvjlgI?si=7q03-yC8DuiAGYZg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* technologies */}
        <div className="flex flex-col gap-4  mb-16">
          <h1 className="text-3xl font-semibold">Technologies Used</h1>
          <p>
            For the hardware project, we utilized Arduino and C programming to
            control the rover's sensors and motors. The project involved
            designing a custom PCB using EasyEDA to integrate components
            efficiently. On the software side, HTML and CSS were employed to
            create a web interface that displayed real-time sensor data and
            video streams.
          </p>
          <h3 className="font-semibold mb-4">PCB designs</h3>
          <div className="flex flex-row justify-around w-full">
            <img
              src="/assets/rover/pcb1.png"
              alt="pcb"
              className="w-5/12 h-auto object-cover rounded-xl"
            />
            <img
              src="/assets/rover/pcb2.png"
              alt="pcb"
              className="w-5/12 h-auto rounded-xl"
            />
          </div>
        </div>

        {/* ourteam */}
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="text-3xl font-semibold">Our Team</h1>
          <img
            src="/assets/rover/members.jpeg"
            alt="members"
            className="w-full h-auto object-cover rounded-xl "
          />
          <p className="w-full text-center px-16">
            Team members, From left: Poojathmi Deepna, Sampath Samaraweera,
            Praneeth Kulathilaka, Thisara Senarathna, Nelunika Jayasighe
          </p>
        </div>


        {/* final throughts */}
        <div className="flex flex-col gap-4  ">
            <h1 className="text-3xl font-semibold">Final Thoughts</h1>
            <p>As first-year students, working on this hardware project provided us with invaluable experience. We had the opportunity to improve our teamwork skills, collaborate with various hardware components, and learn how to implement real-world solutions as a team. It was a rewarding and enjoyable process that gave us practical insights into the challenges and successes of building a functional system from scratch. </p>
        </div>
      </motion.div>

      <Footer />
    </section>
  );
}
