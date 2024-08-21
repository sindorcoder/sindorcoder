import html from "../../assets/icons/html5.svg"
import css3 from "../../assets/icons/css.svg"
import js from "../../assets/icons/javascript.svg"
import react from "../../assets/icons/react.svg"
import sass from "../../assets/icons/sass.svg"
import tailwind from "../../assets/icons/tailwind.svg"
import bootstrap from "../../assets/icons/bootstrap.svg"
import git from "../../assets/icons/git.svg"
import redux from "../../assets/icons/redux.svg"
import antd from "../../assets/icons/ant.svg"
import next from "../../assets/icons/next.svg"
import typScript from "../../assets/icons/typescript.svg"
import node from "../../assets/icons/node.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
const techs = [
  { src: css3, alt: 'CSS3' },
  { src: html, alt: 'HTML5' },
  { src: tailwind, alt: 'Tailwind CSS' },
  { src: bootstrap, alt: 'Bootstrap' },
  { src: js, alt: 'JavaScript' },
  { src: react, alt: 'React' },
  { src: sass, alt: 'Sass' },
  { src: git, alt: 'Git' },
  { src: redux, alt: 'Redux' },
  { src: typScript, alt: 'TypeScript' },
  { src: antd, alt: 'ANT DESIGN' },
  { src: next, alt: 'NEXT JS' },
  { src: node, alt: 'NODE JS' }
];
const Skills = () => {

  AOS.init({

  });
  return (
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
  )
}

export default Skills