import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left Text */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-amber-800 leading-tight">
              Discover the New <br />
              <span className="text-amber-600">FabriQ Collection</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Redefine your style with FabriQ — elegance, confidence, and
              comfort stitched together for every season.
            </p>
            <button className="px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-full font-medium transition-all duration-300 shadow-md">
              Explore Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1618354691398-21d4bb1a2c2b"
              alt="Model showcase"
              className="rounded-3xl shadow-2xl object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto mt-20 px-6 sm:px-10 lg:px-16">
        <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">
          Featured Styles
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
          ].map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img}
                alt={`Style ${i + 1}`}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-amber-900/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  Collection {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
