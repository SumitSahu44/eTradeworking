import React from 'react';
import { MapPin, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Map from './Map';

const IndiaMap = () => {

  const locations = [
    { id: 1, name: "Parekh Fabrics", city: "Ahmedabad", short: "Fabrics" },
    { id: 2, name: "Parekh Silk", city: "Surat", short: "Silk" },
    { id: 3, name: "Parekh Rayon", city: "Raipur", short: "Rayon" },
    { id: 4, name: "Parekh Linen", city: "Kolkata", short: "Linen" },
    { id: 5, name: "Parekh e-Trade Market", city: "Hyderabad", short: "e-Trade" },
    { id: 6, name: "Parekh Chamber of Textile", city: "Bangalore", short: "Chamber" },
    { id: 7, name: "Parekh Southern Polyfabrics", city: "Chennai", short: "Southern" },
  ];

  return (
    <section className="bg-[#f8fafc] py-20 font-['Poppins'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* 👉 Grid tweak: Map ko zyada space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 border border-blue-100">
                <Globe size={14} /> National Presence
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase ">
                Our Textile <span className="text-blue-600">Associates.</span>
              </h2>

              <p className="text-slate-500 mt-4 text-lg font-medium max-w-lg">
                Digital integration of India's leading textile hubs for streamlined direct sourcing.
              </p>
            </div>

            {/* 👉 Updated Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locations.map((loc) => (
                <div key={loc.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-500 transition-all group shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{loc.city}</h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">{loc.short}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-200 group-hover:text-blue-600" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <ShieldCheck size={18} className="text-emerald-500" />
              <p className="text-[10px] font-black uppercase tracking-widest">
                Verified Network of 500+ Partners
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - BIGGER MAP */}
          <div className="lg:col-span-6 relative flex justify-center items-center">

            {/* 👉 Big container for map */}
            <div className="w-full h-[500px] md:h-[600px] lg:h-[650px]">
              <Map />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default IndiaMap;