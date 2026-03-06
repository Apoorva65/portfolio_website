import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Container from '@mui/material/Container'
import { Routes,Route } from 'react-router'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {

  return (
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
  )
}

export default App
