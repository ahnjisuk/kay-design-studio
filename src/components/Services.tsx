import { motion } from "framer-motion";
import kitchenDetail1 from "../assets/kitchen-detail-1.png";
import kitchenDetail2 from "../assets/kitchen-detail-2.png";
import kitchenDetail3 from "../assets/kitchen-detail-3.png";
import kitchenDetail4 from "../assets/kitchen-detail-4.png";

const services = [
    {
        id: "01",
        category: "Planning",
        title: "Pre-Construction",
        image: kitchenDetail1,
        items: ["site selection", "budget preparation", "project estimating", "subcontractor selection", "scheduling", "survey"]
    },
    {
        id: "02",
        category: "Management",
        title: "Project Management",
        image: kitchenDetail2,
        items: ["financial control", "contract compliance", "schedule management", "submittal review", "permitting"]
    },
    {
        id: "03",
        category: "Operation",
        title: "Field Operation",
        image: kitchenDetail3,
        items: ["quality control", "job site safety", "design team communication", "schedule compliance"]
    },
    {
        id: "04",
        category: "Craftsmanship",
        title: "Architectural Woodworking",
        image: kitchenDetail4,
        items: ["customizable modular cabinets", "exact specifications", "signature look transformation", "innovative branding"]
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-48 px-8 md:px-24 bg-white border-b border-black/5">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-24 items-end mb-40">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 0.2, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-architectural text-black rotate-180 [writing-mode:vertical-lr]"
                    >
                        Services
                    </motion.h2>
                    <div className="space-y-12">
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-8xl font-extralight tracking-tighter max-w-4xl leading-tight lowercase"
                        >
                            Every project requires a <span className="italic">comprehensive approach.</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-black/40 font-light max-w-sm leading-relaxed"
                        >
                            From pre-construction planning to meticulous field operations, we offer professional solutions for the entire lifecycle of your project.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black/5">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-0 border-b border-r border-black/5 last:border-r-0 lg:even:border-r group hover:bg-stone-50 transition-colors duration-700"
                        >
                            {service.image && (
                                <div className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                    <motion.img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 1.5 }}
                                    />
                                </div>
                            )}
                            <div className="p-10">
                                <div className="flex items-baseline justify-between mb-16">
                                    <span className="text-[10px] font-mono text-black/20">{service.id}</span>
                                    <p className="text-architectural opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                                        {service.category}
                                    </p>
                                </div>
                                <h4 className="text-2xl font-light mb-10 tracking-tight lowercase">{service.title}</h4>
                                <ul className="space-y-4">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="text-[11px] uppercase tracking-widest text-black/40 font-light flex items-center gap-3">
                                            <span className="w-1 h-[1px] bg-black/10 group-hover:bg-black/30 transition-colors" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
