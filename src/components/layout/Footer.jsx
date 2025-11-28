import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10 text-center">
      <div className="flex justify-center gap-6 mb-6">
        <a href={profile.socials.github} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Github size={20} /></a>
        <a href={profile.socials.linkedin} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Linkedin size={20} /></a>
        <a href={`mailto:${profile.email}`} className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Mail size={20} /></a>
      </div>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} {profile.name}. Code with React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;