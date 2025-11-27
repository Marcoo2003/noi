import React from 'react';

export interface Memory {
  id: number;
  url: string;
  caption: string;
}

export interface LoveMetric {
  date: string;
  happiness: number;
  connection: number;
}

export enum LetterTone {
  ROMANTIC = 'Romantico',
  APOLOGETIC = 'Profondamente dispiaciuto',
  POETIC = 'Poetico',
  CASUAL = 'Sincero e Spontaneo'
}

export interface DateIdea {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}