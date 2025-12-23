// // hooks/useLenis.js
// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// export const useLenis = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1, // Smoothness speed
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
//       smoothWheel: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);
// };


// hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

let lenisInstance = null;
export const getLenis = () => lenisInstance;

export const useLenis = () => {
  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      lenisInstance = null;
    };
  }, []);
};
