// Components/SmoothScroll.jsx
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // nice default easing
            smoothWheel: true,
            smoothTouch: false,
        });

        lenisRef.current = lenis; // expose it

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Attach to window for easy access
    useEffect(() => {
        window.lenis = lenisRef.current;
    }, []);

    return <>{children}</>;
}