import React from 'react';
import { useContact } from '../../hooks/useContact';
import contactImg from '../../assets/contact us.svg'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { formData, handleChange, handleSubmit, loading, error } = useContact();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      
      if (!error) {
        toast.success("Message Sent Successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 flex items-center justify-center min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Unified Card Container: Combines Image and Form into one solid block */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* --- LEFT SIDE: Visual Banner (Gradient Background) --- */}
          <div className="md:w-5/12 bg-gradient-to-br from-blue-600 to-indigo-800 relative p-12 flex flex-col items-center justify-center text-center text-white overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10 mb-8">
                <h3 className="text-3xl font-bold mb-3 tracking-wide">Get in Touch</h3>
                <p className="text-blue-100 max-w-xs mx-auto text-sm leading-relaxed">
                  We'd love to hear from you. Let's create something amazing together.
                </p>
            </div>

            {/* Floating Illustration */}
            <div className="relative z-10 w-full max-w-sm transform hover:scale-105 transition-transform duration-500">
                <img 
                    src={contactImg} 
                    alt="Contact Illustration" 
                    className="w-full h-auto drop-shadow-2xl object-contain"
                    style={{ maxHeight: '300px' }}
                    onError={(e) => { e.target.src = 'https://illustrations.popsy.co/amber/surr-mailing.svg'; }}
                />
            </div>
          </div>

          {/* --- RIGHT SIDE: Clean Form Area --- */}
          <div className="md:w-7/12 p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-center">
            
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">Send us a Message</h2>
              {/* Decorative underline */}
              <div className="w-16 h-1.5 bg-blue-600 mt-3 rounded-full"></div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r shadow-sm" role="alert">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={onFormSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 outline-none text-black placeholder-gray-400 font-medium"
                  required
                  disabled={loading}
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 outline-none text-black placeholder-gray-400 font-medium"
                  required
                  disabled={loading}
                />
              </div>

              {/* Message Input */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 outline-none resize-none text-black placeholder-gray-400 font-medium"
                  required
                  disabled={loading}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-blue-200 shadow-lg transform transition-all duration-300 
                    ${loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-1'
                    }`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;