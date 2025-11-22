// src/pages/Reservation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Calendar, Clock, Users, Phone, Mail, MapPin, Sparkles, Utensils, ChevronDown } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: send to backend or booking system
    alert(`Thank you, ${formData.name}! Your royal dining experience has been requested. We will confirm shortly. 🔥`);
    console.log('Reservation:', formData);
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2070&q=90')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-orange-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-transparent to-red-900/40"></div>

        <div className="relative text-center px-6 z-10">
          <h1 className="text-7xl md:text-9xl font-bold text-amber-300 mb-6 drop-shadow-2xl">
            Reserve Your Throne
          </h1>
          <p className="text-4xl md:text-6xl text-white font-medium tracking-wider mb-4">
            An Evening Awaits
          </p>
          <p className="text-2xl text-amber-200 italic max-w-4xl mx-auto">
            Step into the royal kitchens of India — where every seat is a privilege
          </p>

          <div className="flex justify-center gap-8 mt-12">
            <Flame className="w-16 h-16 text-orange-500 animate-pulse" />
            <Sparkles className="w-14 h-14 text-yellow-400 animate-pulse delay-300" />
            <Utensils className="w-16 h-16 text-amber-400 animate-pulse delay-700" />
          </div>

          <ChevronDown className="w-12 h-12 text-amber-400 mx-auto mt-20 animate-bounce" />
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-amber-300 mb-6">
              Book Your Royal Experience
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Secure your place at our table — where tradition is served with reverence
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-black/50 border border-amber-600/30 rounded-3xl p-12 shadow-2xl shadow-orange-900/30">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <label className="flex items-center gap-3 text-amber-300 text-xl mb-3">
                  <Users className="w-6 h-6" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-gray-900/70 border border-amber-700/50 rounded-xl text-white text-lg focus:border-amber-500 focus:outline-none transition"
                  placeholder="Your esteemed name"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 text-amber-300 text-xl mb-3">
                  <Mail className="w-6 h-6" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-gray-900/70 border border-amber-700/50 rounded-xl text-white text-lg focus:border-amber-500 focus:outline-none transition"
                  placeholder="yourname@domain.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 text-amber-300 text-xl mb-3">
                  <Phone className="w-6 h-6" /> Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-gray-900/70 border border-amber-700/50 rounded-xl text-white text-lg focus:border-amber-500 focus:outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <label className="flex items-center gap-3 text-amber-300 text-xl mb-3">
                  <Calendar className="w-6 h-6" /> Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-6 py-5 bg-gray-900/70 border border-amber-700/50 rounded-xl text-white text-lg focus:border-amber-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 text-amber-300 text-xl mb-3">
                  <Clock className="w-6 h-6" /> Time
                </label>
                <select
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-gray-900/70 border border-amber-700/50 rounded-xl text-white text-lg focus:border-amber-500 focus:outline-none transition"
                >
                  <option value="">Select preferred time</option>
                  <option value="18:00">6:00 PM - Early Evening</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM - Prime Hour</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="22:00">10:00 PM - Late Seating</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-3 text-amber-300 text-xl mb-3">
                  <Users className="w-6 h-6" /> Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-gray-900/70 border border-amber-700/50 rounded-xl text-white text-lg focus:border-amber-500 focus:outline-none transition"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Esteemed Guest' : 'Honored Guests'}</option>
                  ))}
                  <option value="10+">10+ (Please call us)</option>
                </select>
              </div>
            </div>

            {/* Full Width */}
            <div className="md:col-span-2">
              <label className="flex items-center gap-3 text-amber-300 text-xl mb-3">
                <Sparkles className="w-6 h-6" /> Special Requests (Optional)
              </label>
              <textarea
                name="specialRequest"
                rows="4"
                value={formData.specialRequest}
                onChange={handleChange}
                className="w-full px-6 py-5 bg-gray-900/70 border border-amber-700/50 rounded-xl text-white text-lg focus:border-amber-500 focus:outline-none transition resize-none"
                placeholder="Anniversary • Birthday • Dietary preferences • Window seating • Anything to make your evening more memorable..."
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-8">
              <button
                type="submit"
                className="inline-flex items-center gap-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-24 py-8 rounded-full text-3xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition duration-300"
              >
                <Flame className="w-10 h-10 animate-pulse" />
                Confirm My Royal Reservation
                <Flame className="w-10 h-10 animate-pulse" />
              </button>
            </div>
          </form>

          <div className="mt-16 text-center">
            <p className="text-amber-300 text-xl italic">
              “A seat at LPI Food is not just reserved — it is honored.”
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-900/30 via-black to-red-900/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <MapPin className="w-16 h-16 text-amber-400 mx-auto" />
            <h3 className="text-3xl font-bold text-amber-300">Visit Us</h3>
            <p className="text-gray-300 text-lg">
              42 Royal Heritage Lane<br />
              Mumbai, Maharashtra 400001<br />
              India
            </p>
          </div>

          <div className="space-y-4">
            <Clock className="w-16 h-16 text-amber-400 mx-auto" />
            <h3 className="text-3xl font-bold text-amber-300">Hours</h3>
            <p className="text-gray-300 text-lg">
              Dinner Only<br />
              Tuesday – Sunday<br />
              6:00 PM – 11:00 PM<br />
              <span className="text-amber-400">(Closed Mondays)</span>
            </p>
          </div>

          <div className="space-y-4">
            <Phone className="w-16 h-16 text-amber-400 mx-auto" />
            <h3 className="text-3xl font-bold text-amber-300">Contact</h3>
            <p className="text-gray-300 text-lg">
              <a href="tel:+917505266931" className="text-amber-400 hover:text-amber-300">+91 75052 66931</a><br />
              <a href="mailto:royal@lpi.food" className="text-amber-400 hover:text-amber-300">royal@lpi.food</a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-amber-300 mb-8">
            We Await Your Arrival
          </h2>
          <p className="text-3xl text-gray-200 mb-12">
            The fire is lit. The spices are singing.<br />
            Your throne at LPI Food is ready.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-4 text-amber-400 hover:text-amber-300 text-2xl uppercase tracking-wider font-medium"
          >
            <Sparkles className="w-8 h-8" />
            Return Home
            <Sparkles className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </>
  );
}