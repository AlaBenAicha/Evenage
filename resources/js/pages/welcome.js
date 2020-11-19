import React from 'react';
import GuestNav from '../components/guest-nav';

function Welcome () {
  return (
    <div className="flex flex-col min-h-screen">
      <GuestNav />
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-indigo text-2xl p-2 font-thin uppercase"> CREATE YOUR EVENT'S WEBSITE NOW</h1>
         <div className="flex items-center">
          <img src='/images/icons/undraw_events_2p66 (1).svg' style={{ width: 480, height: 480 }} />
          {/* <span className="text-3xl font-thin ml-8">&#43;</span>
          <img src='/images/icons/react.svg' className="h-32" /> */}
        </div> 
      </div>
    </div>
  );
};

export default Welcome;
