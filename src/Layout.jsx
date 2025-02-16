import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hyperspeed from './store/HyperSpeed';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [showHyperspace, setShowHyperspace] = useState(false);
  const [initialTextComplete, setInitialTextComplete] = useState(false);

  useEffect(() => {
    // Show initial text for 2 seconds
    const textTimer = setTimeout(() => {
      setInitialTextComplete(true);
    }, 2000);

    // Complete loading after 10 seconds
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 15000);

    // Show hyperspace after text moves up
    const hyperspaceTimer = setTimeout(() => {
      setShowHyperspace(true);
    }, 2500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(loadingTimer);
      clearTimeout(hyperspaceTimer);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <AnimatePresence>
        {loading ? (
          <motion.div 
            className="h-screen flex flex-col relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-center justify-center"
              initial={{ y: "50vh", translateY: "-50%" }}
              animate={{ 
                y: initialTextComplete ? "10vh" : "50vh",
                translateY: "-50%"
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              <motion.h1 
                className="text-2xl font-semibold italic mb-3"
                animate={{ scale: initialTextComplete ? 0.8 : 1 }}
                transition={{ duration: 0.8 }}
              >
                Reaching Vedhas... Hold tight!🚀
              </motion.h1>
              
              <AnimatePresence>
                {initialTextComplete && (
                  <motion.p
                    className="text text-gray-400 opacity-80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Click & hold anywhere to boost the speed!
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <AnimatePresence>
              {showHyperspace && (
                <motion.div
                  className="w-full absolute inset-0 mt-6 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Hyperspeed
                    effectOptions={{
                      onSpeedUp: () => { },
                      onSlowDown: () => { },
                      distortion: 'deepDistortion',
                      length: 400,
                      roadWidth: 18,
                      islandWidth: 2,
                      lanesPerRoad: 5,
                      fov: 90,
                      fovSpeedUp: 150,
                      speedUp: 2,
                      carLightsFade: 0.4,
                      totalSideLightSticks: 50,
                      lightPairsPerRoadWay: 50,
                      shoulderLinesWidthPercentage: 0.05,
                      brokenLinesWidthPercentage: 0.1,
                      brokenLinesLengthPercentage: 0.5,
                      lightStickWidth: [0.12, 0.5],
                      lightStickHeight: [1.3, 1.7],
                      movingAwaySpeed: [60, 80],
                      movingCloserSpeed: [-120, -160],
                      carLightsLength: [400 * 0.05, 400 * 0.15],
                      carLightsRadius: [0.05, 0.14],
                      carWidthPercentage: [0.3, 0.5],
                      carShiftX: [-0.2, 0.2],
                      carFloorSeparation: [0.05, 1],
                      colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0a,
                        background: 0x000000,
                        shoulderLines: 0x131318,
                        brokenLines: 0x131318,
                        leftCars: [0xff102a, 0xEB383E, 0xff102a],
                        rightCars: [0xdadafa, 0xBEBAE3, 0x8F97E4],
                        sticks: 0xdadafa,
                      }
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Outlet />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;