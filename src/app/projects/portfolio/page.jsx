"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
          {">"} <span className="ml-4"> Portfolio</span>
        </h5>

        {/* main section */}
        <div className=" flex flex-col gap-2 py-8 mb-8">
          <h1 className="text-2xl font-semibold">This WebSite</h1>
          <h3 className="sm:text-lg text-gray-500">
            Updated on 26th September 2024
          </h3>
        </div>

        {/* introduction */}
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-3xl font-semibold">Introduction</h1>
          <p>
            This is the first version of my portfolio website. It is a simple
            static site, built using Next.js and Tailwind CSS, and hosted on a
            free hosting server. Though This is simple, this project provided me
            with valuable learning experiences in web development and
            deployment.{" "}
          </p>
        </div>

        {/* video */}
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="text-2xl font-semibold">Version 1 - Next JS</h1>
          <iframe
          className="rounded-lg w-full h-96"
            width="560"
            src="https://www.youtube.com/embed/Dr55fvaemTQ?si=zGpombG_4e5lTas5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
