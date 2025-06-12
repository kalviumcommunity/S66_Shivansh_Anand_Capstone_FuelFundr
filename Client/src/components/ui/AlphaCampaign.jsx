import React from "react";
import ProgressBar from "./ProgressBar";

const AlphaCampaign = () => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Project Alpha: The Ultimate Smart Home Controller
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-6">
            Control your home with one tap—sustainable, sleek, and AI-powered.
          </p>
          <div className="w-full h-64 sm:h-96 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-lg">
              Placeholder Video/Image
            </span>
          </div>
        </section>

        {/* Campaign Story */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Our Story
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            Project Alpha is a compact device that integrates all your smart
            home systems—lights, security, thermostat—into one intuitive app.
            Powered by AI, it learns your habits to save energy and simplify
            your life.
          </p>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            We started in a garage, driven to make smart homes greener and more
            accessible. With 95% satisfaction from 100 beta testers, Alpha is
            ready to transform your home.
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Our vision: A smarter, sustainable future for every home. Join us to
            make it happen!
          </p>
        </section>

        {/* Funding Progress */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Funding Progress
          </h2>
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
            <ProgressBar percentage={70} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  $35,000
                </p>
                <p className="text-sm text-gray-400">Raised of $50,000 goal</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  500
                </p>
                <p className="text-sm text-gray-400">Backers</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  15
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
              <h3 className="text-lg font-semibold text-white mb-2">$50</h3>
              <p className="text-sm text-gray-400 mb-2">
                Early bird Alpha device (30% off MSRP) + thank-you email.
              </p>
              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
                Pledge $50
              </button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition">
              <h3 className="text-lg font-semibold text-white mb-2">$100</h3>
              <p className="text-sm text-gray-400 mb-2">
                Alpha device + exclusive app skin or color variant.
              </p>
              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
                Pledge $100
              </button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition">
              <h3 className="text-lg font-semibold text-white mb-2">$250</h3>
              <p className="text-sm text-gray-400 mb-2">
                Two Alpha devices + beta access to future updates.
              </p>
              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
                Pledge $250
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
                Alpha Innovators
              </h3>
              <p className="text-sm text-gray-400">
                A team of three IoT engineers with 10+ years of experience,
                previously at a leading tech startup. Featured in TechCrunch for
                our innovative prototypes.
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
                Update #1: Prototype v2 Completed
              </h3>
              <p className="text-sm text-gray-400">
                Our second prototype is ready and performs 20% better than v1.
                Shipping expected Q2 2026.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">FAQ</h3>
              <p className="text-sm text-gray-400 mb-2">
                <strong>When will it ship?</strong> Q2 2026.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Is it compatible?</strong> Works with Alexa, Google
                Home, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center mb-8 sm:mb-12">
          <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition text-lg font-semibold">
            Pledge Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default AlphaCampaign;
