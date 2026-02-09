import React, { useRef } from "react"
import { Zap } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export default function SectionWrapper({
    id,
    title,
    subtitle,
    subtitleIcon,
    children,
    className = ""
}) {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

    // Parallax effect for decorative elements
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

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
            id={id}
            ref={sectionRef}
            className={`w-full py-24 px-4 bg-black text-white overflow-hidden relative ${className}`}
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
                <motion.div className="flex flex-col items-center mb-12" variants={itemVariants}>
                    <motion.span
                        className="text-[#88734C] font-medium mb-2 flex items-center gap-2 uppercase"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {subtitleIcon || <Zap className="w-4 h-4" />}
                        {subtitle}
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">{title}</h2>
                    <motion.div
                        className="w-24 h-1 bg-[#88734C]"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                </motion.div>

                <div className="content-wrapper">
                    {children}
                </div>
            </motion.div>
        </section>
    )
}
