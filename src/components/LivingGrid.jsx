import React, { useEffect, useState, useRef } from 'react'

export default function LivingGrid() {
    const GRID_SIZE = 40
    const [squares, setSquares] = useState([])

    // Refs for Spotlight
    const containerRef = useRef(null)
    const spotlightRef = useRef(null)

    useEffect(() => {
        // --- Pulse Logic ---
        const cols = Math.ceil(window.innerWidth / GRID_SIZE)
        const rows = Math.ceil(window.innerHeight / GRID_SIZE)

        // Generate pulses: 20 Blue + 5 Orange
        const generatedSquares = []

        // Helper to add squares
        const addSquare = (color, prefix) => {
            generatedSquares.push({
                id: `${prefix}-${Math.random().toString(36).substr(2, 9)}`, // Robust Unique ID
                col: Math.floor(Math.random() * cols),
                row: Math.floor(Math.random() * rows),
                delay: Math.random() * 5,
                duration: 4 + Math.random() * 4,
                color: color
            })
        }

        // Add 10 Blue
        for (let i = 0; i < 10; i++) addSquare('#3B82F6', 'blue')

        // Add 5 Orange
        for (let i = 0; i < 5; i++) addSquare('#FF4F00', 'orange')

        setSquares(generatedSquares)

        // --- Spotlight Logic Removed ---
        // const updateMousePosition = (e) => { ... }
        // window.addEventListener('mousemove', updateMousePosition)
        // return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Spotlight Orb Removed */}


            {/* Base Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    zIndex: 0
                }}
            />

            {/* Pulsing Squares */}
            {squares.map((sq) => (
                <div
                    key={sq.id}
                    className="absolute"
                    style={{
                        width: `${GRID_SIZE - 1}px`,
                        height: `${GRID_SIZE - 1}px`,
                        left: `${sq.col * GRID_SIZE + 1}px`,
                        top: `${sq.row * GRID_SIZE + 1}px`,
                        backgroundColor: sq.color,
                        opacity: 0,
                        animation: `pulse-grid ${sq.duration}s ease-in-out infinite`,
                        animationDelay: `${sq.delay}s`,
                        zIndex: 0 // Explicit Z-Index
                    }}
                />
            ))}

            <style>
                {`
                @keyframes pulse-grid {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 0.4; }
                }
                `}
            </style>
        </div>
    )
}
