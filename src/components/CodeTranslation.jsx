import React from "react";
import { motion } from "framer-motion";

// --- Icons ---

const FigmaIcon = ({ className }) => (
    <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M19 28.5C19 28.5 19 38 9.5 38C0 38 0 28.5 0 28.5C0 19 9.5 19 9.5 19C19 19 19 28.5 19 28.5Z" fill="#0ACF83" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38C14.7467 38 19 42.2533 19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M38 19C38 19 38 9.5 28.5 9.5C19 9.5 19 19 19 19L38 19Z" fill="#A259FF" />
        <path d="M19 0C19 0 19 9.5 9.5 9.5C0 9.5 0 0 0 0L19 0Z" fill="#F24E1E" />
        <path d="M38 28.5C38 28.5 38 19 28.5 19C19 19 19 28.5 19 28.5L38 28.5Z" fill="#1ABCFE" />
    </svg>
);

const ReactIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        </g>
    </svg>
);

const NextJsIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24Z" fill="white" />
        <path d="M18.899 19.3871L7.79848 5.25012H5.6698V18.1764H7.50974V7.9372L17.756 21.0428C18.1568 20.5283 18.5434 19.9806 18.899 19.3871Z" fill="black" />
        <path d="M16.5776 5.25012H18.4175V15.75L16.5776 13.5645V5.25012Z" fill="black" />
    </svg>
);

export default function CodeTranslation() {
    // 3-second cycle configuration
    const CYCLE_DURATION = 3.0;

    // Animation 1: Figma Pulse (Starts at 0s, short pulse)
    const figmaVariants = {
        pulse: {
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5], // starts desaturated
            filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"],
            transition: {
                duration: 1.0,
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: CYCLE_DURATION - 1.0,
                ease: "easeInOut"
            }
        }
    };

    // Animation 2: Beam (Travels from left to right)
    const beamVariants = {
        shoot: {
            left: ["0%", "100%"],
            width: ["10%", "30%", "10%"], // Expands slightly in middle
            opacity: [0, 1, 0], // Fades in and out
            transition: {
                duration: 1.0,
                delay: 0.8, // Starts after Figma pulse peaks
                repeat: Infinity,
                repeatDelay: CYCLE_DURATION - 1.0,
                ease: "easeInOut"
            }
        }
    };

    // Animation 3: Code Bloom (React/NextJS hit)
    const codeVariants = {
        bloom: {
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            textShadow: ["0 0 0px rgba(0,255,255,0)", "0 0 20px rgba(0,255,255,0.8)", "0 0 0px rgba(0,255,255,0)"],
            transition: {
                duration: 0.8,
                delay: 1.6, // Hits when beam arrives
                repeat: Infinity,
                repeatDelay: CYCLE_DURATION - 0.8,
                ease: "circOut"
            }
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-full px-8 py-4 backdrop-blur-sm flex items-center justify-between gap-6 relative overflow-hidden">
                {/* 1. LEFT: FIGMA (Input) */}
                <div className="relative z-10 flex flex-col items-center gap-2 group">
                    <motion.div
                        className="p-2 bg-[#1E1E1E] rounded-xl border border-white/10"
                        variants={figmaVariants}
                        animate="pulse"
                    >
                        <FigmaIcon className="w-8 h-8" />
                    </motion.div>
                </div>

                {/* 2. MIDDLE: THE DATA PIPE */}
                <div className="flex-1 relative h-[2px] bg-white/10 rounded-full overflow-hidden">
                    {/* The Rail */}
                    <div className="absolute inset-0 bg-white/5" />

                    {/* The Electric Cobalt Beam */}
                    <motion.div
                        className="absolute top-0 h-full bg-gradient-to-r from-transparent via-[#4B00FF] to-transparent shadow-[0_0_15px_rgba(75,0,255,0.8)]"
                        style={{ width: "20%" }}
                        variants={beamVariants}
                        animate="shoot"
                    />
                </div>

                {/* 3. RIGHT: CODE (Output) */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                    <motion.div
                        className="flex items-center gap-3 p-2 bg-[#1E1E1E] rounded-xl border border-white/10"
                        variants={codeVariants}
                        animate="bloom"
                    >
                        <ReactIcon className="w-8 h-8 text-[#61DAFB]" />
                        <div className="w-[1px] h-6 bg-white/20" /> {/* Divider */}
                        <NextJsIcon className="w-8 h-8" />
                    </motion.div>
                </div>
            </div>



        </div>
    );
};