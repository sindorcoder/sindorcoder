import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-[100px]">
      <div>
        <div className="flex items-center gap-5 justify-between">
          <span className="text-[12px] sm:text-[18px] text-[#808080]">
            Build For Portfolio By {" "}
            <Link
              className="underline text-black"
              to={"https://github.com/sindorcoder"}
            >
              Sindor
            </Link>
          </span>

          <div className="flex items-center justify-end mt-4 gap-5">
            <div className="flex flex-wrap items-center gap-2 justify-end md:gap-10">
              <Link
                to="tel:+998906027875"
                className="text text-[12px] underline sm:text-[16px]"
              >
                +998 90 602 7875
              </Link>
              <Link
                to="mailto:sindordev77@gmail.com"
                className="text text-[12px] underline sm:text-[16px]"
              >
                sindordev77@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
