
import React, { useState } from 'react';

const FacebookIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);
const InstagramIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.31a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
);
const YoutubeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.502 2.502 0 01-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.502 2.502 0 01-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.502 2.502 0 011.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" clipRule="evenodd" /></svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-2">We'd love to hear from you!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 bg-brand-light p-8 md:p-12 rounded-lg shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Get in Touch</h3>
            <p className="text-gray-700 mb-4">Have questions about our courses or the funding process? Reach out to us!</p>
            <div className="space-y-4 text-gray-800">
              <p><strong>Phone:</strong> +1 (234) 567-890</p>
              <p><strong>Email:</strong> support@alishiv.com</p>
              <p><strong>Address:</strong> 123 Trading Lane, Finance City, 45678</p>
            </div>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-gray-500 hover:text-brand-blue"><FacebookIcon className="h-6 w-6"/></a>
              <a href="#" className="text-gray-500 hover:text-brand-blue"><InstagramIcon className="h-6 w-6"/></a>
              <a href="#" className="text-gray-500 hover:text-brand-blue"><YoutubeIcon className="h-6 w-6"/></a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-3 rounded-lg border-gray-300 focus:ring-brand-blue focus:border-brand-blue" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-3 rounded-lg border-gray-300 focus:ring-brand-blue focus:border-brand-blue" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" className="w-full p-3 rounded-lg border-gray-300 focus:ring-brand-blue focus:border-brand-blue" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full p-3 rounded-lg border-gray-300 focus:ring-brand-blue focus:border-brand-blue"></textarea>
            <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-md">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
