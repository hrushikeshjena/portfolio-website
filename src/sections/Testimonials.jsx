import { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { testimonials } from "../data/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const testimonial = testimonials[current];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Business Name",
    "url": "https://yourdomain.com",
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": 5,
      },
      "author": {
        "@type": "Person",
        "name": t.name,
      },
      "reviewBody": t.feedback,
    })),
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Testimonials Section */}
      <section
        className="py-16 bg-transparent text-white"
        aria-labelledby="testimonial-heading"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2
            id="testimonial-heading"
            className="text-4xl font-bold mb-10 text-gradient"
          >
            What People Say
          </h2>

          <div
            className="relative flex items-center justify-center"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Previous Button */}
            <button
              className="absolute left-0 p-2 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <span aria-hidden="true">◀</span>
            </button>

            {/* Testimonial Card */}
            <blockquote className="w-full max-w-lg px-6 py-8 border border-gray-700 rounded-2xl bg-black/20 backdrop-blur-md shadow-lg transition-all duration-300">
              <img
                src={testimonial?.image}
                alt={`Picture of ${testimonial?.name}`}
                className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 object-cover"
                loading="lazy"
              />

              <p className="text-gray-200 mt-6 text-lg italic">“{testimonial?.feedback}”</p>

              <div
                className="flex justify-center mt-3"
                aria-label={`Rating: ${testimonial?.rating} out of 5`}
              >
                {Array.from({ length: testimonial?.rating || 0 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              <footer className="mt-4">
                <h3 className="font-semibold text-blue-300 text-lg">{testimonial?.name}</h3>
                {/* <p className="text-sm text-gray-400">{testimonial?.position}</p> */}
              </footer>
            </blockquote>

            {/* Next Button */}
            <button
              className="absolute right-0 p-2 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <span aria-hidden="true">▶</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
