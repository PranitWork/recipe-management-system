import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Or any icon lib you like

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
          🍲 Recipe Management
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-700 font-medium transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className="text-gray-700 hover:text-blue-700 font-medium transition"
          >
            Recipes
          </NavLink>
          <NavLink
            to="/create"
            className="text-gray-700 hover:text-blue-700 font-medium transition"
          >
            Add Recipe
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4">
          <NavLink
            to="/"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/create"
            className="block py-2 text-gray-700 hover:text-blue-700 font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Add Recipe
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
