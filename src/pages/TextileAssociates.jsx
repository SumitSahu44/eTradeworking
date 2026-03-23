import React from 'react';
import { MapPin, Globe, Award, Factory, ArrowUpRight } from 'lucide-react';

const TextileAssociates = () => {
  const hubs = [
    { city: 'Hyderabad', strength: 'Headquarters & Digital Hub', count: '120+ Partners' },
    { city: 'Surat', strength: 'Synthetic Fabrics & Embroidery', count: '85+ Partners' },
    { city: 'Ludhiana', strength: 'Knitwear & Woolen Hub', count: '40+ Partners' },
    { city: 'Coimbatore', strength: 'Cotton Spinning & Textiles', count: '65+ Partners' },
    { city: 'Bhiwandi', strength: 'Powerloom & Grey Fabric', count: '50+ Partners' },
  ];

  return (
    <section className="bg-slate-50 py-24 font-['Poppins'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16">
          <span className="text-blue-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4 block italic">Pan-India Presence</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter uppercase">
            Our Textile <br /> <span className="text-blue-600">Associates Network.</span>
          </h2>
          <p className="text-slate-500 mt-6 text-lg max-w-xl font-medium">
            Connecting the finest textile hubs across India through our advanced digital bridge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: THE MAP CONTAINER (7 Columns) */}
          <div className="lg:col-span-7 relative group">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full scale-75"></div>
            
            <div className="relative bg-white p-4 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200 border border-white">
              {/* Yahan aapki Image aayegi */}
              <div className="relative aspect-[4/5] md:aspect-square bg-slate-100 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                {/* Placeholder for your India Map Image */}
                <img 
                  src="/india-map.avif" 
                  alt="India Textile Map" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = "/india-map.avif"; }}
                />

                {/* Pulsating Map Markers (Example Pins) */}
                <div className="absolute top-[30%] left-[30%] animate-bounce"><MapPin className="text-red-600 shadow-xl" size={24} fill="#2563eb33" /></div>
                <div className="absolute top-[70%] left-[35%] animate-bounce delay-75"><MapPin className="text-red-600" size={24} fill="#2563eb33" /></div>
                <div className="absolute top-[55%] left-[50%] animate-bounce delay-150"><MapPin className="text-red-600" size={24} fill="#2563eb33" /></div>
                 <div className="absolute top-[50%] left-[20%] animate-bounce delay-75"><MapPin className="text-red-600" size={24} fill="#2563eb33" /></div>
                <div className="absolute top-[35%] left-[80%] animate-bounce delay-150"><MapPin className="text-red-600" size={24} fill="#2563eb33" /></div>
              
              </div>
              
              {/* Small Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
                <p className="text-3xl font-black italic">500+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Associates</p>
              </div>
            </div>
          </div>

          {/* RIGHT: HUB DETAILS (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Factory size={16} className="text-blue-600" /> Major Strategic Centers
            </h3>
            
            <div className="space-y-3">
              {hubs.map((hub, i) => (
                <div 
                  key={i} 
                  className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-default"
                >
                  <div>
                    <h4 className="font-black text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{hub.city}</h4>
                    <p className="text-xs text-slate-500 mt-1 font-medium">{hub.strength}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-blue-600 uppercase tracking-tighter">{hub.count}</p>
                    <ArrowUpRight size={16} className="ml-auto mt-1 text-slate-200 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            {/* JOIN AS ASSOCIATE CTA */}
            <div className="mt-10 p-8 bg-blue-600 rounded-[2.5rem] text-white relative overflow-hidden group">
               <div className="relative z-10">
                 <h4 className="text-xl font-bold mb-2 italic">Be part of the network?</h4>
                 <p className="text-blue-100 text-sm mb-6 font-medium">Expand your textile business digitally across India.</p>
                 <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                   Register as Associate
                 </button>
               </div>
               <Globe className="absolute -right-10 -bottom-10 text-white/10 w-40 h-40 group-hover:rotate-45 transition-transform duration-1000" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TextileAssociates;