import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users } from 'lucide-react';
import { experiences } from '../../data/experiences';
import SectionTitle from '../ui/SectionTitle';

const Timeline = () => {
    const getIcon = (type) => {
        if (type === 'school') return <GraduationCap size={20} />;
        if (type === 'asso') return <Users size={20} />;
        return <Briefcase size={20} />;
    };

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <SectionTitle title="My Journey" subtitle="Education & Experiences" />

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
                        {/* Icon on the timeline */}
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
                            <span className="text-sm font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{item.date}</span>
                        </div>
                        
                        <div className="text-lg font-medium text-accent mb-3">{item.company}</div>
                        
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed max-w-2xl">
                            {item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 text-xs rounded border border-gray-800 bg-gray-900/50 text-gray-500">
                                    {tag}
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