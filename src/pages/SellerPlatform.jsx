import React, { useState } from 'react';
import { 
  ShieldCheck, User, Building2, Phone, Mail, Globe, 
  FileText, Package, Truck, Settings, Eye, Send, Lock, CheckCircle, Upload, ChevronRight, Store
} from 'lucide-react';

const SellerPlatform = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [authData, setAuthData] = useState({ name: '', code: '' });
  const [nature, setNature] = useState('Manufacturer');

  // Verification Logic
  const handleVerify = () => {
    if (authData.name.toLowerCase() === 'sunil' && authData.code === 'PAREKH786') {
      setIsVerified(true);
    } else {
      alert("Invalid Details! Access Denied.");
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-['Poppins'] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-lg shadow-slate-200">
            <ShieldCheck size={14} className="text-blue-400" /> Secure Seller Gateway
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 italic tracking-tighter uppercase leading-none">
            Seller <span className="text-blue-600">Platform.</span>
          </h1>
          <p className="text-slate-400 mt-4 font-bold text-xs uppercase tracking-widest">
            Inventory Listing & Digital Auction System
          </p>
        </div>

        {/* STAGE 1: VERIFICATION LOCK */}
        {!isVerified ? (
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200 border border-slate-100 animate-in fade-in zoom-in duration-500 text-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-blue-100">
              <Lock size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2 italic">Official Seller Onboarding</h3>
            <p className="text-slate-400 text-sm mb-10 font-medium">Authorized Official details required to unlock the seller form.</p>

            <div className="space-y-6 text-left mb-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Official Name</label>
                <input 
                  type="text" 
                  value={authData.name}
                  onChange={(e) => setAuthData({...authData, name: e.target.value})}
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-800" 
                  placeholder="e.g. Sunil" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Official Code</label>
                <input 
                  type="text" 
                  value={authData.code}
                  onChange={(e) => setAuthData({...authData, code: e.target.value})}
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-800" 
                  placeholder="e.g. PAREKH786" 
                />
              </div>
            </div>
            
            <button 
              onClick={handleVerify}
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              Unlock Seller Form <ChevronRight size={18} />
            </button>
          </div>
        ) : (
          /* STAGE 2: FULL SELLER FORM */
          <div className="animate-in slide-in-from-bottom-10 duration-700 space-y-12">
            
            <div className="bg-slate-900 text-white p-5 rounded-[2rem] flex items-center justify-between px-10 border-l-8 border-blue-500 shadow-xl">
              <div className="flex items-center gap-4">
                <CheckCircle size={24} className="text-blue-400" />
                <p className="text-[11px] font-black uppercase tracking-widest">Authorized By: {authData.name} | Code: {authData.code}</p>
              </div>
            </div>

            <form className="space-y-12">
              
              {/* SECTION 01: SELLER'S BUSINESS IDENTITY */}
              <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-slate-100 space-y-10">
                <div className="flex justify-between items-center border-b border-slate-50 pb-8">
                  <div>
                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-2">Part A</h4>
                    <h3 className="text-3xl font-black text-slate-900 italic tracking-tighter uppercase">Seller <span className="text-blue-600">Profile</span></h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-widest">Name of the Seller</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                        <input type="text" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-slate-800" placeholder="Seller Name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-widest">Name of Business</label>
                      <div className="relative group">
                        <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                        <input type="text" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-slate-800" placeholder="Legal Business Name" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-widest">Mobile No.</label>
                        <input type="tel" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl outline-none font-bold text-slate-800" placeholder="+91" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-widest">Email ID</label>
                        <input type="email" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl outline-none font-bold text-slate-800" placeholder="seller@id.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase ml-1 tracking-widest">Business URL</label>
                      <div className="relative group">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                        <input type="url" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl outline-none font-bold text-slate-800" placeholder="www.yourfactory.com" />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 py-8 border-y border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">Nature of Business</label>
                      <div className="flex flex-wrap gap-2">
                        {['Retailer', 'Wholesaler', 'Manufacturer'].map((t) => (
                          <button key={t} type="button" onClick={() => setNature(t)} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${nature === t ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">Entity Category</label>
                      <select className="w-full px-5 py-3 bg-slate-50 border-none rounded-xl outline-none font-bold text-slate-700 text-sm appearance-none cursor-pointer">
                        <option>Proprietorship</option>
                        <option>Partnership</option>
                        <option>LLP</option>
                        <option>Private Limited</option>
                        <option>Ltd.</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Upload Official Documents (GST, Trade License, LLP)</label>
                      <div className="relative h-40 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center bg-slate-50 hover:bg-blue-50 hover:border-blue-400 transition-all group cursor-pointer">
                        <Upload className="text-slate-300 group-hover:text-blue-600 mb-2" size={32} />
                        <p className="text-[10px] font-black text-slate-400 uppercase">Attach Business KYC Files</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Membership No. (Chamber of Textile)</label>
                      <textarea className="w-full p-6 bg-slate-50 border-none rounded-[2rem] focus:ring-2 focus:ring-blue-600 outline-none font-medium text-sm" rows="5" placeholder="Enter Registration No..."></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 02: TEXTILE ITEMS TO SELL */}
              <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-slate-100 space-y-10">
                <div className="border-b border-slate-50 pb-8 text-right">
                  <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-2">Part B</h4>
                  <h3 className="text-3xl font-black text-slate-900 italic tracking-tighter uppercase">Inventory <span className="text-blue-600">Details</span></h3>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Raw Materials', 'Finished Products', 'Industrial Machineries', 'Textile Spares'].map((cat) => (
                      <div key={cat} className="p-4 bg-slate-50 border border-transparent rounded-2xl hover:border-blue-200 hover:bg-blue-50 cursor-pointer transition-all text-center group">
                        <Package className="mx-auto mb-2 text-slate-400 group-hover:text-blue-600" size={20} />
                        <p className="text-[9px] font-black text-slate-800 uppercase tracking-tighter">{cat}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Description of items to Sell</label>
                    <textarea rows="4" className="w-full p-6 bg-slate-50 border-none rounded-[2rem] focus:ring-2 focus:ring-blue-600 outline-none font-medium" placeholder="Ex: Raw Silk Yarn, Grade A++, Ready Stock..."></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-3xl">
                      <label className="text-[10px] font-black text-slate-400 uppercase block mb-3 tracking-widest">Total Qty for Selling</label>
                      <input type="text" className="w-full bg-transparent border-b border-slate-200 py-2 outline-none font-black text-3xl text-slate-800" placeholder="0.00 Unit" />
                    </div>
                    <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
                      <label className="text-[10px] font-black text-blue-400 uppercase block mb-3 tracking-widest">Expected Rate for Selling</label>
                      <input type="text" className="w-full bg-transparent border-b border-slate-700 py-2 outline-none font-black text-3xl text-white" placeholder="₹ 0.00" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col md:flex-row gap-4">
                <button type="button" className="flex-1 bg-white border-2 border-slate-900 py-6 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                  <Eye size={20} /> Preview Listing
                </button>
                <button type="submit" className="flex-[2] bg-blue-600 text-white py-6 rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/30 hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
                   Submit Inventory <Send size={20} />
                </button>
              </div>

              <div className="text-center pt-10 border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-2">Seller Support Hub</p>
                <a href="mailto:e-trade@parekhtrade.com" className="text-blue-600 font-bold hover:underline">e-trade@parekhtrade.com</a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerPlatform;