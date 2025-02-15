import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Mic,
  Trophy,
  Github,
  Linkedin,
  Twitter,
  Coffee,
  Mail,
  ChevronDown,
  Terminal,
} from "lucide-react";
import CountUp from "../store/CountUp";
import GradientText from "../store/GradientText";
import Work from "./Work";
import ShinyText from "../store/ShinyText";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  const socialLinks = [
    { icon: Github, link: "#", color: "hover:text-purple-500" },
    { icon: Linkedin, link: "#", color: "hover:text-blue-500" },
    { icon: Twitter, link: "#", color: "hover:text-sky-500" },
    { icon: Mail, link: "#", color: "hover:text-red-500" },
  ];

  return (
    <div className="bg-black min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Hero Section */}
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
              className="lg:col-span-7 space-y-8"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <Terminal className="text-blue-500" />
                  <p className="text-blue-500 font-mono">Hello World!</p>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Between Logic & Creativity —
                  <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className=""
                    >
                      That's Where I Build.
                    </GradientText>
                  </span>
                </h1>
                <p className="text-xl text-gray-400 italic mt-4">
                  <ShinyText
                    text={`"Love building scalable products & mentoring developers"`}
                    disabled={false}
                    speed={3}
                    className=""
                  />
                </p>

                {/* Role Tags */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4 mt-6"
                >
                  <span className="px-4 py-2  text-blue-500 rounded-full"></span>
                  <span className="px-4 py-2 bg-green-500/10 text-green-500 rounded-full">
                    Blockchain Head
                  </span>
                  <span className="px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-full">
                    Web3 Speaker
                  </span>
                </motion.div>
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
                    whileHover={{ y: -5 }}
                    className={`text-gray-400 transition-colors ${social.color}`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
              >
                <Coffee size={20} />
                <span>Let's Connect!</span>
              </motion.button>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                animate={{
                  rotate: isHovered ? 5 : 0,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <img
                  src="/1.jpg"
                  alt="Vedhas Naik"
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-2xl"
                />
              </motion.div>
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
    </div>
  );
};

export default Home;
