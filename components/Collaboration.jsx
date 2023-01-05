import React from 'react';

const Collaboration = () => {
    return (
        <>
         <section class="text-gray-400 bg-[#06070B] body-font">
  <div class="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 class="title-font sm:text-4xl lg:text-6xl text-xl mb-3 lg:mb-8 font-thin text-white uppercase">Interest in <span className='font-bold text-[#008CDB]'>collaboration?</span> </h1>
      <div class="flex justify-center">
      <button class="inline-flex items-center text-white bg-tranparent border py-[15px] px-[50px] focus:outline-none hover:bg-transparent rounded-0 text-lg">Inquiry</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="assets/img/girl-2.png" />
    </div>
  </div>
</section>   
        </>
    );
}

export default Collaboration;
