import React, { useState } from 'react';
import { FileSearch, Plus, Trash2, Send, Download, Image as ImageIcon, X } from 'lucide-react';

const EQuotation = () => {
  const [items, setItems] = useState([{ id: 1, name: '', qty: '', specs: '', image: null }]);

  const addItem = () => {
    setItems([...items, { id: Date.now(), name: '', qty: '', specs: '', image: null }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Image upload handle karne ke liye function
  const handleImageChange = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItems(items.map(item => 
          item.id === id ? { ...item, image: reader.result } : item
        ));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-['Poppins'] py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-[40px] overflow-hidden border border-slate-100">
        
        {/* Header with Background Image Pattern */}
        <div className="relative bg-blue-600 p-10 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1558350315-8aa00e8e4590?w=400&auto=format&fit=crop&q=60" 
              alt="pattern" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative z-10 flex justify-between items-center">
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
        </div>

        <form className="p-8 md:p-12">
          {/* Client Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pb-10 border-b border-slate-100">
             {/* ... (Same inputs as before) ... */}
             <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Company Name</label>
              <input type="text" className="w-full mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Ex: Parekh Textiles" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">GST Number</label>
              <input type="text" className="w-full mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="22AAAAA0000A1Z5" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Valid Until</label>
              <input type="date" className="w-full mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
            </div>
          </div>

          {/* Dynamic Item Table with Image Upload */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Line Items for Quotation</h3>
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col lg:flex-row gap-6 items-start bg-slate-50 p-6 rounded-[2rem] border border-slate-100 transition-all hover:shadow-md">
                  
                  {/* --- IMAGE UPLOAD BOX --- */}
                  <div className="w-full lg:w-32 h-32 shrink-0">
                    <label className="text-[10px] font-bold text-blue-600 uppercase mb-2 block text-center">Reference</label>
                    <div className="relative w-full h-full bg-white border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center overflow-hidden group">
                      {item.image ? (
                        <>
                          <img src={item.image} alt="preview" className="w-full h-full object-cover" />
                          <button 
                            type="button"
                            onClick={() => setItems(items.map(i => i.id === item.id ? {...i, image: null} : i))}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={12} />
                          </button>
                        </>
                      ) : (
                        <label className="cursor-pointer flex flex-col items-center">
                          <ImageIcon size={24} className="text-slate-300" />
                          <span className="text-[10px] text-slate-400 mt-1">Upload</span>
                          <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(item.id, e)} />
                        </label>
                      )}
                    </div>
                  </div>

                  {/* Form Inputs */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    <div className="lg:col-span-1">
                      <label className="text-[10px] font-bold text-blue-600 uppercase">Product Name</label>
                      <input type="text" className="w-full mt-1 p-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-400" placeholder="Ex: Combed Cotton 40s" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-blue-600 uppercase">Quantity</label>
                      <input type="text" className="w-full mt-1 p-3 bg-white border border-slate-200 rounded-xl outline-none" placeholder="10,000" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <label className="text-[10px] font-bold text-blue-600 uppercase">Specs / Quality</label>
                        <input type="text" className="w-full mt-1 p-3 bg-white border border-slate-200 rounded-xl outline-none" placeholder="160 GSM, etc." />
                      </div>
                      {items.length > 1 && (
                        <button type="button" onClick={() => removeItem(item.id)} className="p-3 mt-4 text-red-400 hover:bg-red-50 rounded-xl transition-all">
                          <Trash2 size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button type="button" onClick={addItem} className="mt-6 flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
              <Plus size={24} className="bg-blue-100 rounded-full p-1" /> Add Another Item
            </button>
          </div>

          {/* Footer Section with Visual Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-8 border-t border-slate-100">
            <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 flex gap-4">
                <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden border border-white shadow-sm">
                    <img src="https://media.istockphoto.com/id/1180345900/photo/workers-on-factory-floor-of-mumbai-dyeing-and-printing-mill.webp?a=1&b=1&s=612x612&w=0&k=20&c=7wvpbXHt_XiQPZ7ZJk3mnb6jAp_7w3fCST10hHPSbpU=" className="w-full h-full object-cover" alt="sample" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-blue-900">Standard Quality Check</h4>
                    <p className="text-xs text-blue-700/70 mt-1 leading-relaxed">Ensure all technical specs match our verified textile standards for faster quotation processing.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-transform active:scale-95">
                <Send size={18} /> Generate & Submit Quotation
              </button>
              <button type="button" className="w-full bg-white text-slate-700 border border-slate-200 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50">
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