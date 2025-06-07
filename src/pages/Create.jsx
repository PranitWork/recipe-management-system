
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { recipecontext } from "../context/DataContext";


const Create = () => {
  const navigate = useNavigate()
  const {data, setdata}= useContext(recipecontext);
    const{register, handleSubmit, reset} = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        const copydata = [...data];
        copydata.push(recipe);
        setdata(copydata);
        toast.success("New recipe created!");
        localStorage.setItem("recipe", JSON.stringify(copydata))
        reset();
        navigate("/recipes");
    };
  return (
   
  <section className="py-20">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-4xl font-bold mb-10 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit(SubmitHandler)} className="bg-white p-8 rounded-xl shadow-md space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recipe Title</label>
          <input type="text"
        {...register("title")} 
          placeholder="Enter recipe title" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input type="url"
          {...register("image")} 
          placeholder="Enter image URL" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
          <textarea rows="3"
          {...register("description")} 
          placeholder="Enter a brief description" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients</label>
          <textarea rows="4"
          {...register("ingredients")} 
          placeholder="List ingredients here" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
          <textarea rows="5"
          {...register("instructions")} 
          placeholder="Write preparation steps here" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition">Add Recipe</button>
      </form>
    </div>
  </section>
  )
}

export default Create