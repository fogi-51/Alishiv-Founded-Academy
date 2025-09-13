
import React from 'react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    quote: 'The Funded Trader Challenge was a game-changer. It taught me discipline and risk management. Now I am a consistently profitable funded trader.',
    image: 'https://picsum.photos/100/100?random=3',
    title: 'Funded Trader'
  },
  {
    name: 'Priya Patel',
    quote: 'Alishiv Academy\'s mentorship is top-notch. The one-on-one sessions helped me identify my weaknesses and turn them into strengths. Highly recommended!',
    image: 'https://picsum.photos/100/100?random=4',
    title: 'Pro Trader Student'
  },
  {
    name: 'Rohan Das',
    quote: 'I always had the skills but lacked capital. Alishiv believed in me and gave me the opportunity. The support from the community is amazing.',
    image: 'https://picsum.photos/100/100?random=5',
    title: 'Funded Trader'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">What Our Students Say</h2>
          <p className="text-lg text-gray-600 mt-2">Success Stories from Our Community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-brand-light p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-6 border-4 border-brand-green shadow-md"
              />
              <blockquote className="text-gray-600 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold text-brand-dark text-lg">{testimonial.name}</p>
                <p className="text-brand-green">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
