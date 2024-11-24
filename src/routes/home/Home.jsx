import Hero from "../../components/hero/Hero"
import Project from "../../components/amazing/AmazingP"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
const Home = () => {
  return (
     <>
     <Hero/>
     <Project end={3}/>
     <Contact/>
     <Footer/>
     </>
  )
}

export default Home