import React from 'react';
import { Linkedin, Mail, ShieldCheck } from 'lucide-react';

const TeamData = [
  {
    name: "Sunil Parekh",
    role: "Managing Director",
    desc: "25+ years of expertise in Textile Trading and Market Strategies.",
    img: "https://i.pravatar.cc/150?u=10",
    linkedIn: "#"
  },
  {
    name: "Rajesh Kumar",
    role: "Technical Head",
    desc: "Expert in Digital B2B platforms and Textile Machinery Automation.",
    img: "https://i.pravatar.cc/150?u=11",
    linkedIn: "#"
  },
  {
    name: "Anjali Sharma",
    role: "Operations Manager",
    desc: "Specialist in Supply Chain Management and Global Logistics.",
    img: "https://i.pravatar.cc/150?u=12",
    linkedIn: "#"
  }
];

const ManagementTeam = () => {
  return (
    <section className="py-24 bg-slate-50 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
            <ShieldCheck size={16} /> LEADERSHIP
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Meet Our <span className="text-blue-600">Visionary</span> Team
          </h2>
          <p className="text-slate-600 text-lg">
            Parekh e-Trade is led by industry veterans committed to revolutionizing the textile digital ecosystem.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TeamData.map((member, i) => (
            <div key={i} className="group relative">
              {/* Card Background Overlay (Design Element) */}
              <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-y-4 translate-x-4 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
              
              <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                
                {/* Image Section */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-blue-100 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="relative w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {member.desc}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 border-t pt-6 border-slate-50">
                    <a href={member.linkedIn} className="p-2 bg-slate-100 rounded-full text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Footer for Team Section */}
        <div className="mt-20 text-center p-10 bg-white rounded-3xl border border-dashed border-slate-300">
           <p className="text-slate-600 italic">
             "Our team combines decades of textile tradition with cutting-edge digital innovation."
           </p>
           <button className="mt-4 text-blue-600 font-bold hover:underline">Join our team →</button>
        </div>

      </div>
    </section>
  );
};

export default ManagementTeam;