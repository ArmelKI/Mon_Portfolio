import React from 'react';
import { Mail, Linkedin, Github, MessageSquare, Copy } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { profile } from '../../data/profile';

const ContactCard = ({ icon: Icon, title, value, link, color, isCopyOnly }) => (
  <div className="relative group">
    {isCopyOnly ? (
      <div className="flex items-center gap-4 p-6 bg-card border border-gray-800 rounded-2xl cursor-default">
         <div className={`p-4 rounded-xl bg-white/5 ${color}`}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-sm text-gray-400 font-mono mb-1">{title}</h3>
          <p className="text-lg font-bold text-white flex items-center gap-2">
            {value} 
            <span className="text-xs text-gray-600 font-normal border border-gray-700 px-2 py-0.5 rounded">Username</span>
          </p>
        </div>
      </div>
    ) : (
      <a 
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 p-6 bg-card border border-gray-800 rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
      >
        <div className={`p-4 rounded-xl bg-white/5 ${color} group-hover:scale-110 transition-transform`}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-sm text-gray-400 font-mono mb-1">{title}</h3>
          <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">{value}</p>
        </div>
      </a>
    )}
  </div>
);

const Contact = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Get in Touch" subtitle="Let's work together" />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <ContactCard 
            icon={Mail} 
            title="Email" 
            value="kiarmelstephanenovak@gmail.com" 
            link={`mailto:${profile.email}`}
            color="text-red-400"
          />
          
          {/* LinkedIn */}
          <ContactCard 
            icon={Linkedin} 
            title="LinkedIn" 
            value="Armel Stéphane Novak KI" 
            link={profile.socials.linkedin}
            color="text-blue-500"
          />
          
          {/* GitHub */}
          <ContactCard 
            icon={Github} 
            title="GitHub" 
            value="@ArmelKI" 
            link={profile.socials.github}
            color="text-white"
          />
          
          {/* Discord - Mode just "Username" */}
          <ContactCard 
            icon={MessageSquare} 
            title="Discord" 
            value={profile.socials.discord}
            isCopyOnly={true}
            color="text-indigo-400"
          />
        </div>

        <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">Open to Opportunities</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Looking for a <strong>2-year Apprenticeship in Data Science / AI</strong> starting September 2026.
            Also available for freelance projects via <strong>Axiane Agency</strong>.
          </p>
          <a 
            href={`mailto:${profile.email}`}
            className="inline-flex px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;