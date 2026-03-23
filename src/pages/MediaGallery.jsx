import React, { useState } from 'react';
import { Image as ImageIcon, Video, Play, Maximize2, Calendar, MapPin, Filter } from 'lucide-react';

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const mediaItems = [
    { 
      id: 1, 
      type: 'image', 
      category: 'Events', 
      title: 'Global Textile Expo 2026', 
      date: 'Feb 15, 2026', 
      location: 'Hyderabad',
      url: 'https://plus.unsplash.com/premium_photo-1673303179424-d1bd45f0d930?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dGlsZSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      id: 2, 
      type: 'video', 
      category: 'Media', 
      title: 'Sunil Parekh on Digital Trade', 
      date: 'Jan 10, 2026', 
      location: 'Business News',
      url: 'https://images.unsplash.com/photo-1546694962-bd2d733182e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dGlsZSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      id: 3, 
      type: 'image', 
      category: 'Events', 
      title: 'New Warehouse Inauguration', 
      date: 'Dec 05, 2025', 
      location: 'Surat Hub',
      url: 'https://images.unsplash.com/photo-1718049942873-58bd663206dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRleHRpbGUlMjBldmVudHN8ZW58MHx8MHx8fDA%3D' 
    },
    { 
      id: 4, 
      type: 'image', 
      category: 'Media', 
      title: 'Textile Times Coverage', 
      date: 'Nov 20, 2025', 
      location: 'Press Release',
      url: 'https://images.unsplash.com/photo-1659767151200-f2543af40c44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRleHRpbGUlMjBldmVudHN8ZW58MHx8MHx8fDA%3D' 
    },
    { 
      id: 5, 
      type: 'image', 
      category: 'Events', 
      title: 'Yarn Quality Seminar', 
      date: 'Oct 12, 2025', 
      location: 'Mumbai',
      url: 'https://media.istockphoto.com/id/837185424/photo/fashion-designers.webp?a=1&b=1&s=612x612&w=0&k=20&c=XI2AAWG_vtGGjDtHXHVkqLvqOuFXzo1VMagqCbRD6mU=' 
    },
    { 
      id: 6, 
      type: 'video', 
      category: 'Events', 
      title: 'Factory Automation Demo', 
      date: 'Sept 30, 2025', 
      location: 'Hyderabad',
      url: 'https://images.unsplash.com/photo-1761682719769-47c76c845d50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRleHRpbGUlMjBldmVudHN8ZW58MHx8MHx8fDA%3D' 
    },
  ];

  const categories = ['All', 'Events', 'Media'];

  const filteredMedia = activeTab === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeTab);

  return (
    <div className="bg-white min-h-screen font-['Poppins'] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4 text-blue-600">
            <ImageIcon size={24} />
            <span className="text-[10px] font-black tracking-[.3em] uppercase text-slate-400">Visual Journey</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 italic tracking-tighter leading-none">
            Media <span className="text-blue-600">Gallery.</span>
          </h1>
          <p className="text-slate-500 mt-6 text-lg font-medium leading-relaxed">
            Relive the milestones, industry events, and press highlights that define the Parekh e-Trade legacy.
          </p>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex items-center justify-between border-b border-slate-100 mb-12 pb-4">
          <div className="flex gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative pb-4 text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === cat ? 'text-blue-600' : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full animate-in slide-in-from-left-2"></div>
                )}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <Filter size={14} /> Filter by Category
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredMedia.map((item) => (
            <div 
              key={item.id} 
              className="relative group break-inside-avoid rounded-[2rem] overflow-hidden border border-slate-100 bg-slate-50 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Media Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                
                {/* Type Overlay */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-sm text-slate-900">
                    {item.type === 'video' ? <Play size={18} fill="currentColor" /> : <Maximize2 size={18} />}
                  </div>
                </div>

                {/* Content Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[9px] font-black text-blue-400 bg-blue-500/10 border border-blue-400/30 px-3 py-1 rounded-lg uppercase tracking-widest">
                        {item.category}
                      </span>
                      <span className="text-[10px] text-white/60 font-medium flex items-center gap-1">
                        <Calendar size={12} /> {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/50 flex items-center gap-1 font-medium">
                      <MapPin size={12} /> {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-black text-slate-900 italic tracking-tighter">Are you a Media House?</h4>
            <p className="text-slate-500 font-medium mt-1">Download our official Brand Kit and Press Assets.</p>
          </div>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl flex items-center gap-3">
            Download Brand Kit <Play size={14} className="rotate-90" fill="white" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default MediaGallery;