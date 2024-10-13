import { Outlet } from 'react-router-dom'
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import './layout.css'
export default function Layout() {
  return (<>
  <div>
  <Nav/>
  <div className=" main-bg">
  <Outlet></Outlet>
  </div>
  <Footer/>
  </div>
  
  </>)
}
