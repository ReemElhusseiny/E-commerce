import React, { useRef, useEffect, useState } from 'react';
import '../Css/sale.css';

export function Sale() {
  // const saleRefs = [useRef(null), useRef(null), useRef(null)];
  const [leftPosition, setLeftPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const moveSale = () => {
    if (!isHovered) {
      setLeftPosition((prevPosition) => prevPosition - 40)
    
        
  };
}




  useEffect(() => {
    const timer = setInterval(moveSale, 500);

    return () => {
      clearInterval(timer);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="smallbox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p
        // ref={saleRefs[0]}
        className="sale"
        style={{ transform: `translateX(${leftPosition}px)` }
} 
      >
        Big Sale
      </p>
      <p
        // ref={saleRefs[1]}
        className="sale"
        style={{ transform: `translateX(${leftPosition}px)` }}
        // {leftPosition<70 ? setLeftPosition(900) }
      >
        Big Sale
      </p>
      <p
        // ref={saleRefs[2]}
        className="sale"
        style={{ transform: `translateX(${leftPosition}px)` }}
      >
        Big Sale
      </p>
    </div>
  );
}
