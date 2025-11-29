import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, HeartHandshake, Award, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/experiences';
import SectionTitle from '../ui/SectionTitle';

const TimelineItem = ({ item, index }) => {
    const getIcon = (type) => {
        if (type === 'school') return <GraduationCap size={18} />;
        if (type === 'asso') return <Users size={18} />;
        if (type === 'volunteering') return <HeartHandshake size={18} />;
        if (type === 'award') return <Award size={18} />;
        return <Briefcase size={18} />;
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-gray-800 group"
        >
            {/* Icon on the line */}
            <div className={`absolute -left-[11px] top-0 p-1.5 rounded-full border-2 transition-all duration-300 bg-dark z-10
                ${item.type === 'work' ? 'border-primary text-primary shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 
                    item.type === 'award' ? 'border-accent text-accent' : 
                    'border-gray-700 text-gray-400 group-hover:border-gray-500'}
            `}>
                {getIcon(item.type)}
            </div>

            {/* Content */}
            <div className="mb-8">
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded inline-block mb-2">
                    {item.date}
                </span>
                
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {item.role}
                </h3>
                
                <div className="text-md font-medium text-gray-400 mb-2 flex items-center gap-2">
                    {item.url ? (
                        <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:underline hover:text-accent flex items-center gap-1 transition-colors"
                        >
                            {item.company}
                            <ExternalLink size={12} />
                        </a>
                    ) : (
                        <span>{item.company}</span>
                    )}
                </div>
                
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                    {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded border border-gray-800 bg-gray-900/50 text-gray-500">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    // Automatically separate data
    const education = experiences.filter(item => ['school', 'award'].includes(item.type));
    const work = experiences.filter(item => ['work', 'asso', 'volunteering'].includes(item.type));

    return (
        <section className="py-20 px-6 bg-dark" id="timeline">
            <div className="max-w-6xl mx-auto">
                <SectionTitle title="My Journey" subtitle="Path to Engineering" />

                <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                    
                    {/* Column 1: Professional & Association Experience */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Briefcase className="text-primary" /> Experience
                        </h3>
                        <div className="space-y-2">
                            {work.map((item, index) => (
                                <TimelineItem key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Education & Awards */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <GraduationCap className="text-accent" /> Education
                        </h3>
                        <div className="space-y-2">
                            {education.map((item, index) => (
                                <TimelineItem key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Timeline;