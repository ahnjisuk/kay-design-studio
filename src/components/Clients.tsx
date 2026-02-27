import { motion } from "framer-motion";
import kitchenBg from "../assets/kitchen-bg.png";

const clients = [
    { name: "Hyundai Motor Group", domain: "hyundai.com" },
    { name: "St. Regis", domain: "stregis.com" },
    { name: "Waldorf Astoria", domain: "waldorfastoria.com" },
    { name: "Mandarin Oriental", domain: "mandarinoriental.com" },
    { name: "Hyundai Mobis", domain: "mobis.co.kr" },
    { name: "Sovereign", domain: "sovereign.com" },
    { name: "Sub-Zero", domain: "subzero-wolf.com" },
    { name: "KIA", domain: "kia.com" },
    { name: "Miele", domain: "miele.com" },
    { name: "Harrison Design", domain: "harrisondesign.com" },
    { name: "Jinya Ramen Bar", domain: "jinyaramenbar.com" },
    { name: "State Farm", domain: "statefarm.com" },
    { name: "Sub-Zero", domain: "subzero-wolf.com" },
    { name: "Avanos Medical", domain: "avanos.com" },
    { name: "1010 Midtown", domain: "1010midtown.com" },
    { name: "LS Cable & System", domain: "lscns.com" },
    { name: "Capital City Club", domain: "capitalcityclub.org" },
    { name: "Atlanta Athletic Club", domain: "atlantaathleticclub.org" }
];

export const Clients = () => {
    return (
        <section id="clients" className="relative py-64 overflow-hidden bg-black">
            {/* Background Image with Natural Italian Kitchen Style */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            >
                <img
                    src={kitchenBg}
                    alt="Luxury Italian Kitchen"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </motion.div>

            <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-24">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-12">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.4 }}
                        className="text-architectural text-white uppercase"
                    >
                        Selected Partners
                    </motion.p>
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-8xl font-extralight tracking-tighter text-white lowercase text-right"
                    >
                        trusted by industry <span className="italic">leaders.</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16">
                    {clients.map((client, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="group border border-white/10 p-6 flex flex-col items-center justify-center min-h-[140px] bg-white/5 hover:bg-white/10 transition-all duration-700 backdrop-blur-md rounded-sm relative overflow-hidden"
                        >
                            <img
                                src={`https://logo.clearbit.com/${client.domain}?size=200&greyscale=true`}
                                alt={`${client.name} logo`}
                                className="w-16 h-16 object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-500 filter brightness-0 invert"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <p className="hidden text-[10px] uppercase tracking-architectural text-white/50 group-hover:text-white transition-colors duration-500 text-center">
                                {client.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Placeholder for Client Logo insertion */}
                <div className="mt-32 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-16 opacity-20 hover:opacity-100 transition-opacity duration-1000">
                    {/* Future Client Logos can be inserted here */}
                </div>
            </div>
        </section>
    );
};
