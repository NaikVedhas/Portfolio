import GradientText from "../store/GradientText";
import About from "./About";
import Work from "./Work";
// import Ribbons from "../store/Ribbons";

const Home = () => {
  return (
    <div>
      Home
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        Add a splash of color!
      </GradientText>
     
      {/* <Work/>
      <About/> */}
    </div>
  );
};
export default Home;
