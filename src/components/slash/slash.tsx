"use client";

import React from "react";

const Slash = ({ className }: { className: string }) => {
  return (
    <span
      aria-hidden
      className={`pointer-events-none select-none absolute leading-none font-light ${className}`}
    >
      /
    </span>
  );
};

export default Slash;
