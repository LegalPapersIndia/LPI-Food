// src/components/HeroBanner.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Flame, Sparkles, Utensils, ChevronDown } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: "A Royal Feast Awaits",
    subtitle: "Where 5000 Years of Tradition Meets Your Plate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2070&q=90&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Soul of India",
    subtitle: "Handcrafted Thalis • Ancient Recipes",
    image: "https://images.unsplash.com/photo-1563379926899-1a66d5a4e3b6?w=2070&q=90&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Your Throne is Ready",
    subtitle: "Step Into the Royal Kitchens of India",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=2070&q=90&auto=format&fit=crop",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-amber-400',
          bulletClass: 'swiper-pagination-bullet !bg-amber-600/60',
        }}
        speed={1400}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Royal Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-orange-950/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-transparent to-red-900/40" />

              {/* Hero Content */}
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-7xl mx-auto">
                  {/* Main Title */}
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-amber-300 mb-6 leading-tight tracking-tight drop-shadow-2xl">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-100 font-medium italic mb-12 max-w-5xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Animated Icons */}
                  <div className="flex justify-center gap-10 mb-16">
                    <Flame className="w-16 h-16 text-orange-500 animate-pulse" />
                    <Sparkles className="w-14 h-14 text-yellow-400 animate-pulse delay-300" />
                    <Utensils className="w-16 h-16 text-amber-400 animate-pulse delay-700" />
                  </div>

                  {/* Royal CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <Link
                      to="/reservation"
                      className="group inline-flex items-center gap-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-16 py-7 rounded-full text-2xl md:text-3xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-amber-500/50"
                    >
                      <Flame className="w-10 h-10 group-hover:animate-pulse" />
                      Reserve Your Throne
                      <Flame className="w-10 h-10 group-hover:animate-pulse" />
                    </Link>

                    <Link
                      to="/menu"
                      className="inline-flex items-center gap-4 bg-black/60 backdrop-blur-md hover:bg-amber-900/40 text-amber-300 hover:text-white px-12 py-7 rounded-full text-xl md:text-2xl font-bold uppercase tracking-wider border-4 border-amber-500/60 hover:border-amber-400 transition-all duration-500"
                    >
                      <Sparkles className="w-8 h-8" />
                      Explore the Royal Menu
                      <Sparkles className="w-8 h-8" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for Swiper Pagination */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 40px !important;
        }
        .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          opacity: 0.7;
          transition: all 0.4s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.4);
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
        }
      `}</style>
    </section>
  );
}