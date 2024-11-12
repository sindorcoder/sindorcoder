import { MdEmail } from "react-icons/md";
import hh from "../../assets/icons/letter-h.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";
import telegram from "../../assets/icons/telegram-brands-solid.svg";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {

  AOS.init({
    
  })
  return (
    <section className="mb-[150px] my-[80px]" id="contact">
      <div>
        <div className="bg-slate-50 p-2 flex items-center shadow-cm justify-center w-full max-w-[150px] md:max-w-[200px] rounded-full">
          <h2 className="text-[14px] md:text-[20px] capitalize title text-black">
            Contact Me
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-5 justify-around my-[80px]">
          <Link
            data-aos="zoom-in"
            className="capitalize flex flex-col items-center gap-3 rounded-full text-red-500"
            to="https://tashkent.hh.uz/applicant/settings?from=header_new&hhtmFromLabel=header_new&hhtmFrom=main"
          >
            <img width={50} src={hh} alt="hh" />
            <h2 className="text-[20px] font-bold text">hh</h2>
          </Link>
          <Link
            data-aos="zoom-in"
            className="capitalize flex flex-col items-center gap-3 rounded-full text-blue-600"
            to="https://www.linkedin.com/in/sindor-olmasov-8848222b7/"
          >
            <img width={50} src={linkedin} alt="linkedin" />
            <h2 className="text-[20px] font-bold text">linkedin</h2>
          </Link>
          <Link
            data-aos="zoom-in"
            className="capitalize flex flex-col items-center gap-3 rounded-full text-[#000]"
            to="https://github.com/sindorcoder"
          >
            <img width={50} src={github} alt="github" />
            <h2 className="text-[20px] font-bold text">github</h2>
          </Link>
          <Link
            data-aos="zoom-in"
            className="capitalize flex flex-col items-center gap-3 rounded-full text-[#000]"
            to="https://www.instagram.com/sindor_.7/"
          >
            <img width={50} src={instagram} alt="instagram" />
            <h2 className="text-[20px] font-bold text">instagram</h2>
          </Link>
          <Link
            data-aos="zoom-in"
            className="capitalize flex flex-col items-center gap-3 rounded-full text-[#2EA1D7]"
            to="https://t.me/sindor_712"
          >
            <img width={50} src={telegram} alt="telegram" />
            <h2 className="text-[20px] font-bold text">telegram</h2>
          </Link>
          <Link
            data-aos="zoom-in"
            className="capitalize flex flex-col items-center gap-3 rounded-full text-[#888]"
            to="mailto:sindor77@gmail.com"
          >
            <MdEmail size={50} />
            <h2 className="text-[20px]  font-bold text">GMAIL</h2>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
