
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              About Alishiv Academy
            </h2>
            <p className="text-xl text-gray-600 mb-6 italic">
              "We believe skills, not capital, should determine trading
              success."
            </p>
            <p className="text-gray-700 leading-relaxed">
              Alishiv Funded Academy was founded with a clear vision: to empower talented traders by removing the barrier of insufficient capital. We provide comprehensive education, robust risk management strategies, and a direct path to getting funded. Our community-driven approach ensures that every trader has the support and resources they need to thrive in the financial markets.
            </p>
          </div>
          <div>
            <img 
              src="https://picsum.photos/600/400?random=2" 
              alt="Trading desk" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
