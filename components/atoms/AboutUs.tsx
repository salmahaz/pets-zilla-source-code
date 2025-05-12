import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="bg-white relative overflow-hidden py-12 md:py-16">
      {/* Background Paws Trail on the LEFT */}
      <div className="absolute -top-12 -left-12 opacity-10 pointer-events-none select-none hidden md:block">
        <Image
          src="/dog-paws.png"
          alt="Paw trail"
          width={350}
          height={350}
          className="-rotate-[15deg] w-64 h-64 md:w-80 md:h-80"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-8 md:space-y-12 text-center">
        {/* Heading */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            About Pet Zilla
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Pet Zilla was founded on the belief that pets deserve the same love, respect, and care as any family member. From daily grooming routines to emergency support, we aim to be your trusted partner in ensuring a happy, healthy life for your furry companions.
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          {/* Mission */}
          <div className="bg-[#f4fafe] p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-semibold text-[#7ac7fb] mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              To provide exceptional, heartfelt care that enhances the lives of pets and supports their owners. We’re committed to professionalism, compassion, and building a bond with every pet we serve.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#f4fafe] p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-semibold text-[#7ac7fb] mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              To be a leader in holistic pet care, known for excellence, innovation, and heart. We envision a world where every pet feels safe, valued, and loved — and every pet owner feels supported and informed.
            </p>
          </div>

          {/* Values */}
          <div className="bg-[#f4fafe] p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-semibold text-[#7ac7fb] mb-2">
              Our Core Values
            </h3>
            <ul className="text-gray-700 text-sm md:text-base space-y-1 list-disc list-inside">
              <li>Compassion & empathy in every interaction</li>
              <li>Transparency and trust with every client</li>
              <li>Continuous learning and care innovation</li>
              <li>Respect for every animal’s unique needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
