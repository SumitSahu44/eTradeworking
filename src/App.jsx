import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlatformForms from './components/PlatformForms';
import TradeOps from './components/TradeOps';
import Management from './components/Management';
import Contact from './pages/Contact';
import LiveChat from './components/LiveChat';
import ProductServicePage from './pages/ProductServicePage';  
import ManagementTeam from './pages/ManagementTeam';
import TermsAndConditions from './pages/TermsAndConditions';
import TradeEnquiryForm from './pages/TradeEnquiryForm';
import EAuction from './pages/EAuction';
import EQuotation from './pages/EQuotation';  
import CareerPage from './pages/CareerPage';
import AppointmentForm from './pages/AppointmentForm'; 
import CircularPage from './pages/CircularPage';
import BlogPage from './pages/BlogPage';
import MediaPage from './pages/MediaGallery';
import TextileAssociates from './pages/TextileAssociates';
import BuyerPlatform from './pages/BuyerPlatform';
import SellerPlatform from './pages/SellerPlatform';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
     
      <div className="font-['Poppins'] antialiased bg-white min-h-screen flex flex-col">
          <ScrollToTop />
          <Navbar />
       
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div className="pt-20"><Management /></div>} />
            <Route path="/ManagementTeam" element={<div className="pt-24"><ManagementTeam /></div>} />
            <Route path="/register" element={<div className="pt-24 py-20 bg-slate-50"><PlatformForms /></div>} />
            <Route path="/trade-ops" element={<div className="pt-24 max-w-7xl mx-auto px-6"><TradeOps /></div>} />
           <Route path="/contact" element={<div className="pt-24 max-w-7xl mx-auto px-6"><Contact /></div>} />  
            <Route path="/circulars" element={<div className="pt-24 max-w-7xl mx-auto px-6"><CircularPage /></div>} />
            <Route path="/appointment" element={<div className="pt-24 max-w-7xl mx-auto px-6"><AppointmentForm /></div>} />
            <Route path="/e-auction" element={<div className="pt-24 max-w-7xl mx-auto px-6"><EAuction /></div>} />
            <Route path="/e-quotation" element={<div className="pt-24 max-w-7xl mx-auto px-6"><EQuotation /></div>} />
            <Route path="/trade-enquiry" element={<div className="pt-24 max-w-7xl mx-auto px-6"><TradeEnquiryForm /></div>} />  
            <Route path="/terms" element={<div className="pt-24 max-w-7xl mx-auto px-6"><TermsAndConditions /></div>} />
            <Route path="/products-services" element={<div className="pt-24 max-w-7xl mx-auto px-6"><ProductServicePage /></div>} />
            <Route path="/career" element={<div className="pt-24 max-w-7xl mx-auto px-6"><CareerPage /></div>} /> 
           <Route path="/Blog" element={<div className="pt-24 max-w-7xl mx-auto px-6"><BlogPage /></div>} />  
           <Route path="/Media" element={<div className="pt-24 max-w-7xl mx-auto px-6"><MediaPage /></div>} />  
           <Route path="/BuyerPlatform" element={<div className="pt-24 max-w-7xl mx-auto px-6"><BuyerPlatform /></div>} />
          <Route path="/SellerPlatform" element={<div className="pt-24 max-w-7xl mx-auto px-6"><SellerPlatform /></div>} /> 
           <Route path="/TextileAssociates" element={<div className="pt-24 max-w-7xl mx-auto px-6"><TextileAssociates /></div>} />
          </Routes>

          <LiveChat />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;