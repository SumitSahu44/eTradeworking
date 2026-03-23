import React, { useState } from 'react';
// Yahan 'CreditCard' ka 'C' capital hona chahiye
import { ShieldCheck, Scale, FileText, CreditCard, AlertTriangle, BookOpen } from 'lucide-react';

const sections = [
  { id: 'acceptance', title: 'Acceptance', icon: BookOpen },
  { id: 'eligibility', title: 'User Eligibility', icon: Scale },
  { id: 'trading', title: 'Trading Rules', icon: FileText },
  { id: 'payments', title: 'Payments & Fees', icon: CreditCard }, // Capital C
  { id: 'liability', title: 'Legal Liability', icon: AlertTriangle },
];

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState('acceptance');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      // scroll-margin-top logic CSS se handle hogi niche
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 font-['Poppins'] min-h-screen">
      {/* Top Hero Banner */}
      <div className="bg-slate-900 py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 italic">Parekh e-Trade Legal Center</h1>
        <p className="text-slate-400 text-sm">Last Updated: March 2026</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDE: Fixed/Sticky Navigation */}
          <aside className="w-full lg:w-80 lg:sticky lg:top-10 z-10">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-5 border-b border-slate-100 bg-slate-50">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-blue-600" /> Policy Chapters
                </h3>
              </div>
              <nav className="p-2">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-semibold transition-all mb-1 ${
                      activeTab === item.id 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <item.icon size={18} />
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* RIGHT SIDE: Scrollable Content */}
          <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
            
            {/* Section: Acceptance */}
            <section id="acceptance" className="scroll-mt-24 mb-20 border-b border-slate-50 pb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl">01</div>
                <h2 className="text-2xl font-bold text-slate-900">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>Parekh e-Trade Market (Textile) platform ka upyog karke, aap swikar karte hain ki aapne hamari sabhi sharto ko padh liya hai aur aap inse sehmat hain.</p>
                <p>Yeh platform Hyderabad-based textile network ka hissa hai aur iska uddeshya transparent B2B trading ko badhava dena hai.</p>
              </div>
            </section>

            {/* Section: Eligibility */}
            <section id="eligibility" className="scroll-mt-24 mb-20 border-b border-slate-50 pb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl">02</div>
                <h2 className="text-2xl font-bold text-slate-900">User Eligibility</h2>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600 mb-6">
                <p className="text-slate-700 font-medium">Sirf registered GST firms aur verified textile brokers hi is platform par trade kar sakte hain.</p>
              </div>
              <ul className="list-disc pl-6 space-y-3 text-slate-600 text-sm md:text-base">
                <li>Aapki umar 18 varsh se adhik honi chahiye.</li>
                <li>Aapke paas valid business documentation hona anivarya hai.</li>
                <li>Fake identity ya galat business information dene par account ban kar diya jayega.</li>
              </ul>
            </section>

            {/* Section: Trading Rules */}
            <section id="trading" className="scroll-mt-24 mb-20 border-b border-slate-50 pb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl">03</div>
                <h2 className="text-2xl font-bold text-slate-900">Trading & Bidding Rules</h2>
              </div>
              <p className="text-slate-600 mb-6 text-sm md:text-base">Hum digital auctions aur direct sales dono support karte hain. Har bid legally binding hoti hai.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-slate-100 shadow-sm rounded-xl">
                  <h4 className="font-bold text-blue-600 mb-2">Quality Check</h4>
                  <p className="text-sm text-slate-500">Seller ko sample ke mutabiq hi bulk material supply karna hoga.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 shadow-sm rounded-xl">
                  <h4 className="font-bold text-blue-600 mb-2">Delivery Time</h4>
                  <p className="text-sm text-slate-500">Agreed timelines ke andar material dispatch hona zaroori hai.</p>
                </div>
              </div>
            </section>

            {/* Section: Payments */}
            <section id="payments" className="scroll-mt-24 mb-20 border-b border-slate-50 pb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl">04</div>
                <h2 className="text-2xl font-bold text-slate-900">Payments & Platform Fees</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">Parekh e-Trade platform transactions par ek nominal service fee charge karta hai jo deal finalize hone par lagti hai.</p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left min-w-[400px]">
                  <thead className="bg-slate-50 text-sm">
                    <tr>
                      <th className="p-4 font-bold text-slate-700">Transaction Type</th>
                      <th className="p-4 font-bold text-slate-700">Fees</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600 text-sm">
                    <tr className="border-t border-slate-100">
                      <td className="p-4">Direct Purchase</td>
                      <td className="p-4">1% Service Charge</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="p-4">Auction Win</td>
                      <td className="p-4">1.5% Commission</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

             {/* Section: Liability */}
             <section id="liability" className="scroll-mt-24 pb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl">05</div>
                <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
              </div>
              <p className="text-slate-600 leading-relaxed italic text-sm md:text-base">
                Parekh e-Trade sirf ek facilitator hai. Kisi bhi quality dispute ya payment delay ke liye Buyers aur Sellers aapas mein legally deal karenge.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;