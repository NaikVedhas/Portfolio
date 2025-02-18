import React from "react";
import { Award,  Star } from "lucide-react";
import TiltedCard from "../store/TitltedCard";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ p }) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden w-full max-w-6xl mx-auto hover:shadow-xl transition-shadow duration-300 bg-opacity-50 backdrop-blur-sm">
      {/* Left side - Image */}
      <div className={`md:w-3/5 ${p.bg} rounded-lg flex items-center justify-center p-6`}>
        <TiltedCard
          imageSrc={p.img}
          altText={p.name}
          captionText={p.name}
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="500px"
          imageWidth="500px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text">{p.name}</p>}
        />
      </div>

      {/* Right side - Content */}
      <div className="md:w-2/5 p-6 space-y-4">
        {/* Project Name with GitHub Icon & Link */}
        <h3 className="text-4xl font-bold text-white flex items-center space-x-2">
          <Award size={25} className={`${p.color}`} />
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-gray-300 transition">
            <p className="flex space-x-20">

            <span>{p.name}</span>
            <FaGithub size={35} />
            </p>
          </a>
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-lg leading-relaxed">{p.desc}</p>

        {/* Features */}
        <div>
          <h4 className="text-2xl font-semibold mb-2">Key Features</h4>
          <ul className="space-y-1 text-gray-600">
            {p.features.map((feature, index) => (
              <li key={index} className={`flex items-center space-x-2 `}>
                <Star size={18} className={`${p.color}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-2xl font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((tech, index) => (
              <span key={index} className={`px-3 py-1 border ${p.color} rounded-full text-sm font-medium`}>
                <p className="text-white">
                {tech}

                </p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
