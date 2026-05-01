'use client';

import React from 'react';
import { Heart, Clock, User } from 'lucide-react';

const IdealoHeader = () => {
  return (
    <header className="bg-[black] text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Side - Logo + Menu */}
        <div className="flex items-center gap-8">
         

          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold tracking-tight">idealo</span>
              <div className="w-6 h-0.5 bg-orange-500 ml-1 mt-1" />
            </div>
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-300 transition-colors">
            SHOPPING
          </a>
          <a href="#" className="text-orange-400 font-semibold border-b-2 border-orange-400 pb-1 transition-colors">
            FLUG
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            MAGAZIN
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-sm">
          {/* Sustainability */}
          <div className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer transition-colors">
            <div className="text-green-400">
            </div>
          </div>

          {/* Wishlist */}
          <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="hidden md:inline">Merkzettel</span>
          </a>

          {/* Price Checker */}
          <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
            <Clock className="w-5 h-5" />
          </a>

          {/* Login */}
          <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
            <User className="w-5 h-5" />
            <span className="hidden md:inline">Anmelden</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IdealoHeader;