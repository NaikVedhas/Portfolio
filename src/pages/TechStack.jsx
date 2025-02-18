import React, { useState, useEffect } from "react";
import ScrollVelocity from "../store/ScrollVelocity";

const techStack = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
  { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "ExpressJS", icon: "https://cdn.simpleicons.org/express" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
  { name: "Tanstack Query", icon: "https://cdn.simpleicons.org/reactquery" },
  { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio" },
  { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity" },
  { name: "Web3.js", icon: "https://cdn.simpleicons.org/web3dotjs" },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/tailwindcss-plain.svg",
  },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/git-original.svg" },
  { name: "Wagmi", icon: "https://cdn.simpleicons.org/wagmi" },
  { name: "IPFS", icon: "https://cdn.simpleicons.org/ipfs" },
  {
    name: "MongoDB",
    icon: "https://cdn.simpleicons.org/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql/mysql-original.svg",
  },
  { name: "Daisy Ui", icon: "https://cdn.simpleicons.org/tailwindcss/daisyui" },
  { name: "Ether.js", icon: "https://cdn.simpleicons.org/ethers" },
  {
    name: "Postman",
    icon: "https://cdn.simpleicons.org/postman/postman-original.svg",
  },
  { name: "Remix IDE", icon: "/remixide.png" },
  { name: "Hardhat", icon: "/Hardhat.png" },
  { name: "Pinata", icon: "/pinata.svg" },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/github-original.svg",
  },
];

const TechStack = () => {
  const [rotation, setRotation] = useState(64.825);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setRotation((prev) => prev + 15);
      } else {
        setRotation((prev) => prev - 15);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section className="bg-black text-white py-6 md:py-10 mb-6 md:mb-10">
      <div className="relative mx-auto size-fit overflow-hidden px-4 md:px-0">
        <div
          className="relative inset-x-0 -bottom-8 sm:-bottom-12 mx-auto size-[250px] sm:size-[300px] md:-bottom-20 md:size-[380px]"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            src="/image.png"
            alt=""
            className="z-10 w-full select-none opacity-65"
            draggable={false}
          />
        </div>

        <h2
          style={{
            textShadow:
              "0px 4px 8px rgba(255,255,255,.05), 0px 8px 30px rgba(255,255,255,.25)",
          }}
          className="text-3xl sm:text-4xl md:text-5xl text-center z-30 pb-3 md:pb-5 mb-0 absolute w-full bottom-0"
        >
          <p className="mb-2 md:mb-4 text-xs uppercase tracking-widest text-white/70 md:text-sm">
            I constantly learn
          </p>
          <span>My Tech Stack</span>
          <span className="text-colorfull font-nyght tracking-wide"></span>
        </h2>

        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/5 to-black"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4 md:px-50 mt-6 md:mt-8">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-neutral-800 rounded-lg shadow-md text-sm md:text-lg"
          >
            <img src={tech.icon} alt={tech.name} className="w-5 h-5 md:w-6 md:h-6" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-18">
        <ScrollVelocity
          texts={["Scalable ", "Responsive ", "Interactive ", "Secure "]}
          velocity={100}
          className="custom-scroll-text mt-1"
        />
      </div>
    </section>
  );
};

export default TechStack;