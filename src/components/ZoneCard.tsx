import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Bookmark, Star, Calendar } from 'lucide-react';
import type { Zone } from '../data/mockData';

interface ZoneCardProps {
  zone: Zone;
  index: number;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
}

const ZoneCard: React.FC<ZoneCardProps> = ({ zone, index, isFavorite, toggleFavorite }) => {
  const [imageError, setImageError] = useState(false);

  const getCategoryGradient = (category: string) => {
    switch(category) {
      case 'Trekking Routes': return 'from-teal-400 to-teal-600';
      case 'Valleys & Lakes': return 'from-blue-400 to-blue-600';
      case 'Wildlife Reserves': return 'from-emerald-500 to-emerald-700';
      case 'Cultural Sites': return 'from-orange-400 to-orange-600';
      case 'Himalayas': return 'from-slate-500 to-slate-700';
      default: return 'from-brand-primary to-brand-secondary';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col group cursor-pointer"
    >
      <div 
        className="bg-white rounded-2xl overflow-hidden flex flex-col h-full border border-gray-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-card-hover"
      >
        <div className="relative h-[200px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          
          {!imageError ? (
            <img 
              src={zone.imageUrl} 
              alt={zone.name} 
              loading="lazy"
              crossOrigin="anonymous"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(zone.category)} transition-transform duration-700 ease-out group-hover:scale-105`} />
          )}

          <div className="absolute top-3 left-3 z-20">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] uppercase font-heading font-semibold text-brand-secondary shadow-sm">
              {zone.badge}
            </span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(zone.id);
            }}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
          >
            <Bookmark 
              size={16} 
              className={isFavorite ? "fill-brand-primary text-brand-primary" : "text-gray-400"} 
            />
          </button>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="text-xs font-inter text-brand-primary mb-1 font-medium uppercase tracking-wide">
              {zone.region}
            </div>
            <h3 className="text-lg font-heading font-bold text-text-main mb-3 leading-tight group-hover:text-brand-primary transition-colors">
              {zone.name}
            </h3>
          </div>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-text-main font-semibold">
                <DollarSign size={16} className="text-brand-secondary" />
                <span>{zone.price.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center gap-1 text-amber-500 font-semibold text-sm">
                <Star size={14} className="fill-amber-500" />
                <span>{zone.rating.toFixed(1)}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-text-muted text-sm font-inter">
              <Calendar size={14} className="text-brand-primary/70" />
              <span>{zone.duration} Days Tour</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ZoneCard;
