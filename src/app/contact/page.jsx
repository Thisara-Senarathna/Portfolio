"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (!emailRegex.test(formData.email)) {
    //   setError("Please enter a valid email address.");
    //   setIsSubmitting(false);
    //   return;
    // }

    console.log("formData:",formData);
    
    emailjs
      .send(
        "service_3si1sye", // Replace with your EmailJS service ID
        "template_5uube8w", // Replace with your EmailJS template ID
        formData, // Send the form data
        "wfJPHmV1SGhL_dra4" // Replace with your EmailJS public user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "" }); // Clear form fields
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setError("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="text-xs sm:text-sm md:text-base mt-32  min-h-screen flex flex-col">
      <div className="container  md:px-32 flex-grow mb-16">
        <div className="flex flex-col lg:flex-row justify-center items-center mt-20 bg-white py-12 rounded-2xl shadow-lg gap-8 lg:gap-0 ">
          <div className="w-2/3 lg:w-1/2 flex flex-col mx-auto lg:p-8  text-center gap-4">
            <h3 className="text-xl font-bold mb-4">Contact Me</h3>
            <p className="mb-2">Hello!. Thank you so musch for your time</p>
            <p className="mb-2">
              Feel free to drop me an email through this from if you want to
              contact me.
            </p>
          </div>

          {/* form section */}
          <div className="container w-10/12 lg:w-1/2 mx-auto px-4 ">
            <h2 className="text-2xl font-semibold text-center mb-4">Let's Connect</h2>

            {/* Contact Form */}
            <form
              className="rounded-lg py-6   mx-auto p-4 bg-accent-secondary "
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                {/* <label className="block text-sm font-bold mb-2" htmlFor="name">
          Name
        </label> */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-2  border-b-2 focus:outline-none focus:border-accent rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                {/* <label className="block text-sm font-bold mb-2" htmlFor="email">
          Email
        </label> */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full px-4 py-2   border-b-2 focus:outline-none focus:border-accent rounded-lg "
                  required
                />
              </div>

              <div className="mb-4">
                {/* <label className="block text-sm font-bold mb-2" htmlFor="message">
          Message
        </label> */}
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-2   border-b-2 focus:outline-none focus:border-accent rounded-lg  "
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full border-b-2 border-accent font-bold mt-6 py-2 px-4 rounded-lg bg-gray-200 hover:bg-accent transition-all duration-700"
                disabled={isSubmitting}
              >
                 {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {isSuccess && <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

            </form>
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      {/* <hr className="border-gray-600 mt-16 w-full " /> */}
      


      {/* footer */}

        <Footer/>

    </section>
  
  );
}
