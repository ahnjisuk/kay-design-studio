import { motion } from "framer-motion";
import contactBg from "../assets/contact/contact-bg.jpg";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="relative pt-64 pb-0 overflow-hidden bg-black text-white">
            {/* Background Image - Updated to new asset */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            >
                <img
                    src={contactBg}
                    alt="Luxury Interior Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </motion.div>

            <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-24">
                <div className="space-y-24">
                    {/* Top: Contact Info Heading & Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.8 }}
                                className="text-architectural text-black/80 text-lg uppercase tracking-widest"
                            >
                                Get in Touch
                            </motion.p>
                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="text-5xl md:text-7xl font-extralight tracking-tighter lowercase leading-[1.1]"
                            >
                                your life creates <span className="italic">your own space.</span>
                            </motion.h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:pt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3 text-white/80">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-[12px] uppercase tracking-widest font-medium">Location</span>
                                </div>
                                <p className="text-lg font-light leading-relaxed">
                                    4784 Cantrell Rd. Suite 200<br />
                                    Flowery Branch, GA 30542
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3 text-white/80">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-[12px] uppercase tracking-widest font-medium">Inquiries</span>
                                </div>
                                <a href="mailto:info@kaydesignstudio.com" className="text-lg font-light hover:italic transition-all">
                                    info@kaydesignstudio.com
                                </a>
                                <div className="pt-4 flex items-center gap-3 text-white/40 border-t border-white/5 mt-4">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-xs font-light">Contact us directly for bespoke services.</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom: Map - Now smaller and centered/bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-5xl mx-auto aspect-[21/9] md:aspect-[3/1] bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden relative group cursor-pointer"
                    >
                        <a
                            href="https://www.google.com/maps/place/4784+Cantrell+Rd.+Suite+200,+Flowery+Branch,+GA+30542"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-500"
                        >
                            <div className="bg-white text-black px-8 py-4 rounded-full shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-3">
                                <span className="text-[10px] uppercase tracking-architectural font-bold">Open in Google Maps</span>
                            </div>
                        </a>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=4784%20Cantrell%20Rd.%20Suite%20200,%20Flowery%20Branch,%20GA%2030542+(Kay%20Design%20Studio)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'contrast(1.1) brightness(0.8) saturate(0.8)' }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
