import React, { useState } from "react";

const faqs = [
  {
    question: "How to Register and Start Playing?",
    answer: `
1. Open the Come Game application or website.
2. Enter your mobile number and verify using OTP.
3. Set your username and password.
4. Complete your profile details.
After registration, you can explore contests and start playing instantly.
    `
  },
  {
    question: "Is Come Game Safe and Secure?",
    answer: `
Yes. The platform provides:
• Secure login system
• Advanced data protection technology
• Transparent results
• Fair contest rules

It is designed to provide a safe and reliable real-money gaming experience.
    `
  },
  {
    question: "What is the Come Game Platform?",
    answer: `
Come Game is an online gaming platform where users can join contests,play casino and sports-based games, and win rewards based on performance.
    `
  },
  {
    question: "How can I download the Come Game App?",
    answer: `
Visit the official website, click on Download,install the application, and register to start playing.
    `
  },
  {
    question: "How do I withdraw money?",
    answer: `
• Go to the Wallet section.
• Click on Withdraw.
• Enter your bank account or UPI details.
• Submit your withdrawal request.
    `
  }
];

const ComeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#0f172a] py-20 px-6 md:px-20">
      
      <h2 className="text-4xl font-bold text-center text-[#FFD700] mb-16">
        Frequently Asked Questions
      </h2>

      <div className="max-w-6xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full bg-[#111827] rounded-xl border border-yellow-500/20 shadow-lg overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center"
            >
              <span className="text-lg md:text-xl font-semibold text-white">
                {faq.question}
              </span>

              <span className="text-[#FFD700] text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div className="px-6 pb-6 text-gray-300 leading-7 text-sm md:text-base whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComeFAQ;