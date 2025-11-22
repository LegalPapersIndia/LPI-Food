// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube,
  Flame, Leaf, Send, CheckCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', guests: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', date: '', guests: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2070&q=90&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-orange-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-red-900/30"></div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-bold text-amber-300 mb-8 drop-shadow-2xl leading-tight">
              Get in Touch
            </h1>
            <p className="text-4xl md:text-6xl text-white font-medium tracking-wider mb-6">
              We’d Love to Hear from You
            </p>
            <p className="text-2xl text-amber-200 italic font-light max-w-4xl mx-auto">
              Whether it’s a reservation, feedback, or just saying hello — your message means the world to us
            </p>

            <div className="flex justify-center gap-10 mt-12">
              <Flame className="w-14 h-14 text-orange-500 animate-pulse" />
              <Leaf className="w-12 h-12 text-emerald-400 animate-pulse delay-300" />
              <Flame className="w-14 h-14 text-orange-500 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Map + Form */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact Details + Map */}
          <div className="space-y-12">
            {/* Restaurant Info */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-amber-300 mb-10">
                Visit Us
              </h2>
              <div className="space-y-8 text-lg text-gray-300">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl">
                    <MapPin className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">LPI Food – Royal Indian Fine Dining</p>
                    <p className="mt-2">
                      F-2, Sector 8<br />
                      Noida, Uttar Pradesh<br />
                      India 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="p-4 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl">
                    <Phone className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xl font-medium text-white"> <a href="tel:+917505266931">+91 750 526 6931</a></p>
                    <p className="text-gray-400">Call for reservations & inquiries</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="p-4 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl">
                    <Mail className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xl font-medium text-white">hello@lpifood.com</p>
                    <p className="text-gray-400">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl">
                    <Clock className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">Opening Hours</p>
                    <p>Lunch: 12:00 PM – 3:00 PM</p>
                    <p>Dinner: 6:00 PM – 11:00 PM</p>
                    <p className="text-amber-400 font-semibold mt-2">Open Daily</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-amber-300 mb-6">Find Us Here</h3>
              <div className="rounded-3xl overflow-hidden border-4 border-amber-800/50 shadow-2xl shadow-orange-600/20">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.3033497832166!2d77.31967657533406!3d28.595428075685028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2290a24adc2aa39f%3A0x6393f050e681d51e!2sLegal%20Papers%20India!5e1!3m2!1sen!2sin!4v1763811705013!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LPI Food Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-3xl font-bold text-amber-300 mb-6">Follow Our Journey</h3>
              <div className="flex gap-5">
                {[
                  { icon: <Instagram className="w-7 h-7" />, label: "Instagram", url: "https://instagram.com/lpifood" },
                  { icon: <Facebook className="w-7 h-7" />, label: "Facebook", url: "https://facebook.com/lpifood" },
                  { icon: <Twitter className="w-7 h-7" />, label: "Twitter", url: "https://twitter.com/lpifood" },
                  { icon: <Youtube className="w-7 h-7" />, label: "YouTube", url: "https://youtube.com/lpifood" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-500 group shadow-lg hover:shadow-orange-600/50 border border-amber-800/50"
                  >
                    <div className="text-amber-300 group-hover:text-white transition">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-amber-300 mb-10">
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-3xl p-16 text-center border border-amber-700/50">
                <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                <h3 className="text-4xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-xl text-gray-300">We’ve received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-8 py-6 rounded-2xl bg-black/60 border border-amber-800/50 text-white placeholder-gray-500 text-lg focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-600/30 transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-8 py-6 rounded-2xl bg-black/60 border border-amber-800/50 text-white placeholder-gray-500 text-lg focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-600/30 transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-8 py-6 rounded-2xl bg-black/60 border border-amber-800/50 text-white placeholder-gray-500 text-lg focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-600/30 transition-all duration-300"
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-8 py-6 rounded-2xl bg-black/60 border border-amber-800/50 text-white text-lg focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-600/30 transition-all duration-300"
                  />
                </div>

                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Number of Guests"
                  min="1"
                  className="w-full px-8 py-6 rounded-2xl bg-black/60 border border-amber-800/50 text-white placeholder-gray-500 text-lg focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-600/30 transition-all duration-300"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Your Message (Optional)"
                  className="w-full px-8 py-6 rounded-2xl bg-black/60 border border-amber-800/50 text-white placeholder-gray-500 text-lg focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-600/30 transition-all duration-300 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-20 py-8 rounded-full text-2xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition-all duration-500"
                >
                  <Send className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  Send Message
                  <Send className="w-8 h-8 group-hover:-translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center bg-gradient-to-r from-orange-900/40 via-black to-red-900/40 rounded-3xl p-16 border border-amber-700/50">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-300 mb-8">
            Your Table Awaits
          </h2>
          <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto">
            Prefer to speak with us? Call +91 750 526 6931 or book instantly below
          </p>
          <Link
            to="/reservation"
            className="group inline-flex items-center gap-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-20 py-8 rounded-full text-3xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition duration-500"
          >
            <Flame className="w-10 h-10 group-hover:animate-pulse" />
            Reserve Now
            <Flame className="w-10 h-10 group-hover:animate-pulse" />
          </Link>
        </div>
      </section>
    </>
  );
}