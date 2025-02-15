import GradientText from "../store/GradientText";
import Hyperspeed from '../store/HyperSpeed';

// the component will fill the height/width of its parent container, edit the CSS to change this
// the options below are the default values

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
    

    
    </div>

  );
};
export default Home;
