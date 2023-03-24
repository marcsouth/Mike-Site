import React from 'react'
import Servicepic from "../components/images/servicespic.webp"

export default function Services() {
  return (
    <>
    <h2 id="services" className="text-lime-500 text-5xl mb10 font-extrabold p-4 flex w-full justify-center items-center">Services</h2>

    <div className=' p-4  max-w-2xl mx-auto flex flex-col justify-center items-center'>
       <img src={Servicepic} className=" rounded-lg max-h-60 object-contain mb-8" alt="mike crepon picture" />

          <div className='"text-lg font-semibold text-slate-300 text-center mx-auto"'>
                 <h2 className='text-center text-xl mb-5 border-b-2 border-lime-700 inline-block'>One-on-one training sessions</h2>
                 <p className='text-center mb-5'>work with clients one-on-one to develop personalized fitness plans and provide guidance, support, and motivation during workouts.</p>
                 <h2 className='text-center text-xl mb-5 border-b-2 border-lime-700 inline-block'>Group training sessions</h2>
                 <p className='text-center mb-5'> group training sessions for clients who prefer to exercise in a social setting or want to split the cost of personal training with others.</p>
                 <h2 className='text-center text-xl mb-5 border-b-2 border-lime-700 inline-block'>Virtual training sessions</h2>
                 <p className='text-center mb-5'>virtual training sessions for clients who prefer to work out from home or live in a different location.</p>
                 <h2 className='text-center text-xl mb-5 border-b-2 border-lime-700 inline-block'>Nutritional guidance</h2>
                 <p className='text-center mb-5'>nutritional guidance to clients to help them develop healthy eating habits and optimize their fitness results.</p>
          </div>

</div>





    </>
  )
}
