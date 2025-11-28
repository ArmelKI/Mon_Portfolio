import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { profile } from '../../data/profile';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20">
      
      {/* Background Effect (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Badge Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-mono"
        >
          👋 Hello, I'm {profile.name}
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Data Scientist & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            AI Engineer
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          {profile.bio}
          <br />
          <span className="text-sm text-gray-500 mt-2 block">
            (Et aussi CEO @ Axiane Agency)
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            Voir mes projets
          </a>
          
          <a 
            href="/assets/documents/CV_Armel.pdf" // Assure-toi de renommer ton CV ainsi dans le dossier
            target="_blank"
            className="flex items-center gap-2 px-8 py-3 border border-gray-700 hover:border-white text-gray-300 hover:text-white rounded-full font-bold transition-all bg-white/5"
          >
            <Download size={18} /> Télécharger CV
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>

    </section>
  );
};

export default Hero;