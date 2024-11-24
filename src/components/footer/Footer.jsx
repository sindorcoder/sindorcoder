import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import logo from "../../assets/icons/logo.svg";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-[100px]">
      <div>
        <div className="mt-[10px] flex items-center justify-between">
          <img src={logo} width={100} className="object-bottom" alt="logo cites" />
        <div className="flex items-center gap-10">
        <Link to="tel:+998906027875" className="text">
               +998 90 602 7875
          </Link>
          <Link to="mailto:sindordev77@gmail.com" className="text">
               sindordev77@gmail.com
          </Link>
        </div>
        </div>
        <div className="w-full bg-[#a4a4a4] h-1 rounded-full "></div>
        <div className="flex items-center justify-between">
          <span className="text-[14px] text-[#808080]">
            Copyright © 2024. All Rights Reserved
          </span>

          <div className="flex items-center justify-end mt-4 gap-5">
            <Link
              to={"https://github.com/sindorcoder"}
              className="hover:scale-125 duration-300"
              target="_black"
            >
              <AiFillGithub size={30} />
            </Link>

            <Link
              to={"https://www.linkedin.com/in/sindor-olmasov-8848222b7/"}
              className="hover:scale-125 duration-300 hover:text-blue-600"
              target="_blank"
            >
              <AiFillLinkedin size={30} />
            </Link>

            <Link
              to={"https://t.me/sindor_712"}
              className="hover:scale-125 duration-300 hover:text-blue-600"
              target="_blank"
            >
              <BsTelegram size={27} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
