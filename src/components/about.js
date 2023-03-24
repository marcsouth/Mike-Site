import React from 'react'
import Headshot from "../components/images/about pic.jpg"

export default function About() {
  return (
    <>  
    <h2 id="about" className="text-lime-500 text-5xl mb10 font-extrabold p-4 flex w-full justify-center items-center">About</h2>

    
    <div className=' p-4  max-w-2xl mx-auto flex flex-col'>
  <img src={Headshot} className=" rounded-lg max-h-60 object-contain mb-8" alt="mike crepon picture" />

  <p className="text-lg font-semibold text-slate-300 text-center"> As a trainer, I'm all about cutting out the fluff and getting straight to the point. 
  There's so much fake information out there when it comes to fitness,
   but I believe that getting fit doesn't have to be complicated or overwhelming. 
   My approach is all about simplicity and effectiveness. I'll show you how easy personal training can be,
    and together we'll create a plan that's tailored to your unique needs and goals. With my guidance, you'll achieve real results that will last a lifetime.</p>
</div>

 


   </>
  )
}
