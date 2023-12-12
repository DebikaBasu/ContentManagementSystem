import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useEffect, useState } from "react";
import BlogTemplate from "./components/BlogTemplate";
import BusinessPortfolio from "./components/BusinessPortfolio";
import Contact from './components/Contact';
import BlogSite from './components/BlogSite';
import axios from 'axios'


function App() {

  let saveUser = localStorage.getItem("isLoggedin");
  let username = localStorage.getItem('username')
  let userId = localStorage.getItem('userId')
  
  const [isLogged, setIsLogged] = useState(saveUser);
  const [sites, setSites] = useState([]);
  const [siteId, setSiteId] = useState(0);

    useEffect(()=>{
        const fetchSite = async () => {
            const res = await axios.get(`http://localhost:3001/v1/sites/?userId=${userId}`);
            setSites(res.data.data)
            console.log(res.data.data)
        }
        if(isLogged)
          fetchSite();
    },[]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home isLogged={isLogged} setIsLogged={setIsLogged} user={username} sites={sites} setSiteId={setSiteId}></Home>,
    },
    {
      path: "/login",
      element: <LoginPage isLogged={isLogged} setIsLogged={setIsLogged}></LoginPage>,
    },
    {
      path: "/register",
      element: <RegisterPage setIsLogged={setIsLogged} user={username}></RegisterPage>,
    },
    {
      path: "/editor/blogtemplate",
      element: <BlogTemplate></BlogTemplate>,
    },
    {
      path: "/editor/businessportfolio",
      element: <BusinessPortfolio></BusinessPortfolio>,
    },
    {
      path: `/sites`,
      element: <BlogSite isLogged={isLogged} user={username} sites={sites} siteId={siteId} setSiteId={setSiteId}/>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
