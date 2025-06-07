import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">🍲 Recipe Management</h1>
        <nav className="space-x-6">
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
      </div>
    </header>
  );
};

export default Navigation;
