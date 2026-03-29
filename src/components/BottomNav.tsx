import React, { useState } from 'react';
import { Home, Map, Compass, Bookmark } from 'lucide-react';

const BottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home },
    { id: 'map', icon: Map },
    { id: 'discover', icon: Compass },
    { id: 'saved', icon: Bookmark },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
      <div className="flex items-center justify-around h-16 px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-full transition-all duration-300 ${isActive
                  ? 'text-brand-primary bg-brand-primary/10'
                  : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
