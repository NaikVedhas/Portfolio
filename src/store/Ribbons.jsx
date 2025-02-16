import Ribbons from "../store/Ribbons.jsx"
const NotFound = () => {
  return (
    <div style={{ position: "relative", height: "500px", overflow: "hidden" }}>
      <Ribbons
        baseThickness={30}
        colors={["#ffffff"]}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
      />
      <h1
        className="text-white text-3xl"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10, // Ensures it appears above the canvas
          pointerEvents: "none", // Allows mouse events to pass through to the ribbons
        }}
      >
        Heyy
      </h1>
    </div>
  );
};

export default NotFound;
