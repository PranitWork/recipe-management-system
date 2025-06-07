import { useEffect } from "react";
import { Link } from "react-router-dom";

const Recipecard = (props) => {
  const { id, image, title, description, chef } = props.recipe;


  return (
    <Link to={`/recipes/details/${id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
        {image ? (
          <img src={image} alt="Recipe" className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {description.slice(0, 100)}...
          </p>
          <span className="text-blue-600 font-medium hover:underline">
            View Recipe
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Recipecard;
