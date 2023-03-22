export default function Navigation() {
  return (
   <nav className="flex justify-between p-4 items-center">

   <div className=" text-slate-200  text-2xl font-extrabold"> MIKE C</div>



   <ul className=" text-slate-200 text-xl hidden">

   <li className="mr-5">About</li>
   <li className="mr-5" >Services</li>
   <li>Contact</li>

   </ul>

   <button className="relative group">
        <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
            <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
            <div className="bg-white h-[1px] rounded"></div>
            <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
          </div>
        </div>
      </button>

   </nav>
  )
}
