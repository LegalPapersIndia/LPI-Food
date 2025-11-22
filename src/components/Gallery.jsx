import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
  "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800",
  "https://images.unsplash.com/photo-1606890737304-1a63c1ed2f57?w=800",
  "https://images.unsplash.com/photo-1592861956122-eb0511c61394?w=800",
  "https://images.unsplash.com/photo-1515003197210-e0cd4f706c02?w=800"
];
    
export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-red-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300">Moments that taste like magic</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}