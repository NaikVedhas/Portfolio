import ShinyText from "../store/ShinyText";

const About = () => {
  return (
    <div className="flex items-center mx-9 my-3 ">
      {/* Left Side - Text Content */}
      <div className="w-1/2 pl-14">
        <h1 className="text-xl font-semibold text-gray-500">More About Me</h1>
        <div className=" text-2xl mt-5 mx-6">
          <h2 className="text-4xl">Full Stack Developer and a little bit of everything</h2>
          
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
      <div className="w-1/2 flex justify-center">
        <img 
          src="/1.jpg" 
          alt="Profile"
          className="rounded-full w-50 h-50 object-cover"
        />
      </div>
    </div>
  )
}

export default About;
