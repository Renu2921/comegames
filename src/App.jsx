import React, { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Fallback from "./pages/Fallback"

// Lazy load pages
const Body = lazy(() => import("./pages/Body"))
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const NotFound = lazy(() => import("./pages/NotFound"))

const App = () => {
  return (
    <Suspense fallback={<Fallback/>}>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App