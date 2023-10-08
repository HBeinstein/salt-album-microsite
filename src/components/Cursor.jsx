import { gsap } from "gsap";
import { useState, useLayoutEffect, useRef } from "react";

export function Cursor() {
  // function onLoadCursor() {
  gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
  // }

  let xTo = gsap.quickTo(".cursor", "x", { duration: 0.1, ease: "sine.in" });
  let yTo = gsap.quickTo(".cursor", "y", { duration: 0.1, ease: "sine.in" });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  return <div className="cursor"> </div>;
}
