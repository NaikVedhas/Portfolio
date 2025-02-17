import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import Magnet from "../store/Magnet";

const Footer = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/speaker", label: "Talks" },
    { path: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      url: "https://github.com/NaikVedhas",
      label: "GitHub"
    },
    { 
      icon: <Linkedin size={20} />, 
      url: "https://linkedin.com/in/YourLinkedIn",
      label: "LinkedIn"
    },
    { 
      icon: <Twitter size={20} />, 
      url: "https://twitter.com/YourTwitter",
      label: "Twitter"
    },
    { 
      icon: <Mail size={20} />, 
      url: "mailto:vedhasnaik121@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white"
            >
              Vedhas Naik
            </motion.h2>
            <p className="text-gray-400 max-w-xs">
              Building innovative solutions at the intersection of Web3 and modern web technologies.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Magnet
                  key={link.path}
                  padding={50}
                  disabled={false}
                  magnetStrength={3}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </Magnet>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <Magnet
                  key={index}
                  padding={50}
                  disabled={false}
                  magnetStrength={3}
                >
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </Magnet>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12  border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vedhas Naik All rights reserved.
            </p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;