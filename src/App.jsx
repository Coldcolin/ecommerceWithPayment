import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Categories from './pages/Categories'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <div>Error</div>,
    children:[
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "categories",
        element: <Category/>
      },
      {
        path: "categories/:catName",
        element: <Categories/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },
    ]
  }
])
function App() {
  

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
