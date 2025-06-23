import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
      <Route element= {<App/>} >
        <Route path='/' element={ <Home/> } />
        <Route path='/service' element={ <div>Services page</div> } />
        <Route path='/blog' element={ <div>Blog page</div> } />
        <Route path='/price' element={ <div>Price page</div> } />

      </Route>
      
    </Routes>
  </BrowserRouter>
)
