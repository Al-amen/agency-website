import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <NavBar/>
       <main className='min-h-screen'>
        <Outlet/>
       </main>

       <footer>Footer</footer>
       
    </>
  )
}

export default App
