import TestimonialCard from "./TestimonialsCard";
import { testimonials } from "../constant/data";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section pb-[80px]" id="testimonials">
      <div className="container text-center relative">
        <h2 className="mb-12">Testimonials</h2>
        <div className="overflow-hidden max-w-lg mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map(({ id, ...item }) => (
              <div key={id} className="min-w-full">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 
          rounded-full shadow bg-gray-200 transition-colors 
          duration-300 hover:bg-primary hover:text-white"
          onClick={() =>
            setIndex((prev) =>
              prev === 0 ? testimonials.length - 1 : prev - 1
            )
          }
        >
          <ChevronLeft className="stroke-[3]" />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 
          p-2 rounded-full shadow bg-gray-200 transition-colors 
          duration-300 hover:bg-primary hover:text-white"
          onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
        >
          <ChevronRight className="stroke-[3]" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
