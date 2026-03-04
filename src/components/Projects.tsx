import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { ProjectModal } from "./ProjectModal";

// Hospitality Images
import hosp1 from "../assets/projects/hospital/Jinya_Ramen_Bar_Alpharetta_GA.avif";
import hosp2 from "../assets/projects/hospital/Park_Place_Lobby_Atlanta_GA.avif";
import hosp3 from "../assets/projects/hospital/St_Regis_Kitchen_Communal_Atlanta_GA.avif";
import hosp4 from "../assets/projects/hospital/1010_Midtown_Lobby_Atlanta_Georgia.avif";
import hosp5 from "../assets/projects/hospital/Pit_Stop_Convenience_Store_SugarHill_GA.avif";
import hosp6 from "../assets/projects/hospital/White_Windmill_Bakery_Cafe_Sugarloaf_GA.avif";
import hosp7 from "../assets/projects/hospital/Yuki_Restaurant_Duluth_GA.avif";
import hosp8 from "../assets/projects/hospital/Anjoo_Korean_Barbq_Suwanee_GA.avif";
import hospTop from "../assets/projects/hospital/top.avif";

// Residential Images
import res1 from "../assets/projects/residential/Lenox_Dr_Residence_Atlanta_GA.avif";
import res2 from "../assets/projects/residential/Mr_and_Mrs_Meister_Residence_Duluth_GA.avif";
import res3 from "../assets/projects/residential/Mr_and_Mrs_Miller_Residence_Atlanta_GA.avif";
import res4 from "../assets/projects/residential/Sugarloaf_Country_Club_Duluth_GA.avif";
import res5 from "../assets/projects/residential/The_Manor_Country_Club_Milton_GA.avif";
import res6 from "../assets/projects/residential/The_River_Club_Residence_Suwanee_GA.avif";
import res7 from "../assets/projects/residential/Waldorf_Astoria_Hotel_Atlanta_GA.avif";
import res8 from "../assets/projects/residential/Waldorf_Astoria_Penthouse_Atlanta_GA.avif";
import resTop from "../assets/projects/residential/top.png";

// Industrial Images
import ind1 from "../assets/projects/industrial/Image-empty-state.avif";
import ind2 from "../assets/projects/industrial/Image-empty-state (1).avif";
import ind3 from "../assets/projects/industrial/Image-empty-state (2).avif";
import ind4 from "../assets/projects/industrial/Image-empty-state (3).avif";
import ind5 from "../assets/projects/industrial/Image-empty-state (4).avif";

const detailImages = import.meta.glob<string>('../assets/projects/**/*.{png,jpg,jpeg,avif,webp}', { eager: true, as: 'url' });

interface Project {
    id: string;
    name: string;
    image: string;
    category: string;
    location?: string;
    year?: string;
    description?: string;
    details?: string[];
    folderName?: string;
}

const getProjectDetails = (folderName?: string): string[] => {
    if (!folderName) return [];
    const details = Object.entries(detailImages)
        .filter(([path]) => path.toLowerCase().includes(`/hospital/${folderName.toLowerCase()}/`))
        .map(([_, url]) => url as string);

    console.log(`Loading details for ${folderName}:`, details);
    return details;
};

const categories: { id: string; title: string; description: string; topImage?: string; projects: Project[] }[] = [
    {
        id: "hospitality",
        title: "Hospitality",
        description: "EXPERIENCE THE ART OF LUXURY",
        topImage: hospTop,
        projects: [] // populated via useMemo
    },
    {
        id: "residential",
        title: "Residential",
        description: "BESPOKE CABINET TAILORED TO YOUR LIFESTYLE",
        topImage: resTop,
        projects: [] // populated via useMemo
    },
    {
        id: "industrial",
        title: "Industrial",
        description: "crafting industry excellence",
        projects: [
            { id: "i1", category: "Industrial", name: "KIA Souvenir Shop", image: ind1 },
            { id: "i2", category: "Industrial", name: "LS Cable Showroom", image: ind2 },
            { id: "i3", category: "Industrial", name: "Hyundai Powertech", image: ind3 },
            { id: "i4", category: "Industrial", name: "Sejin America", image: ind4 },
            { id: "i5", category: "Industrial", name: "Corporate Headquarters", image: ind5 }
        ]
    }
];



