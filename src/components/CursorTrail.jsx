import { useState, useEffect } from "react";

const CursorTrail = () => {
  const [trailDots, setTrailDots] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  let dotId = 0; // Unique incremental ID

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      setIsMoving(true);

      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Add new dot to trail with unique ID
      setTrailDots((prev) => [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          id: dotId++, // Incremental unique ID
        },
      ].slice(-20)); // Keep only last 20 dots

      // Set timeout to clear trail when mouse stops
      timeoutId = setTimeout(() => {
        setIsMoving(false);
        setTrailDots([]);
      }, 150); // Clear after 150ms of no movement
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!isMoving) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trailDots.map((dot, i) => (
        <div
          key={dot.id} // Unique key
          className="fixed rounded-full bg-cyan-400 transition-opacity duration-150"
          style={{
            left: dot.x,
            top: dot.y,
            width: `${8 - i * 0.3}px`,
            height: `${8 - i * 0.3}px`,
            opacity: 1 - i * 0.05,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
