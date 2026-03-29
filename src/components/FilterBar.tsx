import React from 'react';

const categories = [
  'All Regions',
  'Himalayas',
  'Valleys & Lakes',
  'Wildlife Reserves',
  'Cultural Sites',
  'Trekking Routes'
];

interface FilterBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4 border-b border-gray-100">
      <div className="flex items-center gap-3 px-4 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-inter text-sm whitespace-nowrap transition-all duration-300 border ${
                isActive
                  ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                  : 'bg-bg-card text-text-muted border-gray-200 hover:border-brand-primary/50 hover:text-brand-primary'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
