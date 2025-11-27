import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const reasons = [
  "Il modo in cui sorridi quando mi vedi.",
  "Come mi fai sentire al sicuro.",
  "La tua determinazione nello studio e nella vita, che mi ispira ogni giorno.",
  "Che con te riesco a immaginare davvero un futuro bello.",
  "Il modo in cui i tuoi occhi brillano.",
  "Come mi capisci senza che io dica una parola.",
  "Il calore dei tuoi abbracci.",
  "Perché mi rendi una persona migliore.",
  "Perché sei semplicemente tu."
];

const ReasonsLove: React.FC = () => {
  const [currentReason, setCurrentReason] = useState<string>("Clicca il cuore...");
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    const random = reasons[Math.floor(Math.random() * reasons.length)];
    setCurrentReason(random);
    setTimeout(() => setAnimate(false), 500);
  };

  return (
    <div className="text-center py-10">
      <h3 className="text-2xl font-serif text-rose-800 mb-6">Perché Ti Amo</h3>

      <div className="relative inline-block cursor-pointer group" onClick={handleClick}>
        <div className={`transition-transform duration-300 ${animate ? 'scale-90' : 'group-hover:scale-110'}`}>
          <Heart className="w-32 h-32 text-rose-500 fill-rose-500 drop-shadow-lg" />
        </div>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm pointer-events-none">
          Cliccami
        </span>
      </div>

      <div className="mt-8 h-16 flex items-center justify-center">
        <p className={`text-xl font-medium text-rose-700 transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'}`}>
          "{currentReason}"
        </p>
      </div>
    </div>
  );
};

export default ReasonsLove;