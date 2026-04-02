import { Facebook, Instagram, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2f5d50] text-white pt-50 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Jahnawi-School
          </h2>

          <p className="text-sm text-gray-200 leading-relaxed">
            Start your journey to academic success with guidance
            from leading professionals and innovative learning.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Facebook size={18} />
            <Instagram size={18} />
            <Twitter size={18} />
            <Send size={18} />
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>

          <ul className="space-y-2 text-sm text-gray-200">
            <li>Home</li>
            <li>About us</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Blog Details</li>
          </ul>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="font-semibold mb-4">Facilities</h3>

          <ul className="space-y-2 text-sm text-gray-200">
            <li>Freshers</li>
            <li>Courses</li>
            <li>New Events</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>

          <p className="text-sm text-gray-200 mb-4">
            Get knowledge of the latest information & updates.
          </p>

          <div className="flex bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 text-black w-full outline-none"
            />

            <button className="bg-[#1f3f36] px-4">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-10 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-200">

        <p>© 2025 Wrexon. All rights reserved</p>

        <div className="flex gap-6 mt-2 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>

      </div>
    </footer>
  );
}
