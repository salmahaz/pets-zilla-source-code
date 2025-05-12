'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Ensure lucide-react is installed

const faqs = [
  {
    question: 'What services does Pet Zilla offer?',
    answer:
      'Pet Zilla offers grooming, pet sitting, home visits, boarding, and dog training services tailored to your pet’s unique needs.',
  },
  {
    question: 'How do I book a service?',
    answer:
      'You can book through our website or contact us directly via phone or email. We’ll guide you through the scheduling process.',
  },
  {
    question: 'Are your team members trained professionals?',
    answer:
      'Absolutely! Our staff are trained, experienced, and passionate about animals — ensuring safe and caring service every time.',
  },
  {
    question: 'Can I meet the sitter before booking?',
    answer:
      'Yes! We encourage a meet-and-greet to ensure comfort and compatibility for both you and your pet.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve major cities across the UAE. Contact us to confirm if we cover your area specifically.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4fafe] py-12 px-4 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Find answers to common questions about our services, bookings, and how we care for your beloved pets.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center font-medium text-gray-800"
            >
              <span className="text-base md:text-lg">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`mt-3 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40 md:max-h-60' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
