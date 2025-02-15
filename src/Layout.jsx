import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GradientText from "./store/GradientText";
import { useState, useEffect } from "react";
import CountUp from "./store/CountUp";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white ">
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-9xl"
          >
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="text-9xl"
            />
          </GradientText>
        </div>
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};
export default Layout;
