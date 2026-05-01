'use client';

import {
  Home,
  Trees,
  Baby,
  Gamepad2,
  Smartphone,
  Shirt,
  Car,
  Bike,
  Sparkles,
  Wrench
} from "lucide-react";

export default function HomePage() {
  const categories = [
    { name: "Home", icon: Home },
    { name: "Garden", icon: Trees },
    { name: "Kids", icon: Baby },
    { name: "Toys", icon: Gamepad2 },
    { name: "Electronics", icon: Smartphone },
    { name: "Clothing", icon: Shirt },
    { name: "Auto", icon: Car },
    { name: "Sport", icon: Bike },
    { name: "Beauty", icon: Sparkles },
    { name: "DIY", icon: Wrench },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO (slightly compact) */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Search, compare, save
              <br />
              Find your next deal today
            </h1>

            <p className="mt-4 text-gray-300 max-w-md">
              At PriceRunner you can compare prices on millions of products from thousands of shops
            </p>

            {/* SEARCH */}
            <div className="mt-6 flex items-center bg-white rounded-full overflow-hidden max-w-lg shadow-sm">
              <div className="pl-4">
                <Smartphone className="w-5 h-5 text-gray-500" />
              </div>

              <input
                className="flex-1 px-3 py-3 text-black outline-none"
                placeholder="What are you looking for today?"
              />

              <button className="bg-black text-white px-5 py-2 rounded-full mr-1">
                →
              </button>
            </div>
          </div>

          {/* RIGHT */}
       <div className="flex justify-center md:justify-end">
  <img
    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
    className="w-[300px] md:w-[340px] rounded-2xl border border-zinc-800"
    alt="hero"
  />
</div>

        </div>
      </section>

      {/* CATEGORY ROW (unchanged clean UI) */}
      <div className="bg-black text-black py-5">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white border shadow-sm rounded-full px-6 py-3 overflow-x-auto no-scrollbar">

            <div className="flex gap-6">

              {categories.map((cat, i) => {
                const Icon = cat.icon;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center min-w-[85px] cursor-pointer"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 border">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-xs mt-2 text-gray-700">
                      {cat.name}
                    </span>
                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}