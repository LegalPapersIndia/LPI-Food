// src/pages/Chefpage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Flame, Star, Utensils, Sparkles } from 'lucide-react';

const chefs = [
  {
    name: "Sanjeev Kapoor",
    role: "Celebrity Chef • Culinary Ambassador of India",
    expertise: "Modern Indian • Global Fusion • TV Icon",
    signatureDish: "Shaam Savera",
    dishDesc: "Spinach kofta stuffed with paneer in silky tomato gravy — his timeless masterpiece",
    achievements: [
      "Padma Shri Award (2017)",
      "Host of Khana Khazana – Asia’s longest-running food show",
      "150+ bestselling cookbooks",
      "Founder – FoodFood Channel & Wonderchef"
    ],
    quote: "Indian food is not just about spice — it’s about soul.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sanjeev_Kapoor_in_2023.jpg"
  },
  {
    name: "Vikas Khanna",
    role: "Michelin-Starred Chef • Poet • Humanitarian",
    expertise: "Progressive Indian • Awadhi Royal Cuisine",
    signatureDish: "Saffron-Infused Lamb Shank",
    dishDesc: "24-hour slow-cooked lamb in saffron, rose & kewra — served at Junoon, NYC",
    achievements: [
      "Michelin Star – Junoon, New York",
      "Holy Kitchens Project – Returned sacred soil from 108 countries",
      "Author of 37 books including 'Utsav'",
      "Forbes Top 10 Most Influential Chefs"
    ],
    quote: "Every dish tells a story of our motherland.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Vikas_Khanna_in_2024.jpg"
  },
  {
    name: "Ranveer Brar",
    role: "Culinary Storyteller • Heritage Revivalist",
    expertise: "Lost Recipes • Kashmiri • Lucknowi • Elevated Street Food",
    signatureDish: "Kashmiri Rogan Josh with Rista",
    dishDesc: "Hand-pounded lamb meatballs in royal saffron-fennel gravy",
    achievements: [
      "Youngest Executive Chef of India at 25",
      "Judge – MasterChef India (10+ seasons)",
      "Revived over 100 forgotten Indian recipes",
      "Host – Himalayan Heritage & Ranveer on the Road"
    ],
    quote: "I don’t cook food. I cook memories.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ranveer_Brar_in_2024.jpg"
  },
  {
    name: "Garima Arora",
    role: "India’s First Female Michelin-Starred Chef",
    expertise: "Modern Thai-Indian Fusion • Progressive Indian",
    signatureDish: "Marigold Curry",
    dishDesc: "Fermented marigold petals with coconut, chilli & heirloom rice — poetic & bold",
    achievements: [
      "Michelin Star – Gaa, Bangkok (2019)",
      "Asia’s Best Female Chef 2019",
      "Trained under Gaggan Anand & René Redzepi (Noma)",
      "Only Indian woman with a Michelin star"
    ],
    quote: "Indian ingredients deserve the world’s stage.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Garima_Arora_chef.jpg/800px-Garima_Arora_chef.jpg"
  }
];

export default function Chefpage() {
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
              Our Master Chefs
            </h1>
            <p className="text-4xl md:text-6xl text-white font-medium tracking-wider mb-6">
              Legends of Indian Culinary Excellence
            </p>
            <p className="text-2xl text-amber-200 italic font-light">
              Where tradition meets artistry on every plate
            </p>

            <div className="flex justify-center gap-10 mt-12">
              <Flame className="w-14 h-14 text-orange-500 animate-pulse" />
              <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse delay-300" />
              <Utensils className="w-14 h-14 text-amber-400 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Grid */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto space-y-32">

          {chefs.map((chef, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Chef Portrait */}
              <div className="flex-1 relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={chef.img}
                    alt={chef.name}
                    className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                </div>
                <div className="absolute inset-0 rounded-3xl border-8 border-orange-600/30 pointer-events-none"></div>
              </div>

              {/* Chef Details */}
              <div className="flex-1 text-center lg:text-left space-y-10">
                <div>
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-3">
                    {chef.name}
                  </h2>
                  <p className="text-2xl md:text-3xl text-orange-500 font-semibold tracking-wide">
                    {chef.role}
                  </p>
                </div>

                <div className="space-y-8 text-lg text-gray-300">
                  <p className="text-xl italic text-amber-200">
                    <strong>Expertise:</strong> {chef.expertise}
                  </p>

                  {/* Signature Dish */}
                  <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-2xl p-8 border border-amber-700/50">
                    <h3 className="text-3xl font-bold text-amber-300 mb-4 flex items-center gap-4">
                      <Flame className="w-10 h-10 text-orange-500" />
                      Signature Creation
                    </h3>
                    <p className="text-4xl font-bold text-white mb-3">{chef.signatureDish}</p>
                    <p className="text-lg italic text-gray-200 leading-relaxed">{chef.dishDesc}</p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-4">
                      <Award className="w-9 h-9" />
                      Honors & Achievements
                    </h4>
                    <ul className="space-y-4 text-left">
                      {chef.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-200 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl font-medium text-amber-200 italic border-l-4 border-orange-500 pl-8 py-6 bg-black/30 rounded-r-2xl">
                    “{chef.quote}”
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-900/50 via-red-900/40 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-amber-300 mb-8">
            Taste the Legacy
          </h2>
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Every dish at LPI Food is crafted under the guidance of these living legends — 
            a celebration of India’s 5000-year-old culinary heritage.
          </p>

          <Link
            to="/reservation"
            className="inline-flex items-center gap-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-20 py-8 rounded-full text-3xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <Flame className="w-10 h-10" />
            Reserve Your Royal Experience
            <Flame className="w-10 h-10" />
          </Link>

          <p className="text-amber-300 text-xl mt-12 italic font-light">
            ~ With deepest respect, Team LPI Food
          </p>
        </div>
      </section>
    </>
  );
}