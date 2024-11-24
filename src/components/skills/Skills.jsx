import { useState } from "react";
 
export const Skills = ({tech, index}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <div
    // data-aos="zoom-in"
    key={index}
    className="relative rounded-lg flex items-center justify-center px-14 py-4 bg-slate-50 mx-auto cursor-pointer"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <img src={tech.src} alt={tech.alt} className="rounded-lg" width={60} />

    <div
      className={`
      absolute inset-0
      flex items-center justify-center 
      bg-black/20
      drop-shadow-xl 
      backdrop-blur-lg
      text-white
      rounded-lg
      transition-opacity duration-300
      ${isHovered ? "opacity-100" : "opacity-0"}
    `}
    >
           <p 
          className={`
            text-lg 
            title 
            font-medium
            transition-all
            duration-300
            transform
            ${isHovered ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-4 translate-y-4 opacity-0"}
          `}
        >
          {tech.alt}
        </p>
    </div>
  </div>
  )
}