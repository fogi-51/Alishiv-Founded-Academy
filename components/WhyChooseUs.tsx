
import React from 'react';

const ShieldCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.318-5.318a4.5 4.5 0 016.364 0l5.318 5.318A12.02 12.02 0 0018.382 7.984z" />
    </svg>
);

const TranslateIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 0v2m4 7-4-4-4 4M6 21v-2a4 4 0 014-4h2a4 4 0 014 4v2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m0 0V5m0 2h-2m2 0h2" />
    </svg>
);

const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M19 3v4M17 5h4M14 21v-4M12 19h4M10 21v-4M8 19h4m-7-5H5v2m2-2h-2m7-5H9v2m2-2h-2m7-5h-2v2m2-2h-2" />
    </svg>
);

const UsersIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a4 4 0 110-5.292" />
    </svg>
);

const features = [
  {
    title: 'Transparent Funding Rules',
    description: 'Clear, concise rules with no hidden terms. We believe in transparency for your success.',
    icon: <ShieldCheckIcon className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: 'Multilingual Support',
    description: 'We offer support in English, Hindi, and Bengali to cater to our diverse community.',
    icon: <TranslateIcon className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: 'Strong Risk Management',
    description: 'Learn and apply our robust risk management strategies to protect your capital and grow.',
    icon: <SparklesIcon className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: 'Supportive Trading Community',
    description: 'Join a network of like-minded traders, share ideas, and grow together in our community.',
    icon: <UsersIcon className="h-10 w-10 text-brand-blue" />,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mt-2">The Alishiv Advantage</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start space-x-6 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 bg-brand-blue/10 p-4 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
