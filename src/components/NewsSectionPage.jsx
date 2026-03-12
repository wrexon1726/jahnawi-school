import { ArrowRight } from "lucide-react";

const news = [
  {
    date: "Jan 04, 2025",
    title: "How can I apply for admission?",
    active: false,
  },
  {
    date: "Jan 05, 2025",
    title: "How can I apply for admission?",
    active: true,
  },
  {
    date: "Jan 06, 2025",
    title: "How can I apply for admission?",
    active: false,
  },
  {
    date: "Jan 07, 2025",
    title: "How can I apply for admission?",
    active: false,
  },
  {
    date: "Jan 08, 2025",
    title: "How can I apply for admission?",
    active: false,
  },
];

export default function NewsSectionPage() {
  return (
    <section className="bg-[#2f5d50] py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Top Header */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <span className="bg-white/20 text-sm px-4 py-1 rounded-full">
              Blog & News
            </span>

            <h2 className="text-3xl font-bold mt-4">
              News about our university
            </h2>
          </div>

          <button className="bg-white text-[#2f5d50] px-5 py-2 rounded-full text-sm">
            View All
          </button>

        </div>

        {/* News List */}
        <div className="space-y-4">

          {news.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center rounded-xl px-6 py-4 transition 
              
              ${
                item.active
                  ? "bg-white text-[#2f5d50]"
                  : "bg-[#3a6a5c] text-white"
              }`}
            >

              <div className="flex gap-6 items-center">

                <span className="text-sm opacity-80">
                  {item.date}
                </span>

                <p className="font-medium">
                  {item.title}
                </p>

              </div>

              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm
                ${
                  item.active
                    ? "bg-[#2f5d50] text-white"
                    : "bg-white/20"
                }`}
              >
                Read More
                <ArrowRight size={16} />
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
