import React, { useState, useEffect, useRef } from "react"
import {
    ArrowRight,
    Zap,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export default function CertificationsSectionLayout({ certifications, stats }) {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    const statsRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
    const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

    // Parallax effect for decorative elements
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    return (
        <section
            id="certifications-section"
            ref={sectionRef}
            className="w-full py-24 px-4 bg-black text-white overflow-hidden relative"
        >
            {/* Decorative background elements */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#88734C]/10 blur-3xl opacity-30"
                style={{ y: y1, rotate: rotate1 }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#A9BBC8]/10 blur-3xl opacity-30"
                style={{ y: y2, rotate: rotate2 }}
            />

            <motion.div
                className="container mx-auto max-w-6xl relative z-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
                    <motion.span
                        className="text-[#88734C] font-medium mb-2 flex items-center gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Zap className="w-4 h-4" />
                        PROFESSIONAL QUALIFICATIONS
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">Certifications</h2>
                    <motion.div
                        className="w-24 h-1 bg-[#88734C]"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                </motion.div>

                <motion.p className="text-center max-w-2xl mx-auto mb-16 text-white/70" variants={itemVariants}>
                    Continuous learning and development are key to staying ahead in the tech industry.
                    Here are some of the certifications and milestones I've achieved.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Left Column */}
                    <div className="space-y-16">
                        {certifications
                            .filter((_, index) => index % 2 === 0)
                            .map((cert, index) => (
                                <ServiceItem
                                    key={`left-${index}`}
                                    icon={cert.icon}
                                    title={cert.title}
                                    description={cert.description}
                                    variants={itemVariants}
                                    delay={index * 0.2}
                                    direction="left"
                                />
                            ))}
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
                        <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
                            <motion.div
                                className="rounded-md overflow-hidden shadow-xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Coding image
                                    alt="Coding"
                                    className="w-full h-full object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                >
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="absolute inset-0 border-4 border-[#A9BBC8]/30 rounded-md -m-3 z-[-1]"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            ></motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-16">
                        {certifications
                            .filter((_, index) => index % 2 !== 0)
                            .map((cert, index) => (
                                <ServiceItem
                                    key={`right-${index}`}
                                    icon={cert.icon}
                                    title={cert.title}
                                    description={cert.description}
                                    variants={itemVariants}
                                    delay={index * 0.2}
                                    direction="right"
                                />
                            ))}
                    </div>
                </div>

                {/* Stats Section */}
                {stats && (
                    <motion.div
                        ref={statsRef}
                        className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        animate={isStatsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {stats.map((stat, index) => (
                            <StatCounter
                                key={index}
                                icon={stat.icon}
                                value={stat.value}
                                label={stat.label}
                                suffix={stat.suffix}
                                delay={index * 0.1}
                            />
                        ))}
                    </motion.div>
                )}
            </motion.div>
        </section>
    )
}

function ServiceItem({ icon, title, description, variants, delay, direction }) {
    return (
        <motion.div
            className="flex flex-col group"
            variants={variants}
            transition={{ delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="flex items-center gap-3 mb-3"
                initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.2 }}
            >
                <motion.div
                    className="text-[#88734C] bg-[#88734C]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[#88734C]/20 relative"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                >
                    {icon}
                </motion.div>
                <h3 className="text-xl font-medium text-white group-hover:text-[#88734C] transition-colors duration-300">
                    {title}
                </h3>
            </motion.div>
            <motion.p
                className="text-sm text-white/70 leading-relaxed pl-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.4 }}
            >
                {description}
            </motion.p>
        </motion.div>
    )
}

function StatCounter({ icon, value, label, suffix, delay }) {
    const countRef = useRef(null)
    const isInView = useInView(countRef, { once: false })
    const [hasAnimated, setHasAnimated] = useState(false)

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 10,
    })

    useEffect(() => {
        if (isInView && !hasAnimated) {
            springValue.set(value)
            setHasAnimated(true)
        } else if (!isInView && hasAnimated) {
            springValue.set(0)
            setHasAnimated(false)
        }
    }, [isInView, value, springValue, hasAnimated])

    const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

    return (
        <motion.div
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white/10 transition-colors duration-300 border border-white/10"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay },
                },
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 text-[#88734C] group-hover:bg-[#88734C]/10 transition-colors duration-300"
                whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
            >
                {icon}
            </motion.div>
            <motion.div ref={countRef} className="text-3xl font-bold text-white flex items-center">
                <motion.span>{displayValue}</motion.span>
                <span>{suffix}</span>
            </motion.div>
            <p className="text-white/60 text-sm mt-1">{label}</p>
            <motion.div className="w-10 h-0.5 bg-[#88734C] mt-3 group-hover:w-16 transition-all duration-300" />
        </motion.div>
    )
}
