import React from "react";
import InterImages from "./Interactives/InterImages";

function Home() {
  return (
    <>
      <div className="items-center flex mt-10  sm:ml-0 sm:flex-row flex-col space-y-10">
        <div className="flex ">
          <div className="p-4 flex flex-col bg-[#b8c7d4] shadow-lg ml-6 Roboto rounded-[2rem] sm:w-[75%] w-[85%]">
            <div className="top flex sm:space-x-1 space-x-2">
              <button className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 rounded-full text-white font-semibold sm:text-[.6rem] sm:px-4 py-1 px-4 text-[.80rem]">
                10% OFF
              </button>
              <h3 className="mt-1 sm:text-[.8rem] sm:font-normal font-bold">Shop from Today</h3>
            </div>
            <form className="flex flex-col  w-4/5 ml-[6%]">
              <label className="text-[2.4rem] text-blue-700 text-center sm:text-[2rem] sm:leading-[2.2rem] leading-[2.5rem] sm:font-bold sm:p-x-10 my-6 Raleway">
                Shop With Storecode
              </label>
              <input
                id="input"
                required
                type="text"
                className="sm:my-4 sm:p-2 outline-none border-b-2 border-slate-400 focus:border-blue-700 transition-all duration-300 bg-[#b8c7d4] mt-8"
              />
              <label
                id="label"
                className="relative bottom-10 sm:bottom-14 left-2 pointer-events-none text-slate-600"
              >
                Enter Product Code
              </label>
              <button className="bg-gradient-to-r from-indigo-700 via-purple-800 rounded-md to-pink-500 font-semibold sm:text-xl text-white sm:mt-4 mb-4 sm:py-1 py-1">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="right mr-6">
          <InterImages />
        </div>
      </div>
    </>
  );
}

export default Home;
