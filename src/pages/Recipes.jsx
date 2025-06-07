import { useContext } from "react";
import { recipecontext } from "../context/DataContext";
import Recipecard from "../components/Recipecard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

 const renderrecipes = data.map((recipe) => (
        <Recipecard key={recipe.id} recipe={recipe} />
    ));



  

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">All Recipes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.length > 0 ? renderrecipes : <p className="col-span-full text-center">No recipes found</p>}
              
        </div>
      </div>
    </section>
  );
};

export default Recipes;
