import React from "react";

import GradientText from "../store/GradientText";

const techStack = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
  { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "ExpressJS", icon: "https://cdn.simpleicons.org/express" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "Tanstack Query", icon: "https://cdn.simpleicons.org/reactquery" },
  { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio" },
  { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity" },
  { name: "Web3.js", icon: "https://cdn.simpleicons.org/web3dotjs" },
  { name: "Wagmi", icon: "https://cdn.simpleicons.org/wagmi" },
  { name: "IPFS", icon: "https://cdn.simpleicons.org/ipfs" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "Daisy UI", icon: "https://cdn.simpleicons.org/tailwindcss/daisyui" },
  { name: "Ether.js", icon: "https://cdn.simpleicons.org/ethers" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
  { name: "Remix IDE", icon: "/remixide.png" },
  { name: "Hardhat", icon: "/Hardhat.png" },
  { name: "Pinata", icon: "/pinata.svg" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
];

const TechStack = () => {
  return (
    <section className="bg-black text-white py-10">
      {/* Tech Stack Header with Rotated Image */}
      <div className="relative mx-auto size-fit overflow-hidden">
        {/* Rotated Image */}
        <div
          className="relative inset-x-0 -bottom-12 mx-auto size-[300px] md:-bottom-20 md:size-[380px]"
          style={{ transform: "rotate(64.825deg)" }}
        >
          <img
            src="/image.png"
            alt="Tech Stack"
            className="z-10 w-full select-none opacity-65"
            draggable={false}
          />
        </div>

        {/* Header Text */}
        <h2
          style={{
            textShadow:
              "0px 4px 8px rgba(255,255,255,.05), 0px 8px 30px rgba(255,255,255,.25)",
          }}
          className="text-4xl md:text-5xl text-center z-30 pb-5 mb-0 absolute w-full bottom-0"
        >
          <p className="mb-4 text-xs uppercase tracking-widest text-white/70 md:text-sm">
            I constantly learn
          </p>
          <span>My Tech Stack</span>
        </h2>

        {/* Overlay Effect */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/5 to-black"></div>
      </div>

      {/* Tech Stack Grid */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg shadow-md"
          >
            <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
            <span className="text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
