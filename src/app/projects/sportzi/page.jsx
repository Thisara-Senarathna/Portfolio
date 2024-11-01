"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

export default function Project1() {
  const router = useRouter();
  return (
    <section className="mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container text-sm sm:text-base md:max-w-3xl lg:max-w-4xl mb-16 sm:leading-relaxed"
      >
        {/* path */}
        <h5>
          <span
            onClick={() => router.push("/projects")}
            className="mr-4 cursor-pointer"
          >
            Projects{" "}
          </span>{" "}
          {">"} <span className="ml-4"> SportZi</span>
        </h5>

        {/* main section */}
        <div className=" flex flex-col gap-2 py-8 mb-8">
          <h1 className="text-2xl font-semibold">
            {" "}
            SportZi - Sport Facility Management System
          </h1>
          <h3 className="sm:text-lg text-gray-500">
            Updated on 26th September 2024
          </h3>
        </div>

        {/* introduction */}
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-3xl font-semibold">Introduction</h1>
          <p>
            This is the second year group project we did at the University. This
            article will discuss about the project and the technologies used.
          </p>
          <p>
            SportZi is a sports facility management system aimed at providing
            efficient access to sports facilities for players, coaches, and
            managers. They can create and manage their profiles independently,
            enabling seamless booking, facility management, and user
            connections.
            {/* This Sport Facility Management Project facilitates services for players, coaches, arcades, and admins.  
          I was responsible for both frontend and backend development, implementing the signup and login systems with user authentication and authorization. Additionally, I handled the feedback and rating systems, ensuring a seamless user experience across all roles. */}
          </p>

          {/* video 01*/}
          <div className="flex flex-col gap-4">
            {/* <h1 className="text-3xl font-semibold">Main pages </h1> */}
            <iframe
              className="rounded-lg w-full h-96"
              width="560"
              src="https://www.youtube.com/embed/IOiGKzaBOfA?si=CagWTllC3ipmvijz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <p>
            After login to sportZi , players can book sessions with coaches and
            reserve sports zones for their activities, making scheduling easy
            and efficient.
          </p>
          <div className="flex flex-col gap-4">
            {/* <h1 className="text-3xl font-semibold">Main pages </h1> */}
            <iframe
              className="rounded-lg w-full h-96"
              width="560"
              src="https://www.youtube.com/embed/oc6Hoh3B5wM?si=pgHvCFKZxZjE6NtN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <p>
            Coaches can apply for available arcades to offer their coaching
            services, connecting with players seeking training opportunities.
          </p>
          <p>
            Managers have control over arcade profiles and details, allowing
            them to update and manage information about their sports facilities.
          </p>

          <p>
            This application also features an administrator dashboard, where
            administrators can manage the overall system and view booking
            statistics for valuable insights into booking activities and user
            engagement.
          </p>
        </div>

        {/* technology */}
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="text-3xl font-semibold">Technologies Used</h1>
          <p>
            SportZi is built with React.js for a responsive front-end, while
            Node.js and Express.js power the back-end. MySQL serves as the
            database, managed through Prisma for efficient ORM functionality.
            JWT ensures secure user authentication, and Nodemailer handles email
            communications, creating a reliable and interactive sports facility
            management system.
          </p>
          {/* <ul className="">
            <li>For Authentication - <span className="text-gray-500 font-semibold">Json Web Token (JWT)</span> </li>
            <li>For Email Notification - <span className="text-gray-500 font-semibold">nodemailer library </span></li>
          </ul> */}

          {/* icons */}
          <div className="flex space-x-4 text-2xl sm:text-3xl md:text-4xl text-black ">
            <SiExpress title="Express.js" />
            <FaDatabase title="Mysql" />
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
          </div>
        </div>

        {/* final throughts */}
        <div className="flex flex-col gap-4  ">
          <h1 className="text-3xl font-semibold">Final Thoughts</h1>
          <p>
          In completing the SportZi project, we gained a lot of experience in system design and strengthened our skills in teamwork and collaboration. This journey introduced us to new technologies and deepened our technical knowledge, giving us a solid foundation for future projects. We are especially grateful to Ideaboost for their guidance and mentorship throughout this process, which greatly enriched our learning experience.
          </p>
        </div>
      </motion.div>

      <Footer />
    </section>
  );
}
