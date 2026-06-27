import { useState } from 'react';
import { Menu, X, Radio, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  playBeep: () => void;
}

export default function Navbar({ activeTab, setActiveTab, playBeep }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'transformations', label: 'TRANSFORMATIONS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    playBeep();
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#060a07]/90 backdrop-blur-md border-b border-green-500/20 shadow-md shadow-green-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-green-500 bg-black shadow-[0_0_12px_rgba(34,197,94,0.4)] overflow-hidden">
              {/* Spinning Omnitrix Core */}
              <div className="absolute inset-1 rounded-full border-2 border-dotted border-green-500/80 animate-spin" style={{ animationDuration: '10s' }} />
              <div className="absolute w-3 h-7 bg-green-500 rotate-45 rounded-sm" />
              <div className="absolute w-3 h-7 bg-green-500 -rotate-45 rounded-sm" />
              <div className="absolute w-2 h-2 bg-black rounded-full z-10" />
            </div>
            <div>
              <span className="font-mono text-xl font-black tracking-widest text-white">
                BEN <span className="text-green-500 animate-pulse">10</span>
              </span>
              <p className="text-[9px] font-mono text-green-500/60 leading-none">OMNIPORTAL v4.1</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 font-mono text-xs font-bold tracking-wider transition-colors duration-200 outline-none ${
                    isActive ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-green-500 shadow-[0_0_8px_#22c55e]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Status Indicators */}
          <div className="hidden lg:flex items-center space-x-6 text-[10px] font-mono text-green-500/80">
            <div className="flex items-center space-x-1.5 bg-black/60 px-2.5 py-1 rounded border border-green-500/20">
              <Radio className="w-3.5 h-3.5 text-green-400 animate-pulse" />
              <span>FREQ: 10.10 MHz</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-black/60 px-2.5 py-1 rounded border border-green-500/20">
              <Shield className="w-3.5 h-3.5 text-green-400" />
              <span>SYS: SECURE</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-black/60 px-2.5 py-1 rounded border border-green-500/20">
              <Zap className="w-3.5 h-3.5 text-green-400 animate-bounce" />
              <span>CORE: 100%</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => { playBeep(); setIsOpen(!isOpen); }}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-500 hover:text-white hover:bg-green-500/10 focus:outline-none border border-green-500/20"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-green-500/20 px-4 pt-2 pb-4 space-y-1"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left block px-3 py-2.5 rounded-md font-mono text-sm font-bold tracking-wider transition-all border-l-2 ${
                    isActive
                      ? 'bg-green-500/10 border-green-500 text-green-400'
                      : 'border-transparent text-gray-400 hover:bg-green-500/5 hover:text-green-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 grid grid-cols-3 gap-2 text-[8px] font-mono text-green-500/60 border-t border-green-500/10 pt-4">
              <div className="flex items-center space-x-1">
                <Radio className="w-3 h-3 text-green-500 animate-pulse" />
                <span>FREQ: 10.10M</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3 text-green-500" />
                <span>SYS: ACTIVE</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-3 h-3 text-green-500 animate-bounce" />
                <span>PWR: FULL</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
