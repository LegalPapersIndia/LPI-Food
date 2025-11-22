// src/pages/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Leaf, Heart, Award, Globe, Sparkles, Utensils } from 'lucide-react';

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2070&q=90')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-orange-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-red-900/30"></div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-bold text-amber-300 mb-8 drop-shadow-2xl leading-tight">
              Our Legacy
            </h1>
            <p className="text-4xl md:text-6xl text-white font-medium tracking-wider mb-6">
              Where Tradition Meets Taste
            </p>
            <p className="text-2xl text-amber-200 italic font-light max-w-4xl mx-auto">
              A modern celebration of India’s 5000-year-old culinary heritage
            </p>

            <div className="flex justify-center gap-10 mt-12">
              <Flame className="w-14 h-14 text-orange-500 animate-pulse" />
              <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse delay-300" />
              <Utensils className="w-14 h-14 text-amber-400 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1606890658317-8c8d874c9b76?w=900&q=90"
              alt="Traditional Indian kitchen with diyas and spices"
              className="rounded-3xl shadow-2xl w-full object-cover h-[600px] border-8 border-orange-600/20"
              loading="lazy"
            />
          </div>

          <div className="space-y-10 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Born from a Vision
            </h2>
            <p className="text-2xl text-amber-300 font-medium">
              LPI Food — Established 2025
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are more than a restaurant — we are a <span className="text-amber-400 font-bold">celebration of culture</span>.
              Every thali carries the soul of India, every spice holds the memory of home, and every guest is welcomed like royalty.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From the golden fields of Punjab to the coconut groves of Kerala, we source only the finest ingredients — because we believe food is sacred, and honoring it is our dharma.
            </p>

            <blockquote className="text-3xl font-medium text-amber-200 italic border-l-8 border-orange-600 pl-8 py-6 bg-black/30 rounded-r-2xl">
              “We don’t just serve food...<br/>We serve tradition on a plate.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center text-amber-300 mb-20">
            Our Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition shadow-2xl shadow-orange-500/20">
                <Flame className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Respect for Fire</h3>
              <p className="text-gray-300 text-lg">Every dish carries the warmth of a mother’s hand and the soul of the hearth</p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition shadow-2xl shadow-green-500/20">
                <Leaf className="w-16 h-16 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Love for Nature</h3>
              <p className="text-gray-300 text-lg">Organic farms, direct from farmers — because the grower comes first</p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-600/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition shadow-2xl shadow-red-500/20">
                <Heart className="w-16 h-16 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Atithi Devo Bhava</h3>
              <p className="text-gray-300 text-lg">You are not our guest — you are family. This is our culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center text-amber-300 mb-16">
            Honors & Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { year: "2025", award: "Best Indian Fine Dining", icon: <Award className="w-14 h-14" /> },
              { year: "2025", award: "Times Food Award", icon: <Globe className="w-14 h-14" /> },
              { year: "2025", award: "Heritage Cuisine Pioneer", icon: <Sparkles className="w-14 h-14" /> },
              { year: "2025", award: "Chef's Choice Award", icon: <Utensils className="w-14 h-14" /> }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-orange-900/30 via-black to-red-900/30 border border-amber-600/40 rounded-3xl p-10 text-center hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500"
              >
                <div className="text-amber-400 mb-6 group-hover:scale-125 transition">
                  {item.icon}
                </div>
                <p className="text-4xl font-bold text-amber-300">{item.year}</p>
                <p className="text-xl text-gray-200 mt-4 font-medium">{item.award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-900/50 via-red-900/50 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-amber-300 mb-8">
            We Await Your Presence
          </h2>
          <p className="text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Come, spend an evening in the royal kitchens of India...<br/>
            Where every bite carries centuries of tradition
          </p>

          <Link
            to="/reservation"
            className="inline-flex items-center gap-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-20 py-8 rounded-full text-3xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <Flame className="w-10 h-10" />
            Reserve Your Royal Experience
            <Flame className="w-10 h-10" />
          </Link>

          <p className="text-amber-300 text-2xl mt-12 italic font-light">
            ~ With warm regards, The LPI Food Family
          </p>
        </div>
      </section>
    </>
  );
}