
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect } from 'react';
import {recipecontext} from "../context/DataContext"

const SingleRecipes = () => {
  const params = useParams();
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();

  const recipedata = data.find((recipe) => params.id === recipe.id);

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id !== params.id);
    setdata(filterdata);
    localStorage.setItem("recipe", JSON.stringify(filterdata));
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  const updateRecipe = () => {
    if (!recipedata?.id) {
      toast.error("Recipe ID not found!");
      return;
    }
    navigate(`/update/details/${recipedata.id}`);
  };

  return recipedata ? (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <img
            src={recipedata.image}
            alt="Recipe Image"
            className="rounded-md w-full mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {recipedata.title}
          </h2>
          <p className="text-gray-600 mb-6">{recipedata.description}</p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Ingredients
          </h3>
          <p className="list-disc list-inside mb-6 text-gray-700">
            {recipedata.ingredients}
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Instructions
          </h3>
          <p className="list-decimal list-inside mb-6 text-gray-700">
            {recipedata.instructions}
          </p>

          <div className="flex space-x-4">
            <button
              onClick={updateRecipe}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-md transition"
            >
              Update
            </button>
            <button
              onClick={DeleteHandler}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : (
    "loading..."
  );
};


export default SingleRecipes