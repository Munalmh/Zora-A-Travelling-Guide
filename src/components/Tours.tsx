import React from 'react';
import { Clock, Map, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const mockTours = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    duration: "14 Days",
    difficulty: "Hard",
    price: "$1,499",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
    description: "Experience the ultimate adventure to the base of the highest mountain in the world."
  },
  {
    id: 2,
    title: "Annapurna Circuit Trek",
    duration: "18 Days",
    difficulty: "Hard",
    price: "$1,299",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1541819717757-ad6cf08ccc23?q=80&w=2000&auto=format&fit=crop",
    description: "A classic trek offering diverse landscapes from lush valleys to arid high mountains."
  },
  {
    id: 3,
    title: "Kathmandu Valley Cultural Tour",
    duration: "4 Days",
    difficulty: "Easy",
    price: "$450",
    rating: 4.7,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1583205018698-1e43597c2763?q=80&w=2000&auto=format&fit=crop",
    description: "Explore ancient temples, palaces, and immerse yourself in rich Newari culture."
  },
  {
    id: 4,
    title: "Chitwan Jungle Safari",
    duration: "3 Days",
    difficulty: "Easy",
    price: "$350",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1579758682665-53a47938af62?q=80&w=2000&auto=format&fit=crop",
    description: "Discover diverse wildlife including one-horned rhinos and Bengal tigers in their natural habitat."
  },
  {
    id: 5,
    title: "Poon Hill Sunrise Trek",
    duration: "5 Days",
    difficulty: "Moderate",
    price: "$550",
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1502425027878-3bb8c7d61ca5?q=80&w=2000&auto=format&fit=crop",
    description: "Perfect short trek offering breathtaking panoramic views of the Annapurna and Dhaulagiri ranges."
  },
  {
    id: 6,
    title: "Mardi Himal Trek",
    duration: "7 Days",
    difficulty: "Moderate",
    price: "$750",
    rating: 4.7,
    reviews: 75,
    image: "https://images.unsplash.com/photo-1531804226530-70f8004aa44e?q=80&w=2000&auto=format&fit=crop",
    description: "An off-the-beaten-path trek getting you up close to the majestic Machhapuchhre (Fishtail)."
  }
];

const Tours: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 bg-bg-card rounded-t-3xl shadow-sm border border-gray-100 min-h-[50vh] pb-12 z-10 relative">
      <div className="py-12 border-b border-gray-100 mb-8">
        <motion.h1 
          className="font-heading text-4xl font-bold text-text-main text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Curated Nepalese Expeditions
        </motion.h1>
        <motion.p 
          className="font-inter text-text-muted text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From the soaring heights of the Himalayas to the dense jungles of the Terai, discover the perfect guided adventure tailored to your spirit.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {mockTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary flex items-center gap-1 shadow-sm">
                  <Star size={12} className="fill-brand-primary" />
                  {tour.rating} ({tour.reviews})
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl font-bold text-text-main group-hover:text-brand-primary transition-colors line-clamp-2">
                    {tour.title}
                  </h3>
                </div>
                
                <p className="font-inter text-sm text-text-muted line-clamp-2 mb-6">
                  {tour.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1.5 text-text-muted text-sm font-inter bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                      <Clock size={16} className="text-brand-primary" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted text-sm font-inter bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                      <Map size={16} className="text-brand-primary" />
                      {tour.difficulty}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-text-muted font-inter uppercase tracking-wider">Starting from</span>
                      <span className="font-heading text-2xl font-bold text-text-main">{tour.price}</span>
                    </div>
                    <button className="bg-brand-primary hover:bg-brand-secondary text-white p-3 justify-center items-center flex rounded-xl transition-all shadow-sm shadow-brand-primary/30 group-hover:pr-4 group-hover:pl-4">
                      <span className="hidden group-hover:block mr-2 font-inter text-sm font-medium">Book Now</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tours;
