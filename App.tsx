import React, { useState, useEffect } from 'react';
import { Heart, Camera, ArrowDown } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import PaperLetter from './components/PaperLetter';
import ReasonsLove from './components/ReasonsLove';
import TimeCounter from './components/TimeCounter';
import MusicPlayer from './components/MusicPlayer';
import PhotoGallery from './components/PhotoGallery';
import usPhoto from './assets/us.jpg';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100 text-rose-900 font-sans selection:bg-rose-200 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FloatingHearts />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-widest text-rose-600 flex items-center gap-2">
            <Heart className="w-5 h-5 fill-current animate-pulse" /> NOI
          </div>
          <div className="flex space-x-6 text-sm font-medium text-rose-800">
            <button onClick={() => scrollToSection('memories')} className="hover:text-rose-500 transition-colors">Ricordi</button>
            <button onClick={() => scrollToSection('letter')} className="hover:text-rose-500 transition-colors bg-white/50 px-3 py-1 rounded-full border border-rose-200">La mia Lettera</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 z-10 pb-20">
        <div className="animate-float mb-8 relative">
          <div className="absolute inset-0 bg-rose-400 blur-3xl opacity-20 rounded-full animate-pulse-slow"></div>
          <Heart className="w-24 h-24 md:w-40 md:h-40 text-rose-500 fill-rose-500 drop-shadow-2xl relative z-10" />
        </div>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-800 mb-6 tracking-tight animate-fade-in-up">
          Ripartiamo da qui?
        </h1>
        <p className="text-lg md:text-2xl text-rose-700 max-w-xl mx-auto leading-relaxed font-light mb-12 animate-fade-in-up font-serif italic" style={{ animationDelay: '0.2s' }}>
          Con te sto bene, più di quanto riesca a dire.
        </p>

        <div className="w-full max-w-md mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <TimeCounter />
        </div>

        <button
          onClick={() => scrollToSection('memories')}
          className="animate-bounce p-3 rounded-full bg-white/80 hover:bg-white shadow-lg text-rose-500 transition-all cursor-pointer border border-rose-100"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </header>

      {/* Memories & Music Section */}
      <section id="memories" className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="bg-rose-100 p-3 rounded-full mb-4">
              <Camera className="w-6 h-6 text-rose-600" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-rose-900 text-center">I Nostri Momenti</h2>
            <div className="w-20 h-1 bg-rose-300 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            {/* Music Player Slot - Prominent */}
            <div className="md:col-span-12 lg:col-span-6 flex items-center">
              <MusicPlayer />
            </div>

            {/* Reasons to Love */}
            <div className="md:col-span-12 lg:col-span-6 flex items-center">
              <div className="glass-panel rounded-2xl p-8 w-full border border-rose-200/50">
                <ReasonsLove />
              </div>
            </div>
          </div>

          <PhotoGallery />
        </div>
      </section>

      {/* Letter Section */}
      <section id="letter" className="py-20 px-4 relative z-10 bg-gradient-to-b from-white/0 to-rose-100/50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-rose-900 mb-4">Le Parole che Mancavano</h2>
          <p className="text-rose-600">Ho scritto questo pensando a noi.</p>
        </div>
        <div className="max-w-3xl mx-auto transform hover:-translate-y-2 transition-transform duration-500">
          <PaperLetter />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-rose-400 text-sm relative z-10 bg-white/30 backdrop-blur-sm mt-12">
        <p className="font-serif italic text-lg text-rose-800 mb-2 flex items-center justify-center gap-2">
          Fatto con <Heart className="w-5 h-5 text-rose-600 fill-rose-600 animate-pulse" /> per te
        </p>
      </footer>
    </div>
  );
};

export default App;