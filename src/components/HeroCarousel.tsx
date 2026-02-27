import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage1 from "../assets/hero-1.png";
import heroImage2 from "../assets/hero-2.png";

const slides = [
    {
        image: heroImage1,
        label: "Unified Vision",
        title: "Design. Build. Operate.",
        description: "I don't divide Design, Build and Operate; to me they are one.",
    },
    {
        image: heroImage2,
        label: "Architectural Excellence",
        title: "Redefining standards\nfor exceptional interiors",
        description: "Since 2002, crafting innovative brands and unique visual designs.",
    },
];

export const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="relative h-screen w-full bg-black overflow-hidden select-none">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <motion.img
                        src={slides[current].image}
                        alt={slides[current].label}
                        className="w-full h-full object-cover opacity-70"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 8, ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-architectural text-white/50 mb-8">{slides[current].label}</p>
                        <h1 className="text-hero-heading text-white mb-10 whitespace-pre-line lowercase leading-none">
                            {slides[current].title}
                        </h1>
                        <p className="text-white/40 font-light max-w-lg mb-12 text-lg italic leading-relaxed">
                            {slides[current].description}
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex items-center gap-12"
                        >
                            <span className="text-[10px] uppercase tracking-architectural text-white/30">
                                {String(current + 1).padStart(2, '0')} — {String(slides.length).padStart(2, '0')}
                            </span>
                            <div
                                className="h-[1px] bg-white/20 flex-grow max-w-[200px] overflow-hidden relative"
                            >
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 8, ease: "linear" }}
                                    key={current}
                                    className="absolute inset-0 bg-white"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-6">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-[1px] h-12 transition-all duration-700 ${i === current ? "bg-white h-20" : "bg-white/20"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};
