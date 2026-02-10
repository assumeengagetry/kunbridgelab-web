import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Team from './pages/Team';
import AIChat from './components/AIChat';

const NewsPage = () => <div className="min-h-screen flex items-center justify-center text-slate-500 font-heading text-2xl">News Archive</div>;
const JoinPage = () => <div className="min-h-screen flex items-center justify-center text-slate-500 font-heading text-2xl">Join Us</div>;

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
};

export default App;
