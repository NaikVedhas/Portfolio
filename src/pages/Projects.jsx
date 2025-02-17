import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { useEffect } from "react";
import GradientText from "../store/GradientText";

const Projects = () => {
  const data = [
    {
      name: "LinkedIn Clone",
      desc: "Built a scalable LinkedIn clone from scratch with features like posts, comments, likes, profile viewers and advanced features like search, connect, follow, and messaging",
      tech: ["TanStack Query", "Socket.io", "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "DaisyUI", "Tailwind CSS", "HTML"],
      features: ["this is amazing", "implemented new tech"],
      github: "https://github.com/NaikVedhas/l",
      color: "text-blue-500",
      img: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      bg: "bg-blue-500",
    },
    {
      name: "Tune~Trax",
      desc: "Led a team of 4 at the Bit n Build International hackathon, developing a decentralized music distribution platform with 3 distinct roles—Users, Artists, and Streaming Platforms.",
      tech: ["Solidity", "Wagmi", "IPFS", "Pinata", "ConnectKit", "React.js", "Metamask", "Tailwind CSS", "HTML"],
      features: ["this is amazing", "implemented new tech"],
      github: "https://github.com/NaikVedhas/Tune-Trax",
      color: "text-pink-400",
      img: "/vite.svg",
      bg: "bg-pink-400",
    },
    {
      name: "FaikBlock",
      desc: "Directed a team of 4 during the Inheritance '23 Mentorship Program to create a decentralized solution for authenticating real-world products, resulting in successful authentications via QR code technology.",
      tech: ["Solidity", "Wagmi", "ConnectKit", "React.js", "Metamask", "Tailwind CSS", "HTML"],
      features: ["this is amazing", "implemented new tech"],
      github: "https://github.com/NaikVedhas/Faik-Block",
      color: "text-purple-500",
      img: "/vite.svg",
      bg: "bg-purple-500",
    },
  ];

  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="py-16">
      <h2 className="font-bold text-center ">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-6xl italic p-1"
      >
        
       Projects
      </GradientText>
        </h2>
      <div className="space-y-2 ">
        {data.map((p, i) => (
          <motion.div
            key={i}
            className="min-h-screen flex items-center justify-center px-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 1,
                ease: "easeOut"
              }
            }}
            viewport={{ 
              once: false,
              margin: "-20%" // Start animation when element is 20% in view
            }}
          >
            <ProjectCard p={p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;