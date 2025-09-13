import React, { useState } from 'react';

const ChartBarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const RocketLaunchIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" transform="rotate(-45 12 12) translate(-2, -2)"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l-7-7 7-7" transform="rotate(-45 12 12) translate(-2, -2)"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.293 15.293l-1.414 1.414A5 5 0 019 19.414V17a3 3 0 00-3-3H4.586a5 5 0 01-1.414-1.414l1.414-1.414" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.707 8.707l1.414-1.414A5 5 0 0115 4.586V7a3 3 0 003 3h1.414a5 5 0 011.414 1.414l-1.414 1.414"/>
    </svg>
);

const UserGroupIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a5.002 5.002 0 019 0m-4.5 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM3 11a5.002 5.002 0 015-5h8a5.002 5.002 0 015 5v1.286a5.002 5.002 0 01-5 5h-8a5.002 5.002 0 01-5-5V11z" />
    </svg>
);

const PresentationChartLineIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
    </svg>
);

const ClockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ClipboardDocumentCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
    </svg>
);

const UserCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);


const courses = [
  {
    title: 'Professional Trading Courses',
    description: 'Master the markets with our in-depth courses covering strategies from beginner to advanced levels.',
    icon: <ChartBarIcon className="h-12 w-12 text-brand-green" />,
    duration: '8 weeks, self-paced',
    prerequisites: 'None, suitable for all skill levels.',
    instructor: 'Team of veteran traders with 15+ years experience.',
    curriculum: ['Market Structure & Price Action', 'Advanced Chart Patterns', 'Risk Management Models', 'Trading Psychology'],
    learningOutcomes: ['Develop a personalized trading plan.', 'Analyze market trends effectively.', 'Execute trades with confidence.'],
    targetAudience: 'Aspiring traders and investors looking for a structured learning path.'
  },
  {
    title: 'Funded Trader Challenge',
    description: 'Prove your trading skills in our evaluation and get access to a funded account to trade our capital.',
    icon: <RocketLaunchIcon className="h-12 w-12 text-brand-green" />,
    duration: '30-day evaluation period',
    prerequisites: 'Basic understanding of trading concepts.',
    instructor: 'Evaluated by our senior risk management team.',
    curriculum: ['Challenge Rules & Objectives', 'Daily & Max Drawdown Rules', 'Profit Target Strategy', 'Consistency Guidelines'],
    learningOutcomes: ['Qualify for a funded trading account.', 'Learn to trade under professional risk parameters.', 'Demonstrate consistent profitability.'],
    targetAudience: 'Experienced traders ready to prove their skills and trade with significant capital.'
  },
  {
    title: 'One-on-One Mentorship',
    description: 'Get personalized guidance from our experienced traders to accelerate your learning curve.',
    icon: <UserGroupIcon className="h-12 w-12 text-brand-green" />,
    duration: '4 sessions (1 hour each)',
    prerequisites: 'Completion of Professional Course or equivalent.',
    instructor: 'A dedicated expert mentor matched to your style.',
    curriculum: ['Personal Strategy Review', 'Live Trading Session Analysis', 'Psychological Profiling', 'Custom Action Plan'],
    learningOutcomes: ['Refine your trading strategy.', 'Overcome psychological barriers.', 'Gain insights from a professional trader.'],
    targetAudience: 'Serious traders committed to reaching the next level of their performance.'
  },
  {
    title: 'Live Market Analysis',
    description: 'Join our daily live sessions to analyze the market in real-time with professional traders.',
    icon: <PresentationChartLineIcon className="h-12 w-12 text-brand-green" />,
    duration: 'Daily 1-hour sessions',
    prerequisites: 'Open to all students and funded traders.',
    instructor: 'Hosted by our head market analyst.',
    curriculum: ['Pre-market Briefing', 'Real-time Trade Idea Generation', 'Key Level Identification', 'Q&A with Analysts'],
    learningOutcomes: ['Understand daily market sentiment.', 'Identify high-probability trade setups.', 'Stay updated with live market movements.'],
    targetAudience: 'Traders of all levels who want to start their day with professional market insights.'
  },
];

const Courses: React.FC = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setExpandedCourse(expandedCourse === title ? null : title);
  };

  return (
    <section id="courses" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Our Programs</h2>
          <p className="text-lg text-gray-600 mt-2">Your Path to Trading Success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => {
            const isExpanded = expandedCourse === course.title;
            return (
            <div
              key={course.title}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col text-center transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex-grow">
                <div className="inline-flex justify-center items-center mb-6">
                  <div className="bg-brand-green/10 p-4 rounded-full">
                      {course.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>
              </div>

              <div className="text-left pt-6 border-t border-gray-100">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ClockIcon className="w-5 h-5 mr-3 text-brand-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600"><strong className="font-semibold text-brand-dark">Duration:</strong> {course.duration}</p>
                  </li>
                  <li className="flex items-start">
                    <ClipboardDocumentCheckIcon className="w-5 h-5 mr-3 text-brand-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600"><strong className="font-semibold text-brand-dark">Prerequisites:</strong> {course.prerequisites}</p>
                  </li>
                  <li className="flex items-start">
                    <UserCircleIcon className="w-5 h-5 mr-3 text-brand-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600"><strong className="font-semibold text-brand-dark">Instructor:</strong> {course.instructor}</p>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => handleToggle(course.title)} 
                    className="flex justify-between items-center w-full text-left font-semibold text-brand-blue hover:text-brand-dark transition"
                    aria-expanded={isExpanded}
                    aria-controls={`course-details-${course.title}`}
                  >
                    <span>Learn More</span>
                    <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    id={`course-details-${course.title}`}
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}
                  >
                    <div className="text-left mt-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-brand-dark mb-2">Target Audience:</h4>
                        <p className="text-sm text-gray-600">{course.targetAudience}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark mb-2">Curriculum:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {course.curriculum.map(item => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                       <div>
                        <h4 className="font-bold text-brand-dark mb-2">Learning Outcomes:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {course.learningOutcomes.map(item => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            )}
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;