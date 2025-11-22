// src/components/HeroBanner.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: "Experience Fine Dining",
    subtitle: "Authentic Flavors • Unforgettable Moments",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Handcrafted with Love",
    subtitle: "Fresh Ingredients • Master Chefs",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Your Table is Ready",
    subtitle: "Reserve Now & Savor the Moment",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Dynamic Overlay - Thoda adjust kiya light/dark ke liye */}
              <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />

              {/* Hero Content */}
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-5xl mx-auto">
                  {/* Title */}
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fadeInUp drop-shadow-2xl">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 dark:text-gray-200 mb-12 font-light tracking-wide animate-fadeInUp animation-delay-300 drop-shadow-lg">
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animation-delay-600">
                    <Link
                      to="/reservation"
                      className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full text-lg md:text-xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-600"
                    >
                      Book a Table
                    </Link>
                    <Link
                      to="/menu"
                      className="bg-transparent hover:bg-white/20 backdrop-blur-sm text-white hover:text-white px-10 py-5 rounded-full text-lg md:text-xl font-bold uppercase tracking-wider border-2 border-white transition-all duration-300"
                    >
                      Check Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Fade In Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}