import React from 'react';
import { PUBLICATIONS } from '../constants';
import { FileText, Github, Globe, ArrowUpRight } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Research Hero - MASSIVE & FULL SCREEN */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background Layer */}
        <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2600&auto=format&fit=crop" 
              alt="Research Abstract" 
              className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_15s_ease-in-out_infinite]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
        </div>
        
        {/* Content Layer */}
        <div className="relative h-full flex items-center max-w-[1800px] mx-auto px-6 lg:px-16 z-10">
          <div className="max-w-6xl fade-in-up">
             <div className="flex items-center gap-4 mb-8">
               <div className="h-[2px] w-20 bg-cyan-400"></div>
               <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                 Scientific Breakthroughs
               </span>
             </div>

             <h1 className="text-7xl md:text-9xl font-heading font-black text-white mb-10 tracking-tighter leading-[0.9]">
               OUR <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                 RESEARCH
               </span>
             </h1>

             <p className="text-xl md:text-3xl text-slate-300 max-w-4xl font-light leading-relaxed border-l-4 border-blue-600 pl-8">
               Pioneering the next generation of generative models, multi-modal understanding, and autonomous systems.
             </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
           <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 py-32">
        <div className="space-y-20">
          {PUBLICATIONS.map((pub, index) => (
            <div key={pub.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 bg-white">
              
              {/* Image Column - Large Color Block */}
              <div className="lg:col-span-5 relative overflow-hidden bg-slate-900 aspect-[4/3] lg:aspect-auto">
                <img 
                  src={pub.thumbnail} 
                  alt={pub.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute top-0 left-0 p-6">
                   <span className="text-4xl font-black text-white/20 group-hover:text-white transition-colors">
                     {String(index + 1).padStart(2, '0')}
                   </span>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative">
                <div className="absolute top-0 right-0 w-2 h-0 bg-blue-600 group-hover:h-full transition-all duration-500 ease-in-out"></div>
                
                <div>
                   <div className="flex items-center gap-4 mb-8">
                     <span className="px-4 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest">
                       {pub.venue}
                     </span>
                     <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                       {pub.year}
                     </span>
                   </div>
                   
                   <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 mb-8 leading-[1.1] group-hover:text-blue-600 transition-colors">
                     {pub.title}
                   </h2>
                   
                   <p className="text-lg text-slate-600 mb-6 font-medium">
                     {pub.authors.map((author, i) => (
                       <span key={i} className={author.includes('Kun') ? 'text-black border-b-2 border-black' : 'text-slate-500'}>
                         {author}{i < pub.authors.length - 1 ? ', ' : ''}
                       </span>
                     ))}
                   </p>
                   
                   <p className="text-slate-500 leading-relaxed mb-10 max-w-3xl">
                     {pub.abstract}
                   </p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <a href={pub.pdfLink || '#'} className="flex items-center px-6 py-3 bg-slate-100 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors">
                    Paper <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                  <a href={pub.codeLink || '#'} className="flex items-center px-6 py-3 bg-slate-100 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors">
                    Code <Github className="ml-2 h-4 w-4" />
                  </a>
                  <a href="#" className="flex items-center px-6 py-3 bg-slate-100 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors">
                    Project <Globe className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
