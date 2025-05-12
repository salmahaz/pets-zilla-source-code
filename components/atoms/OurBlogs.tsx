import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "5 Tips for Keeping Your Dog Healthy",
    description:
      "Discover essential tips to maintain your dog’s health and happiness year-round.",
    image: "/blogs-photo.png",
    slug: "/blogs/healthy-dog-tips",
  },
  {
    id: 2,
    title: "How to Prepare for Pet Boarding",
    description:
      "Make sure your pet has a safe and stress-free experience while you're away.",
    image: "/blogs-photo.png",
    slug: "/blogs/pet-boarding-guide",
  },
  {
    id: 3,
    title: "Signs Your Cat Needs a Vet Visit",
    description:
      "Learn how to spot warning signs early and keep your cat in top shape.",
    image: "/cat.jpg",
    slug: "/blogs/cat-vet-signs",
  },
  {
    id: 4,
    title: "Why Routine Grooming Is Essential",
    description:
      "Grooming isn't just about beauty—it’s key to your pet’s hygiene and comfort.",
    image: "/pet-grooming.jpg",
    slug: "/blogs/pet-grooming-benefits",
  },
  {
    id: 5,
    title: "Understanding Pet Anxiety & How to Help",
    description:
      "Recognize the signs of pet anxiety and how you can help calm your furry friend.",
    image: "/blogs-photo.png",
    slug: "/blogs/pet-anxiety-solutions",
  },
  {
    id: 6,
    title: "Choosing the Right Food for Your Pet",
    description:
      "A guide to selecting high-quality, nutritious food tailored to your pet’s needs.",
    image: "/blogs-photo.png",
    slug: "/blogs/pet-food-guide",
  },
];

export default function OurBlogs() {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Our Blogs
        </h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore helpful tips, guides, and expert advice to keep your pets happy,
          healthy, and well cared for. Updated regularly by our passionate pet care
          team.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {blog.description}
              </p>
              <div className="mt-auto">
                <Link
                  href={blog.slug}
                  className="text-[#7ac7fb] text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
