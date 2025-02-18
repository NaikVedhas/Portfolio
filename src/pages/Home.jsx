import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import GradientText from "../store/GradientText";
import ShinyText from "../store/ShinyText";
import TiltedCard from "../store/TitltedCard";
import TechStack from "./TechStack";
import About from "./About";
import Projects from "./Projects";
import Speaker from "./Speaker";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/NaikVedhas", color: "hover:text-purple-500" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/vedhas-naik-005378253/", color: "hover:text-blue-500" },
    { icon: FaXTwitter, link: "https://x.com/NaikVedhas58616", color: "hover:text-sky-500" },
    { icon: Mail, link: "mailto:vedhasnaik121@gmail.com", color: "hover:text-red-500" },
  ];

  return (
    <div className="bg-black min-h-screen mt-15">
      <div className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Role Tags */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-white shadow-lg shadow-blue-500/20 text-sm sm:text-base"
                >
                  Full Stack Developer
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg text-white shadow-lg shadow-purple-500/20 text-sm sm:text-base"
                >
                  Blockchain Enthusiast
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-lg text-white shadow-lg shadow-pink-500/20 text-sm sm:text-base"
                >
                  Web3 Speaker
                </motion.div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                <div>Between&nbsp; Logic&nbsp; &</div>
                <div className="flex items-center gap-2">
                  <span>Creativity —</span>
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
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                  >
                    That's
                  </GradientText>
                </div>
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
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl inline-block"
                >
                  Where I Build!
                </GradientText>
              </h1>

              <div className="text-base sm:text-lg lg:text-xl text-gray-400 italic">
                <ShinyText
                  text={`"Blockchain Head @Community of Coders || Third-year Student at VJTI College, Mumbai"`}
                  disabled={false}
                  speed={3}
                />
                <ShinyText
                  text={`"Love building scalable products & mentoring developers"`}
                  disabled={false}
                  speed={3}
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-4 sm:space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`text-gray-400 transition-colors ${social.color}`}
                >
                  <social.icon size={20} className="sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative flex justify-center lg:justify-start"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <TiltedCard
              imageSrc="/1.jpg"
              altText={"Vedhas Naik"}
              captionText={"Vedhas Naik"}
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Vedhas Naik</p>
              }
              className="sm:containerHeight-[400px] sm:containerWidth-[400px] sm:imageHeight-[400px] sm:imageWidth-[400px]"
            />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <ChevronDown className="text-gray-400 w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>
      </div>
      <Speaker />
      <Projects />
      <TechStack />
      <About />
    </div>
  );
};

export default Home;