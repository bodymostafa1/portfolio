import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Sidebar from './components/sidebar/sidebar';
function App() {
  return (
    <div className='bg-black'>
      <Router>
        <Nav />
        <div className='d-flex justify-content-between'>
          <Sidebar/>
          <div className=''>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
