import React from 'react'
import { ChefHat, Clock, Users, Award, Coffee, Utensils, Wine, Cake } from 'lucide-react';

const Why = () => {

    const services = [
    {
      icon: <ChefHat className="w-10 h-10" />,
      title: "Master Chefs",
      desc: "Our award-winning chefs bring decades of experience from Michelin-starred kitchens worldwide."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Open Daily",
      desc: "Lunch: 12PM - 3PM • Dinner: 6PM - 11PM • Weekend Brunch: 10AM - 4PM"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Private Events",
      desc: "Host your special occasions with us — birthdays, anniversaries, corporate dinners."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Fine Dining Experience",
      desc: "Rated 4.9/5 • Featured in Gourmet Magazine 2024 • Best Ambiance Award Winner"
    }
  ];
  return (
    <div>
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Why Choose <span className="text-red-600">LPI Food</span>?
            </h2>
            <p className="text-xl text-gray-300">Experience dining redefined</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-500 hover:transform hover:-translate-y-3"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 rounded-full mb-6 group-hover:bg-red-600/20 transition">
                  <div className="text-red-600 group-hover:scale-110 transition">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Why