import React from 'react';
import { MARQUEE_WORDS } from '../data/portfolioData';

export const Marquee: React.FC = () => {
  // Repeating array twice for seamless continuous loop
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <div className="w-full bg-[#f97316] py-3.5 overflow-hidden select-none shadow-md">
      <div className="flex w-max animate-marquee font-bold text-xs sm:text-sm tracking-widest text-black uppercase">
        {items.map((word, index) => (
          <span key={index} className="inline-flex items-center mx-4 sm:mx-6">
            <span>{word}</span>
            <span className="ml-4 sm:ml-6 text-black/60 font-mono">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
