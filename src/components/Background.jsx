import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effects for different layers
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
            {/* White Background Base */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />

            {/* Animated Gradient Orbs - Light Theme (Soft Blues/Purples) */}
            <motion.div
                style={{ y: y1, rotate: rotate1, opacity }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-blue-100/60"
            />

            <motion.div
                style={{ y: y2, scale: useTransform(scrollY, [0, 1000], [1, 1.2]) }}
                className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px] bg-indigo-100/50"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] rounded-full blur-[130px] bg-violet-100/50"
            />

            {/* Grid Pattern Overlay (Low Opacity - Darker grid for white bg) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))] opacity-[0.03]" />

            {/* Particles (Darker for visibility) */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-gray-400 rounded-full opacity-40"
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            y: [null, Math.random() * 100 + "vh"],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: Math.random() * 3 + 1 + "px",
                            height: Math.random() * 3 + 1 + "px",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Background;
