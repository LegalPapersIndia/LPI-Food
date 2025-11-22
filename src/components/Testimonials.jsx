import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: "Sophia Martinez", rating: 5, text: "Best dining experience of my life. The wagyu melted in my mouth!" },
    { name: "David Kim", rating: 5, text: "Impeccable service, stunning ambiance, and flavors I'll never forget." },
    { name: "Emma Wilson", rating: 5, text: "Celebrated my anniversary here — they made it magical. Thank you!" }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Guest <span className="text-red-600">Love</span>
          </h2>
          <p className="text-xl text-gray-300">4.9/5 from 500+ happy diners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-red-600/50 transition"
            >
              <div className="flex mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 text-lg italic mb-6">"{r.text}"</p>
              <p className="text-white font-semibold">- {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}