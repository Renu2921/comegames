import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from './pages/Body'
import Home from './pages/Home'
import Casino from './pages/Casino'
import Bonuses from './pages/Bonuses'
import Complaints from './pages/Complaints'
import News from './pages/News'
import About from './pages/About'

const App = () => {
  return (
  
      <Routes>
      <Route path="/" element={<Body/>}>
      <Route index element={<Home/>}/>
      <Route path="/casinos" element={<Casino/>}/>
      <Route path="/bonuses" element={<Bonuses/>}/>
      <Route path="/complaints" element={<Complaints/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/about" element={<About/>}/>
      </Route>
      </Routes>
  
  )
}

export default App
