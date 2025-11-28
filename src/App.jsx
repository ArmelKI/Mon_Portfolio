import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

const App = () => {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <div id="hero"><Hero /></div>
        
        {/* On ajoutera les autres sections ici bientôt */}
        <div id="timeline" className="h-screen flex items-center justify-center bg-gray-900">
          <p className="text-gray-500">Section Parcours (À venir)</p>
        </div>
        <div id="skills" className="h-screen flex items-center justify-center">
           <p className="text-gray-500">Section Skills (À venir)</p>
        </div>
        <div id="projects" className="h-screen flex items-center justify-center bg-gray-900">
           <p className="text-gray-500">Section Projets (À venir)</p>
        </div>
        <div id="contact" className="h-screen flex items-center justify-center">
           <p className="text-gray-500">Section Contact (À venir)</p>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default App;