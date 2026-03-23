import React from 'react';
import Hero from '../components/Hero';
import ProcessFlow from '../components/ProcessFlow';
import PlatformForms from '../components/PlatformForms';
import TradeOps from '../components/TradeOps';
import IndiaMap from '../components/IndiaMap';
import NewsPortal from '../components/NewsPortal';
import Stats from '../components/Stats';
const Home = () => {
  return (
    <main>
      <Hero />
      <ProcessFlow />
      {/* Forms Section */}
       <Stats />
      {/* <section id="register-section" className="py-20 bg-slate-50">
        <PlatformForms />
       
      </section> */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <TradeOps />
      </div>
      <IndiaMap />
      <NewsPortal />
    </main>
  );
};

export default Home;