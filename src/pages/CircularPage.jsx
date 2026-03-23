import React, { useState } from 'react';
import { Bell, Download, Search, Filter, Calendar, FileText, ChevronRight, ExternalLink } from 'lucide-react';

const CircularPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const circulars = [
    { 
      id: 'CIR/2026/102', 
      title: 'Market Holiday Notice: Eid-ul-Fitr 2026', 
      date: '22 Mar 2026', 
      category: 'Holidays',
      desc: 'Parekh e-Trade platform and physical trading desks will remain closed on the occasion of Eid.'
    },
    { 
      id: 'CIR/2026/101', 
      title: 'Revised GST Compliance for Raw Cotton Sellers', 
      date: '15 Mar 2026', 
      category: 'Regulatory',
      desc: 'New documentation requirements for GST filing as per the latest government notification.'
    },
    { 
      id: 'CIR/2026/098', 
      title: 'Annual General Meeting (AGM) - Hyderabad Hub', 
      date: '05 Mar 2026', 
      category: 'Corporate',
      desc: 'Invitation to all registered associates for the annual strategy meeting at HQ.'
    },
    { 
      id: 'CIR/2026/095', 
      title: 'Monsoon Logistics & Supply Chain Advisory', 
      date: '28 Feb 2026', 
      category: 'Logistics',
      desc: 'Precautionary measures for yarn transport during the upcoming monsoon season.'
    }
  ];

  const categories = ['All', 'Holidays', 'Regulatory', 'Corporate', 'Logistics'];

  const filteredCirculars = activeTab === 'All' 
    ? circulars 
    : circulars.filter(c => c.category === activeTab);

  return (
    <div className="bg-white min-h-screen font-['Poppins'] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <Bell size={24} className="animate-bounce" />
              <span className="text-[10px] font-black tracking-[.3em] uppercase">Official Updates</span>
            </div>
            <h1 className="text-5xl font-black text-slate-900 italic tracking-tighter leading-none">
              Notice <span className="text-blue-600">Board.</span>
            </h1>
            <p className="text-slate-500 mt-6 text-lg font-medium">
              Stay updated with the latest textile market regulations, company announcements, and operational notices.
            </p>
          </div>

          <div className="w-full md:w-80">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search circular ID or title..." 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-sm shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                activeTab === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                : 'bg-white border border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CIRCULARS LISTING */}
        <div className="space-y-6">
          {filteredCirculars.map((n) => (
            <div key={n.id} className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col md:flex-row items-start md:items-center gap-8 overflow-hidden">
              
              {/* Date Block */}
              <div className="bg-slate-50 px-6 py-4 rounded-3xl text-center min-w-[120px] group-hover:bg-blue-50 transition-colors">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Circular Date</p>
                <p className="text-sm font-black text-slate-900">{n.date}</p>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg uppercase border border-blue-100">#{n.id}</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{n.category}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{n.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{n.desc}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg">
                  <Download size={14} /> Download PDF
                </button>
                <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-all">
                  <ExternalLink size={18} />
                </button>
              </div>

              {/* Subtle Decorative ID Background */}
              <span className="absolute -right-4 -bottom-4 text-slate-50 text-6xl font-black italic select-none group-hover:text-slate-100 transition-colors">
                {n.id.split('/').pop()}
              </span>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        <div className="mt-16 text-center">
          <button className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em] hover:text-blue-600 transition-all flex items-center gap-2 mx-auto">
            View Older Circulars <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CircularPage;