import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Magnet from "../store/Magnet";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Work" },
    { path: "/speaker", label: "Talks" },
    { path: "/about", label: "About" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 italic"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Magnet
                key={item.path}
                padding={100}
                disabled={false}
                magnetStrength={5}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300
                    ${isActive(item.path) 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </Magnet>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;