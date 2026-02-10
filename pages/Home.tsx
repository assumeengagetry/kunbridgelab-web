import React from 'react';
import { NEWS, PUBLICATIONS, LAB_DESCRIPTION } from '../constants';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredPub = PUBLICATIONS[0];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Grand Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop" 
            alt="AI Lab Abstract" 
            className="w-full h-full object-cover opacity-70 scale-105 animate-[pulse_8s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center max-w-[1800px] mx-auto px-6 lg:px-16 z-10">
          <div className="max-w-6xl fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-20 bg-blue-500"></div>
              <h2 className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                Advancing Machine Intelligence
              </h2>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.9] mb-12 tracking-tighter">
              BRIDGING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-white">PERCEPTION</span> <br/>
              & REASONING
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light mb-16 leading-relaxed border-l-4 border-blue-600 pl-6">
              A student-led academic society building next-generation foundation models that understand, reason, and interact with the physical world.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link to="/research" className="group relative px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <span className="relative group-hover:text-black transition-colors">Explore Projects</span>
              </Link>
              <Link to="/team" className="group px-10 py-5 border border-white/30 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all backdrop-blur-sm">
                Meet The Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Intro Statement - HIGH CONTRAST BLOCK */}
      <section className="bg-indigo-950 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h3 className="text-5xl md:text-7xl font-heading font-black text-white leading-[1.05] mb-8">
                A World-Class Hub for <br/> 
                <span className="text-blue-400">Student Innovation</span>.
              </h3>
            </div>
            
            <div className="space-y-12">
              <p className="text-xl text-indigo-200 leading-relaxed font-light">
                {LAB_DESCRIPTION}
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-12 pt-12 border-t border-indigo-800">
                <div>
                  <div className="text-5xl font-black text-white mb-2">10+</div>
                  <div className="text-xs uppercase tracking-widest text-blue-400 font-bold">Ongoing Projects</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-2">Global</div>
                  <div className="text-xs uppercase tracking-widest text-blue-400 font-bold">Collaborations</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-2">Pure</div>
                  <div className="text-xs uppercase tracking-widest text-blue-400 font-bold">Academic Research</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Research Highlight (Big Feature) */}
      <section className="bg-white py-32">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-end mb-16">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 flex items-center gap-2">
              <Zap className="h-4 w-4 fill-current" /> Featured Project
            </h3>
            <Link to="/research" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors group">
              All Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="group relative w-full h-[80vh] overflow-hidden bg-black shadow-2xl">
             <img src={featuredPub.thumbnail} alt={featuredPub.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
             
             <div className="absolute bottom-0 left-0 p-8 md:p-24 max-w-5xl">
               <div className="flex items-center gap-4 mb-8">
                  <span className="inline-block px-4 py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest">
                    {featuredPub.venue}
                  </span>
                  <span className="text-white/60 text-sm font-bold uppercase tracking-widest">
                    {featuredPub.year}
                  </span>
               </div>
               
               <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-8 leading-[1.1]">
                 {featuredPub.title}
               </h2>
               <p className="text-xl text-slate-200 mb-12 max-w-3xl line-clamp-3 font-light">
                 {featuredPub.abstract}
               </p>
               <Link to="/research" className="inline-flex items-center text-white font-bold uppercase tracking-widest border-b-2 border-white pb-2 hover:border-blue-400 hover:text-blue-400 transition-colors text-lg">
                 Learn More
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 4. News Grid - Vibrant Cards */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
          <h3 className="text-5xl md:text-6xl font-heading font-black text-slate-900 mb-20 tracking-tight">Latest News</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {NEWS.map((item, index) => (
              <div key={item.id} className="group bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border-l-4 border-transparent hover:border-blue-600 relative top-0 hover:-top-2">
                <div className="text-xs font-black uppercase tracking-widest text-blue-600 mb-6">
                  {item.date}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                  <Link to="/news">{item.title}</Link>
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {item.content}
                </p>
                <Link to="/news" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-900 group-hover:translate-x-2 transition-transform">
                  Read More <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team / Hiring Banner - BOLD */}
      <section className="bg-blue-600 text-white py-32 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-cyan-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-50"></div>
        
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-8xl font-heading font-black mb-10 tracking-tight">
            JOIN THE LAB
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light">
            We are looking for candidates who can balance academics, research, and life.
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16 font-light uppercase tracking-widest">
            Preferred Majors: ECE, AI, CS, IE, MSE
          </p>
          <Link to="/join" className="inline-block px-12 py-6 bg-white text-blue-600 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-sm shadow-xl">
            Apply Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
