'use client';


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section - Full Black Background */}
      <section className="pt-20 pb-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Search, compare,<br />
                <span className="text-orange-500">save</span>
              </h1>

              <p className="text-4xl md:text-5xl font-medium text-gray-300">
                Find your next deal today
              </p>

              <p className="text-xl text-gray-400 max-w-lg">
                Bei idealo vergleichst du Preise von Millionen Produkten 
                aus tausenden Online-Shops und findest das beste Angebot.
              </p>

              {/* Search Bar */}
              <div className="mt-10 max-w-2xl">
                <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-2 flex items-center">
                  <input
                    type="text"
                    placeholder="Wonach suchst du heute?"
                    className="flex-1 bg-transparent px-6 py-5 text-lg placeholder:text-gray-500 focus:outline-none"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-black font-semibold px-10 py-5 rounded-xl text-lg">
                    Suchen
                  </button>
                </div>
              </div>

              <p className="text-gray-500 text-lg">
                Über 8 Millionen Produkte • Mehr als 4.900 Shops
              </p>
            </div>

            {/* Right Side - Phone Image */}
            <div className="flex justify-center md:justify-end pt-10 md:pt-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=650" 
                  alt="Smartphone with product search"
                  className="w-full max-w-md rounded-3xl shadow-2xl border border-zinc-800"
                />
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-orange-500/10 blur-3xl rounded-[4rem] -z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex gap-10 overflow-x-auto pb-4 scrollbar-hide">
            {[
              "Elektronik", "Mode & Kleidung", "Haushalt", "Sport & Freizeit",
              "Auto & Motorrad", "Garten", "Spielzeug", "Beauty & Pflege",
              "Baumarkt & DIY", "Baby & Kind"
            ].map((cat, i) => (
              <a 
                key={i}
                href="#" 
                className="text-gray-300 hover:text-orange-400 whitespace-nowrap font-medium transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}