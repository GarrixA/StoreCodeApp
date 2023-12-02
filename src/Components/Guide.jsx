import React from "react";
import image1 from "./Images/fashonWoman.png";
import GuideArray from "./Arrays/GuideArray";

function Guide() {
  return (
    <div className="flex sm:flex-row flex-col-reverse sm:items-start items-center justify-between bg-white mt-20">
      <div className="flex-1">
        <div className="bg-[#89CFF0] w-[12rem] h-[17rem] rounded-t-full rounded-b-full overflow-hidden flex items-center justify-center sm:mt-20 sm:ml-8 mt-10">
          <img src={image1} alt="Fashon" className="drop-shadow-xl" />
        </div>
      </div>
      <div className="flex-1 mt-14">
        <div className="m-4">
          <h1 className="sm:text-[1.5rem] font-bold text-[2rem]">Guide Your Followers</h1>
          <p className="sm:text-[.7rem] text-[.9rem] font-semibold">
            Guide Your Followers and get exclusive rewards
          </p>
        </div>
        {GuideArray.map((item, idx) => {
          return (
            <div key={idx} className="ml-6">
              <div className="flex items-center space-x-2 ">
                <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg mt-4">
                  {item.icon}
                </span>
                <span className="mt-4">{item.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Guide;
Guide;
