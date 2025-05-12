import Image from "next/image";

const UnderHeaderSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
            Compassionate Care for Your Furry Family
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At Pet Zilla, we believe pets are more than companions — they’re family.
            Whether you need expert grooming, reliable pet sitting, or personalized
            care services, our dedicated team is here to make life easier for you and
            more joyful for your pets. Discover the convenience of trusted,
            all-in-one pet care designed with love.
          </p>
          <button className="bg-[#7ac7fb] hover:bg-[#65baf1] transition-colors text-white px-6 py-3 rounded-lg font-semibold shadow-sm">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-sm md:max-w-md">
            <Image
              src="/girl-cat.jpg"
              alt="Pet care professional with cat"
              width={450}
              height={300}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderHeaderSection;