export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const hospitalityProjects = [
        { id: "h1", category: "Hospitality", name: "Jinya Ramen Bar, Alpharetta GA", image: hosp1, folderName: "Jinya_Ramen_Bar_Alpharetta_GA" },
        { id: "h2", category: "Hospitality", name: "Park Place Lobby, Atlanta GA", image: hosp2, folderName: "Park_Place_Lobby_Atlanta_GA" },
        { id: "h3", category: "Hospitality", name: "St. Regis Kitchen Communal, Atlanta GA", image: hosp3, folderName: "St_Regis_Kitchen_Communal_Atlanta_GA" },
        { id: "h4", category: "Hospitality", name: "1010 Midtown Lobby, Atlanta GA", image: hosp4, folderName: "1010_Midtown_Lobby_Atlanta_Georgia" },
        { id: "h5", category: "Hospitality", name: "Pit Stop Convenience Store, SugarHill GA", image: hosp5, folderName: "Pit_Stop_Convenience_Store_SugarHill_GA" },
        { id: "h6", category: "Hospitality", name: "White Windmill Bakery Cafe, Sugarloaf GA", image: hosp6, folderName: "White_Windmill_Bakery_Cafe_Sugarloaf_GA" },
        { id: "h7", category: "Hospitality", name: "Yuki Restaurant, Duluth GA", image: hosp7, folderName: "Yuki_Restaurant_Duluth_GA" },
        { id: "h8", category: "Hospitality", name: "Anjoo Korean BarBQ, Suwanee GA", image: hosp8, folderName: "Anjoo_Korean_Barbq_Suwanee_GA" }
    ];

    const residentialProjects = [
        { id: "r1", category: "Residential", name: "Lenox Dr Residence, Atlanta GA", image: res1, folderName: "Lenox_Dr_Residence_Atlanta_GA" },
        { id: "r2", category: "Residential", name: "Mr. and Mrs. Meister Residence, Duluth GA", image: res2, folderName: "Mr_and_Mrs_Meister_Residence_Duluth_GA" },
        { id: "r3", category: "Residential", name: "Mr. and Mrs. Miller Residence, Atlanta GA", image: res3, folderName: "Mr_and_Mrs_Miller_Residence_Atlanta_GA" },
        { id: "r4", category: "Residential", name: "Sugarloaf Country Club, Duluth GA", image: res4, folderName: "Sugarloaf_Country_Club_Duluth_GA" },
        { id: "r5", category: "Residential", name: "The Manor Country Club, Milton GA", image: res5, folderName: "The_Manor_Country_Club_Milton_GA" },
        { id: "r6", category: "Residential", name: "The River Club Residence, Suwanee GA", image: res6, folderName: "The_River_Club_Residence_Suwanee_GA" },
        { id: "r7", category: "Residential", name: "Waldorf Astoria Hotel, Atlanta GA", image: res7, folderName: "Waldorf_Astoria_Hotel_Atlanta_GA" },
        { id: "r8", category: "Residential", name: "Waldorf Astoria Penthouse, Atlanta GA", image: res8, folderName: "Waldorf_Astoria_Penthouse_Atlanta_GA" }
    ];

    const processedCategories = useMemo(() => {
        const getBaseName = (url: string) => {
            const nameWithExtension = url.split('/').pop() || "";
            return nameWithExtension.split('?')[0].replace(/-[a-f0-9]{8,}$/i, '');
        };

        // DIAGNOSTIC: Log glob keys
        const allPaths = Object.keys(detailImages);
        console.log(`[Gallery Debug] Glob found ${allPaths.length} files`);
        if (allPaths.length > 0) {
            console.log(`[Gallery Debug] Sample: ${allPaths.slice(0, 5).join(', ')}`);
        }

        const processProjects = (projects: Project[], categoryKey: string) => {
            return projects.map((p): Project => {
                const folderTarget = p.folderName?.toLowerCase();
                if (!folderTarget) return { ...p, details: [] };

                const details = Object.entries(detailImages)
                    .filter(([path]) => {
                        const normalizedPath = path.toLowerCase().replace(/\\/g, '/');
                        const isInCategory = normalizedPath.includes(`/${categoryKey}/`);
                        const isInProject = normalizedPath.includes(`/${folderTarget}/`);
                        return isInCategory && isInProject;
                    })
                    .map(([_, url]) => url as string);

                const mainBaseName = getBaseName(p.image);
                const uniqueDetails = details.filter(url => getBaseName(url) !== mainBaseName);

                console.log(`[Gallery] ${categoryKey}/${p.name}: Folder[${folderTarget}] matched ${details.length} files. Unique: ${uniqueDetails.length}`);
                return { ...p, details: uniqueDetails };
            });
        };

        return categories.map(cat => {
            if (cat.id === "hospitality") {
                return { ...cat, projects: processProjects(hospitalityProjects, "hospital") };
            }
            if (cat.id === "residential") {
                return { ...cat, projects: processProjects(residentialProjects, "residential") };
            }
            return cat;
        });
    }, [hospitalityProjects, residentialProjects]);

    return (
        <section id="projects" className="bg-stone-50">
            {processedCategories.map((cat: any, i: number) => (
                <div
                    key={cat.id}
                    id={cat.id}
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
                            <p className="text-architectural text-black/30 mb-8">{cat.title}</p>

                            {cat.topImage ? (
                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(5px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 1.2, delay: 0.3 }}
                                    className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-12 overflow-hidden flex items-center justify-center group"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={cat.topImage}
                                        alt={`${cat.title} Feature`}
                                        className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms]"
                                    />
                                    {/* Subtle Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-1000" />

                                    {/* Text Overlay */}
                                    <h3
                                        className="relative z-10 text-center uppercase tracking-[0.2em] md:tracking-[0.3em] font-light text-3xl md:text-5xl lg:text-7xl text-white max-w-5xl leading-tight px-8"
                                    >
                                        {cat.description}
                                    </h3>
                                </motion.div>
                            ) : (
                                <h3 className="text-5xl md:text-7xl font-extralight tracking-tighter lowercase max-w-2xl leading-none mb-8">
                                    {cat.description}
                                </h3>
                            )}
                        </motion.div>

                        {/* Featured 3 Projects */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                            {cat.projects.slice(0, 3).map((project: Project, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setSelectedProject(project)}
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
                                            <h4 className="text-3xl font-light tracking-tight uppercase mb-4 italic group-hover:not-italic group-hover:font-medium text-black group-hover:text-white transition-all">
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
                                    {cat.projects.slice(3).map((project: Project, idx: number) => (
                                        <div
                                            key={idx}
                                            onClick={() => setSelectedProject(project)}
                                            className="group flex-shrink-0 w-80 relative aspect-video border border-black/5 hover:border-black/20 transition-all cursor-pointer bg-white/50 overflow-hidden"
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="relative z-10 p-6 flex items-end h-full">
                                                <p className="text-sm font-light tracking-tight uppercase text-black group-hover:text-black transition-opacity">
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

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        allProjects={
                            processedCategories.find(c => c.projects.some(p => p.id === selectedProject.id))?.projects || []
                        }
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
