"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "This product has exceeded my expectations! Highly recommend it to everyone.",
    name: "John Doe",
    title: "Software Engineer",
    image: "/first-review (1).jpeg", // Path to the image in the 'public' folder
  },
  {
    id: 2,
    quote: "Excellent customer service and quality. I'll definitely be a returning customer.",
    name: "Jane Smith",
    title: "Designer",
    image: "/first-review (2).jpeg",
  },
  {
    id: 3,
    quote: "Best purchase I've made in a while. The product quality is outstanding!",
    name: "Sam Wilson",
    title: "Product Manager",
    image: "/items3.jpg.webp",
  },
];

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 flex justify-center"
              >
                <div className="bg-white shadow-lg rounded-lg p-6 mx-4 max-w-md text-center flex flex-col items-center">
                  {/* Testimonial Image */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96} // 96px wide (24 * 4)
                    height={96} // 96px tall
                    className="rounded-full object-cover mb-4"
                  />
                  {/* Quote */}
                  <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                  {/* Name and Title */}
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
