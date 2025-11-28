import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-mono text-sm tracking-wider uppercase"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold mt-2 text-white"
      >
        <span className="text-primary">#</span> {title}
      </motion.h2>
      <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full opacity-50" />
    </div>
  );
};

export default SectionTitle;