import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Clock, Calendar,Users } from "lucide-react";

const SpeakerSession = () => {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Speaker Session
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative group"
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
                className="w-full h-full object-cover rounded-lg"
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
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                All Roads lead to Bitcoin
              </h3>
              <p className="text-gray-400 text-lg">
                Technical Talk at Mumbai 2024
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="text-blue-500" size={20} />
                <span>5 April, 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="text-blue-500" size={20} />
                <span>2 Hours</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="text-blue-500" size={20} />
                <span>50 + </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-gray-300 leading-relaxed">
                I had the incredible opportunity to conduct a speaker session alongside Manav
                Ailawadi, co-founder of Blockchained India, as part of the
                Blockchain Bytes India series.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The session was structured into two insightful parts:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>
                  Bitcoin & Web3 Insights – Manav Sir shared deep insights on
                  Bitcoin’s price trends, Web3 adoption, Bitcoin halving, and future
                  opportunities for developers in 2024.
                </li>
                <li>
                  Web2 vs Web3 & Solana Overview – I led an interactive segment,
                  breaking down Web3 fundamentals and its advantages over Web2, discussing
                  on-chain vs off-chain storage, and introducing Solana—its architecture,
                  benefits, and growing impact in the blockchain ecosystem.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
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
