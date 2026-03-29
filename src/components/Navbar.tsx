import React from 'react';
import { Mountain, Search, User } from 'lucide-react';

interface NavbarProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  activeView?: 'home' | 'contact' | 'tours';
  setActiveView?: (view: 'home' | 'contact' | 'tours') => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery = '', setSearchQuery, activeView = 'home', setActiveView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-card shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveView?.('home')}
          >
            <Mountain className="text-brand-primary" size={28} />
            <span className="font-heading font-bold text-xl tracking-wide text-text-main hidden sm:block">
              NEPAL EXPLORER
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveView?.('home')}
              className={`font-inter text-sm transition-colors ${activeView === 'home' ? 'text-brand-primary font-medium' : 'text-text-muted hover:text-brand-primary'}`}
            >
              Destinations
            </button>
            <button 
              onClick={() => setActiveView?.('tours')}
              className={`font-inter text-sm transition-colors ${activeView === 'tours' ? 'text-brand-primary font-medium' : 'text-text-muted hover:text-brand-primary'}`}
            >
              Tours
            </button>
            <button 
              onClick={() => setActiveView?.('contact')}
              className={`font-inter text-sm transition-colors ${activeView === 'contact' ? 'text-brand-primary font-medium' : 'text-text-muted hover:text-brand-primary'}`}
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            {setSearchQuery ? (
              <div className="relative hidden sm:flex items-center">
                <Search className="absolute left-3 text-text-muted" size={16} />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search regions..."
                  className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-inter text-text-main focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary w-48 lg:w-64 transition-all"
                />
              </div>
            ) : null}
            <button className="sm:hidden text-text-muted hover:text-brand-primary transition-colors">
              <Search size={20} />
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded-md transition-all shadow-sm">
              <User size={16} />
              <span className="font-inter text-sm font-medium">Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
