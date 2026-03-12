import Image from "next/image";

export default function HeroSectionPage() {
  return (
      <div className="">

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-16">

          {/* Left Content */}
          <div>

            <span className=" px-4 py-2 rounded-full text-sm text-[#2f5d50] border">
              🎓 Education, Innovation, Lead
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Turn Your Ambition <br />
              into{" "}
              <span className="italic text-[#2f5d50]">
                Achievement
              </span>
            </h1>

            <p className="text-gray-500 mt-4 max-w-md">
              Empowering students with world-class education,
              innovation, and growth opportunities.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-[#2f5d50] text-white px-6 py-3 rounded-full">
                Apply Now
              </button>

              <button className="border px-6 py-3 rounded-full">
                Explore Campus
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-10">
              <div>
                <h2 className="text-3xl font-bold">99%</h2>
                <p className="text-gray-500 text-sm">
                  Our Success Rate
                </p>
              </div>

              <div className="flex items-center -space-x-2">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  className="w-8 h-8 rounded-full border"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  className="w-8 h-8 rounded-full border"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  className="w-8 h-8 rounded-full border"
                />
              </div>

              <span className="text-sm text-gray-500">
                30k+ Students
              </span>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/university.jpg"
              alt="college"
              width={650}
              height={650}
              className="rounded-3xl object-cover "
            />

            {/* Floating Card */}
            <div className="absolute bottom-5 -left-30 bg-white p-3 rounded-2xl shadow-lg">
              <img
                src="/images/students.jpg"
                className="w-48 h-32 object-cover rounded-xl"
              />
            </div>

          </div>

        </section>
      </div>
  );
}
