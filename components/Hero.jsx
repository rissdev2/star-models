import React from 'react';
import Slider from './Slider';

const Hero = () => {
    return (
        <>
          <Slider />
          <section class="text-white items-center bg-transparent  body-font">
  <div class=" mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-full md:w-3/6 w-5/6 mb-10 object-cover object-center rounded absolute top-24 z-20 " alt="hero" src="assets/img/girl.png" />
    <div class="text-center lg:w-4/5 w-full absolute top-[75%] z-30">
      <h1 class="title-font sm:text-4xl lg:text-7xl text-3xl mb-8 font-thin text-white uppercase">Your reliable <span className='font-bold text-[#008CDB]'>model agency</span> </h1>
      <p class="leading-relaxed sm:text-xl lg:text-2xl text-3xl mb-8 font-lato font-normal">With experience and unparalleled service, we make your shooting or event a success.</p>
      <div class="flex items-center">
      <div className='basis-1/3'>
        <ul className='flex gap-4'>
          <li><img src="assets/img/twitter.png" alt="" /></li>
          <li><img src="assets/img/facebook.png" alt="" /></li>
          <li><img src="assets/img/pinterst.png" alt="" /></li>
          <li><img src="assets/img/insta.png" alt="" /></li>
        </ul>
      </div>
       <div className='basis-1/3'>
        <button class="inline-flex items-center text-white bg-tranparent border py-[15px] px-[50px] focus:outline-none hover:bg-transparent rounded-0 text-lg">Inquiry</button>
        {/* <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button> */}
        </div>
        <div className='flex flex-col items-end text-end basis-1/3'>
        <p>see more</p>
        <img src="assets/img/down.png" className='w-5 mr-5' alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
            
        </>
    );
}

export default Hero;
