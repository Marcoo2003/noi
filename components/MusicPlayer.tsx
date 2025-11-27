import React, { useState } from 'react';
import { Music, Play, Pause, Disc, Volume2 } from 'lucide-react';
import ReactPlayer from 'react-player';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // ID YouTube per Coez - La Musica Non C'è (Fallback)
  const YOUTUBE_ID = "I5cL3rpp4SU";

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full glass-panel rounded-2xl p-5 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 shadow-lg relative group overflow-hidden border border-rose-200/60 transition-all hover:scale-[1.01]">

      {/* 
        React Player Logic:
        Kept mounted but hidden to ensure audio plays reliably.
      */}
      <div style={{ display: 'none' }}>
        <ReactPlayer
          src={`Taciturnal.mp3`}
          playing={isPlaying}
          volume={1}
          loop={true}
          width="0"
          height="0"
        />
      </div>

      {/* Vinyl Animation Area */}
      <div className="relative w-28 h-28 flex-shrink-0">
        <div className={`absolute inset-0 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-2xl transition-all duration-1000 ${isPlaying ? 'animate-spin-slow' : ''}`}>
          {/* Vinyl Grooves */}
          <div className="absolute inset-2 border border-gray-700 rounded-full opacity-50"></div>
          <div className="absolute inset-5 border border-gray-700 rounded-full opacity-50"></div>
          <div className="absolute inset-8 border border-gray-700 rounded-full opacity-50"></div>

          {/* Center Label */}
          <div className="w-10 h-10 bg-rose-500 rounded-full border-2 border-rose-300 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-600 to-rose-400"></div>
            <div className="w-2 h-2 bg-black rounded-full z-10"></div>
          </div>
        </div>

        {/* Shine effect on vinyl */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none z-20"></div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          {!isPlaying && <Disc className="w-10 h-10 text-white/50 backdrop-blur-sm rounded-full" />}
        </div>
      </div>

      {/* Song Info */}
      <div className="flex-1 text-center md:text-left min-w-0 z-10 w-full px-2">
        <div className="flex items-center justify-center md:justify-between mb-1">
          <h4 className="text-rose-900 font-bold text-lg truncate font-serif">Taciturnal</h4>
          {isPlaying && <Volume2 className="w-4 h-4 text-rose-500 animate-pulse hidden md:block" />}
        </div>
        <p className="text-rose-500 font-medium text-sm truncate mb-3">Coez, Gemitaiz</p>



        {/* Progress Bar Visual */}
        <div className="h-1 w-full bg-rose-200/50 rounded-full overflow-hidden">
          <div className={`h-full bg-rose-500 w-full origin-left transition-transform duration-[200s] ease-linear ${isPlaying ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={togglePlay}
        className="w-14 h-14 flex-shrink-0 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center transition-all shadow-xl hover:shadow-rose-400 hover:scale-110 z-10 active:scale-95"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 fill-current" />
        ) : (
          <Play className="w-6 h-6 fill-current ml-1" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;