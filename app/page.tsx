"use client";

import { useState } from "react";
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
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------------- SLIDER ---------------- */

type Slide = {
  id: number;
  image: string;
};

const slides: Slide[] = [
  { id: 1, image: "/images/interior design.png" },
  { id: 2, image: "/images/interior design (1).png" },
  { id: 3, image: "/images/interior design (2).png" },
  { id: 4, image: "/images/interior design (3).png" },
];

const groupSlides = (arr: Slide[], size = 2): Slide[][] => {
  const result: Slide[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const FancySlider = () => {
  const grouped = groupSlides(slides, 2);
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p === 0 ? grouped.length - 1 : p - 1));

  const next = () =>
    setActive((p) => (p === grouped.length - 1 ? 0 : p + 1));

  return (
  <div className="relative w-full bg-white py-10 overflow-hidden">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {grouped.map((group, i) => (
          <div
            key={i}
            className="min-w-full flex gap-4 justify-center px-6 md:px-12"
          >
            {group.map((slide) => (
              <div
                key={slide.id}
                className="w-[42%] h-[140px] sm:h-[180px] md:h-[220px] rounded-2xl overflow-hidden border border-zinc-800"
              >
                <img
                  src={slide.image}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
      >
        <ChevronRight size={18} />
      </button>

      <div className="flex justify-center mt-5 gap-2">
        {grouped.map((_, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`cursor-pointer rounded-full transition-all ${
              i === active ? "w-5 h-2 bg-orange-500" : "w-2 h-2 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ---------------- PAGE ---------------- */

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

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Search, compare, save
              <br />
              Find your next deal today
            </h1>

            <p className="mt-4 text-gray-400 max-w-md">
              Compare prices on millions of products instantly.
            </p>

            {/* Rounded Search Bar */}
            <div className="mt-6 bg-white rounded-2xl p-2 flex items-center max-w-lg">
              <Smartphone className="w-5 h-5 text-gray-500 ml-3" />

              <input
                className="flex-1 px-3 py-3 text-black outline-none bg-transparent"
                placeholder="What are you looking for today?"
              />

              <button className="bg-black text-white px-5 py-3 rounded-xl">
                →
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
              className="w-[300px] md:w-[340px] rounded-2xl border border-zinc-800"
              alt="hero"
            />
          </div>
        </div>
      </section>

    {/* CATEGORY (SAME AS HERO SEARCH STYLE) */}
<section className="bg-black py-6">
  <div className="max-w-6xl mx-auto px-6">

    <div className="bg-white rounded-2xl px-4 py-3 overflow-x-auto no-scrollbar">
      
      <div className="flex items-center gap-8 min-w-max">

        {categories.map((cat, i) => {
          const Icon = cat.icon;

          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[70px] text-center"
            >
              <Icon className="w-5 h-5 text-black" />

              <span className="text-xs mt-2 text-black">
                {cat.name}
              </span>
            </div>
          );

        })}

      </div>
    </div>

  </div>
</section>

      {/* SLIDER */}
      <FancySlider />

    </div>
  );
}