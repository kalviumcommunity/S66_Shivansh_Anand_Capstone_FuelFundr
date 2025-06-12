import React from "react";
import ProgressBar from "./ProgressBar";

const GammaCampaign = () => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Creator Gamma: AIStudyBuddy
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-6">
            Your personalized learning coach, powered by AI.
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
            AIStudyBuddy is an AI-powered app that creates tailored study plans,
            quizzes, and flashcards for students based on their learning style,
            helping them ace exams with less stress.
          </p>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            Born at EduHack 2025, where we won first place, our team of students
            and developers built a prototype that boosted test scores by 20% for
            50 beta users. Now, we’re ready to scale.
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Our vision: Empower every student to learn smarter. Back us to
            revolutionize education!
          </p>
        </section>

        {/* Funding Progress */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Funding Progress
          </h2>
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
            <ProgressBar percentage={65} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-4">
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  $19,500
                </p>
                <p className="text-sm text-gray-400">Raised of $30,000 goal</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  250
                </p>
                <p className="text-sm text-gray-400">Backers</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">
                  10
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
              <h3 className="text-lg font-semibold text-white mb-2">$10</h3>
              <p className="text-sm text-gray-400 mb-2">
                Digital thank-you + early access to beta app.
              </p>
              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
                Pledge $10
              </button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition">
              <h3 className="text-lg font-semibold text-white mb-2">$50</h3>
              <p className="text-sm text-gray-400 mb-2">
                1-year premium subscription + exclusive study templates.
              </p>
              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
                Pledge $50
              </button>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition">
              <h3 className="text-lg font-semibold text-white mb-2">$150</h3>
              <p className="text-sm text-gray-400 mb-2">
                Lifetime premium access + name in app credits.
              </p>
              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
                Pledge $150
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
                Gamma Innovators
              </h3>
              <p className="text-sm text-gray-400">
                A team of students and developers who won EduHack 2025. With AI
                expertise and a passion for education, we’re backed by mentors
                from top edtech startups.
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
                Update #1: Beta v1 Launched
              </h3>
              <p className="text-sm text-gray-400">
                Our beta app is live with 50 users testing it! Full release
                planned for Q4 2026.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">FAQ</h3>
              <p className="text-sm text-gray-400 mb-2">
                <strong>When will it launch?</strong> Q4 2026.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Will it work offline?</strong> Limited offline features,
                full functionality online.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center mb-8 sm:mb-12">
          <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition text-lg font-semibold">
            Back This App
          </button>
        </section>
      </div>
    </div>
  );
};

export default GammaCampaign;
