import { motion } from "framer-motion";
import { useRef } from "react";
import {   Mail } from "lucide-react";
import { FaXTwitter as X } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PixelTransition from "../store/PixelTransition";
import GradientText from "../store/GradientText";
import VariableProximity from "../store/VariableProximity";

const About = () => {
  const containerRef = useRef(null);

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/NaikVedhas",
      color: "hover:text-purple-500",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/vedhas-naik-005378253/",
      color: "hover:text-blue-500",
    },
    { icon: X, link: "https://x.com/NaikVedhas58616", color: "hover:text-sky-500" },
    {
      icon: Mail,
      link: "mailto:vedhasnaik121@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className="flex items-center justify-center ml-15 px-8 py-16 mt-15"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Side - Text Content */}
      <div className="w-3/5 pr-12 space-y-8">
        <motion.h1 
          variants={itemVariants}
          className="text-xl font-semibold text-gray-500"
        >
          More About Me
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-7xl font-bold ">
            <GradientText
              colors={[
                "#32ffc3",
                "#4088ff",
                "#40ffaa",
                "#2fd5ff",
                "#1f69ff",
                "#1f69ff",
                "#2fd5ff",
                "#40ffaa",
                "#4088ff",
                "#32ffc3",
              ]}
              animationSpeed={4}
              showBorder={false}
            >
              Full Stack Developer and Blockchain Enthusiast
            </GradientText>
          </h2>

          <div className="text-lg italic text-gray-400 space-y-4 ml-6">
            {["I'm Vedhas Naik, a passionate full-stack developer with expertise in MERN stack, Blockchain, and Data structures & algorithms. I love building seamless and efficient web applications, tackling complex problems, and continuously expanding my knowledge.",
              "When I'm not coding, you'll find me watching movies and listening to music(music is my ultimate stress buster)",
              "Life is all about balance, and I embrace every part of it with curiosity and enthusiasm. I believe in waking up every day with a drive to create, innovate, and make a difference!",
            ].map((text, index) => (
              <motion.div
                key={index}
                ref={containerRef}
                style={{ position: "relative" }}
                variants={itemVariants}
              >
                <VariableProximity
                  label={text}
                  className="variable-proximity-demo"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex space-x-8 pt-6 ml-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              whileHover={{ y: -5, scale: 1.1 }}
              className={`text-gray-400 transition-colors duration-300 ${social.color}`}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Open to Work Box */}
        <motion.div
          className="mt-10 p-4 rounded-3xl  bg-black relative overflow-hidden shadow-lg text-center"
          animate={{
            boxShadow: [
              "0px 0px 20px rgba(255, 0, 0, 0.6)",
              "0px 0px 40px rgba(0, 255, 0, 1)",
              "0px 0px 20px rgba(0, 0, 255, 0.6)",
              "0px 0px 40px rgba(255, 0, 255, 1)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <h3 className="text-2xl  italic"> Open to Work</h3>
          <p className="text-gray-400 mt-2 italic">Looking for exciting opportunities in software development and blockchain innovation.</p>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <motion.div 
        variants={itemVariants}
        className="w-2/5"
      >
        <PixelTransition
          firstContent={
            <img
              src="/1.jpg"
              alt="default pixel transition content, a cat!"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          }
          secondContent={
            <div className="w-full h-full grid place-items-center bg-black rounded-lg">
              <p className="text-2xl font-black italic">
                Let's schedule a call
              </p>
            </div>
          }
          gridSize={14}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
