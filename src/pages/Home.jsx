import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Coffee,
  ChevronDown,
} from "lucide-react";
import GradientText from "../store/GradientText";
import Work from "./Work";
import ShinyText from "../store/ShinyText";
import TiltedCard from "../store/TitltedCard";
import TechStack from "./Techstack";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    { icon: Github, link: "https://github.com/NaikVedhas", color: "hover:text-purple-500" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/vedhas-naik-005378253/", color: "hover:text-blue-500" },
    { icon: Twitter, link: "#", color: "hover:text-sky-500" },
    { icon: Mail, link: "mailto:vedhasnaik121@gmail.com", color: "hover:text-red-500" },
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Role Tags - Redesigned as floating pills */}
              <div className="flex flex-wrap gap-4 mb-6">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-white shadow-lg shadow-blue-500/20"
                >
                  Full Stack Developer
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg text-white shadow-lg shadow-purple-500/20"
                >
                  Blockchain Enthusiast
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-lg text-white shadow-lg shadow-pink-500/20"
                >
                  Web3 Speaker
                </motion.div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
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
                    className="text-9xl"
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
                  className="text-9xl inline-block"
                >
                  Where I Build!
                </GradientText>
              </h1>

              <p className="text-xl text-gray-400 italic">
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
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`text-gray-400 transition-colors ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Redesigned Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="" />
            <TiltedCard
              imageSrc="/1.jpg"
              altText={"Vedhas Naik"}
              captionText={"Vedhas Naik"}
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text ">Vedhas Naik</p>
              }
            />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mt-12"
        >
          <ChevronDown className="text-gray-400 w-8 h-8" />
        </motion.div>
      </div>
      <Work />
      <TechStack />
    </div>
  );
};

export default Home;
