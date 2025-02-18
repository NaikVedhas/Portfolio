import React from "react";
import { motion } from "framer-motion";
import {  Clock, Calendar, Users, Link2 } from "lucide-react";

const SpeakerSession = () => {
  return (
    <div className="min-h-screen bg-black py-14 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured Speaker Session
          </h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Section - Made Larger */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative group lg:sticky lg:top-8"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <motion.div
              className="relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/Poster.png"
                alt="Speaker Session"
                className="w-full h-[600px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-white">
                All Roads lead to Bitcoin
              </h3>
              <p className="text-gray-400 text-xl italic">
                Technical Talk at Mumbai 2024
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="text-blue-500" size={22} />
                <span className="text-lg">5 April, 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="text-blue-500" size={22} />
                <span className="text-lg">2 Hours</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="text-blue-500" size={22} />
                <span className="text-lg">50 + </span>
              </div>
              <a 
                href="https://lu.ma/blockchainbytes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <Link2 size={22} />
                <span className="text-lg">Event Details</span>
              </a>
            </div>

            <div className="space-y-5">
              <p className="text-gray-300 leading-relaxed text-md">
                I had the incredible opportunity to conduct a speaker session alongside <span className="font-bold text-lg">Manav Ailawadi, co-founder of Blockchained India</span>, as part of the
                <span className="font-bold text-lg"> Blockchain Bytes India series</span>.
              </p>
              <p className="text-gray-300 leading-relaxed text-md">
                The session was structured into two insightful parts:
              </p>
              <ul className="list-disc pl-8 text-gray-300 space-y-2">
                <li className="text-md">
                  Bitcoin & Web3 Insights – Manav Sir shared deep insights on
                  Bitcoin's price trends, Web3 adoption, Bitcoin halving, and future
                  opportunities for developers in 2024.
                </li>
                <li className="text-md">
                  Web2 vs Web3 & Solana Overview – I led an interactive segment,
                  breaking down Web3 fundamentals and its advantages over Web2, discussing
                  on-chain vs off-chain storage, and introducing Solana—its architecture,
                  benefits, and growing impact in the blockchain ecosystem.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-md">
                This session was a milestone in my journey, transforming my experience
                from an attendee to a speaker. It reinforced my passion for educating,
                building, and pushing the boundaries of blockchain technology.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SpeakerSession;