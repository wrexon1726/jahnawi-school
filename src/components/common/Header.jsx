import React from 'react'

const Header = () => {
  return (
    <div>
      {/* Navbar */}
        <nav className="flex items-center justify-between px-10 py-6 bg-[#2f5d50] text-white">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="bg-white w-6 h-6 rounded-sm"></span>
            Jahnawi-School
          </div>

          <div className="hidden md:flex gap-8 text-sm">
            <a className="bg-white text-[#2f5d50] px-4 py-1 rounded-full">
              Home
            </a>
            <a>About Us</a>
            <a>Courses</a>
            <a>Pages</a>
            <a>Contact Us</a>
          </div>

          <button className="bg-white text-[#2f5d50] px-4 py-2 rounded-full text-sm font-medium">
            +1 987 654 32 10
          </button>
        </nav>
    </div>
  )
}

export default Header