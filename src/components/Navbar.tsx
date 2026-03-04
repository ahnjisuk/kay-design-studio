import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        {
            name: "Projects",
            scroll: "#projects",
            subLinks: [
                { name: "Hospitality", scroll: "#hospitality" },
                { name: "Residential", scroll: "#residential" },
                { name: "Industrial", scroll: "#industrial" },
            ]
        },
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
                    <Link
                        to="/"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setMenuOpen(false);
                        }}
                        className="text-xl font-light tracking-architectural uppercase"
                    >
                        Kay Design Studio
                    </Link>
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.slice(0, 4).map((link) => (
                            <div key={link.name} className="relative group p-2 -m-2">
                                <a
                                    href={link.scroll}
                                    className="text-[10px] uppercase tracking-architectural hover:opacity-50 transition-opacity"
                                >
                                    {link.name}
                                </a>

                                {/* Dropdown Menu for Sub-links */}
                                {link.subLinks && (
                                    <div className="absolute top-full left-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white/95 backdrop-blur-md text-black px-6 py-5 flex flex-col gap-4 min-w-[180px] shadow-sm border border-black/5">
                                            {link.subLinks.map(sub => (
                                                <a
                                                    key={sub.name}
                                                    href={sub.scroll}
                                                    className="text-[10px] uppercase font-medium hover:italic hover:text-black/50 transition-all flex items-center justify-between group/sub"
                                                >
                                                    {sub.name}
                                                    <span className="w-0 h-[1px] bg-black/30 group-hover/sub:w-4 transition-all duration-300" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
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
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i + 0.3 }}
                                    className="group relative flex flex-col items-start"
                                >
                                    <a
                                        href={link.scroll}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-5xl md:text-7xl font-extralight tracking-tighter hover:italic transition-all inline-block lowercase"
                                    >
                                        {link.name}
                                    </a>

                                    {/* SubLinks Hierarchy - Fade & Slide in to the Right with Framer Motion */}
                                    {link.subLinks && (
                                        <motion.div
                                            className="md:absolute md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-12 mt-4 md:mt-0 flex flex-col gap-2 md:gap-4 pointer-events-none group-hover:pointer-events-auto z-10"
                                            initial={{ opacity: 0, x: -30 }}
                                            whileHover={{ opacity: 1, x: 0 }} /* Note: Using tailwind group-hover logic is easier with CSS but let's stick to consistent implementation */
                                            variants={{
                                                hidden: { opacity: 0, x: -30 },
                                                visible: { opacity: 1, x: 0 }
                                            }}
                                            animate="visible" /* This is slightly tricky with group-hover, let's use CSS transitions for the hover trigger but keep it elegant */
                                            transition={{ ease: "easeOut", duration: 0.8 }}
                                        >
                                            <div className="flex flex-col gap-2 md:gap-4 opacity-0 group-hover:opacity-100 translate-x-[-30px] group-hover:translate-x-0 transition-all duration-[800ms] ease-out">
                                                {link.subLinks.map((sub) => (
                                                    <a
                                                        key={sub.name}
                                                        href={sub.scroll}
                                                        onClick={() => setMenuOpen(false)}
                                                        className="text-2xl md:text-4xl font-extralight text-black/30 hover:text-black hover:italic transition-all lowercase whitespace-nowrap"
                                                    >
                                                        {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
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
