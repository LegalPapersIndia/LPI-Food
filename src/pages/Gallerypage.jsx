// src/pages/Gallerypage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Utensils, Sparkles, Instagram, Camera } from 'lucide-react';

const galleryImages = [
  { category: "Royal Thali", img: "https://images.unsplash.com/photo-1628296550654-1c9a14e9c1ce?w=900&q=90" },
  { category: "Tandoor Flames", img: "https://images.unsplash.com/photo-1599481238640-4c128875a7f8?w=900&q=90" },
  { category: "Spice Symphony", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=900&q=90" },
  { category: "Dessert Dreams", img: "https://images.unsplash.com/photo-1563805042-7684c7f057f3?w=900&q=90" },
  { category: "Heritage Kitchen", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=90" },
  { category: "Diya & Decor", img: "https://images.unsplash.com/photo-1606890658317-8c8d874c9b76?w=900&q=90" },
  { category: "Street to Star", img: "https://images.unsplash.com/photo-1567335991483-0d2e7546bd02?w=900&q=90" },
  { category: "Mandap Dining", img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=900&q=90" },
  { category: "Saffron Stories", img: "https://images.unsplash.com/photo-1631518736734-93e77c8e3e8c?w=900&q=90" },
  { category: "Royal Service", img: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=900&q=90" },
  { category: "Live Counter", img: "https://images.unsplash.com/photo-1604382354936-07adb2acfa27?w=900&q=90" },
  { category: "Midnight Masala", img: "https://images.unsplash.com/photo-1625225230517-2f2c2df2db2d?w=900&q=90" }
];

export default function Gallerypage() {
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
          <div className="max-w-5xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-bold text-amber-300 mb-8 drop-shadow-2xl leading-tight">
              Gallery
            </h1>
            <p className="text-4xl md:text-6xl text-white font-medium tracking-wider mb-6">
              A Visual Journey Through Indian Flavors
            </p>
            <p className="text-2xl text-amber-200 italic font-light">
              Every frame tells a story of taste, tradition, and passion
            </p>

            <div className="flex justify-center gap-10 mt-12">
              <Camera className="w-12 h-12 text-amber-400 animate-pulse" />
              <Flame className="w-14 h-14 text-orange-500 animate-pulse delay-200" />
              <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 bg-gray-900 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-700 hover:scale-105 hover:shadow-orange-600/40"
              >
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8 w-full text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-amber-300 mb-2 drop-shadow-2xl">
                      {item.category}
                    </h3>
                    <p className="text-amber-100 text-sm font-medium tracking-wider opacity-90">
                      LPI Food • Est. 2025
                    </p>
                  </div>
                </div>

                {/* Golden Border on Hover */}
                <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-orange-500/70 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-900/50 via-red-900/40 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <Instagram className="w-20 h-20 text-amber-300" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-amber-300 mb-8">
            Share Your Moment
          </h2>
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Tag us <span className="text-amber-400 font-bold">@LPIFood</span> and be featured on our wall of memories
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/reservation"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-20 py-8 rounded-full text-2xl md:text-3xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <Flame className="w-10 h-10" />
              Reserve Your Table
              <Flame className="w-10 h-10" />
            </Link>
          </div>

          <p className="text-amber-300 text-xl mt-12 italic font-light">
            ~ With love from the LPI Food family
          </p>
        </div>
      </section>
    </>
  );
}