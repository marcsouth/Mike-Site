import React from 'react'
import Test1 from "../components/images/test1.jpg";
import Test2 from "../components/images/test2.png";
import Test3 from "../components/images/test3.jpg";
import Test4 from "../components/images/test4.jpg";
import Test5 from "../components/images/test5.webp";
import SimpleSlider from './qoutecarousel';



export default function Testimonials() {


  return (
    <>
        <h2 id="testimonials" className="text-lime-500 text-5xl mb10 my-8 font-extrabold flex w-full justify-center items-center">Testimonials</h2>

        <div className='bg-neutral-900 py-8 '>
        

       
        <div className="mx-auto max-w-2xl overflow-x-scroll scroll-snap-type-x snap-mandatory px-4">
      <div className="flex flex-row snap-center">
        <img
          src={Test1}
          alt="picture 1"
          className="w-64 h-64 mr-4 snap-start"
        />
        <img
          src={Test2}
          alt="picture 2"
          className="w-64 h-64 mr-4"
        />
        <img
          src={Test3}
          alt="picture 3"
          className="w-64 h-64 mr-4"
        />
        <img
          src={Test4}
          alt="picture 4"
          className="w-64 h-64 mr-4"
        />
        <img
          src={Test5}
          alt="picture 5"
          className="w-64 h-64 mr-4 snap-end"
        />
      </div>
      
    </div>

    <SimpleSlider />


</div>



    </>
  )
}
