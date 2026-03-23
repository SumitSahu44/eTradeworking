import React from 'react';
import { Calendar, Clock, ArrowUpRight, ChevronRight, Share2, BookOpen } from 'lucide-react';

const BlogPage = () => {
  const categories = ["All Insights", "Market Trends", "Technology", "Sustainability", "Export/Import"];
  
  const posts = [
    {
      id: 1,
      category: "Market Trends",
      title: "The Shift in Global Cotton Prices: What to Expect in Q3 2026",
      desc: "An in-depth analysis of the current cotton market volatility and its impact on the Indian spinning industry.",
      date: "Mar 20, 2026",
      readTime: "6 min read",
      img: "https://images.unsplash.com/photo-1684766951919-5cef25e7e5a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dGlsZSUyMEZpbmlzaGVkJTIwUHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      category: "Technology",
      title: "AI in Textile Machinery: Reducing Waste by 30%",
      desc: "How the new generation of smart looms and spinning frames are changing factory floors in Hyderabad.",
      date: "Mar 18, 2026",
      readTime: "4 min read",
      img: "https://plus.unsplash.com/premium_photo-1723629607945-65885e021e46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGV4dGlsZSUyMEZpbmlzaGVkJTIwUHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      category: "Sustainability",
      title: "Recycled Polyester: The Future of Finished Fabrics",
      desc: "Brands are moving towards GRS certified materials. Is your supply chain ready for the green revolution?",
      date: "Mar 12, 2026",
      readTime: "5 min read",
      img: "https://images.unsplash.com/photo-1734699615194-47e2ec528c60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dGlsZSUyMEZpbmlzaGVkJTIwUHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-['Poppins'] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black text-[10px] tracking-[.3em] uppercase mb-4 block">Knowledge Hub</span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 italic tracking-tighter leading-none">
              Textile <span className="text-blue-600">Insights.</span>
            </h1>
            <p className="text-slate-500 mt-6 text-lg font-medium">
              Expert analysis, market forecasts, and the latest innovations from the heart of the textile industry.
            </p>
          </div>
          
          <nav className="flex flex-wrap gap-6 border-b border-slate-100 pb-2">
            {categories.map((cat, i) => (
              <button key={i} className={`text-[11px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-900'} pb-2`}>
                {cat}
              </button>
            ))}
          </nav>
        </div>

        {/* FEATURED POST */}
        <div className="group relative rounded-[3rem] overflow-hidden bg-slate-900 mb-20 cursor-pointer shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1634225036053-de4fe87e7bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRleHRpbGUlMjBGaW5pc2hlZCUyMFByb2R1Y3RzfGVufDB8fDB8fHww" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            alt="Featured"
          />
          <div className="relative z-20 p-8 md:p-20 max-w-3xl">
            <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase">Editor's Pick</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 mb-4 leading-tight">
              India's Textile Export Strategy <br className="hidden md:block" /> for the 2026 Global Market.
            </h2>
            <p className="text-slate-300 text-lg mb-8 line-clamp-2">
              Discover how Parekh e-Trade is helping local manufacturers reach European and American markets through digital bridge technology.
            </p>
            <div className="flex items-center gap-6 text-white/60 text-sm mb-10">
              <span className="flex items-center gap-2"><Calendar size={16}/> March 22, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16}/> 8 min read</span>
            </div>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3">
              Read Full Article <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm border border-slate-100">
                <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[9px] font-black px-4 py-1.5 rounded-xl uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-tighter">
                <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.desc}
              </p>
              
              <button className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all group-hover:text-blue-600">
                Learn More <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>

  
      </div>
    </div>
  );
};

export default BlogPage;