import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 bg-bg-card rounded-3xl shadow-sm border border-gray-100 min-h-[60vh] py-12 flex flex-col md:flex-row gap-12 z-10 relative">
      
      {/* Contact Info Section */}
      <motion.div 
        className="w-full md:w-1/3 flex flex-col gap-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="font-heading text-3xl font-bold text-text-main mb-4">Get in Touch</h2>
          <p className="font-inter text-text-muted leading-relaxed">
            Planning your next Himalayan adventure or just want to chat about mountains? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-brand-secondary/10 p-3 rounded-full text-brand-primary">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-text-main">Visit Us</h4>
              <p className="font-inter text-sm text-text-muted mt-1">
                Thamel Marg, Kathmandu<br/>Bagmati Province, Nepal
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-brand-secondary/10 p-3 rounded-full text-brand-primary">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-text-main">Email Us</h4>
              <p className="font-inter text-sm text-text-muted mt-1">
                hello@nepalexplorer.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-brand-secondary/10 p-3 rounded-full text-brand-primary">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-text-main">Call Us</h4>
              <p className="font-inter text-sm text-text-muted mt-1">
                +977 1-4420000<br/>Mon-Fri, 9am - 5pm
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        className="w-full md:w-2/3 bg-gray-50 rounded-2xl p-8 border border-gray-100"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="font-heading text-2xl font-semibold text-text-main mb-6">Send a Message</h3>
        
        {isSubmitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-text-main mb-2">Message Sent!</h4>
            <p className="text-text-muted">Thank you for reaching out. We'll get back to you shortly.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-full">
                <label htmlFor="name" className="block font-inter text-sm font-medium text-text-main mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all font-inter text-sm text-text-main"
                  placeholder="John Doe"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block font-inter text-sm font-medium text-text-main mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all font-inter text-sm text-text-main"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block font-inter text-sm font-medium text-text-main mb-1">Message</label>
              <textarea 
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all font-inter text-sm text-text-main resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="mt-2 bg-brand-primary hover:bg-brand-secondary text-white font-inter font-medium px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto self-end"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
