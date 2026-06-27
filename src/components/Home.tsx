import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, MapPin, Zap, ShieldAlert, Cpu, ChevronRight } from 'lucide-react';
import { ALIENS_DATA, HERO_IMAGE, OMNITRIX_CORE } from '../data';
import { Alien } from '../types';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  playTransform: () => void;
  playBeep: () => void;
}

export default function Home({ setActiveTab, playTransform, playBeep }: HomeProps) {
  // We'll show the original 6 dial aliens from Image 1
  const dialAliensIds = ['heatblast', 'fourarms', 'wildmutt', 'greymatter', 'diamondhead', 'xlr8'];
  const dialAliens = ALIENS_DATA.filter(alien => dialAliensIds.includes(alien.id));
  
  const [selectedAlien, setSelectedAlien] = useState<Alien>(dialAliens[0]);
  const [isRotating, setIsRotating] = useState(false);

  const handleSelectAlien = (alien: Alien) => {
    if (alien.id === selectedAlien.id) return;
    playTransform();
    setIsRotating(true);
    setSelectedAlien(alien);
    setTimeout(() => setIsRotating(false), 800);
  };

  return (
    <div className="relative min-h-[calc(100vh-4.5rem)] bg-[#030604] overflow-hidden text-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Background grid + ambient glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,19,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,19,0.3)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        
        {/* Left Side: Hero Intro & Alien Stat Indicators */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-l-4 border-green-500 pl-4 py-2 bg-green-500/5 rounded-r"
          >
            <h1 className="font-mono text-5xl font-black tracking-tight leading-none mb-4">
              IT'S <br />
              <span className="text-green-500 text-6xl drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">HERO</span> <br />
              TIME!
            </h1>
            <p className="text-sm font-sans text-gray-400 leading-relaxed max-w-sm">
              With the power of the Omnitrix, Ben Tennyson can transform into alien heroes and save the world from universal threats!
            </p>
            <button
              onClick={() => { playBeep(); setActiveTab('transformations'); }}
              className="mt-4 inline-flex items-center space-x-2 border border-green-500/50 bg-green-500/10 px-4 py-2 rounded text-xs font-mono font-bold tracking-widest text-green-400 hover:bg-green-500 hover:text-black transition-all shadow-[0_0_10px_rgba(34,197,94,0.15)] cursor-pointer"
            >
              <span>EXPLORE OMNITRIX</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Dynamic Stat Meters Board (Left panel of image 1) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-green-500/20 bg-black/80 rounded-lg p-5 backdrop-blur-md relative overflow-hidden"
          >
            {/* Tech scanner background line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-green-500/30 animate-pulse" />
            
            <div className="flex justify-between items-center mb-4 border-b border-green-500/10 pb-2">
              <span className="font-mono text-xs font-bold text-green-500 tracking-wider">SPECIES PARAMETERS</span>
              <span className="text-[10px] font-mono text-gray-500 bg-green-500/10 px-2 py-0.5 rounded uppercase">
                {selectedAlien.name}
              </span>
            </div>

            <div className="space-y-3.5">
              {[
                { label: 'STRENGTH', val: selectedAlien.stats.strength },
                { label: 'SPEED', val: selectedAlien.stats.speed },
                { label: 'INTELLIGENCE', val: selectedAlien.stats.intelligence },
                { label: 'AGILITY', val: selectedAlien.stats.agility },
                { label: 'ENERGY OUTPUT', val: selectedAlien.stats.energy },
                { label: 'COMBAT POTENTIAL', val: selectedAlien.stats.fighting },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-400">
                    <span>{stat.label}</span>
                    <span className="text-green-400 font-bold">{stat.val}/10</span>
                  </div>
                  <div className="h-2 bg-neutral-900 border border-green-500/10 rounded-sm overflow-hidden flex">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 border-r border-black last:border-0 transition-all duration-300 ${
                          i < stat.val ? 'bg-green-500 shadow-[0_0_4px_#22c55e]' : 'bg-neutral-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center Side: Interactive Omnitrix Selector Wheel */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center py-6">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
            
            {/* Pulsing Outer Sci-Fi Border Ring */}
            <div className="absolute inset-0 rounded-full border border-green-500/20 animate-pulse scale-105" />
            <div className="absolute inset-2 rounded-full border border-dotted border-green-500/30 rotate-12" />

            {/* Dial background wheel */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-neutral-900 to-black border-2 border-green-500/40 flex items-center justify-center overflow-hidden">
              <img 
                src={OMNITRIX_CORE} 
                alt="Omnitrix blueprint core" 
                className="absolute inset-0 w-full h-full object-cover opacity-15"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#030604]/90" />
            </div>

            {/* Central Omnitrix Emblem / Info Panel */}
            <div className="absolute z-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-black border-4 border-green-500 flex flex-col items-center justify-center text-center p-3 shadow-[0_0_25px_rgba(34,197,94,0.4)]">
              <div className="absolute inset-1 rounded-full border border-dotted border-green-500/20" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAlien.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center h-full"
                >
                  {/* Omnitrix center graphics */}
                  <div className="w-12 h-12 relative flex items-center justify-center mb-1">
                    <div className="absolute w-2 h-10 bg-green-500 rotate-45 rounded" />
                    <div className="absolute w-2 h-10 bg-green-500 -rotate-45 rounded" />
                    <div className="absolute w-4 h-4 bg-black border border-green-500 rounded-full" />
                  </div>
                  <span className="font-mono text-xs font-black text-white tracking-widest uppercase">
                    {selectedAlien.name}
                  </span>
                  <span className="text-[8px] font-mono text-green-400">
                    {selectedAlien.species}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Outer dial segments placement (circular) */}
            {dialAliens.map((alien, index) => {
              const angle = (index * 360) / dialAliens.length;
              const radius = 120; // px
              const isCurrent = alien.id === selectedAlien.id;

              return (
                <div
                  key={alien.id}
                  style={{
                    transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                  }}
                  className="absolute z-10 transition-transform duration-500"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSelectAlien(alien)}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black border-2 flex items-center justify-center overflow-hidden cursor-pointer ${
                      isCurrent
                        ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]'
                        : 'border-green-500/30 hover:border-green-400'
                    }`}
                  >
                    {/* Alien symbol background silhouette */}
                    <div className="absolute inset-0 bg-neutral-950 opacity-40" />
                    <img
                      src={alien.imageUrl}
                      alt={alien.name}
                      className={`w-full h-full object-cover transition-all ${
                        isCurrent ? 'grayscale-0 scale-110' : 'grayscale brightness-75 hover:grayscale-0'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Tiny visual badge */}
                    <div className={`absolute bottom-0 inset-x-0 h-1 text-[7px] font-mono text-center leading-none ${
                      isCurrent ? 'bg-green-500' : 'bg-transparent'
                    }`} />
                  </motion.button>
                </div>
              );
            })}

          </div>
          
          <div className="text-center mt-4">
            <span className="text-[10px] font-mono text-green-500/70 block uppercase tracking-widest">
              DIAL TO TRANSLATE RECOMBINANT DNA
            </span>
            <p className="text-xs text-gray-400 mt-1 italic font-mono px-6">
              "{selectedAlien.quote}"
            </p>
          </div>
        </div>

        {/* Right Side: Omnitrix HUD, Mission Report, Earth Location */}
        <div className="lg:col-span-3 flex flex-col space-y-6">
          
          {/* Active Diagnostic (Top Right panel) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="border border-green-500/20 bg-black/80 rounded-lg p-5 backdrop-blur-md relative"
          >
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 animate-ping" />
            <span className="font-mono text-xs font-bold text-green-500 tracking-wider flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>OMNITRIX HUD</span>
            </span>

            <div className="mt-3 space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-green-500/10 py-1.5">
                <span className="text-gray-500">DIAL STATUS:</span>
                <span className="text-green-400 font-bold">READY</span>
              </div>
              <div className="flex justify-between border-b border-green-500/10 py-1.5">
                <span className="text-gray-500">DNA CODES:</span>
                <span className="text-green-400">1,000,000+</span>
              </div>
              <div className="flex justify-between border-b border-green-500/10 py-1.5">
                <span className="text-gray-500">TRANSFORMED:</span>
                <span className="text-amber-500 font-bold uppercase">{selectedAlien.id === 'heatblast' ? 'YES' : 'STANDBY'}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-500">COOLDOWN:</span>
                <span className="text-green-500">0% (MASTER)</span>
              </div>
            </div>
          </motion.div>

          {/* Mission parameters */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="border border-green-500/20 bg-black/80 rounded-lg p-5 backdrop-blur-md relative"
          >
            <span className="font-mono text-xs font-bold text-green-500 tracking-wider flex items-center space-x-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>MISSION REPORT</span>
            </span>
            <p className="text-xs text-gray-400 font-mono mt-2 leading-relaxed">
              DEFENDER DESIGNATE: BEN TENNYSON <br />
              OBJECTIVE: Shield Earth from supreme overlord Vilgax and Kevin 11. <br />
              <span className="text-green-400 mt-1 block">STATUS: SECURING SECTOR</span>
            </p>
          </motion.div>

          {/* Location details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-green-500/20 bg-black/80 rounded-lg p-5 backdrop-blur-md"
          >
            <span className="font-mono text-xs font-bold text-green-500 tracking-wider flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>GEOGRAPHIC BEACON</span>
            </span>
            <div className="mt-3 flex items-start space-x-2.5">
              <Globe className="w-8 h-8 text-green-500/50 mt-1 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="font-mono text-xs text-gray-400">
                <span className="text-white block font-bold">EARTH</span>
                <span>Bellwood, USA</span>
                <span className="text-[10px] block text-green-500/60 mt-0.5">LAT: 34.0522° N</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Decorative background bottom wireframes */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-center opacity-60">
        <span className="text-[9px] font-mono text-green-500/40 tracking-widest">SCROLL DOWN TO DECODE TRANS-SPECIES HISTORY</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-green-500/60 to-transparent mt-1 animate-bounce" />
      </div>

    </div>
  );
}
