import React, { useState } from 'react';
import { FileSearch, Plus, Trash2, Send, Download, BadgeCheck } from 'lucide-react';

const EQuotation = () => {
  const [items, setItems] = useState([{ id: 1, name: '', qty: '', specs: '' }]);

  const addItem = () => {
    setItems([...items, { id: Date.now(), name: '', qty: '', specs: '' }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="bg-slate-50 min-h-screen font-['Poppins'] py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-[40px] overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="bg-blue-600 p-10 text-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FileSearch size={32} /> e-Quotation Request
            </h1>
            <p className="text-blue-100 mt-2">Get professional price estimates for bulk textile orders.</p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm opacity-80">Reference No:</p>
            <p className="font-mono font-bold">EQ-{Math.floor(Math.random()*10000)}</p>
          </div>
        </div>

        <form className="p-8 md:p-12">
          {/* Client Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pb-10 border-b border-slate-100">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Company Name</label>
              <input type="text" className="w-full mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ex: Parekh Textiles" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">GST Number</label>
              <input type="text" className="w-full mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="22AAAAA0000A1Z5" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Valid Until</label>
              <input type="date" className="w-full mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          {/* Dynamic Item Table */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Line Items for Quotation</h3>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={item.id} className="flex flex-wrap md:flex-nowrap gap-4 items-end bg-slate-50 p-6 rounded-2xl border border-slate-100 group">
                  <div className="flex-1 min-w-[200px]">
                    <label className="text-[10px] font-bold text-blue-600 uppercase">Product Name</label>
                    <input type="text" className="w-full mt-1 p-2 bg-white border border-slate-200 rounded-lg outline-none" placeholder="Ex: Combed Cotton 40s" />
                  </div>
                  <div className="w-32">
                    <label className="text-[10px] font-bold text-blue-600 uppercase">Quantity</label>
                    <input type="text" className="w-full mt-1 p-2 bg-white border border-slate-200 rounded-lg outline-none" placeholder="10,000" />
                  </div>
                  <div className="flex-[2] min-w-[250px]">
                    <label className="text-[10px] font-bold text-blue-600 uppercase">Technical Specs / Quality</label>
                    <input type="text" className="w-full mt-1 p-2 bg-white border border-slate-200 rounded-lg outline-none" placeholder="Color fastness, 160 GSM, etc." />
                  </div>
                  {items.length > 1 && (
                    <button onClick={() => removeItem(item.id)} className="p-2 text-red-400 hover:text-red-600 transition-colors">
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            <button type="button" onClick={addItem} className="mt-6 flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-all">
              <Plus size={20} className="bg-blue-100 rounded-full p-1" /> Add Another Item
            </button>
          </div>

          {/* Terms & Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-slate-100">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Special Terms & Conditions</label>
              <textarea className="w-full mt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl h-24 outline-none" placeholder="Ex: Payment 50% Advance, Credit terms..."></textarea>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-100">
                <Send size={18} /> Generate & Submit Quotation
              </button>
              <button type="button" className="w-full bg-slate-100 text-slate-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200">
                <Download size={18} /> Save as Draft (PDF)
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EQuotation;