import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaGit, FaEthereum } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiMysql, SiTailwindcss, SiDaisyui, SiIpfs, SiSolidity, SiPostman, SiWeb3Dotjs, SiEthers, SiWagmi, SiHardhat, SiRemix, SiSocketdotio, SiCplusplus, SiTanstackquery } from "react-icons/si";
import PixelCard from '../store/PixelCard';

const techStack = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "TanStack Query", icon: <SiTanstackquery className="text-[#FF4154]" /> },
  { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
  { name: "Solidity", icon: <SiSolidity className="text-white" /> },
  { name: "Web3.js", icon: <SiWeb3Dotjs className="text-[#F16822]" /> },
  { name: "Ethers.js", icon: <SiEthers className="text-[#2535a0]" /> },
  { name: "Wagmi", icon: <SiWagmi className="text-[#2d3748]" /> },
  { name: "Hardhat", icon: <SiHardhat className="text-[#FFF100]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-[#5A0EF8]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3 className="text-[#1572B6]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "IPFS", icon: <SiIpfs className="text-[#65C2CB]" /> },
  { name: "Remix IDE", icon: <SiRemix className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "Git", icon: <FaGit className="text-[#F05032]" /> },
];

const TechStack = () => {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">🚀 My Tech Stack</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techStack.map((tech, index) => (
          <PixelCard key={index} variant="default" className="flex flex-col items-center justify-center p-4">
            <div style={{position:'absolute'}}>
            <div className="text-5xl">{tech.icon}</div>
            <p className="mt-2 text-lg text-white font-medium">{tech.name}</p>
            </div>
          </PixelCard>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
