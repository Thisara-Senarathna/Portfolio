//Nav.jsx

// "use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];



export default function Nav() {
  
  const pathname =  usePathname();
  return (
    <nav className="flex flex-col lg:flex-row lg:gap-4 gap-8">
      {links.map((item, index) => {
        
        return (
          <Link href={item.path} key={index}>
            <span
              className={`capitalize py-2 px-2  hover:text-accent hover:border-accent hover:border-b-2 transform transition duration-300 ease-in-out hover:scale-105 
              ${(item.path == pathname) ? "border-b-2 border-accent text-accent" : ""}`} // Add active styles
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
