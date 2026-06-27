import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Flame, Facebook, Instagram, Youtube, Twitter, Radio } from 'lucide-react';
import { ContactMessage } from '../types';
import { HERO_IMAGE } from '../data';

interface ContactProps {
  playBeep: () => void;
  playTransform: () => void;
}

export default function Contact({ playBeep, playTransform }: ContactProps) {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    playTransform();
    setIsSubmitting(true);
    
    // Simulate transmitting message across outer sectors
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const contactInfos = [
    { label: 'EMAIL TERMINAL', val: 'ben10universe@gmail.com', desc: 'Secure Plumber Server Link', icon: Mail },
    { label: 'HOTLINE FREQUENCY', val: '+91 98765 43210', desc: 'Satellite Ingress Active', icon: Phone },
    { label: 'LOCUS STATION', val: 'Bellwood, Planet Earth', desc: 'Sector 2814 Coordinate', icon: MapPin },
    { label: 'RESPONSE SPEED', val: '24-48 Hours', desc: 'Telemetry Queue Hold Time', icon: Clock },
  ];

  const socialChannels = [
    { name: 'FACEBOOK', link: '/Ben10Universe', icon: Facebook },
    { name: 'INSTAGRAM', link: '/ben10_universe', icon: Instagram },
    { name: 'YOUTUBE', link: '/Ben10Official', icon: Youtube },
    { name: 'TWITTER', link: '/Ben10Universe', icon: Twitter },
    { name: 'DISCORD', link: '/OmnitrixCrew', icon: Radio },
  ];

  return (
    <div className="relative min-h-[calc(100vh-4.5rem)] bg-[#030604] text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Background space/circuits */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Contact Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-green-500/15 pb-8">
          <div className="lg:col-span-7 space-y-3">
            <span className="font-mono text-xs font-bold text-green-500 tracking-widest uppercase">
              PLUMBER TRANSMISSION STATION
            </span>
            <h1 className="font-mono text-4xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
              GET IN <span className="text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.3)]">TOUCH!</span>
            </h1>
            <p className="font-mono text-xs text-green-400 uppercase tracking-widest">
              WE'D LOVE TO HEAR FROM YOU!
            </p>
            <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-xl">
              Got a crucial question, technical diagnostic feedback, or simply want to declare your status as a senior Ben 10 fan? Route your transmission lines directly to our core mainframe.
            </p>
          </div>

          <div className="lg:col-span-5 hidden lg:block rounded-lg overflow-hidden border border-green-500/15 h-44 relative">
            <img 
              src={HERO_IMAGE} 
              alt="Ben Tennyson hero render" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>
        </div>

        {/* Contact Grid details & message form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Info Side (Image 5 Left side) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="border border-green-500/20 bg-black/60 p-5 rounded-lg backdrop-blur">
              <h3 className="font-mono text-xs font-bold text-green-500 mb-4 border-b border-green-500/10 pb-2">
                CONTACT DETAILS
              </h3>
              
              <div className="space-y-4 font-mono">
                {contactInfos.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start space-x-3.5 p-2.5 rounded bg-neutral-950/80 border border-green-500/5 hover:border-green-500/15 transition-all">
                      <div className="p-1.5 rounded bg-green-500/10 text-green-400 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] text-gray-500 block uppercase">{info.label}</span>
                        <span className="text-white text-xs font-bold block mt-0.5">{info.val}</span>
                        <span className="text-[8px] text-green-500/50 block font-bold uppercase mt-0.5">{info.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Diagnostic Beacon coordinates block */}
            <div className="bg-black/80 border border-green-500/20 p-4 rounded-lg font-mono text-[10px] space-y-1.5 text-gray-400 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-16 h-16 rounded-full border border-green-500/10 flex items-center justify-center p-3">
                <div className="w-8 h-8 rounded-full border-2 border-dotted border-green-500/20" />
              </div>
              <p className="font-bold text-green-400 uppercase">SYS BROADCAST SPECIFICATION:</p>
              <p>SIGNAL STRENGTH: MAXIMUM OUTSIDE ECLIPSE SECTOR</p>
              <p>ENCRYPTION STANDARD: HIGH-INTEGRITY GALVAN V3</p>
              <p>ROUTING PORT: CHRONOS TELEMETRY GATEWAY 3000</p>
            </div>
          </div>

          {/* Form Side (Image 5 Right side) */}
          <div className="lg:col-span-7">
            <div className="border border-green-500/20 bg-black/60 p-6 rounded-lg backdrop-blur relative">
              <h3 className="font-mono text-xs font-bold text-green-500 mb-4 border-b border-green-500/10 pb-2">
                SEND US A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 uppercase">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Max Tennyson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-950 border border-green-500/20 rounded p-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 uppercase">YOUR EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. max@plumber.hq"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-950 border border-green-500/20 rounded p-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 uppercase">SUBJECT</label>
                  <input
                    type="text"
                    placeholder="e.g. Omnitrix Diagnostic Error Code"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-neutral-950 border border-green-500/20 rounded p-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 uppercase">YOUR MESSAGE *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide detailed spatial parameters or comments..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-950 border border-green-500/20 rounded p-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  />
                </div>

                <AnimatePresence mode="wait">
                  {isSent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-3 bg-green-500/10 border border-green-500 text-green-400 rounded text-xs flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>TRANSMISSION CODES SENT SECURELY! HERO NOTIFIED.</span>
                    </motion.div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-green-500 hover:bg-green-400 text-black font-black tracking-widest text-xs rounded transition-all shadow-[0_0_12px_#22c55e] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 uppercase"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>TRANSMITTING OVER LINK...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>TRANSMIT MESSAGE</span>
                        </>
                      )}
                    </button>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>

        </div>

        {/* Social frequencies grid (Image 5 Bottom middle) */}
        <div className="border border-green-500/15 bg-black/40 p-5 rounded-lg text-center space-y-4">
          <span className="font-mono text-[10px] text-green-500/60 block font-bold tracking-widest uppercase">
            CONNECT WITH THE OMNITRIX FREQUENCY NETWORK
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
            {socialChannels.map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.name}
                  href="#"
                  onClick={(e) => { e.preventDefault(); playBeep(); }}
                  className="p-3.5 bg-black/80 border border-green-500/10 rounded-md hover:border-green-500/40 transition-colors flex flex-col items-center space-y-1.5"
                >
                  <Icon className="w-5 h-5 text-green-400" />
                  <span className="font-mono text-[9px] text-white block font-bold tracking-wider">{soc.name}</span>
                  <span className="font-mono text-[8px] text-gray-500 block truncate">{soc.link}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Call to action footer panel (Image 5 Bottom) */}
        <div className="border border-green-500/20 bg-green-500/5 rounded-lg p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Holographic glowing Omnitrix symbol background */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-40 border border-green-500/5 rounded-full flex items-center justify-center p-6 pointer-events-none">
            <div className="w-28 h-28 border-2 border-dotted border-green-500/5 rounded-full animate-spin" style={{ animationDuration: '60s' }} />
          </div>

          <div className="space-y-1.5 relative z-10">
            <h3 className="font-mono text-sm font-black text-white">JOIN THE COSMIC ADVENTURE!</h3>
            <p className="text-xs text-gray-400 font-sans max-w-lg leading-relaxed">
              Whether you reside in Bellwood or beyond the stellar rim, your messages will be categorized correctly by Azmuth. It's hero time!
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3.5 relative z-10">
            <div className="w-10 h-10 rounded-full border border-green-500 bg-black flex items-center justify-center shadow-[0_0_12px_#22c55e]">
              <div className="w-2 h-6 bg-green-500 rotate-45 rounded-sm" />
              <div className="w-2 h-6 bg-green-500 -rotate-45 rounded-sm" />
              <div className="absolute w-1.5 h-1.5 bg-black rounded-full" />
            </div>
            <span className="font-mono text-[10px] text-green-400 font-black tracking-widest uppercase">
              PLUMBERS ACTIVE
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
