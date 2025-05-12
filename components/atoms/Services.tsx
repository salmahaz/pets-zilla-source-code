"use client";

import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Pet Boarding",
    description:
      "Safe, comfortable, and caring accommodations while you’re away — your pet’s second home.",
    image: "/pet-boarding.jpg",
  },
  {
    title: "Grooming",
    description:
      "Keep your pet clean, styled, and happy with our gentle, professional grooming services.",
    image: "/pet-grooming.jpg",
  },
  {
    title: "Dog Training",
    description:
      "From basic obedience to behavior correction, we help your dog grow into their best self.",
    image: "/dog-training.jpg",
  },
  {
    title: "Pet Sitting",
    description:
      "In-home companionship and care tailored to your pet's routine, while you're at work or away.",
    image: "/pet-sitting.jpg",
  },
  {
    title: "Home Visits",
    description:
      "Quick drop-ins for feeding, walks, and medication — flexible care right at your doorstep.",
    image: "/pet-vet.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Whether it’s grooming, sitting, or training — we provide loving,
          professional care designed around your pet’s needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 flex-1">
                {service.description}
              </p>
              <button className="mt-auto text-[#7ac7fb] font-semibold hover:underline text-left">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
