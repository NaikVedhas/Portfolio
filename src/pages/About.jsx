import ShinyText from "../store/ShinyText";
import PixelTransition from "../store/PixelTransition";

const About = () => {
  return (
    <div className="flex items-center  justify-center  mx-9 my-3 ">
      {/* Left Side - Text Content */}
      <div className="w-3/5 pl-14 mx-9 ">
        <h1 className="text-xl font-semibold text-gray-500">More About Me</h1>
        <div className=" text-2xl mt-5 ml-6">
          <h2 className="text-4xl">
            Full Stack Developer and a little bit of everything
          </h2>

          <p className="mt-2 text-lg italic text-white">
            <ShinyText
              text={`I'm Vedhas Naik, a passionate full-stack developer with expertise in MERN stack, Blockchain, and Data structures & algorithms. I love building seamless and efficient web applications, tackling complex problems, and continuously expanding my knowledge.When I'm not coding, you'll find me watching movies and listening to music(music is my ultimate stress buster). Life is all about balance, and I embrace every part of it with curiosity and enthusiasm.I believe in waking up every day with a drive to create, innovate, and make a difference! `}
              disabled={false}
              speed={2}
              className=" bg-blue-600"
            />
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-2/5 flex ml-9 justify-start">

        <PixelTransition
          firstContent={
            <img
              src="/1.jpg"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                background: "black",
              }}
            >
              <p
                style={{ fontWeight: 900 }}
                className="text-2xl flex italic bg-black"
              >
                Lets schedule a call
              </p>
            </div>
          }
          gridSize={14}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card "
        />
      </div>
    </div>
  );
};

export default About;
