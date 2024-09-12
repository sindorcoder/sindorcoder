import Hero from "../../components/hero/Hero"
import Project from "../../components/amazing/AmazingP"
import Contact from "../../components/contact/Contact"
const Home = () => {
  return (
     <>
     <Hero/>
     <Project end={4}/>
     <Contact/>
     </>
  )
}

export default Home