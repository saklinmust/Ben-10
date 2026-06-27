import React, { useState, SVGProps } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Zap, Star, ShieldAlert, Award, Compass, RefreshCw } from 'lucide-react';
import { ALIENS_DATA, OMNITRIX_CORE } from '../data';
import { Alien } from '../types';

interface TransformationsProps {
  playTransform: () => void;
  playBeep: () => void;
}

export default function Transformations({ playTransform, playBeep }: TransformationsProps) {
  const [selectedAlien, setSelectedAlien] = useState<Alien>(ALIENS_DATA[0]);
  const [rotationDegrees, setRotationDegrees] = useState(0);

  const handleSelectAlien = (alien: Alien, idx: number) => {
    if (alien.id === selectedAlien.id) return;
    playTransform();
    setSelectedAlien(alien);
    // Rotate dial graphics purely for fun
    setRotationDegrees((prev) => prev + 45);
  };

  return (
    <div className="relative min-h-[calc(100vh-4.5rem)] bg-[#030604] text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Visual cyber mesh background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,19,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,19,0.35)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Title area */}
        <div className="text-center space-y-2 border-b border-green-500/15 pb-6">
          <span className="font-mono text-xs font-bold text-green-500 tracking-widest uppercase">
            RECOMBINANT DNA PORTAL
          </span>
          <h1 className="font-mono text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            TRANSFORMATIONS
          </h1>
          <p className="text-sm text-gray-400 font-mono max-w-xl mx-auto">
            The Omnitrix contains genetic material from millions of alien civilizations. Select any transformation profile to decode telemetry.
          </p>
        </div>

        {/* Top: Dial Selector Panel (Image 3 - Dial grid & lateral selector) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/40 p-6 rounded-lg border border-green-500/10">
          
          {/* Circular selector graphics */}
          <div className="lg:col-span-8 flex justify-center py-6 relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              
              {/* Rotating outer frame */}
              <motion.div
                animate={{ rotate: rotationDegrees }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className="absolute inset-0 rounded-full border-4 border-double border-green-500/30 flex items-center justify-center"
              >
                <div className="absolute inset-4 rounded-full border border-dashed border-green-500/25" />
                
                {/* 8 tick marks representing the classic roster */}
                {ALIENS_DATA.map((alien, i) => {
                  const angle = (i * 360) / ALIENS_DATA.length;
                  return (
                    <div
                      key={`tick-${alien.id}`}
                      style={{ transform: `rotate(${angle}deg) translateY(-145px)` }}
                      className="absolute w-2 h-4 bg-green-500/60 rounded-sm"
                    />
                  );
                })}
              </motion.div>

              {/* Inside circle - Omnitrix core */}
              <div className="absolute inset-10 rounded-full bg-black/95 border-2 border-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                <img 
                  src={OMNITRIX_CORE} 
                  alt="Omnitrix Core Schematic" 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-full"
                  referrerPolicy="no-referrer"
                />
                <div className="relative text-center z-10 flex flex-col items-center">
                  <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">
                    ACTIVE GENOME
                  </span>
                  <span className="font-mono text-lg font-black text-white mt-1 uppercase">
                    {selectedAlien.name}
                  </span>
                </div>
              </div>

              {/* Individual clickable alien icons on the dial boundary */}
              {ALIENS_DATA.map((alien, i) => {
                const angle = (i * 360) / ALIENS_DATA.length;
                const isSelected = alien.id === selectedAlien.id;

                return (
                  <div
                    key={`dial-node-${alien.id}`}
                    style={{
                      transform: `rotate(${angle}deg) translateY(-110px) rotate(-${angle}deg)`,
                    }}
                    className="absolute z-10"
                  >
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleSelectAlien(alien, i)}
                      className={`relative w-11 h-11 rounded-full border-2 bg-neutral-950 flex items-center justify-center overflow-hidden cursor-pointer ${
                        isSelected
                          ? 'border-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]'
                          : 'border-green-500/20'
                      }`}
                    >
                      <img
                        src={alien.imageUrl}
                        alt={alien.name}
                        className={`w-full h-full object-cover transition-all ${
                          isSelected ? 'grayscale-0' : 'grayscale brightness-75 hover:grayscale-0'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    </motion.button>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Right lateral click list */}
          <div className="lg:col-span-4 space-y-2 border-l lg:border-l border-green-500/10 pl-0 lg:pl-6">
            <span className="text-[10px] font-mono text-green-500/60 block font-bold tracking-widest uppercase">
              SELECT TRANSFORMATION LIST
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 max-h-72 overflow-y-auto pr-2 scrollbar-thin">
              {ALIENS_DATA.map((alien, i) => {
                const isSelected = alien.id === selectedAlien.id;
                return (
                  <button
                    key={`list-${alien.id}`}
                    onClick={() => handleSelectAlien(alien, i)}
                    className={`flex items-center space-x-3 p-2.5 rounded-md border font-mono text-xs transition-all text-left outline-none cursor-pointer ${
                      isSelected
                        ? 'bg-green-500/10 border-green-500 text-green-400 font-bold shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                        : 'bg-black/60 border-green-500/10 text-gray-400 hover:border-green-500/30 hover:text-white'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={alien.imageUrl} 
                        alt={alien.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="truncate uppercase">{alien.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom: Detailed specs layout (Image 3 - cards: image/homeworld, abilities, stats meters) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAlien.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            
            {/* Spec Card 1: Visual Details & Homeworld */}
            <div className="md:col-span-4 border border-green-500/20 bg-black/80 rounded-lg overflow-hidden backdrop-blur">
              <div className="h-44 relative">
                <img
                  src={selectedAlien.imageUrl}
                  alt={selectedAlien.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-mono text-green-400 font-bold tracking-widest block uppercase">
                    DNA PROFILE
                  </span>
                  <h3 className="font-mono text-xl font-black uppercase text-white">
                    {selectedAlien.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-4 font-mono text-xs">
                <div className="grid grid-cols-2 gap-4 border-b border-green-500/10 pb-3">
                  <div>
                    <span className="text-gray-500 text-[10px] block uppercase">SPECIES</span>
                    <span className="text-green-300 block font-bold mt-0.5">{selectedAlien.species}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[10px] block uppercase">HOMEWORLD</span>
                    <span className="text-green-300 block font-bold mt-0.5 flex items-center space-x-1">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{selectedAlien.homeworld}</span>
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-[11px] leading-relaxed font-sans">
                  {selectedAlien.description}
                </p>
              </div>
            </div>

            {/* Spec Card 2: Custom Abilities */}
            <div className="md:col-span-4 border border-green-500/20 bg-black/80 rounded-lg p-5 backdrop-blur font-mono">
              <h3 className="text-xs font-bold text-green-500 border-b border-green-500/10 pb-2 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-green-400 animate-pulse" />
                <span>COMBAT ABILITIES</span>
              </h3>

              <div className="mt-4 space-y-3">
                {selectedAlien.abilities.map((ability, i) => (
                  <div key={ability} className="flex items-start space-x-3 p-2 rounded bg-neutral-950/80 border border-green-500/5">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block uppercase">{ability}</span>
                      <span className="text-[10px] text-gray-500 block">GENOME MODULE UNLOCKED</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spec Card 3: Detailed Power Levels meters */}
            <div className="md:col-span-4 border border-green-500/20 bg-black/80 rounded-lg p-5 backdrop-blur font-mono">
              <h3 className="text-xs font-bold text-green-500 border-b border-green-500/10 pb-2 flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-green-400" />
                <span>GENOME LEVEL GAUGE</span>
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  { label: 'STRENGTH', val: selectedAlien.stats.strength },
                  { label: 'SPEED VELOCITY', val: selectedAlien.stats.speed },
                  { label: 'COGNITIVE RANGE', val: selectedAlien.stats.intelligence },
                  { label: 'AGILITY METRICS', val: selectedAlien.stats.agility },
                  { label: 'ENERGY SHIELDING', val: selectedAlien.stats.energy },
                  { label: 'COMBAT POTENTIAL', val: selectedAlien.stats.fighting },
                ].map((st) => (
                  <div key={st.label} className="space-y-1">
                    <div className="flex justify-between text-[10px] text-gray-400">
                      <span>{st.label}</span>
                      <span className="text-green-400 font-bold">{st.val}/10</span>
                    </div>
                    {/* Linear Cells Representing power blocks */}
                    <div className="flex space-x-0.5 h-2">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm transition-all duration-300 ${
                            i < st.val ? 'bg-green-500 shadow-[0_0_4px_#22c55e]' : 'bg-neutral-900'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Diagnostics row stats (Image 3 - Footer metrics) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-green-500/10">
          
          <div className="bg-black/60 border border-green-500/10 rounded-lg p-4 font-mono text-xs flex items-start space-x-3.5">
            <HelpCircleIcon className="w-8 h-8 text-green-500/50 mt-1" />
            <div>
              <span className="text-green-400 font-bold block uppercase">DID YOU KNOW?</span>
              <p className="text-gray-400 mt-1 text-[11px] leading-relaxed">
                {selectedAlien.trivia}
              </p>
            </div>
          </div>

          <div className="bg-black/60 border border-green-500/10 rounded-lg p-4 font-mono text-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-green-400 font-bold block uppercase">UNLOCK NEXT CODES</span>
              <p className="text-gray-500 text-[10px]">Scans active in background sector...</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-green-500/30 flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
              <RefreshCw className="w-5 h-5 text-green-500" />
            </div>
          </div>

          <div className="bg-black/60 border border-green-500/10 rounded-lg p-4 font-mono text-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-green-400 font-bold block uppercase">COSMIC GENOMES LOADED</span>
              <p className="text-gray-500 text-[10px]">Available on database mainframe.</p>
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-white block">63/1,000k+</span>
              <span className="text-[8px] text-green-500/70 font-bold">UNLIMITED POTENTIAL</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// Inline fallback icon
function HelpCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}
