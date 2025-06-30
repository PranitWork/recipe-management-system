import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/DataContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Updaterecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const navigate = useNavigate();

  const [recipedata, setRecipedata] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  // ✅ Load recipe from context or localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recipe")) || [];
    const allData = data.length > 0 ? data : stored;

    const found = allData.find((recipe) => recipe.id === params.id);
    setRecipedata(found || null);
  }, [data, params.id]);

  // ✅ Reset form with recipe data when loaded
  useEffect(() => {
    if (recipedata) {
      reset({
        title: recipedata.title || "",
        image: recipedata.image || "",
        ingredients: recipedata.ingredients || "",
        description: recipedata.description || "",
        instructions: recipedata.instructions || "",
      });
    }
  }, [recipedata, reset]);

  // ✅ Update handler
  const updateHandler = (recipe) => {
    if (!recipedata) {
      toast.error("Recipe not found!");
      return;
    }

    const updatedRecipe = { ...recipedata, ...recipe }; // Keep same ID

    // Update both context + localStorage
    const stored = JSON.parse(localStorage.getItem("recipe")) || [];
    const updatedList = stored.map((r) =>
      r.id === recipedata.id ? updatedRecipe : r
    );

    setdata(updatedList);
    localStorage.setItem("recipe", JSON.stringify(updatedList));

    toast.success("Recipe updated!");
    navigate(`/recipes/details/${updatedRecipe.id}`);
  };

  if (!recipedata) {
    return (
      <div className="py-20 text-center text-xl font-semibold">
        Loading recipe data...
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Update Recipe
        </h2>
        <form
          onSubmit={handleSubmit(updateHandler)}
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Enter recipe title"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              {...register("image")}
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Short Description
            </label>
            <textarea
              rows="3"
              {...register("description")}
              placeholder="Enter a brief description"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ingredients
            </label>
            <textarea
              rows="4"
              {...register("ingredients")}
              placeholder="List ingredients here"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Instructions
            </label>
            <textarea
              rows="5"
              {...register("instructions")}
              placeholder="Write preparation steps here"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
          >
            Update Recipe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Updaterecipe;
