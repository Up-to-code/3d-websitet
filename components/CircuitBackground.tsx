/**
 * CircuitBackground component
 * Renders an SVG circuit board pattern as a decorative background element.
 * Used across multiple sections for visual consistency.
 */
export default function CircuitBackground() {
    return (
        <div
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            aria-hidden="true"
        >
            <svg width="100%" height="100%" role="img" aria-label="Circuit board pattern">
                <pattern id="circuit-global" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path
                        d="M10 10 L90 10 M90 10 L90 90 M90 90 L10 90 M10 90 L10 10"
                        stroke="var(--accent)"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0.3"
                    />
                    <circle cx="10" cy="10" r="1.5" fill="var(--accent)" />
                    <circle cx="90" cy="90" r="1.5" fill="var(--accent)" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit-global)" />
            </svg>
        </div>
    );
}
