import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu, X, ChevronDown, FileText, Gavel, ClipboardList,
  Users, Info, BookOpen, Briefcase, Bell, Image, MapPin,
  Calendar, ShieldCheck, ShoppingCart, Handshake, Globe
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuGroups = {
    company: [
      { name: 'About Us', path: '/about', icon: Info },
      { name: 'Management', path: '/ManagementTeam', icon: Users },
      { name: 'Associates', path: '/TextileAssociates', icon: MapPin },
      { name: 'Career', path: '/career', icon: Briefcase },
    ],
    trade: [
      { name: 'Product & Services', path: '/products-services', icon: ShoppingCart },
      { name: 'Buyer Platform', path: '/BuyerPlatform', icon: Globe },
      { name: 'Seller Platform', path: '/SellerPlatform', icon: Handshake },
      { name: 'e-Auction', path: '/e-auction', icon: Gavel },
      { name: 'Tender & Contract', path: '/TenderPortal', icon: Calendar },
      { name: 'e-Quotation', path: '/e-quotation', icon: FileText },
    ],
    resources: [
      { name: 'Circulars', path: '/circulars', icon: Bell },
      { name: 'Media Gallery', path: '/Media', icon: Image },
      { name: 'Blog Page', path: '/Blog', icon: BookOpen },
      { name: 'Appointment', path: '/appointment', icon: Calendar },
      { name: 'e-Trade T&C', path: '/terms', icon: ShieldCheck },
    ]
  };

  // FIX: Har word ko alag process karo — e- prefix wale words me
  // sirf 'e-' ko lowercase span me wrap karo, baki word normal rahega.
  // Isse "E-Trade" → <span>e-</span>Trade banta hai bina kisi extra space ke.
 const renderName = (name) => {
    return (
      <span className="flex items-center gap-1 leading-none">
        {name.split(' ').map((word, index) => {
          const isEWord = word.toLowerCase().startsWith('e-');
          return (
            <span key={index} className="inline-block">
              {isEWord ? (
                <>
                  <span className="lowercase font-bold">e-</span>
                  {word.slice(2)}
                </>
              ) : (
                word
              )}
            </span>
          );
        })}
      </span>
    );
  };

  const getLinkStyle = (isActive) => `
    flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300
    ${isActive ? 'text-blue-500' : scrolled ? 'text-slate-900 hover:text-blue-600' : 'text-slate-900 hover:text-blue-400'}
  `;

  return (
    <nav className={`fixed top-8 left-1/2 -translate-x-1/2 w-[95%] lg:w-[88%] z-[1000] transition-all duration-500 rounded-full px-10 py-4 ${scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200/50 py-3.5'
      : 'bg-white/70 backdrop-blur-md border border-white/10 shadow-xl'
      }`}>
      <div className="flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center shrink-0">
          <img
            src="/e-trade-logo.png"
            alt="Parekh e-Trade Logo"
            className={`
            transition-all duration-300 object-contain
            h-4 
            md:h-12 
            lg:h-14 
            ${scrolled ? 'h-8 md:h-10 lg:h-12' : 'h-10 md:h-12 lg:h-14'}
          `}
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10" ref={dropdownRef}>
          <NavLink to="/" className={({ isActive }) => getLinkStyle(isActive)}>HOME</NavLink>

          {/* Group: Company */}
          <div className="relative group" onMouseEnter={() => setActiveDropdown('company')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`${getLinkStyle(false)}`}>
              COMPANY <ChevronDown size={12} className={`transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'company' && (
              <div className="absolute top-full pt-4 -left-6 w-60 animate-in fade-in slide-in-from-top-2">
                <div className="bg-white rounded-2xl shadow-2xl p-3 border border-slate-100">
                  {menuGroups.company.map((item) => (
                    <NavLink key={item.name} to={item.path} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all font-bold text-[13px] uppercase tracking-normal">
                      <item.icon size={15} className="text-blue-500" /> {renderName(item.name)}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Group: Trade Hub */}
          <div className="relative group" onMouseEnter={() => setActiveDropdown('trade')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`${getLinkStyle(false)}`}>
              TRADE HUB <ChevronDown size={12} className={`transition-transform ${activeDropdown === 'trade' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'trade' && (
              <div className="absolute top-full pt-4 -left-6 w-64 animate-in fade-in slide-in-from-top-2">
                <div className="bg-white rounded-2xl shadow-2xl p-3 border border-slate-100">
                  {menuGroups.trade.map((item) => (
                    <NavLink key={item.name} to={item.path} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all font-bold text-[12px] uppercase tracking-normal">
                      <item.icon size={15} className="text-blue-500" /> {renderName(item.name)}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Group: Resources */}
          <div className="relative group" onMouseEnter={() => setActiveDropdown('portal')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`${getLinkStyle(false)}`}>
              RESOURCES <ChevronDown size={12} className={`transition-transform ${activeDropdown === 'portal' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'portal' && (
              <div className="absolute top-full pt-4 -left-6 w-64 animate-in fade-in slide-in-from-top-2">
                <div className="bg-white rounded-2xl shadow-2xl p-3 border border-slate-100">
                  {menuGroups.resources.map((item) => (
                    <NavLink key={item.name} to={item.path} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all font-bold text-[11px] uppercase tracking-normal">
                      <item.icon size={15} className="text-blue-500" /> {renderName(item.name)}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={({ isActive }) => getLinkStyle(isActive)}>CONTACT</NavLink>

          {/* Primary CTA */}
          <NavLink to="/trade-enquiry" className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-[12px] font-black hover:bg-slate-900 transition-all shadow-lg shadow-blue-500/30 tracking-widest uppercase">
            TRADE ENQUIRY
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button className={`lg:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white mt-5 rounded-[2.5rem] shadow-2xl p-8 flex flex-col gap-6 lg:hidden border border-slate-100 max-h-[80vh] overflow-y-auto">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="font-black text-slate-900 text-xs tracking-widest border-b border-slate-100 pb-2">HOME</NavLink>
          {Object.entries(menuGroups).map(([key, items]) => (
            <div key={key} className="space-y-3">
              <p className="text-[11px] font-black text-blue-600 tracking-[0.2em] uppercase underline underline-offset-4 decoration-blue-100">{key}</p>
              <div className="grid grid-cols-1 gap-3 pl-2">
                {items.map(item => (
                  <NavLink key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-[12px] font-bold text-slate-700 uppercase">
                    <item.icon size={14} className="text-blue-500" /> {renderName(item.name)}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
          <NavLink to="/trade-enquiry" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white p-4 rounded-2xl font-black text-center text-xs tracking-widest uppercase">TRADE ENQUIRY</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
