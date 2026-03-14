import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

const ContactCard = ({ icon: Icon, title, value, link, color, isCopyOnly, tagLabel }) => (
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
            <span className="text-xs text-gray-600 font-normal border border-gray-700 px-2 py-0.5 rounded">{tagLabel}</span>
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
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`${t.contact.emailSubjectPrefix} - ${formData.name}`);
    const body = encodeURIComponent(
      `${t.contact.emailNameLabel}: ${formData.name}\n${t.contact.emailEmailLabel}: ${formData.email}\n\n${t.contact.emailMessageLabel}:\n${formData.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title={t.contact.sectionTitle} subtitle={t.contact.sectionSubtitle} />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <ContactCard 
            icon={Mail} 
            title={t.contact.cardEmail}
            value="kiarmelstephanenovak@gmail.com" 
            link={`mailto:${profile.email}`}
            color="text-red-400"
          />
          
          {/* LinkedIn */}
          <ContactCard 
            icon={Linkedin} 
            title={t.contact.cardLinkedin}
            value="Armel Stéphane Novak KI" 
            link={profile.socials.linkedin}
            color="text-blue-500"
          />
          
          {/* GitHub */}
          <ContactCard 
            icon={Github} 
            title={t.contact.cardGithub}
            value="@ArmelKI" 
            link={profile.socials.github}
            color="text-white"
          />
          
          {/* Discord - Mode just "Username" */}
          <ContactCard 
            icon={MessageSquare} 
            title={t.contact.cardDiscord}
            value={profile.socials.discord}
            isCopyOnly={true}
            color="text-indigo-400"
            tagLabel={t.contact.discordTag}
          />
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-3 text-center">{t.contact.openTitle}</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-center">
            {t.contact.openText}
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.formName}
              required
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.formEmail}
              required
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.formMessage}
              required
              rows={5}
              className="md:col-span-2 w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary resize-none"
            />
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
              >
                {t.contact.formSubmit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;