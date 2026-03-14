"use client";
// CustomCursor.js
import { useEffect, useRef } from "react";
import "./Customcursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.35;
      currentY += (targetY - currentY) * 0.35;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      const settled =
        Math.abs(targetX - currentX) < 0.1 && Math.abs(targetY - currentY) < 0.1;

      if (settled) {
        frameRef.current = null;
        return;
      }

      frameRef.current = requestAnimationFrame(render);
    };

    const moveCursor = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(render);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      {/* SVG or any custom cursor content goes here */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 200 225"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.562741 19.2373C0.56274 4.61109 16.3961 -4.53031 29.0627 2.78279L190.431 95.9487C206.67 105.325 200.951 130.062 182.244 131.358L97.3225 137.241C91.4792 137.646 86.1493 140.723 82.8771 145.581L35.3213 216.183C24.8453 231.736 0.562744 224.321 0.562743 205.569L0.562741 19.2373Z"
          fill="#D9D9D9"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
