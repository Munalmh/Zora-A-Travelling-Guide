import { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ZoneCard from './components/ZoneCard';
import Contact from './components/Contact';
import Tours from './components/Tours';
import { mockZones, type Zone } from './data/mockData';

function App() {
  const [activeView, setActiveView] = useState<'home' | 'contact' | 'tours'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Regions');
  const [maxDuration, setMaxDuration] = useState(30);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const filteredZones = useMemo(() => {
    return mockZones.filter((zone: Zone) => {
      const matchesCategory = activeCategory === 'All Regions' || zone.category === activeCategory;
      const matchesSearch = 
        zone.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        zone.region.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDuration = zone.duration <= maxDuration;
      
      return matchesCategory && matchesSearch && matchesDuration;
    });
  }, [searchQuery, activeCategory, maxDuration]);

  return (
    <div 
      className="min-h-screen relative text-text-main pb-24 md:pb-0 font-inter flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.85), rgba(249, 250, 251, 0.95)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        activeView={activeView} 
        setActiveView={setActiveView} 
      />
      
      <main className="pt-16 flex-grow flex flex-col items-center">
        {activeView === 'home' ? (
          <>
            <Hero 
              onSearch={setSearchQuery} 
              maxDuration={maxDuration} 
              setMaxDuration={setMaxDuration} 
            />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 bg-bg-card rounded-t-3xl shadow-sm border border-gray-100 min-h-[50vh]">
              <FilterBar 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
              />

              <div className="py-8">
                {filteredZones.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    <AnimatePresence>
                      {filteredZones.map((zone, index) => (
                        <ZoneCard
                          key={zone.id}
                          zone={zone}
                          index={index}
                          isFavorite={favorites.includes(zone.id)}
                          toggleFavorite={toggleFavorite}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-text-muted font-inter">
                    <div className="text-gray-300 text-5xl mb-4">🏔️</div>
                    <h3 className="font-heading text-xl mb-2 text-text-main font-semibold">No Adventures Found</h3>
                    <p>Try extending the trip duration or changing categories.</p>
                    <button 
                      onClick={() => { setSearchQuery(''); setActiveCategory('All Regions'); setMaxDuration(30); }}
                      className="mt-6 px-6 py-2 bg-white border border-gray-200 rounded-full hover:border-brand-primary hover:text-brand-primary transition-all font-inter text-sm shadow-sm"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : activeView === 'contact' ? (
          <Contact />
        ) : (
          <Tours />
        )}
      </main>

      <footer className="w-full py-6 text-center text-text-muted border-t border-gray-200 bg-white/50 backdrop-blur-sm relative z-10 font-inter text-sm mt-auto">
        &copy; {new Date().getFullYear()} Devendra Raj Mahato. All rights reserved.
      </footer>

      <BottomNav />
    </div>
  );
}

export default App;
