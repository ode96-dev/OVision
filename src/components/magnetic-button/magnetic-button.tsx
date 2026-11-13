"use client";

import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 0.35,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 0.1, tension: 250, friction: 18 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    api.start({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    api.start({ x: 0, y: 0 });
  };

  return (
    <animated.button
      ref={ref}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: x.to((xVal) => `translate3d(${xVal}px, ${y.get()}px, 0)`),
      }}
      className={`inline-flex items-center justify-center transition-shadow cursor-pointer ${className}`}
    >
      {children}
    </animated.button>
  );
}

interface SpringTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function SpringTiltCard({
  children,
  className = "",
  maxTilt = 10,
}: SpringTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [{ rotateX, rotateY, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 0.2, tension: 300, friction: 20 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    api.start({
      rotateX: -normY * maxTilt,
      rotateY: normX * maxTilt,
      scale: 1.02,
    });
  };

  const handleMouseLeave = () => {
    api.start({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <animated.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: "perspective(1000px)",
        rotateX,
        rotateY,
        scale,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </animated.div>
  );
}
