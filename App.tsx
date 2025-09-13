
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import LearningVideos from './components/LearningVideos';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light font-sans text-brand-dark">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Courses />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <LearningVideos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
