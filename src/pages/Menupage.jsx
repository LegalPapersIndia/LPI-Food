// src/pages/Menupage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Coffee, CakeSlice, Wine, Flame, Leaf, Sparkles } from 'lucide-react';

export default function Menupage() {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuData = {
    starters: {
      title: "Starters",
      subtitle: "From the Tandoor & Tawaa",
      icon: <Flame className="w-8 h-8" />,
      items: [
        { name: "Amritsari Paneer Tikka", desc: "Cottage cheese marinated in hung curd, kasuri methi & ajwain, charred in tandoor", price: "₹650", popular: true, veg: true },
        { name: "Galouti Kebab", desc: "Ultra-soft Awadhi lamb kebabs made with 32 spices, served with ulte tawa paratha", price: "₹950", signature: true },
        { name: "Tandoori Prawns", desc: "King prawns in ajwain-tomato marinade, cooked in clay oven", price: "₹1,200" },
        { name: "Dahi Ke Kebab", desc: "Hung curd & cheese patties, crisp-fried, served with mint chutney", price: "₹580", veg: true },
        { name: "Murgh Malai Tikka", desc: "Cream & cheese marinated chicken, mildly spiced, charcoal smoked", price: "₹780" },
      ]
    },
    mains: {
      title: "Main Courses",
      subtitle: "Royal Curries & Dum-Pukht Biryanis",
      icon: <Utensils className="w-8 h-8" />,
      items: [
        { name: "Butter Chicken", desc: "Old Delhi style tandoori chicken simmered in silky tomato-cashew gravy", price: "₹850", popular: true },
        { name: "Kashmiri Rogan Josh", desc: "Slow-cooked lamb in aromatic fennel & dry ginger curry", price: "₹1,100" },
        { name: "Dal Makhani", desc: "24-hour slow-cooked black lentils & kidney beans with butter & cream", price: "₹680", veg: true },
        { name: "Hyderabadi Chicken Dum Biryani", desc: "Layered basmati with saffron, fried onions & mint, sealed and slow-cooked", price: "₹950", signature: true },
        { name: "Awadhi Mutton Biryani", desc: "Lucknow-style dum biryani infused with rose water & kewra", price: "₹1,200" },
        { name: "Paneer Lababdar", desc: "Paneer cubes in rich onion-tomato-cashew gravy with kasuri methi", price: "₹750", veg: true },
      ]
    },
    indianbreads: {
      title: "Tandoori Breads",
      subtitle: "Handcrafted from the Clay Oven",
      icon: <Sparkles className="w-8 h-8" />,
      items: [
        { name: "Naan – Butter / Garlic / Cheese", price: "₹120 - ₹180" },
        { name: "Laccha Paratha", desc: "Layered whole-wheat bread finished with ghee", price: "₹150" },
        { name: "Missi Roti", desc: "Gram flour & spice-infused bread", price: "₹130" },
        { name: "Roomali Roti", desc: "Paper-thin hand-tossed bread", price: "₹140" },
        { name: "Tandoori Roti", desc: "Plain or butter", price: "₹90" },
      ]
    },
    desserts: {
      title: "Sweet Endings",
      subtitle: "Traditional Indian Desserts",
      icon: <CakeSlice className="w-8 h-8" />,
      items: [
        { name: "Gulab Jamun", desc: "Warm milk-solid dumplings soaked in cardamom-rose syrup", price: "₹380" },
        { name: "Rasmalai", desc: "Soft paneer patties in saffron-flavored thickened milk", price: "₹420", popular: true, veg: true },
        { name: "Kulfi Falooda", desc: "Pistachio & malai kulfi with vermicelli & rose syrup", price: "₹450" },
        { name: "Gajar Ka Halwa", desc: "Slow-cooked carrot pudding with khoya & dry fruits", price: "₹480" },
        { name: "Moong Dal Halwa", desc: "Rich lentil pudding roasted in ghee with almonds", price: "₹520" },
      ]
    },
    beverages: {
      title: "Beverages",
      subtitle: "Traditional Indian Refreshers",
      icon: <Coffee className="w-8 h-8" />,
      items: [
        { name: "Masala Chai", desc: "Spiced Indian tea with ginger, cardamom & cloves", price: "₹180" },
        { name: "Lassi – Sweet / Salted / Mango", price: "₹220 - ₹280" },
        { name: "Thandai (Seasonal)", desc: "Chilled almond milk with saffron & rose", price: "₹350" },
        { name: "Jaljeera", desc: "Cumin & mint digestive cooler", price: "₹200" },
        { name: "Fresh Lime Soda", desc: "Sweet or salted", price: "₹180" },
      ]
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606491956689-2ea612773dd2?w=2070&q=90')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-orange-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-red-900/30"></div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-bold text-amber-300 mb-8 drop-shadow-2xl leading-tight">
              The Menu
            </h1>
            <p className="text-4xl md:text-6xl text-white font-medium tracking-wider mb-6">
              Royal Indian Fine Dining
            </p>
            <p className="text-2xl text-amber-200 italic font-light">
              A celebration of India’s timeless culinary heritage
            </p>

            <div className="flex justify-center gap-10 mt-12">
              <Flame className="w-14 h-14 text-orange-500 animate-pulse" />
              <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse delay-300" />
              <Utensils className="w-14 h-14 text-amber-400 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {Object.entries(menuData).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`group flex flex-col items-center gap-3 px-10 py-6 rounded-3xl transition-all duration-500 shadow-2xl ${
                  activeCategory === key
                    ? 'bg-gradient-to-br from-orange-600 to-red-700 text-white scale-105 shadow-orange-500/50'
                    : 'bg-black/70 text-gray-400 hover:text-amber-300 hover:bg-orange-900/30 border border-amber-800/40'
                }`}
              >
                <div className={`p-4 rounded-full ${activeCategory === key ? 'bg-white/20' : 'bg-amber-900/30'} group-hover:bg-amber-800/50 transition`}>
                  {cat.icon}
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold">{cat.title}</div>
                  <div className="text-sm opacity-80">{cat.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {menuData[activeCategory].items.map((item, i) => (
              <div
                key={i}
                className="group relative bg-black/60 backdrop-blur-md border border-amber-900/40 rounded-3xl p-10 hover:border-orange-600 hover:shadow-2xl hover:shadow-orange-600/30 transition-all duration-700"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-600/20 to-transparent rounded-bl-3xl"></div>

                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-amber-300 group-hover:text-white transition">
                    {item.name}
                  </h3>
                  <span className="text-4xl font-bold text-orange-500">{item.price}</span>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed italic font-light">
                  {item.desc}
                </p>

                <div className="flex gap-3 mt-6">
                  {item.popular && <span className="px-4 py-2 bg-amber-600 text-white text-sm font-bold rounded-full animate-pulse">BESTSELLER</span>}
                  {item.signature && <span className="px-4 py-2 bg-red-700 text-white text-sm font-bold rounded-full">CHEF'S SPECIAL</span>}
                  {item.veg && <span className="px-4 py-2 bg-green-700 text-white text-sm font-bold rounded-full flex items-center gap-2"><Leaf className="w-4 h-4" /> PURE VEG</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-24 text-center bg-gradient-to-r from-orange-900/40 via-black to-red-900/40 rounded-3xl p-16 border border-amber-700/50">
            <h2 className="text-5xl md:text-7xl font-bold text-amber-300 mb-8">
              Join Us for a Royal Feast
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto">
              All dishes prepared fresh • Jain options available • Please inform us of any allergies
            </p>

            <Link
              to="/reservation"
              className="inline-flex items-center gap-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-20 py-8 rounded-full text-3xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <Flame className="w-10 h-10" />
              Reserve Your Table
              <Flame className="w-10 h-10" />
            </Link>

            <p className="text-amber-400 text-xl mt-10 italic">
              ~ With warm hospitality, Team LPI Food
            </p>
          </div>
        </div>
      </section>
    </>
  );
}