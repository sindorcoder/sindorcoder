import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Home from "./home/Home"
import About from "./about/About"
import Project from "./project/Project"
import Skills from "./skills/Skills"
import { useEffect } from "react"
const RouteController = () => {
     const {pathname} = useLocation()

     useEffect(() => {
       window.scrollTo(0, 0)
     }, [pathname])
 return (
  <>
  
  <Routes>
  <Route element={<Navbar/>}>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/skills" element={<Skills/>}/>
       <Route path="/project" element={<Project/>}/>
  </Route>
</Routes>
  </>
 )
}

export default RouteController