/* eslint-disable react/no-unescaped-entities */
import avatarIcons from "../../assets/icons/AvatarAndIcons.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {

  AOS.init({
    
  })
  return (
    <section className="mt-[130px]">
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-[100px] justify-evenly">
        <div
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          className="w-full md:mt-[70px] max-w-[650px]"
        >
          <h1 className="title text-[40px] md:text-[85px] text-black text-center md:text-start">
            Hi, I'm Sindor
          </h1>
          <p className="text-[14px] md:text-[18px] text font-bold text-black text-center md:text-start mt-[10px] md:mt-[30px]">
            As a passionate frontend developer from Uzbekistan, I approach every
            project with enthusiasm, striving to infuse my work with creativity
            and dedication. I find joy in continuously expanding my knowledge
            and sharing it with others. Helping people is something I hold dear,
            and I always seek to make a positive impact through my skills and
            efforts.
          </p>
        </div>
        <div
          className="flex justify-center md:block "
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-delay="50"
        >
          <img
            src={avatarIcons}
            className="w-[350px] md:w-[500px]"
            alt="Avatar Icons"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;