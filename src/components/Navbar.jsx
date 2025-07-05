import React, { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Work", "Culture", "", "News"];

  return (
    <nav className="max-w-screen-xl py-5 px-4 md:px-0 mx-auto flex items-center justify-between border-b border-zinc-100 relative z-20">
      <div className="nleft flex items-center">
        <img
          className="w-30 h-10 md:w-auto md:h-auto"
          src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg"
          alt="Logo"
        />
        <div className="hidden md:flex links gap-10 ml-8">
          {navLinks.map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-5 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1 text-white font-regular hover:text-green-400 transition-colors"
                href="#"
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.35em #00FF19" }}
                    className="inline-block w-1 h-1.5 bg-green-500 rounded-full"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      {/* Desktop Button */}
      <div className="hidden md:block">
        <Button />
      </div>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 flex flex-col items-center py-4 md:hidden animate-fade-in z-10">
          {navLinks.map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-5 bg-zinc-700 my-2"></span>
            ) : (
              <a
                key={index}
                className="text-base flex items-center gap-1 text-white font-regular py-2 hover:text-green-400 transition-colors"
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.35em #00FF19" }}
                    className="inline-block w-1 h-1.5 bg-green-500 rounded-full"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
          <div className="mt-4">
            <Button small />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;