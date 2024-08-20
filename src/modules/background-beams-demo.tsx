"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <BackgroundBeams />
    </div>
  );
}
