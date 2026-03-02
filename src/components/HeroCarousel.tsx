import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage1 from "../assets/hero/1.avif";
import heroImage2 from "../assets/hero/2.avif";
import heroImage3 from "../assets/hero/3.avif";

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
    {
        image: heroImage3,
        label: "Luxury Living",
        title: "Bespoke environments\ntailored to your lifestyle",
        description: "Creating spaces that harmonize form and function with timeless elegance.",
    },
];

export const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="relative h-screen w-full bg-black overflow-hidden select-none">
            <AnimatePresence>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                >
                    <motion.img
                        src={slides[current].image}
                        alt={slides[current].label}
                        className="w-full h-full object-cover opacity-60"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-24">
                <AnimatePresence>
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-24 left-8 md:left-24 right-8 md:right-24"
                    >
                        <p className="text-architectural text-white/50 mb-8 overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="inline-block"
                            >
                                {slides[current].label}
                            </motion.span>
                        </p>
                        <h1 className="text-hero-heading text-white mb-10 whitespace-pre-line lowercase leading-none tracking-tighter">
                            {slides[current].title.split('\n').map((line, i) => (
                                <span key={i} className="block overflow-hidden pb-2">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        className="inline-block"
                                    >
                                        {line}
                                    </motion.span>
                                </span>
                            ))}
                        </h1>
                        <p className="text-white/40 font-light max-w-lg mb-12 text-lg italic leading-relaxed">
                            {slides[current].description}
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="flex items-center gap-12"
                        >
                            <span className="text-[10px] uppercase tracking-architectural text-white/30">
                                {String(current + 1).padStart(2, '0')} — {String(slides.length).padStart(2, '0')}
                            </span>
                            <div className="h-[1px] bg-white/10 flex-grow max-w-[200px] overflow-hidden relative">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 6, ease: "linear" }}
                                    key={current}
                                    className="absolute inset-0 bg-white/40"
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
