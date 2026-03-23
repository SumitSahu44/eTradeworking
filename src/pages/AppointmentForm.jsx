import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, MapPin, ChevronRight, CheckCircle2, Building2, Phone, Briefcase } from 'lucide-react';

const AppointmentForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [purpose, setPurpose] = useState('Business Meeting');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 font-['Poppins']">
        <div className="text-center animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 italic">Request Received!</h2>
          <p className="text-slate-500 max-w-sm mx-auto mb-8 font-medium">
            Sunil Parekh's office will review your request and confirm the slot via email within 2 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-slate-900 hover:border-slate-900 transition-all"
          >
            Schedule Another Visit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-['Poppins'] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Office Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-blue-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">Visit Registration</span>
              <h1 className="text-5xl font-black text-slate-900 leading-tight italic tracking-tighter">
                Schedule <br /> <span className="text-blue-600">Executive</span> Visit.
              </h1>
              <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                Plan your visit to Parekh e-Trade Market Headquarters. We ensure a seamless experience for our partners.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Registered Office</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Textile Tower, Near Charminar, <br />Hyderabad, Telangana - 500002</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-200">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold italic">Reception Desk</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">+91 40 1234 5678 <br />support@parekhetrade.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM (7 Columns) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-50">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Purpose Selection (Visual Cards) */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block ml-1">Purpose of Visit</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Business Meeting', 'Quality Check', 'Machinery Demo', 'Partnership'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPurpose(item)}
                      className={`py-3 px-4 rounded-xl text-[11px] font-bold border transition-all ${
                        purpose === item 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
                        : 'bg-white border-slate-100 text-slate-500 hover:border-blue-200'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input type="text" required className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-medium" placeholder="Ex: Rahul Sharma" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Company Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input type="text" required className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-medium" placeholder="Ex: Textile Solutions Pvt Ltd" />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Select Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input type="date" required className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-medium text-slate-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <select className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-medium text-slate-500 appearance-none">
                      <option>Morning (10:00 AM - 01:00 PM)</option>
                      <option>Afternoon (02:00 PM - 05:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Message for the Management</label>
                <textarea rows="4" className="w-full p-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-medium" placeholder="Briefly describe your business requirement..."></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3"
              >
                Send Visit Request <ChevronRight size={20} />
              </button>

            </form>
          </div>

        </div>

        {/* TRUST BANNER */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 grayscale opacity-40">
           <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/ISO_Logo_%28Redesign%29.svg" className="h-12" alt="ISO" />
           <p className="text-xl font-black italic text-slate-400">MADE IN INDIA</p>
           <p className="text-xl font-black italic text-slate-400">HYDERABAD TEXTILE HUB</p>
        </div>

      </div>
    </div>
  );
};

export default AppointmentForm;