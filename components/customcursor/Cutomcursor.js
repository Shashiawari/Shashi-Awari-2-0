"use client";
// CustomCursor.js
import { useEffect, useRef } from "react";
import "./Customcursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const frameRef = useRef(null);
  const stateRef = useRef({
    currentX: -100,
    currentY: -100,
    targetX: -100,
    targetY: -100,
    visible: false,
  });

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const render = () => {
      const state = stateRef.current;

      state.currentX += (state.targetX - state.currentX) * 0.42;
      state.currentY += (state.targetY - state.currentY) * 0.42;

      cursor.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0) translate(-50%, -50%)`;

      if (!state.visible) {
        state.visible = true;
        cursor.classList.add("is-visible");
      }

      const settled =
        Math.abs(state.targetX - state.currentX) < 0.15 &&
        Math.abs(state.targetY - state.currentY) < 0.15;

      if (settled) {
        frameRef.current = null;
        return;
      }

      frameRef.current = requestAnimationFrame(render);
    };

    const moveCursor = (event) => {
      const state = stateRef.current;
      state.targetX = event.clientX;
      state.targetY = event.clientY;

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(render);
      }
    };

    const hideCursor = () => {
      stateRef.current.visible = false;
      cursor.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerdown", moveCursor, { passive: true });
    window.addEventListener("pointerleave", hideCursor, { passive: true });
    document.addEventListener("visibilitychange", hideCursor, { passive: true });

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerdown", moveCursor);
      window.removeEventListener("pointerleave", hideCursor);
      document.removeEventListener("visibilitychange", hideCursor);
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
