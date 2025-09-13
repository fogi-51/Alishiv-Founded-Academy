
import React from 'react';

const PencilSquareIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
);

const TrophyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 1011.312-9.125c1.127.185 2.187.525 3.188.938m-14.5 8.187a9.75 9.75 0 1014.5-8.187m-14.5 8.187v-1.5a3.75 3.75 0 013.75-3.75h1.5a3.75 3.75 0 013.75 3.75v1.5m-9-9.375c1.127.185 2.187.525 3.188.938m-14.5-8.187c-1.001.413-1.95.83-2.813 1.25m11.313 6.938a9.75 9.75 0 10-11.313-6.938m11.313 6.938h-1.5a3.75 3.75 0 00-3.75 3.75v1.5m9-9.375c-1.001.413-1.95.83-2.813 1.25m-3.188-.938a9.75 9.75 0 10-3.188.938m9.063-7.812a9.75 9.75 0 10-9.063 7.812" />
    </svg>
);

const CurrencyDollarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.826-1.106-2.17 0-2.996.604-.45 1.348-.659 2.102-.659m0 0c.691 0 1.35.225 1.888.638 1.114.838 1.114 2.21 0 3.048-.52.39-1.146.612-1.82.612m-2.1-2.04c-.21.15-.43.28-.66.38" />
    </svg>
);

const ArrowTrendingUpIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M21 12.75l-3.75 2.25" />
    </svg>
);


const steps = [
  { name: 'Register for Challenge', icon: <PencilSquareIcon className="w-8 h-8 text-white"/>, description: 'Sign up for one of our funding challenges that best suits your trading style.', tooltip: 'Choose from various account sizes and funding models.' },
  { name: 'Prove Your Skills', icon: <TrophyIcon className="w-8 h-8 text-white"/>, description: 'Meet the profit targets and risk parameters on a demo/evaluation account.', tooltip: 'Achieve a 10% profit target without exceeding a 5% daily drawdown.' },
  { name: 'Get Funded', icon: <CurrencyDollarIcon className="w-8 h-8 text-white"/>, description: 'Successfully pass the challenge and receive credentials to a funded trading account.', tooltip: 'Receive your live account credentials within 24 hours of passing.' },
  { name: 'Profit Sharing', icon: <ArrowTrendingUpIcon className="w-8 h-8 text-white"/>, description: 'Trade responsibly and earn up to 80% of the profits you generate.', tooltip: 'Request payouts on-demand. First payout after 14 days, then weekly.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">How It Works</h2>
          <p className="text-lg text-gray-600 mt-2">A Simple Path to Your Funded Account</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-5 bottom-5 w-1 bg-blue-200 -translate-x-1/2"></div>
          {steps.map((step, index) => (
            <div key={step.name} className={`flex items-center w-full mb-8 md:mb-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
              <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 relative">
                 <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className={`bg-brand-blue p-4 rounded-full shadow-lg z-10`}>
                    {step.icon}
                  </div>
                 </div>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg relative group">
                  <p className="text-lg font-bold text-brand-blue mb-1">Step {index + 1}</p>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{step.name}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div role="tooltip" className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-1.5 text-sm font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                    {step.tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default HowItWorks;
