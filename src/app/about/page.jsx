"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scrolling to the section
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("education-section");
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

  const [isImagePreviewOpen, setImagePreviewOpen] = useState(false);
  const [previewImageSrc, setPreviewImageSrc] = useState("");

  const handleImageClick = (src) => {
    setPreviewImageSrc(src);
    setImagePreviewOpen(true);
  };

  const closePreview = () => {
    setImagePreviewOpen(false);
  };

  const aboutMeSectionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="mt-32">
      <div className="container md:max-w-3xl lg:max-w-5xl text-sm md:text-base md:leading-relaxed">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full px-4 mt-24 ">
          {/* Image with Circular Wrapping */}
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start off-screen above
            animate={{ opacity: 1, y: 0 }} // Animate to the original position
            transition={{
              type: "spring", // Use spring animation for bounce effect
              stiffness: 100, // Adjust the bounce strength
              damping: 5, // Control the speed of the bounce
              duration: 0.8,
              delay: 0.5, // Animation duration
            }}
            className="relative w-5/12 flex justify-center"
          >
            <div className="relative p-2">
              {/* Animated Border */}

              {/*My Image */}
              <Image
                src="/assets/my/my2.CR2" // Replace with your photo path
                alt="Your Name"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
            <div className="absolute lg:w-[400px] h-[400px] rounded-full border-t-8 border-b-4 border-blue-500 animate-spin-slow"></div>
            <div className="absolute lg:w-[400px] h-[400px] rounded-full border-t-8 border-b-4 border-red-500 animate-spin-reverse"></div>
          </motion.div>

          {/* About Me Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={aboutMeSectionVariants}
            className="container relative w-full lg:w-1/2 flex flex-col justify-center pl-2 text-center items-center mt-8  p-8 "
          >
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="">
              I'm Thisara Senarathna, A 3rd-year undergraduate at the University
              of Moratuwa. I am passionate about developing innovative programs
              that enhance organizational efficiency and success.Currently, I am
              seeking an internship for software development to further hone my
              skills and contribute to projects that prioritize both
              productivity and privacy.
            </p>
          </motion.div>

          <style jsx>{`
            .about-text {
              shape-outside: circle(200px at 200px 200px);
              float: left;
              width: 50%;
              height: 400px;
              margin-left: 20px;
            }

            .animate-spin-slow {
              animation: spin 8s linear infinite;
            }

            .animate-spin-reverse {
              animation: spin-reverse 10s linear infinite;
            }

            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            @keyframes spin-reverse {
              0% {
                transform: rotate(360deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }
          `}</style>
        </div>

        {/* education section */}
        <div
          id="education-section"
          className=" mt-32 text-center  ${isVisible ? 'visible-class' : 'hidden-class'}}"
        >
          <h2 className="text-3xl font-bold mb-8 lg:text-left">Education</h2>
          <div className="container flex flex-col gap-8 p-0">
            {/* First Div */}
            <div className="flex  flex-col md:flex-row items-center  mx-auto lg:ml-0 ">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                src="/assets/education/uni.jpg"
                alt="Education 1"
                className="w-full md:w-1/3 h-48 object-cover cursor-pointer md:rounded-lg"
                onClick={() => handleImageClick("/assets/education/uni.jpg")}
              />
              <motion.div
                className="flex-1 flex flex-col md:text-start p-4 rounded-r-lg  m-auto gap-6"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-lg font-semibold">Unversity of moratuwa</h1>
                <p className="">
                  Currently I am reading for my BSc(Hons) in Information
                  Technology at the Faculty of IT, University of Moratuwa.
                </p>
              </motion.div>
            </div>

            {/* Second Div */}
            <div className="flex flex-col-reverse flex-col md:flex-row items-center mx-auto lg:mr-0 ">
              <motion.div
                className="flex-1 flex  flex-col gap-4  my-auto md:text-start"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-lg font-semibold">
                  R/Sivali Central College
                </h1>
                <p className="">
                  I did Combined Mathematics, Physics, and IT as subjects for my
                  A/L at Sivali Central College. I secured as IT-A, Physics-B,
                  C.Maths-B with 1.9321 z-score
                </p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                src="/assets/education/school.jpg"
                alt="Education 2"
                className=" w-full md:w-1/3  h-48 object-cover cursor-pointer md:rounded-lg  "
                onClick={() => handleImageClick("/assets/education/school.jpg")}
              />
            </div>
          </div>

          {/* Image Preview Modal */}
          {isImagePreviewOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 ">
              <div className="relative mt-32">
                <button
                  className="absolute top-2 right-2 text-white text-2xl"
                  onClick={closePreview}
                >
                  &times;
                </button>
                <img
                  src={previewImageSrc}
                  alt="Preview"
                  className="max-w-lg max-h-screen object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* horzontal rule */}
        <hr className="my-8 w-full border-t-2 border-gray-300" />

        {/* favorite things */}
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="text-3xl font-semibold">Favorite things</h1>
          <p>
          One of my favorite activity is stunting on bikes, particularly performing wheelies. I do it purely for fun and always make sure to prioritize safety while practicing.
          </p>
          <p>
            Another passion of mine is playing volleyball. I enjoy the teamwork
            and the physical challenge it offers, and it’s one of my favorite
            ways to stay active.
          </p>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </section>
  );
}
