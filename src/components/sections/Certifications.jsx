import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Award } from 'lucide-react';
import { certifications } from '../../data/certifications';
import SectionTitle from '../ui/SectionTitle';

const Certifications = () => {
  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Diplomas & Credentials" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-dark border border-gray-800 rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg group flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <Award size={24} />
                </div>
                <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded whitespace-nowrap">
                  {cert.date}
                </span>
              </div>

              {/* Titres */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 font-mono mb-3">{cert.provider}</p>

              {/* --- AJOUT DE LA DESCRIPTION ICI --- */}
              <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {cert.skills.slice(0, 3).map(s => (
                  <span key={s} className="text-[10px] uppercase tracking-wider text-gray-500 px-2 py-1 bg-black rounded border border-gray-800">
                    {s}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-800 mt-auto">
                <a 
                  href={cert.pdf} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded text-xs font-bold bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
                >
                  <FileText size={14} /> View PDF
                </a>
                
                {cert.verifyUrl && (
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
        </div>
      </div>
    </section>
  );
};

export default Certifications;