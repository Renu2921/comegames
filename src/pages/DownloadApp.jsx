import React from "react";
import { Download, Smartphone, UserCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Enter Your Phone Number",
    desc: "Provide your mobile number to receive the official download link.",
    icon: <Smartphone size={32} />,
  },
  {
    id: 2,
    title: "Download & Install APK",
    desc: "Download the secure APK file and install it on your Android device.",
    icon: <Download size={32} />,
  },
  {
    id: 3,
    title: "Register & Start Playing",
    desc: "Sign up using the same number and explore exciting games instantly.",
    icon: <UserCheck size={32} />,
  },
];

const DownloadApp = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#111827] py-24 px-16 text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">
            Download Come Game App
          </h2>

          <p className="text-gray-400 mb-10 text-lg">
            Follow these simple steps to install and start winning instantly.
          </p>

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex gap-6 items-start bg-[#0f172a] p-6 rounded-xl border border-yellow-500/10 hover:border-[#FFD700] transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="text-[#FFD700]">
                  {step.icon}
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#FFD700] mb-2">
                    Step {step.id}: {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        <a
  href="https://web-in.comegamehub.com/en/affiliate-invited?c=5DAGYXA3&s=1"
  target="_blank"
  rel="noopener noreferrer"
  className=" mt-10 bg-gradient-to-r from-yellow-500 to-red-600 px-6 sm:px-8 py-3 rounded-full text-black font-bold text-base sm:text-lg hover:scale-105 transition duration-300 shadow-2xl inline-block text-center"
>
  Download Now
</a>
        </div>

        {/* RIGHT SIDE DESIGN CARD */}
        <div className="relative">
          <div className="bg-[#111827] p-10 rounded-3xl shadow-2xl border border-yellow-500/20">

            <h3 className="text-2xl font-semibold text-center text-[#FFD700] mb-8">
              Why Install Our App?
            </h3>

            <ul className="space-y-6 text-gray-400">
              <li className="flex items-center gap-4">
                <span className="text-[#FFD700] text-xl">✔</span>
                Exclusive App Bonuses
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#FFD700] text-xl">✔</span>
                Faster Withdrawals
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#FFD700] text-xl">✔</span>
                Secure & Encrypted Platform
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#FFD700] text-xl">✔</span>
                24/7 Gaming Access
              </li>
            </ul>

          </div>

          {/* Glow effect */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-yellow-500 opacity-10 blur-3xl rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default DownloadApp;