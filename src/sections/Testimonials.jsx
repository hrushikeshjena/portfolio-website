import React, { useEffect } from 'react';
import anime from 'animejs';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO at Company X',
    feedback: 'Hrushikesh is an exceptional developer with a keen eye for detail and a strong work ethic. His contributions have greatly enhanced our project outcomes.',
    rating: 5
  },
  {
    name: 'John Smith',
    role: 'Project Manager at Company Y',
    feedback: 'A highly skilled full stack developer who delivers high-quality work on time. Excellent problem-solving skills and a great team player.',
    rating: 4
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer at Company Z',
    feedback: 'Hrushikesh’s expertise in React and Node.js significantly improved our application’s performance. He is reliable, innovative, and easy to work with.',
    rating: 5
  },
  // Add more testimonials as needed
];

const starRating = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  ));
};

const TestimonialsSection = () => {
  useEffect(() => {
    // Animation for testimonials
    anime({
      targets: '.testimonial-card',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      delay: anime.stagger(100), // Staggered delay
      duration: 800,
    });
  }, []);

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                    src={`https://i.pravatar.cc/150?img=${index}`}
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
              <div className="flex space-x-1">
                {starRating(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
