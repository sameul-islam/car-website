
import React, { useRef, useState, useEffect } from "react";

const CarImage = ({ car }) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });

 
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({ x: `${x}%`, y: `${y}%` });
  };


  const handleWheelZoom = (e) => {
    e.preventDefault(); 
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(prev + delta, 1), 3));
  };

  let initialDistance = null;
  let initialScale = scale;

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      initialDistance = Math.sqrt(dx * dx + dy * dy);
      initialScale = scale;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && initialDistance) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const diff = (distance - initialDistance) / 200;
      setScale(Math.min(Math.max(initialScale + diff, 1), 3));
      e.preventDefault(); 
    }
  };

 
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheelZoom, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheelZoom);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg cursor-zoom-in"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ perspective: "1000px" }}
    >
      <img
        ref={imgRef}
        src={car.image}
        alt={car.name.EN}
        className="w-full h-auto object-cover transition-transform duration-200 ease-out"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: `${origin.x} ${origin.y}`,
        }}
      />
    </div>
  );
};

export default CarImage;
