import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Terminal, Database } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

const SkillCard = ({ title, icon: Icon, skills, className, color }) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className={`p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-white/10 transition-all ${className}`}
    >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
            <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                <span key={skill} className="px-3 py-1 text-sm bg-white/5 border border-white/5 rounded-lg text-gray-300 hover:text-white hover:border-white/20 transition-colors cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const { t } = useLanguage();
    const cards = t.skills.cards;

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 blur-[100px] rounded-full -z-10" />

            <div className="max-w-6xl mx-auto">
                <SectionTitle title={t.skills.sectionTitle} subtitle={t.skills.sectionSubtitle} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    
                    {/* CARD 1: DATA & AI */}
                    <SkillCard 
                        title={cards.data.title}
                        icon={Brain}
                        color="bg-gradient-to-br from-accent to-purple-800"
                        className="md:col-span-2 md:row-span-2 bg-gradient-to-b from-white/[0.05] to-transparent"
                        skills={cards.data.skills}
                    />

                    {/* CARD 2: WEB DEVELOPMENT */}
                    <SkillCard 
                        title={cards.web.title}
                        icon={Code}
                        color="bg-blue-600"
                        skills={cards.web.skills}
                    />

                    {/* CARD 3: DATABASES */}
                    <SkillCard 
                        title={cards.databases.title}
                        icon={Database}
                        color="bg-emerald-600"
                        skills={cards.databases.skills}
                    />

                    {/* CARD 4: TOOLS & DEVOPS */}
                    <SkillCard 
                        title={cards.tools.title}
                        icon={Terminal}
                        color="bg-gray-700"
                        className="md:col-span-2"
                        skills={cards.tools.skills}
                    />

                </div>
            </div>
        </section>
    );
};

export default Skills;