import { useState } from "react";
import { Helmet } from "react-helmet";
import { testimonials } from "../data/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

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
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.feedback
    }))
  };

  return (
    <>
      {/* SEO Structured Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Testimonials UI */}
      <section className="py-16 bg-transparent text-white" aria-labelledby="testimonial-heading">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 id="testimonial-heading" className="text-4xl font-bold mb-8 text-gradient">
            What People Say
          </h2>

          <div className="relative flex items-center justify-center">
            <button
              className="absolute left-0 p-2 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <span aria-hidden="true">◀</span>
            </button>

            <blockquote className="w-full max-w-lg p-6 border border-gray-600 rounded-2xl bg-transparent backdrop-blur-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <img
                src={testimonials[current].image}
                alt={`Picture of ${testimonials[current].name}`}
                className="w-16 h-16 mx-auto rounded-full border-2 border-blue-400"
                loading="lazy"
              />
              <p className="text-gray-300 mt-4 text-lg font-light">
                “{testimonials[current].feedback}”
              </p>
              <div
                className="flex justify-center mt-2"
                aria-label={`Rating: ${testimonials[current].rating} out of 5`}
              >
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl" aria-hidden="true">★</span>
                ))}
              </div>
              <footer className="mt-4">
                <h3 className="font-semibold text-lg text-blue-300">
                  {testimonials[current].name}
                </h3>
                {/* <p className="text-sm text-gray-400">
                  {testimonials[current].position}
                </p> */}
              </footer>
            </blockquote>

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
