// src/components/Chefs.jsx
import React from 'react';

const chefs = [
  {
    name: "Sanjeev Kapoor",
    role: "Celebrity Chef & Brand Ambassador",
    desc: "Padma Shri • Author of 150+ cookbooks • Host of Khana Khazana (10,000+ episodes) • Pioneer of Modern Indian Cuisine",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sanjeev_Kapoor_in_2023.jpg"
  },
  {
    name: "Vikas Khanna",
    role: "Michelin-Starred Chef",
    desc: "Michelin Star (Junoon, NYC) • Author • Filmmaker • Returned the 'Holy Sands' to India • Forbes 'Most Influential Chef'",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Vikas_Khanna_in_2024.jpg"
  },
  {
    name: "Ranveer Brar",
    role: "Culinary Director & Storyteller",
    desc: "Host of 15+ TV shows • Youngest Executive Chef in India at 25 • Judge on MasterChef India • Passionate about Indian heritage recipes",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ranveer_Brar_in_2024.jpg"
  }
];

export default function Chefs() {
  return (
    <section className="py-20 px-6 bg-gray-900 relative overflow-hidden" id="chefs">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-orange-500 text-9xl font-bold select-none">ॐ</div>
        <div className="absolute bottom-20 right-10 text-red-600 text-8xl font-bold select-none">नमः</div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header - Indian Touch */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            हमारे <span className="text-orange-500">महा-रसोइये</span>
            <br />
            <span className="text-4xl md:text-6xl text-amber-300">Masters of Indian Cuisine</span>
          </h2>
          <p className="text-2xl text-amber-200 font-medium">Guardians of India’s Culinary Heritage</p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {chefs.map((chef, i) => (
            <div
              key={i}
              className="group text-center transform transition-all duration-700 hover:scale-105"
            >
              {/* Chef Portrait with Golden Frame */}
              <div className="relative mx-auto mb-10">
                <div className="relative overflow-hidden rounded-full w-80 h-80 mx-auto shadow-2xl ring-8 ring-orange-600/30 ring-offset-8 ring-offset-black group-hover:ring-orange-500 transition-all duration-500">
                  <img
                    src={chef.img}
                    alt={chef.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70"></div>
                </div>

                {/* Traditional Namaste Icon */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-full shadow-2xl">
                  <span className="text-3xl">नमस्ते</span>
                </div>
              </div>

              {/* Chef Info */}
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wider">
                {chef.name}
              </h3>
              <p className="text-2xl text-orange-500 font-bold mb-4 tracking-wide">
                {chef.role}
              </p>
              <p className="text-lg text-amber-200 italic max-w-md mx-auto leading-relaxed px-4">
                {chef.desc}
              </p>

              {/* Decorative Divider */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                <span className="text-4xl text-amber-500">ॐ</span>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Quote */}
        <div className="text-center mt-20 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-3xl p-12 border border-amber-700/50">
          <p className="text-3xl md:text-4xl font-bold text-amber-300 italic">
            "अन्नं ब्रह्म – Food is Divine"
          </p>
          <p className="text-xl text-gray-300 mt-4">
            Every dish is a prayer, every flavor a blessing
          </p>
        </div>
      </div>
    </section>
  );
}