import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center text-white py-32 md:py-48"
      style={{ backgroundImage: "url('https://picsum.photos/1600/900?random=1&grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-brand-blue opacity-80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Alishiv Funded Academy
        </h1>
        <p className="text-2xl md:text-4xl font-semibold text-brand-green mb-8">
          Learn, Trade & Get Funded!
        </p>
        <a
          href="#contact"
          className="bg-brand-green text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg"
        >
          Online Registration
        </a>
      </div>
    </section>
  );
};

export default Hero;