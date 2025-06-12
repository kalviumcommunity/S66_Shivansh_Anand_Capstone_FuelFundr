import React from "react";
import ProgressBar from "./ProgressBar";

const BetaCampaign = () => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Startup Beta: Sustainable Fashion for Everyone
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-6">
            Eco-friendly clothing made locally, styled for you.
          </p>
          <div className="w-full h-64 sm:h-96 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-lg">
              Placeholder Image/Video
            </span>
          </div>
        </section>

        {/* Campaign Story */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Our Story
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            Startup Beta is a fashion brand using 80% upcycled fabrics to create
            affordable, trendy clothing. We reduce textile waste and support
            local artisans with every piece.
          </p>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            Inspired by global travels, our founder started Beta to make
            sustainable fashion inclusive. With $20K in pre-orders, we’re ready
            to scale production.
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Our vision: Make eco-fashion the norm. Back us to dress the world
            sustainably!
          </p>
        </section>

        {/* Funding Progress */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Funding Progress
          </h2>
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
            <ProgressBar percentage={60} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  $45,000
                </p>
                <p className="text-sm text-gray-400">Raised of $75,000 goal</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  300
                </p>
                <p className="text-sm text-gray-400">Backers</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  20
                </p>
                <p className="text-sm text-gray-400">Days to go</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Tiers */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Rewards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition">
              <h3 className="text-lg font-semibold text-white mb-2">$25</h3>
              <p className="text-sm text-gray-400 mb-2">
                Thank-you postcard + 10% off first purchase.
              </p>
              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
                Pledge $25
              </button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition">
              <h3 className="text-lg font-semibold text-white mb-2">$75</h3>
              <p className="text-sm text-gray-400 mb-2">
                Limited-edition T-shirt or tote bag.
              </p>
              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
                Pledge $75
              </button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition">
              <h3 className="text-lg font-semibold text-white mb-2">$200</h3>
              <p className="text-sm text-gray-400 mb-2">
                Full outfit + name in Backers Wall.
              </p>
              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
                Pledge $200
              </button>
            </div>
          </div>
        </section>

        {/* Creator Bio */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Meet the Team
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-sm">Avatar</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Beta Founders
              </h3>
              <p className="text-sm text-gray-400">
                A designer and artisans passionate about sustainability.
                Featured in Vogue’s Eco List, with partnerships in local
                boutiques.
              </p>
            </div>
          </div>
        </section>

        {/* Updates/FAQ */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Updates & FAQ
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Update #1: New Supplier Secured
              </h3>
              <p className="text-sm text-gray-400">
                We’ve partnered with a top upcycled fabric supplier. Rewards
                ship Q3 2026.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">FAQ</h3>
              <p className="text-sm text-gray-400 mb-2">
                <strong>What sizes?</strong> XS–3XL.
              </p>
              <p className="text-sm text-gray-400">
                <strong>When will rewards ship?</strong> Q3 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center mb-8 sm:mb-12">
          <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition text-lg font-semibold">
            Back This Project
          </button>
        </section>
      </div>
    </div>
  );
};

export default BetaCampaign;
