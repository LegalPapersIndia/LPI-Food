// src/components/ServicesAndMenu.jsx
import React from 'react';
import { ChefHat, Clock, Users, Award, Utensils, Wine, CakeSlice } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesAndMenu() {

  const menuCategories = [
    {
      category: "Starters",
      icon: <Utensils className="w-6 h-6" />,
      items: [
        { name: "Amritsari Paneer Tikka", desc: "Cottage cheese marinated in hung curd, kasuri methi & ajwain, tandoor charred", price: "₹650", popular: true },
        { name: "Galouti Kebab (Lamb)", desc: "Lucknow’s legendary melt-in-mouth kebabs with 32 secret spices", price: "₹950", signature: true },
        { name: "Tandoori Prawns", desc: "Jumbo prawns in ajwain-tomato marinade, clay oven roasted", price: "₹1,200" },
        { name: "Dahi Ke Kebab", desc: "Hung curd & cheese patties, crisp fried with mint chutney", price: "₹580", veg: true },
        { name: "Murgh Malai Tikka", desc: "Cream & cheese marinated chicken, mild spices, charcoal smoked", price: "₹780" },
      ]
    },
    {
      category: "Main Course",
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: "Butter Chicken (Old Delhi Style)", desc: "Tandoori chicken tikka in silky tomato-cashew-butter gravy", price: "₹850", popular: true },
        { name: "Dal Makhani (24-Hour)", desc: "Black lentils slow-cooked overnight with butter & fresh cream", price: "₹680", veg: true },
        { name: "Rogan Josh Kashmiri", desc: "Tender lamb in aromatic fennel, dry ginger & ratan jot curry", price: "₹1,100" },
        { name: "Paneer Lababdar", desc: "Paneer cubes in rich onion-tomato-cashew gravy, finished with kasuri methi", price: "₹750", veg: true },
        { name: "Hyderabadi Chicken Dum Biryani", desc: "Fragrant basmati layered with chicken, saffron & mint, served with raita", price: "₹950" },
        { name: "Goan Fish Curry", desc: "Fresh pomfret in coconut-tamarind-red chilli curry, served with red rice", price: "₹1,050" },
      ]
    },
    {
      category: "Indian Breads",
      icon: <Utensils className="w-6 h-6" />,
      items: [
        { name: "Butter Naan / Garlic Naan", desc: "Leavened refined flour bread from tandoor", price: "₹120 – ₹180" },
        { name: "Laccha Paratha", desc: "Multi-layered whole wheat bread with ghee", price: "₹150" },
        { name: "Missi Roti", desc: "Gram flour bread with spices & herbs", price: "₹130" },
        { name: "Tandoori Roti", desc: "Whole wheat bread, plain or butter", price: "₹90" },
        { name: "Roomali Roti", desc: "Hand-tossed paper-thin bread", price: "₹140" },
      ]
    },
    {
      category: "Desserts",
      icon: <CakeSlice className="w-6 h-6" />,
      items: [
        { name: "Gulab Jamun (Hot)", desc: "Deep-fried milk dumplings in cardamom-rose syrup", price: "₹380" },
        { name: "Rasmalai", desc: "Soft paneer patties soaked in saffron-flavored thickened milk", price: "₹420", popular: true },
        { name: "Kulfi Falooda", desc: "Pistachio & malai kulfi with vermicelli, rose syrup & basil seeds", price: "₹450" },
        { name: "Gajar Ka Halwa (Winter)", desc: "Slow-cooked carrot pudding with khoya, nuts & cardamom", price: "₹480" },
        { name: "Moong Dal Halwa", desc: "Rich lentil dessert with pure ghee & almonds", price: "₹520" },
      ]
    },
    {
      category: "Beverages",
      icon: <Wine className="w-6 h-6" />,
      items: [
        { name: "Masala Chai", desc: "Traditional Indian spiced tea with ginger & cardamom", price: "₹180" },
        { name: "Lassi (Sweet / Salted / Mango)", desc: "Churned yogurt drink, refreshing & creamy", price: "₹220 – ₹280" },
        { name: "Jaljeera", desc: "Cumin, mint & tamarind digestive cooler", price: "₹200" },
        { name: "Thandai (Seasonal)", desc: "Chilled almond milk with saffron, rose & spices", price: "₹350" },
        { name: "Fresh Lime Soda", desc: "Sweet or salted – classic Indian refresher", price: "₹180" },
      ]
    }
  ];

  return (
    <>
      {/* Menu Section - Indian Theme */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-red-600">Menu</span>
            </h2>
            <p className="text-2xl text-amber-300 font-medium">
              स्वाद भारत का – Flavors of India
            </p>
            <p className="text-xl text-gray-300 mt-4">Crafted with tradition, served with love</p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {menuCategories.map((cat, index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm border border-amber-900/30 rounded-3xl overflow-hidden hover:border-orange-600/60 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-600/10"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 p-6 flex items-center gap-4">
                  <div className="text-white">{cat.icon}</div>
                  <h3 className="text-3xl font-bold text-white">{cat.category}</h3>
                </div>

                {/* Items */}
                <div className="p-8 space-y-8">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="group flex justify-between items-start border-b border-gray-800 pb-6 last:border-0 hover:border-orange-600/40 transition"
                    >
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition flex items-center gap-3">
                          {item.name}
                          {item.popular && <span className="text-xs bg-amber-600 text-white px-3 py-1 rounded-full font-bold">BESTSELLER</span>}
                          {item.signature && <span className="text-xs bg-red-700 text-white px-3 py-1 rounded-full font-bold">CHEF'S SPECIAL</span>}
                          {item.veg && <span className="text-xs bg-green-700 text-white px-3 py-1 rounded-full">VEG</span>}
                        </h4>
                        <p className="text-gray-400 mt-2 text-base leading-relaxed italic">
                          {item.desc}
                        </p>
                      </div>
                      <span className="text-2xl md:text-3xl font-bold text-orange-500 ml-6 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-3xl p-12 border border-orange-800/50">
            <p className="text-2xl text-amber-300 mb-8 font-medium">
              All dishes made fresh | Jain food available | Seasonal menu changes
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/reservation"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-14 py-6 rounded-full text-xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition duration-300"
              >
                Book Your Table
              </Link>
              <a
                href="/lpi-indian-menu.pdf"
                className="bg-transparent border-3 border-amber-500 text-amber-400 hover:bg-amber-500/20 px-14 py-6 rounded-full text-xl font-bold uppercase tracking-wider transition"
              >
                Download Full Menu (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}