// src/components/Events.jsx
import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Events() {
  const events = [
    {
      title: "Diwali Royal Thali Night",
      date: "November 14 • 7:30 PM onwards",
      desc: "Celebrate the festival of lights with our grand 21-dish Royal Indian Thali, live ghazals, diya lighting & fireworks",
      price: "₹2,800 per person",
      badge: "DIWALI SPECIAL"
    },
    {
      title: "Holi Hungama Brunch",
      date: "March 8, 2025 • 12:00 PM - 4:00 PM",
      desc: "Unlimited thandai, gujiya, dahi bhalle, live dhol, organic colors & 5-course festive menu",
      price: "₹2,200 per person (incl. thandai)",
      badge: "LIMITED SEATS"
    },
    {
      title: "Navratri Garba Nights",
      date: "Every Night • Oct 2–10 • 8:00 PM onwards",
      desc: "9 nights of garba, fafda-jalebi, undhiyu-puri, live Gujarati folk music & dandiya",
      price: "₹1,800 per person",
      badge: "9 NIGHTS ONLY"
    },
    {
      title: "Eid-ul-Fitr Dawat-e-Iftar",
      date: "March 30, 2025 • Sunset onwards",
      desc: "Royal Awadhi iftar with sheer khurma, haleem, kebabs, biryani & phirni",
      price: "₹2,500 per person",
      badge: "EID SPECIAL"
    },
    {
      title: "Onam Sadhya Feast",
      date: "September 8, 2025 • 1:00 PM & 7:30 PM",
      desc: "Traditional 26-course Kerala Sadhya served on banana leaf with payasam & live music",
      price: "₹2,400 per person",
      badge: "ONAM 2025"
    },
    {
      title: "Royal Rajasthani Food Festival",
      date: "Every Weekend in January • 7:30 PM",
      desc: "Dal Baati Churma, Laal Maas, Gatte ki Sabzi, live Rajasthani folk dance & puppet show",
      price: "₹2,600 per person",
      badge: "JANUARY ONLY"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 relative overflow-hidden" id="events">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-orange-500">
          <Sparkles className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-10 text-red-600">
          <Sparkles className="w-40 h-40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header - Indian Touch */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            त्योहारों का स्वाद
            <br />
            <span className="text-orange-500 text-6xl md:text-8xl">Festive Feasts</span>
          </h2>
          <p className="text-2xl text-amber-300 font-medium mt-4">
            Celebrate India’s Rich Traditions with Us
          </p>
          <p className="text-xl text-gray-300 mt-2">Limited seats • Advance booking mandatory</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-black/80 via-black/60 to-orange-900/20 backdrop-blur-md border border-amber-800/40 rounded-3xl overflow-hidden hover:border-orange-500/80 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-600/30 transform hover:-translate-y-3"
            >
              {/* Festive Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {event.badge}
                </span>
              </div>

              {/* Decorative Top */}
              <div className="h-64 bg-gradient-to-br from-orange-600 via-red-600 to-amber-700 flex items-center justify-center relative overflow-hidden">
                <div className="text-white/20 group-hover:text-white/40 transition-all duration-700">
                  <Calendar className="w-32 h-32" />
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>
              </div>

              {/* Event Details */}
              <div className="p-8 space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-orange-400 transition">
                  {event.title}
                </h3>

                <div className="space-y-4 text-gray-300">
                  <p className="flex items-center gap-3 text-base">
                    <Clock className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <span className="font-medium">{event.date}</span>
                  </p>
                  <p className="text-sm md:text-base leading-relaxed opacity-90 italic">
                    {event.desc}
                  </p>
                  <div className="pt-3">
                    <p className="text-2xl md:text-3xl font-bold text-orange-500">
                      {event.price}
                    </p>
                  </div>
                </div>

                {/* Reserve Button */}
                <Link
                  to="/reservation"
                  className="inline-block w-full text-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-5 rounded-full font-bold text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-600/50"
                >
                  Book Your Seat
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-3xl p-12 border border-amber-700/50">
          <p className="text-2xl text-amber-300 font-medium mb-6">
            हर त्योहार को बनाएं खास — Make Every Festival Special
          </p>
          <p className="text-lg text-gray-300">
            For private celebrations, wedding functions & corporate events — contact us
          </p>
        </div>
      </div>
    </section>
  );
}