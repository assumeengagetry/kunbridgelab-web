import React from 'react';
import { TEAM } from '../constants';
import { Mail, ArrowRight, Twitter, Linkedin, Globe, BookOpen } from 'lucide-react';

const Team: React.FC = () => {
  const advisors = TEAM.filter(m => m.role === 'Advisor');
  const researchers = TEAM.filter(m => m.role === 'Researcher');

  return (
    <div className="min-h-screen bg-white">
      
       {/* 1. Team Hero - MASSIVE & FULL SCREEN */}
       <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background Layer */}
        <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2600&auto=format&fit=crop" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_15s_ease-in-out_infinite]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>
        
        {/* Content Layer */}
        <div className="relative h-full flex items-center max-w-[1800px] mx-auto px-6 lg:px-16 z-10">
          <div className="max-w-6xl fade-in-up">
             <div className="flex items-center gap-4 mb-8">
               <div className="h-[2px] w-20 bg-orange-500"></div>
               <span className="text-orange-400 font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                 World-Class Minds
               </span>
             </div>

             <h1 className="text-7xl md:text-9xl font-heading font-black text-white mb-10 tracking-tighter leading-[0.9]">
               MEET THE <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
                 ARCHITECTS
               </span>
             </h1>

             <p className="text-xl md:text-3xl text-slate-300 max-w-4xl font-light leading-relaxed border-l-4 border-orange-500 pl-8">
               A diverse collective of researchers, engineers, and visionaries from SCUPI, balancing academics, research, and life.
             </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
           <div className="w-1 h-12 rounded-full bg-gradient-to-b from-orange-400 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 py-32">
        
        {/* Expert Advisors */}
        <div className="mb-40">
           <h3 className="text-4xl font-heading font-black text-slate-900 mb-16 flex items-center gap-4">
            <div className="w-12 h-2 bg-orange-500"></div>
            Expert Advisors
           </h3>
           {advisors.map(m => (
             <div key={m.id} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24 last:mb-0">
                <div className="relative">
                  <div className="absolute top-4 left-4 w-full h-full border-4 border-orange-500 z-0"></div>
                  <div className="relative z-10 aspect-[3/4] lg:aspect-square bg-slate-200 overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 font-bold uppercase tracking-widest text-xs mb-6">Expert Advisor</span>
                  <h2 className="text-5xl md:text-7xl font-heading font-black text-slate-900 mb-8">{m.name}</h2>
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 font-light border-l-4 border-slate-200 pl-6">{m.bio}</p>
                  
                  <div className="flex gap-6">
                    {m.scholar && (
                        <a href={m.scholar} className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-orange-500 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">
                            <BookOpen className="w-4 h-4" /> Google Scholar
                        </a>
                    )}
                    {m.website && (
                        <a href={m.website} className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-orange-500 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">
                            <Globe className="w-4 h-4" /> Website
                        </a>
                    )}
                  </div>
                </div>
             </div>
           ))}
        </div>

        {/* Researchers Grid */}
        <div>
          <h3 className="text-4xl font-heading font-black text-slate-900 mb-16 flex items-center gap-4">
            <div className="w-12 h-2 bg-orange-500"></div>
            Student Researchers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
            {researchers.map(m => (
              <div key={m.id} className="group">
                <div className="aspect-[4/5] bg-slate-100 mb-8 overflow-hidden relative">
                  <img 
                    src={m.image} 
                    alt={m.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  />
                  {/* Overlay for interaction */}
                  <div className="absolute inset-0 bg-orange-900/0 group-hover:bg-orange-900/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <div className="flex gap-4">
                        {m.scholar && <a href={m.scholar}><BookOpen className="text-white h-6 w-6 cursor-pointer hover:scale-110 transition-transform" /></a>}
                        {m.website && <a href={m.website}><Globe className="text-white h-6 w-6 cursor-pointer hover:scale-110 transition-transform" /></a>}
                     </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{m.name}</h3>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">{m.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
