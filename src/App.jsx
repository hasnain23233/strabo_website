import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home.'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Customers from './pages/Customers'
import StrabloForAdviser from './pages/strabloForAdviser'
import BlogArtical from './pages/blogArtical'
import InvestmentFeatures from './pages/InvestmentFeatures'
import Glossary from './pages/Glossary'
import GetStarted from './pages/GetStarted'
import Documentation from './pages/Documentation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/strabo_for_advisers' element={<StrabloForAdviser />} />
          <Route path='//blog_articals' element={< BlogArtical />} />
          <Route path='/InvestmentFeatures' element={< InvestmentFeatures />} />
          <Route path='/get-started' element={< GetStarted />} />
          <Route path='/doc' element={< Documentation />} />
          <Route path='/glossary' element={< Glossary />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
