import React from 'react';
import { PenTool } from 'lucide-react';

const PaperLetter: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto py-10 px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-rose-200 blur-3xl opacity-20 transform -rotate-2"></div>

      {/* Paper Container */}
      <div className="relative paper-texture p-8 md:p-12 rotate-1 transition-transform hover:rotate-0 duration-700">

        {/* Tape effect */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm border border-white/20 rotate-1 shadow-sm"></div>

        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-rose-900/10 pb-4 mb-6">
            <span className="font-serif text-rose-900/40 text-sm tracking-widest uppercase">Per te</span>
            <PenTool className="w-5 h-5 text-rose-900/30" />
          </div>

          <div className="font-hand text-2xl md:text-3xl text-gray-800 leading-relaxed space-y-6">
            <p>Amore mio,</p>
            <p>
              Mi dispiace. Mi dispiace per i silenzi, per le incomprensioni e per quei momenti in cui non ti sei sentita al centro del mio mondo. Rivedendo tutto, capisco di aver sbagliato e l'ultima cosa che voglio è vederti triste a causa mia.
            </p>

            <p>
              Non voglio avere ragione, voglio solo essere felice con te.
            </p>

            <p>
              Ripartiamo da noi?
            </p>
          </div>

          <div className="pt-12 flex justify-end">
            <div className="text-right">
              <p className="font-messy text-4xl text-rose-700 transform -rotate-6">Marco</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperLetter;