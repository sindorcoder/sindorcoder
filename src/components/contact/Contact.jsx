import { Link } from "react-router-dom";
import { contactData } from "../../data/index"
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
         {
          contactData.map((item, index) => {
            return (
              <Link
              key={index}
              data-aos="zoom-in"
              className="capitalize flex flex-col backdrop-blur-lg bg-white/30  bg-slate-50 p-4 rounded-lg items-center gap-3"
              to={item.link}
            >
              <img width={50} src={item.src} alt={item.alt} />
              <h2 className="text-[20px] font-bold text">{item.alt}</h2>  
            </Link>
            )
          })
         }

        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
