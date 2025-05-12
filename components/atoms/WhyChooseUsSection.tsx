import Image from "next/image";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white relative overflow-hidden py-15">
      {/* Decorative Cat Paw Fist Bump - Bottom Right */}
     {/* <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none select-none hidden md:block">
  <Image
    src="/cat-hand-removebg-preview.png"
    alt="Cat paw fist bump"
    width={320}
    height={320}
    className="object-contain"
  />
</div> */}


      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-24 relative z-10">
        {/* Left Image */}
        <div className="md:w-1/2 max-w-sm w-full">
          <Image
            src="/girl-dog-photo.jpg"
            alt="Happy woman holding a dog"
            width={450}
            height={300}
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose Pet Zilla?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Choosing the right care for your pet means finding someone you trust — and who truly cares. At Pet Zilla, we treat every pet like family, offering personalized attention, reliable service, and a commitment to joy and wellness.
          </p>

          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="text-[#7ac7fb] font-bold">•</span>
              <span>
                <strong className="text-gray-800">Experienced Pet Professionals:</strong> Our trained team knows how to handle pets of all kinds with love and care.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7ac7fb] font-bold">•</span>
              <span>
                <strong className="text-gray-800">Tailored Services:</strong> Whether it’s a daily walk or a weekend stay, we adapt to your pet’s routine and personality.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7ac7fb] font-bold">•</span>
              <span>
                <strong className="text-gray-800">Trust & Transparency:</strong> We believe in open communication and updates — because your peace of mind matters.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7ac7fb] font-bold">•</span>
              <span>
                <strong className="text-gray-800">Comfort & Safety:</strong> Our facilities and visits are designed to be stress-free, secure, and nurturing.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
