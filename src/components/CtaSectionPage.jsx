export default function CtaSectionPage() {
  return (
    <section className="py-11">
      <div className="flex justify-center pb-35">
      <div className="absolute bg-white  shadow-inner shadow-[#2f5d50] max-w-7xl w-full text-center py-16 px-8 overflow-hidden">

        {/* Left Decorative Blur */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-green-200 blur-3xl opacity-40"></div>

        {/* Right Decorative Blur */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-green-200 blur-3xl opacity-40"></div>

        {/* Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Start Your Journey <br />
          Toward a Brighter Future.
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Join a diverse, forward-thinking academic community committed
          to excellence, innovation, and global opportunity.
        </p>

        <button className="mt-8 bg-[#2f5d50] text-white px-6 py-3 rounded-full hover:bg-[#24493f] transition">
          Apply Now
        </button>

      </div> 
      </div> 
    </section>
  );
}
