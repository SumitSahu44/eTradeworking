import React, { useState } from 'react';
import { Gavel, Clock, History, ChevronRight, Info, ShieldCheck, MapPin } from 'lucide-react';

const EAuction = () => {
  // Bidding logic
  const [bid, setBid] = useState(450);

  // --- PRODUCT IMAGES LOGIC ---
  // 1. Ek images array banate hain jisme sabhi product photos ke URLs honge.
  const productImages = [
    "https://plus.unsplash.com/premium_photo-1682148886043-7f879bfadc6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dGlsZSUyMEZpbmlzaGVkJTIwUHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRleHRpbGV8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/521812220/photo/colorful-upholstery-fabric-samples.webp?a=1&b=1&s=612x612&w=0&k=20&c=cO0Qeg8pdJCD4n-8-ZtStHkC06lngQ7MaPRkY86KNBE="
  ];

  // 2. Ek state banate hain jo track rakhega ki abhi kaunsi main image select hai.
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="bg-white min-h-screen font-['Poppins'] text-slate-900">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12 border-b border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Live Auction Case #TR402</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900">
              Premium <span className="font-bold">Mulberry Silk</span>
            </h1>
          </div>
          <div className="flex gap-8 items-center bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100">
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Ends In</p>
              <p className="text-xl font-medium font-mono text-slate-800">00:42:15</p>
            </div>
            <div className="w-[1px] h-8 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Current Bids</p>
              <p className="text-xl font-medium text-slate-800">24</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: VISUALS & SPECS (7 Columns) */}
          <div className="lg:col-span-7">
            
            {/* --- IMPROVED IMAGE GALLERY SECTION --- */}
            <div className="space-y-6 mb-10">
                {/* 1. Main Selected Image Area */}
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
                    <img 
                        src={productImages[selectedImageIndex]} // State se URL le rahe hain
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" // Hover scale effect
                        alt="Product Main View" 
                    />
                </div>

                {/* 2. Image Thumbnails List */}
                <div className="grid grid-cols-3 gap-6">
                    {productImages.map((imgUrl, index) => (
                        <div 
                            key={index}
                            className={`aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 cursor-pointer border-2 transition-all ${selectedImageIndex === index ? 'border-blue-500 ring-2 ring-blue-100' : 'border-slate-200'}`}
                            onClick={() => setSelectedImageIndex(index)} // Click karne par index update hota hai
                        >
                            <img 
                                src={imgUrl}
                                className="w-full h-full object-cover" 
                                alt={`Product View ${index + 1}`} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* --- END OF IMAGE GALLERY SECTION --- */}

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase  mb-4 border-b pb-2">Technical Specs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Weight</span>
                    <span className="font-semibold text-slate-800">5,000 Kilograms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Lustre Grade</span>
                    <span className="font-semibold text-slate-800">Grade A++ High Gloss</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Moisture Content</span>
                    <span className="font-semibold text-slate-800">8.5% (Certified)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase  mb-4 border-b pb-2">Logistics</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600" />
                    <span className="text-slate-600">Warehouse: Hyderabad, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-blue-600" />
                    <span className="text-slate-600">Verified by Parekh QA Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: BIDDING ACTION (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              
              {/* PRICE CARD */}
              <div className="bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-sm">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 text-center">Highest Active Bid</p>
                <div className="flex justify-center items-baseline gap-2 mb-10">
                  <span className="text-7xl font-bold text-slate-900 ">₹{bid}</span>
                  <span className="text-slate-400 font-medium">/kg</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center border border-slate-200 rounded-2xl p-2 bg-slate-50">
                    <button onClick={() => setBid(bid - 5)} className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-light hover:bg-white hover:shadow-sm transition-all text-slate-400 hover:text-slate-900">−</button>
                    <div className="flex-1 text-center font-mono font-bold text-xl text-slate-800">₹{bid + 5}</div>
                    <button onClick={() => setBid(bid + 5)} className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-light hover:bg-white hover:shadow-sm transition-all text-slate-400 hover:text-slate-900">+</button>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
                    <Gavel size={18} /> Confirm & Place Bid
                  </button>
                </div>
              </div>

              {/* HISTORY BOX */}
              <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <History size={16} /> Activity Log
                </h4>
                <div className="space-y-6">
                  {[
                    { user: 'Parekh Fabrics', val: '450', time: 'Just now' },
                    { user: 'S.V. Silk Mills', val: '445', time: '2m ago' },
                    { user: 'Global Exports', val: '440', time: '5m ago' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <div>
                        <p className="font-bold text-slate-800">{item.user}</p>
                        <p className="text-[10px] text-slate-400 uppercase">{item.time}</p>
                      </div>
                      <p className={`font-mono font-bold ${i === 0 ? 'text-blue-600' : 'text-slate-500'}`}>₹{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DISCLAIMER */}
              <div className="flex gap-4 px-6">
                <Info size={18} className="text-slate-300 shrink-0" />
                <p className="text-[11px] text-slate-400 leading-relaxed ">
                  Taxes and logistics charges are calculated at the end of the auction. All bids are binding under Hyderabad jurisdiction.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EAuction;