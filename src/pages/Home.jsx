import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    
  {/* <!-- Hero Section --> */}
  <section className="bg-gradient-to-r from-blue-50 to-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to Your Recipe Hub</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Effortlessly create, organize, and explore your favorite recipes. Your digital cookbook awaits!
      </p>
      <NavLink to="/create" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all duration-300">
        Get Started Now
      </NavLink>
    </div>
  </section>

  {/* <!-- Features Section --> */}
  <section className="bg-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-4xl font-bold mb-12">Why Choose Recipe Management?</h3>
      <div className="grid md:grid-cols-3 gap-10 text-left">
        <div className="p-6 rounded-xl bg-gray-100 shadow-md">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Easy Recipe Creation</h4>
          <p className="text-gray-600">Add and manage your recipes through a simple, guided form with media support.</p>
        </div>
        <div className="p-6 rounded-xl bg-gray-100 shadow-md">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Instant Updates</h4>
          <p className="text-gray-600">Edit or delete any recipe instantly with our dynamic update system.</p>
        </div>
        <div className="p-6 rounded-xl bg-gray-100 shadow-md">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Organized Dashboard</h4>
          <p className="text-gray-600">View all your recipes in a clean, card-based layout for quick access.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Call to Action Section --> */}
  <section className="bg-blue-600 py-20 text-white text-center">
    <div className="container mx-auto px-6">
      <h3 className="text-4xl font-bold mb-4">Start Building Your Recipe Collection</h3>
      <p className="text-lg mb-8 max-w-xl mx-auto">Sign up and begin organizing your cooking ideas, from family favorites to culinary experiments.</p>
      <NavLink to="/create" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-300">
        Add Your First Recipe
      </NavLink>
    </div>
  </section>

  {/* <!-- Testimonials Section --> */}
 

<Footer />
    </>
  )
}

export default Home;