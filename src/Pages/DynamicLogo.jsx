import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DynamicLogo = ({ config }) => {
    const ringOuterRef = useRef();
    const ringBlueRef = useRef();
    const pointerRef = useRef();
    const barrierMarkRef = useRef();
    const ticksRef = useRef([]);

    // This function handles the animation logic
    const updateLogo = () => {
        const totalDays = 10 * 365.25; // Total days in the tenor (10 years)
        const elapsedDays = (new Date(config.current_date) - new Date(config.start_date)) / (1000 * 60 * 60 * 24);
        const rotationDegree = (elapsedDays / totalDays) * 360;

        // Rotate the outer and blue rings
        gsap.to(ringOuterRef.current, { rotation: rotationDegree, duration: 0.5, transformOrigin: '50% 50%' });
        gsap.to(ringBlueRef.current, { rotation: rotationDegree, duration: 0.5, transformOrigin: '50% 50%' });

        // Update the observation ticks
        config.observations.forEach((obs, index) => {
            const tick = ticksRef.current[index];
            const tickRotation = (index / config.observations.length) * 360; // Distribute ticks around the circle
            gsap.to(tick, { rotation: tickRotation, duration: 0.5, transformOrigin: '50% 50%' });

            // Mark ticks as bold if triggered
            if (obs.triggered) {
                tick.setAttribute('stroke', '#000'); // Change color if triggered
            }
        });

        // Adjust the pointer ‘A’ based on current market level
        const pointerPosition = ((config.current_level - config.initial_strike_level) / config.initial_strike_level) * 180;
        gsap.to(pointerRef.current, { rotation: pointerPosition, duration: 0.5, transformOrigin: '50% 50%' });

        // Barrier and hurdle logic
        const barrierPosition = (config.barrier_percent + 50) * 180 / 50; // Translate barrier to 9:00 to 12:00 positions
        gsap.to(barrierMarkRef.current, { rotation: barrierPosition, duration: 0.5, transformOrigin: '50% 50%' });
    };

    // Trigger the updateLogo function on mount and whenever config changes
    useEffect(() => {
        updateLogo();
    }, [config]);

    return (
        <svg id="autocalls-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="img" aria-labelledby="alt">
            <title id="alt">Autocalls dynamic logo</title>

            {/* Outer ring with segments */}
            <g id="rotating-shell" className="rotate-clockwise">
                <g ref={ringOuterRef} id="ring-outer">
                    {/* Repeat segments programmatically in JS */}
                    {[...Array(10)].map((_, index) => (
                        <g key={index} className="segment" data-index={index}>
                            <path
                                className="seg-fill"
                                d={`M512,96 A416,416 0 0 1 ${512 + 416 * Math.cos((Math.PI * 2 * index) / 10)}, ${512 + 416 * Math.sin((Math.PI * 2 * index) / 10)}`}
                            />
                            <path
                                className="seg-outline"
                                d={`M512,96 A416,416 0 0 1 ${512 + 416 * Math.cos((Math.PI * 2 * index) / 10)}, ${512 + 416 * Math.sin((Math.PI * 2 * index) / 10)}`}
                            />
                        </g>
                    ))}
                </g>

                {/* Blue ring and observation ticks */}
                <g ref={ringBlueRef} id="ring-blue">
                    <circle className="ring-blue-base" cx="512" cy="512" r="330" fill="none" stroke="#0A255A" strokeWidth="6" />
                    <g id="ticks">
                        {config.observations.map((_, index) => (
                            <line
                                key={index}
                                ref={(el) => (ticksRef.current[index] = el)}
                                className="tick"
                                x1="512"
                                y1="182"
                                x2="512"
                                y2="168"
                                stroke="#A6A6A6"
                                strokeWidth="2"
                            />
                        ))}
                    </g>

                    {/* Barrier Marker */}
                    <line ref={barrierMarkRef} id="barrier-maturity-mark" x1="512" y1="182" x2="512" y2="166" stroke="#C62828" strokeWidth="2" />
                </g>
            </g>

            {/* Pointer ‘A’ */}
            <g id="pointer" ref={pointerRef}>
                <path className="pointer-A" d="M512,360 L540,540 L512,520 L484,540 Z" fill="#0A255A" />
            </g>

            {/* Center dot */}
            <circle id="centre-dot" cx="512" cy="512" r="48" fill="#007A3A" />

            {/* Bottom arrow & Data */}
            <g id="bottom-arrow">
                <path className="arrow-shape" d="M472,800 L512,760 L552,800 Z" fill="#0FA15A" />
            </g>
            <g id="data-area">
                <text className="counterparty" x="512" y="880" textAnchor="middle" fontSize="24" fill="#0A255A">
                    {config.counterparty}
                </text>
                <text className="called-label" x="512" y="910" textAnchor="middle" fontSize="20" fill="#0A255A">
                    {config.is_called ? 'Called on ' + config.called_date : ''}
                </text>
            </g>

            {/* Wordmark */}
            <g id="wordmark">
                <text x="512" y="980" textAnchor="middle" fontSize="36" fill="#0A255A">
                    Autocalls.uk
                </text>
            </g>
        </svg>
    );
};

export default DynamicLogo;
