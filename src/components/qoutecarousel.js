import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  };
  return (



    <Slider {...settings} >

<div >

<figure className="max-w-screen-md mx-auto text-center mt-10">
    <svg aria-hidden="true" class="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <blockquote>
        <p className="text-2xl italic font-medium text-white px-4">"Mike is an incredible personal trainer who has helped me achieve my fitness goals in a short amount of time. He is knowledgeable, motivational, and dedicated to his clients. 
        I highly recommend him to anyone looking to improve their health and fitness."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
       
        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-white">Ken Carson</cite>
        </div>
    </figcaption>

    </figure>

</div>

<div>
    <figure className="max-w-screen-md mx-auto text-center mt-10">
    <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <blockquote>
        <p className="text-2xl italic font-medium text-white px-4">"Training with Mike has been a game-changer for me. His customized workouts and expert guidance have helped me get stronger and healthier than I ever thought possible.
         He is a top-notch personal trainer who genuinely cares about his clients."</p>
    </blockquote>
    <figcaption className="flex items-center justify-center mt-6 space-x-3">
       
        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-white">Michael Scott</cite>
        </div>
    </figcaption>

    </figure>
</div>

<div>

    <figure className="max-w-screen-md mx-auto text-center mt-10">
    <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <blockquote>
        <p className="text-2xl italic font-medium text-white px-4">"Mike is hands down the best personal trainer I have ever worked with. He pushes me to my limits and motivates me to reach my fitness goals. He is friendly, professional, and incredibly knowledgeable about fitness and nutrition. I would recommend him to anyone looking for a personal trainer."</p>
    </blockquote>
    <figcaption className="flex items-center justify-center mt-6 space-x-3">
       
        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-white">kobe Bryant</cite>
        </div>
    </figcaption>

    </figure>

</div>

    </Slider>

  );
}