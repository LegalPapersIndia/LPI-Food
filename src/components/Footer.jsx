// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Flame
} from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Our Chefs", path: "/chefs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com/lpifood" },
    { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com/lpifood" },
    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com/lpifood" },
    { icon: <Youtube className="w-6 h-6" />, url: "https://youtube.com/lpifood" }
  ];

  return (
    <footer className="bg-black border-t border-amber-900/30 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo & Tagline */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-bold text-amber-300 tracking-tight">
              LPI<span className="text-orange-600"> Food</span>
            </h2>
            <p className="text-amber-100 text-lg mt-2 font-medium italic">
              Royal Indian Fine Dining
            </p>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-xs text-lg">
            Where every dish is a celebration of India’s 5000-year-old culinary heritage, crafted by master chefs and served with royal hospitality.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-600 transition-all duration-500 group shadow-lg hover:shadow-orange-600/50 border border-amber-800/50"
              >
                <div className="text-amber-300 group-hover:text-white transition">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-3xl font-bold text-amber-300 mb-8">Explore</h3>
          <ul className="space-y-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-amber-400 text-lg font-medium transition-all duration-300 flex items-center gap-3 group"
                >
                  <span className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all group-hover:w-8"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit Us */}
        <div>
          <h3 className="text-3xl font-bold text-amber-300 mb-8">Visit Us</h3>
          <div className="space-y-6 text-gray-300 text-lg">
            <div className="flex items-start gap-4">
              <MapPin className="w-7 h-7 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <p>F-2, Sector 8</p>
                <p>Noida, Uttar Pradesh</p>
                <p className="text-amber-400 font-medium">India 201301</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-7 h-7 text-orange-500" />
              <p> <a href="tel:+917505266931">+91 750 526 6931</a></p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-7 h-7 text-orange-500" />
              <p>hello@lpifood.com</p>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-7 h-7 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <p>Lunch: 12:00 PM – 3:00 PM</p>
                <p>Dinner: 6:00 PM – 11:00 PM</p>
                <p className="text-amber-400 font-semibold mt-2">Open Daily</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reserve CTA */}
        <div>
          <h3 className="text-3xl font-bold text-amber-300 mb-8">Reserve Your Table</h3>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Experience the royal treatment. Book your seat in culinary history.
          </p>
          <Link
            to="/reservation"
            className="group inline-flex items-center gap-5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-7 rounded-full text-2xl font-bold uppercase tracking-wider shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-orange-500/50"
          >
            <Flame className="w-9 h-9 group-hover:animate-pulse" />
            Book Now
            <Flame className="w-9 h-9 group-hover:animate-pulse" />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 pt-10 border-t border-amber-900/30 text-center">
        <p className="text-gray-500 text-sm md:text-base">
          © 2025 <span className="text-amber-400 font-semibold"> <a href="https://www.legalpapersindia.com/">LPI Food</a></span> • 
          Royal Indian Fine Dining. All rights reserved. 
          <span className="text-amber-300"> Crafted with passion in India</span>
        </p>
      </div>
    </footer>
  );
}