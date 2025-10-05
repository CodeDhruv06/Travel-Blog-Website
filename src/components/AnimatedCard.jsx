import React, { useState } from "react";

export default function AnimatedCard({ children, navigateTo, color }) {
  const [shadow, setShadow] = useState("0px 10px 20px rgba(0,0,0,0.15)");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = (x / rect.width - 0.5) * 25;
    const moveY = (y / rect.height - 0.5) * 25;

    setShadow(`${moveX}px ${moveY}px 30px rgba(0, 180, 180, 0.45)`);

  };

  const handleMouseLeave = () => {
    setShadow("0px 10px 20px rgba(0,0,0,0.15)");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={navigateTo}
      className="transform transition-transform duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer transition-all duration-500 bg-white rounded-lg p-6 shadow-md hover:shadow-lg"
      style={{
        boxShadow: shadow,
        transition: "box-shadow 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
}
