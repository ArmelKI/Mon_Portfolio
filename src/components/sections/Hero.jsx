import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import { profile } from '../../data/profile';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-dark">
        
        {/* Background Grid & Spotlight inchangés... */}
        <div 
            className="absolute inset-0 pointer-events-none"
            style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
            }}
        />
        <div className="absolute inset-0 z-0 opacity-[0.15]" 
            style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        <div className="z-10 text-center px-4 max-w-5xl">
            
            {/* Badge */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-8"
            >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Looking for a 2-year Apprenticeship (Sept 2026)
            </motion.div>

            {/* Titre */}
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
            >
            Aspiring <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                AI Engineer.
            </span>
            </motion.h1>

            {/* Bio */}
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
            Engineering Student at <strong>Telecom Nancy</strong> & CEO at <strong>Axiane Agency</strong>.
            <br />I bridge the gap between mathematical theory and real-world applications.
            </motion.p>

            {/* Buttons */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
            <a 
                href="#projects"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2"
            >
                View my Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
                href="/assets/documents/CV_Armel.pdf"
                target="_blank"
                className="px-8 py-4 border border-gray-700 hover:border-white text-gray-300 hover:text-white rounded-full font-medium transition-colors flex items-center gap-2 backdrop-blur-sm"
            >
                <Download size={18} /> Download CV
            </a>
            </motion.div>
        </div>

        {/* Scroll Down */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-600"
        >
            <ChevronDown size={24} />
        </motion.div>
    </section>
  );
};

export default Hero;