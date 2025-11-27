import React, { useState } from 'react';
import { Utensils, Film, Coffee, Check } from 'lucide-react';
import { DateIdea } from '../types';

const ideas: DateIdea[] = [
  {
    id: 'dinner',
    title: 'Cena Romantica',
    icon: <Utensils className="w-6 h-6" />,
    description: 'Il tuo ristorante preferito. Offro io.'
  },
  {
    id: 'movie',
    title: 'Serata Cinema',
    icon: <Film className="w-6 h-6" />,
    description: 'Divano, coperta, e scegli tu il film.'
  },
  {
    id: 'walk',
    title: 'Passeggiata',
    icon: <Coffee className="w-6 h-6" />,
    description: 'Un caffè e due passi, solo noi due.'
  }
];

const DateNight: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-rose-100 shadow-sm mt-8">
      <h3 className="text-center text-xl font-serif text-rose-900 mb-6">La Mia Offerta di Pace</h3>
      <p className="text-center text-rose-600 mb-6 text-sm">Scegli cosa faremo per ripartire insieme.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ideas.map((idea) => (
          <div 
            key={idea.id}
            onClick={() => setSelected(idea.id)}
            className={`cursor-pointer relative p-4 rounded-xl border-2 transition-all duration-300 ${
              selected === idea.id 
                ? 'border-rose-500 bg-rose-50 scale-105 shadow-md' 
                : 'border-transparent bg-white hover:border-rose-200 hover:shadow-sm'
            }`}
          >
            <div className={`mb-3 p-3 rounded-full w-fit ${selected === idea.id ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-500'}`}>
              {idea.icon}
            </div>
            <h4 className="font-bold text-rose-800 mb-1">{idea.title}</h4>
            <p className="text-xs text-rose-600 leading-relaxed">{idea.description}</p>
            
            {selected === idea.id && (
              <div className="absolute top-2 right-2 bg-rose-500 text-white rounded-full p-1">
                <Check className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {selected && (
         <div className="mt-6 text-center animate-fade-in">
           <p className="text-rose-800 font-medium">Ottima scelta. Non vedo l'ora.</p>
         </div>
      )}
    </div>
  );
};

export default DateNight;