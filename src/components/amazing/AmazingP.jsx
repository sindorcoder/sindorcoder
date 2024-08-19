import { Link } from "react-router-dom"
import projectData from "../../data/index"

const AmazingP = () => {

  return (
    <section className="mt-[100px]">
      <div className="w-full  p-3">
          <div className="bg-slate-50 p-2 flex items-center shadow-cm justify-center w-full max-w-[80px] md:max-w-[150px] rounded-full">
          <h2 className="text-[12px] md:text-[20px] capitalize title text-black"> project</h2>
          </div>
          <div className="grid grid-cols-1 place-items-center  md:grid-cols-3  gap-5 mt-[50px]">
            {
              projectData.slice(0, 3).map((item) => {
                return (
                  <div key={item.id} className="w-full max-w-[360px] hover:shadow-2xl hover:border-transparent p-[30px] bg-slate-100 border-slate-200 border-2 rounded-xl">
                    <h2 className="text-[20px] font-normal title text-black">{item.title}</h2>
                    <p className=" text-[12px] md:text-[14px] lg:text-[16px] text-black leading-6 text font-semibold my-[20px]">{item.text}</p>
                    <div className="flex items-center gap-2">
                    {
                      item.type.map((type) => {
                        return <> <button className="py-[4px] text-[10px] md:text-[12px] lg:text-[16px] mb-5 px-[14px] bg-slate-400 text-white text font-bold text-center  rounded-full">{type}</button> </>
                      })
                    }
                    </div>
                      <Link to={item.link}>
                    <img className="rounded-xl min-h-[250px] shadow-cm object-contain" src={item.image} alt={item.title} />
                    </Link>
                    <div className="text-center">
                    </div>
                    
                  </div>
                )
              })
            }
          </div>
          
          <div className="flex items-center justify-center w-full my-[70px]">
            <Link to="/project" className="text-black title py-2 px-5 bg-slate-50 shadow-cm flex justify-center items-center rounded-full">See More Project</Link>
              </div>          
      </div>
    </section>
  )
}

export default AmazingP