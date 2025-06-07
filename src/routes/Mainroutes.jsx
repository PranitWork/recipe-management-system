import { Route , Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Recipes from '../pages/Recipes'
import Updaterecipe from '../pages/Updaterecipe'
import SingleRecipes from '../pages/SingleRecipes'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/recipes/details/:id' element={<SingleRecipes/>} />
        <Route path='/update/details/:id' element={<Updaterecipe/>} />
        <Route path='/updaterecipe' element={<Updaterecipe/>} />
    </Routes>
  )
}

export default Mainroutes;