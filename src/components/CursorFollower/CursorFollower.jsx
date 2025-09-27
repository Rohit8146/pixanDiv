import React, { useEffect, useState } from "react";
import "./cursor.css";

export default function CursorFollower() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [circleColor, setCircleColor] = useState("black");

  useEffect(() => {
    const moveHandler = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Detect element under cursor
      const elem = document.elementFromPoint(e.clientX, e.clientY);
      if (elem) {
        const style = window.getComputedStyle(elem);
        const bgColor = style.backgroundColor;

        if (
          bgColor &&
          bgColor !== "transparent" &&
          bgColor !== "rgba(0, 0, 0, 0)"
        ) {
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            const r = parseInt(rgb[0], 10);
            const g = parseInt(rgb[1], 10);
            const b = parseInt(rgb[2], 10);

            // Perceived brightness formula
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;

            // If background is light → black circle, else white
            setCircleColor(brightness > 128 ? "black" : "white");
          }
        } else {
          // Default (if transparent)
          setCircleColor("black");
        }
      }
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  useEffect(() => {
    let raf;
    const follow = () => {
      setFollower((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }));
      raf = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(raf);
  }, [mousePos]);

  return (
    <div
      className="cursor-follower"
      style={{
        left: `${follower.x}px`,
        top: `${follower.y}px`,
        backgroundColor: circleColor,
      }}
    />
  );
}
