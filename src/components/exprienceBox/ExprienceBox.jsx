/* eslint-disable react/prop-types */
import line from "../../assets/icons/Line.svg"

const ExperienceBox = ({ title, coding, css3, javascript, using, adobe, creating, userInterface  }) => (
  <div>
    <div data-aos="fade-up"
     data-aos-duration="1000" className="flex items-start gap-[23px]">
    <img src={line} alt="divider" className="my-2"/>
    <div className="flex flex-col gap-2">
    <h3 className="text-lg title font-extrabold mb-2">{title}</h3>
    <p className="text-sm text">{coding}</p>
    <p className="text-sm text">{css3}</p>
    <p className="text-sm text">{javascript}</p>
    <p className="text-sm text">{using}</p>
    <p className="text-sm text">{adobe}</p>
    <p className="text-sm text">{creating}</p>
    <p className="text-sm text">{userInterface}</p>
    </div>
    </div>
  </div>
);

export default ExperienceBox;