import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ShieldCheck, Award } from 'lucide-react';
import { certifications } from '../../data/certifications';
import SectionTitle from '../ui/SectionTitle';

const Certifications = () => {
  const [filter, setFilter] = useState('all');

  // --- 1. FILTER CONFIGURATION ---
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'data_ai', label: 'Data & AI' },       // Groups: data + ai
    { id: 'cyber_cloud', label: 'Cyber & Cloud' }, // Groups: cyber + cloud
    { id: 'dev', label: 'Dev & Mobile' },        // Groups: dev + mobile
    { id: 'management', label: 'Business & PM' } // Groups: management + finance
  ];

  // --- 2. FILTERING LOGIC ---
  const filteredCertifs = certifications.filter(cert => {
    if (filter === 'all') return true;
    if (filter === 'data_ai') return ['data', 'ai'].includes(cert.category);
    if (filter === 'cyber_cloud') return ['cyber', 'cloud'].includes(cert.category);
    if (filter === 'dev') return ['dev', 'mobile'].includes(cert.category);
    if (filter === 'management') return ['management', 'finance'].includes(cert.category);
    return false;
  });

  return (
    <section className="py-20 px-6 bg-white/5" id="certifications">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Diplomas & Credentials" />

        {/* --- 3. FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                filter === cat.id 
                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- 4. CERTIFICATIONS GRID --- */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredCertifs.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                className="bg-dark border border-gray-800 rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg group flex flex-col h-full"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 font-mono mb-3">{cert.provider}</p>

                {/* Description (Added back!) */}
                <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3 flex-grow">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.slice(0, 3).map(s => (
                    <span key={s} className="text-[10px] uppercase tracking-wider text-gray-500 px-2 py-1 bg-black rounded border border-gray-800">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-800 mt-auto">
                  {/* View PDF Button */}
                  <a 
                    href={cert.pdf} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded text-xs font-bold bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
                  >
                    <FileText size={14} /> View PDF
                  </a>
                  
                  {/* Verify Button (Only shows if URL is valid) */}
                  {cert.verifyUrl && cert.verifyUrl !== "#" && (
                    <a 
                      href={cert.verifyUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center px-3 rounded text-xs font-bold border border-gray-700 hover:border-green-500 text-gray-500 hover:text-green-400 transition-colors"
                      title="Verify Credential"
                    >
                      <ShieldCheck size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State Message */}
        {filteredCertifs.length === 0 && (
            <p className="text-center text-gray-500 mt-10 italic">No certifications found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default Certifications;