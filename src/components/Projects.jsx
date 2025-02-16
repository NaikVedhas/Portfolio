import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

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
      desc: "Directed a team of 4 during the Inheritance ’23 Mentorship Program to create a decentralized solution for authenticating real-world products, resulting in successful authentications via QR code technology.",
      tech: ["Solidity", "Wagmi", "ConnectKit", "React.js", "Metamask", "Tailwind CSS", "HTML"],
      features: ["this is amazing", "implemented new tech"],
      github: "https://github.com/NaikVedhas/Faik-Block",
      color: "text-purple-500",
      img: "/vite.svg",
      bg: "bg-purple-500",
    },
  ];

  return (
    <motion.div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide" >
        
      {data.map((p, i) => (
        <motion.div
          key={i}
          className="h-screen flex items-center justify-center snap-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ProjectCard p={p} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
