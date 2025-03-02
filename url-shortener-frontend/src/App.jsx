import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import RegisterPage from './components/RegisterPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './components/LoginPage'

function App() {
  

  return (
    <>
    <Router>
    <NavBar/>
    <Toaster position='bottom-center'/>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/login' element={<LoginPage />}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
