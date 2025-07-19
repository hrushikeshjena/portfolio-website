import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };

    const onMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const onMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150); // pulse effect duration
    };
    const onMouseUp = () => setClicked(false);
    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  useEffect(() => {
    const hoverTargets = document.querySelectorAll('a, button, .cursor-hover');

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorClasses = [
    "fixed z-[9999] pointer-events-none transition-transform duration-150 ease-out",
    visible ? "opacity-100" : "opacity-0",
    clicked ? "scale-75 bg-blue-700" : "",
    hovered ? "scale-150 border border-blue-500 bg-transparent" : "",
  ].join(" ");

  return (
    <>
      {/* Cursor Outer Ring */}
      <div
        className={`${cursorClasses} w-12 h-12 rounded-full blur-sm opacity-60`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />

      {/* Cursor Inner Dot */}
      <div
        className="fixed z-[9999] w-2.5 h-2.5 bg-blue-500 rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
