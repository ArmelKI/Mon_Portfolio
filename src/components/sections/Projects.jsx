import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '../../data/projects';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');

    // Filter projects by category
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = [
        { id: 'all', label: t.projects.filters.all },
        { id: 'data', label: t.projects.filters.data },
        { id: 'ai', label: t.projects.filters.ai },
        { id: 'web', label: t.projects.filters.web },
        { id: 'management', label: t.projects.filters.management }
    ];

    const projectCopy = t.projects.items;
    const categoryBadges = t.projects.categoryBadges;

    return (
        <section className="py-20 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title={t.projects.sectionTitle} subtitle={t.projects.sectionSubtitle} />

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                                filter === cat.id
                                    ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                                    : 'bg-transparent border-gray-700 text-gray-400 hover:border-white hover:text-white'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={project.id}
                                className="group bg-card border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Category Badge */}
                                    <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/70 backdrop-blur-md text-xs font-mono text-white rounded-lg border border-white/10 uppercase">
                                        {categoryBadges[project.category] ?? project.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            <project.icon size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6 flex-grow">
                                        {projectCopy[project.id]?.description ?? project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techs.map(t => (
                                            <span key={t} className="text-xs font-mono text-gray-500 px-2 py-1 bg-white/5 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Code Button */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-auto w-full py-3 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-sm font-bold transition-all group-hover:text-white"
                                    >
                                        <Github size={16} /> {t.projects.viewCode}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">{t.projects.empty}</p>
                )}
            </div>
        </section>
    );
};

export default Projects;