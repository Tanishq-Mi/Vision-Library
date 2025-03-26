import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Enquiry from './pages/Enquiry'
import Navbar from './components/Navbar/Navbar'
import Price from './pages/Price'
import {BrowserRouter ,Routes,Route,} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/service" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/enquiry" element={<Enquiry/>}/>
    <Route path="/price" element={<Price/>}/>
    </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
