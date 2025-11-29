import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, HeartHandshake, Award, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/experiences';
import SectionTitle from '../ui/SectionTitle';

const Timeline = () => {
    const getIcon = (type) => {
        if (type === 'school') return <GraduationCap size={20} />;
        if (type === 'asso') return <Users size={20} />;
        if (type === 'volunteering') return <HeartHandshake size={20} />;
        if (type === 'award') return <Award size={20} />;
        return <Briefcase size={20} />;
    };

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto" id="timeline">
            <SectionTitle title="My Journey" subtitle="Education & Experience" />

            <div className="relative border-l-2 border-gray-800 ml-4 md:ml-6 space-y-12">
                {experiences.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12 group"
                    >
                        {/* Icon on the line */}
                        <div className={`absolute -left-[11px] top-0 p-1.5 rounded-full border-2 transition-all duration-300 bg-dark z-10
                            ${item.type === 'work' ? 'border-primary text-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'border-gray-700 text-gray-400 group-hover:border-gray-500'}
                        `}>
                            {getIcon(item.type)}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                {item.role}
                            </h3>
                            <span className="text-sm font-mono text-gray-500 bg-white/5 px-2 py-1 rounded whitespace-nowrap">
                                {item.date}
                            </span>
                        </div>
                        
                        {/* Company name (Clickable if URL exists) */}
                        <div className="text-lg font-medium text-accent mb-3 flex items-center gap-2">
                            {item.url ? (
                                <a 
                                    href={item.url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                    {item.company}
                                    <ExternalLink size={14} className="opacity-70" />
                                </a>
                            ) : (
                                <span>{item.company}</span>
                            )}
                        </div>
                        
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed max-w-2xl">
                            {item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 text-xs rounded border border-gray-800 bg-gray-900/50 text-gray-500">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;