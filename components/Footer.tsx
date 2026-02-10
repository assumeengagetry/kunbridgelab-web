import React from 'react';
import { LAB_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl font-heading font-extrabold tracking-tight mb-6">{LAB_NAME}</h2>
            <div className="max-w-sm text-lg text-slate-500 font-light leading-relaxed">
              Research Building A, Room 404<br/>
              123 University Avenue, Science Park<br/>
              California, USA
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Laboratory</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li><a href="#/research" className="hover:text-blue-900 transition-colors">Publications</a></li>
                <li><a href="#/team" className="hover:text-blue-900 transition-colors">Team</a></li>
                <li><a href="#/news" className="hover:text-blue-900 transition-colors">News</a></li>
                <li><a href="#/join" className="hover:text-blue-900 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Connect</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li><a href="#" className="hover:text-blue-900 transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Google Scholar</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} {LAB_NAME}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-8">
             <span>Privacy Policy</span>
             <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
