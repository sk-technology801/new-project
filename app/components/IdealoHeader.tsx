'use client';

import React from 'react';
import { Heart, Clock, User } from 'lucide-react';

const IdealoHeader = () => {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold tracking-tight">Nexsol..LLC</span>
            <div className="w-6 h-0.5 bg-orange-500 ml-1 mt-1" />
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="flex items-center gap-10 text-sm font-medium">
          <a href="#" className="relative hover:text-orange-400 transition-colors group">
            SHOPPING
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#" className="relative text-orange-400 font-semibold group">
            FLUG
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-400"></span>
          </a>

          <a href="#" className="relative hover:text-orange-400 transition-colors group">
            MAGAZIN
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-full"></span>
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-sm">

          {/* Wishlist */}
          <a href="#" className="flex items-center gap-1 hover:text-orange-400 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="hidden md:inline">Merkzettel</span>
          </a>

          {/* Price Checker */}
          <a href="#" className="flex items-center gap-1 hover:text-orange-400 transition-colors">
            <Clock className="w-5 h-5" />
          </a>

          {/* Login */}
          <a href="#" className="flex items-center gap-1 hover:text-orange-400 transition-colors">
            <User className="w-5 h-5" />
            <span className="hidden md:inline">Anmelden</span>
          </a>
        </div>

      </div>
    </header> 
    
  );
};

export default IdealoHeader;