import logo from "../../assets/icons/logo.svg"
const Footer = () => {
  return (
     <footer className="mt-[100px]">
          <div>
               <div className="w-full bg-[#a4a4a4] h-1 rounded-full "></div>
               <div className="mt-[10px] mb-[10px] flex items-center justify-between">
                    <img src={logo} width={90} alt="logo cites" />
                    <div className="text-end flex flex-col gap-2">
                    <p className="text-[14px] text-[#808080]">design & coding by <span className="!text-[#000]">me</span></p>
                    <span className="text-[14px] text-[#808080]">
                    Copyright © 2024. All Rights Reserved
                    </span>
                    </div>
               </div>
          </div>
     </footer>
  )
}

export default Footer