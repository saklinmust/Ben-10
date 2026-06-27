import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageIcon, Flame, ShieldAlert, Layers } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

interface GalleryProps {
  playBeep: () => void;
}

export default function Gallery({ playBeep }: GalleryProps) {
  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'aliens', label: 'ALIENS' },
    { id: 'battles', label: 'BATTLES' },
    { id: 'episodes', label: 'EPISODES' },
    { id: 'characters', label: 'CHARACTERS' },
    { id: 'wallpapers', label: 'WALLPAPERS' },
  ];

  const [activeCat, setActiveCat] = useState('all');

  const filteredItems = activeCat === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCat);

  const handleFilterClick = (catId: string) => {
    playBeep();
    setActiveCat(catId);
  };

  return (
    <div className="relative min-h-[calc(100vh-4.5rem)] bg-[#030604] text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Visual cyber mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Gallery Title Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-green-500/15 pb-6">
          <div className="md:col-span-8 space-y-2">
            <span className="font-mono text-xs font-bold text-green-500 tracking-widest uppercase flex items-center space-x-1.5">
              <ImageIcon className="w-4 h-4 animate-pulse" />
              <span>VISUAL DATA mainframe</span>
            </span>
            <h1 className="font-mono text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
              GALLERY
            </h1>
            <p className="text-sm text-gray-400 font-mono">
              Check out iconic moments, formidable aliens, crucial battles, and memories from the Ben 10 universe. Every record tells an epic tale of survival.
            </p>
          </div>

          {/* Glowing Omnitrix visual dial element shown in image 4 header */}
          <div className="md:col-span-4 flex justify-end">
            <div className="relative w-28 h-28 rounded-full border border-green-500/30 flex items-center justify-center p-1.5 bg-black">
              {/* Rotating radar graphic */}
              <div className="absolute inset-0 rounded-full border-2 border-dotted border-green-500/40 animate-spin" style={{ animationDuration: '24s' }} />
              <div className="absolute w-24 h-24 rounded-full border border-green-500/20 bg-green-500/5 flex items-center justify-center">
                <div className="w-1.5 h-16 bg-green-500/50 rounded-full animate-spin" style={{ animationDuration: '4s' }} />
                <div className="absolute w-12 h-12 rounded-full border border-green-500/40 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Categories buttons (Image 4 - Pill buttons) */}
        <div className="flex flex-wrap gap-2 justify-center py-2 border-y border-green-500/10 bg-neutral-950/40 p-2.5 rounded-lg">
          {categories.map((cat) => {
            const isActive = cat.id === activeCat;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={`px-4 py-2 rounded font-mono text-xs font-bold tracking-widest transition-all outline-none cursor-pointer ${
                  isActive
                    ? 'bg-green-500 text-black shadow-[0_0_12px_#22c55e]'
                    : 'bg-black/60 border border-green-500/10 text-gray-400 hover:border-green-500/30 hover:text-green-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (Image 4 - beautiful square/rectangular matrix cards) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group border border-green-500/15 bg-black/80 rounded-lg overflow-hidden backdrop-blur hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all flex flex-col justify-between"
              >
                
                {/* Image panel */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle hover sweep light */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-black/80 border border-green-500/30 px-2.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest text-green-400 uppercase">
                    {item.category}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="p-4 border-t border-green-500/5 space-y-1.5">
                  <h3 className="font-mono text-sm font-bold text-white group-hover:text-green-400 transition-colors uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Cyber Footer bar */}
                <div className="border-t border-green-500/5 px-4 py-2 bg-neutral-950/80 flex justify-between items-center text-[9px] font-mono text-green-500/50">
                  <span>RECORD: SECURED</span>
                  <span>ID: {item.id.toUpperCase()}</span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More to explore (Image 4 bottom row) */}
        <div className="border border-green-500/20 bg-green-500/5 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-11 h-11 rounded-full border border-green-500/35 bg-black flex items-center justify-center text-green-400 flex-shrink-0 animate-pulse">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-sm font-black text-white">MORE ADVENTURES AWAIT!</h3>
              <p className="text-xs text-gray-400 font-sans mt-0.5">
                New galaxies, strange creatures, and severe threats are constantly recorded in the Plumber Database.
              </p>
            </div>
          </div>

          <button
            onClick={playBeep}
            className="w-full sm:w-auto px-5 py-2.5 bg-green-500 hover:bg-green-400 text-black font-mono text-xs font-black tracking-widest rounded transition-all shadow-[0_0_12px_#22c55e] uppercase cursor-pointer"
          >
            STAY TUNED
          </button>
        </div>

      </div>
    </div>
  );
}
