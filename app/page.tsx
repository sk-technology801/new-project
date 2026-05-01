"use client";

import { useState, useEffect } from "react";
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

/* ---------------- SLIDES ---------------- */

type Slide = {
  id: number;
  image: string;
};

const slides: Slide[] = [
  { id: 1, image: "/images/bg.jpeg" },
  { id: 2, image: "/images/bg.jpeg" },
  { id: 3, image: "/images/bg.jpeg" },
  { id: 4, image: "/images/bg.jpeg" },
];

/* ---------------- SLIDER ---------------- */

const FancySlider = () => {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const getIndex = (i: number) => (i + total) % total;

  const leftIndex = getIndex(active - 1);
  const rightIndex = getIndex(active + 1);

  const prev = () => setActive((p) => getIndex(p - 1));
  const next = () => setActive((p) => getIndex(p + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => getIndex(p + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-16 overflow-hidden bg-[#1c1a16]">

      {/* SLIDER AREA */}
      <div className="relative flex items-center justify-center h-[260px]">

        {/* LEFT CARD */}
        <div
          onClick={prev}
          className="absolute cursor-pointer transition-all duration-500"
          style={{
            transform: "translateX(-300px) scale(0.85)",
            opacity: 0.6,
            zIndex: 5,
          }}
        >
          <div className="w-[260px] h-[170px] rounded-2xl overflow-hidden border border-zinc-700">
            <img
              src={slides[leftIndex].image}
              className="w-full h-full object-cover"
              alt="left"
            />
          </div>
        </div>

        {/* CENTER CARD */}
        <div
          className="absolute transition-all duration-500"
          style={{
            transform: "translateX(0px) scale(1.1)",
            zIndex: 10,
          }}
        >
          <div className="w-[380px] h-[240px] rounded-2xl overflow-hidden shadow-xl border border-zinc-700">
            <img
              src={slides[active].image}
              className="w-full h-full object-cover"
              alt="center"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          onClick={next}
          className="absolute cursor-pointer transition-all duration-500"
          style={{
            transform: "translateX(300px) scale(0.85)",
            opacity: 0.6,
            zIndex: 5,
          }}
        >
          <div className="w-[260px] h-[170px] rounded-2xl overflow-hidden border border-zinc-700">
            <img
              src={slides[rightIndex].image}
              className="w-full h-full object-cover"
              alt="right"
            />
          </div>
        </div>

      </div>

      {/* BUTTONS */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-zinc-900 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-zinc-900 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        <ChevronRight size={18} />
      </button>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`cursor-pointer rounded-full transition-all
              ${i === active ? "w-6 h-2 bg-white" : "w-2 h-2 bg-gray-600"}
            `}
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

            {/* SEARCH */}
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

      {/* CATEGORY */}
      <section className="bg-black py-6">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-2xl px-4 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-8 min-w-max">

              {categories.map((cat, i) => {
                const Icon = cat.icon;

                return (
                  <div key={i} className="flex flex-col items-center min-w-[70px]">
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