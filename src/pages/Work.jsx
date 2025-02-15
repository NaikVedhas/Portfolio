import Projects from "../components/Projects"
import GradientText from "../store/GradientText";

const Work = () => {
  
  
  
  return (
    <div>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-5xl italic"
      >
        Curated Work
      </GradientText>
    <Projects />
    </div>
  )
}
export default Work