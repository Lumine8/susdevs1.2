import Navbar from './pages/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Mainpage from './pages/Mainpage'
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

import './App.css';

function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Mainpage/>}></Route>
            <Route path="/Blogs" element={<Blogs/>}></Route>
            <Route path="/Projects" element={<Projects/>}></Route>
            <Route path="/Contact-us" element={<Contact/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
        </Router>
    </>
  );
}

export default App;
