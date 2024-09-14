import { techs } from "../../data"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../../components/footer/Footer";

const Skills = () => {

  AOS.init({

  });
  return (
    <>
    
    <section className="mt-[150px] text-center">
      <h1 className="text-[20px]  md:text-[50px] font-bold title text-gray-800 mb-2">My Tech Stack</h1>
      <p className="text-gray-600 text-[14px] md:text-[20px] text mb-6">Technologies that I know closely</p>
      <div className="grid mb-[150px] mt-[100px] grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20">
        {techs.map((tech, index) => (
          <img 
            data-aos="zoom-in"
            key={index} 
            src={tech.src} 
            alt={tech.alt} 
            className="w-24 h-24 mx-auto"
          />
        ))}
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Skills