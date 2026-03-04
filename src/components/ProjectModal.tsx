import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar } from "lucide-react";

interface Project {
    id: string;
    name: string;
    image: string;
    category: string;
    location?: string;
    year?: string;
    description?: string;
    details?: string[];
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [currentImg, setCurrentImg] = useState(0);
    const allImages = project.details && project.details.length > 0
        ? [project.image, ...project.details]
        : [project.image];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-12 overflow-hidden"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-white/95 backdrop-blur-xl cursor-crosshair"
                onClick={onClose}
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 z-50 p-4 bg-black text-white hover:bg-black/80 transition-colors shadow-lg"
                >
                    <X className="w-6 h-6 stroke-1" />
                </button>

                {/* Left Side: Image Gallery */}
                <div className="w-full md:w-3/4 h-[60vh] md:h-full relative overflow-hidden bg-stone-100 group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImg}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            src={allImages[currentImg]}
                            alt={`${project.name} ${currentImg + 1}`}
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </AnimatePresence>

                    {/* Gallery Navigation */}
                    {allImages.length > 1 && (
                        <>
                            <div className="absolute bottom-12 left-12 flex gap-4 z-20">
                                {allImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImg(i)}
                                        className={`w-12 h-[2px] transition-all duration-500 ${i === currentImg ? "bg-black w-24" : "bg-black/20 hover:bg-black/40"
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="absolute bottom-12 right-12 text-[10px] uppercase tracking-widest font-medium text-black/40 z-20">
                                {currentImg + 1} / {allImages.length}
                            </div>
                        </>
                    )}
                </div>

                {/* Right Side: Project Info */}
                <div className="w-full md:w-1/4 p-12 md:p-16 flex flex-col justify-between bg-white border-l border-black/5 overflow-y-auto no-scrollbar">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <span className="h-[1px] w-8 bg-black/20" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-black/40">
                                {project.category}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-extralight tracking-tighter leading-none mb-12 uppercase italic"
                        >
                            {project.name}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-12"
                        >
                            <div className="space-y-8 py-8 border-y border-black/5">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-black/40">
                                        <MapPin className="w-3 h-3" />
                                        <span className="text-[9px] uppercase tracking-widest font-medium">Location</span>
                                    </div>
                                    <p className="text-xs font-light">{project.location || "Confidential"}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-black/40">
                                        <Calendar className="w-3 h-3" />
                                        <span className="text-[9px] uppercase tracking-widest font-medium">Date</span>
                                    </div>
                                    <p className="text-xs font-light">{project.year || "2024"}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12"
                    >
                        <p className="text-[10px] uppercase tracking-widest font-medium text-black/30 mb-8 italic">
                            Architecture / Interior / Design
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};
