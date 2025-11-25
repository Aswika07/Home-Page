import React from 'react';
import client from '../../assets/client.avif';
import client1 from '../../assets/client1.avif';
import client2 from '../../assets/client2.avif';

const ClientReviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      role: 'CEO, Urban Developments',
      content: 'Exceptional IT integration in our high-rise project. Their solutions transformed our building into a smart haven!',
      rating: 5,
      avatar: client
    },
    {
      name: 'Mike Johnson',
      role: 'Architect, Coastal Designs',
      content: 'The Kerala-style home redesign was flawless. Sustainable tech blended perfectly with traditional aesthetics.',
      rating: 5,
      avatar: client1
    },
    {
      name: 'Jane Smithn',
      role: 'Owner, Brew Haven Cafe',
      content: 'Our cozy coffee shop now runs seamlessly with IoT systems. Customer experience has skyrocketed!',
      rating: 5,
      avatar: client2
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50 relative overflow-hidden">
      
      {/* CSS for the entry animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-card {
            opacity: 0; /* Start hidden */
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* Background Decor (Optional - adds depth) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Trusted by industry leaders and homeowners alike.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="animate-card bg-white rounded-2xl shadow-lg p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50/10 border border-transparent hover:border-blue-100 group"
              style={{ animationDelay: `${index * 200}ms` }} // Staggers the animation
            >
              
              {/* Avatar with Ring Effect */}
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-blue-200 rounded-full transform scale-110 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img 
                  src={review.avatar} 
                  alt={`${review.name} avatar`} 
                  className="relative w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-blue-500 transition-colors duration-300" 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/100x100?text=User'; }}
                />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-4 space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-yellow-400 text-xl transform transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <div className="mb-6 relative">
                 <span className="absolute -top-4 -left-2 text-4xl text-gray-200 font-serif leading-none">“</span>
                 <p className="text-gray-600 italic leading-relaxed relative z-10 px-2">
                   {review.content}
                 </p>
                 <span className="absolute -bottom-4 -right-1 text-4xl text-gray-200 font-serif leading-none">”</span>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors">
                  {review.name}
                </h4>
                <p className="text-blue-500 text-sm font-medium mt-1 uppercase tracking-wide">
                  {review.role}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;