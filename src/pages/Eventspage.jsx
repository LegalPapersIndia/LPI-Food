// src/pages/Eventspage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Music, Camera, Flame, Sparkles, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Eventspage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=2070&q=90')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-orange-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-red-900/30"></div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-bold text-amber-300 mb-8 drop-shadow-2xl leading-tight">
              Events & Celebrations
            </h1>
            <p className="text-4xl md:text-6xl text-white font-medium tracking-wider mb-6">
              Where Moments Become Memories
            </p>
            <p className="text-2xl text-amber-200 italic font-light">
              Royal Indian hospitality for your special day
            </p>

            <div className="flex justify-center gap-10 mt-12">
              <Sparkles className="w-14 h-14 text-yellow-400 animate-pulse" />
              <Heart className="w-16 h-16 text-red-500 animate-pulse delay-300" />
              <Flame className="w-14 h-14 text-orange-500 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center text-amber-300 mb-20">
            Celebrate With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Royal Indian Wedding",
                icon: <Heart className="w-16 h-16" />,
                capacity: "Up to 800 Guests",
                features: ["Mandap & Floral Decor", "Bride & Groom Entry", "Live Music & DJ", "Professional Photography", "Customized Menu"]
              },
              {
                title: "Engagement & Roka",
                icon: <Calendar className="w-16 h-16" />,
                capacity: "30 – 300 Guests",
                features: ["Ring Ceremony Stage", "Candle Light Setup", "Live Singer", "Theme Decor", "Personalized Cake"]
              },
              {
                title: "Grand Birthday",
                icon: <Sparkles className="w-16 h-16" />,
                capacity: "20 – 500 Guests",
                features: ["Themed Decor", "Balloon Setup", "Magic Show", "Dance Floor", "Custom Cake & Dessert Counter"]
              },
              {
                title: "Anniversary Dinner",
                icon: <Heart className="w-14 h-14" />,
                capacity: "Intimate to 200 Guests",
                features: ["Candle Light Ambiance", "Live Violin or Saxophone", "Personalized Menu", "Memory Wall", "Photo Booth"]
              },
              {
                title: "Corporate Events",
                icon: <Users className="w-16 h-16" />,
                capacity: "50 – 1000 Guests",
                features: ["LED Wall & AV Setup", "Stage & Lighting", "Award Ceremony", "Gala Dinner", "Team Building"]
              },
              {
                title: "Religious Ceremonies",
                icon: <Flame className="w-16 h-16" />,
                capacity: "50 – 600 Guests",
                features: ["Havan Kund Arrangement", "Pandit Ji Services", "Prasad Counter", "Traditional Seating", "Peaceful Ambiance"]
              }
            ].map((event, i) => (
              <div
                key={i}
                className="group relative bg-black/60 backdrop-blur-md border border-amber-900/40 rounded-3xl p-10 text-center hover:border-orange-600 hover:shadow-2xl hover:shadow-orange-600/30 transition-all duration-700"
              >
                <div className="text-orange-500 mb-6 group-hover:text-amber-300 transition">
                  {event.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
                  {event.title}
                </h3>
                <p className="text-lg text-gray-400 mb-8 font-medium">
                  {event.capacity}
                </p>

                <ul className="space-y-3 text-left text-gray-300">
                  {event.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm md:text-base">
                      <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Highlights */}
      <section className="py-20 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-300 mb-16">
            Our Venue
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-orange-900/30 to-black rounded-3xl p-12 border border-amber-700/30">
              <h3 className="text-4xl font-bold text-amber-300 mb-4">Grand Banquet Hall</h3>
              <p className="text-xl text-gray-200">800+ Guests | Fully Air-Conditioned</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-black rounded-3xl p-12 border border-amber-700/30">
              <h3 className="text-4xl font-bold text-amber-300 mb-4">Outdoor Lawn</h3>
              <p className="text-xl text-gray-200">Perfect for Starlit Weddings & Receptions</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/30 to-black rounded-3xl p-12 border border-amber-700/30">
              <h3 className="text-4xl font-bold text-amber-300 mb-4">5+ Themes Available</h3>
              <p className="text-xl text-gray-200">Royal Rajasthani • Modern Minimal • Vintage • Floral</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-900/60 via-red-900/60 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-amber-300 mb-10">
            Let’s Make It Unforgettable
          </h2>
          <p className="text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Your dream event deserves the finest venue, food, and hospitality.<br />
            We’re here to make it happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
            <Link
              to="/reservation"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-20 py-8 rounded-full text-3xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition duration-300 flex items-center gap-4 justify-center"
            >
              <Calendar className="w-10 h-10" />
              Book Your Date
              <Calendar className="w-10 h-10" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-amber-200">
              <Phone className="w-8 h-8" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-300"> <a href="tel:+917505266931">+91 750 526 6931</a></p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-amber-200">
              <Mail className="w-8 h-8" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-300">events@lpifood.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-amber-200">
              <MapPin className="w-8 h-8" />
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-gray-300">Noida</p>
              </div>
            </div>
          </div>

          <p className="text-amber-300 text-xl mt-16 italic font-light">
            ~ With warm regards, Team LPI Food
          </p>
        </div>
      </section>
    </>
  );
}