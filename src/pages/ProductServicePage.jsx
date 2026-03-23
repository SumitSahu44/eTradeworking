import React, { useState } from 'react';
import { Filter, Search, ArrowRight, MessageSquare } from 'lucide-react';

const products = [
  { id: 1, name: 'Premium Cotton Fiber', category: 'Raw Material', img: 'https://images.unsplash.com/photo-1534639077088-d702bcf685e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D', specs: 'Shankar-6, 28mm-30mm' },
  { id: 2, name: 'Polyester Spun Yarn', category: 'Finished Products', img: 'https://plus.unsplash.com/premium_photo-1664299852788-5a24db0d7e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D', specs: '30s, 40s Ne count' },
  { id: 3, name: 'Denim Fabric (Grey)', category: 'Fabric', img: 'https://images.unsplash.com/photo-1630920501459-f3e99320c4a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRleHRpbGV8ZW58MHx8MHx8fDA%3D', specs: '10-14 Oz, 100% Cotton' },
  { id: 4, name: 'Recycled Polyester Fiber', category: 'Raw Material', img: 'https://media.istockphoto.com/id/1180345900/photo/workers-on-factory-floor-of-mumbai-dyeing-and-printing-mill.webp?a=1&b=1&s=612x612&w=0&k=20&c=7wvpbXHt_XiQPZ7ZJk3mnb6jAp_7w3fCST10hHPSbpU=', specs: 'Eco-friendly GRS Certified' },
  { id: 5, name: 'Viscose Rayon Yarn', category: 'Yarn', img: 'https://media.istockphoto.com/id/521812220/photo/colorful-upholstery-fabric-samples.webp?a=1&b=1&s=612x612&w=0&k=20&c=cO0Qeg8pdJCD4n-8-ZtStHkC06lngQ7MaPRkY86KNBE=', specs: 'Bright/Semi-Dull' },
  { id: 6, name: 'Textile Weaving Machine', category: 'Machinery', img: 'https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRleHRpbGV8ZW58MHx8MHx8fDA%3D', specs: 'High-speed Rapier Loom' },
];

const categories = ['All', 'Raw Material', 'Finished Products', 'Fabric', 'Machinery'];

const ProductServicePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 font-['Poppins'] min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products & Services</h1>
          <p className="text-slate-600 max-w-2xl">
            Parekh e-Trade provides high-quality textile solutions. Explore our wide range of raw materials and machinery tailored for global industrial standards.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
            />
          </div> */}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">{product.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-6 italic">{product.specs}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all">
                    Get Best Quote <ArrowRight size={16} />
                  </button>
                  <button className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-colors" title="Inquire on WhatsApp">
                    <MessageSquare size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-900 py-20 mb-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 italic">B2B Trade Services</h2>
            <div className="h-1 w-20 bg-blue-500"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <Filter size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Quality Grading</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Sare products ka thorough quality check aur international grading standards ensure karna.</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <ArrowRight size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Logistics Support</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Raw materials ko factory tak safe aur timely deliver karne ki worldwide connectivity.</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <Search size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Market Sourcing</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Aapki requirement ke hisaab se sahi manufacturer ya buyer dhoondhne mein help.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductServicePage;