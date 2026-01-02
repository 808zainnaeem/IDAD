// Components/SmoothScroll.jsx
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        if (!window.lenis) return;

        let currentSection = 'overview';

        const onScroll = () => {
            const scrollPos = window.lenis.scroll; // Use Lenis's smooth scroll value
            const windowHeight = window.innerHeight;

            let foundSection = null;

            for (let i = navItems.length - 1; i >= 0; i--) {
                const section = document.getElementById(navItems[i].id);
                if (!section) continue;

                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.lenis.scroll - 120; // offset for navbar

                // Consider section active if its top is near or above viewport top
                if (sectionTop <= windowHeight * 0.3) { // trigger when ~30% into viewport
                    foundSection = navItems[i].id;
                    break;
                }
            }

            if (foundSection && foundSection !== currentSection) {
                currentSection = foundSection;
                // Only update hash + state when actually changing
                window.history.replaceState(null, '', `#${foundSection}`);
                setActiveSection(foundSection);
            }
        };

        // Listen to Lenis scroll event (smooth + performant)
        window.lenis.on('scroll', onScroll);

        // Initial check
        onScroll();

        return () => {
            window.lenis?.off('scroll', onScroll);
        };
    }, []);

    // Attach to window for easy access
    useEffect(() => {
        window.lenis = lenisRef.current;
    }, []);

    return <>{children}</>;
}