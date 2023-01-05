import React from "react";

const Cooperation = () => {
  return (
    <>
      <div className="flex">
        <div className="basis-1/2">
          <div class="sticky top-[20%] mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div class="text-start flex items-center gap-7 lg:w-4/5 w-full">
              <img src="assets/img/experience.png" alt="" />
              <div>
                <h2 className="text-2xl text-white">25 years of experience</h2>
                <p className="text-lg font-thin text-white">
                  Your concerns and problems are in good hands with us.
                </p>
              </div>
            </div>
            <div class="text-start flex items-center gap-7 lg:w-4/5 w-full mt-10">
              <img src="assets/img/offer.png" alt="" />
              <div>
                <h2 className="text-2xl text-white">Wide offer</h2>
                <p className="text-lg font-thin text-white">
                  Models for e-commerce, commercials & TV, trade fairs or
                  showrooms
                </p>
              </div>
            </div>
            <div class="text-start flex items-center gap-7 lg:w-4/5 w-full mt-10">
              <img src="assets/img/carefree.png" alt="" />
              <div>
                <h2 className="text-2xl text-white">Carefree & Satisfied</h2>
                <p className="text-lg font-thin text-white">
                  We take care of everything that concerns our models.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
        <div class="mx-auto flex px-5 py-24 justify-center flex-col">
          <div className="bg-[#008CDB] px-5 py-1 text-center w-32">
            <p className="text-lg text-white ">Exemplary</p>
          </div>
          <h1 className="sm:text-4xl lg:text-7xl text-xl mb-3 lg:mb-8 font-thin text-white uppercase mt-10">Cooperation</h1>
          <img src="assets/img/pt-1.svg" className="w-4/5 mt-12" alt="" />
          <img src="assets/img/pt-2.svg" className="w-4/5 mt-12" alt="" />
          <img src="assets/img/pt-3.svg" className="w-4/5 mt-12" alt="" />
          <img src="assets/img/pt-4.svg" className="w-4/5 mt-12" alt="" />
        </div>
        </div>
      </div>
    </>
  );
};

export default Cooperation;
