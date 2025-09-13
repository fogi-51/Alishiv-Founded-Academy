
import React from 'react';

const PlayCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
);


const videos = [
    { title: 'Introduction to Forex Trading', duration: '12:45', image: 'https://picsum.photos/500/300?random=6' },
    { title: 'Mastering Technical Analysis', duration: '25:10', image: 'https://picsum.photos/500/300?random=7' },
    { title: 'The Psychology of a Winning Trader', duration: '18:30', image: 'https://picsum.photos/500/300?random=8' },
];

const LearningVideos: React.FC = () => {
    return (
        <section id="videos" className="py-20 bg-brand-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Learning Videos</h2>
                    <p className="text-lg text-gray-600 mt-2">Watch, Learn, and Improve Your Skills</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <div key={video.title} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                            <div className="relative">
                                <img src={video.image} alt={video.title} className="w-full h-48 object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <PlayCircleIcon className="w-20 h-20 text-white opacity-80"/>
                                </div>
                                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                                    {video.duration}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-dark">{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningVideos;
