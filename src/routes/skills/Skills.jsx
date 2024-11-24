import { techs } from "../../data";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer";
import { Skills as Data} from "../../components/skills/Skills";
const Skills = () => {

  AOS.init({});
  return (
    <>
      <section className="mt-[100px] text-center">
        <h1 className="text-[20px]  md:text-[50px] font-bold title text-gray-800 mb-2">
          My Tech Stack
        </h1>
        <p className="text-gray-600 text-[14px] md:text-[20px] text mb-6">
          Technologies that I know closely
        </p>
        <div className="grid mb-[150px] mt-[100px] grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-5 gap-10">
          {techs.map((tech, index) => (
           <Data tech={tech} index={index}/>
          ))}
        </div>
      </section>
      <Contact/>
      <Footer />
    </>
  );
};

export default Skills;