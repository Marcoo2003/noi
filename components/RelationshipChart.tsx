import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LoveMetric } from '../types';

const data: LoveMetric[] = [
  { date: 'Inizio', happiness: 10, connection: 10 },
  { date: '1 Mese', happiness: 30, connection: 20 },
  { date: '6 Mesi', happiness: 50, connection: 45 },
  { date: '1 Anno', happiness: 70, connection: 60 },
  { date: 'Oggi', happiness: 85, connection: 80 },
  { date: 'Futuro', happiness: 100, connection: 100 },
];

const RelationshipChart: React.FC = () => {
  return (
    <div className="w-full h-64 bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-rose-100">
      <h3 className="text-center text-rose-800 font-serif text-lg mb-4">La Nostra Traiettoria</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorHappiness" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="#9f1239" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis hide domain={[0, 110]} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #fda4af' }}
            itemStyle={{ color: '#be123c' }}
          />
          <Area 
            type="monotone" 
            dataKey="happiness" 
            stroke="#e11d48" 
            fillOpacity={1} 
            fill="url(#colorHappiness)" 
            strokeWidth={2}
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RelationshipChart;