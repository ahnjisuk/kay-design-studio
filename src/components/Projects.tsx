import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Hospitality Images
import hosp1 from "../assets/projects/hospital/Image-empty-state.avif";
import hosp2 from "../assets/projects/hospital/Image-empty-state (1).avif";
import hosp3 from "../assets/projects/hospital/Image-empty-state (2).avif";
import hosp4 from "../assets/projects/hospital/Image-empty-state (3).avif";
import hosp5 from "../assets/projects/hospital/Image-empty-state (4).avif";

// Residential Images
import res1 from "../assets/projects/residential/Image-empty-state.avif";
import res2 from "../assets/projects/residential/Image-empty-state (1).avif";
import res3 from "../assets/projects/residential/Image-empty-state (2).avif";
import res4 from "../assets/projects/residential/Image-empty-state (3).avif";
import res5 from "../assets/projects/residential/Image-empty-state (4).avif";

// Industrial Images
import ind1 from "../assets/projects/industrial/Image-empty-state.avif";
import ind2 from "../assets/projects/industrial/Image-empty-state (1).avif";
import ind3 from "../assets/projects/industrial/Image-empty-state (2).avif";
import ind4 from "../assets/projects/industrial/Image-empty-state (3).avif";
import ind5 from "../assets/projects/industrial/Image-empty-state (4).avif";

const categories = [
    {
        id: "hospitality",
        title: "Hospitality",
        description: "creating sophisticated spaces for world-class hospitality brands.",
        projects: [
            { name: "1010 Midtown Lobby", image: hosp1 },
            { name: "Anjoo Korean BarBQ", image: hosp2 },
            { name: "Jinya Ramen Bar", image: hosp3 },
            { name: "St. Regis Kitchen", image: hosp4 },
            { name: "White Windmill Cafe", image: hosp5 }
        ]
    },
    {
        id: "residential",
        title: "Residential",
        description: "bespoke living environments tailored to the most discerning tastes.",
        projects: [
            { name: "Lenox Dr Residence", image: res1 },
            { name: "Chattahoochee River", image: res2 },
            { name: "West Paces Ferry", image: res3 },
            { name: "Mount Paran Residence", image: res4 },
            { name: "Tuxedo Residence", image: res5 }
        ]
    },
    {
        id: "industrial",
        title: "Industrial",
        description: "efficient and innovative solutions for industrial and corporate facilities.",
        projects: [
            { name: "KIA Souvenir Shop", image: ind1 },
            { name: "LS Cable Showroom", image: ind2 },
            { name: "Hyundai Powertech", image: ind3 },
            { name: "Sejin America", image: ind4 },
            { name: "Corporate Headquarters", image: ind5 }
        ]
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
                                    className="group aspect-[4/5] relative bg-white border border-black/5 flex flex-col justify-between hover:bg-black transition-all duration-700 cursor-pointer overflow-hidden"
                                >
                                    {/* Project Image */}
                                    <motion.img
                                        src={project.image}
                                        alt={project.name}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                    <div className="relative z-10 p-12 flex flex-col justify-between h-full">
                                        <span className="text-[10px] font-mono text-black group-hover:text-white opacity-30 group-hover:opacity-50 transition-colors">0{idx + 1}</span>
                                        <div>
                                            <h4 className="text-3xl font-light tracking-tight lowercase mb-4 italic group-hover:not-italic group-hover:font-medium text-black group-hover:text-white transition-all">
                                                {project.name}
                                            </h4>
                                            <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700" />
                                        </div>
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
                                            className="group flex-shrink-0 w-80 relative aspect-video border border-black/5 hover:border-black/20 transition-all cursor-pointer bg-white/50 overflow-hidden"
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="relative z-10 p-6 flex items-end h-full">
                                                <p className="text-sm font-light tracking-tight lowercase text-black group-hover:text-black transition-opacity">
                                                    {project.name}
                                                </p>
                                            </div>
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
