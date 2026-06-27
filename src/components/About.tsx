import { motion } from 'motion/react';
import { BookOpen, User, Calendar, Shield, Cpu, HelpCircle, GitFork } from 'lucide-react';
import { JOURNEY_STEPS, LINEUP_IMAGE } from '../data';

interface AboutProps {
  playBeep: () => void;
}

export default function About({ playBeep }: AboutProps) {
  const basicInfo = [
    { label: 'NAME', val: 'Ben Tennyson', icon: User },
    { label: 'AGE', val: '10 (Series Start) / 16 (Omniverse)', icon: Calendar },
    { label: 'ORIGIN', val: 'Bellwood, Planet Earth', icon: HelpCircle },
    { label: 'PARTNERS', val: 'Gwen Tennyson & Kevin Levin', icon: HelpCircle },
    { label: 'MENTOR', val: 'Grandpa Max (Plumber Magister)', icon: HelpCircle },
  ];

  const omnitrixFeatures = [
    { title: 'Alien Transformation', desc: 'Allows the user to alter their DNA at will to become various alien species.' },
    { title: 'DNA Database', desc: 'Contains the genetic markers of over 1,000,903 distinct sentient species.' },
    { title: 'Self Repair System', desc: 'Automated mechanical diagnostics that prevent DNA corruption or lockouts.' },
    { title: 'Master Control', desc: 'Unlocks unlimited rapid transformations via voice command or neural link.' },
    { title: 'Unlimited Potential', desc: 'Constantly adapts to new environments by scanning new alien DNA profiles.' },
  ];

  return (
    <div className="relative min-h-[calc(100vh-4.5rem)] bg-[#030604] text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Sci-fi tech grids */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="border-b border-green-500/20 pb-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-bold tracking-widest text-green-500 uppercase flex items-center space-x-2"
          >
            <BookOpen className="w-4 h-4 animate-pulse" />
            <span>DATABANK SECTION 01</span>
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-4xl sm:text-5xl font-black tracking-tight mt-2 text-white"
          >
            ABOUT <span className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">BEN TENNYSON</span>
          </motion.h1>
          <p className="font-mono text-xs text-green-400 mt-1 uppercase tracking-wider">A Hero. A Kid. A Legend.</p>
        </div>

        {/* Story Section & Basic Info (Image 2 - Section 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Biography Story */}
          <div className="lg:col-span-8 space-y-6">
            <div className="border border-green-500/20 bg-black/60 p-6 rounded-lg backdrop-blur relative">
              <div className="absolute top-0 right-12 w-16 h-[2px] bg-green-500/50" />
              <h3 className="font-mono text-sm font-bold text-green-500 mb-3 border-b border-green-500/10 pb-1.5">
                THE STORY
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed space-y-4">
                Ben Tennyson was an ordinary ten-year-old kid who went on a summer-long road trip in the Rust Bucket with his cousin Gwen and their grandfather Max.
                Everything changed on the first night of camping when Ben discovered a crashed alien capsule containing the **Omnitrix**—the most powerful weapon/tool in the universe.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mt-3">
                Initially using the watch for fun and childhood mischief, Ben quickly realized the gravity of his new powers.
                With Grandpa Max’s hidden history as a high-ranking Plumber (an intergalactic law enforcement officer), Ben embraced his role as Earth’s champion against galactic warmongers.
              </p>
              <div className="mt-5 border-l-2 border-green-500 pl-3 py-1 bg-green-500/5 italic text-xs font-mono text-green-400">
                “It’s not just about being a hero, it’s about doing what’s right.”
              </div>
            </div>

            {/* Illustrative lineup banner */}
            <div className="h-56 rounded-lg border border-green-500/20 overflow-hidden relative group">
              <img 
                src={LINEUP_IMAGE} 
                alt="Alien Lineup Banner" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="font-mono text-[10px] text-green-400">SCAN: RECOMBINANT DNA</p>
                <h4 className="font-mono text-sm font-black text-white">THE TETHERED LEGION</h4>
              </div>
            </div>
          </div>

          {/* Basic Info Cyber Box */}
          <div className="lg:col-span-4">
            <div className="border border-green-500/20 bg-black/60 p-6 rounded-lg backdrop-blur h-full flex flex-col justify-between">
              <div>
                <h3 className="font-mono text-sm font-bold text-green-500 mb-4 border-b border-green-500/10 pb-1.5 flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-green-400" />
                  <span>IDENTIFICATION</span>
                </h3>
                <div className="space-y-4 font-mono text-xs">
                  {basicInfo.map((info) => (
                    <div key={info.label} className="border-b border-green-500/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-gray-500 block uppercase text-[10px]">{info.label}</span>
                      <span className="text-green-300 font-bold block mt-0.5">{info.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-3 bg-green-500/5 border border-green-500/10 rounded">
                <span className="text-[10px] font-mono text-green-400 block font-bold">PLUMBER CREDENTIALS</span>
                <span className="text-[9px] font-mono text-gray-500">ID: SEC_TERRA_9921_TENNYSON</span>
              </div>
            </div>
          </div>

        </div>

        {/* About the Omnitrix (Image 2 - Section 2) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4 flex items-center justify-center border border-green-500/20 bg-black/60 rounded-lg p-6 relative overflow-hidden min-h-64">
            {/* Spinning holographic circle */}
            <div className="absolute w-44 h-44 rounded-full border-2 border-dashed border-green-500/20 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute w-36 h-36 rounded-full border border-green-500/30 animate-spin" style={{ animationDuration: '20s' }} />
            
            <div className="relative text-center space-y-3 z-10">
              <Shield className="w-16 h-16 text-green-500 mx-auto drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]" />
              <div className="font-mono">
                <span className="text-white block font-bold text-sm">LEVEL-20 TECHNOLOGY</span>
                <span className="text-[9px] text-green-400 uppercase">Class: Planet-Level Safeguard</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 border border-green-500/20 bg-black/60 p-6 rounded-lg backdrop-blur">
            <h3 className="font-mono text-sm font-bold text-green-500 mb-4 border-b border-green-500/10 pb-1.5">
              OMNITRIX MATRIX UTILITIES
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {omnitrixFeatures.map((feat) => (
                <div key={feat.title} className="p-3 bg-neutral-950/80 border border-green-500/10 rounded hover:border-green-500/30 transition-colors">
                  <h4 className="font-mono text-xs font-bold text-white flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span>{feat.title}</span>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-normal">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Ben's Journey Timeline (Image 2 - Section 3) */}
        <div className="border border-green-500/20 bg-black/60 p-6 rounded-lg backdrop-blur">
          <h3 className="font-mono text-sm font-bold text-green-500 mb-6 border-b border-green-500/10 pb-1.5 flex items-center space-x-2">
            <GitFork className="w-4 h-4 text-green-400" />
            <span>BEN'S HERO TIMELINE</span>
          </h3>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-4 md:left-1/2 -translate-y-1/2 w-0.5 h-[calc(100%-2rem)] md:h-0.5 md:w-[calc(100%-4rem)] bg-gradient-to-b md:bg-gradient-to-r from-green-500/10 via-green-500 to-green-500/10" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10 pl-8 md:pl-0">
              {JOURNEY_STEPS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  whileHover={{ y: -5 }}
                  onClick={playBeep}
                  className="bg-neutral-950/90 border border-green-500/10 rounded p-4 relative hover:border-green-500/40 transition-colors cursor-pointer"
                >
                  {/* Circle indicator */}
                  <div className="absolute top-4 -left-10 md:left-1/2 md:-top-9 md:-translate-x-1/2 w-6 h-6 rounded-full bg-black border-2 border-green-500 flex items-center justify-center shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  <span className="font-mono text-[9px] text-green-400 font-bold tracking-widest block uppercase">
                    {step.year}
                  </span>
                  <h4 className="font-mono text-xs font-black text-white mt-1 uppercase">
                    {step.title}
                  </h4>
                  <p className="font-mono text-[10px] text-gray-500 mt-0.5 italic">
                    {step.subtitle}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
