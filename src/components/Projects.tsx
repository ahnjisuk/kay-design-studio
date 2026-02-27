import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const categories = [
    {
        id: "hospitality",
        title: "Hospitality",
        description: "creating sophisticated spaces for world-class hospitality brands.",
        projects: ["1010 Midtown Lobby", "Anjoo Korean BarBQ", "Jinya Ramen Bar", "St. Regis Kitchen", "White Windmill Cafe"]
    },
    {
        id: "residential",
        title: "Residential",
        description: "bespoke living environments tailored to the most discerning tastes.",
        projects: ["Lenox Dr Residence", "Chattahoochee River", "West Paces Ferry", "Mount Paran Residence", "Tuxedo Residence"]
    },
    {
        id: "industrial",
        title: "Industrial",
        description: "efficient and innovative solutions for industrial and corporate facilities.",
        projects: ["KIA Souvenir Shop", "LS Cable Showroom", "Industrial Facilities", "Corporate Headquarters"]
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="bg-stone-50">
            {categories.map((cat, i) => (
                <div
                    key={cat.id}
                    className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 border-b border-black/5 last:border-0"
                >
                    <div className="max-w-screen-2xl mx-auto w-full">
                        {/* Category Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <p className="text-architectural text-black/30 mb-4">{cat.title}</p>
                            <h3 className="text-5xl md:text-7xl font-extralight tracking-tighter lowercase max-w-2xl leading-none mb-8">
                                {cat.description}
                            </h3>
                        </motion.div>

                        {/* Featured 3 Projects */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                            {cat.projects.slice(0, 3).map((project, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group aspect-[4/5] bg-white border border-black/5 p-12 flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-700 cursor-pointer"
                                >
                                    <span className="text-[10px] font-mono opacity-30 group-hover:opacity-50">0{idx + 1}</span>
                                    <div>
                                        <h4 className="text-3xl font-light tracking-tight lowercase mb-4 italic group-hover:not-italic group-hover:font-medium transition-all">
                                            {project}
                                        </h4>
                                        <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* More Projects Horizontal Scroll */}
                        {cat.projects.length > 3 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <span className="text-architectural text-black/40">Discover More</span>
                                    <div className="h-[1px] bg-black/10 flex-grow" />
                                    <ChevronRight className="w-4 h-4 text-black/20" />
                                </div>

                                <div className="flex overflow-x-auto pb-8 gap-8 no-scrollbar scroll-smooth">
                                    {cat.projects.slice(3).map((project, idx) => (
                                        <div
                                            key={idx}
                                            className="flex-shrink-0 w-64 p-8 border border-black/5 hover:border-black/20 transition-all cursor-pointer bg-white/50"
                                        >
                                            <p className="text-sm font-light tracking-tight lowercase opacity-60 hover:opacity-100 transition-opacity">
                                                {project}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};
