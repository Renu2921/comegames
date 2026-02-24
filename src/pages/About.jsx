import React from "react";

const About = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16 md:py-24 px-6 sm:px-10 lg:px-20">

      {/* 🔥 HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFD700] mb-6">
          About COME Game
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          COME Game APK is an online real cash gaming platform designed for
          players who enjoy Rummy, Casino, Slots, Sports games and exciting
          lucky events — all in one powerful application.
        </p>
      </div>

      {/* 🔥 WHAT IS COME GAME */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-8">
          What is COME Game?
        </h2>

        <div className="bg-[#111827] rounded-2xl p-8 shadow-xl border border-yellow-500/10">
          <p className="text-gray-300 mb-6 leading-relaxed">
            COME Game is an online gaming application where users can enjoy
            multiple real-money games including:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200">
            <li>🎴 Come Online Rummy</li>
            <li>🎰 Come Casino Games</li>
            <li>🎲 Come Slot Machines</li>
            <li>🏏 Come Sports Betting</li>
            <li>🎡 Come Lucky Spin & Events</li>
          </ul>

          <p className="text-gray-300 mt-6 leading-relaxed">
            The app provides smooth gameplay, quick registration,
            and fast withdrawals directly to your bank account or UPI.
          </p>
        </div>
      </div>

      {/* 🔥 KEY FEATURES */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-12">
          COME Game Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Feature 1 */}
          <div className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-yellow-500/10 hover:border-yellow-500/40 transition duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              🎮 Multiple Games in One App
            </h3>
            <p className="text-gray-300">
              Play Rummy, Casino, Slots, and Sports games without switching
              between platforms.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-yellow-500/10 hover:border-yellow-500/40 transition duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              💰 Real Cash Winning
            </h3>
            <p className="text-gray-300">
              Earn real money and withdraw your winnings anytime.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-yellow-500/10 hover:border-yellow-500/40 transition duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              ⚡ Fast Withdrawal System
            </h3>
            <p className="text-gray-300">
              Instant withdrawals via UPI, Bank Transfer, Paytm, PhonePe and
              selected crypto methods.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-yellow-500/10 hover:border-yellow-500/40 transition duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              🎁 Attractive Bonuses
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Sign-up bonus for new users</li>
              <li>• Daily login rewards</li>
              <li>• Referral & Invite bonus</li>
              <li>• Spin & Win rewards</li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-yellow-500/10 hover:border-yellow-500/40 transition duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              🔐 Safe & Secure Platform
            </h3>
            <p className="text-gray-300">
              COME Game uses secure servers and encrypted payment systems to
              protect user data and transactions.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-yellow-500/10 hover:border-yellow-500/40 transition duration-300">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              📱 Lightweight & Smooth App
            </h3>
            <p className="text-gray-300">
              The app works smoothly on low-end Android devices with fast
              loading speed and stable performance.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;