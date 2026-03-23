import React, { useState } from 'react';
import { FileText, Send, Eye, CheckCircle2, X, ClipboardList, IndianRupee, Package } from 'lucide-react';

const TradeEnquiryForm = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    itemCategory: '',
    description: '',
    requiredQty: '',
    unit: 'Kgs',
    tentativeRate: '',
    tentativeBudget: '',
    companyName: '',
    contactPerson: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully to Webmail!");
  };

  return (
    <div className="bg-slate-50 min-h-screen font-['Poppins'] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-white p-8 rounded-t-3xl border-b border-slate-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
              <ClipboardList size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Trade Enquiry <span className="text-blue-600">(e-Form)</span></h1>
              <p className="text-slate-500 text-sm">Fill the details below to receive expert quotes for your textile needs.</p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-b-3xl shadow-xl border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Category Selection */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Textile Items to Buy (Roll-down mode)</label>
              <select 
                name="itemCategory"
                value={formData.itemCategory}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800 font-medium"
              >
                <option value="">-- Select Category --</option>
                <option value="Textile Raw Materials">Textile Raw Materials</option>
                <option value="Textile Finished Products">Textile Finished Products</option>
                <option value="Textile Industrial Machineries">Textile Industrial Machineries</option>
                <option value="Textile other Machineries">Textile other Machineries</option>
                <option value="Textile Spares">Textile Spares</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Description of the items to buy</label>
              <textarea 
                name="description"
                rows="4"
                placeholder="Ex: 100% Cotton Yarn, 30s Count, Semi-combed..."
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              ></textarea>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Required Qty</label>
              <div className="relative">
                <input 
                  type="number" 
                  name="requiredQty"
                  placeholder="0.00"
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 pl-12 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Package className="absolute left-4 top-4 text-slate-400" size={20} />
              </div>
            </div>

            {/* Rate */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tentative Rate (per unit)</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="tentativeRate"
                  placeholder="Ex: ₹250/kg"
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 pl-12 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <IndianRupee className="absolute left-4 top-4 text-slate-400" size={20} />
              </div>
            </div>

            {/* Budget */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tentative Budget for Buying</label>
              <input 
                type="text" 
                name="tentativeBudget"
                placeholder="Ex: ₹5,00,000 - ₹10,00,000"
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-semibold text-blue-600"
              />
            </div>

            {/* Contact Info (For Webmail/Submit) */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
              <input type="text" name="companyName" onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Business Email</label>
              <input type="email" name="email" onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col md:flex-row gap-4 border-t pt-8">
            <button 
              type="button"
              onClick={() => setShowPreview(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-all uppercase tracking-widest text-sm"
            >
              <Eye size={18} /> Preview Enquiry
            </button>
            <button 
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 uppercase tracking-widest text-sm"
            >
              <Send size={18} /> Submit to Webmail
            </button>
          </div>
        </form>

        {/* Security Badge */}
        <p className="mt-6 text-center text-slate-400 text-xs flex items-center justify-center gap-2">
          <CheckCircle2 size={14} className="text-green-500" /> Your enquiry is secure and will be sent directly to our trade specialists.
        </p>
      </div>

      {/* --- PREVIEW MODAL --- */}
      {showPreview && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center mt-20 p-6">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center gap-2"><FileText size={20} /> Enquiry Summary Preview</h3>
              <button onClick={() => setShowPreview(false)} className="hover:rotate-90 transition-transform"><X size={24} /></button>
            </div>
            
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div className="text-slate-500 uppercase font-bold">Category:</div>
                <div className="text-slate-900 font-semibold">{formData.itemCategory || 'Not Selected'}</div>
                
                <div className="text-slate-500 uppercase font-bold">Quantity:</div>
                <div className="text-slate-900 font-semibold">{formData.requiredQty || '0'} Units</div>

                <div className="text-slate-500 uppercase font-bold">Target Rate:</div>
                <div className="text-slate-900 font-semibold">{formData.tentativeRate || 'N/A'}</div>

                <div className="text-slate-500 uppercase font-bold">Total Budget:</div>
                <div className="text-slate-900 text-blue-600 font-bold">{formData.tentativeBudget || 'N/A'}</div>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-slate-500 uppercase font-bold text-xs mb-2">Item Description</h4>
                <p className="text-slate-700 bg-slate-50 p-4 rounded-xl italic">
                  {formData.description || 'No description provided.'}
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-blue-400 uppercase font-bold">Company</span>
                  <span className="font-bold text-slate-800">{formData.companyName || 'Guest'}</span>
                </div>
                <div>
                  <span className="block text-blue-400 uppercase font-bold">Email</span>
                  <span className="font-bold text-slate-800">{formData.email || 'N/A'}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 flex gap-4">
              <button 
                onClick={() => setShowPreview(false)}
                className="flex-1 bg-white border border-slate-200 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-all"
              >
                Edit Form
              </button>
              <button 
                onClick={() => { setShowPreview(false); alert("Sent!"); }}
                className="flex-1 bg-blue-600 py-3 rounded-xl font-bold text-white hover:bg-blue-700 transition-all shadow-lg"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeEnquiryForm;