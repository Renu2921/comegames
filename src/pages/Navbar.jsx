
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import comeLogo from "../assets/comeLogo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ openPopup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
const location = useLocation();

  const scrollToSection = (id) => {
  if (location.pathname !== "/") {
    navigate("/", { state: { scrollTo: id } });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 80;
    const elementPosition = element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }

  setIsOpen(false);
};

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-black text-white shadow-xl border-b border-yellow-500/30">

      <div className="flex justify-between items-center px-6 sm:px-10 py-1">

        {/* Logo */}
        <button onClick={() => scrollToSection("home")}>
          <img src={comeLogo} alt="logo" className="w-40"  />
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 font-semibold text-[1.6rem]">

          <button onClick={() => {
             openPopup();
              scrollToSection("home")}} className="hover:text-yellow-400">
            Home
          </button>

          <button onClick={() => {
             openPopup();
          
            scrollToSection("games")}}
             className="hover:text-yellow-400">
            Games
          </button>

          <button onClick={() =>  {
               openPopup();
              scrollToSection("bonus")}} className="hover:text-yellow-400">
            Bonuses
          </button>

          <button onClick={() => {
               openPopup(); 
            scrollToSection("faq")} }
            className="hover:text-yellow-400">
            FAQ's
          </button>

          <Link to="/about"  onClick={openPopup} className="hover:text-yellow-400">
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#111827] px-6 pb-6  border-t border-yellow-500/20">

          <button onClick={() => 
            {openPopup();
              scrollToSection("home")}} className="w-full text-start text-lg mt-2 hover:bg-gray-500">
            Home
          </button>

          <button onClick={() => 
            {openPopup();
              scrollToSection("games")}} className="w-full text-start text-lg mt-2">
            Games
          </button>

          <button onClick={() => 
            {openPopup();
              scrollToSection("bonus")}} className="w-full text-start text-lg mt-2">
            Bonuses
          </button>

          <button onClick={() => 
            { openPopup();
              scrollToSection("faq")} } className="w-full text-start text-lg mt-2">
            FAQ's
          </button>

          <Link to="/about" onClick={() => {
            openPopup()
            setIsOpen(false)}} className="w-full mt-2 text-lg">
            Abouts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;