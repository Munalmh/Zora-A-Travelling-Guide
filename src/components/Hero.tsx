import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, SlidersHorizontal } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  maxDuration: number;
  setMaxDuration: (level: number) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch, maxDuration, setMaxDuration }) => {
  const [destination, setDestination] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(destination);
  };

  return (
    <section className="relative w-full py-12 md:py-20 flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-b from-brand-primary/5 to-transparent">
      <div className="text-center mb-10 z-10 w-full px-4">
        <h1 className="mt-6 text-4xl md:text-6xl font-heading font-extrabold text-text-main tracking-tight">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Nepal</span>
        </h1>
        <p className="mt-4 text-text-muted font-inter max-w-2xl mx-auto text-sm md:text-base">
          Find your next Himalayan adventure, cultural heritage site, or wildlife safari.
        </p>
      </div>

      <div className="w-full max-w-4xl px-4 z-10">
        <form 
          onSubmit={handleSearch}
          className="bg-white rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-between border border-gray-200 shadow-md relative group"
        >
          <div className="flex-1 w-full flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-brand-primary/20 transition-all">
            <MapPin className="text-brand-primary" size={20} />
            <input 
              type="text" 
              placeholder="Destination (Region/Site)" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-transparent w-full text-text-main placeholder:text-gray-400 font-inter outline-none text-sm md:text-base"
            />
          </div>

          <div className="flex-1 w-full flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-brand-primary/20 transition-all">
            <Calendar className="text-brand-secondary" size={20} />
            <input 
              type="date" 
              className="bg-transparent w-full text-text-main placeholder:text-gray-400 font-inter outline-none text-sm md:text-base"
            />
          </div>

          <div className="flex-1 w-full flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-brand-primary/20 transition-all">
            <Users className="text-brand-primary" size={20} />
            <select className="bg-transparent w-full text-text-main font-inter outline-none text-sm md:text-base appearance-none cursor-pointer">
              <option value="1">Solo (1)</option>
              <option value="2">Couple (2)</option>
              <option value="3">Group (3-5)</option>
              <option value="5+">Large Group (6+)</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full md:w-auto mt-2 md:mt-0 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg px-8 py-3 font-heading font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Search size={18} />
            <span>DISCOVER</span>
          </button>
        </form>

        <div className="mt-8 bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 w-fit mx-auto">
          <div className="flex items-center gap-2 text-text-muted font-inter text-sm md:text-base">
            <SlidersHorizontal size={18} className="text-brand-secondary" />
            <span>Max Trip Duration: </span>
            <span className="font-heading font-semibold text-brand-primary w-16 text-right">
              {maxDuration} Days
            </span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="30" 
            step="1" 
            value={maxDuration}
            onChange={(e) => setMaxDuration(parseInt(e.target.value))}
            className="duration-slider w-48 sm:w-64"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
