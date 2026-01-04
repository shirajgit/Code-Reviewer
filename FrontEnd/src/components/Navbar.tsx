import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky  fixed top-0 z-50 bg-black backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-green-400 font-extrabold text-xl">
          <Code2 size={22} />
          <span>CodeReviewer</span>
        </div>

        {/* LINKS (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="/" className="hover:text-green-400 transition">Home</a>
          <a href="#features" className="hover:text-green-400 transition">Features</a>
          <Link to="/editor" className="hover:text-green-400 transition">Editor</Link>
        </div>

        {/* CTA */}
        <Link
          to="/editor"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl
                     bg-gradient-to-r from-green-400 to-emerald-500
                     text-black font-bold hover:scale-105 transition"
        >
          Try Now
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-gray-300 hover:text-green-400">
          ☰
        </button>

      </div>
    </nav>
  );
}
