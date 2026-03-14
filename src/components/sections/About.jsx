import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-6 bg-dark overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <SectionTitle title={t.about.sectionTitle} subtitle={t.about.sectionSubtitle} />

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    
                    {/* --- PHOTO (Left Side) --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-sm"
                    >
                        {/* Decorative frame behind */}
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 blur-2xl rounded-full -z-10" />
                        
                        {/* Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <img 
                                src="/assets/images/profil-armel.jpg"
                                alt="Armel Stéphane Novak KI" 
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Overlay (Glow on hover) */}
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </motion.div>


                    {/* --- TEXT (Right Side) --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            <span className="text-primary">{t.about.headingPrefix}</span> {t.about.headingSuffix}
                        </h3>
                        
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            {t.about.paragraph1}
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {t.about.paragraph2}
                            <br /><br />
                            <span className="text-sm italic opacity-80">
                                {t.about.funFact}
                            </span>
                        </p>

                        {/* Statistics / Strengths */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                <Database className="text-accent mb-2" size={24} />
                                <h4 className="font-bold text-white">{t.about.stat1Title}</h4>
                                <p className="text-sm text-gray-500">{t.about.stat1Text}</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                <Code className="text-primary mb-2" size={24} />
                                <h4 className="font-bold text-white">{t.about.stat2Title}</h4>
                                <p className="text-sm text-gray-500">{t.about.stat2Text}</p>
                            </div>
                        </div>

                        <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                            {t.about.cta} <ArrowRight size={18} />
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;