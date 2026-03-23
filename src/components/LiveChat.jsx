import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! Parekh e-Trade mein aapka swagat hai. Main aapki kaise madad kar sakta hoon?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // WhatsApp Config
  const whatsappNumber = "+919876543210"; 
  const whatsappMessage = "Namaste Parekh e-Trade, mujhe enquiry karni hai.";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const botMsg = { 
        id: Date.now() + 1, 
        text: "Dhanyawad! Hamare 'Authorized Official' aapse jald hi sampark karenge.", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[2000] font-['Poppins'] flex flex-col items-center gap-4">
      
      {/* --- WHATSAPP BUTTON (Perfect Circle) --- */}
      {!isOpen && (
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-emerald-200 flex items-center justify-center hover:scale-110 transition-all duration-300 relative group"
        >
          {/* Outer Pulse */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
          
          {/* Tooltip */}
          <span className="absolute right-16 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest">
            WhatsApp Us
          </span>

          {/* Corrected WhatsApp SVG */}
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-white fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}

      {/* --- LIVE CHAT BOX --- */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-blue-600 p-6 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest">Parekh Desk</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-bold text-blue-100 uppercase">Live Now</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[11px] font-medium leading-relaxed shadow-sm ${
                  msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..." 
              className="flex-1 bg-slate-100 px-5 py-3 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
            />
            <button type="submit" className="bg-blue-600 text-white p-3.5 rounded-2xl hover:bg-slate-900 transition-colors shadow-lg shadow-blue-100">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* --- MAIN CHAT TRIGGER --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center relative ${
          isOpen ? 'bg-slate-900 rotate-180' : 'bg-blue-600 hover:scale-105 shadow-blue-500/30'
        } text-white`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={30} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-black">1</span>
        )}
      </button>
    </div>
  );
};

export default LiveChat;