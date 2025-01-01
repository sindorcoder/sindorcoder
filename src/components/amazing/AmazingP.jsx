import { BiGitMerge } from "react-icons/bi"; 
import { Link } from "react-router-dom";
import projectData from "../../data/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment } from "react";
// eslint-disable-next-line react/prop-types
const AmazingP = ({ end }) => {
  AOS.init({});

  return (
    <section className="mt-[100px]">
      <div className="w-full p-3">
        <div className="grid grid-cols-1 place-items-center ease-in-out duration-300 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 mt-[50px]">
          {projectData.slice(0, end).map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                className="w-full duration-300 ease-in-out hover:border-transparent p-[20px] bg-slate-100 border-slate-200 border-2 rounded-xl"
              >
                <h2 className="text-[20px] font-normal title text-black">
                  {item.title}
                </h2>
                <p className=" text-[12px] md:text-[14px] lg:text-[16px] text-black leading-6 text font-semibold my-[20px]">
                  {item.text}
                </p>
                <div className="flex items-center gap-2">
                  {item?.type?.map((type) => {
                    return (
                      <Fragment key={type}>
                        <button className="py-[4px] text-[8px] md:text-[10px] lg:text-[14px] mb-5 px-[14px] bg-slate-400 text-white text font-bold text-center  rounded-full">
                          {type}
                        </button>
                      </Fragment>
                    );
                  })}
                </div>
                <img
                  className="rounded-xl min-h-[250px] shadow-cm object-contain"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex items-center justify-between gap-4">
                  <Link
                    to={item.link}
                    target="_blank"
                    className="mt-4 inline-block underline text-[12px] sm:text-[16px] text-nowrap"
                  >
                    #Live View
                  </Link>
                  <Link
                    to={item.source}
                    target="_blank"
                    className="mt-4 flex items-center gap-2 text-[12px] sm:text-[16px]  underline text-nowrap"
                  >
                    <BiGitMerge size={20} />
                    #Source Code
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmazingP;
