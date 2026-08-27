"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<"playing" | "transitioning">("playing");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Fallback timer
    const fallbackTimer = setTimeout(() => {
      if (stage === "playing") {
        handleTransitionOut();
      }
    }, 7000); // Maximum 7 seconds

    return () => clearTimeout(fallbackTimer);
  }, [stage]);

  const handleTransitionOut = () => {
    setStage("transitioning");
    
    // Give it 1.2 seconds to do the smooth move to the corner, then unmount
    setTimeout(onComplete, 1200); 
  };

  return (
    <AnimatePresence>
      <motion.div
        // We fade out the overall white background slightly or keep it transparent
        // to reveal the page underneath while the video moves
        initial={{ backgroundColor: "rgba(255,255,255,1)" }}
        animate={{ backgroundColor: stage === "transitioning" ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)" }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
      >
        <motion.div
          initial={{ 
            scale: 1, 
            x: 0, 
            y: 0, 
            opacity: 1,
            transformOrigin: "top left"
          }}
          animate={{ 
            scale: stage === "transitioning" ? 0.15 : 1,
            // Move it so the center of the video aligns with where the top-left logo is.
            // When scaling with transformOrigin top-left, the top-left stays at 0,0.
            // We can add a little bit of x/y offset to match the padding of the header (p-6 = 24px)
            x: stage === "transitioning" ? 32 : 0,
            y: stage === "transitioning" ? 0 : 0,
            // Fade out the video right at the end so the real header logo can take over seamlessly
            opacity: stage === "transitioning" ? 0 : 1
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.76, 0, 0.24, 1], // Smooth ease out cubic bezier
            opacity: { delay: 1, duration: 0.2 } // Fade out only in the last 0.2s
          }}
          className="w-screen h-screen flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src="/Logo_Animated.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleTransitionOut}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
