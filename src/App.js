
import Navigation from './components/navigation';
import About from './components/about';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Services from './components/services';
import { Link } from "react-scroll";
import './App.css';

function App() {
  return (
  <>

  <Navigation />
  <div id="landing"></div>

<div className="landingpage w-screen h-screen">

  <div className="flex justify-center items-center flex-col text-center p-4">

    <h1 className='text-lime-500 text-7xl mt-40 md:mt-80 mb-10 font-extrabold  p-4 flex drop-shadow-md'>MIKE CREPON FITNESS</h1>


    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='text-l text-lime-00  text-slate-200  bg-black   border border-slate-200 p-4 mb-10 rounded-lg cursor-pointer'  > Book a Consultation today</Link>
 

  </div>

</div>

<About />

<Services />

<Testimonials />

<Contact />


  </>
  );
}

export default App;
