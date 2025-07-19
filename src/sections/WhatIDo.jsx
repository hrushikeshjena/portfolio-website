import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

// Icons
const FaGlobe = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaGlobe })));
const FaPaintBrush = lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaPaintBrush })));
const MdMobileFriendly = lazy(() => import("react-icons/md").then(mod => ({ default: mod.MdMobileFriendly })));

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and high-performance web applications using modern frameworks.",
      icon: <FaGlobe className="text-5xl text-indigo-400" aria-label="Web Development Icon" />,
    },
    {
      title: "UI/UX Design",
      description: "Creating visually appealing and user-friendly interfaces for web and mobile applications.",
      icon: <FaPaintBrush className="text-5xl text-pink-400" aria-label="UI/UX Design Icon" />,
    },
    {
      title: "Mobile App Development",
      description: "Building high-performance mobile apps with seamless user experiences.",
      icon: <MdMobileFriendly className="text-5xl text-green-400" aria-label="Mobile App Development Icon" />,
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Explore the professional services offered by Hrushikesh Jena, including web development, mobile app creation, and UI/UX design." />
        <meta name="keywords" content="Web Development, UI/UX Design, Mobile App Development, Hrushikesh Jena Services" />
        <meta property="og:title" content="Services | Hrushikesh Jena" />
        <meta property="og:description" content="Crafting modern, responsive digital experiences across platforms." />
      </Helmet>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Hrushikesh Jena",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Professional Services",
            "itemListElement": services.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
              },
            })),
          }
        })}
      </script>

      <section className="py-16 text-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto text-center">
          <h2 id="services-heading" className="text-4xl font-bold mb-12 tracking-wide text-indigo-300">
            What I Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="group relative p-8 border border-gray-700 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500"
                role="region"
                aria-labelledby={`service-title-${index}`}
              >
                <Suspense fallback={<div className="h-16 mb-4"></div>}>
                  <div className="text-5xl mb-4 flex justify-center">{service.icon}</div>
                </Suspense>

                <h3 id={`service-title-${index}`} className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>

                <button
                  className="mt-6 px-5 py-2 border border-indigo-400 text-indigo-400 rounded-lg transition-all duration-300 hover:bg-indigo-400 hover:text-white"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
