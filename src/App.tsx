import { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, Twitter, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Transformations from './components/Transformations';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Interactive High-fidelity Web Audio Synthesizer Beep
  const playBeep = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.08);
      
      gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio not interactively allowed yet
    }
  };

  // Charging Omnitrix Transformation Synth sweep
  const playTransform = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(100, audioCtx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.45);
      
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(220, audioCtx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.45);
      
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
      
      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc1.start();
      osc2.start();
      osc1.stop(audioCtx.currentTime + 0.5);
      osc2.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
      // Ignore
    }
  };

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} playTransform={playTransform} playBeep={playBeep} />;
      case 'about':
        return <About playBeep={playBeep} />;
      case 'transformations':
        return <Transformations playTransform={playTransform} playBeep={playBeep} />;
      case 'gallery':
        return <Gallery playBeep={playBeep} />;
      case 'contact':
        return <Contact playBeep={playBeep} playTransform={playTransform} />;
      default:
        return <Home setActiveTab={setActiveTab} playTransform={playTransform} playBeep={playBeep} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030604] flex flex-col font-sans select-none overflow-x-hidden antialiased selection:bg-green-500 selection:text-black">
      
      {/* Immersive Green Grid scanline layer */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-15" />
      
      {/* Core navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} playBeep={playBeep} />

      {/* Main interactive interface container */}
      <main className="flex-grow">
        {renderActiveSection()}
      </main>

      {/* Futuristic footer shared across sections (Image 1, 2, 3, 4, 5 footer) */}
      <footer className="border-t border-green-500/20 bg-black py-8 relative">
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright notice */}
          <div className="text-center md:text-left font-mono text-[10px] text-gray-500 tracking-wider">
            <p>© 2026 <span className="text-green-500 font-bold">BEN 10 UNIVERSE</span> | ALL RIGHTS RESERVED</p>
            <p className="text-[8px] text-gray-600 mt-0.5">ESTABLISHED IN BELLWOOD SEC. 2814</p>
          </div>

          {/* Central Logo Symbol */}
          <div className="flex items-center justify-center cursor-pointer" onClick={() => { playTransform(); setActiveTab('home'); }}>
            <div className="relative w-9 h-9 rounded-full border border-green-500 bg-black flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.3)] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all">
              <div className="absolute w-2 h-6 bg-green-500 rotate-45 rounded-sm" />
              <div className="absolute w-2 h-6 bg-green-500 -rotate-45 rounded-sm" />
              <div className="absolute w-1.5 h-1.5 bg-black rounded-full" />
            </div>
          </div>

          {/* Follow Us channels */}
          <div className="flex items-center space-x-4">
            <span className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-widest">
              FOLLOW US
            </span>
            <div className="flex items-center space-x-3 text-gray-400">
              {[
                { icon: Facebook, name: 'Facebook' },
                { icon: Instagram, name: 'Instagram' },
                { icon: Youtube, name: 'YouTube' },
                { icon: Twitter, name: 'Twitter' },
              ].map((channel, i) => {
                const Icon = channel.icon;
                return (
                  <button
                    key={channel.name}
                    onClick={() => { playBeep(); }}
                    title={channel.name}
                    className="p-1 rounded bg-neutral-900 border border-green-500/10 hover:border-green-500 hover:text-green-400 transition-all cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
