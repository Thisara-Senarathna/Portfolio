

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (


    // footer
    <section>
      <div className="flex flex-col mx-auto p-8  items-center text-center bg-accent-secondary ">
        <h3 className="text-xl font-bold mb-4">Thisara Senarathna</h3>
        <p className="mb-2">Email: thisarasenarathna0824@gmail.com</p>
        <p className="mb-2">Phone: +94775247670</p>

        {/* Social Media Links */}
        <div className="mt-4 flex  items-center justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://web.facebook.com/?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaFacebook size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
