import About from "../../components/about/About";
// import Contact from "../../components/contact/Contact";
import Skills from "../skills/Skills";
import Navbar from "../../components/navbar/Navbar";
import Eductaion from "../../components/education/Eductaion";
const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Eductaion />
      <Skills />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
