import React from 'react';

function Hero() {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4 text-lg">Explore the amazing features and services we offer.</p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
