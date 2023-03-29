
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from "react-icons/fi"
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai"


export default function Contact() {

const [popup, setPopup] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ja2xpm', 'template_shcfseo', form.current, 'SmNd-ROtCevCsaMoC')
    .then((result) => {
      console.log(result.text);
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 3000);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
};

  return (
    <>
    <div className='relative '> 


    <div className={`border border-slate-200 p-2 w-80 rounded-lg items-center bg-black ${popup ? "flex" : "hidden"} absolute top-0 right-4 transform transition-transform duration-300 translate-x-0 z-10`}>
    <FiSend size={40} color="#84CC16"/>
      <p className='text-md font-semibold leading-6 text-white text-center'> Your Message was sent successfully</p>

    
    
    
    </div>

    <h2 id="contact" className="text-lime-500 text-5xl mb10 font-extrabold p-4 flex w-full justify-center items-center mt-8 mb-4">Contact </h2>




    <p className='text-lg leading-6 text-gray-400 text-center mb-5 px-4'> Inquire today about special deals and offers</p>

    <div className='px-4'>

    <div className=' shadow-slate-100 shadow-inner bg-gradient-to-r from-white to-gray-700 rounded-xl p-0.5 max-w-md w-full mb-10  mx-auto'>


    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full bg-black rounded-xl p-4">
      <label className='text-gray-400 mb-1'>Name *</label>
      <input type="text" name="user_name"  className='mb-5 focus:border-lime-500 border-4 rounded-md' required/>
      <label className='text-gray-400 mb-1' >Email *</label>
      <input type="email" name="user_email"  className='mb-5  focus:border-lime-500 border-4 rounded-md' required/>
      <label className='text-gray-400 mb-1  '>Message *</label>
      <textarea name="message" className=' focus:border-lime-500 border-4 rounded-md' required/>
      <input type="submit" value="Send" className="text-slate-200 mt-10 border border-slate-200 p-4 mb-5 rounded-lg w-1/2 mx-auto "/>
    </form>

    </div>

    </div>

     <div className='w-full items-center flex justify-between max-w-xs mx-auto p-2'>

      <div className='border-2 border-gray-400  rounded-full p-2'>
      <a>
        <AiFillInstagram size={30} color="#fff" />
      </a>
      </div>

      <div className='border-2 border-gray-400  rounded-full p-2'>
      <a>
        <AiFillFacebook size={30} color="#fff" />
      </a>
      </div>

      <div className='border-2 border-gray-400  rounded-full p-2'>
      <a>
        <AiFillLinkedin size={30} color="#fff" />
      </a>
      </div>

 </div>

 <div className='w-full flex items-center justify-center mt-4 mb-5'> <p className='text-gray-400 text-center'>Website Design and Built by <a href='marc-v.dev'>Marc-V</a></p></div>


</div>


    </>
  )
};






