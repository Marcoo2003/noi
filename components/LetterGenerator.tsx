import React, { useState } from 'react';
import { Send, RefreshCcw, Sparkles } from 'lucide-react';
import { generateLoveLetter } from '../services/geminiService';
import { LetterTone } from '../types';

const LetterGenerator: React.FC = () => {
  const [context, setContext] = useState('');
  const [tone, setTone] = useState<LetterTone>(LetterTone.APOLOGETIC);
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');

  const handleGenerate = async () => {
    if (!context || !name) return;
    setIsLoading(true);
    const letter = await generateLoveLetter(context, tone, name);
    setGeneratedLetter(letter);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl mx-auto border border-rose-100">
      <div className="text-center mb-8">
        <Sparkles className="w-8 h-8 text-rose-400 mx-auto mb-2" />
        <h2 className="text-2xl font-serif text-rose-900 mb-2">Aiutami a Trovare le Parole</h2>
        <p className="text-rose-600 text-sm">A volte è difficile dire esattamente ciò che si prova. Lascia che ti aiuti.</p>
      </div>

      {!generatedLetter ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-rose-700 mb-1">Come si chiama?</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border-rose-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
              placeholder="es. Giulia"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-rose-700 mb-1">Perché dobbiamo riconnetterci?</label>
            <textarea
              rows={3}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="w-full rounded-lg border-rose-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
              placeholder="es. Sono stato testardo riguardo ai piatti, o ho dimenticato il nostro anniversario..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-rose-700 mb-1">Tono desiderato</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as LetterTone)}
              className="w-full rounded-lg border-rose-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
            >
              {Object.values(LetterTone).map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading || !context || !name}
            className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-white font-medium transition-all ${
              isLoading || !context || !name
                ? 'bg-rose-300 cursor-not-allowed'
                : 'bg-rose-500 hover:bg-rose-600 hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
            {isLoading ? (
              <RefreshCcw className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Scrivi per Me</span>
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-rose-50 p-6 rounded-xl border border-rose-100 italic text-rose-800 font-serif leading-relaxed text-lg relative">
             <span className="absolute top-2 left-2 text-4xl text-rose-200">"</span>
             {generatedLetter}
             <span className="absolute bottom-[-10px] right-4 text-4xl text-rose-200">"</span>
          </div>
          <div className="flex space-x-3">
             <button
              onClick={() => setGeneratedLetter('')}
              className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg border border-rose-300 text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <RefreshCcw className="w-4 h-4" />
              <span>Riprova</span>
            </button>
            <button
              onClick={() => {
                 alert("Copiato negli appunti! Ora inviala a lei.");
                 navigator.clipboard.writeText(generatedLetter);
              }}
              className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Copia & Invia</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LetterGenerator;