import React from 'react';
import { MapPin, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';

const IndiaMap = () => {
  const hubs = [
    { city: "Ahmedabad", type: "Cotton Hub" },
    { city: "Surat", type: "Synthetic Fabric" },
    { city: "Hyderabad", type: "Parekh HQ & Logistics" },
    { city: "Coimbatore", type: "Spinning Units" },
    { city: "Ludhiana", type: "Woolen & Knits" }
  ];

  return (
    <section className="bg-[#f8fafc] py-20 font-['Poppins'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: CONTENT (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 border border-blue-100">
                <Globe size={14} /> National Presence
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter uppercase italic">
                Our Textile <span className="text-blue-600">Associates.</span>
              </h2>
              <p className="text-slate-500 mt-4 text-lg font-medium max-w-lg">
                India ke top textile hubs ka digital integration, direct sourcing ke liye.
              </p>
            </div>

            {/* HUB GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hubs.map((hub) => (
                <div key={hub.city} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-500 transition-all group shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{hub.city}</h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">{hub.type}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-200 group-hover:text-blue-600" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <ShieldCheck size={18} className="text-emerald-500" />
              <p className="text-[10px] font-black uppercase tracking-widest">Verified Network of 500+ Partners</p>
            </div>
          </div>

          {/* RIGHT SIDE: SMALLER, CLEAN MAP (5 Columns) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft Glow behind map */}
            <div className="absolute inset-0 bg-blue-400/10 blur-[100px] rounded-full scale-75"></div>
            
            <div className="relative bg-white p-6 rounded-[3rem] shadow-2xl shadow-slate-200 border border-white max-w-[450px] group">
              {/* Map Image with controlled size */}
              <div className="rounded-[2.5rem] overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                <img 
                  src="/3dmap.png" 
                  alt="India Map" 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  // Placeholder for dev
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=India+Map+Image"; }}
                />
              </div>

              {/* Floating Badge on Map */}
              <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white p-6 rounded-[2rem] shadow-xl">
                 <p className="text-2xl font-black italic leading-none">500+</p>
                 <p className="text-[8px] font-bold text-blue-400 uppercase tracking-widest mt-1">Associates</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndiaMap;