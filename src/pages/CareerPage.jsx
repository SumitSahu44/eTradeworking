import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, X, Upload, Send, Users, Globe } from 'lucide-react';

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const jobs = [
    { id: 1, title: 'Textile Quality Inspector', type: 'Full Time', location: 'Hyderabad', dept: 'Production', salary: '₹4.5L - ₹6L PA' },
    { id: 2, title: 'B2B Sales Executive', type: 'Full Time', location: 'Remote/Field', dept: 'Sales', salary: '₹5L - ₹8L PA' },
    { id: 3, title: 'Logistics Coordinator', type: 'Contract', location: 'Hyderabad', dept: 'Operations', salary: '₹3.5L - ₹5L PA' },
    { id: 4, title: 'Senior Yarn Broker', type: 'Full Time', location: 'Surat', dept: 'Brokerage', salary: 'Commission Based' },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsFormOpen(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-['Poppins']">
      
      {/* HERO SECTION */}
      <div className="bg-white border-b border-slate-100 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
                <Users size={14} /> We are hiring
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tighter">
                Grow your <span className="text-blue-600 italic underline decoration-blue-200 underline-offset-8">Textile Career</span> with us.
              </h1>
              <p className="text-slate-500 text-lg max-w-lg mb-8">
                Join Hyderabad's fastest-growing digital textile bridge. We value tradition, powered by technology.
              </p>
              <div className="flex gap-8">
                <div><p className="text-2xl font-black text-slate-900">12+</p><p className="text-xs font-bold text-slate-400 uppercase">Open Roles</p></div>
                <div className="w-[1px] bg-slate-200"></div>
                <div><p className="text-2xl font-black text-slate-900">4</p><p className="text-xs font-bold text-slate-400 uppercase">Cities</p></div>
              </div>
            </div>
            <div className="hidden lg:block relative">
               <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-5"></div>
               <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000" className="relative rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="office" />
            </div>
          </div>
        </div>
      </div>

      {/* JOBS LISTING */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
          Explore Opportunities <div className="h-[2px] w-20 bg-blue-600"></div>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="group bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:border-blue-600 transition-all flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">{job.dept}</span>
                  <span className="text-emerald-500 text-[10px] font-bold uppercase">{job.salary}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-6 mt-4">
                  <span className="flex items-center gap-2 text-slate-400 text-sm font-medium"><MapPin size={16} className="text-blue-500"/> {job.location}</span>
                  <span className="flex items-center gap-2 text-slate-400 text-sm font-medium"><Clock size={16} className="text-blue-500"/> {job.type}</span>
                </div>
              </div>
              <button 
                onClick={() => handleApplyClick(job)}
                className="bg-slate-900 text-white w-full md:w-auto px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/40 flex items-center justify-center gap-3"
              >
                Apply Now <ArrowRight size={18}/>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* APPLICATION MODAL (OVERLAY) */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsFormOpen(false)}></div>
          
          <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="bg-slate-900 p-10 text-white">
              <button onClick={() => setIsFormOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-white transition-colors">
                <X size={28} />
              </button>
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2">Application Form</p>
              <h2 className="text-3xl font-bold italic">{selectedJob?.title}</h2>
              <p className="text-slate-400 text-sm mt-1">{selectedJob?.location} • {selectedJob?.dept}</p>
            </div>

            {/* Modal Form */}
            <form className="p-10 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none font-medium" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none font-medium" placeholder="john@company.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">LinkedIn Profile (Optional)</label>
                <input type="url" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none font-medium" placeholder="https://linkedin.com/in/..." />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Upload Resume (PDF/DOC)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-[1.5rem] p-8 text-center hover:border-blue-500 transition-all cursor-pointer bg-slate-50 group">
                  <Upload className="mx-auto text-slate-300 group-hover:text-blue-500 mb-2" size={32} />
                  <p className="text-xs text-slate-500 font-medium">Click to upload or drag and drop</p>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                 <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3">
                   Submit Application <Send size={18} />
                 </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 blur-[100px] opacity-20"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight italic">
            Don't see a <span className="text-blue-500">perfect fit?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">
            Send us your CV anyway. We are always looking for passionate textile enthusiasts to join our network.
          </p>
          <button className="text-white border-b-2 border-blue-600 pb-2 font-bold hover:text-blue-400 transition-all">
            hr@parekhetrade.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;