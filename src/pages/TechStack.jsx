import React from "react";

const techStack = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
  { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "ExpressJS", icon: "https://cdn.simpleicons.org/express"},
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
  { name: "Tanstack Query", icon: "https://cdn.simpleicons.org/reactquery" },
  { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio" },
  { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity" },
  { name: "Web3.js", icon: "https://cdn.simpleicons.org/web3dotjs" },
  { name: "Wagmi", icon: "https://cdn.simpleicons.org/wagmi" },
  { name: "Daisy Ui", icon: "https://cdn.simpleicons.org/tailwindcss/daisyui" },
  { name: "Ether.js", icon: "https://cdn.simpleicons.org/ethers" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/tailwindcss-plain.svg" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/mysql-original.svg" },
  { name: "IPFS", icon: "https://cdn.simpleicons.org/ipfs" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/github-original.svg" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/postman-original.svg" },
  { name: "Hardhat", icon: "/Hardhat.png" },
  { name: "Remix IDE", icon: "/remixide.png" },
  { name: "Metamask", icon: "/metamask.png" },
  { name: "Pinata", icon: "/pinata.svg" },
];



const TechStack = () => {
  return (
    <section className="bg-black text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Tech Stack</h2>
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
