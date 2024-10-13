import './App.css';
import { BrowserRouter as Router, Route, Routes, createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Layout from './components/layout/layout';
import Projects from './components/Projects/Projects';
function App() {
  let routers=createHashRouter([
    {path:"/" , element:<Layout/>,children:[
      {index:true ,element:<Home/>},
      {path:'projects',element:<Projects/>},
      {path:'home',element:<Home/>},
      // {path:'*',element:<NotFound/>},
    ]
}
])
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
 
}

export default App;
