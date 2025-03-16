import { useState } from "react";
import { testimonials } from "../data/constants";

export default function Testimonials() {


  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
<section className="py-16 bg-transparent text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8 text-gradient">What People Say</h2>

    <div className="relative flex items-center justify-center">
      {/* Previous Button */}
      <button
        className="absolute left-0 p-2 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        onClick={prevTestimonial}
      >
        ◀
      </button>

      {/* Testimonial Card */}
      <div className="w-full max-w-lg p-6 border border-gray-600 rounded-2xl bg-transparent backdrop-blur-lg shadow-md transition-all duration-300 hover:shadow-lg">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-16 h-16 mx-auto rounded-full border-2 border-blue-400"
        />
        <p className="text-gray-300 mt-4 text-lg font-light">
          "{testimonials[current].feedback}"
        </p>
        <div className="flex justify-center mt-2">
          {Array.from({ length: testimonials[current].rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
        </div>
        <h3 className="mt-4 font-semibold text-lg text-blue-300">
          {testimonials[current].name}
        </h3>
        <p className="text-sm text-gray-400">{testimonials[current].position}</p>
      </div>

      {/* Next Button */}
      <button
        className="absolute right-0 p-2 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        onClick={nextTestimonial}
      >
        ▶
      </button>
    </div>
  </div>
</section>

  );
}
