import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { name: "Projects", scroll: "#projects" },
        { name: "Services", scroll: "#services" },
        { name: "About", scroll: "#about" },
        { name: "Clients", scroll: "#clients" },
        { name: "Contact", scroll: "#contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-8 h-20 flex items-center justify-between ${scrolled || menuOpen ? "bg-white text-black" : "text-white"
                    }`}
            >
                <div className="flex items-center gap-12">
                    <a href="/" className="text-xl font-light tracking-architectural uppercase">
                        Kay Design Studio
                    </a>
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.slice(0, 4).map((link) => (
                            <a
                                key={link.name}
                                href={link.scroll}
                                className="text-[10px] uppercase tracking-architectural hover:opacity-50 transition-opacity"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-8">
                    <Search className="w-4 h-4 stroke-1 hover:opacity-50 transition-opacity cursor-pointer hidden md:block" />
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center gap-3 group"
                    >
                        <span className="text-[10px] uppercase tracking-architectural group-hover:opacity-50 transition-opacity">
                            {menuOpen ? "Close" : "Menu"}
                        </span>
                        {menuOpen ? <X className="w-4 h-4 stroke-1" /> : <Menu className="w-4 h-4 stroke-1" />}
                    </button>
                </div>
            </header>

            <AnimatePresence shadow-sm>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-white pt-32 px-8 flex flex-col md:flex-row justify-between pb-24"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i + 0.3 }}
                                    href={link.scroll}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-5xl md:text-7xl font-extralight tracking-tighter hover:italic transition-all inline-block lowercase"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="max-w-xs flex flex-col justify-end gap-12 text-black/60">
                            <div className="space-y-4">
                                <p className="text-architectural text-black/40">Headquarters</p>
                                <p className="font-light text-xs leading-relaxed">
                                    4784 Cantrell Rd. Suite 200<br />Flowery Branch, GA 30542
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-architectural text-black/40">Inquiries</p>
                                <a href="mailto:info@kaydesignstudio.com" className="text-sm font-light hover:underline underline-offset-4">
                                    info@kaydesignstudio.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
