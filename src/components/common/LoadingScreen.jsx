import React from 'react';
import logo from '../../assets/images/Logo.png';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="logo-animation">
        <img 
          src={logo} 
          alt="BoardPins" 
          className="w-[200px]"
        />
      </div>
      <div className="mt-8 flex space-x-3">
        <div className="w-3 h-3 rounded-full bg-primary dot-animation" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-3 rounded-full bg-primary dot-animation" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-3 h-3 rounded-full bg-primary dot-animation" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}

export default LoadingScreen;

