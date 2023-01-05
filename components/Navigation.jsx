import React from 'react';




const Navigation = () => {
    return (
        <>
          <header className="text-white bg-transparent body-font">
  <div className="container flex flex-col flex-wrap items-center p-5 mx-auto font-lato md:flex-row">
    <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
      <a className="mr-6 hover:text-white">Cooperation</a>
      <a className="mr-6 hover:text-white">Models</a>
      <a className="mr-6 hover:text-white">Testimonials</a>
    </nav>
    <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
    <img src="assets/img/logo.png" alt="" />
    </a>
    <a href="">
        
    </a>
    <div className="inline-flex ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
      <button className="inline-flex items-center px-[50px] py-[15px] mt-4 text-base bg-transparent border rounded-none focus:outline-none hover:bg-transparent md:mt-0">Contact
      </button>
    </div>
  </div>
</header>  
        </>
    );
}

export default Navigation;
